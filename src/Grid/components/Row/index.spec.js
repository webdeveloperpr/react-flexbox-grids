import { utilityMap } from '../../utils';
import Row from './';

describe('Row is rendered', () => {
  test('Renders a Row', () => {
    const wrapper = mount(
      <Row>
        Hello
      </Row>
    );

    expect(wrapper.exists()).toBe(true);
  });
});

describe('should change the element tag', () => {
  test('should find a form tag', () => {
    const wrapper = mount(<Row element="form" />);
    expect(wrapper.find('form').length).toEqual(1);
  });
});

describe('should render the utility classNames', () => {
  Object
    .keys(utilityMap)
    .forEach(prop => {
      test('Renders classnames', () => {
        const props = { [prop]: true };
        const className = utilityMap[prop];
        const wrapper = mount(
          <Row {...props}>
            Hello
          </Row>
        );

        expect(wrapper.find('div').hasClass(className)).toBe(true);
      });
    })
});
