const Solicitar_tiempos = require('../../mongo/models/solicitar_tiempos');

const createSolicitar_tiempo = async (req, res) => {
  try {
    const { userId,articleId,dias,comentario } = req.body;
    const solicitar_tiempo = await Solicitar_tiempos.create({
      user: userId,
      article: articleId,
      dias,
      comentario
    });
    res.send({ status: 'OK', data: solicitar_tiempo });
  } catch (e) {
    console.log('createSolicitar_tiempo error:', e);
    res.status(500).send({ status: 'ERROR', data: e.message });
  }
};

const deleteSolicitar_tiempo = (req, res) => {};

const getSolicitar_tiempos = async (req, res) => {
  try {
    const solicitar_tiempos = await Solicitar_tiempos.find()
      .select('dias comentario')
      .populate('user', 'nombre email data rol');
    res.send({ status: 'OK', data: solicitar_tiempos });
  } catch (e) {
    console.log('deleteSolicitar_tiempo error:', e);
    res.status(500).send({ status: 'ERROR', data: e.message });
  }
};

const getSolicitar_tiemposByArticle = async (req, res) => {
  try {
    const solicitar_tiempos = await Solicitar_tiempos.find({
      user: req.params.articleId
    });
    res.send({ status: 'OK', data: solicitar_tiempos });
  } catch (e) {
    console.log('deleteSolicitar_tiempo error:', e);
    res.status(500).send({ status: 'ERROR', data: e.message });
  }
};
const getSolicitar_tiemposByUser = async (req, res) => {
  try {
    const solicitar_tiempos = await Solicitar_tiempos.find({
      user: req.params.userId
    });
    res.send({ status: 'OK', data: solicitar_tiempos });
  } catch (e) {
    console.log('deleteSolicitar_tiempo error:', e);
    res.status(500).send({ status: 'ERROR', data: e.message });
  }
};


module.exports = { createSolicitar_tiempo, deleteSolicitar_tiempo, getSolicitar_tiempos,
                  getSolicitar_tiemposByUser, getSolicitar_tiemposByArticle };
