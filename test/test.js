const Delivery = require('../controllers/deliveryController.js')
const Connection = require('../db/conn');
const chai = require('chai');
const expect = chai.expect;
const should = chai.should;
const chatHttp = require('chai-http')
const server = require('../routes/services.js')

chai.use(chatHttp)

 before((done) => {
  Delivery.deleteAll({}, function(err) {});
  done();
})

after((done) => {
  Delivery.deleteAll({}, function(err) {});
  done();
})

describe('/ Test Collection /', function () {
  describe('MongoDb connection ok', function () {
    it('should connection to MongoDB work', function () {
      Connection() === true ? true : false
    });

    it('should verify that GET route is working', function () {
      chai.request(server)
      .get('/deliveries')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.a('array')
        done()
      })
    })

    it('should POST a valid delivery', function () {
      let delivery = {
        name: "Test",
        originAddress: "Test Address",
        deliveryAddress: "Test Address",
        date: 2023-11-16,
      }
      chai.request(server)
      .post('/deliveries')
      .send(delivery)
      .end((err, res) => {
        res.should.have.status(201);        
        done()
      });
    })

  });
});
