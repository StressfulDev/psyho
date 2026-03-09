const CollapseSection = ({title, isOpen, onToggle, children, hasIcon = false, style}) => {
  return (
    <div className="about-descr" style={style}>
      <button
        className={`about-collapse-header ${hasIcon && "pointer"}`}
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        {title}
        {hasIcon && (
          <svg
            className={`collapse-icon ${isOpen ? "open" : ""}`}
            width="20"
            height="20"
            viewBox="0 0 24 24"
          >
            <line
              className="vertical"
              x1="12"
              y1="5"
              x2="12"
              y2="19"
            />
            <line
              className="horizontal"
              x1="5"
              y1="12"
              x2="19"
              y2="12"
            />
          </svg>
        )}
      </button>

      <div className={`about-collapse-content ${isOpen ? "open" : ""}`}>
        {children}
      </div>
    </div>
  );
};

export default CollapseSection;
