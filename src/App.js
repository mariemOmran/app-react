import { useEffect, useState } from 'react';
import './App.css';
import ReadyProject from './components/ReadyProject';
import UnReadyProject from './components/UnReadyProject';

function App() {
  const [projects, setProjects] = useState([
    { id: 1, name: "talenets", startDate: '01-01-2023', endDate: '01-19-2023' ,status:"on work" ,image:''},
    { id: 4, name: "E-commerce", startDate: '01-20-2023', endDate: '01-30-2023' ,status:"on work" ,image:''},
    { id: 2, name: "Noon", startDate: '01-20-2023', endDate: '01-30-2023' ,status:"on work" ,image:''},
    { id: 3, name: "amazon", startDate: '02-01-2023', endDate: '02-10-2023' ,status:"on work" ,image:''},
  ]);
  /* state */
  const [FshProj, setFshProj] = useState([]);
  const [nowProj, setNowProj] = useState([]);

  // functions
  const  filterProjects = ()=> {
    return projects.map(project => {
      let endDate =  new Date (project.endDate).getTime();
      let myDay =  new Date ().getTime();
      if((endDate - myDay) <= 0){
        if (FshProj.indexOf(project)){
          setFshProj([...FshProj , project]);
          console.log(FshProj)
          console.log(project)
        }
      }else if ((endDate - myDay) > 0){
        if (nowProj.indexOf(project)){
          setNowProj([...nowProj,project]);
        }
      }
      return (nowProj,FshProj);
      
    });
  }
  console.log("Now Project ",nowProj)
  console.log("finish projects",FshProj)
  useEffect(() => filterProjects,[])
  return (
    <div className="App">
      <ReadyProject FshProj={FshProj} setFshProj={setFshProj} />
      <UnReadyProject nowProj={nowProj} setNowProj={setNowProj} />
    </div>
  );
}

export default App;
