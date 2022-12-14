import express from "express";
import { Order } from "../models/order.js";
const router = express.Router();

router.get('/', (req, res) => {
  // get our Orders
    Order.find() // invoke find without params will find all Orders
        .then(orders => res.json(orders))
        .catch((err) => res.status(404).json(err));
});
router.post('/', (req, res) => {
  // post our Order
  const newOrder = new Order({
    items: req.body.items,
    name: req.body.name,
    address: req.body.address,
  });
  newOrder.save()
    .then(order => res.json(order))
    .catch(err => res.status(422).json(err));

});
router.patch('/:order_id', (req, res) => {
  Order.findOneAndUpdate({_id: req.params.order_id}, {
    items: req.body.items,
    name: req.body.name,
    address: req.body.address,
    isComplete: req.body.isComplete
  })
    .then(order => res.json({id: order._id}))
    .catch(err => req.status(422).json(err));
});
router.delete('/:order_id', (req, res) => {
    const id = req.params.order_id;
    Order.findOneAndDelete(id)
        .then(order => res.json({id: order._id}))
        .catch(err => res.status(404).json(err));
});

export const orders = router;