const db = require('../models')
const Review = db.review

exports.upvoteReview = async () => {
    try{
        //Get new data from request object
        const { reviewId } = req.params

        //Find and increment review upvote count
        await Review.updateOne({ _id: reviewId }, { $inc: { upvotes: 1 } })

        return res.status(200).json({ error: "Successfully upvoted" })
    }catch (err){
        return res.status(400).json({error: "Something went wrong", message: err.message})
    }
}

exports.downvoteReview = async () => {
    try{
        //Get new data from request object
        const { reviewId } = req.params

        //Find and increment review upvote count
        await Review.updateOne({ _id: reviewId }, { $inc: { downvotes: 1 } })

        return res.status(200).json({ error: "Successfully downvotes" })
    }catch (err){
        return res.status(400).json({error: "Something went wrong", message: err.message})
    }
}