import { useLayoutEffect } from 'react'
import { useSetRecoilState, useRecoilValue } from 'recoil'
import { sidebarWidth as sw, collapsed as c, toggled as t } from '../Recoil/sidebar'
import { derivedWidth as w } from '../Recoil'

const useSidebarWidth: Function = () => {

    const setSidebarWidth: Function = useSetRecoilState(sw);
    const collapsed: boolean = useRecoilValue(c);
    const toggled: boolean = useRecoilValue(t);
    const setWidth: Function = useSetRecoilState(w)
      
    useLayoutEffect(() => {
        if(collapsed) {
            setSidebarWidth(80)
            setWidth(window.screen.availWidth - 80)
        }
        if(!collapsed) {
            setSidebarWidth(270)
            setWidth(window.screen.availWidth - 270)
        }

    }, [collapsed, toggled])

    return null
      
  }

  export default useSidebarWidth