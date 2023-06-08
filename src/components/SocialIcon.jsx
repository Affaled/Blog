import "../assets/styles/SocialIcon.css";

export default function SocialIcon(props) {
  const icon = props.icon;
  const alt = props.alt;
  const link = props.link;

  return (
    <div className="social-icon-container">
      <a href={link}>
        <img src={icon} alt={alt} className="social-icon" />
      </a>
    </div>
  );
}
