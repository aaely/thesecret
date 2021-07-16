import { Editor } from 'react-draft-wysiwyg';
import { EditorState, ContentState } from 'draft-js';
import htmlToDraft from 'html-to-draftjs';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

interface PropTypes {
    displayText: string
}

const PagePreviewEditor: Function = (props:PropTypes) => {

    return(
        <div style={{margin: '0 auto', maxWidth: window.screen.availWidth*.6}}>
            <Editor
                    editorStyle={{borderStyle: 'solid', borderWidth: '2px', borderColor: '#aaa', backgroundColor: '#eee'}}
                    editorState={EditorState.createWithContent(ContentState.createFromBlockArray(htmlToDraft(props.displayText).contentBlocks))}
                    readOnly={true}
                    toolbarHidden={true}
            />
        </div>
    )

}

export default PagePreviewEditor