import styles from "./Main.module.scss";
import { Checkbox, IconButton } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import RefreshIcon from "@mui/icons-material/Refresh";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import EmailRow from "../EmailRow/EmailRow";
import { sizeIconSmall } from "../../const";
import { useEffect, useState } from "react";
import { db } from "../../firebase";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { setMails } from "../../features/mailSlice";

const Main = () => {
  const dispatch = useDispatch();

  const emails = useSelector((state) => state.mail.mails);

  useEffect(() => {
    const emailsCollection = collection(db, "emails");
    const q = query(emailsCollection, orderBy("timeStamp", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const emailsData = snapshot.docs.map((doc) => {
        const data = doc.data();

        const convertedData = {
          ...data,
          timeStamp: data.timeStamp ? data.timeStamp.toMillis() : null,
        };
        return {
          id: doc.id,
          data: convertedData,
        };
      });

      dispatch(setMails(emailsData));
    });
  }, [dispatch]);

  return (
    <div className={styles.main}>
      <div className={styles.settings}>
        <div className={styles.leftSide}>
          <IconButton
            sx={{
              borderRadius: "10px",
              padding: "0",
            }}
          >
            <Checkbox
              sx={{
                padding: "9px 0 9px 9px",
                "& .MuiSvgIcon-root": sizeIconSmall,
              }}
            />
            <ArrowDropDownIcon sx={sizeIconSmall} />
          </IconButton>
          <IconButton>
            <RefreshIcon sx={sizeIconSmall} />
          </IconButton>
          <IconButton>
            <MoreVertIcon sx={sizeIconSmall} />
          </IconButton>
        </div>
        <div className={styles.rightSide}>
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
      <div className={styles.mailList}>
        {emails.map(({ id, data }) => (
          <EmailRow
            key={id}
            id={id}
            title={data.email}
            subject={data.subject}
            description={data.massage}
            timeShort={new Date(data.timeStamp).toLocaleDateString("en-US", {
              day: "numeric",
              month: "short",
            })}
            timeLong={new Date(data.timeStamp).toUTCString()}
          />
        ))}
      </div>
    </div>
  );
};

export default Main;
