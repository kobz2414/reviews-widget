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