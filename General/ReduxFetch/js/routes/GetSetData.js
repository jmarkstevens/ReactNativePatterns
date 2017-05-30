'use strict';

const fs = require('fs');

const rootDataPath = './data';

module.exports.getFetchData = function(doneCallBack) {
  const filePath = rootDataPath + '/fetch.json';
  const jsonReadCallBack = function(err, data){
    if (err) doneCallBack('Data readFile error ' + filePath);
    else {
      const jsonData = JSON.parse(data.toString());
      doneCallBack(jsonData);
    }
  };
  fs.readFile(filePath, jsonReadCallBack);
};

module.exports.setFetchData = function(data, doneCallBack) {
  const filePath = rootDataPath + '/fetch.json';
  const writeFileCallBack = function (err) {
    if (err) console.log('error saving Data.json file ');
    doneCallBack({setResponse: 'ok'});
  };
  fs.writeFile(filePath, JSON.stringify(data, null, 2), writeFileCallBack);
};

module.exports.getFetchThunkData = function(doneCallBack) {
  const filePath = rootDataPath + '/thunk.json';
  const jsonReadCallBack = function(err, data){
    if (err) doneCallBack('Data readFile error ' + filePath);
    else {
      const jsonData = JSON.parse(data.toString());
      doneCallBack(jsonData);
    }
  };
  fs.readFile(filePath, jsonReadCallBack);
};

module.exports.setFetchThunkData = function(data, doneCallBack) {
  const filePath = rootDataPath + '/thunk.json';
  const writeFileCallBack = function (err) {
    if (err) console.log('error saving Data.json file ');
    doneCallBack({setResponse: 'ok'});
  };
  fs.writeFile(filePath, JSON.stringify(data, null, 2), writeFileCallBack);
};

module.exports.getXMLHttpData = function(doneCallBack) {
  const filePath = rootDataPath + '/xmlhttp.json';
  const jsonReadCallBack = function(err, data){
    if (err) doneCallBack('Data readFile error ' + filePath);
    else {
      const jsonData = JSON.parse(data.toString());
      doneCallBack(jsonData);
    }
  };
  fs.readFile(filePath, jsonReadCallBack);
};

module.exports.setXMLHttpData = function(data, doneCallBack) {
  const filePath = rootDataPath + '/xmlhttp.json';
  const writeFileCallBack = function (err) {
    if (err) console.log('error saving Data.json file ');
    doneCallBack({setResponse: 'ok'});
  };
  fs.writeFile(filePath, JSON.stringify(data, null, 2), writeFileCallBack);
};
