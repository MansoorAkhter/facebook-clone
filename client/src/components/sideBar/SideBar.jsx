import "./sideBar.css";
import { MdGroups } from "react-icons/md";
import { RssFeed, Group, Event, Bookmark, WorkOutline, HelpOutline, School, Chat, OndemandVideo, } from "@material-ui/icons";
import CloseFriend from "../closeFriend/CloseFriend";
import { Users } from "../../dummyData";

export default function SideBar() {
  return (
    <div className="sideBar">
      <div className="sideBarWrapper">
        <ul className="sideBarList">
          <li className="sideBarListItem">
            <Chat className="sideBarIcon" />
            <span className="sideBarListItemText">Chat</span>
          </li>
          <li className="sideBarListItem">
            <OndemandVideo className="sideBarIcon" />
            <span className="sideBarListItemText">Watch</span>
          </li>
          <li className="sideBarListItem">
            <MdGroups className="sideBarIcon" fontSize={27}/>
            <span className="sideBarListItemText">Groups</span>
          </li>
          <li className="sideBarListItem">
            <RssFeed className="sideBarIcon" />
            <span className="sideBarListItemText">Feed</span>
          </li>
          <li className="sideBarListItem">
            <Event className="sideBarIcon" />
            <span className="sideBarListItemText">Events</span>
          </li>
          <li className="sideBarListItem">
            <Bookmark className="sideBarIcon" />
            <span className="sideBarListItemText">Bookmarks</span>
          </li>
          <li className="sideBarListItem">
            <WorkOutline className="sideBarIcon" />
            <span className="sideBarListItemText">Jobs</span>
          </li>
          <li className="sideBarListItem">
            <School className="sideBarIcon" />
            <span className="sideBarListItemText">Courses</span>
          </li>
          <li className="sideBarListItem">
            <HelpOutline className="sideBarIcon" />
            <span className="sideBarListItemText">Questions</span>
          </li>
        </ul>
        <button className="sideBarButton">Show More</button>
        <hr className="sideBarHr" />


        <ul className="sideBarFriendList">
          {Users.map((u)=>(<CloseFriend key={u.id} user={u}/>))}
        </ul>
      </div>
    </div>
  );
}
