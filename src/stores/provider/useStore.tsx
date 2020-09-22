import { useContext } from "react";
import { StoreContext } from "./";
import { RootStore } from "..";
import { ContactStore } from "../contactStore";

export const useStore = (): RootStore => useContext(StoreContext);
export const useContactStore = (): ContactStore => useStore().contactStore;
