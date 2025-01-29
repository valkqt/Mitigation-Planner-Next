import { createContext, RefObject, useContext } from "react";

export const MouseContext = createContext({ current: 0 });

export const useMouseContext = () => useContext(MouseContext);
