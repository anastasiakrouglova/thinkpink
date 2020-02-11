module.exports = app => {
  const controller = require("../controllers/races.controller.js");

  app.post("/api/races", controller.create);
  app.get("/api/races", controller.findAll);
  app.get("/api/races/:id", controller.findOne);
  app.put("/api/races/:id", controller.update);
  app.delete("/api/races/:id", controller.delete);
};
