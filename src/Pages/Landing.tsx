import { useState, useEffect } from 'react'
import { useRecoilValue, useRecoilState, useSetRecoilState } from 'recoil'
import { Button } from 'react-bootstrap'
import { forceUpdate, initializeeBook, account, getAccount, getChapterCount, activeChapter } from '../Recoil/eBook'
import { editorText } from '../Recoil'
import { currentView } from '../Recoil/views'
import { FunctionComponent } from '../../../.cache/typescript/4.4/node_modules/@types/react'
import { useSpring, useTransition } from "@react-spring/core";
import MyEditor from '../Components/MyEditor'

const Landing: FunctionComponent = (props:any) => {

    const methods: any = useRecoilValue(initializeeBook)
    const update: Function = useSetRecoilState(forceUpdate)
    const html: string = useRecoilValue(editorText)
    const [view, setView] = useRecoilState<string>(currentView)
    const [loading, setLoading] = useState<boolean>(true)
    const [acct, setAcct] = useRecoilState<string>(account)
    const fetchAccount: string = useRecoilValue(getAccount)
    const chapterCt: number = useRecoilValue(getChapterCount)
    const [currentChapter, setCurrentChapter] = useRecoilState<number>(activeChapter)
    console.log(methods)
    useEffect(() => {
        if(loading) {
            setAcct(fetchAccount)
        }
    })



    /*const [springWidth, setSpringWidth] = useState<number>(0)
    const springW = useSpring({
        springWidth: active ? springWidth : 0
    })*/

    const createChapter = async () => {
        try {
            console.log('creating...')
            await methods.createChapter('The Ritual', 'A breakdown of the 3 phases involved and their purpose.').send({from: acct})
        } catch (error) {
            console.log(error)
        }
    }

    const createPage = async () => {
        try {
            await methods.createPage(currentChapter, html).send({from: acct})
            update(Math.random())
        } catch(error) {
            console.log(error)
        }
    }

    const handleChapter = (event: string) => {
        switch(event) {
            case 'inc': {
                setCurrentChapter(currentChapter + 1)
                break;
            }
            case 'dec': {
                setCurrentChapter(currentChapter - 1)
                break;
            }
            default: break;
        }
    }

    return(
        <>
            <p style={{textAlign: 'center'}}>Current Chapter: {currentChapter}</p>
            <MyEditor />
            <br/>
            <Button variant='success' onClick={() => setView('boarding')}>Boarding Page</Button>
            <Button variant='info' onClick={() => setView('pagepreview')}>Page Preview</Button>
            <Button variant='info' onClick={() => setView('ebook')}>Ebook Page</Button>
            <br/>
            <Button variant='success' onClick={() => createChapter()}>Create Chapter</Button>
            <Button variant='success' onClick={() => createPage()}>Create Page</Button>
            <br/>
            {currentChapter > 0 && <Button variant='danger' onClick={() => handleChapter('dec')}>Decrement Chapter</Button>}
            {currentChapter < chapterCt && <Button variant='success' onClick={() => handleChapter('inc')}>Increment Chapter</Button>}
        </>
    )

}

export default Landing