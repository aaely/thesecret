import PagePreviewEditor from "../Components/PagePreviewEditor";
import { useRecoilState, useRecoilValue } from 'recoil'
import { currentView } from "../Recoil/views";
import { editorText } from "../Recoil";
import { useState, FunctionComponent } from 'react'
import { Button } from 'react-bootstrap'
import { initializeeBook, workingChapter } from "../Recoil/eBook";

const PagePreview: FunctionComponent = (props: any) => {

    const [loading, setLoading] = useState<boolean>(false)
    const [view, setView] = useRecoilState(currentView)
    const html: string = useRecoilValue(editorText)
    const methods: any = useRecoilValue(initializeeBook)
    const chapter: number = useRecoilValue(workingChapter)

    const saveContent = async () => {
        try {
            setLoading(true)
            html.replace(/"/g, '\'\'\'')
            html.replace(/\\/g, '----')
            await methods.createPage(chapter, html)
            setLoading(false)
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <>
            <h3 style={{textAlign: 'center', marginTop: window.screen.availHeight * .03}}>Chapter Submitting to: {chapter}</h3>
            <PagePreviewEditor displayText={editorText} />
            <br/>
            <Button variant='success' onClick={() => saveContent()}>Save Text</Button>
            <br/>
            <Button variant='info' onClick={() => setView('landing')}>Landing Page</Button>
            <br/>
            <Button variant='info' onClick={() => setView('boarding')}>Boarding Page</Button>
        </>
    )
}

export default PagePreview