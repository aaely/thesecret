import { useLayoutEffect, useState } from 'react'
import { useRecoilState, useSetRecoilState, useRecoilValue } from 'recoil'
import { width as w, height as h, derivedWidth as d } from '../Recoil'
import useSidebarWidth from './useSidebarWidth';
import { sidebarWidth as s } from '../Recoil/sidebar';

const useViewport = () => {

        useSidebarWidth()

        const [width, setWidth] = useRecoilState<number>(w);
        const [height, setHeight] = useRecoilState<number>(h);
        const [sidebarWidth, setSidebarWidth] = useRecoilState<number>(s)

        const [derivedWidth, setDerivedWidth] = useRecoilState<number>(d)
      
        useLayoutEffect(() => {
          const handleWindowResize = () => {
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
            setDerivedWidth(width - sidebarWidth)
            if (window.innerWidth < 400) {
              setSidebarWidth(0)
              setDerivedWidth(window.innerWidth)
            }
          }
      
          window.addEventListener("resize", handleWindowResize);
          return () => window.removeEventListener("resize", handleWindowResize);
        }, [width, height, sidebarWidth]);
      
        return derivedWidth
  }

  export default useViewport