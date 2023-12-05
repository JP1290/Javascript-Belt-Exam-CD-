const Store = require('../models/stores.model');


module.exports.createStore = (request, response) => {
    Store.create(request.body)
        .then(store => response.json(store))
        .catch(err => response.status(400).json(err));
}

module.exports.getAllStores = (request, response) => {
    Store.find({})
        .then(stores => {
            console.log(stores)
            response.json(stores)
        })
        .catch(err => {
            console.log(err)
            response.json(err)
        })
}

module.exports.getOneStore = (request, response) => {
    Store.findOne({_id:request.params.id})
        .then(store => response.json(store))
        .catch(err => response.json(err))
}

module.exports.update = (request, response) => {
    Store.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updatedStore => response.json(updatedStore))
        .catch(err => response.json(err))
}

module.exports.delete = (request, response) => {
    Store.deleteOne({_id: request.params.id})
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}