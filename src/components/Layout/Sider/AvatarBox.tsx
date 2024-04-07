import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar.js";
import userImage from '@/assets/images/user.jpg';
import {useNavigate} from "react-router";

const AvatarBox = () => {
  const navigate = useNavigate();

  const returnToHome = () => {
    navigate('/')
  }

  return (
    <div
      className="flex items-center justify-center space-x-4 mb-8"
      onClick={() => returnToHome()}
    >
      <Avatar>
        <AvatarImage
          alt="User Image"
          src={userImage}
        />
        <AvatarFallback>
          CN
        </AvatarFallback>
      </Avatar>
      <div
        className="text-xs flex flex-col space-y-1"
      >
        <span>
          Aman
        </span>
        <span>
          AI Engineer
        </span>
      </div>
    </div>
  )
};

export default AvatarBox;
