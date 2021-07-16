import { atom, selector, atomFamily, selectorFamily } from 'recoil'
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist({
    key: 'recoil-persist', // this key is using to store data in local storage
    storage: localStorage, // configurate which stroage will be used to store the data
  })
  
export const forceUpdate = atom<number>({
    key: 'forceUpdate',
    default: 0
})

export const collections = atom<any>({
    key: 'collections',
    default: [],
    effects_UNSTABLE: [persistAtom]
})

export const predicates = atom<any>({
    key: 'predicates',
    default: [],
    effects_UNSTABLE: [persistAtom]
})

/*export const getCollections = selector({
    key: 'getCollections',
    get: async ({get}) => {
        try {
            get(forceUpdate)
            const response = await fetchCollections()
            return response
        } catch (error) {
            console.log(error)
        }
    }
})

export const getCreatedCollections = selector({
    key: '',
    get: async ({get}) => {
            try {
                get(forceUpdate)
                let collections: any = await fetchCollections()
                console.log(collections.length)
                for(let i: number = 0; i < collections.length; i++) {
                    console.log('hello', collections[i]['_collection/name'])
                    if(collections[i]['_collection/name'][0] === '_') {
                        console.log('removed', collections.length, collections[i])
                        collections.splice(i, 1)
                        console.log(collections.length)
                    }
                }
                return collections
            } catch (error) {
                console.log(error)
            }       
    }
})

export const getPredicates = selector({
    key: 'getPredicates',
    get: async ({get}) => {
        try {
            get(forceUpdate)
            const response = await fetchPredicates()
            console.log(response)
            return response
        } catch (error) {
            console.log(error)
        }
    }
})*/