module.exports = app => {
    const areas = require("../controllers/area.controller");
  
    var router = require("express").Router();

    router.post("/", areas.create);
  
    router.get("/", areas.findAll);
  
    router.get("/:id", areas.findOne);
  
    router.put("/:id", areas.update);
  
    router.delete("/:id", areas.delete);
  
    router.delete("/", areas.deleteAll);
  
    app.use('/api/v1/areas', router);
};