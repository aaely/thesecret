//import useWebsocket from './utils/useWebsocket.tsx'
//import useNetworkMonitor from '../utils/useNetworkMonitor.tsx'
import useViewport from './utils/useViewport'
import Landing from './Pages/Landing';
import ReactDefault from './Components/ReactDefault';
import { currentView } from './Recoil/views'
import { useRecoilValue } from 'recoil'
import TrailAnimation from './Components/TrailAnimation'
import Boarding from './Pages/Boarding';
import PagePreview from './Pages/PagePreview';
import EBook from './Pages/EBook';

function App() {

  //useWebsocket()
  useViewport()

  const view: string = useRecoilValue(currentView)

  return (
    <>
      {view === 'landing' && <TrailAnimation />}
      {view === 'landing' && <Landing />}
      {view === 'boarding' && <Boarding />}
      {view === 'pagepreview' && <PagePreview />}
      {view === 'ebook' && <EBook />}
    </>
  );
}

export default App;