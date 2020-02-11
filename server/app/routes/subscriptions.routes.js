module.exports = app => {
  const controller = require("../controllers/subscriptions.controller.js");

  app.post("/api/subscriptions", controller.create);
  app.get("/api/subscriptions", controller.findAll);
  app.get("/api/subscriptions/:id", controller.findOne);
  app.put("/api/subscriptions/:id", controller.update);
  app.delete("/api/subscriptions/:id", controller.delete);
};
