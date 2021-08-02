import { atom, selector, atomFamily, selectorFamily } from 'recoil'
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist({
    key: 'recoil-persist', // this key is using to store data in local storage
    storage: localStorage, // configurate which stroage will be used to store the data
  })

export const width = atom<number>({
    key: 'width',
    default: window.innerWidth
})

export const height = atom<number>({
    key: 'height',
    default: window.innerHeight
})
