import "./topBar.css";
import { Chat, Notifications, Person, Search } from "@material-ui/icons";
import { Link } from "react-router-dom";


export default function TopBar() {
  return (
    <div className="topBarContainer">
      <div className="topBarLeft">
        <Link to="/" style={{textDecoration:"none"}}>
          <span className="logo">YouSocial</span>
        </Link>
      </div>
      <div className="topBarCenter">
        <div className="searchBar">
          <Search className="searchIcon" />
          <input placeholder="Search for friend, post or video" className="searchInput" />
        </div>
      </div>
      <div className="topBarRight">
        <div className="topBarLinks">
          <span className="topBarLink">Home</span>
          <span className="topBarLink">Timeline</span>
        </div>
        <div className="topBarIcons">
          <div className="topBarIconItem">
            <Person />
            <span className="topBarIconBadge">1</span>
          </div>
          <div className="topBarIconItem">
            <Chat />
            <span className="topBarIconBadge">3</span>
          </div>
          <div className="topBarIconItem">
            <Notifications />
            <span className="topBarIconBadge">7</span>
          </div>
        </div>
        <img src="/assets/person/pfoto1.jpg" alt="" className="topBarImg" />
      </div>
    </div>
  );
}
