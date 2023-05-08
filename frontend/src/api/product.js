import axios from "axios"
const API_URL = "http://localhost:4000"

export async function getReviews() {
    try{
        return await axios.get(`${API_URL}/api/products/123123/reviews`)
    }catch(err){
        console.log(err.message)
    }
}