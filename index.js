if (process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
}

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

const db_url=process.env.DB_URL;
const db_user=process.env.DB_USER;
const db_pass=process.env.DB_PASS;
const db_data=process.env.DB_DATA;

Conn(db_url, db_user, db_pass, db_data);

app.listen(process.env.PORT || port, ()=>{
    console.log(`Servidor rodando no http://localhost/${port}`);
})
