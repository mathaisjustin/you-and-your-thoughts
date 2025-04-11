import "./header.css";
import background from "../../assets/background.jpg";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">You & Your</span>
        <span className="headerTitleLg">Thoughts</span>
      </div>
      <img
        className="headerImg"
        src={background}
        alt=""
      />
    </div>
  );
}
