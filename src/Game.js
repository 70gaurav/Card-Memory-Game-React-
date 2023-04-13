import React, { useEffect, useState } from 'react';
import one from "./images/1.avif";
import two from "./images/2.avif";
import three from "./images/3.avif";
import four from "./images/4.webp";
import five from "./images/5.avif";
import six from "./images/6.webp";
import mark from "./images/mark.webp";
import { useNavigate } from 'react-router-dom';

function Game() {
  const navigate = useNavigate()
  const [data, setData] = useState([
    {
      image: one,
      id: "one",
    },
    {
      image: two,
      id: "two",
    },
    {
      image: three,
      id: "three",
    },
    {
      image: four,
      id: "four",
    },
    {
      image: five,
      id: "five",
    },
    {
      image: six,
      id: "six",
    },
    {
      image: one,
      id: "one",
    },
    {
      image: two,
      id: "two",
    },
    {
      image: three,
      id: "three",
    },
    {
      image: four,
      id: "four",
    },
    {
      image: five,
      id: "five",
    },
    {
      image: six,
      id: "six",
    },
  ]);
  const [flip, setFlip] = useState([]);
  const [match, setMatch] = useState([]);
  const [moves, setMoves] = useState(0);

  useEffect(() => {
    for (let i = data.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [data[i], data[j]] = [data[j], data[i]];
    }
  }, []);

  useEffect(() => {
   setTimeout(() => {
    if (match.length === 2) {
      if (match[0] === match[1]) {
        setFlip([]);  
       setTimeout(() => {
        console.log("match confirmed");
        
        const newdata = data.filter((card) => {
          return card.id !== match[0];
        });
       if(newdata.length > 0){
        setData(newdata); 
        setMatch([]); 
       }
       else{
        navigate("/Score")
       }
       }, 1000);
       
      } else {
          setFlip([]);
          setMatch([]);
       
      }
    }
   },500);
  }, [data, match]);

  function flipHandle(index,id) {
      if(flip.length < 2 ){
        setFlip([...flip,index])
      }
      else{
        setFlip("")
      }
      if(match.length < 2){
        setMatch([...match,id])
       
      }
      else{
        setMatch("")
      }
      
    }

  // console.log(flip)
  console.log(match)
  console.log(moves)
  return (


    <div className='game'>
      {/* <h1>Moves:<span>{moves}</span></h1> */}
      <div className='box'>
        {
          data.map((
            element, index) => {
            return (
              <div className="card" key={index} onClick={()=> {flipHandle(index,element.id);setMoves(moves + 0.5)}} >
                <div className="card-inner" style={{ transform: flip.includes(index) ? 'rotateY(180deg)' : "none"}}>
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