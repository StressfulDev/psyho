const PhoneIcon = ({ size = 16, color = "currentColor" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill={color}
    viewBox="0 0 24 24"
    style={{ marginRight: "8px", verticalAlign: "middle" }}
  >
    <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59
        6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57
        3.58.57a1 1 0 0 1 1 1v3.5a1 1 0 0 1-1 1C10.28
        21 3 13.72 3 4.5a1 1 0 0 1 1-1H7.5a1 1 0 0 1
        1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.24 1.01l-2.2
        2.2z" />
  </svg>
);

export default PhoneIcon;
