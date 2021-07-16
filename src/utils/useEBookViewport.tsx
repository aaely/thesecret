import { MutableRefObject, useLayoutEffect } from "react"
import { useRecoilState } from 'recoil'
import { eBookDims } from "../Recoil/eBook"

const useEBookViewport:Function = (myRef: MutableRefObject<any>) => {
    const [dims, setDims] = useRecoilState(eBookDims)
  
    useLayoutEffect(() => {
        const handleResize = () => {
            setDims({width: myRef.current.offsetWidth, height: myRef.current.offsetHeight})
            console.log(myRef.current.offsetWidth)
            console.log(dims)
        if(myRef.current) {
            setDims({width: myRef.current.offsetWidth, height: myRef.current.offsetHeight})
            console.log(myRef.current.offsetHeight)
        }
    }
  
      window.addEventListener('resize', handleResize)
  
      return () => {
        window.removeEventListener('resize', handleResize)
      }
    }, [myRef, dims])
  
    return { dims }
  }

  export default useEBookViewport