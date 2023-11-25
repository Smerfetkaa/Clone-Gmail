import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  sendMassageIsOpen: false,
  errorMassageIsOpen: false,
  selectedMail: null,
  mails: [],
};

export const incrementAsync = createAsyncThunk();

export const mailSlice = createSlice({
  name: "mail",
  initialState,

  reducers: {
    openSendMassage: (state) => {
      state.sendMassageIsOpen = true;
    },
    closeSendMassage: (state) => {
      state.sendMassageIsOpen = false;
    },
    openErrorMassage: (state) => {
      state.errorMassageIsOpen = true;
    },
    closeErrorMassage: (state) => {
      state.errorMassageIsOpen = false;
    },
    selectMail: (state, { payload }) => {
      state.selectedMail = payload;
    },
    setMails: (state, { payload }) => {
      state.mails = payload;
    },
  },
});

export const {
  openSendMassage,
  closeSendMassage,
  closeErrorMassage,
  openErrorMassage,
  selectMail,
  setMails,
} = mailSlice.actions;

export const selectSendMassageIsOpen = (state) => state.mail.sendMassageIsOpen;
export const selectErrorMassageIsOpen = (state) =>
  state.mail.errorMassageIsOpen;
export const selectOpenMail = (state) => state.mail.selectedMail;
export default mailSlice.reducer;
