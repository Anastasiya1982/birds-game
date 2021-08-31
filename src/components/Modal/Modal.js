import React from "react";

import style from "./Modal.module.scss";



export default function Modal({open, setOpen,children}) {
   const closeModal=()=>{
       setOpen(false);
   };

    return (
        <div className={open? style.modalOpen : style.modal} onClick={closeModal}>
          <div className={style.modalContent} onClick={e=>e.stopPropagation()}>
              {children}
          </div>

        </div>
    );
}
