import { useRef,useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';


function App() {
  const [randNum,setRandNum] = useState(0)
  const [randDegree,setRandDegree] = useState(0)
  
  
  useGSAP(()=>{
    gsap.to('.box',{
      x: randNum,
      rotate: randDegree,
      duration: 0.5,
    })
  },[randNum,randDegree])

  return (
    <main className='w-full h-screen bg-black flex justify-center items-center flex-col gap-10'>
      <button onClick={()=>
        {
          setRandNum(gsap.utils.random(-500, 500, 10))
          setRandDegree(gsap.utils.random(-720, 720, 90))
        }
      } className='bg-white px-2 py-1 rounded-md font-semibold '>Aniamte</button>
      <div className="box bg-red-300 w-[100px] h-[100px] rounded-md"></div>

    </main>

  )
}

export default App