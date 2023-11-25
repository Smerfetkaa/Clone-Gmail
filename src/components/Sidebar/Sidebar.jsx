import React from "react";
import styles from "./Sidebar.module.scss";
import { Button } from "@mui/material";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import SidebarOptions from "./SidebarOptions";
import useHelp from "./useHelp";
import { sizeIconMid } from "../../const";
import { useDispatch } from "react-redux";
import { openSendMassage } from "../../features/mailSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  const { allOptions } = useHelp();
  return (
    <aside className={styles.sidebar}>
      <Button
        onClick={() => dispatch(openSendMassage())}
        startIcon={
          <CreateOutlinedIcon
            sx={{
              ...sizeIconMid,
              marginRight: "8px",
            }}
          />
        }
        className={styles.compose}
      >
        Compose
      </Button>

      <ul>
        {allOptions.map((item) => (
          <li key={item.id}>
            <SidebarOptions
              Icon={item.icon}
              IconActive={item.iconActive}
              title={item.title}
              number={item.number}
              selected={item.selected}
            />
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
