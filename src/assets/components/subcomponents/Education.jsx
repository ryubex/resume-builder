import './styles/Education.css'
import {TbCircleNumber2Filled} from "react-icons/tb";


export default function Education( {resumeData, setResumeData} ) {


    const education = resumeData.education;

    function handleChange(e) {
        const {name,value} = e.target;

        setResumeData((prev) => ({
            ...prev,
            education: {
                ...prev.education,
                [name]: value
            }
        }))
    }

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
                            <input 
                                type="text" 
                                name="school"
                                placeholder='Enter School / University'
                                value={education.school}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className='educInput-leftBottom'>
                        <label>Degree</label>
                        <div className="input-container">
                            <input 
                                type="text" 
                                name="degree"
                                placeholder='Enter degree & program'
                                value={education.degree}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                </div>

                <div className='educInput-right'>
                    <label>Years Attended</label>
                    <div className="input-container">
                        <input 
                            type="text"
                            name="years" 
                            placeholder='e.g. 20xx-20xx'
                            value={education.years}
                            onChange={handleChange}
                        />    
                    </div>
                </div>
            </div>
        </div>
    )
}