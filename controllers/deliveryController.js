const { Delivery: DeliveryModel } = require("../models/Delivery");

const deliveryController = {
  create: async (req, res) => {
    try {
      const newDelivery = {
        name: req.body.name,
        originAddress: req.body.originAddress,
        deliveryAddress: req.body.deliveryAddress,
        date: req.body.date
      };

      const response = await DeliveryModel.create(newDelivery);
      res.status(201).json({ response, msg: "Entrega criada com sucesso" });
    } catch (error) {
      console.log("Error", error);
    }
  },

  getAll: async (req, res) => {
    try {
      const delivery = await DeliveryModel.find();

      res.status(200).json({ delivery });
    } catch (error) {
      console.log("Error", error);
    }
  },
};

module.exports = deliveryController;