module.exports = app => {
  const controller = require("../controllers/races.controller");

  app.post("/api/races", controller.create);
  app.get("/api/races", controller.findAll);
  app.get("/api/races/:raceId", controller.findOne);
  app.put("/api/races/:raceId", controller.update);
  app.delete("/api/races/:raceId", controller.delete);
};
