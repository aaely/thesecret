import { Editor } from 'react-draft-wysiwyg';
import { EditorState, ContentState } from 'draft-js';
import { useRecoilValue } from 'recoil'
import { derivedWidth as d } from '../Recoil';
import htmlToDraft from 'html-to-draftjs';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { ReactNode } from 'react';

interface PropTypes {
    displayText: string
}

const PagePreviewEditor: Function = (props:PropTypes) => {

    return(
        <>
            <Editor
                    editorState={EditorState.createWithContent(ContentState.createFromBlockArray(htmlToDraft(props.displayText).contentBlocks))}
                    readOnly={true}
                    toolbarHidden={true}
            />
        </>
    )

}

export default PagePreviewEditor