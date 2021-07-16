import { useState, useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { FunctionComponent } from '../../../.cache/typescript/4.4/node_modules/@types/react'
import { editorText } from '../Recoil'
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, ContentState } from 'draft-js';
import htmlToDraft from 'html-to-draftjs';
import draftToHtml from 'draftjs-to-html';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";


const ReadOnlyEditor: Function = (props:any) => {

    const [displayText, setDisplayText] = useRecoilState<string>(editorText)

    let initializeState: EditorState = EditorState.createWithContent(ContentState.createFromBlockArray(htmlToDraft(displayText).contentBlocks))
    const [editorState, setEditorState] = useState<EditorState | undefined>(initializeState)

    return(
        <div style={{margin: '0 auto', maxWidth: window.screen.availWidth*.6}}>
            <Editor
                    editorStyle={{borderStyle: 'solid', borderWidth: '2px', borderColor: '#aaa', backgroundColor: '#eee'}}
                    editorState={EditorState.createWithContent(ContentState.createFromBlockArray(htmlToDraft(displayText.replace(/'''/g, '"')).contentBlocks))}
                    readOnly={true}
                    toolbarHidden={true}
            />
        </div>
    )

}

export default ReadOnlyEditor