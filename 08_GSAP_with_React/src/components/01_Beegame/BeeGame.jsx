import { useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Bee from "../assets/Bee.png";


function BeeGame() {
  const [randNumX,setRandNumX] = useState(0)
  const [randNumY,setRandNumY] = useState(0)
  
  
  useGSAP(()=>{

    gsap.to('.box',{
      x: randNumX,
      y: randNumY,

      duration: 0.1,
    })
  },[randNumX, randNumY])
  return (
    <div 
      className='box h-[30px] w-[30px] rounded-md '
      style={{ backgroundImage: `url(${Bee})`, backgroundSize: 'cover' }}
      onClick={()=>
        {
          setRandNumX(gsap.utils.random(-500, 500, 10))
          setRandNumY(gsap.utils.random(-200, 200, 10))
        }
      }
      >
    </div>
  )
}

export default BeeGame