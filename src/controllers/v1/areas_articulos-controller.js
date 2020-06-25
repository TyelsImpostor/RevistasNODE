const Areas_Articulos = require('../../mongo/models/areas_articulos');

const createArea_Articulo = async (req, res) => {
  try {
    const { areaId, articleId } = req.body;
    const area_articulo = await Areas_Articulos.create({
      area: areaId,
      article: articleId
    });
    res.send({ status: 'OK', data: area_articulo });
  } catch (e) {
    console.log('createArea_Articulo error:', e);
    res.status(500).send({ status: 'ERROR', data: e.message });
  }
};

const deleteArea_Articulo = (req, res) => {};

const getAreas_Articulos = async (req, res) => {
  try {
    const areas_articulos = await Areas_Articulos.find()
      .select('areaId articleId');
    res.send({ status: 'OK', data: areas_articulos });
  } catch (e) {
    console.log('deleteArea_Articulo error:', e);
    res.status(500).send({ status: 'ERROR', data: e.message });
  }
};

const getAreas_ArticulosByArticulo = async (req, res) => {
  try {
    const areas_articulos = await Areas_Articulos.find({
      area: req.params.areaId
    });
    res.send({ status: 'OK', data: areas_articulos });
  } catch (e) {
    console.log('deleteArea_Articulo error:', e);
    res.status(500).send({ status: 'ERROR', data: e.message });
  }
};
const getAreas_ArticulosByArea = async (req, res) => {
  try {
    const areas_articulos = await Areas_Articulos.find({
      articulo: req.params.articuloId
    });
    res.send({ status: 'OK', data: areas_articulos });
  } catch (e) {
    console.log('deleteArea_Articulo error:', e);
    res.status(500).send({ status: 'ERROR', data: e.message });
  }
};

module.exports = { createArea_Articulo, deleteArea_Articulo, getAreas_Articulos, 
  getAreas_ArticulosByArea, getAreas_ArticulosByArticulo };
