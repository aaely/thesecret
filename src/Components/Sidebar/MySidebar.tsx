import { FunctionComponent, useEffect } from "react";
import { useRecoilState, useRecoilValue } from 'recoil'
import { bgImage, image as i, rtl as r, collapsed as c, toggled as t, sidebarWidth as s } from '../../Recoil/sidebar'
import { ProSidebar, SidebarFooter, SidebarContent, SidebarHeader } from 'react-pro-sidebar';
import MySidebarHeader from './MySidebarHeader'
import MySidebarContent from './MySidebarContent'
import MySidebarFooter from "./MySidebarFooter";
import 'react-pro-sidebar/dist/css/styles.css';

const MySidebar: FunctionComponent = (props: any) => {

    const [rtl, setRtl] = useRecoilState<boolean>(r);
    const [collapsed, setCollapsed] = useRecoilState<boolean>(c);
    const [image, setImage] = useRecoilState<boolean>(i);
    const [toggled, setToggled] = useRecoilState<boolean>(t)
    const bgImgHash: string = useRecoilValue(bgImage)
    const sidebarBg: string = `https://ipfs.io/ipfs/${bgImgHash}`
    const sWidth: number = useRecoilValue(s)

    const handleChange: Function = (setting: string) => {
        switch(setting) {
            case 'rtl': {
                setRtl(!rtl)
                break;
            }
            case 'collapsed': {
                setCollapsed(!collapsed)
                break;
            }
            case 'image': {
                setImage(!image)
                break;
            }
            case 'toggled': {
                setToggled(!toggled)
                break;
            }
            default: break;
        }
    }

    /*useEffect(() => {

    }, [])*/

    return (
        <ProSidebar
        style={{position: 'fixed', maxWidth: `${sWidth}`}}
        image={image ? sidebarBg : false}
        rtl={rtl}
        collapsed={collapsed}
        toggled={toggled}
        breakPoint="md"
        onToggle={() => handleChange('toggled')}
        >
            <SidebarHeader>
                <MySidebarHeader
                changeHandler={handleChange}
                />
            </SidebarHeader>
            <SidebarContent>
                <MySidebarContent
                changeHandler={handleChange}
                />
            </SidebarContent>
            <SidebarFooter>
                <MySidebarFooter />
            </SidebarFooter>
        </ProSidebar>
    )
}
 
export default MySidebar;