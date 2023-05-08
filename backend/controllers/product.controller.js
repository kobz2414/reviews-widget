const db = require("../models")
const Review = db.review

exports.addReview = async (req, res) => {
    try{
        //Get data from request object
        const { title, description, rating } = req.body
        const { productId } = req.params

        //Create a new Review object
        const review_data = new Review({
            productId: productId,
            title: title,
            description: description,
            rating: rating
        })

        //Saving the new Review object
        await review_data.save()

        //Returning the new Review object
        return res.status(200).json({ message: "Review added successfully", data: review_data })
    }catch(err){
        return res.status(400).json(
            { 
                error: "Something went wrong",
                message: err.message
            }
        )
    }
}

exports.getProductReviews = async (req,res ) => {
    try{
        //Get product ID
        const { productId } = req.params

        //Find reviews under product
        const product_reviews = await Review.find({ productId: productId })

        //Sorting product reviews based on product upvotes and downvotes
        product_reviews.sort((a,b) => {
            return (b.upvotes - b.downvotes) - (a.upvotes - a.downvotes)
        })

        //Return sorted product reviews
        return res.status(200).send(product_reviews)
    }catch(err){
        return res.status(400).json(
            { 
                error: "Something went wrong",
                message: err.message
            }
        )
    }
}

exports.getProductRatings = async (req, res) => {
    try{
        //Get new data from request object
        const { productId } = req.params

        //Find reviews under a product
        const product_reviews = await Review.find({ productId: productId })

        //Add all product review ratings
        const product_ratings = product_reviews.reduce((accumulator, current_value) => {
            return accumulator + current_value.rating
        }, 0)

        //Get the average product rating
        const average_rating = (product_ratings / product_reviews.length).toFixed(2)

        //Return average product rating
        return res.status(200).json({ ratings: average_rating})
    }catch (err){
        return res.status(400).json({error: "Something went wrong", message: err.message})
    }
}