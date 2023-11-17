const Connection = require("../db/conn");
const chai = require("chai");
const expect = chai.expect;
const should = chai.should;
const chatHttp = require("chai-http");
const server = require("../routes/services.js");
const {
  checkDelivery,
  postDelivery,
} = require("../controllers/deliveryController.js");
const { Delivery: DeliveryModel } = require("../models/Delivery");

chai.use(chatHttp);

describe("/ Test Collection /", function () {
  describe("Delivery validation", function () {
    it("delivery should exist", function () {
      let deliveryMock = {
        name: "test",
        originAddress: "test address",
        deliveryAddress: "test address",
        date: 2023 - 11 - 16,
      };
      expect(checkDelivery(deliveryMock)).to.equal(true);
      expect(checkDelivery()).to.equal(false);
    });

    it("delivery name should exist", function () {
      let deliveryMock = {
        originAddress: "test address",
        deliveryAddress: "test address",
        date: 2023 - 11 - 16,
      };
      expect(checkDelivery(deliveryMock)).to.equal(false);
    });
    it("delivery originAddress should exist", function () {
      let deliveryMock = {
        name: "test",
        deliveryAddress: "test address",
        date: 2023 - 11 - 16,
      };
      expect(checkDelivery(deliveryMock)).to.equal(false);
    });
    it("delivery deliveryAddress should exist", function () {
      let deliveryMock = {
        name: "test",
        originAddress: "test address",
        date: 2023 - 11 - 16,
      };
      expect(checkDelivery(deliveryMock)).to.equal(false);
    });
    it("delivery date should exist", function () {
      let deliveryMock = {
        name: "test",
        originAddress: "test address",
        deliveryAddress: "test address",
      };
      expect(checkDelivery(deliveryMock)).to.equal(false);
    });
  });

  describe("Post validation", function () {
    it("should POST a valid delivery", function () {
      let deliveryMock = {
        name: "test",
        originAddress: "test address",
        deliveryAddress: "test address",
        date: 2023-11-16,
      };
      let res = DeliveryModel.create(deliveryMock)
        .then((res) => postDelivery(deliveryMock, res))
        .then((result) => {
          expect(result).to.be.true;
        });
    });
    it("should not POST if missing name property", function () {
      let deliveryMock = {
        originAddress: "test address",
        deliveryAddress: "test address",
        date: 2023-11-16,
      };
      let res = DeliveryModel.create(deliveryMock)
        .then((res) => postDelivery(deliveryMock, res))
        .then((result) => {
          expect(result).to.be.false;
        });
    });
    it("should not POST if missing originAddress property", function () {
      let deliveryMock = {
        name: "test",
        deliveryAddress: "test address",
        date: 2023-11-16,
      };
      let res = DeliveryModel.create(deliveryMock)
        .then((res) => postDelivery(deliveryMock, res))
        .then((result) => {
          expect(result).to.be.false;
        });
    });
    it("should not POST if missing deliveryAddress property", function () {
      let deliveryMock = {
        name: "test",
        originAddress: "test address",
        date: 2023-11-16,
      };
      let res = DeliveryModel.create(deliveryMock)
        .then((res) => postDelivery(deliveryMock, res))
        .then((result) => {
          expect(result).to.be.false;
        });
    });
    it("should not POST if missing date property", function () {
      let deliveryMock = {
        name: "test",
        originAddress: "test address",
        deliveryAddress: "test address"
      };
      let res = DeliveryModel.create(deliveryMock)
        .then((res) => postDelivery(deliveryMock, res))
        .then((result) => {
          expect(result).to.be.false;
        });
    });
  });
});
