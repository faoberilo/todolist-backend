const express =  require('express');
const cors = require('cors');
const Conn = require('./conn/conn');
const app = express();
const port = 3001;
const Tarefa = require('./models/tarefa');
const tarefasRouter = require('./routes/tarefas.routes')


app.use(express.json());
app.use(cors());
app.options("*", cors()); 
app.use('/tarefas', tarefasRouter);


Conn();
app.listen(port, ()=>{
    console.log(`Servidor rodando no http://localhost/${port}`);
})
