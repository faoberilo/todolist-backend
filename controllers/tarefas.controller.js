const mongoose = require("mongoose");
const TarefasService = require("./../services/tarefas.service");
const tarefasService = new TarefasService();

class tarefasController {
  getTarefas = async (req, res) => {
    if (!req.body) {
      res.status(404).send("Nenhuma tarefa encontrada");
      return;
    }
    const tarefas = await tarefasService.findAll();
    res.send(tarefas);
  };

  getByIdTarefa = async (req, res) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      res.status(403).send("Id Invalido");
      return;
    }
    const tarefa = await tarefasService.getByIdTarefa(req.params.id);
    if (!tarefa) {
      res.status(404).send("Tarefa não encontrada");
      return;
    }
    res.status(200).send(tarefa);
  };

  addTarefa = async (req, res) => {
    if (!req.body) {
      res.status(404).send("Nenhuma tarefa encontrada");
      return;
    }
    await tarefasService
      .addTarefa(req.body)
      .then(() => {
        res.status(200).send({ message: `Tarefa adicionada com sucesso` });
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send({ message: `Erro no servidor` });
      });
  };

  deleteTarefa = async (req, res) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      res.status(403).send("Id Invalido");
      return;
    }
    const tarefa = await tarefasService.getByIdTarefa(req.params.id);
    await tarefasService
      .deleteTarefa(req.params.id, tarefa)
      .then(() => {
        res.status(200).send({ message: "Tarefa deletada com sucesso" });
      })
      .catch((err) =>
        res.status(500).send({ error: `Erro no servdor: ${err}` })
      );
  };

  editTarefa = async (req, res) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      res.status(403).send("Id Invalido");
      return;
    }
    const tarefa = req.body;
    await tarefasService.editTarefa(req.params.id, tarefa)
    .then(() => {
        res.status(200).send({ message: "Tarefa editada com sucesso" });
      })
      .catch((err) =>
        res.status(500).send({ error: `Erro no servdor: ${err}` })
      );
    }
}

module.exports = tarefasController;
