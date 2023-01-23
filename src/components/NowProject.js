
function NowProject({ name, startDate, endDate }) {
    

    return (
        <div className="po">
                <div className="time">
                    <p className="days"></p>
                    <p className="hours"></p>
                    <p className="minutes"></p>
                    <p className="secounds"></p>
                </div>
                <div className="project">
                    <div className="circle"></div>
                    <div className="content-project">
                        <p className="precentage start-span">completion <span></span></p>
                        <p className="deadline deadline-span">Deadline <span className="deadline-span">{endDate }</span></p>
                    </div>
                </div>
                <p className="app-po-name"> Amazon</p>
            </div>
    )
}
export default NowProject;