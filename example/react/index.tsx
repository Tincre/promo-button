import * as ReactDOM from 'react-dom';
import 'react-app-polyfill/ie11';
import { PromoButton } from '../../.';
import '../../dist/promo-button.cjs.development.css';

const App = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h1 style={{ marginTop: '10px', marginBottom: '10px' }}>
        Promo button demo
      </h1>
      <PromoButton
        logoSrc=""
        user={undefined}
        words={['Real', 'Easy', 'Ads']}
        shape="square"
        email="jason@tincre.com"
        backend="my-backend-route"
      />
      <p style={{ marginTop: '20px', marginBottom: '10px' }}>
        <code>npm install @tincre/promo-button</code>
      </p>
      <p
        style={{ marginTop: '20px', marginBottom: '10px', fontWeight: 'bold' }}
      >
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://tincre.dev/docs"
        >
          Read the docs
        </a>
      </p>
      <p
        style={{ marginTop: '20px', marginBottom: '10px', fontWeight: 'bold' }}
      >
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://community.tincre.dev/c/promo-api"
        >
          Community
        </a>
      </p>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
