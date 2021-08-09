import { useState, useEffect, FunctionComponent } from 'react'
import { useRecoilValue, useRecoilState } from 'recoil'
import { Button } from 'react-bootstrap'
import { editorText } from '../Recoil'
import { useInterval } from '../utils/useInterval'
import { currentView } from '../Recoil/views'
import { useSpring, useTransition, animated } from 'react-spring'
import Slide1 from '../Components/LandingSlides/Slide1'
import Slide2 from '../Components/LandingSlides/Slide2'
import Slide3 from '../Components/LandingSlides/Slide3'
import Slide4 from '../Components/LandingSlides/Slide4'
import Slide5 from '../Components/LandingSlides/Slide5'

const images = [
    '/sunset.jpg',
    '/cathedralRock.jpg',
    '/lovellCanyon.jpg',
    '/kernRiver.JPG',
    '/redRock.jpg'
]

const slides = [
    <Slide1/>,
    <Slide2/>,
    <Slide3/>,
    <Slide4/>,
    <Slide5/>
]
 
const Boarding: FunctionComponent = (props:any) => {

    const [view, setView] = useRecoilState<string>(currentView)
    const [index, setIndex] = useState<number>(0)
    
    useInterval(() => {
        if(index < slides.length - 1) {
            setIndex(index + 1)
        }
    }, 4000)

    const transition = useTransition(index, {
        key: index,
        from: {opacity: 0, /*scale: 0, transform: 'translate3d(50%,0,0)'*/},
        enter: {opacity: 1, /*scale: 1, transform: 'translate3d(0,0,0)'*/},
        leave: {opacity: 0, /*scale: 0, transform: 'translate3d(-50%,0,0)'*/},
        config: {duration: 3000}
    })

    return(
        <>
            {transition((style, i) => {
                return(
                    <animated.div style={{...style, top: 0, left: 0, width: '100vw', height: '100vh', backgroundImage: `url(${images[i]})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', overflow: 'hidden', position: 'absolute'}}>
                            {slides[i]}
                    </animated.div>
                )
            })}
        </>
    )

}

export default Boarding