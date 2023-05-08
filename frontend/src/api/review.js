import axios from "axios"
const API_URL = "http://localhost:4000"

export async function getRating(productId) {
    try{
        return await axios.get(`${API_URL}/api/products/${productId}/rating`)
    }catch(err){
        console.log(err.message)
    }
}

export async function addReview(productId, data) {
    try{
        return await axios.post(`${API_URL}/api/products/${productId}/reviews`, data)
    }catch(err){
        console.log(err.message)
    }
}