import './styles/GeneralInfo.css'
import {TbCircleNumber1Filled} from "react-icons/tb";

export default function GeneralInfo() {

    const fields = [
        {label: "Name", value: "Juan Dela Cruz"},
        {label: "Email", value: "juan.delacruz@email.com"},
        {label: "Phone Number", value: "09123456789"}
    ]

  return (
    <div className="info">
        <div className="info-title">
            <h2> 
                <TbCircleNumber1Filled className="part-icon" />
                General Information
            </h2>
        </div>
        <div className="info-input">
            {fields.map((field, index) => (
                <div className="field" key={index}>
                    <label>{field.label}</label>

                    <div className="input-container">
                        <input type="text" defaultValue={field.value} />
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}