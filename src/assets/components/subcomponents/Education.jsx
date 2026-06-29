import './styles/Education.css'
import {TbCircleNumber2Filled} from "react-icons/tb";


export default function Education() {
    return (
        <div className="education">
            <div className="educ-title">
                <h2> 
                    <TbCircleNumber2Filled className="part-icon" />
                    Education
                </h2>

                <button className="add-new">Add Education</button>
            </div>

            <div className="educ-input">
                <div className="educInput-left">
                    <input type="text" defaultValue="University of the Philippines" />
                    <h3>Study: <input type="text" defaultValue="B.S. in Computer Science" /> </h3>
                </div>

                <div className="educInput-right">
                    <label>Dates</label>
                    <input type="text" defaultValue="Sept 2017-May 2021" />
                </div>
            </div>
        </div>
    )
}