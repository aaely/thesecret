import { Form, Button } from 'react-bootstrap'
import ipfs from '../utils/ipfs'
import { useState } from 'react'

const NewSidebarBgImage = () => {

    const [buffer, setBuffer] = useState([])

    const handleChange = ({target: {id, files}}) => {
        switch(id) {
            case 'sidebarBgImage': {
                const reader = new window.FileReader()
                reader.readAsArrayBuffer(files[0])
                reader.onloadend = () => {
                    setBuffer([])
                    setBuffer(Buffer(reader.result))
                }
                break;
            }
            default: break;
        }
    } 

    const saveImage = async () => {
        try {
            console.log(ipfs)
            if(buffer.length > 0) {
                const imageHash = await ipfs.add(buffer)
                console.log(imageHash)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const renderForm = () => {
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
            {buffer.length > 0 && <Button variant='success' onClick={saveImage}>Save Image</Button>}
        </>
    )
}

export default NewSidebarBgImage