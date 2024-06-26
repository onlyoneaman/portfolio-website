import {Link} from "react-router-dom";
import {Button} from "@/components/ui/button.js";

const GetInTouchButton = () => {

  return(
    <Link to={'/contact'}>
      <Button>
        Get in Touch
      </Button>
    </Link>
  )
};

export default GetInTouchButton;
