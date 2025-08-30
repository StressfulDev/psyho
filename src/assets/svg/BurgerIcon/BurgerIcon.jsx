import "./BurgerIcon.css";

const BurgerIcon = ({ isOpen = false, onClick }) => (
  <div onClick={onClick} className="burger-icon-wrapper">
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      xmlns="http://www.w3.org/2000/svg"
      className={`burger-icon-svg ${isOpen ? "open" : ""}`}
    >
      <line className="bar top" x1="8" y1="12" x2="32" y2="12" />
      <line className="bar middle" x1="8" y1="20" x2="32" y2="20" />
      <line className="bar bottom" x1="8" y1="28" x2="32" y2="28" />
    </svg>
  </div>
);



export default BurgerIcon;
