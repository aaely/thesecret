import { Menu, MenuItem, SubMenu } from 'react-pro-sidebar'
import { useEffect } from 'react'
import { FaEthereum, FaEdit, FaBook, FaHome, FaQuestionCircle } from 'react-icons/fa'
//import {  } from '../Recoil/sidebar'
import { currentView } from '../../Recoil/views'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { BsGearFill } from 'react-icons/bs'
import { Badge, Button, Row } from 'react-bootstrap'
import { GiHemp } from 'react-icons/gi'
import 'react-pro-sidebar/dist/css/styles.css';

interface PropTypes {
    changeHandler: Function
}

const MySidebarContent: Function = (props: PropTypes) => {

    const setView: Function = useSetRecoilState(currentView)

    /*useEffect(() => {
        
    }, [])*/


    return(
        <>
            <Menu iconShape="square">
                <MenuItem icon={<FaHome />}><a onClick={() => setView('landing')}>Dashboard</a></MenuItem>
                <MenuItem icon={<FaEthereum />}><a onClick={() => setView('ebook')}>OnLine EBook</a></MenuItem>
                <MenuItem icon={<FaEdit />}><a onClick={() => setView('editpage')}>Edit Page</a></MenuItem>
                <MenuItem icon={<FaBook />}><a onClick={() => setView('static')}>OffLine EBook</a></MenuItem>
                <MenuItem icon={<FaQuestionCircle />}><a onClick={() => setView('about')}>About This App</a></MenuItem>
                <SubMenu title="Settings" icon={<BsGearFill />} >
                    <MenuItem><div onClick={() => props.changeHandler('collapsed')} color='secondary'>Collapsed</div></MenuItem>
                    <MenuItem><div onClick={() => props.changeHandler('rtl')} color='secondary'>R-t-L</div></MenuItem>
                    <MenuItem><div onClick={() => props.changeHandler('image')} color='secondary'>Use Background Image</div></MenuItem>
                </SubMenu>
            </Menu>
        </>
    )
}

export default MySidebarContent