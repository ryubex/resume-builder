import './styles/Experience.css'
import {TbCircleNumber3Filled} from "react-icons/tb";

export default function Experience() {

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
                            <input type="text" placeholder='Enter School / University'/>
                        </div>
                    </div>

                    <div className='expInput-leftBottom'>
                        <label>Company Name</label>
                        <div className="input-container">
                            <input type="text" placeholder='Enter Company name'/>
                        </div>
                    </div>
                </div>

                <div className='expInput-right'>
                    <label>Duration of Employment</label>
                    <div className="input-container">
                        <input type="text" placeholder='e.g. Jan 20xx - Dec 20xx'/>    
                    </div>
                </div>
            </div>
    </div>
  )
}