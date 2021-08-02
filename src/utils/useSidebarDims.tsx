import { MutableRefObject, useLayoutEffect, useState } from "react"

type dims = {
    height: number,
    width: number
}

const useSidebarDims: Function = (ref: MutableRefObject<any>) => {

    const [dims, setDims] = useState<dims>({height: 0, width: 0})

    useLayoutEffect(() => {
        
    }, [])
    
    return dims
}

export default useSidebarDims