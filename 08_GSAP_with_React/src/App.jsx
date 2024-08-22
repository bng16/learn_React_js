import LocomotiveScroll from 'locomotive-scroll';
import ImageZoomMain from "./components/04_Image_Zoom/ImageZoomMain";


function App() {

const locomotiveScroll = new LocomotiveScroll();
  return (
    <div  className="bg-black w-full h-[300vh]">
      <ImageZoomMain/>
    </div>

  )
}

export default App



