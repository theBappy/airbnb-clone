import { create } from 'zustand'

interface RentModalStore{
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

const useRentModal = create<RentModalStoreModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({isOpen: true}),
    onClose: () => set({isOpen: false}),
}))

export default useRentModal; 