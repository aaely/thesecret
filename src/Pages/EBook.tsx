import { FunctionComponent, useState, useEffect } from "react";
import { useRecoilState, useRecoilValue } from 'recoil'
import { Button, Table } from "react-bootstrap";
import { activePage, activeChapter, getPageCount, getChapterCount, chapterSelector, pageSelector } from '../Recoil'
import { currentView } from "../Recoil/views";
import styled from 'styled-components'
import PagePreviewEditor from "../Components/PagePreviewEditor";
import TableOfContents from "../Components/eBook/TableOfContents";

const Wrapper = styled.div `
    max-width: 100%;
    will-change: box-shadow;
    margin-left: 1%;
    padding-left: 1%;
    padding-right: 1%;
    margin-right: 1%;
    padding-bottom: 5%;
    overflow-x: hidden;
    overflow-y: auto;
    cursor: url('https://uploads.codesandbox.io/uploads/user/b3e56831-8b98-4fee-b941-0e27f39883ab/Ad1_-cursor.png') 39 39, auto;
`;

const EBook: FunctionComponent = (props:any) => {

    useEffect(() => {
        if(!totalChapters) {
            setView('boarding')
        }
    }, [])

    const [view, setView] = useRecoilState<string>(currentView)
    const [page, setPage] = useRecoilState<any>(activePage)
    const [chapt, setChapt] = useRecoilState<any>(activeChapter)
    const totalChapters: number = useRecoilValue(getChapterCount)
    const totalPages: number = useRecoilValue(getPageCount)

    const currentPage: any = useRecoilValue(pageSelector(page))
    const currentChapt: any = useRecoilValue(chapterSelector(chapt))

    const handleEvent = (event: string) => {
        switch(event) {
            case 'nextPage': {
                if(currentChapt.pages[currentChapt.pages.length - 1] == page){
                    setPage(parseInt(page) + 1)
                    setChapt(parseInt(chapt) + 1)
                    break;
                }
                if(page === 0) {
                    setPage(1)
                    setChapt(1)
                    break;
                }
                if(currentChapt.pages[currentChapt.pages.length - 1] > page) {
                    setPage(page + 1)
                    break;
                }
                break;
            }
            case 'previousPage': {
                console.log(chapt, page, currentChapt.pages[0])
                if((currentChapt.pages[0]) == page){
                    setPage(page - 1)
                    setChapt(chapt - 1)
                    break;
                }
                if(page === 1) {
                    setPage(0)
                    setChapt(0)
                }
                if(page > currentChapt.pages[0]){
                    setPage(page - 1)
                }
                break;
            }
            case 'toc': {
                setChapt(0)
                setPage(0)
                break;
            }
        }
    }

    const ButtonsDiv = () => {
        return(
            <Table style={{margin: '0 auto'}}>
                <thead>
                    <tr style={{textAlign: 'center'}}>
                        <td>
                            {page > 0 && <Button variant='danger' onClick={() => handleEvent('toc')}>Table of Contents</Button>}
                        </td>
                        <td>
                            {page > 0 && <Button variant='warning' onClick={() => handleEvent('previousPage')}>Previous Page</Button>}
                        </td>
                        <td>
                            {page < totalPages && <Button variant='info' onClick={() => handleEvent('nextPage')}>Next Page</Button>}
                        </td>
                    </tr>
                </thead>
            </Table>
        )
    }

    const renderContent = () => {
        if(page === 0) {
            return <TableOfContents />
        }
        if(page > 0) {
            return <div style={{padding: '1%'}}><PagePreviewEditor displayText={currentPage.content} /></div>
        }
        if(!page) {
            return <p>Unable to retrieve page number. Check Ethereum network connection.</p>
        }
    }

    const [boxShadow, setBoxShadow] = useState<string>('0px 3px 10px -2px rgba(0, 0, 0, 0.4)')
    const handleMouseOver = () => setBoxShadow('0px 6px 20px -5px rgba(0, 0, 0, 0.4)')
    const handleMouseLeave = () => setBoxShadow('0px 3px 10px -2px rgba(0, 0, 0, 0.4)')
    return(
        <div style={{margin: '0 auto'}}>
            <Button onClick={() => setView('boarding')}>Boarding</Button>
            <h1 style={{textAlign: 'center'}}>Ebook Component</h1>
            <br/>
            {chapt > 0 && page > 0 && <h3 style={{textAlign: 'center'}}>Chapter {chapt} of {totalChapters}</h3>}
            {chapt > 0 && page > 0 && <h3 style={{textAlign: 'center'}}>{currentChapt.title}</h3>}
            <br/>
            <Wrapper onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave} style={{boxShadow: boxShadow}}>
                {renderContent()}
            </Wrapper>
            <br/>
            {chapt > 0 && page > 0 && <h3 style={{textAlign: 'center'}}>Page {page} of {totalPages}</h3>}
            <br/>
            {ButtonsDiv()}
        </div>
    )
}

export default EBook