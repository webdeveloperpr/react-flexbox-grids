import React from 'react';
import ReactDOM from 'react-dom';
import './css/styles.scss';
import '../npm/dist/styles.css';

import { Col, Row, Container } from '../npm/dist';

const App = () => {
  return (
    <div>
      <Container >
        <Row startXs reverse>
          <Col xs={12} sm={6} md={4} lg={3}>Col 1</Col>
          <Col xs={12} sm={6} md={4} lg={3}>Col 2</Col>
          <Col xs={12} sm={6} md={4} lg={3}>Col 3</Col>
        </Row>
        <Row reverse>
          <Col xs={6}>Col 1</Col>
          <Col xs={6}>Col 2</Col>
          <Col xs={4}>Col 3</Col>
          <Col xs={4}>Col 4</Col>
          <Col xs={4}>Col 5</Col>
        </Row>
      </Container>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
