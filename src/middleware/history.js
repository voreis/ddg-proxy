const searchHistory = require('../use_cases/search_history');

const history = (req, res, next) => {
    var term = req.query.term;

    if (term) {
        searchHistory.saveSearch(term, function(result){});
    }
    return next();
}

module.exports = history;