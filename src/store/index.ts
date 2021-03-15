import { createContext, useContext } from "react";
import { ResumeStore } from "./ResumeStore";

export class RootStore {
  public resumeStore: ResumeStore = new ResumeStore();
}
const StoreContext = createContext<RootStore>({} as RootStore);
export const StoreProvider = StoreContext.Provider;

export const useStore = (): RootStore => useContext(StoreContext);

export * from "./ResumeStore";
