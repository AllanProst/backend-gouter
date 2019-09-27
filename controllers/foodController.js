import mongoose from 'mongoose'; 
import note from '../models/foodModel.js';

exports.getFood = (req, res) => {
    note.findById(req.params.foodId, (err, note) => {
        if (err) {
            res.send(err);
        }

        res.json(note);
    });
};

exports.getAllFoods = (req, res) => {
    note.find({}, (err, notes) => {
        if (err) {
            res.send(err);
        }

        res.json(notes);
    });
};

exports.createFood = (req, res) => {
    const newNote = new note(req.body);

    newNote.save((err, note) => {
        if (err) {
            res.send(err);
        }

        res.json(note);
    });
};

exports.updateFood = (req, res) => {
    note.findOneAndUpdate({
        _id: req.params.foodId
    }, req.body,
        (err, note) => {
            if (err) {
                res.send(err);
            }

            res.json(note);
        });
};

exports.deleteFood = (req, res) => {
    note.remove({
        _id: req.params.foodId
    }, (err) => {
        if (err) {
            res.send(err);
        }

        res.json({
            message: `note ${req.params.foodId} successfully deleted`
        });
    });
};
