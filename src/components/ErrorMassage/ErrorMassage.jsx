import { Button } from "@mui/material";
import styles from "./ErrorMassage.module.scss";

import { closeErrorMassage } from "../../features/mailSlice";
import { useDispatch } from "react-redux";

const ErrorMassage = ({ errors, className }) => {
  const dispatch = useDispatch();
  return (
    <div className={className}>
      <div className={styles.errorBox}></div>
      <div className={styles.error}>
        <h2>Error</h2>
        <p>{errors?.email?.message || "Error!"}</p>
        <Button
          variant="contained"
          onClick={() => dispatch(closeErrorMassage())}
        >
          Ok
        </Button>
      </div>
    </div>
  );
};

export default ErrorMassage;
