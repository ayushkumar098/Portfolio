import "./hamburger.styles.scss";

const Hamburger = ({ onToggle, isOpen }) => {
  return (
    <button onClick={onToggle} className="hamburger-button">
      {!isOpen ? "☰" : "X"}
    </button>
  );
};

export default Hamburger;
