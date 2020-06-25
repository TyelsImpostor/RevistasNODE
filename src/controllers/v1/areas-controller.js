const Areas = require('../../mongo/models/areas');

const createArea = async (req, res) => {
  try {
    const { nombre} = req.body;
    const area = await Areas.create({
      nombre
    });
    res.send({ status: 'OK', data: area });
  } catch (e) {
    console.log('createArea error:', e);
    res.status(500).send({ status: 'ERROR', data: e.message });
  }
};

const deleteArea = (req, res) => {};

const getAreas = async (req, res) => {
  try {
    const areas = await Areas.find()
      .select('nombre')
    res.send({ status: 'OK', data: areas });
  } catch (e) {
    console.log('deleteArea error:', e);
    res.status(500).send({ status: 'ERROR', data: e.message });
  }
};

module.exports = { createArea, deleteArea, getAreas};
