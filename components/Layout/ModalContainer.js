import React, {createContext, useRef, useState} from "react";
import {DialogContext} from './DialogContext'


const DialogContainer = ({children}) => {
  const [state, setState] = useState({open: false, value: 2})
  const ref = useRef()
  const showDialog = (component) => {
    window.modalComponent = component
    ref.current.showModal()
    setState({ ...state })
  }
  return (
    <main>
      <DialogContext.Provider value={{...state, showDialog}}>

        <dialog className="bg-white shadow-md rounded px-8 pt-6 pb-8" open={state.open} ref={ref}>
          {global.modalComponent}
        </dialog>
        {children}
      </DialogContext.Provider>
    </main>
  );
};

export default DialogContainer;
