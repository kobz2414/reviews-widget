import axios from "axios"
const API_URL = "http://localhost:4000"

export async function getReviews(productId) {
    try{
        return await axios.get(`${API_URL}/api/products/${productId}/reviews`)
    }catch(err){
        console.log(err.message)
    }
}

export async function upvoteReview(reviewId) {
    try {
        const response = await axios.patch(`${API_URL}/api/reviews/${reviewId}/upvote`)
        return response.data
    } catch (error) {
        console.log(error.message)
    }
}

export async function downvoteReview(reviewId) {
    try{
        const response = await axios.patch(`${API_URL}/api/reviews/${reviewId}/downvote`)
        return response.data
    }catch(err){
        console.log(err.message)
    }
}
