
import { Link } from 'react-router-dom'

export const Home = () => {
    return (
        <div>
            <h1>This is home page</h1>
            <div className='links-container'>
                <Link to="login">Click to Login</Link>
                <Link to="register">Click to Register</Link>
            </div>
        </div>
    )
}