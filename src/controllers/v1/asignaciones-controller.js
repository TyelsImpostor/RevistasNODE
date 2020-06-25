const Asignaciones = require('../../mongo/models/asignaciones');

const createAsignacion = async (req, res) => {
  try {
    const { userId, articleId } = req.body;
    const asignacion = await Asignaciones.create({
      user: userId,
      article: articleId
    });
    res.send({ status: 'OK', data: asignacion });
  } catch (e) {
    console.log('createAsignacion error:', e);
    res.status(500).send({ status: 'ERROR', data: e.message });
  }
};

const deleteAsignacion = (req, res) => {};

const getAsignaciones = async (req, res) => {
  try {
    const asignaciones = await Asignaciones.find()
      .select('userId articleId');
    res.send({ status: 'OK', data: asignaciones });
  } catch (e) {
    console.log('deleteAsignacion error:', e);
    res.status(500).send({ status: 'ERROR', data: e.message });
  }
};

const getAsignacionesByArticle = async (req, res) => {
  try {
    const asignaciones = await Asignaciones.find({
      user: req.params.userId
    });
    res.send({ status: 'OK', data: asignaciones });
  } catch (e) {
    console.log('deleteAsignacion error:', e);
    res.status(500).send({ status: 'ERROR', data: e.message });
  }
};
const getAsignacionesByUser = async (req, res) => {
  try {
    const asignaciones = await Asignaciones.find({
      article: req.params.articleId
    });
    res.send({ status: 'OK', data: asignaciones });
  } catch (e) {
    console.log('deleteAsignacion error:', e);
    res.status(500).send({ status: 'ERROR', data: e.message });
  }
};

module.exports = { createAsignacion, deleteAsignacion, getAsignaciones, 
  getAsignacionesByUser, getAsignacionesByArticle };
