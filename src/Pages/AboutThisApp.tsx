import { FunctionComponent, useState } from 'react'
import { useRecoilState } from 'recoil'
import { currentView } from '../Recoil/views'
import { Button } from 'react-bootstrap'
import styled from 'styled-components'
import { useSpring, 
         useTransition, 
         animated,
         useTrail,
         config, 
         useChain,
         useSpringRef } from 'react-spring'
import FrontEndOpen from '../Components/AboutSlides/FrontEndOpen'
import FrontEndClosed from '../Components/AboutSlides/FrontEndClosed'
import HostingOpen from '../Components/AboutSlides/HostingOpen'
import HostingClosed from '../Components/AboutSlides/HostingClosed'

const Wrapper = styled.div `
    width: 100%;
    height: 100%;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const FrontEnd: Function = () => {

    const [open, setOpen] = useState<boolean>(false)

    const { transform, opacity } = useSpring({
        opacity: open ? 1 : 0,
        transform: `perspective(600px) rotateY(${open ? 360 : 0}deg)`,
        config: { mass: 5, tension: 500, friction: 80 },
      })

    return(
        <Wrapper>
            <animated.div onClick={() => setOpen(!open)} style={{ opacity: open ? opacity.to(o => 1 + o) : opacity.to(o => 1 - o), transform }}>
                {open ? <FrontEndOpen/> : <FrontEndClosed/>}
            </animated.div>
        </Wrapper>
    )



    /*return(
        <div>
            <h1 style={{textAlign: 'center', marginTop: '3%'}}>About this Application</h1>
            <br/>
            <h3 style={{textAlign: 'center'}}>The Stack</h3>
            <br/>
            <h5 style={{textAlign: 'center'}}>Front End</h5>
            <ul style={{marginLeft: '5%'}}>
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
    )*/

}

const BackEnd: Function = () => {

}

const Hosting: Function = () => {

    const [open, setOpen] = useState<boolean>(false)

    const { transform, opacity } = useSpring({
        opacity: open ? 1 : 0,
        transform: `perspective(600px) rotateY(${open ? 360 : 0}deg)`,
        config: { mass: 5, tension: 500, friction: 80 },
      })

    return(
        <Wrapper>
            <animated.div onClick={() => setOpen(!open)} style={{ opacity: open ? opacity.to(o => 1 + o) : opacity.to(o => 1 - o), transform }}>
                {open ? <HostingOpen/> : <HostingClosed/>}
            </animated.div>
        </Wrapper>
    )
}

const AboutThisApp: FunctionComponent = (props: any) => {

    return(
        <>
            <FrontEnd/>
            <br/>
            <Hosting/>
        </>
    )
}

export default AboutThisApp