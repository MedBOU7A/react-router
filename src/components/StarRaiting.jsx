import React from 'react'

const StarRaiting = ({rate, handelRating}) => {
  const stars =(n)=> {
   let star =[];
   for(let i=1; i<=5; i++){
       if(i<=n){
           star.push( <span
            key={i}
            onClick={() => handelRating(i)}
            style={{ color: "gold", fontSize: "20px", cursor: "pointer" }}
          >
            ★
          </span>

           )
       }
       else{
           star.push(<span
            key={i}
            onClick={() => handelRating(i)}
            style={{ color: "black", fontSize: "20px", cursor: "pointer" }}
          >
            ★
          </span>

           )
       }
   }
   return star
  }  
  return (
    <div> {stars(rate)} </div>
  )
}

export default StarRaiting