import notebook from '../controllers/foodController';

export default (app) => {
    app.route('/food')
        .get(notebook.getAllFoods)
        .post(notebook.createFood);

    app.route('/food/:foodId')
        .get(notebook.getFood)
        .put(notebook.updateFood)
        .delete(notebook.deleteFood);
};