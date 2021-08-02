import { Menu, MenuItem } from 'react-pro-sidebar'
import { Row, Badge } from 'react-bootstrap'


const MySidebarFooter: Function = () => {

    return(
        <>
            <Menu iconShape='circle'>
                <Row>
                    <MenuItem><Badge variant='success'></Badge></MenuItem>
                </Row>
            </Menu>
        </>
    )
}

export default MySidebarFooter