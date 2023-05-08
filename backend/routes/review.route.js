const controller = require('../controllers/review.controller')

module.exports = (server) => {
    server.patch("/api/reviews/:reviewId/upvote", controller.upvoteReview)
}