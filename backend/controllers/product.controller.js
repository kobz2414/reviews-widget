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