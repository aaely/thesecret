import { atom, atomFamily, DefaultValue, selector, selectorFamily, SetRecoilState } from 'recoil'
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
    key: 'recoil-persist-session', // this key is using to store data in local storage
    storage: sessionStorage, // configurate which stroage will be used to store the data
  })

export const currentView = atom<string>({
    key: 'currentView',
    default: 'ebook',
    effects_UNSTABLE: [persistAtom]
})
