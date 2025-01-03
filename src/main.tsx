import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './contexts/Auth.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename="/MeetUpInReactJS">
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
);
