import React, { useEffect, useState } from 'react'
import one from "./images/1.avif"
import two from "./images/2.avif"
import three from "./images/3.avif"
import four from "./images/4.webp"
import five from "./images/5.avif"
import six from "./images/6.webp"
import mark from "./images/mark.webp"

function Game() {
  const data = [{
    image: one,
    id: "one"
  },
  {
    image: two,
    id: "two"
  },
  {
    image: three,
    id: "three"
  },
  {
    image: four,
    id: "four"
  },
  {
    image: five,
    id: "five"
  },
  {
    image: six,
    id: "six"
  },
  {
    image: one,
    id: "one"
  },
  {
    image: two,
    id: "two"
  },
  {
    image: three,
    id: "three"
  },
  {
    image: four,
    id: "four"
  },
  {
    image: five,
    id: "five"
  },
  {
    image: six,
    id: "six"
  }
  ]

  const [flip, setflip] = useState(null)


useEffect(() => {
  
  for (let i = data.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [data[i], data[j]] = [data[j], data[i]];
  }
} , [])

  function flipHandle(index) {
    if(flip === null){
      setflip(index)
    }
    else{
      setflip(null)
    }
  }
  console.log(flip)
  return (


    <div className='game'>
      <div className='box'>
        {
          data.map((element, index) => {
            return (
              <div className="card" key={index} onClick={()=> {flipHandle(index)}} >
                <div className="card-inner" style={{ transform: index === flip ? 'rotateY(180deg)' : "none"}}>
                  <div className="card-front">
                    <img src={mark}></img>
                  </div>
                  <div className="card-back">
                    <img src={element.image} ></img>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Game