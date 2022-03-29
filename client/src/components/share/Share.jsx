import { PermMedia, Room, EmojiEmotions} from "@material-ui/icons";
import { FaUserTag } from "react-icons/fa";
import "./share.css";

export default function Share() {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img src="/assets/person/pfoto1.jpg" alt="" className="shareProfileImg" />
          <input placeholder="What's in your mind?" className="shareInput" />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
            <PermMedia htmlColor="#2ECC71 " className="shareIcon"/>
              <span className="shareOptionText">Photo/Video</span>
            </div>
            <div className="shareOption">
            <FaUserTag color="#3498DB" className="shareIcon"/>
              <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOption">
            <Room htmlColor="#F44336" className="shareIcon"/>
              <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption">
            <EmojiEmotions htmlColor="#F5B041 " className="shareIcon"/>
              <span className="shareOptionText">Feelings</span>
            </div>
          </div>
          <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  );
}
