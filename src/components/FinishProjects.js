
function FinishProject({ name, image }) {
    
    return (
        <div className="po">
            <div className=" done">Done</div>
            <div className="project">
                <div className="circle"></div>
                <div className="content-project">
                    <img src={image} alt={name}/>
                </div>
            </div>
            <p className="app-po-name"> {name}</p>
        </div>
    )
}
export default FinishProject;