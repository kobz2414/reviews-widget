const controller = require('../controllers/product.controller')

module.exports = (server) => {
    server.post("/api/products/:productId/reviews", controller.addReview)
}