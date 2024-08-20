import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';


function App() {
  useGSAP(()=>{
    gsap.to('.box',{
      x: 500,
      y: 500,
      duration: 1,
      rotate: 720,
    })
  })

  return (
    <main className='w-full h-screen bg-black'>
      <div className="box h-[100px] w-[100px] bg-red-500 rounded-lg"></div>
    </main>

  )
}

export default App