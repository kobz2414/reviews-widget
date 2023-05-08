const controller = require('../controllers/product.controller')

module.exports = (server) => {
    server.post("/api/products/:productId/reviews", controller.addReview)
    server.get("/api/products/:productId/reviews", controller.getProductReviews)
}