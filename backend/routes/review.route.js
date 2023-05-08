const controller = require('../controllers/review.controller')

module.exports = (server) => {
    //Upvote a review
    server.patch("/api/reviews/:reviewId/upvote", controller.upvoteReview)
    //Downvote a review
    server.patch("/api/reviews/:reviewId/downvote", controller.downvoteReview)
}