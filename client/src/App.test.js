import { render, screen } from '@testing-library/react';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';

test('Renders main component', () => {
  render(
    <Router>
      <App />
    </Router>
  );
});
