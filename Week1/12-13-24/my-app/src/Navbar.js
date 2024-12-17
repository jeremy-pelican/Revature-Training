import {Link} from 'react-router-dom';

const Navbar = () => {
    return ( 
        <div className="navbar">
            <h2>React Demos</h2>
            <div className="links">
                <Link to="/hello">Hello</Link>
                <Link to="/sdc">State Demo</Link>
                <Link to="/getposts">Posts</Link>
                <Link to="/comments">Comments</Link>
                <Link to="/todoList">To Do's</Link>
            </div>
        </div>
     );
}
 
export default Navbar;