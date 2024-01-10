const express = require('express');

const router = express.Router();

const tasksController = require('./controllers/tasksController');
const tasksMiddlemare = require('./middlewares/tasksMiddleware')

router.get('/tasks', tasksController.getAll);
router.post('/tasks', tasksMiddlemare.validateFieldTitle, tasksController.createTask);
router.delete('/tasks/:id', tasksController.deleteTask);
router.put('/tasks/:id', 
tasksMiddlemare.validateFieldTitle, 
tasksMiddlemare.validateFieldStatus, 
tasksController.updateTask,
);

module.exports = router;