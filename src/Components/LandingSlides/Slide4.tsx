import { Button } from 'react-bootstrap'
import { useSetRecoilState } from 'recoil'
import { currentView } from '../../Recoil/views'

const Slide4: Function = (props: any) => {

    const setView: Function = useSetRecoilState(currentView)

    return(
        <>
            <h1 style={{textAlign: 'center', marginTop:'10%'}}>Are you using a Web3/dApp Browser?</h1>
            <Button style={{textAlign: 'center', marginTop: '2%', marginBottom: '2%', display: 'block', margin: '0 auto'}} onClick={() => setView('static')} variant='danger'>Wtf?</Button>
            <Button style={{textAlign: 'center', display: 'block', marginTop: '1%', margin: '0 auto'}} onClick={() => setView('ebook')} variant='success'>Yes</Button>
        </>
    )
}

export default Slide4