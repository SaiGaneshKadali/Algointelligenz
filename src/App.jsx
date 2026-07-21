import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import { ToastProvider } from './context/ToastContext';
import { CallModalProvider } from './context/CallModalContext';

export default function App() {
  return (
    <BrowserRouter>
      <ToastProvider>
        <CallModalProvider>
          <AppRoutes />
        </CallModalProvider>
      </ToastProvider>
    </BrowserRouter>
  );
}
