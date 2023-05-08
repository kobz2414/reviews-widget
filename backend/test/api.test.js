const request = require('supertest')
const server = require('../server.js')

describe('/GET /reviews', () => {
    test('should return a list of reviews', async () => {
        const response = await request(server).get("/api/products/123123/reviews")
        expect(response.statusCode).toBe(200)
        expect(response.headers["content-type"]).toEqual(expect.stringContaining("json"))
    })

    test('should return product rating', async () => {
        const response = await request(server).get("/api/products/123123/rating")
        expect(response.statusCode).toBe(200)
        expect(response.headers["content-type"]).toEqual(expect.stringContaining("json"))
    })
})