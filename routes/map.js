const express = require('express');
const router = express.Router();

router.post('/', (req, res, next) => {
	const depStationArr = req.body.depStation.split(',');
	const arrStationArr = req.body.arrStation.split(',');
	const karutaInfoArr = req.body.karuta.split(',');
	res.render('map', {
		title: '府中かるたさんぽ',
		depName: depStationArr[0],
		depLat: depStationArr[1],
		depLng: depStationArr[2],
		arrName: arrStationArr[0],
		arrLat: arrStationArr[1],
		arrLng: arrStationArr[2],
		karutaName: karutaInfoArr[0],
		karutaLat: karutaInfoArr[1],
		karutaLng: karutaInfoArr[2]
	});
});

module.exports = router;
