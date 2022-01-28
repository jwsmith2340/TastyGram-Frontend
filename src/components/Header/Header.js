import { Link } from "react-router-dom";

const Header = (props) => {
    return (
        <header>
            <nav>
                <Link to="/home">
                    <>HOME</>
                </Link>
                <br />
                <Link to="/newfood">
                    <>POST FOOD</>
                </Link>
            </nav>
        </header>
    )
};

export default Header;