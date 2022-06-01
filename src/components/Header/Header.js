import './Header.css';

const Header = () => {
    const goToTop = ()=>{
        window.scroll(0,0);
    }

    return (
        <span className="header" onClick={goToTop}> Netflix</span>
    )
}

export default Header;