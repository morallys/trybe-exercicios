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

/* SECTION - Comment??rios sobre abordagens para resolu????o do createPost

 // NOTE - Abordagem com .add+NameColumn
      // Essa abordagem realiza a adi????o na coluna Category do array passado, sem a necessidade de fazer um la??o para iterar sobre cada elemento. A adi????o aconteceria em cima da 'response', que no caso ?? o momento em que o sequelize adiciona os itens da BlogPost, e com o .add+NameColumn, passando o dado que se quer inserir na tabela de jun????o. Nessa caso o sequelize utilizaria o postId que ele acabou de adicionar, e iria inserir todo o array a cada itera????o (sem a necessidade de itera????o como falei acima.). Dica passada por Rafa Reis, em monitoria. Documenta????o: https://sequelize.org/docs/v6/other-topics/query-interface/,

// await response.addCategory(categoryIds);

// ___________________________________________________________

// NOTE - Abordagem com map
    // realizando a adi????o na tabela PostsCategory de cada rodada do loop, e adicionando a transa????o para ter atomicidade na execu????o das opera????es. Resolve tudo com Promise.all no final.

// const promises = categoryIds.map((category) => PostsCategory
      //   .create({ postId, categoryId: category }, { transaction: t }));

      // await Promise.all(promises);

// ___________________________________________________________
// NOTE - Abordagem com bulkCreate
// Nessa abordagem, realiza a cria????o de um array passando objetos no formato { postId, categoryId }, que servir??o para com o bulkCreate, adicionar em PostsCategories os dados inseridos na requisi????o. Explica????o e tentativa de resolu????o junto com Willian Marques em monitoria.

// const postCategories = categoryIds.map((c) => ({ postId, categoryId: c }));

// await PostsCategory.bulkCreate(postCategories, { transaction: t });

// !SECTION */

/* SECTION - Remo????o da tabela de jun????o da response
// NOTE - Nas impress??es das respostas da getAll, getById e updatePost, existe a necessidade de inserir outras tabelas para somar com a resposta de cada BlogPost. Nesse caso ?? necess??rio inserir as informa????es do User e da Categoria, no entanto, BlogPost ?? associado a Users, por??m n??o ?? ligado diretamente a Categorias e sim existe uma liga????o por uma tabela de N:N (tabela de jun????o). Quando ?? realizada a inclus??o da tabela Category ?? retornado al??m das informa????es da Category, ?? acrescentada uma propriedade com as informa????es da tabela de jun????o. Para remover esse ap??ndice, ?? necess??rio passar o seguinte trecho no include:
// through: { attributes: [] }
// Com isso a tabela de jun????o n??o ?? inserida no retorno desejado.
// LINK - Issue do Sequelize: https://github.com/sequelize/sequelize/issues/4074#issuecomment-153054311
// LINK - Stackoverflow: https://stackoverflow.com/questions/45070595/sequelize-exclude-belongs-to-many-mapping-object

// !SECTION */