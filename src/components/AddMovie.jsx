import React, { useState } from 'react'
import StarRaiting from './StarRaiting'



const AddMovie = ({handelAdd}) => {
    const [newMovie, setNewMovie] = useState({
        name:"", date:"", image:"", rating:2,
    })
    const handelChange =(e)=> setNewMovie({...newMovie, [e.target.name]: e.target.value})
    const handelRate =(rate)=> setNewMovie({...newMovie, rating:rate})
   
  return (
    <div>
        
        <form onSubmit={(e)=>{
            e.preventDefault();
            let newFilm ={
                ...newMovie, id: Math.random()
            }
            handelAdd(newFilm)
        }} >
            <label>Name</label>
            <input type="text" name='name' value={newMovie.name} onChange={handelChange} />
            <label>Date</label>
            <input type="date" name='date' value={newMovie.date} onChange={handelChange} />
            <label>Rating</label>
            <StarRaiting rate={newMovie.rating} handelRating={handelRate} />
            <label>Image</label>
            <input type="url" name='image' value={newMovie.image} onChange={handelChange} />
            <button type="submit" >Add</button>
        </form>
    </div>
  )
}

export default AddMovie