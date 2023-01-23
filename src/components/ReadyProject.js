import FinishProject from "./FinishProjects";


function ReadyProject({FshProj , setFshProj}){
    return (
        <div className="FinishProjects">
        {FshProj.map(project =>{
            return <FinishProject key= {project.id} name={project.name} image={project.image}/>
        })}
        </div>
    )
}
export default ReadyProject;