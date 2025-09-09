// Type declarations for Elfsight widget
declare global {
  interface Window {
    eapps?: {
      initialize: () => void;
    };
  }
}

export {};