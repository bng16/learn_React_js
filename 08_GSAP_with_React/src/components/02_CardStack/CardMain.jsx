import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

function CardMain() {
  const mainSectionRef = useRef();
  const textSectionRef = useRef();
  const image1Ref = useRef();
  const image2Ref = useRef();
  const image3Ref = useRef();

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: mainSectionRef.current,
        markers: true,
        start: '38% 50%',
        end: '100% 50%',
        scrub: 1,
        pin: true,
      },
    });

    tl.to(textSectionRef.current, {
      top: '-7%',
    }, 'a')
      .to(image1Ref.current, {
        top: '35%',
      }, 'a')
      .to(image2Ref.current, {
        top: '130%',
      }, 'a')
      .to(image2Ref.current, {
        top: '42%',
      }, 'b')
      .to(image1Ref.current, {
        width: '70%',
        height: '70vh',
      }, 'b')
      .to(image3Ref.current, {
        top: '150%',
      }, 'b')
      .to(image3Ref.current, {
        top: '49%',
      }, 'c')
      .to(image2Ref.current, {
        width: '75%',
        height: '75vh',
      }, 'c');
  }, []);

  return (
    <main ref={mainSectionRef} className='relative w-full h-[150vh] flex flex-col justify-center items-center'>
      <div ref={textSectionRef} className='absolute w-full text-white flex flex-col gap-3 items-center top-[30%]'>
        <h1 className='font-bold text-5xl'>Biswajit Nag</h1>
        <p className='w-[30vw] text-center'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, exercitationem. Excepturi eaque qui ea nobis sit voluptate quos, blanditiis sequi.
        </p>
      </div>
      <div
        ref={image1Ref}
        className='w-[80%] h-[80vh] bg-red-200 bg-cover bg-center absolute top-[130%] left-[50%] -translate-x-1/2 -translate-y-1/2 bg-[url("./components/02_CardStack/images/1.jpg")] rounded-xl'
        // style={{ backgroundImage: 'url(./images/1.jpg)' }}
      ></div>

      <div
        ref={image2Ref}
        className='w-[80%] h-[80vh] bg-red-200 bg-cover bg-center absolute top-[130%] left-[50%] -translate-x-1/2 -translate-y-1/2 bg-[url("./components/02_CardStack/images/2.jpg")] rounded-xl'
        // style={{ backgroundImage: 'url(./images/2.jpg)' }}
      ></div>

      <div
        ref={image3Ref}
        className='w-[80%] h-[80vh] bg-red-200 bg-cover bg-center absolute top-[130%] left-[50%] -translate-x-1/2 -translate-y-1/2 bg-[url("./components/02_CardStack/images/3.jpg")] rounded-xl'
        // style={{ backgroundImage: 'url(./images/3.jpg)' }}
      ></div>
    </main>
  );
}

export default CardMain;
