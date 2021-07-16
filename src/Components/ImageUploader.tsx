import { Form } from 'react-bootstrap'
import ipfs from '../utils/ipfs'
import { useState } from 'react'

declare const Buffer: any;

const NewSidebarBgImage: Function = (props: any) => {

    const [buffer, setBuffer] = useState([])

    const handleChange: any = ({target: {id, files}}: any) => {
        switch(id) {
            case 'sidebarBgImage': {
                const reader = new window.FileReader()
                reader.readAsArrayBuffer(files[0])
                reader.onloadend = () => {
                    setBuffer([])
                    const result: any = new Buffer(reader.result)
                    setBuffer(result)
                }
                break;
            }
            default: break;
        }
    } 

    const saveImage = async () => {
        try {
            if(buffer.length > 0) {
                const imageHash = await ipfs.add(buffer)
                console.log(imageHash)
                //await addSidebarImage(imageHash.path)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const renderForm: Function = () => {
        return(
            <Form>
                <Form.Group>
                    <Form.Label>Background Image for Sidebar</Form.Label>
                    <Form.File id='sidebarBgImage' type='file' onChange={handleChange} />
                </Form.Group>
            </Form>
        )
    }

    return(
        <>
            {renderForm()}
            <br/>
            {buffer.length > 0 && <div onClick={saveImage}>Save Image</div>}
        </>
    )
}

export default NewSidebarBgImage