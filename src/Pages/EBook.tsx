import { FunctionComponent, MutableRefObject, useRef } from "react";
import { useRecoilState, useRecoilValue } from 'recoil'
import { Button, Table } from "react-bootstrap";
import { eBookDims, activePage, activeChapter, getPageCount, getChapterCount, chapterSelector, pageSelector } from '../Recoil/eBook'
import useEBookViewport from "../utils/useEBookViewport";
import { currentView } from "../Recoil/views";
import { Page, Chapter } from '../types/types'
import PagePreviewEditor from "../Components/PagePreviewEditor";
import TableOfContents from "../Components/eBook/TableOfContents";

const EBook: FunctionComponent = (props:any) => {

    const eBookRef: MutableRefObject<any> = useRef(null)
    useEBookViewport(eBookRef)
    const [view, setView] = useRecoilState<string>(currentView)
    const [page, setPage] = useRecoilState<any>(activePage)
    const [chapt, setChapt] = useRecoilState<any>(activeChapter)
    const totalChapters: number = useRecoilValue(getChapterCount)
    const totalPages: number = useRecoilValue(getPageCount)
    const dims = useRecoilValue(eBookDims)

    const currentPage: any = useRecoilValue(pageSelector(page))
    const currentChapt: any = useRecoilValue(chapterSelector(chapt))
    console.log(currentChapt)

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
            <Table style={{margin: '0 auto', maxWidth: dims.width * .5}}>
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
            return <PagePreviewEditor displayText={currentPage.content} />
        }
        if(!page) {
            return <p>Unable to retrieve page number. Check Ethereum network connection.</p>
        }
    }


    return(
        <div ref={eBookRef}>
            <h1 style={{textAlign: 'center'}}>Ebook Component</h1>
            <br/>
            {chapt > 0 && page > 0 && <h3 style={{textAlign: 'center'}}>Chapter {chapt} of {totalChapters}</h3>}
            {chapt > 0 && page > 0 && <h3 style={{textAlign: 'center'}}>{currentChapt.title}</h3>}
            <br/>
            {renderContent()}
            <br/>
            {chapt > 0 && page > 0 && <h3 style={{textAlign: 'center'}}>Current Page: {page} of {totalPages}</h3>}
            <br/>
            {ButtonsDiv()}
            <br/>
            <Button variant='info' onClick={() => setView('landing')}>Landing Page</Button>
        </div>
    )
}

export default EBook