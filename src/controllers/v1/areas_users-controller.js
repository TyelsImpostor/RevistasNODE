const Areas_Users = require('../../mongo/models/areas_users');

const createArea_User = async (req, res) => {
  try {
    const { areaId, userId } = req.body;
    const area_user = await Areas_Users.create({
      area: areaId,
      user: userId
    });
    res.send({ status: 'OK', data: area_user });
  } catch (e) {
    console.log('createArea_User error:', e);
    res.status(500).send({ status: 'ERROR', data: e.message });
  }
};

const deleteArea_User = (req, res) => {};

const getAreas_Users = async (req, res) => {
  try {
    const areas_users = await Areas_Users.find()
      .select('areaId userId');
    res.send({ status: 'OK', data: areas_users });
  } catch (e) {
    console.log('deleteArea_User error:', e);
    res.status(500).send({ status: 'ERROR', data: e.message });
  }
};

const getAreas_UsersByUser = async (req, res) => {
  try {
    const areas_users = await Areas_Users.find({
      area: req.params.areaId
    });
    res.send({ status: 'OK', data: areas_users });
  } catch (e) {
    console.log('deleteArea_User error:', e);
    res.status(500).send({ status: 'ERROR', data: e.message });
  }
};
const getAreas_UsersByArea = async (req, res) => {
  try {
    const areas_users = await Areas_Users.find({
      user: req.params.userId
    });
    res.send({ status: 'OK', data: areas_users });
  } catch (e) {
    console.log('deleteArea_User error:', e);
    res.status(500).send({ status: 'ERROR', data: e.message });
  }
};

module.exports = { createArea_User, deleteArea_User, getAreas_Users, 
  getAreas_UsersByArea, getAreas_UsersByUser };
