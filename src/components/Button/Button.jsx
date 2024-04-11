import { Link } from 'react-router-dom'
import './button.css'

const Button = (props) => {
    return(
        <Link to={props.to} className='linkButton'><button className="Button" type={props.type} onClick={props.action}>{props.label}</button></Link>
    )
}
export default Button