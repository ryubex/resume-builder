import './styles/Experience.css'
import {TbCircleNumber3Filled} from "react-icons/tb";

export default function Experience({ resumeData, setResumeData }) {

    const experience = resumeData.experience;

    function handleChange(e) {
        const {name,value} = e.target;

        setResumeData((prev) => ({
            ...prev,
            experience: {
                ...prev.experience,
                [name]: value
            }
        }))
    }

  return (
    <div className="experience">
      <div className="exp-title">
        <h2>
          <TbCircleNumber3Filled className="part-icon" />
          PRACTICAL EXPERIENCE
        </h2>

        <button className="add-exp">Add Experience</button>
      </div>

      <div className="exp-input">
                <div className='expInput-left'>
                    <div className='expInput-leftTop'>
                        <label>Job Title</label>
                        <div className="input-container">
                            <input 
                            type="text" 
                            name="job"
                            placeholder='Enter Job Title'
                            value={experience.job}
                            onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className='expInput-leftBottom'>
                        <label>Company Name</label>
                        <div className="input-container">
                            <input 
                                type="text" 
                                name="company"
                                placeholder='Enter Company name'
                                value={experience.company}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                </div>

                <div className='expInput-right'>
                    <label>Duration of Employment</label>
                    <div className="input-container">
                        <input 
                            type="text" 
                            name="duration"
                            placeholder='e.g. Jan 20xx - Dec 20xx'
                            value={experience.duration}
                            onChange={handleChange}
                        />    
                    </div>
                </div>
            </div>
    </div>
  )
}