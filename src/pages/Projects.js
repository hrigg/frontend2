import React from 'react'
import {useState, useEffect} from 'react'


const Projects = (props) => {
  const [projects, setProjects]= useState(null)

useEffect(()=> async function getProjectData(){
    const response = await fetch(props.URL+'projects')
    const data= await response.json()
setProjects(data)
//console.log(data)
console.log(projects)
}, []
)
  
const loaded = () => {
    return projects.map((project) => (
      <div>
        <h1>{project.name}-{project.year}</h1>
        <img src={project.image} className='image' />
        <a href={project.link}>
          <button>Link</button>
        </a>
        <p> {project.description}</p>
      </div>
    ));
  };

    {/* {projects.map((project)=>{
        <div>
            <h1>List of Projects</h1> 
            <h1>{project.name}</h1>
            <img src={project.image}/>
            <a href={project.link}>
                <button> LINK</button>
            </a>
        </div>
        
    })} */}
    // </div>)
  
    return  projects ? loaded() : <h1> Loading...</h1>
   
}

export default Projects