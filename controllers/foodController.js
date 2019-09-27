import mongoose from 'mongoose'; 
import food from '../models/foodModel.js';

exports.getFood = (req, res) => {
    food.findById(req.params.foodId, (err, food) => {
        if (err) {
            res.send(err);
        }

        res.json(food);
    });
};

exports.getAllFoods = (req, res) => {
    food.find({}, (err, foods) => {
        if (err) {
            res.send(err);
        }

        res.json(foods);
    });
};

exports.createFood = (req, res) => {
    const newfood = new food(req.body);

    newfood.save((err, food) => {
        if (err) {
            res.send(err);
        }

        res.json(food);
    });
};

exports.updateFood = (req, res) => {
    food.findOneAndUpdate({
        _id: req.params.foodId
    }, req.body,
        (err, food) => {
            if (err) {
                res.send(err);
            }

            res.json(food);
        });
};

exports.deleteFood = (req, res) => {
    food.remove({
        _id: req.params.foodId
    }, (err) => {
        if (err) {
            res.send(err);
        }

        res.json({
            message: `food ${req.params.foodId} successfully deleted`
        });
    });
};
