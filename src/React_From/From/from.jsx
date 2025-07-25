import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addStudent, updateStudent } from "../studentSlice";

export default function From({ editStudent, setEditStudent }) {
  const dispatch = useDispatch();
  const students = useSelector((state) => state.students);
  const [form, setForm] = useState({
    maSV: "",
    hoTen: "",
    sdt: "",
    email: "",
  });
  const [error, setError] = useState({});
  const [alert, setAlert] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    if (editStudent) {
      setForm({
        maSV: editStudent.maSV,
        hoTen: editStudent.hoTen,
        sdt: editStudent.sdt,
        email: editStudent.email,
      });
    } else {
      setForm({ maSV: "", hoTen: "", sdt: "", email: "" });
    }
  }, [editStudent]);

  useEffect(() => {
    if (alert) {
      setShowAlert(true);
      const timer = setTimeout(() => setShowAlert(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [alert]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError({ ...error, [e.target.name]: "" });
  };

  const validate = () => {
    const newError = {};
    if (!form.maSV) newError.maSV = "Vui lòng nhập mã SV!";
    else if (!/^\d+$/.test(form.maSV))
      newError.maSV = "Mã SV chỉ được chứa số!";
    if (!form.hoTen) newError.hoTen = "Vui lòng nhập họ tên!";
    else if (!/^[a-zA-ZÀ-ỹ\s]+$/.test(form.hoTen))
      newError.hoTen = "Họ tên chỉ được chứa chữ!";
    if (!form.sdt) newError.sdt = "Vui lòng nhập số điện thoại!";
    else if (!/^\d{10,11}$/.test(form.sdt))
      newError.sdt = "Số điện thoại phải là 10-11 số!";
    if (!form.email) newError.email = "Vui lòng nhập email!";
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email))
      newError.email = "Email không hợp lệ!";
    setError(newError);
    return Object.keys(newError).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    if (editStudent) {
      dispatch(updateStudent({ ...form, id: editStudent.id }));
      setEditStudent(null);
      setAlert("Cập nhật thành công!");
    } else {
      const newId =
        students.length > 0 ? Math.max(...students.map((sv) => sv.id)) + 1 : 1;
      dispatch(addStudent({ ...form, id: newId }));
      setAlert("Thêm sinh viên thành công!");
    }
    setForm({ maSV: "", hoTen: "", sdt: "", email: "" });
  };

  return (
    <div className="max-w-xl mx-auto mt-10 bg-gray-800 rounded-2xl shadow-2xl border border-gray-700 overflow-hidden">
      {/* Header */}
      <div className="flex items-center gap-3 bg-gradient-to-r from-blue-600 to-green-600 px-8 py-6 border-b border-gray-700">
        <span className="text-3xl text-white">
          <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
            <circle cx="12" cy="8" r="4" fill="#fff" fillOpacity=".18" />
            <circle cx="12" cy="8" r="3.2" fill="#fff" />
            <path
              d="M4 20c0-3.314 3.582-6 8-6s8 2.686 8 6"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </span>
        <div>
          <h2 className="m-0 text-white font-extrabold text-2xl tracking-wide">
            Quản lý sinh viên
          </h2>
          <div className="text-blue-100 text-base font-medium mt-1">
            Thông tin sinh viên
          </div>
        </div>
      </div>
      {/* Alert Toast */}
      <div className="min-h-[32px] px-8">
        <div
          className={`transition-all duration-400 bg-green-600 text-white py-2 rounded-lg mt-4 text-center font-bold text-base shadow-lg relative z-10 ${
            showAlert
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-5 pointer-events-none"
          }`}
        >
          {alert}
        </div>
      </div>
      {/* Form */}
      <form onSubmit={handleSubmit} autoComplete="off" className="p-8">
        <div className="flex flex-wrap gap-6 mb-5">
          <div className="flex-1 min-w-[220px] flex flex-col">
            <label className="mb-2 font-bold text-gray-300 text-sm">
              Mã SV
            </label>
            <input
              name="maSV"
              value={form.maSV}
              onChange={handleChange}
              className={`form-input rounded-lg px-4 py-3 bg-gray-900 text-white font-semibold border ${
                error.maSV
                  ? "border-red-500 ring-2 ring-red-400/30"
                  : "border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-400/30"
              } transition placeholder-gray-500 text-base`}
              placeholder="Nhập mã sinh viên"
            />
            {error.maSV && (
              <span className="text-red-500 text-xs font-semibold mt-1">
                {error.maSV}
              </span>
            )}
          </div>
          <div className="flex-1 min-w-[220px] flex flex-col">
            <label className="mb-2 font-bold text-gray-300 text-sm">
              Họ tên
            </label>
            <input
              name="hoTen"
              value={form.hoTen}
              onChange={handleChange}
              className={`form-input rounded-lg px-4 py-3 bg-gray-900 text-white font-semibold border ${
                error.hoTen
                  ? "border-red-500 ring-2 ring-red-400/30"
                  : "border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-400/30"
              } transition placeholder-gray-500 text-base`}
              placeholder="Nhập họ tên"
            />
            {error.hoTen && (
              <span className="text-red-500 text-xs font-semibold mt-1">
                {error.hoTen}
              </span>
            )}
          </div>
        </div>
        <div className="flex flex-wrap gap-6 mb-5">
          <div className="flex-1 min-w-[220px] flex flex-col">
            <label className="mb-2 font-bold text-gray-300 text-sm">
              Số điện thoại
            </label>
            <input
              name="sdt"
              value={form.sdt}
              onChange={handleChange}
              className={`form-input rounded-lg px-4 py-3 bg-gray-900 text-white font-semibold border ${
                error.sdt
                  ? "border-red-500 ring-2 ring-red-400/30"
                  : "border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-400/30"
              } transition placeholder-gray-500 text-base`}
              placeholder="Nhập số điện thoại"
            />
            {error.sdt && (
              <span className="text-red-500 text-xs font-semibold mt-1">
                {error.sdt}
              </span>
            )}
          </div>
          <div className="flex-1 min-w-[220px] flex flex-col">
            <label className="mb-2 font-bold text-gray-300 text-sm">
              Email
            </label>
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              className={`form-input rounded-lg px-4 py-3 bg-gray-900 text-white font-semibold border ${
                error.email
                  ? "border-red-500 ring-2 ring-red-400/30"
                  : "border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-400/30"
              } transition placeholder-gray-500 text-base`}
              placeholder="Nhập email"
            />
            {error.email && (
              <span className="text-red-500 text-xs font-semibold mt-1">
                {error.email}
              </span>
            )}
          </div>
        </div>
        <div className="flex gap-4 mt-6 justify-end">
          <button
            type="submit"
            className={`flex items-center gap-2 px-8 py-3 rounded-lg font-extrabold text-base shadow-md transition focus:outline-none ${
              editStudent
                ? "bg-orange-500 hover:bg-orange-600"
                : "bg-blue-600 hover:bg-blue-700"
            } text-white`}
          >
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
              <path
                d="M5 13l4 4L19 7"
                stroke="#fff"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {editStudent ? "Cập nhật" : "Thêm sinh viên"}
          </button>
          {editStudent && (
            <button
              type="button"
              className="flex items-center gap-2 px-8 py-3 rounded-lg font-extrabold text-base shadow-md transition focus:outline-none bg-gray-500 hover:bg-gray-600 text-white"
              onClick={() => setEditStudent(null)}
            >
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                <path
                  d="M18 6L6 18M6 6l12 12"
                  stroke="#fff"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
              </svg>
              Hủy
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
