import { Avatar, IconButton } from "@mui/material";
import styles from "./Mail.module.scss";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import ReportGmailerrorredOutlinedIcon from "@mui/icons-material/ReportGmailerrorredOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import MarkEmailUnreadOutlinedIcon from "@mui/icons-material/MarkEmailUnreadOutlined";
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";
import ScheduleOutlinedIcon from "@mui/icons-material/ScheduleOutlined";
import DriveFileMoveOutlinedIcon from "@mui/icons-material/DriveFileMoveOutlined";
import LabelOutlinedIcon from "@mui/icons-material/LabelOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { sizeIconSmall } from "../../const";
import { useNavigate } from "react-router-dom";
import LocalPrintshopOutlinedIcon from "@mui/icons-material/LocalPrintshopOutlined";
import OpenInNewOutlinedIcon from "@mui/icons-material/OpenInNewOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { useState } from "react";
import ReplyIcon from "@mui/icons-material/Reply";
import { useSelector } from "react-redux";
import { selectOpenMail } from "../../features/mailSlice";

const Mail = () => {
  const [color, setColor] = useState(false);
  const changeColor = () => {
    setColor(!color);
  };
  const navigate = useNavigate();
  const openedMail = useSelector(selectOpenMail);
 
  return (
    <div className={styles.mail}>
      <div className={styles.tools}>
        <div className={styles.tools__left}>
          <IconButton
            onClick={() => navigate("/")}
            sx={{ marginRight: "22px" }}
          >
            <ArrowBackIcon sx={sizeIconSmall} />
          </IconButton>
          <IconButton sx={{ padding: "10px" }}>
            <ArchiveOutlinedIcon sx={sizeIconSmall} />
          </IconButton>
          <IconButton sx={{ padding: "10px" }}>
            <ReportGmailerrorredOutlinedIcon sx={sizeIconSmall} />
          </IconButton>
          <IconButton sx={{ padding: "10px", marginRight: "20px" }}>
            <DeleteOutlineOutlinedIcon sx={sizeIconSmall} />
          </IconButton>
          <IconButton sx={{ padding: "10px" }}>
            <MarkEmailUnreadOutlinedIcon sx={sizeIconSmall} />
          </IconButton>
          <IconButton sx={{ padding: "10px" }}>
            <ScheduleOutlinedIcon sx={sizeIconSmall} />
          </IconButton>
          <IconButton sx={{ padding: "10px", marginRight: "20px" }}>
            <AddTaskOutlinedIcon sx={sizeIconSmall} />
          </IconButton>
          <IconButton sx={{ padding: "10px" }}>
            <DriveFileMoveOutlinedIcon sx={sizeIconSmall} />
          </IconButton>
          <IconButton sx={{ padding: "10px" }}>
            <LabelOutlinedIcon sx={sizeIconSmall} />
          </IconButton>
          <IconButton sx={{ padding: "10px" }}>
            <MoreVertOutlinedIcon sx={sizeIconSmall} />
          </IconButton>
        </div>
        <div className={styles.tools__right}>
          <IconButton>
            <KeyboardArrowLeftIcon sx={sizeIconSmall} />
          </IconButton>
          <IconButton>
            <KeyboardArrowRightIcon sx={sizeIconSmall} />
          </IconButton>
          <IconButton>
            <ArrowDropDownIcon sx={sizeIconSmall} />
          </IconButton>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.subject}>
          <h2>{openedMail.subject}</h2>
          <div>
            <IconButton>
              <LocalPrintshopOutlinedIcon sx={sizeIconSmall} />
            </IconButton>
            <IconButton>
              <OpenInNewOutlinedIcon sx={sizeIconSmall} />
            </IconButton>
          </div>
        </div>
        <div className={styles.from}>
          <Avatar sx={{ margin: "0 16px" }} />
          <div className={styles.from__left}>
            <div className={styles.from__title}>
              <h2>
                {openedMail.title.slice(0, openedMail.title.indexOf("@"))}
              </h2>
              <p>{openedMail.title}</p>
            </div>

            <div className={styles.mailTo}>
              To me
              <IconButton sx={{ padding: "2px" }}>
                <ArrowDropDownIcon sx={sizeIconSmall} />
              </IconButton>
            </div>
          </div>
          <div className={styles.from__right}>
            <p>{openedMail.timeLong}</p>
            <IconButton
              onClick={() => changeColor()}
              sx={{
                padding: "8px",
              }}
            >
              {color ? (
                <StarIcon sx={{ ...sizeIconSmall, color: "#ffd400" }} />
              ) : (
                <StarBorderIcon sx={sizeIconSmall} />
              )}
            </IconButton>

            <IconButton>
              <ReplyIcon sx={sizeIconSmall} />
            </IconButton>
            <IconButton>
              <MoreVertIcon sx={sizeIconSmall} />
            </IconButton>
          </div>
        </div>
        <div className={styles.massage}>{openedMail.description}</div>
      </div>
    </div>
  );
};

export default Mail;
