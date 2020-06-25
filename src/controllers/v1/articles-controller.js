const Articles = require('../../mongo/models/articles');

const createArticle = async (req, res) => {
  try {
    const { titulo, estado, documento, comentario, descripcion, autores, publicado,
      revision, tiempo_revision, userId } = req.body;
    const article = await Articles.create({
      titulo,
      estado,
      documento,
      comentario,
      descripcion,
      autores,
      publicado,
      revision,
      tiempo_revision,
      user: userId
    });
    res.send({ status: 'OK', data: article });
  } catch (e) {
    console.log('createArticle error:', e);
    res.status(500).send({ status: 'ERROR', data: e.message });
  }
};

const deleteArticle = (req, res) => {};

const getArticles = async (req, res) => {
  try {
    const articles = await Articles.find()
      .select('titulo estado documento revision')
      .populate('user', 'nombre email data rol');
    res.send({ status: 'OK', data: articles });
  } catch (e) {
    console.log('deleteArticle error:', e);
    res.status(500).send({ status: 'ERROR', data: e.message });
  }
};

const getArticlesByUser = async (req, res) => {
  try {
    const articles = await Articles.find({
      user: req.params.userId
    });
    res.send({ status: 'OK', data: articles });
  } catch (e) {
    console.log('deleteArticle error:', e);
    res.status(500).send({ status: 'ERROR', data: e.message });
  }
};

module.exports = { createArticle, deleteArticle, getArticles, getArticlesByUser };
