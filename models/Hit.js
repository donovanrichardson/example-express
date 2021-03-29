const mongoose = require('mongoose')

const HitSchema = new mongoose.Schema({
    time: {
        type: Date,
        default: Date.now
    }
})

const Hit = mongoose.model("Hit", HitSchema);

module.exports = Hit;