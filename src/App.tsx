import useViewport from './utils/useViewport'
import { currentView } from './Recoil/views'
import { useRecoilValue } from 'recoil'
import Boarding from './Pages/Boarding';
import EBook from './Pages/EBook';
import AboutThisApp from './Pages/AboutThisApp';
import Static from './Pages/Static';
import ImageUpload from './Pages/ImageUpload'
import { useTransition, animated } from 'react-spring'

const hashMap = new Map([
  ['boarding', <Boarding/>],
  ['ebook', <EBook/>],
  ['about', <AboutThisApp/>],
  ['static', <Static/>],
  ['upload', <ImageUpload/>]
])

function App() {

  useViewport()

  const view: string = useRecoilValue(currentView)

  const transition = useTransition(view, {
    from: {opacity: 0, scale: 0},
    enter: {opacity: 1, scale: 1},
    leave: {opacity: 0, scale: 0}
  })

  return transition((style, i) => {
    return(
      <animated.div style={style}>
        {hashMap.get(i)}
      </animated.div>
    )
  });
}

export default App;