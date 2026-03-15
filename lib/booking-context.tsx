"use client";

import { createContext, useContext, useState, useCallback, type ReactNode } from "react";

interface BookingContextValue {
  isOpen: boolean;
  open: (url?: string) => void;
  close: () => void;
}

const BookingContext = createContext<BookingContextValue>({
  isOpen: false, open: () => {}, close: () => {},
});

export function BookingProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const open = useCallback((url?: string) => {
    if (url) {
      window.location.href = url;
      return;
    }
    setIsOpen(true);
  }, []);
  const close = useCallback(() => setIsOpen(false), []);
  return (
    <BookingContext.Provider value={{ isOpen, open, close }}>
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  return useContext(BookingContext);
}
