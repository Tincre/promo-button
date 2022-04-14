import { render } from '@testing-library/react';
import { BButton } from '../.';

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
        <BButton
          logoSrc=""
          user={undefined}
          open={false}
          words={['Real', 'Easy', 'Ads']}
          shape="square"
        />
      );
    }
    render(<div></div>);
  });
});
