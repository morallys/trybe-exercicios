const express = require('express');

const app = express();

const employeeRoutes = require('./src/routes/employeeRoutes');
const userBooksRoutes = require('./src/routes/usersBooksRoutes');

app.use('/employees', employeeRoutes);
app.use('/usersbooks', userBooksRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));

module.exports = app;