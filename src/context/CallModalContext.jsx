import { createContext, useContext, useState, useCallback } from 'react';
import CallModal from '../components/common/CallModal';

const defaultContextValue = {
  openCallModal: () => {},
  closeCallModal: () => {}
};

const CallModalContext = createContext(defaultContextValue);

export function CallModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const openCallModal = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeCallModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <CallModalContext.Provider value={{ openCallModal, closeCallModal }}>
      {children}
      <CallModal isOpen={isOpen} onClose={closeCallModal} />
    </CallModalContext.Provider>
  );
}

export function useCallModal() {
  const context = useContext(CallModalContext);
  return context || defaultContextValue;
}
