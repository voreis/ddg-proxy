const express = require('express');
const router = express.Router();
const searchUseCase = require('../use_cases/search_result');
const {getHistory} = require('../use_cases/search_history');
const history = require('../middleware/history');

router.get('/', history, (req, res) => {
  try {
    var term = req.query.term;
    if (!term) return res.status(400).send({ error: 'Query parameter not informed.' });

    searchUseCase.searchResult(term, function (result) {
      if (!result) return res.status(500).send({ error: 'Error fecthing data.' });

      if (result.error) return res.status(400).send({ error: result.message });

      return res.status(200).send(result.data);
    });
  } catch (error) {
    return res.status(500).send({ error: 'Error getting search result.' });
  }
});

router.get('/history', (req, res) => {
  try {
    getHistory(function (result) { 
      return res.status(200).send(result.data);
    });
  } catch (error) {
    return res.status(500).send({ error: 'Error getting search result.' });
  }
});

router.post('/', history, (req, res) => {
  try {
    var term = req.body.term;
    if (!term) return res.status(400).send({ error: 'Query parameter not informed.' });

    searchUseCase.searchResult(term, function (result) {
      if (!result) return res.status(500).send({ error: 'Error fecthing data.' });

      if (result.error) return res.status(400).send({ error: result.message });

      return res.status(200).send(result.data);
    });
  } catch (error) {
    return res.status(500).send({ error: 'Error getting search result.' });
  }
});

module.exports = router;