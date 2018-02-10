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
    <div>
      <Container>
        <Row element="section">
          <Col element="section" xs={12}>
            <h2>Offsets</h2>
          </Col>
        </Row>
        <Row className="blue-grid">
          <Col xs={12}>
            <Row>
              <Col xs={1} xsOffset={11}>Col 1</Col>
              <Col xs={2} xsOffset={10}>Col 2</Col>
              <Col xs={3} xsOffset={9}>Col 4</Col>
              <Col xs={4} xsOffset={8}>Col 5</Col>
              <Col xs={5} xsOffset={7}>Col 6</Col>
              <Col xs={6} xsOffset={6}>Col 7</Col>
              <Col xs={7} xsOffset={5}>Col 8</Col>
              <Col xs={8} xsOffset={4}>Col 9</Col>
              <Col xs={9} xsOffset={3}>Col 10</Col>
              <Col xs={10} xsOffset={2}>Col 11</Col>
              <Col xs={11} xsOffset={1}>Col 12</Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col xs={12}>
            <h2>Columns</h2>
          </Col>
        </Row>
        <Row className="blue-grid">
          <Col xs={12}>
            <Row startXs>
              <Col xs={12} sm={12} md={12} lg={12}>Col 12</Col>
            </Row>
            <Row startXs>
              <Col xs={12} sm={6} md={6} lg={6}>Col 6</Col>
              <Col xs={12} sm={6} md={6} lg={6}>Col 6</Col>
            </Row>
            <Row startXs>
              <Col xs={12} sm={12} md={4} lg={4}>Col 1</Col>
              <Col xs={12} sm={6} md={4} lg={4}>Col 2</Col>
              <Col xs={12} sm={6} md={4} lg={4}>Col 3</Col>
            </Row>
            <Row startXs>
              <Col xs={12} sm={3} md={3} lg={3}>Col 1</Col>
              <Col xs={12} sm={3} md={3} lg={3}>Col 2</Col>
              <Col xs={12} sm={3} md={3} lg={3}>Col 3</Col>
              <Col xs={12} sm={3} md={3} lg={3}>Col 4</Col>
            </Row>
            <Row startXs>
              <Col xs={12} sm={2} md={2} lg={2}>Col 1</Col>
              <Col xs={12} sm={2} md={2} lg={2}>Col 2</Col>
              <Col xs={12} sm={2} md={2} lg={2}>Col 3</Col>
              <Col xs={12} sm={2} md={2} lg={2}>Col 4</Col>
              <Col xs={12} sm={2} md={2} lg={2}>Col 5</Col>
              <Col xs={12} sm={2} md={2} lg={2}>Col 6</Col>
            </Row>
            <Row startXs>
              <Col xs={12} sm={1} md={1} lg={1}>Col 1</Col>
              <Col xs={12} sm={1} md={1} lg={1}>Col 2</Col>
              <Col xs={12} sm={1} md={1} lg={1}>Col 3</Col>
              <Col xs={12} sm={1} md={1} lg={1}>Col 4</Col>
              <Col xs={12} sm={1} md={1} lg={1}>Col 5</Col>
              <Col xs={12} sm={1} md={1} lg={1}>Col 6</Col>
              <Col xs={12} sm={1} md={1} lg={1}>Col 7</Col>
              <Col xs={12} sm={1} md={1} lg={1}>Col 8</Col>
              <Col xs={12} sm={1} md={1} lg={1}>Col 9</Col>
              <Col xs={12} sm={1} md={1} lg={1}>Col 10</Col>
              <Col xs={12} sm={1} md={1} lg={1}>Col 11</Col>
              <Col xs={12} sm={1} md={1} lg={1}>Col 12</Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col xs={12}>
            <h2>Fluid</h2>
          </Col>
        </Row>
        <Row className="blue-grid">
          <Col xs={12}>
            <Row>
              <Col xs={12} sm={12} md={12} lg={12}>Col 12</Col>
            </Row>
            <Row>
              <Col xs={2} sm={3} md={3} lg={3}>Col 6</Col>
              <Col xs={9} sm={9} md={9} lg={9}>Col 6</Col>
            </Row>
            <Row>
              <Col xs={4} sm={4} md={4} lg={4}>Col 1</Col>
              <Col xs={8} sm={8} md={8} lg={8}>Col 3</Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col xs={12}>
            <h2>Auto Width</h2>
          </Col>
        </Row>
        <Row className="blue-grid">
          <Col xs={12}>
            <Row>
              <Col xs={6}>Col 1</Col>
              <Col xs={6}>Col 1</Col>
            </Row>
            <Row>
              <Col xs>Col 1</Col>
              <Col xs>Col 1</Col>
              <Col xs>Col 1</Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col xs={12}>
            <h2>Nested Columns</h2>
          </Col>
        </Row>
        <Row className="blue-grid">
          <Col xs={12}>
            <Row>
              <Col xs={12}>
                <Row>
                  <Col xs>
                    <Row>
                      <Col xs>Col 1</Col>
                      <Col xs>Col 2</Col>
                      <Col xs>Col 3</Col>
                    </Row>
                  </Col>
                  <Col xs>Col 2</Col>
                  <Col xs>Col 3</Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col xs={12}>
            <h2>Alignment</h2>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <h3>.start</h3>
          </Col>
        </Row>
        <Row className="blue-grid">
          <Col xs={12}>
            <Row startXs>
              <Col xs={4}>Col 1</Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <h3>.center</h3>
          </Col>
        </Row>
        <Row className="blue-grid">
          <Col xs={12}>
            <Row xsCenter>
              <Col xs={4}>Col 1</Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <h3>.end</h3>
          </Col>
        </Row>
        <Row className="blue-grid">
          <Col xs={12}>
            <Row xsEnd>
              <Col xs={4}>Col 1</Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <h3>.top</h3>
          </Col>
        </Row>
        <Row className="blue-grid">
          <Col xs={12}>
            <Row xsTop>
              <Col xs={6}>Col 1</Col>
              <Col xs={6} className="tall-col">Col 1</Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <h3>.middle</h3>
          </Col>
        </Row>
        <Row className="blue-grid">
          <Col xs={12}>
            <Row xsMiddle>
              <Col xs={6}>Col 1</Col>
              <Col xs={6} className="tall-col">Col 1</Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <h3>.bottom</h3>
          </Col>
        </Row>
        <Row className="blue-grid">
          <Col xs={12}>
            <Row xsBottom>
              <Col xs={6}>Col 1</Col>
              <Col xs={6} className="tall-col">Col 1</Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col xs={12}>
            <h2>Distribution</h2>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <h3>.around</h3>
          </Col>
        </Row>
        <Row className="blue-grid">
          <Col xs={12}>
            <Row xsAround>
              <Col xs={2}>Col 1</Col>
              <Col xs={2}>Col 2</Col>
              <Col xs={2}>Col 3</Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <h3>.between</h3>
          </Col>
        </Row>
        <Row className="blue-grid">
          <Col xs={12}>
            <Row xsBetween>
              <Col xs={3} lastXs>Col 1</Col>
              <Col xs={3}>Col 2</Col>
              <Col xs={3} fristXs>Col 3</Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <h3>.first and .last</h3>
          </Col>
        </Row>
        <Row className="blue-grid">
          <Col xs={12}>
            <Row xsBetween>
              <Col xs={3} xsLast>Col 1</Col>
              <Col xs={3}>Col 2</Col>
              <Col xs={3} xsFirst>Col 3</Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <h3>.reverse</h3>
          </Col>
        </Row>
        <Row className="blue-grid">
          <Col xs={12}>
            <Row reverse>
              <Col xs={3}>Col 1</Col>
              <Col xs={3}>Col 2</Col>
              <Col xs={3}>Col 3</Col>
              <Col xs={3}>Col </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
