import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

function ImageZoomMain() {
  const mainRef=useRef(null);
  const textRef=useRef(null);
  const imageRef=useRef(null);

  useGSAP(()=>{
    const tl=gsap.timeline({
      scrollTrigger:{
        trigger: mainRef.current,
        markers:true,
        start:'50% 40%',
        end:"80% 40%",
        pin:true,
        scrub:2,
      }})
      tl.from(imageRef.current,{
        top: '100%',
      },'a')
      .to(textRef.current,{
        opacity: 0,
      },'a')
      .to(imageRef.current,{
        top:'10%',
        width: "100vw",
        height: "100vh",
      })
  })


  return (
    <div ref={mainRef} className="w-full h-screen flex justify-center items-center relative">

      <div ref={textRef} className="w-[35vw] h-[50vh] flex flex-col justify-center items-center text-center text-white ">
        <h1 className="text-[4vw] font-bold">Biswajit Nag.</h1>
        <p className="max-w-[35vw]">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque a distinctio natus voluptas atque, dolore autem ipsum enim earum illum ullam, numquam asperiores facere nesciunt facilis qui molestias quis quidem!
        </p>
      </div>

      <div ref={imageRef} className="w-[35vw] h-[50vh] bg-white absolute bg-center bg-cover"style={{backgroundImage : 'url(https://images.pexels.com/photos/2127733/pexels-photo-2127733.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)'}}></div>
    </div>
  )
}

export default ImageZoomMain