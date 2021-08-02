import { FunctionComponent, useEffect, useRef, useState } from 'react'
import { editorText } from '../Recoil'
import { useRecoilState, useRecoilValue } from 'recoil'
import { Button } from 'react-bootstrap'
import { currentView } from '../Recoil/views'
import { getPageCount, activePage, pageSelector, initializeeBook, account } from '../Recoil/eBook'
import { useSpring, useTransition } from "@react-spring/core";
import MyEditor from '../Components/MyEditor'

const EditPage: FunctionComponent = (props: any) => {

    const [localPageNum, setLocalPageNum] = useState<number>(1)
    const [html, setHtml] = useRecoilState<string>(editorText)
    const page = useRecoilValue(pageSelector(localPageNum))
    const methods = useRecoilValue(initializeeBook)
    const [view, setView] = useRecoilState<string>(currentView)
    const acct:string = useRecoilValue(account)
    console.log(page)

    useEffect(() => {
        setHtml(page.content)
    }, [localPageNum])

    const handlePageChange = (action: string) => {
        switch(action) {
            case 'inc' : {
                setLocalPageNum(localPageNum + 1)
                setHtml(page.content)
                break
            }
            case 'dec' : {
                setLocalPageNum(localPageNum - 1)
                setHtml(page.content)
                break
            }
            default: break;
        }
    }

    const editPage = async () => {
        try {
            await methods.editPage(localPageNum, html).send({from: acct})
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <h3 style={{textAlign: 'center'}}>Selected Page: {localPageNum}</h3>
            <MyEditor />
            <Button variant='success' onClick={() => editPage()} style={{margin: '0 auto', display: 'block'}}>Submit Changes</Button>
            <br />
            <Button variant='danger' onClick={() => handlePageChange('dec')} style={{margin: '0 auto', display: 'block'}}>{'<-- page'}</Button>
            <Button variant='info' onClick={() => handlePageChange('inc')} style={{margin: '0 auto', display: 'block'}}>{'page -->'}</Button>
            <br/>
            <Button variant='info' onClick={() => setView('landing')} style={{margin: '0 auto', display: 'block'}}>Landing Page</Button>
        </>
    )
}

export default EditPage