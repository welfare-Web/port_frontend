import { useNavigate, useLocation } from "react-router-dom";
import { FiPlus } from "react-icons/fi";
import "./Header.css";

const Header = ({ menuOpen, setMenuOpen }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { label: "Home", id: "home" },
    { label: "Services", id: "services" },
    { label: "Benefits", id: "benefits" },
    { label: "Work", id: "work" },
    { label: "About", id: "about" },
    { label: "Reviews", id: "reviews" },
    { label: "FAQs", id: "faqs" },
    { label: "Contact", id: "contact" },
  ];

  const handleMenuClick = (id) => {
    setMenuOpen(false);

    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTarget: id } });
      return;
    }

    const el = document.getElementById(id);
    if (!el) return;

    const y = el.getBoundingClientRect().top + window.pageYOffset - 120;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <header className="header">
      <div className="header-container">
        {/* LOGO */}
        <button className="logo" onClick={() => navigate("/")}>
          Welfare <span>Healthtech</span>
        </button>

        {/* DESKTOP NAV */}
        <nav className="desktop-nav">
          {menuItems.map((item) => (
            <button
              key={item.id}
              className="nav-link"
              onClick={() => handleMenuClick(item.id)}
            >
              <span className="flip-text" data-text={item.label}>{item.label}</span>
            </button>
          ))}
        </nav>

        {/* MOBILE BUTTON */}
        <button
          className={`menu-button ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          Menu <FiPlus className="menu-icon" />
        </button>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="mobile-menu">
            {menuItems.map((item) => (
              <button
                key={item.id}
                className="menu-item"
                onClick={() => handleMenuClick(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
