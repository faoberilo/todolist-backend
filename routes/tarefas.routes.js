const express = require('express');
const router = express.Router();

const TarefasController = require('./../controllers/tarefas.controller');
const tarefasController = new TarefasController;

router.get('/', tarefasController.getTarefas);
router.get('/:id', tarefasController.getByIdTarefa);
router.post('/add', tarefasController.addTarefa);
router.delete('/delete/:id', tarefasController.deleteTarefa);
router.put('/edit/:id', tarefasController.editTarefa);


module.exports = router;
