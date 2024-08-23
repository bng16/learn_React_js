import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

function SplitText() {
  const mainRef=useRef(null)
  const topRef=useRef(null)
  const botRef=useRef(null)
  const textRef=useRef(null)

  useGSAP(()=>{
    const tl=gsap.timeline({
      scrollTrigger:{
        trigger: mainRef.current,
        markers:true,
        start:'50% 50%',
        end:"200% 50%",
        scrub:1,
        pin:true,
      }
    })
    tl.to(topRef.current,{
      y:'-60vh',
    },'a')
    .to(botRef.current,{
      y:'60vw',
    },'a')
    .from(textRef.current,{
      top:"120%",
      opacity:0,
    })
  },[])

  return (
    <div ref={mainRef}>
      <div ref={topRef} className='w-full h-[50vh] bg-white relative overflow-hidden z-[9]'>
        <h1 className="text-[9vw] font-bold absolute bottom-[-6.5vw]">Biswajit Nag.</h1>
      </div>

      <div ref={textRef} className="text-white flex flex-col  w-[40vw] text-center gap-2 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-[8]">
        <h1 className="text-5xl font-bold">Biswajit Nag</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis hic, exercitationem eveniet vero, voluptatum illum assumenda sed, ducimus error vitae commodi mollitia blanditiis quo facilis magni. Quis sapiente dolore minima?</p>
      </div>

      <div ref={botRef} className='w-full h-[50vh] bg-white relative overflow-hidden z-[9]'>
      <h1 className="text-[9vw] font-bold absolute top-[-6.9vw]">Biswajit Nag.</h1>
      </div>

    </div>
  )
}

export default SplitText