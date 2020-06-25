const Solicitados = require('../../mongo/models/solicitados');

const createSolicitado = async (req, res) => {
  try {
    const { comentario, estado, userId } = req.body;
    const solicitado = await Solicitados.create({
      comentario,
      estado,
      user: userId
    });
    res.send({ status: 'OK', data: solicitado });
  } catch (e) {
    console.log('createSolicitado error:', e);
    res.status(500).send({ status: 'ERROR', data: e.message });
  }
};

const deleteSolicitado = (req, res) => {};

const getSolicitados = async (req, res) => {
  try {
    const solicitados = await Solicitados.find()
      .select('comentario estado')
      .populate('user', 'nombre email data rol');
    res.send({ status: 'OK', data: solicitados });
  } catch (e) {
    console.log('deleteSolicitado error:', e);
    res.status(500).send({ status: 'ERROR', data: e.message });
  }
};

const getSolicitadosByUser = async (req, res) => {
  try {
    const solicitados = await Solicitados.find({
      user: req.params.userId
    });
    res.send({ status: 'OK', data: solicitados });
  } catch (e) {
    console.log('deleteSolicitado error:', e);
    res.status(500).send({ status: 'ERROR', data: e.message });
  }
};

module.exports = { createSolicitado, deleteSolicitado, getSolicitados, getSolicitadosByUser };
