import { createContext, ReactElement, ReactNode, useContext } from "react";

type setShowFunction = (show: boolean) => void;
type setModal = (modal: ReactElement) => void;
type ModalContextState = [boolean, setShowFunction, ReactElement, setModal];

export const ModalContext = createContext<ModalContextState>([
  false,
  () => {},
  <div></div>,
  () => {},
]);

export const useModal = () => useContext(ModalContext);
