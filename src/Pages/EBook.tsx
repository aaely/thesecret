import { FunctionComponent, useState, useEffect, useRef, MutableRefObject } from "react";
import { useRecoilState, useRecoilValue } from 'recoil'
import { Button, Table } from "react-bootstrap";
import { activePage, activeChapter, getPageCount, getChapterCount, chapterSelector, pageSelector, getAccount } from '../Recoil'
import { currentView } from "../Recoil/views";
import { useTransition, animated } from 'react-spring'
import styled from 'styled-components'
import PagePreviewEditor from "../Components/PagePreviewEditor";
import TableOfContents from "../Components/eBook/TableOfContents";

const Wrapper = styled.div `
    position: absolute;
    width: 100%;
    will-change: box-shadow;
    display: block;
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

    const topRef: MutableRefObject<any> = useRef(null)
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
                if(currentChapt.pages[currentChapt.pages.length - 1] == page < totalPages){
                    setPage(parseInt(page) + 1)
                    setChapt(parseInt(chapt) + 1)
                    topRef.current.scrollIntoView()
                    break;
                }
                if(page === 0) {
                    setPage(1)
                    setChapt(1)
                    topRef.current.scrollIntoView()
                    break;
                }
                if(currentChapt.pages[currentChapt.pages.length - 1] > page && page < totalPages) {
                    setPage(page + 1)
                    topRef.current.scrollIntoView()
                    break;
                }
                if(page == totalPages) {
                    setPage(0)
                    topRef.current.scrollIntoView()
                    break
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
                    </tr>
                </thead>
            </Table>
        )
    }

    const transition = useTransition(currentPage, {
        from: {opacity: 0, transform: 'translate3d(50%,0,0)'},
        enter: {opacity: 1, transform: 'translate3d(0,0,0)'},
        leave: {opacity: 0, transform: 'translate3d(-50%,0,0)'}
    })

    const renderContent = () => {
        if(page === 0) {
            return transition((style, i) => {
                return(
                <animated.div style={style}>
                    <Wrapper onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave} style={{boxShadow: boxShadow}}><TableOfContents /></Wrapper>
                </animated.div>)
            })
        }
        if(page > 0) {
            return transition((style, i) => {
                return(
                <animated.div style={style}>
                    <Wrapper onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave} onClick={() => handleEvent('nextPage')} style={{boxShadow: boxShadow}}><PagePreviewEditor displayText={i.content} /></Wrapper>
                </animated.div>)
                })
        }
    }

    const [boxShadow, setBoxShadow] = useState<string>('0px 3px 10px -2px rgba(0, 0, 0, 0.4)')
    const handleMouseOver = () => setBoxShadow('0px 6px 20px -5px rgba(0, 0, 0, 0.4)')
    const handleMouseLeave = () => setBoxShadow('0px 3px 10px -2px rgba(0, 0, 0, 0.4)')
    
    return(
        <div style={{position: 'absolute', overflowX: 'hidden', padding: '1%', width: '100%', height: '100%', WebkitOverflowScrolling: 'touch'}}>
            <h3 style={{textAlign: 'center', marginTop: '1%', marginBottom: '1%'}}>Powered By <a href='https://ethereum.org' target='_blank'>Ethereum</a>, <a href='https://ipfs.io' target='_blank'>IPFS</a>, and <a href='https://infura.io' target='_blank'>Infura</a></h3>
            <br/>
            {chapt > 0 && page > 0 && <h3 style={{textAlign: 'center'}}>Chapter {chapt} of {totalChapters}</h3>}
            {chapt > 0 && page > 0 && <h3 style={{textAlign: 'center'}}>{currentChapt.title}</h3>}
            <br/>
            {chapt > 0 && page > 0 && <h3 ref={topRef} style={{textAlign: 'center'}}>Page {page} of {totalPages}</h3>}
            <br/>
            {ButtonsDiv()}
            <br/>
            {renderContent()}
        </div>
    )
}

export default EBook