import { atom, atomFamily, selector, selectorFamily } from 'recoil'
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
    key: 'recoil-persist', // this key is using to store data in local storage
    storage: localStorage, // configurate which stroage will be used to store the data
  })

  export const sidebarWidth = atom<number>({
    key: 'sidebarWidth',
    default: 50,
    effects_UNSTABLE: [persistAtom]
  })

  export const bgImage = atom<string>({
    key: 'bgImage',
    default: '',
    effects_UNSTABLE: [persistAtom]
  })

  export const image = atom<boolean>({
    key: '',
    default: false,
    effects_UNSTABLE: [persistAtom]
  })
  export const rtl = atom<boolean>({
    key: 'rtl',
    default: false,
    effects_UNSTABLE: [persistAtom]
  })
  
  export const collapsed = atom<boolean>({
    key: 'collapsed',
    default: false,
    effects_UNSTABLE: [persistAtom]
  })

  export const toggled = atom<boolean>({
    key: 'collapsed',
    default: false,
    effects_UNSTABLE: [persistAtom]
  })
