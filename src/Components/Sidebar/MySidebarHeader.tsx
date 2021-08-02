import { Menu, MenuItem } from 'react-pro-sidebar'
import { GiConvergenceTarget } from 'react-icons/gi'
import { FaBars } from 'react-icons/fa'
import { useRecoilValue } from 'recoil'
import { collapsed as c } from '../../Recoil/sidebar'

interface PropTypes {
    changeHandler: Function
}

const MySidebarHeader: Function = (props: PropTypes) => {

    const collapsed: boolean = useRecoilValue(c)

    return(
        <>
            <Menu iconShape='round'>
                {collapsed && <MenuItem icon={<FaBars />} >
                    <a onClick={() => props.changeHandler('collapsed')}>
                        Expand
                    </a>
                </MenuItem>}
                {!collapsed && <MenuItem icon={<GiConvergenceTarget />} >
                    <a onClick={() => props.changeHandler('collapsed')}>
                        Collapse
                    </a>
                </MenuItem>}
            </Menu>
        </>
    )
}

export default MySidebarHeader