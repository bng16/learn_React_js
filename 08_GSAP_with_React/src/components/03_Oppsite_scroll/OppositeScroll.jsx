import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

function OppositeScroll() {
  let arr1 = [
    'https://images.pexels.com/photos/768126/pexels-photo-768126.jpeg',
    'https://images.pexels.com/photos/18858686/pexels-photo-18858686/free-photo-of-a-woman-dressed-in-mexican-day-of-the-dead-makeup.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/1713645/pexels-photo-1713645.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/26746679/pexels-photo-26746679/free-photo-of-moai-sculpture-from-galapagos-island.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/3243020/pexels-photo-3243020.jpeg?auto=compress&cs=tinysrgb&w=600',
  ];
  let arr2 = [
    'https://images.pexels.com/photos/33571/tutankhamun-death-mask-pharaonic-egypt.jpg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/2070485/pexels-photo-2070485.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/3204950/pexels-photo-3204950.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/3290068/pexels-photo-3290068.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/3214972/pexels-photo-3214972.jpeg?auto=compress&cs=tinysrgb&w=600',
  ];

  const mainRef = useRef(null);  
  const goDownRef = useRef(null);  
  const goUpRef = useRef(null);  

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: mainRef.current,  
        markers: true,  
        start: '55% 50%',  
        end: "110% 60%", 
        scrub: 1,  
        pin: true,  
      },
    });

    tl.to(goUpRef.current, {
      top: "-137%",  
    }, 'a').to(goDownRef.current, {
      top: "0",  
    }, 'a');
  }, []);

  return (
    <div ref={mainRef} className="w-full h-screen flex justify-between pl-[20vw] pr-[10vw] overflow-hidden">
      <div className="w-[35vw] h-[100vh] flex flex-col justify-center items-center text-center text-white">
        <h1 className="text-[4vw] font-bold">Biswajit Nag.</h1>
        <p className="max-w-[35vw]">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque a distinctio natus voluptas atque, dolore autem ipsum enim earum illum ullam, numquam asperiores facere nesciunt facilis qui molestias quis quidem!
        </p>
      </div>

      <div className="w-[15vw] h-[100vh] relative">  
        <div ref={goDownRef} className="w-[15vw] h-[237vh] flex flex-col gap-[3vh] absolute top-[-137%]">
          {arr1.map((link, index) => (
            <div
              key={index} 
              className="w-full h-[45vh] bg-red-200 rounded-md bg-cover bg-center"
              style={{ backgroundImage: `url(${link})` }}  
            ></div>
          ))}
        </div>
      </div>

      <div className="w-[15vw] h-[100vh] relative">  
        <div ref={goUpRef} className="w-[15vw] h-[237vh] flex flex-col gap-[3vh] absolute top-0">
          {arr2.map((link, index) => (
            <div
              key={index}  
              className="w-full h-[45vh] bg-red-200 rounded-md bg-cover bg-center"
              style={{ backgroundImage: `url(${link})` }} 
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OppositeScroll;
