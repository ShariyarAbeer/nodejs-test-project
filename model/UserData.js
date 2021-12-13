const mongoose = require('mongoose');


const userDataSchema = mongoose.Schema({
    "Name":{
        type: String
    },
    "ID":{
        type: String
    },
    "Title":{
        type: String
    },
},{
    timestamps:true,
}
);

module.exports = mongoose.model('userDataModel',userDataSchema);