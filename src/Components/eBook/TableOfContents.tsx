import { useRecoilValue, useRecoilState } from 'recoil'
import { width } from '../../Recoil'
import { getAllChapters, activePage, activeChapter } from '../../Recoil/eBook'
import { Chapter } from '../../types/types'
import { Button, Table } from 'react-bootstrap'

const TableOfContents: Function = (props: any) => {

    const chapters = useRecoilValue(getAllChapters)
    const screenWidth: number = useRecoilValue(width)
    const [page, setPage] = useRecoilState<number>(activePage)
    const [chapt, setChapt] = useRecoilState(activeChapter)

    const jumpToChapter = (selectedChapter: any, firstPageOfChapter: any) => {
        setChapt(parseInt(selectedChapter))
        setPage(parseInt(firstPageOfChapter))
    }
    
    const renderTable = () => {
        return(
            <Table striped responsive style={{margin: '0 auto', maxWidth: screenWidth*.7}}>
                <thead>
                    <tr>
                        <td>
                            Chapter
                        </td>
                        <td>
                            Title
                        </td>
                        <td>
                            Chapter Summary
                        </td>
                        <td>
                            Chapter Page Range
                        </td>
                    </tr>
                </thead>
                <tbody>
                    {chapters && chapters.map((chapter: Chapter) => {
                        return(
                            <tr key={chapter.chapterId}>
                                <td>
                                    {chapter.chapterId}
                                </td>
                                <td>
                                    <Button variant='link' onClick={() => jumpToChapter(chapter.chapterId, chapter.pages[0])}>{chapter.title}</Button>
                                </td>
                                <td>
                                    {chapter.description}
                                </td>
                                <td>
                                    {chapter.pages[0]} - {chapter.pages[chapter.pages.length - 1]}
                                </td>
                            </tr>
                        )
                        })}
                </tbody>
            </Table>
        )
    }

    return(
        <div>
            <h1 style={{textAlign: 'center'}}>Table of Contents</h1>
            <br/>
            {page === 0 && renderTable()}
        </div>
    )
}

export default TableOfContents