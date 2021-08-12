import { Button } from 'react-bootstrap'
import { useSetRecoilState } from 'recoil'
import { currentView } from '../../Recoil/views'

const Slide4: Function = (props: any) => {

    const setView: Function = useSetRecoilState(currentView)

    return(
        <>
            <h1 onClick={() => setView('ebook')} style={{textAlign: 'center', marginTop:'10%'}}>Click Here to View Content</h1>
        </>
    )
}

export default Slide4