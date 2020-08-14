module.exports = app => {
    const tutorialarticles = require("../controllers/tutorialarticle.controller");
  
    var router = require("express").Router();

    router.post("/", tutorialarticles.create);
  
    router.get("/", tutorialarticles.findAll);
  
    router.get("/:id", tutorialarticles.findOne);
  
    router.put("/:id", tutorialarticles.update);
  
    router.delete("/:id", tutorialarticles.delete);
  
    router.delete("/", tutorialarticles.deleteAll);
  
    app.use('/api/v1/tutorialarticles', router);
};