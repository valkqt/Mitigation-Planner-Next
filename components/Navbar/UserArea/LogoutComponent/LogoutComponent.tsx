import serverSignOut from "@/resources/serverActions/serverSignOut";
import css from "./LogoutComponent.module.css";
import { FormEvent } from "react";
import { useModal } from "@/contexts/ModalContext/ModalContext";
import useClickOutside from "@/hooks/useClickOutside";

export function LogoutComponent() {
  // const [_, setShow, __, setModal] = useModal();

  // const ref = useClickOutside<HTMLDivElement>(handleClickOutside);

  // function handleClickOutside(): void {
  //   setShow(false);
  // }

  async function handleModalSubmit(e: FormEvent) {
    e.preventDefault();
    await serverSignOut();
    window.location.reload();
  }

  // function handleSubmit(e: FormEvent) {
  //   e.preventDefault();
  //   setShow(true);
  //   console.log("mrow");
  //   setModal(
  //     <div ref={ref}>
  //       <form className={css.modal} onSubmit={(e) => handleModalSubmit(e)}>
  //         <label>Are you sure?</label>
  //         <div className={css.modalFooter}>
  //           <div></div>
  //           <div style={{ display: "flex", gap: "1rem" }}>
  //             <button type="submit">Proceed</button>
  //             <button onClick={() => setShow(false)}>Cancel</button>
  //           </div>
  //         </div>
  //       </form>
  //     </div>
  //   );
  // }

  return (
    <form onSubmit={(e) => handleModalSubmit(e)}>
      <button type="submit" className={css.signout}>
        Sign out
      </button>
    </form>
  );
}
