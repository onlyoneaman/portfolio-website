import {Button} from "@/components/ui/button.js";
import {FiCopy} from "react-icons/fi";

const EmailButton = () => {

  return (
    <Button>
      <span
        className="text-gray-500 text-sm pr-2"
      >
        <FiCopy
          className="m-0"
          size={12}
        />
      </span>
      <span>
        E-Mail
      </span>
    </Button>
  )
};

export default EmailButton;
