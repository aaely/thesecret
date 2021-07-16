import { useRecoilValue } from 'recoil'
import { width } from '../../Recoil'
import { getAllChapters, activePage } from '../../Recoil/eBook'
import { Chapter } from '../../types/types'
import { Button, Table } from 'react-bootstrap'

const TableOfContents: Function = (props: any) => {

    const chapters = useRecoilValue(getAllChapters)
    const screenWidth: number = useRecoilValue(width)
    const page: number = useRecoilValue(activePage)
    
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
                    {chapters && chapters.map((chapter) => {
                        console.log(chapters)
                        return(
                            <tr>
                                <td>
                                    {chapter.chapterId}
                                </td>
                                <td>
                                    {chapter.title}
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