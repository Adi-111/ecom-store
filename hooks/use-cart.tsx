import { create } from 'zustand';
import { toast } from 'react-hot-toast';
import { persist, createJSONStorage } from "zustand/middleware"; 
import { Product } from '@/types';
import { AlertTriangle } from 'lucide-react';

interface CartStore {
  items: Product[];
  addItem: (data: Product) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;
}

const useCart = create(
  persist<CartStore>((set, get) => ({
    items: [],
    addItem: (data: Product) => {
      const currentItems = get().items;
      const existingItem = currentItems.find((item) => item.id === data.id);
      
      if (existingItem) {
        return toast('Item already in cart.', {
          icon: <AlertTriangle />,
        });
      }

      set({ items: [...currentItems, data] });
      toast.success('Item added to cart.');
    },
    removeItem: (id: string) => {
      const currentItems = get().items;
      const updatedItems = currentItems.filter((item) => item.id !== id);

      if (currentItems.length === updatedItems.length) {
        return toast('Item not found in cart.');
      }

      set({ items: updatedItems });
      toast.success('Item removed from cart.');
    },
    removeAll: () => set({ items: [] }),
  }), {
    name: 'cart-storage',
    storage: createJSONStorage(() => localStorage)
  })
);

export default useCart;
