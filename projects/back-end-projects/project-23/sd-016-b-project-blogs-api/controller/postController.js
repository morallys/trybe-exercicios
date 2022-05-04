const { Op } = require('sequelize');
const { BlogPost, Category, PostsCategory, User, sequelize } = require('../models');

const getAll = async (req, res) => {
  //
  try {
    const response = await BlogPost.findAll({
      include: [
        { model: User, as: 'user', attributes: { exclude: ['password'] } },
        { model: Category, as: 'categories', through: { attributes: [] } },
      ],
    });

    return res.status(200).json(response);
  } catch (error) {
    return res.status(401).json({ message: error.message });
  }
};

const getById = async (req, res) => {
  //
  const { id } = req.params;

  try {
    const response = await BlogPost.findOne({
      where: { id },
      include: [
        { model: User, as: 'user', attributes: { exclude: ['password'] } },
        { model: Category, as: 'categories', through: { attributes: [] },
        },
      ],
    });

    return res.status(200).json(response);
  } catch (error) {
    return res.status(401).json({ message: error.message });
  }
};

const createPost = async (req, res) => {
  try {
    const { title, categoryIds, content } = req.body;
    const { id: userId } = req.user;

    await sequelize.transaction(async (t) => {
      const response = await BlogPost.create({ title, userId, content }, { transaction: t });
      const postId = response.dataValues.id;

      const postCategories = categoryIds.map((c) => ({ postId, categoryId: c }));

      await PostsCategory.bulkCreate(postCategories, { transaction: t });

      return res.status(201).json(response);
    });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const updatePost = async (req, res) => {
  try {
    const { title, content } = req.body;
    const { id } = req.params;

    await BlogPost.update({ title, content }, { where: { id } });

    const response = await BlogPost.findOne({
      where: { id },
      attributes: { exclude: ['id', 'published', 'updated'] },
      include: [
        { model: Category, as: 'categories', through: { attributes: [] } },
      ],
    });

    return res.status(200).json(response);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const deletePost = async (req, res) => {
  //
  try {
    const { id } = req.params;

    await BlogPost.destroy({ where: { id } });

    return res.status(204).end();
  } catch (error) {
    return res.status(401).json({ message: error.message });
  }
};

const searchPost = async (req, res) => {
  //
  try {
    const { q: searchTerm } = req.query;

    const response = await BlogPost.findAll({ where: {
      [Op.or]: [
        { title: { [Op.like]: `%${searchTerm}%` } },
        { content: { [Op.like]: `%${searchTerm}%` } },
      ],
    },
      include: [
        { model: User, as: 'user', attributes: { exclude: ['password'] } },
        { model: Category, as: 'categories', through: { attributes: [] } },
      ],
    });

    return res.status(200).json(response);
    //
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getAll,
  getById,
  createPost,
  updatePost,
  deletePost,
  searchPost,
};

/* SECTION - Commentários sobre abordagens para resolução do createPost

 // NOTE - Abordagem com .add+NameColumn
      // Essa abordagem realiza a adição na coluna Category do array passado, sem a necessidade de fazer um laço para iterar sobre cada elemento. A adição aconteceria em cima da 'response', que no caso é o momento em que o sequelize adiciona os itens da BlogPost, e com o .add+NameColumn, passando o dado que se quer inserir na tabela de junção. Nessa caso o sequelize utilizaria o postId que ele acabou de adicionar, e iria inserir todo o array a cada iteração (sem a necessidade de iteração como falei acima.). Dica passada por Rafa Reis, em monitoria. Documentação: https://sequelize.org/docs/v6/other-topics/query-interface/,

// await response.addCategory(categoryIds);

// ___________________________________________________________

// NOTE - Abordagem com map
    // realizando a adição na tabela PostsCategory de cada rodada do loop, e adicionando a transação para ter atomicidade na execução das operações. Resolve tudo com Promise.all no final.

// const promises = categoryIds.map((category) => PostsCategory
      //   .create({ postId, categoryId: category }, { transaction: t }));

      // await Promise.all(promises);

// ___________________________________________________________
// NOTE - Abordagem com bulkCreate
// Nessa abordagem, realiza a criação de um array passando objetos no formato { postId, categoryId }, que servirão para com o bulkCreate, adicionar em PostsCategories os dados inseridos na requisição. Explicação e tentativa de resolução junto com Willian Marques em monitoria.

// const postCategories = categoryIds.map((c) => ({ postId, categoryId: c }));

// await PostsCategory.bulkCreate(postCategories, { transaction: t });

// !SECTION */

/* SECTION - Remoção da tabela de junção da response
// NOTE - Nas impressões das respostas da getAll, getById e updatePost, existe a necessidade de inserir outras tabelas para somar com a resposta de cada BlogPost. Nesse caso é necessário inserir as informações do User e da Categoria, no entanto, BlogPost é associado a Users, porém não é ligado diretamente a Categorias e sim existe uma ligação por uma tabela de N:N (tabela de junção). Quando é realizada a inclusão da tabela Category é retornado além das informações da Category, é acrescentada uma propriedade com as informações da tabela de junção. Para remover esse apêndice, é necessário passar o seguinte trecho no include:
// through: { attributes: [] }
// Com isso a tabela de junção não é inserida no retorno desejado.
// LINK - Issue do Sequelize: https://github.com/sequelize/sequelize/issues/4074#issuecomment-153054311
// LINK - Stackoverflow: https://stackoverflow.com/questions/45070595/sequelize-exclude-belongs-to-many-mapping-object

// !SECTION */