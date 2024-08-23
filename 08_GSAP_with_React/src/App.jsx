import LocomotiveScroll from 'locomotive-scroll';
import ImageZoomMain from "./components/04_Image_Zoom/ImageZoomMain";
import OppositeScroll from "./components/03_Oppsite_scroll/OppositeScroll";


function App() {

const locomotiveScroll = new LocomotiveScroll();
  return (
    <div  className="bg-black w-full">
      <ImageZoomMain/>
      <OppositeScroll/>
    </div>

  )
}

export default App



