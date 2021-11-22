const Tarefa = require ('.././models/tarefa');

class tarefaService {
    findAll = async ()=> await Tarefa.find();
    getByIdTarefa = async (id)=> await Tarefa.findById(id);
    addTarefa = async (tarefa)=> await Tarefa.create(tarefa);
    deleteTarefa = async (id,tarefa)=> await Tarefa.findByIdAndDelete(id,tarefa);
    editTarefa = async (id,tarefa)=>await Tarefa.findByIdAndUpdate(id,tarefa,{new:true});
};

module.exports = tarefaService;