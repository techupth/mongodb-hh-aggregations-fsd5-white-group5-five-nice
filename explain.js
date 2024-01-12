db.pizzaOrders.find({ size: "medium" }).explain("executionStats");
