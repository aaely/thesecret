import { useState, useRef, useEffect, FunctionComponent } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { editorText } from '../Recoil'
import { initializeeBook, workingChapter } from '../Recoil/eBook'
import { currentView } from '../Recoil/views'
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import htmlToDraft from 'html-to-draftjs';
import draftToHtml from 'draftjs-to-html';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const MyEditor: FunctionComponent = (props:any) => {
    
    const [html, setHtml] = useRecoilState<string>(editorText)
    let initializeState: EditorState = EditorState.createWithContent(ContentState.createFromBlockArray(htmlToDraft(html).contentBlocks))
    const [editorState, setEditorState] = useState<EditorState | undefined>(initializeState)

    const onEditorStateChange = (editorState: EditorState) => {
        setEditorState(editorState)
        setHtml(draftToHtml(convertToRaw(editorState.getCurrentContent())).replace(/[\n]/g, ''))
        console.log(html)
    }

    return(
        <div style={{margin: '0 auto', maxWidth: window.screen.availWidth*.6}}>
            <Editor
                    editorStyle={{borderStyle: 'solid', borderWidth: '2px', borderColor: '#aaa', backgroundColor: '#eee'}}
                    editorState={editorState}
                    onEditorStateChange={onEditorStateChange}
            />
        </div>
    )

}

export default MyEditor