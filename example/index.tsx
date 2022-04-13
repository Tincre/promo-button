import * as ReactDOM from 'react-dom';
import 'react-app-polyfill/ie11';
import React from 'react';
import { BButton } from '../.';

const App = () => {
  return (
    <div>
      <BButton
        logoSrc=""
        user={undefined}
        open={true}
        words={['Real', 'Easy', 'Ads']}
        shape="square"
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
