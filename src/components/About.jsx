import React from 'react'
import { useParams } from 'react-router-dom'


const About = ({movies}) => {
    const params =useParams();
    const leFilm =movies.find(el=>el.id==params.id);
  return (
    <div>
        <h1>About the film</h1>
        <h2> {leFilm.name} </h2>
      <iframe src={leFilm.trailer} height="315" width="560" frameBorder="0"></iframe>
        <h3> {leFilm.description} </h3>
    </div>
  )
}

export default About