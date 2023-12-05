const StoresController = require('../controllers/stores.controller');


module.exports = (app) => {
    app.get('/api/stores', StoresController.getAllStores)
    app.post('/api/stores', StoresController.createStore)
    app.get('/api/stores/:id', StoresController.getOneStore)
    app.patch('/api/stores/:id', StoresController.update)
    app.delete('/api/stores/:id', StoresController.delete)
}

