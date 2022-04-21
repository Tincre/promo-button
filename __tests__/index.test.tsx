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
          user={undefined}
          words={['Real', 'Easy', 'Ads']}
          shape="square"
        />
      );
    }
    render(<div></div>);
  });
});
