import styles from "./Header.module.scss";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from "@mui/icons-material/Tune";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import SettingsIcon from "@mui/icons-material/Settings";
import AppsIcon from "@mui/icons-material/Apps";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../features/userSlice";
import { getAuth } from "firebase/auth";

const Header = () => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };
  const handleBlur = () => {
    setIsFocused(false);
  };
  const dispatch = useDispatch();
  const signOut = () => {
    getAuth()
      .signOut()
      .then(() => dispatch(logout()));
  };
  const user = useSelector(selectUser);
  return (
    <div className={styles.header}>
      <div className={styles.header__left}>
        <IconButton
          sx={{
            padding: "12px",
            margin: "0 4px ",
          }}
        >
          <MenuIcon
            sx={{
              width: "24px",
              height: "24px",
            }}
          />
        </IconButton>
        <img
          src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png"
          alt="logo"
        ></img>
      </div>
      <div
        className={
          isFocused
            ? `${styles.header__mid} ${styles.focused}`
            : styles.header__mid
        }
      >
        <IconButton>
          <SearchIcon
            sx={{ color: "#444746", width: "24px", height: "24px" }}
          />
        </IconButton>
        <input
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder="Search mail"
          type="text"
        />
        <IconButton
          sx={{
            marginRight: "5px",
          }}
        >
          <TuneIcon
            sx={{
              width: "24px",
              height: "24px",
              color: "#444746",
            }}
          />
        </IconButton>
      </div>
      <div className={styles.header__right}>
        <IconButton>
          <HelpOutlineIcon
            sx={{
              width: "24px",
              height: "24px",
            }}
          />
        </IconButton>
        <IconButton>
          <SettingsIcon
            sx={{
              width: "24px",
              height: "24px",
            }}
          />
        </IconButton>
        <IconButton>
          <AppsIcon
            sx={{
              width: "24px",
              height: "24px",
            }}
          />
        </IconButton>
        <IconButton onClick={signOut}>
          <Avatar
            src={user?.photoUrl}
            sx={{
              width: "32px",
              height: "32px",
            }}
          />
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
