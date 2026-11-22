import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import ErrorBoundary from './components/ErrorBoundary.jsx';
import './index.css';

let appMounted = false;

function renderApp() {
  if (appMounted) return;
  const container = document.getElementById('root');
  if (!container) return;

  appMounted = true;
  const root = ReactDOM.createRoot(container);
  root.render(
    <React.StrictMode>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </React.StrictMode>
  );
}

// Immediate mount if element is available, otherwise listen for DOM events
if (document.getElementById('root')) {
  renderApp();
} else if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', renderApp);
} else {
  window.addEventListener('load', renderApp);
}
