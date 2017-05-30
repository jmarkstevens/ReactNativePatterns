'use strict';

const express = require('express');
const router = express.Router();

const getSetData = require('./routes/GetSetData');

router.get('/getFetchData', function(req, res) {
  const getFetchDataDone = function(data){ res.send(data); };
  getSetData.getFetchData(getFetchDataDone);
});

router.post('/setFetchData', function(req, res) {
  const setFetchDataDone = function(data){ res.send(data); };
  getSetData.setFetchData(req.body, setFetchDataDone);
});

router.get('/getXMLHttpData', function(req, res) {
  const getXMLHttpDataDone = function(data){ res.send(data); };
  getSetData.getXMLHttpData(getXMLHttpDataDone);
});

router.post('/setXMLHttpData', function(req, res) {
  const setXMLHttpDataDone = function(data){ res.send(data); };
  getSetData.setXMLHttpData(req.body, setXMLHttpDataDone);
});

router.get('/getFetchThunkData', function(req, res) {
  const getFetchThunkDataDone = function(data){ res.send(data); };
  getSetData.getFetchThunkData(getFetchThunkDataDone);
});

router.post('/setFetchThunkData', function(req, res) {
  const setFetchThunkDataDone = function(data){ res.send(data); };
  getSetData.setFetchThunkData(req.body, setFetchThunkDataDone);
});

module.exports = router;
