import foodbook from '../controllers/foodController';

export default (app) => {
    app.route('/food')
        .get(foodbook.getAllFoods)
        .post(foodbook.createFood);

    app.route('/food/:foodId')
        .get(foodbook.getFood)
        .put(foodbook.updateFood)
        .delete(foodbook.deleteFood);
};