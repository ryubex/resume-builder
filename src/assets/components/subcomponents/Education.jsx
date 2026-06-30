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

                <button className="add-educ">Add Education</button>
            </div>

            <div className="educ-input">
                <div className='educInput-left'>
                    <div className='educInput-leftTop'>
                        <label>School</label>
                        <div className="input-container">
                            <input type="text" placeholder='Enter School / University'/>
                        </div>
                    </div>

                    <div className='educInput-leftBottom'>
                        <label>Degree</label>
                        <div className="input-container">
                            <input type="text" placeholder='Enter degree & program'/>
                        </div>
                    </div>
                </div>

                <div className='educInput-right'>
                    <label>Years Attended</label>
                    <div className="input-container">
                        <input type="text" placeholder='e.g. 20xx-20xx'/>    
                    </div>
                </div>
            </div>
        </div>
    )
}