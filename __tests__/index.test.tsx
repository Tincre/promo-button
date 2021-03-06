import { render } from '@testing-library/react';
import { PromoButton } from '../.';

jest.mock('@headlessui/react', () => ({
  Transition: ({ children, show }: { children: any; show: any }) => (
    <>{show ? children : ''}</>
  ),
}));
jest.mock('@headlessui/react', () => ({
  Transition: ({ children, show }: { children: any; show: any }) => (
    <>{show ? children : ''}</>
  ),
}));

// @ts-expect-error
global.IntersectionObserver = class FakeIntersectionObserver {
  observe() {}
  disconnect() {}
};
describe('promo-button ', () => {
  it('renders', () => {
    function Example() {
      return (
        <PromoButton
          logoSrc=""
          words={['Real', 'Easy', 'Ads']}
          shape="square"
          email="jason@tincre.com"
          backend="test-backend"
        />
      );
    }
    render(<div></div>);
  });
});
