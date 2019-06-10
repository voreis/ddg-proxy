var app = require('./index');
var supertest = require('supertest');
var test = require('tape');
const searchUseCase = require('./use_cases/search_result');
const searchHistoryUseCase = require('./use_cases/search_history');
const config = require('./config/config');


// SERVER API TESTING

test('Server - Should handle 200', function (assert) {
    assert.true(supertest(app).get('/')
                              .expect(200)
                              .end(assert.end));
});

test('Server - Should handle 404', function (assert) {
    assert.true(supertest(app).get('/abcd')
                              .expect(404)
                              .end(assert.end));
});

test('Api - GET Find without term should be 400', function (assert) {
    assert.true(supertest(app).get('/api/search')
                              .expect(400)
                              .end(assert.end));
});

test('Api - GET Find with term should be 200', function (assert) {
    assert.true(supertest(app).get('/api/search?term=x')
                              .expect(200)
                              .end(assert.end));
});

test('Api - POST Find without term should be 400', function (assert) {
    assert.true(supertest(app).post('/api/search')
                              .expect(400)
                              .end(assert.end));
});

test('Api - POST Find with term should be 200', function (assert) {
    assert.true(supertest(app).post('/api/search')
                              .send({term: 'x'})
                              .expect(200)
                              .end(assert.end));
});

// USE CASES TESTING

test('Use Case - Search use case should return valid data', function (assert) {
    searchUseCase.searchResult('x', function (result) {
        assert.false(result.error);
        assert.end();
    });
});

test('Use Case - Search use case should return valid data', function (assert) {
    var originalUrl = config.duckDuckGoApi;
    var newUrl = 'https://www.google.com';
    
    config.duckDuckGoApi = newUrl;

    searchUseCase.searchResult('x', function (result) {
        assert.true(result.error);
        assert.end();
    });

    config.duckDuckGoApi = originalUrl;
});

test('Use Case - Save search history use case should return valid data', function (assert) {
    searchHistoryUseCase.saveSearch('x', function (result) {
        assert.false(result.error);
        assert.end();
    });
});

test('Use Case - Get search history use case should return valid data', function (assert) {
    searchHistoryUseCase.getHistory(function (result) {
        assert.true(result.data);
        assert.end();
    });
});
