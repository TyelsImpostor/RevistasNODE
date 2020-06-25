const Revistas_Articulos = require('../../mongo/models/revistas_articulos');

const createRevista_Articulo = async (req, res) => {
  try {
    const { revistaId, articuloId } = req.body;
    const revista_articulo = await Revistas_Articulos.create({
      revista: revistaId,
      articulo: articuloId
    });
    res.send({ status: 'OK', data: revista_articulo });
  } catch (e) {
    console.log('createRevista_Articulo error:', e);
    res.status(500).send({ status: 'ERROR', data: e.message });
  }
};

const deleteRevista_Articulo = (req, res) => {};

const getRevistas_Articulos = async (req, res) => {
  try {
    const revistas_articulos = await Revistas_Articulos.find()
      .select('revistaId articuloId');
    res.send({ status: 'OK', data: revistas_articulos });
  } catch (e) {
    console.log('deleteRevista_Articulo error:', e);
    res.status(500).send({ status: 'ERROR', data: e.message });
  }
};

const getRevistas_ArticulosByRevista = async (req, res) => {
  try {
    const revistas_articulos = await Revistas_Articulos.find({
      revista: req.params.revistaId
    });
    res.send({ status: 'OK', data: revistas_articulos });
  } catch (e) {
    console.log('deleteRevista_Articulo error:', e);
    res.status(500).send({ status: 'ERROR', data: e.message });
  }
};
const getRevistas_ArticulosByArticulo = async (req, res) => {
  try {
    const revistas_articulos = await Revistas_Articulos.find({
      articulo: req.params.articuloId
    });
    res.send({ status: 'OK', data: revistas_articulos });
  } catch (e) {
    console.log('deleteRevista_Articulo error:', e);
    res.status(500).send({ status: 'ERROR', data: e.message });
  }
};

module.exports = { createRevista_Articulo, deleteRevista_Articulo, getRevistas_Articulos, 
  getRevistas_ArticulosByArticulo, getRevistas_ArticulosByRevista };
