import { utilityMap } from '../../utils';
import Container from './';

describe('Container is rendered', () => {
  test('Renders a Container', () => {
    const wrapper = mount(
      <Container>
        Hello
      </Container>
    );

    expect(wrapper.exists()).toBe(true);
  });
});

describe('should change the element tag', () => {
  test('should find a form tag', () => {
    const wrapper = mount(<Container element="form" />);
    expect(wrapper.find('form').length).toEqual(1);
  });
});

describe('should render the utility classNames', () => {
  test('Renders container-fluid className', () => {
    const wrapper = mount(
      <Container fluid>
        Hello
      </Container>
    );

    expect(wrapper.find('div').hasClass('container-fluid')).toBe(true);
  });
});
