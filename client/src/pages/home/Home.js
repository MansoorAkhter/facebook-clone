import TopBar from "../../components/topBar/TopBar";
import SideBar from "../../components/sideBar/SideBar";
import RightBar from "../../components/rightBar/RightBar";
import Feed from "../../components/feed/Feed";
import "./home.css";

export default function Home() {
  return (
    <div>
      <TopBar/>
      <div className="homeContainer">
      <SideBar/>
      <Feed/>
      <RightBar/>
      </div>

    </div>
  )
}
