import { PropsWithChildren, useState } from "react";
import { ModalContext } from "./ModalContext";
import css from "./ModalContext.module.css";
import { useSession } from "next-auth/react";
import classNames from "classnames";

export function ModalContextProvider({ children }: PropsWithChildren) {
  const [show, setShow] = useState(false);
  const [modal, setModal] = useState(<></>);
  const { data: session, status } = useSession();

  return (
    <ModalContext.Provider value={[show, setShow, modal, setModal]}>
      <div
        className={classNames(css.modalWrapper, { toggleDisplay: !show })}
        style={show ? { zIndex: "1000" } : { zIndex: -1000 }}
      >
        {show && modal}
      </div>

      {children}
    </ModalContext.Provider>
  );
}
