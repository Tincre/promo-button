import * as ReactDOM from 'react-dom';
import 'react-app-polyfill/ie11';
import { PromoButton } from '../../dist/promo-button.esm.js'//'@tincre/promo-button';
import '../../dist/promo-button.esm.css'; 
import styles from './Home.module.css';
const App = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h1 style={{ marginTop: '10px', marginBottom: '10px' }}>
        Promo button demo
      </h1>
      <PromoButton
        logoSrc=""
        words={['Real', 'Easy', 'Ads']}
        shape="hero"
        email="jason@tincre.com"
        backend="my-backend-route"
      />
      <p style={{ marginTop: '20px', marginBottom: '10px' }}>
        <code>npm install @tincre/promo-button</code>
      </p>
      <p
                    className={styles.card}
            style={{
              marginTop: '2rem',
              marginBottom: '2rem',
              fontWeight: 'bold',
              marginLeft: 'auto',
              marginRight: 'auto',
              textAlign: 'center',
            }}
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
            className={styles.card}
            style={{
              marginTop: '2rem',
              marginBottom: '2rem',
              fontWeight: 'bold',
              marginLeft: 'auto',
              marginRight: 'auto',
              textAlign: 'center',
            }}
      >
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://community.tincre.dev/c/promo-button"
        >
          Abuse your community
        </a>
      </p>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
