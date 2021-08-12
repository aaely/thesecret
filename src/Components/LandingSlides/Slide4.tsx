import { Button } from 'react-bootstrap'
import { useSetRecoilState } from 'recoil'
import { currentView } from '../../Recoil/views'

const Slide4: Function = (props: any) => {

    const setView: Function = useSetRecoilState(currentView)

    return(
        <>
            <h1 style={{textAlign: 'center', marginTop:'10%'}}>There is no longer any possible argument for the need of indentured servants. We need programmers to automate tasks, and this cult stifles their mental development.</h1>
        </>
    )
}

export default Slide4