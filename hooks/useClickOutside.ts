import { useEffect, useRef, type Ref } from "react";

const useClickOutside = <TElement extends HTMLElement>(callback: Function): Ref<TElement | null> => {
  const ref = useRef<TElement>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (!ref.current?.contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener("click", handleClick, true);

    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  }, [ref, callback]);

  return ref;
};

export default useClickOutside;
