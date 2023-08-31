import "./layout.css"
import Nav from "../Navbar/Nav";
const Layout = ({ children }) => {
    return (
        <div className="layoutmain">
            <div className="layoutmain_body">
                <Nav />
                <div className="allChildren">{children}</div>
            </div>
        </div>
    )
}
export default Layout