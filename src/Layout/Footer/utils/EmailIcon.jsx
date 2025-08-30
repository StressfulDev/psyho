const EmailIcon = ({ size = 16, color = "currentColor" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill={color}
    viewBox="0 0 24 24"
    style={{ marginRight: "8px", verticalAlign: "middle" }}
  >
    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0
    1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0
    2l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z" />
  </svg>
);

export default EmailIcon;
