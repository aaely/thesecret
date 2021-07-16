import { MutableRefObject, useLayoutEffect, useState } from "react";

const useComponentViewport: Function = (ref: MutableRefObject<any>) => {
    const [dims, setDims] = useState({width: 0, height: 0})

    useLayoutEffect(() => {
        const handleResize = () => {
            setDims({width: ref.current.offsetWidth, height: ref.current.offsetHeight})
        }

        /*if(ref.current) {
            setDims({width: ref.current.offsetWidth, height: ref.current.offsetHeight})
        }*/

        window.addEventListener('resize', handleResize)

        return() => {
            window.removeEventListener('resize', handleResize)
        }
    }, [dims])

    return { dims }
}

export default useComponentViewport