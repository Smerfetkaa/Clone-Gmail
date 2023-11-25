import React from "react";
import styles from "./Sidebar.module.scss";
import { sizeIconSmall } from "../../const";


const SidebarOptions = ({ Icon, title, number, IconActive, selected }) => {
  const empty = styles.options;
  const full = styles.optionsFull;
  const active = styles.optionsActive;
  const numberCheck = number ? `${empty} ${full}` : empty;
  const selectedCheck = selected ? `${empty} ${active}` : empty;

  return (
    <div className={numberCheck && selectedCheck}>
      {selected ? (
        <IconActive sx={sizeIconSmall} />
      ) : (
        <Icon sx={sizeIconSmall} />
      )}
      <h3>{title}</h3>
      <p>{number}</p>
    </div>
  );
};

export default SidebarOptions;
