import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";
import { Route, Routes } from "react-router-dom";
import Mail from "./components/Mail/Mail";
import SendMail from "./components/SendMail/SendMail";
import { useSelector } from "react-redux";
import { selectSendMassageIsOpen } from "./features/mailSlice";
import { selectUser } from "./features/userSlice";
import Login from "./components/Login/Login";

function App() {
  const sendMassageIsOpen = useSelector(selectSendMassageIsOpen);
  const user = useSelector(selectUser);

  return (
    <>
      {!user ? (
        <Login />
      ) : (
        <div className="App">
          <Header />
          <div className="App__body">
            <Sidebar />
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/mail/:mailId" element={<Mail />} />
            </Routes>
          </div>
          {sendMassageIsOpen && <SendMail />}
        </div>
      )}
    </>
  );
}

export default App;
