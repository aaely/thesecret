//import useWebsocket from './utils/useWebsocket.tsx'
//import useNetworkMonitor from '../utils/useNetworkMonitor.tsx'
import { useRef } from 'react'
import { bgImage, sidebarWidth as s, rtl as r, toggled as t } from './Recoil/sidebar'
import useViewport from './utils/useViewport'
import Landing from './Pages/Landing';
import { currentView } from './Recoil/views'
import { useRecoilValue } from 'recoil'
import MySidebar from './Components/Sidebar/MySidebar'
import Boarding from './Pages/Boarding';
import PagePreview from './Pages/PagePreview';
import EBook from './Pages/EBook';
import EditPage from './Pages/EditPage';
import AboutThisApp from './Pages/AboutThisApp';
import 'react-pro-sidebar/dist/css/styles.css';
import Static from './Pages/Static';

function App() {

  //useWebsocket()
  const derivedWidth: number = useViewport()

  const sWidth: number = useRecoilValue(s)
  const rtl: boolean = useRecoilValue(r)
  const toggled: boolean = useRecoilValue(t)
  const view: string = useRecoilValue(currentView)

  return (
    <div style={{overflowX: 'hidden'}} className={`app ${rtl ? 'rtl' : ''} ${toggled ? 'toggled' : ''}`}>
      <MySidebar />
      <div style={{width: `${derivedWidth}px`, transform: `translate(${sWidth}px, 0)`, transition: 'transform .15s linear', marginLeft: `${sWidth}`}}>
        {view === 'landing' && <Landing />}
        {view === 'boarding' && <Boarding />}
        {view === 'pagepreview' && <PagePreview />}
        {view === 'ebook' && <EBook />}
        {view === 'editpage' && <EditPage />}
        {view === 'about' && <AboutThisApp />}
        {view === 'static' && <Static />}
      </div>
    </div>
  );
}

export default App;