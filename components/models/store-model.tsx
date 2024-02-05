"use client";

import { useStoreModel } from "@/hooks/use-store-modle";
import { Modal } from "../ui/model";


export const StoreModel = () => {

    const StoreModel = useStoreModel();
    return (
        <Modal title="Create Store" description="Add a new store to manage products and categories" isOpen={StoreModel.isOpen}
        onClose={StoreModel.onClose}>
        Future Creare Store Form
    </Modal>
    
    )
}