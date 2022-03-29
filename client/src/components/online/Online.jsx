import './online.css'

export default function Online({user}) {
  const PF=process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div>
       <li className="rightBarFriend">
            <div className="rigthBarProfileImgContainer">
              <img className="rightBarProfileImg" src={`${PF}/${user.profilePic}`} alt="" />
              <span className="rightBarOnline"></span>
            </div>
            <span className="rightBarUserName">
              {user.userName}
            </span>
          </li>
    </div>
  )
}
