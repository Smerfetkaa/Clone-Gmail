import styles from "./SendMail.module.scss";
import MinimizeIcon from "@mui/icons-material/Minimize";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import CloseIcon from "@mui/icons-material/Close";
import { Button, IconButton } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import FormatColorTextOutlinedIcon from "@mui/icons-material/FormatColorTextOutlined";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import LinkIcon from "@mui/icons-material/Link";
import EmojiEmotionsOutlinedIcon from "@mui/icons-material/EmojiEmotionsOutlined";
import AddToDriveIcon from "@mui/icons-material/AddToDrive";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import LockClockOutlinedIcon from "@mui/icons-material/LockClockOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { sizeIconSmall, sizeIconVerySmall } from "../../const";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  closeSendMassage,
  openErrorMassage,
  selectErrorMassageIsOpen,
} from "../../features/mailSlice";
import ErrorMassage from "../ErrorMassage/ErrorMassage";
import { db } from "../../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const SendMail = () => {
  const iconStyle = { ...sizeIconSmall, color: "202124" };
  const iconBtnStyle = {
    padding: "4px",
    borderRadius: "4px",
    margin: "4px",
  };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const errorMassageIsOpen = useSelector(selectErrorMassageIsOpen);
  const dispatch = useDispatch();
  const errorMassage = () => {
    if (errors?.email) {
      dispatch(openErrorMassage());
    }
  };
  const onSubmit = (formData) => {
    const { Massage, Subject } = formData;

    if (Object.keys(errors).length === 0) {
      if (!Massage && !Subject) {
        const confirmEmptyFields = window.confirm(
          "Send this message without a subject or text in the body?"
        );
        if (!confirmEmptyFields) {
          console.log("User canceled");
          return;
        }
      }

      const emailsCollection = collection(db, "emails");
      addDoc(emailsCollection, {
        email: formData.email,
        subject: formData.Subject,
        massage: formData.Massage,
        timeStamp: serverTimestamp(),
      });
    }
    dispatch(closeSendMassage());
  };

  return (
    <div className={styles.sendMail}>
      <div className={styles.header}>
        <h3>New massage</h3>
        <div>
          <MinimizeIcon sx={sizeIconVerySmall} />
          <OpenInFullIcon sx={sizeIconVerySmall} />
          <CloseIcon
            onClick={() => dispatch(closeSendMassage())}
            sx={sizeIconVerySmall}
          />
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <input
          type="text"
          placeholder="Recipients"
          {...register("email", {
            required: "Please specify at least one recipient.",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message:
                'The address in the "To" field was not recognised. Please make sure that all addresses are properly formed',
            },
          })}
        />

        <input type="text" placeholder="Subject" {...register("Subject")} />
        <input type="text" {...register("Massage")} />

        <div className={styles.options}>
          <div className={styles.btn}>
            <Button
              onClick={() => errorMassage()}
              type="submit"
              sx={{
                backgroundColor: "#0b57d0",
                color: "white",
                textTransform: "none",
                padding: "4px 16px",
                borderBottomLeftRadius: "18px",
                borderBottomRightRadius: "0",
                borderTopLeftRadius: "18px",
                borderTopRightRadius: "0",
                "&:hover": {
                  backgroundColor: "#1b61d1",
                },
              }}
            >
              Send
            </Button>
            <Button
              sx={{
                backgroundColor: "#0b57d0",
                color: "white",
                minWidth: "auto",
                textTransform: "none",
                padding: "7.8px 7px 7.8px 5px",
                borderBottomLeftRadius: "0",
                borderBottomRightRadius: "18px",
                borderTopLeftRadius: "0",
                borderTopRightRadius: "18px",
                borderLeft: "1px solid #062e6f",
                "&:hover": {
                  backgroundColor: "#1b61d1",
                },
              }}
            >
              <ArrowDropDownIcon sx={sizeIconSmall} />
            </Button>
          </div>
          <div className={styles.settings}>
            <IconButton sx={iconBtnStyle}>
              <FormatColorTextOutlinedIcon sx={iconStyle} />
            </IconButton>
            <IconButton sx={iconBtnStyle}>
              <AttachFileIcon sx={iconStyle} />
            </IconButton>
            <IconButton sx={iconBtnStyle}>
              <LinkIcon sx={iconStyle} />
            </IconButton>
            <IconButton sx={iconBtnStyle}>
              <EmojiEmotionsOutlinedIcon sx={iconStyle} />
            </IconButton>
            <IconButton sx={iconBtnStyle}>
              <AddToDriveIcon sx={iconStyle} />
            </IconButton>
            <IconButton sx={iconBtnStyle}>
              <ImageOutlinedIcon sx={iconStyle} />
            </IconButton>
            <IconButton sx={iconBtnStyle}>
              <LockClockOutlinedIcon sx={iconStyle} />
            </IconButton>
            <IconButton sx={iconBtnStyle}>
              <MoreVertIcon sx={iconStyle} />
            </IconButton>
            <IconButton sx={iconBtnStyle}>
              <DeleteOutlineIcon sx={iconStyle} />
            </IconButton>
          </div>
        </div>
      </form>

      {errors?.email && (
        <ErrorMassage
          errors={errors}
          className={(!errorMassageIsOpen && `${styles.hidden}`) || " "}
        />
      )}
    </div>
  );
};

export default SendMail;
