db.pizzaOrders.createIndex({ size: 1 });
db.pizzaOrders.find({ size: "medium" }).explain("executionStats");
