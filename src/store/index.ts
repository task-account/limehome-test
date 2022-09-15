import { createContext, useContext } from "react";
import { ApartmentStore } from "./apartments";

interface Store {
  apartmentStore: ApartmentStore;
}

const store: Store = {
  apartmentStore: new ApartmentStore()
};

const storeContext = createContext(store);

export function useStore() {
  return useContext(storeContext);
}
