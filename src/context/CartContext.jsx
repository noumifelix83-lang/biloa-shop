import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { getItem } from '../data/catalog.js';

const CartContext = createContext(null);
const STORAGE_KEY = 'biloa-cart-v1';
const MAX_QTY = 20;

function loadCart() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    return Array.isArray(saved) ? saved.filter((l) => getItem(l.id) && l.qty > 0) : [];
  } catch {
    return [];
  }
}

export function CartProvider({ children }) {
  const [entries, setEntries] = useState(loadCart);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [lastAdded, setLastAdded] = useState(null);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
    } catch {
      /* storage unavailable — cart still works for this visit */
    }
  }, [entries]);

  const addItem = useCallback((id, qty = 1, { openDrawer = true } = {}) => {
    const item = getItem(id);
    if (!item) return;
    setEntries((prev) => {
      const existing = prev.find((l) => l.id === id);
      // Services are booked one at a time.
      const cap = item.type === 'service' ? 1 : MAX_QTY;
      if (existing) {
        return prev.map((l) => (l.id === id ? { ...l, qty: Math.min(cap, l.qty + qty) } : l));
      }
      return [...prev, { id, qty: Math.min(cap, qty) }];
    });
    setLastAdded(id);
    if (openDrawer) setDrawerOpen(true);
  }, []);

  const setQty = useCallback((id, qty) => {
    setEntries((prev) =>
      qty <= 0 ? prev.filter((l) => l.id !== id) : prev.map((l) => (l.id === id ? { ...l, qty: Math.min(MAX_QTY, qty) } : l)),
    );
  }, []);

  const removeItem = useCallback((id) => setEntries((prev) => prev.filter((l) => l.id !== id)), []);
  const clear = useCallback(() => setEntries([]), []);

  const value = useMemo(() => {
    const lines = entries.map((l) => {
      const item = getItem(l.id);
      return { ...l, item, total: item.price * l.qty };
    });
    const subtotal = lines.reduce((sum, l) => sum + l.total, 0);
    const productSubtotal = lines.filter((l) => l.item.type === 'product').reduce((s, l) => s + l.total, 0);
    return {
      lines,
      entries,
      count: lines.reduce((n, l) => n + l.qty, 0),
      subtotal,
      productSubtotal,
      needsShipping: lines.some((l) => l.item.type === 'product'),
      addItem,
      setQty,
      removeItem,
      clear,
      drawerOpen,
      openDrawer: () => setDrawerOpen(true),
      closeDrawer: () => setDrawerOpen(false),
      lastAdded,
    };
  }, [entries, drawerOpen, lastAdded, addItem, setQty, removeItem, clear]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  return useContext(CartContext);
}
