"use client";

import { useStoreModel } from "@/hooks/use-store-modle";
import { useEffect } from "react";
 

const SetupPage = ()=> {
  const onOpen = useStoreModel((state) => state.onOpen);
  const isOpen = useStoreModel((state)=>state.isOpen)

  useEffect(() => {
    if (!isOpen) {
      onOpen();
    }
  },[isOpen,onOpen])

    return (
      <>
        <div className="p-3"> 
        Root page
        </div>

      </>

  );
}

export default SetupPage;