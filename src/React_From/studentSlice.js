import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  // Có thể để trống hoặc thêm 1-2 sinh viên mẫu
  {
    id: 1,
    maSV: "1",
    hoTen: "Nguyễn Văn A",
    sdt: "0938111111",
    email: "nguyenvana@gmail.com",
  },
  {
    id: 2,
    maSV: "2",
    hoTen: "Nguyễn Văn B",
    sdt: "09382223322",
    email: "nguyenvanb@gmail.com",
  },
];

const studentSlice = createSlice({
  name: "students",
  initialState,
  reducers: {
    addStudent: (state, action) => {
      state.push(action.payload);
    },
    removeStudent: (state, action) => {
      return state.filter((sv) => sv.id !== action.payload);
    },
    updateStudent: (state, action) => {
      const idx = state.findIndex((sv) => sv.id === action.payload.id);
      if (idx !== -1) {
        state[idx] = action.payload;
      }
    },
  },
});

export const { addStudent, removeStudent, updateStudent } =
  studentSlice.actions;
export default studentSlice.reducer;
