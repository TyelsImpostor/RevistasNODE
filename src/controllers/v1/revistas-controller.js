const Revistas = require('../../mongo/models/revistas');

const createRevista = async (req, res) => {
  try {
    const { titulo, portada, descripcion } = req.body;
    const revista = await Revistas.create({
      titulo, 
      portada,
       descripcion
    });
    res.send({ status: 'OK', data: revista });
  } catch (e) {
    console.log('createRevista error:', e);
    res.status(500).send({ status: 'ERROR', data: e.message });
  }
};

const deleteRevista = (req, res) => {};

const getRevistas = async (req, res) => {
  try {
    const revistas = await Revistas.find()
      .select('titulo, portada, descripcion')
    res.send({ status: 'OK', data: revistas });
  } catch (e) {
    console.log('deleteRevista error:', e);
    res.status(500).send({ status: 'ERROR', data: e.message });
  }
};

const getRevistasByUser = async (req, res) => {
  try {
    const revistas = await Revistas.find({
      user: req.params.userId
    });
    res.send({ status: 'OK', data: revistas });
  } catch (e) {
    console.log('deleteRevista error:', e);
    res.status(500).send({ status: 'ERROR', data: e.message });
  }
};

module.exports = { createRevista, deleteRevista, getRevistas, getRevistasByUser };
