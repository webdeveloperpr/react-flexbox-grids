import Col from './'
import { utilityMap } from '../../utils';
import { sizes } from '../../utils/constants';

describe('Col is rendered', () => {
  test('Renders a Col', () => {
    const wrapper = mount(
      <Col>
        Hello
      </Col>
    );

    expect(wrapper.exists()).toBe(true);
  });
});

describe('Should render the utility classNames', () => {
  Object
    .keys(utilityMap)
    .forEach(prop => {
      test('Renders classnames', () => {
        const props = { [prop]: true };
        const className = utilityMap[prop];
        const wrapper = mount(
          <Col {...props}>
            Hello
          </Col>
        );

        expect(wrapper.find('div').hasClass(className)).toBe(true);
      });
    })
});

describe('should render all of the columns sizes', () => {
  const cols = 12;
  sizes
    .forEach(size => {
      Array(cols)
        .fill('')
        .forEach((number, index) => {
          const className = 'col-' + size + '-' + Number(index + 1);

          test('should convert prop to ClassName', () => {
            const props = { [size]: index + 1 };
            const wrapper = mount(<Col {...props}>Hello</Col>);
            expect(wrapper.find('div').hasClass(className)).toEqual(true);
          });
        })
    })
});

describe('should render all of the offset sizes', () => {
  const cols = 12;
  sizes
    .forEach(size => {
      Array(cols - 1)
        .fill('')
        .forEach((number, index) => {
          const className = 'col-' + size + '-offset-' + Number(index + 1);

          test('should convert prop to ClassName', () => {
            const props = { [size + 'Offset']: index + 1 };
            const wrapper = mount(<Col {...props}>Hello</Col>);
            console.log(className);
            expect(wrapper.find('div').hasClass(className)).toEqual(true);
          });
        })
    })
});


