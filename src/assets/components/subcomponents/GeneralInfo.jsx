import './styles/GeneralInfo.css'
import {TbCircleNumber1Filled} from "react-icons/tb";

export default function GeneralInfo({ resumeData, setResumeData }) {

    const generalInfo = resumeData.generalInfo;

    const fields = [
        {
            label: "Name",
            name: "name", 
            placeholder: "Juan Dela Cruz"
        },
        {
            label: "Email",
            name: "email", 
            placeholder: "juan.delacruz@email.com"},
        {
            label: "Phone Number",
            name: "phone", 
            placeholder: "09123456789"}
    ]

    function handleChange(e) {
        const {name, value} = e.target;

        setResumeData((prev) => ({
            ...prev,
            generalInfo: {
                ...prev.generalInfo,
                [name]: value
            }
        }))
    }

  return (
    <div className="info">
        <div className="info-title">
            <h2> 
                <TbCircleNumber1Filled className="part-icon" />
                General Information
            </h2>
        </div>
        <div className="info-input">
            {fields.map((field) => (
                <div className="field" key={field.name}>
                    <label>{field.label}</label>

                    <div className="input-container">
                        <input 
                            type="text" 
                            name={field.name}
                            placeholder={field.placeholder}
                            value={generalInfo[field.name]}
                            onChange={handleChange}
                        />
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}