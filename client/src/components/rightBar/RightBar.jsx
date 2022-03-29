import "./rightBar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";

export default function RightBar({ profile }) {
  const HomeRightBar = () => {

    return (
      <>
        <div className="birthdayContainer">
          <img className="birthdayImg" src="/assets/gift.png" alt="" />
          <span className="birthdayText">
            <b>Inno Sufiyan</b> and <b>4 other friends</b> have a birthday
            today.
          </span>
        </div>
        <img className="rightBarAd" src="/assets/adPoster/shoeAd2.png" alt="" />
        <h4 className="rightBarTitle">Online Friends</h4>
        <ul className="rightBarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightBar = () => {

    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
      <>
        <h4 className="rightBarTitle">User Information</h4>
        <div className="rightBarInfo">
          <div className="rightBarInfoItem">
            <span className="rightBarInfoKey">City:</span>
            <span className="rightBarInfoValue">Karachi</span>
          </div>
          <div className="rightBarInfoItem">
            <span className="rightBarInfoKey">From:</span>
            <span className="rightBarInfoValue">Haripur</span>
          </div>
          <div className="rightBarInfoItem">
            <span className="rightBarInfoKey">Relationship:</span>
            <span className="rightBarInfoValue">Married</span>
          </div>
        </div>
        <h4 className="rightBarTitle">User friends</h4>
        <div className="rightBarFollowings">


          <div className="rightBarFollowing">
            <img
              src={`${PF}/person/2.jpg`}
              alt=""
              className="rightBarFollowingImg"
            />
            <span className="rightBarFollowingName">
              Noman Shiekh
            </span>
          </div>
          <div className="rightBarFollowing">
            <img
              src={`${PF}/person/3.jpg`}
              alt=""
              className="rightBarFollowingImg"
            />
            <span className="rightBarFollowingName">
              Noman Shiekh
            </span>
          </div>
          <div className="rightBarFollowing">
            <img
              src={`${PF}/person/4.jpg`}
              alt=""
              className="rightBarFollowingImg"
            />
            <span className="rightBarFollowingName">
              Noman Shiekh
            </span>
          </div>
          <div className="rightBarFollowing">
            <img
              src={`${PF}/person/5.jpg`}
              alt=""
              className="rightBarFollowingImg"
            />
            <span className="rightBarFollowingName">
              Noman Shiekh
            </span>
          </div>
          

        </div>

      </>
    );
  };
  return (
    <div className="rightBar">
      <div className="rightBarWrapper">
        {profile ? <ProfileRightBar /> : <HomeRightBar />}
      </div>
    </div>
  );
}
