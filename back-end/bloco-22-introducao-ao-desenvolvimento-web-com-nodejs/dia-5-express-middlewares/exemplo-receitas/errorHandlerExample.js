const express = require('express');
const rescue = require('express-rescue');
const fs = require('fs/promises');

const app = express();


// NOTE - exemplo com Try/Catch
// app.get('/:fileName', async (req, res, next) => {
//   try {
//     const file = await fs.readFile(`./${req.params.fileName}`);
//     res.send(file.toString('utf-8'));
//   } catch (e) {
//     next(e);
//   }
// });

// NOTE - exemplo com Express-rescue
// app.get('/:fileNamee',
//   rescue(async (req, res) => {
//     const file = await fs.readFile(`./${req.params.fileNamee}`);
//     res.send(file.toString('utf-8'));
//   })
// );

// NOTE - Exemplo alterando o erro para um erro específico

const errorMiddleware = require('./errorMiddleware');

app.get('/:fileName', [
  rescue(async (req, res) => {
    const file = await fs.readFile(`./${req.params.fileName}`);
    res.send(file.toString('utf-8'));
  }),
  (err, req, res, next) => {
    if (err.code === 'ENOENT') {
      const newError = new Error(err.message);
      newError.code = 'file_not_found';
      newError.status = 404;
      return next(newError);
    }

    return next(err);
  },
]);

app.use(errorMiddleware);

// NOTE - Tratamento de erro comum
// app.use((err, req, res, next) => {
//   res.status(500).json({ error: err.message});
// });

app.listen(3333, () => {
  console.log('Aplicação ouvindo na porta 3333');
});
