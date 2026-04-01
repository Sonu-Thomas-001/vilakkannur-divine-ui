import {StrictMode, Suspense} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import './i18n';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Suspense fallback={<div className="min-h-screen bg-deep-black flex items-center justify-center"><div className="w-10 h-10 border-4 border-gold-400 border-t-transparent rounded-full animate-spin"></div></div>}>
      <App />
    </Suspense>
  </StrictMode>,
);
