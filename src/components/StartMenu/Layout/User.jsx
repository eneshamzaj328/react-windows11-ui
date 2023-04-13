import { Wrapper, UserProfile, PowerButton } from "./Layout.styled";

import userImage from "../../../assets/images/windows-icons/user.png";
import powerButton from "../../../assets/images/windows-icons/powerButton.svg";

const User = () => {
  const userName = "Enes Hamzaj"; // temporary just to keep it simple.

  return (
    <Wrapper>
      <UserProfile userName={userName} className="userProfile">
        <img src={userImage} className="userImage" alt="User Profile Img" />
        <span className="userName">{userName}</span>
      </UserProfile>
      <PowerButton className="powerButton">
        <img src={powerButton} alt="Windows11 - Start > Power Button" />
      </PowerButton>
    </Wrapper>
  );
};

export default User;
