const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    // username: { type: String, unique: true, required: true },
    
    // firstName: { type: String, required: true },
    // lastName: { type: String, required: true },
    phone: { type: String, required: true },
    hash: { type: String, required: true },
});
// Time created can be written in other way (clean code)

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('User', schema);