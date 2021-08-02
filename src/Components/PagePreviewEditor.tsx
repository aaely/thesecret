import { Editor } from 'react-draft-wysiwyg';
import { EditorState, ContentState } from 'draft-js';
import { useRecoilValue } from 'recoil'
import { derivedWidth as d } from '../Recoil';
import htmlToDraft from 'html-to-draftjs';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

interface PropTypes {
    displayText: string
}

const PagePreviewEditor: Function = (props:PropTypes) => {

    const derivedWidth: number = useRecoilValue(d)

    return(
        <div style={{margin: '0 auto', width: `90%`, display: 'block'}} >
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