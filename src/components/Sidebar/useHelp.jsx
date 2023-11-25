import InboxOutlinedIcon from "@mui/icons-material/InboxOutlined";
import InboxIcon from "@mui/icons-material/Inbox";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import SendIcon from "@mui/icons-material/Send";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useSelector } from "react-redux";

const useHelp = () => {
  const emails = useSelector((state) => state.mail.mails);

  const allOptions = [
    {
      id: 1,
      icon: InboxOutlinedIcon,
      iconActive: InboxIcon,
      title: "Inbox",
      number: "",
    },
    {
      id: 2,
      icon: StarBorderIcon,
      iconActive: StarIcon,
      title: "Starred",
      number: "",
    },
    {
      id: 3,
      icon: AccessTimeIcon,
      iconActive: AccessTimeFilledIcon,
      title: "Snoozed",
      number: "",
    },
    {
      id: 4,
      icon: SendOutlinedIcon,
      iconActive: SendIcon,
      title: "Sent",
      number: emails.length,
      selected: true,
    },
    {
      id: 5,
      icon: InsertDriveFileOutlinedIcon,
      iconActive: InsertDriveFileIcon,
      title: "Drafts",
      number: "",
    },
    {
      id: 6,
      icon: KeyboardArrowDownIcon,
      iconActive: KeyboardArrowUpIcon,
      title: "More",
    },
  ];
  return {
    allOptions,
  };
};

export default useHelp;
