import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './app/App';
import './global.css';

// biome-ignore lint/style/noNonNullAssertion: app_root is declared in index.html and always present at runtime
const elem = document.getElementById('app_root')!;
const app = (
  <StrictMode>
    <App />
  </StrictMode>
);

// biome-ignore lint/suspicious/noAssignInExpressions: ??= persists root across HMR reloads; ternary guards against undefined in production builds
const root = import.meta.hot ? (import.meta.hot.data.root ??= createRoot(elem)) : createRoot(elem);
root.render(app);
