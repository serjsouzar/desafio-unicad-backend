const Connection = require('../db/conn');
const chai = require('chai');
const expect = chai.expect;
const should = chai.should;
const chatHttp = require('chai-http')
const server = require('../routes/services.js')
const {checkDelivery} = require('../controllers/deliveryController.js')

chai.use(chatHttp)

describe('/ Test Collection /', function () {
  describe('Delivery validation', function () {
    it('delivery should exist', function () {
      let deliveryMock = {
        name: "test",
        originAddress: "test address",
        deliveryAddress: "test address",
        date: 2023-11-16
      }
      expect(checkDelivery(deliveryMock)).to.equal(true);
      expect(checkDelivery()).to.equal(false);
    });

    it('delivery name should exist', function () {
      let deliveryMock = {
        originAddress: "test address",
        deliveryAddress: "test address",
        date: 2023-11-16
      }      
      expect(checkDelivery(deliveryMock)).to.equal(false);
    });
    it('delivery originAddress should exist', function () {
      let deliveryMock = {
        name:"test",
        deliveryAddress: "test address",
        date: 2023-11-16
      }      
      expect(checkDelivery(deliveryMock)).to.equal(false);
    });
    it('delivery deliveryAddress should exist', function () {
      let deliveryMock = {
        name:"test",
        originAddress: "test address",
        date: 2023-11-16
      }      
      expect(checkDelivery(deliveryMock)).to.equal(false);
    });
    it('delivery date should exist', function () {
      let deliveryMock = {
        name:"test",
        originAddress: "test address",
        deliveryAddress: "test address",
      }      
      expect(checkDelivery(deliveryMock)).to.equal(false);
    })
  })

  /* describe('MongoDb connection ok', function () {
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

  }); */
});
