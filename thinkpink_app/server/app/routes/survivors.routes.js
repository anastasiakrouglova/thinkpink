module.exports = app => {
  const controller = require("../controllers/survivors.controller.js");

  app.post("/api/survivors", controller.create);
  app.get("/api/survivors", controller.findAll);
  app.get("/api/survivors/:id", controller.findOne);
  app.put("/api/survivors/:id", controller.update);
  app.delete("/api/survivors/:id", controller.delete);
};
