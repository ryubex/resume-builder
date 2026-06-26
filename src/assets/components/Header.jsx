import Logo from '../images/document.png';
import '../styles/Header.css'


export default function Header() {
    return (
        <div className="header">
                <img src={Logo} />
                <h2>Resume Builder Pro</h2>
        </div>
    )
} 