const chai = require('chai');
const {expect, assert} = require('chai')
const chaiHttp = require('chai-http');
let app = require('../app');

chai.use(chaiHttp);

describe('Counter', () => {
    it('Responds to Query', async () => {
        let response = await chai.request(app).get('/counter/first')
        expect(response.statusCode).to.equal(200)
        expect(response.body).to.equal(1)
    }),
    it('Returns the Counter Value', async () => {
        let response = await chai.request(app).get('/counter/first')
        expect(response.body).to.equal(1)

        response = await chai.request(app).get('/counter/first')
        expect(response.body).to.equal(2)
    })
})
