import { useState, useEffect, FunctionComponent } from 'react'
import { useRecoilValue, useRecoilState } from 'recoil'
import { Button } from 'react-bootstrap'
import { editorText } from '../Recoil'
import { currentView } from '../Recoil/views'

const Boarding: FunctionComponent = (props:any) => {

    const [view, setView] = useRecoilState<string>(currentView)
    /*const submitPage: Function = async () => {
        await methods.savePage()
    }*/

    return(
        <>
            <h1>App Boarding</h1>
            <Button variant='success' onClick={() => setView('landing')}>Landing Page</Button>
        </>
    )

}

export default Boarding