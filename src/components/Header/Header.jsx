import "./style.css";


const Header = ({ title }) => {
    return <>
        <nav>
            <div className="navigation__Bar__Container">
                <div className="navigation__Title">
                    {title}
                </div>
            </div>
        </nav>
    </>
}

export default Header;
