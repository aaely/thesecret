import { FunctionComponent } from 'react'
import { useRecoilState } from 'recoil'
import { currentView } from '../Recoil/views'
import { Button } from 'react-bootstrap'

const AboutThisApp: FunctionComponent = (props:any) => {

    return(
        <div>
            <h1 style={{textAlign: 'center', marginTop: window.screen.availHeight * .03}}>About this Application</h1>
            <br/>
            <h3 style={{textAlign: 'center'}}>The Stack</h3>
            <br/>
            <h5 style={{textAlign: 'center'}}>Front End</h5>
            <ul style={{marginLeft: window.screen.availWidth * .05}}>
                <li>
                    State Management:
                    <ul>
                        <li>
                            <a href='https://reactjs.org/docs/hooks-state.html'>React Hook State</a>
                        </li>
                        <li>
                            <a href='https://recoiljs.org/'>Recoil.js</a>
                        </li>
                    </ul>
                </li>
                <li>
                    Animations:
                    <ul>
                        <li>
                            <a href='https://react-spring.io/'>React Spring</a>
                        </li>
                    </ul>
                </li>
            </ul>
            <h5 style={{textAlign: 'center'}}>Back End</h5>
                <ul>
                    <li>
                        Solidity:
                            <ul>
                                <li>
                                    <a href='https://docs.soliditylang.org/'>Solidity</a>
                                </li>
                            </ul>
                    </li>
                </ul>
            <h5 style={{textAlign: 'center'}}>Database</h5>
                <ul>
                    <li>
                        <a href='https://ethereum.org/'>Ethereum</a>
                    </li>
                </ul>
        </div>
    )

}

export default AboutThisApp