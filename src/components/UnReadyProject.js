import NowProject from "./NowProject";



function UnReadyProject ({nowProj, setNowProj}){

    return (
        <div className="NowProject">
        {nowProj.map(project => {
            return <NowProject startDate={project.startDate} endDate={project.endDate} name={project.name} key={project.id}/>
        })}
        </div >
    );
}
export default UnReadyProject;