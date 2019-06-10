const request = require('request');
const config = require('../config/config');

const getSearchResult = (term, callBack) => {
    var options = {
        url: `${config.duckDuckGoApi}/?q=${term}&format=json`,
        json: true
    };

    request.get(options, (err, req, body) => {
        if(err) return callBack({error : true, message : err});        
        if(!body || !body.RelatedTopics) return callBack({error : true, message : 'External response format not valid.'});

        var array = [];

        body.RelatedTopics.forEach(rTopic => {
            if (rTopic.Topics == undefined) {
                array.push({ title: rTopic.Text, link: rTopic.FirstURL });
            }
            else {
                rTopic.Topics.forEach(topic => {
                    array.push({ title: topic.Text, link: topic.FirstURL });
                })
            }
        });

       return callBack({error : false , data : array});
    });
}

module.exports.searchResult = getSearchResult;