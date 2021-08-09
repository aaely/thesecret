import useViewport from './utils/useViewport'
import { currentView } from './Recoil/views'
import { useRecoilValue } from 'recoil'
import Boarding from './Pages/Boarding';
import EBook from './Pages/EBook';
import EditPage from './Pages/EditPage';
import AboutThisApp from './Pages/AboutThisApp';
import 'react-pro-sidebar/dist/css/styles.css';
import Static from './Pages/Static';
import { useTransition, animated } from 'react-spring'

const hashMap = new Map([
  ['boarding', <Boarding/>],
  ['ebook', <EBook/>],
  ['about', <AboutThisApp/>],
  ['static', <Static/>],
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