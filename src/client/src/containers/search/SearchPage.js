import React, { Component } from 'react';
import SearchList from './components/SearchList';
import SearchForm from './components/SearchForm';
import SearchHistory from './components/SearchHistory';
import { Container, Row, Col } from 'react-bootstrap';

class SearchPage extends Component {
  render() {
    return (
      <Container fluid={true}>        
        <Row>
          <SearchForm></SearchForm>
        </Row>
        <Row>
          <Col sm={9}>
            <SearchList></SearchList>
          </Col>
          <Col sm={3}>
            <SearchHistory></SearchHistory>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SearchPage;
