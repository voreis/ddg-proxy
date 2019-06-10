const fs = require('fs');
const config = require('../config/config');
const lineReader = require('line-reader');

const saveSearchHistory = (term, callBack) => {
    if (config.saveHistory) {
        var stream = fs.createWriteStream(config.fileName, { flags: 'a' });
        var date = new Date().toISOString();
        stream.write(JSON.stringify({ term: term, date: date }) + "\n");
        stream.end();

        return callBack({ error: false });
    }
}

module.exports.saveSearch = saveSearchHistory;

const getSearchHistory = (callBack) => {
    let array = [];

    lineReader.eachLine(config.fileName, function (line, last) {
        var data = JSON.parse(line);
        array.push({ term: data.term, date: data.date });
        if(last){
            callBack({ data: array });
        }
    });
}

module.exports.getHistory = getSearchHistory;