const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const DeveloperSchema = new mongoose.Schema({
    Username: {
        type: String,
        Default: ""
    },
    Password: {
        type: String,
        Default: ""
    },
    Position: {
        type: String,
        Default: ""
    }
})

DeveloperSchema.methods.generateHash = function(password){
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};
DeveloperSchema.methods.validPassword = function(password){
    return bcrypt.compare(password, this.password);
};
module.exports = mongoose.model("Developer", DeveloperSchema)