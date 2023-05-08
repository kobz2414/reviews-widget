const mongoose = require("mongoose")

const Review  = mongoose.model(
    "Review", 
    new mongoose.Schema({
        productId: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true,
            default: ""
        },
        description: {
            type: String,
            required: true,
            default: ""
        },
        rating: {
            type: Number,
            required: true,
            default: 0
        },
        upvotes: {
            type: Number,
            default: 0
        },
        downvotes: {
            type: Number,
            default: 0
        }
    },
    {timestamps: true}
    )
)

module.exports = Review