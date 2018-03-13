[![Build Status](https://travis-ci.org/webdeveloperpr/react-flexbox-grids.svg?branch=master)](https://travis-ci.org/webdeveloperpr/react-flexbox-grids)
# react-flexbox-grids

This package allows you to create grids using flexbox, with `flexboxgrids` css styles

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
- [Example](#example)
- [Support](#support)
- [Contributing](#contributing)

## Installation

```sh
npm i --save react-flexbox-grids
```

## Usage

Add The flexbox-grids css stylesheet.

```html
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/flexboxgrid/6.3.1/flexboxgrid.css">
```

#### Container

```jsx
<Container fluid>
    <Row>
        <Col xs={12} sm={3} md={4} lg={3} xsMiddle>Col 1</Col>
        <Col xs={12} sm={6} md={4} lg={6} }>Col 2</Col>
        <Col xs={12} sm={3} md={4} lg={3} }>Col 3</Col>
    </Row>
</Container>
```


## API

**(Col, Row)**
- xsStart
- xsCenter
- xsEnd
- xsTop
- xsMiddle
- xsBottom
- xsAround
- xsBetween
- xsFirst
- xsLast
- smStart
- smCenter
- smEnd
- smTop
- smMiddle
- smBottom
- smAround
- smBetween
- smFirst
- smLast
- mdStart
- mdCenter
- mdEnd
- mdTop
- mdMiddle
- mdBottom
- mdAround
- mdBetween
- mdFirst
- mdLast
- lgStart
- lgCenter
- lgEnd
- lgTop
- lgMiddle
- lgBottom
- lgAround
- lgBetween
- lgFirst
- lgLast
- reverse

**Container props**
- fluid

**Col props**
- xs
- sm
- md
- lg
- xsOffset
- mdOffset
- lgOffset
- xlOffset

## Support

Please [open an issue](https://github.com/webdeveloperpr/react-flexbox-grids/issues) for support.

## Contributing

Please contribute using [Github Flow](https://guides.github.com/introduction/flow/). Create a branch, add commits, and [open a pull request](https://github.com/webdeveloperpr/react-flexbox-grids/pulls).

