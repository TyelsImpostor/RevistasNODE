const Areas_Revistas = require('../../mongo/models/areas_revistas');

const createArea_Revista = async (req, res) => {
  try {
    const { areaId, revistaId } = req.body;
    const area_revista = await Areas_Revistas.create({
      area: areaId,
      revista: revistaId
    });
    res.send({ status: 'OK', data: area_revista });
  } catch (e) {
    console.log('createArea_Revista error:', e);
    res.status(500).send({ status: 'ERROR', data: e.message });
  }
};

const deleteArea_Revista = (req, res) => {};

const getAreas_Revistas = async (req, res) => {
  try {
    const areas_revistas = await Areas_Revistas.find()
      .select('areaId revistaId');
    res.send({ status: 'OK', data: areas_revistas });
  } catch (e) {
    console.log('deleteArea_Revista error:', e);
    res.status(500).send({ status: 'ERROR', data: e.message });
  }
};

const getAreas_RevistasByRevista = async (req, res) => {
  try {
    const areas_revistas = await Areas_Revistas.find({
      area: req.params.areaId
    });
    res.send({ status: 'OK', data: areas_revistas });
  } catch (e) {
    console.log('deleteArea_Revista error:', e);
    res.status(500).send({ status: 'ERROR', data: e.message });
  }
};
const getAreas_RevistasByArea = async (req, res) => {
  try {
    const areas_revistas = await Areas_Revistas.find({
      revista: req.params.revistaId
    });
    res.send({ status: 'OK', data: areas_revistas });
  } catch (e) {
    console.log('deleteArea_Revista error:', e);
    res.status(500).send({ status: 'ERROR', data: e.message });
  }
};

module.exports = { createArea_Revista, deleteArea_Revista, getAreas_Revistas, 
  getAreas_RevistasByArea, getAreas_RevistasByRevista };
