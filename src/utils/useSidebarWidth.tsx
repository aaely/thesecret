import { useLayoutEffect } from 'react'
import { useSetRecoilState, useRecoilValue } from 'recoil'
import { sidebarWidth as sw, collapsed as c, toggled as t } from '../Recoil/sidebar'

const useSidebarWidth: Function = () => {

    const setSidebarWidth: Function = useSetRecoilState(sw);
    const collapsed: boolean = useRecoilValue(c);
    const toggled: boolean = useRecoilValue(t);
      
    useLayoutEffect(() => {
        if(collapsed) {
            setSidebarWidth(80)
        }
        if(!collapsed) {
            setSidebarWidth(270)
        }

    }, [collapsed, toggled])

    return null
      
  }

  export default useSidebarWidth