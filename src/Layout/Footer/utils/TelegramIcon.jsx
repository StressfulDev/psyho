const TelegramIcon = ({ size = 16, color = "currentColor" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill={color}
    viewBox="0 0 24 24"
    style={{ marginRight: "8px", verticalAlign: "middle" }}
  >
    <path d="M9.04 13.35l-.39 3.81c.56
        0 .8-.24 1.1-.52l2.64-2.48 5.47 4.01c1 .54
        1.7.26 1.96-.92l3.55-16.7c.34-1.56-.57-2.17-1.57-1.8L1.88
        9.55c-1.5.59-1.47 1.42-.27 1.8l4.76 1.49L19.16
        5.3c.56-.38 1.07-.17.65.22l-10.77 9.6z" />
  </svg>
);

export default TelegramIcon;
