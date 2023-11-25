import { Button } from "@mui/material";
import styles from "./Login.module.scss";

import { useDispatch } from "react-redux";
import { login } from "../../features/userSlice";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

const Login = () => {
  const dispatch = useDispatch();
  const authProvider = new GoogleAuthProvider();
  const auth = getAuth();
  const signIn = async () => {
    try {
      const result = await signInWithPopup(auth, authProvider);
      const user = result.user;
      dispatch(
        login({
          displayName: user.displayName,
          email: user.email,
          photoUrl: user.photoURL,
        })
      );
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <div className={styles.login}>
      <div className={styles.container}>
        <img
          src="https://static.dezeen.com/uploads/2020/10/gmail-google-logo-rebrand-workspace-design_dezeen_2364_col_0.jpg"
          alt=""
        />
        <Button onClick={signIn} variant="contained" color="primary">
          Login
        </Button>
      </div>
    </div>
  );
};

export default Login;
