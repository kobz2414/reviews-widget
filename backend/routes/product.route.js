const controller = require('../controllers/product.controller')

module.exports = (server) => {
    //Add reviews under a productID
    server.post("/api/products/:productId/reviews", controller.addReview)
    //Get all reviews under a productID
    server.get("/api/products/:productId/reviews", controller.getProductReviews)
    //Get the average product rating from reviews
    server.get("/api/products/:productId/rating", controller.getProductRatings)
}