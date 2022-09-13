import React from 'react'
import {useState, useEffect} from 'react'

const About = (props) => {
    const [about, setAbout]= useState(null)
    
useEffect(()=> async function getAboutData(){
    const response = await fetch(props.URL+'about')
    const data= await response.json()
setAbout(data)
//console.log(data)
}, []
)

const loaded=()=>(
    <div>
        <h2> {about.name}</h2>
        <h3> {about.email} </h3>
        <p> {about.bio}</p>
        <p> <img src={about.headshot} /></p>
    </div>
)
  return  about ? loaded() : <h1> Loading...</h1>
}

export default About