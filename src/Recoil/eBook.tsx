import { selector, atom, selectorFamily } from "recoil";
import { recoilPersist } from "recoil-persist";
import loadWeb3 from "../utils/loadWeb3";
import loadAccount from "../utils/loadAccount";
import loadeBook from "../utils/loadeBook";
import { forceUpdate } from ".";

const { persistAtom } = recoilPersist({
    key: 'recoil-persist', // this key is using to store data in local storage
    storage: localStorage, // configurate which stroage will be used to store the data
  })

    export const initializeeBook = selector({
    key: 'initializeeBook',
    get: async () => {
            try {
                await loadWeb3()
                const response: any = await loadeBook();
                return response.methods
            } catch (error) {
                console.log(error)
            }
        }
    })

    export const getAccount = selector({
        key: 'getAccount',
        get: async () => {
            try {
                const response = await loadAccount()
                return response
            } catch (error) {
                console.log(error)
            }
        }
    })

    export const account = atom<string>({
        key: 'account',
        default: '',
        effects_UNSTABLE: [persistAtom]
    })

    export const activePage = atom<number>({
        key: 'activePage',
        default: 0,
        effects_UNSTABLE: [persistAtom]
    })

    export const activeChapter = atom<number>({
        key: 'activeChapter',
        default: 0,
        effects_UNSTABLE: [persistAtom]
    })

    export const workingChapter = atom<number>({
        key: 'workingChapter',
        default: 0,
        effects_UNSTABLE: [persistAtom]
    })

    export const getChapterCount = selector({
        key: 'getChapterCount',
        get: async ({get}) => {
            try {
                get(forceUpdate)
                const methods: any = get(initializeeBook)
                const response = await methods.chapterCount().call()
                console.log(response)
                return response
            } catch(error) {
                console.log(error)
            }
        }
    })

    export const getPageCount = selector({
        key: 'getPageCount',
        get: async ({get}) => {
            try {
                get(forceUpdate)
                const methods: any = get(initializeeBook)
                const response = await methods.pageCount().call()
                return response
            } catch(error) {
                console.log(error)
            }
        }
    })

    export const chapterSelector = selectorFamily({
        key: 'chapterSelector',
        get: param => async ({get}) => {
            try {
                get(forceUpdate)
                const methods: any = get(initializeeBook)
                const response = await methods.fetchChapter(param).call()
                return response
            } catch (error) {
                console.log(error)
            }
        }
    })

    export const pageSelector = selectorFamily({
        key: 'pageSelector',
        get: param => async ({get}) => {
            try {
                get(forceUpdate)
                const methods: any = get(initializeeBook)
                const response = await methods.getPage(param).call()
                return response
            } catch (error) {
                console.log(error)

            }
        }
    })

    export const eBookDims = atom({
        key: 'eBookDims',
        default: {width: 0, height: 0}
    })

    export const getAllChapters = selector({
        key: 'getAllChapters',
        get: async ({get}) => {
            try {
                let chapters: any = []
                const methods: any = get(initializeeBook)
                console.log(methods)
                const loopCount: any = get(getChapterCount)
                for(let i: number = 1; i <= loopCount; i++) {
                    const chapter = await methods.fetchChapter(i).call()
                    chapters.push(chapter)
                }
                return chapters
            } catch(error) {
                console.log(error)
            }
        }
    })