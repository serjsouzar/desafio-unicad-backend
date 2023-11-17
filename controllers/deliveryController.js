const { error } = require("template/lib/utils");
const { Delivery: DeliveryModel } = require("../models/Delivery");

const deliveryController = {
  create: async (req, res) => {
    try {
      const newDelivery = {
        name: req.body.name,
        originAddress: req.body.originAddress,
        deliveryAddress: req.body.deliveryAddress,
        date: req.body.date,
      };

      if (!checkDelivery(newDelivery)) throw error;

      const response = await DeliveryModel.create(newDelivery);
      console.log(response);
      res.status(201).json({ response, msg: "Entrega criada com sucesso" });
    } catch (error) {
      res.status(500).json({ response, msg: "Erro na criação da entrega" });
    }
  },

  getAll: async (req, res) => {
    try {
      const delivery = await DeliveryModel.find();

      res.status(200).json({ delivery }).end();
    } catch (error) {
      console.log("Error", error);
    }
  },
};

function postDelivery(req) {
  //validar a requisição
  if (!checkDelivery(req)) throw error;
  //tentar salvar a requisição na api
  //verificar o retorno da api
  //retornar sucesso
}

function checkDelivery(deliveryItem) {
  if (!deliveryItem) {
    return false;
  }
  if (
    deliveryItem.name === null ||
    deliveryItem.name === undefined ||
    deliveryItem.name === ""
  ) {
    return false;
  }
  if (
    deliveryItem.originAddress === null ||
    deliveryItem.originAddress === undefined ||
    deliveryItem.originAddress === ""
  ) {
    return false;
  }
  if (
    deliveryItem.deliveryAddress === null ||
    deliveryItem.deliveryAddress === undefined ||
    deliveryItem.deliveryAddress === ""
  ) {
    return false;
  }
  if (
    deliveryItem.date === null ||
    deliveryItem.date === undefined ||
    deliveryItem.date === ""
  ) {
    return false;
  }
  return true;
}

module.exports = {
  deliveryController: deliveryController,
  checkDelivery: checkDelivery,
};
