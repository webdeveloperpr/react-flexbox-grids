import React from 'react';
import ReactDOM from 'react-dom';
import './css/styles.scss';
import 'react-flexbox-grids/npm/dist/styles.css'
import {
  Col,
  Row,
  Container
} from '../src/components/Grid';

const App = () => {
  return (
    <Row className="blue-grid">
      <Col xs={12}>
        <Row xsCenter>
          <Col xs={4}>Col 1</Col>
        </Row>
      </Col>
    </Row>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
