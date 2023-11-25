import styles from "./EmailRow.module.scss";
import { Checkbox, IconButton } from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import { useNavigate } from "react-router-dom";
import { sizeIconSmall } from "../../const";
import { useDispatch } from "react-redux";
import { selectMail } from "../../features/mailSlice";

const EmailRow = ({ id, title, subject, description, timeShort, timeLong }) => {
  const [color, setColor] = useState(false);
  const changeColor = () => {
    setColor(!color);
  };
  

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const openMail = () => {
  
    dispatch(
      selectMail({
        id,
        title,
        subject,
        description,
        timeShort,
        timeLong,
      })
    );

    navigate(`/mail/${id}`);
  };
  
  return (
    <div className={styles.row}>
      <div className={styles.options}>
        <IconButton
          sx={{
            padding: "0",

            "& .MuiButtonBase-root": { padding: "4px", color: "#bdbdbd" },
            "& :hover": { color: "#202124" },
          }}
        >
          <Checkbox
            size="small"
            sx={{
              "& .MuiSvgIcon-root": sizeIconSmall,
            }}
          />
        </IconButton>

        {color ? (
          <IconButton
            onClick={() => changeColor()}
            sx={{
              padding: "2px",
            }}
          >
            <StarIcon sx={{ ...sizeIconSmall, color: "#ffd400" }} />
          </IconButton>
        ) : (
          <IconButton
            onClick={() => changeColor()}
            sx={{
              padding: "2px",
              color: "#bdbdbd",
              "& :hover": { color: "#202124" },
            }}
          >
            <StarBorderIcon sx={sizeIconSmall} />
          </IconButton>
        )}
      </div>
      <div
        onClick={openMail}
        className={styles.content}
      >
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.massage}>
          <h4>{subject}</h4>
          <span className={styles.description}>- {description}</span>
        </div>

        <div className={styles.time}>{timeShort}</div>
      </div>
    </div>
  );
};

export default EmailRow;
