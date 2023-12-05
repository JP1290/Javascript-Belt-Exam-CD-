const mongoose = require('mongoose');


const StoresSchema = new mongoose.Schema({
    name: { type: String,
            required: [true, "There must be a name!"],
            minlength: [3, "Name must contain 3 characters!"]},
    number: { type: Number,
            required: [true, "There must be a number!"],
            validate: {
                validator: function(value){
                    return value > 0
                },
                message: "Number must be greater than 0!"
            }},
    open: { type: Boolean }
}, { timestamps: true });



module.exports = mongoose.model('Store', StoresSchema);