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
  const [error, setError] = useState("");
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
  };

  const validate = () => {
    if (!form.maSV || !form.hoTen || !form.sdt || !form.email) {
      setError("Vui lòng nhập đầy đủ thông tin!");
      return false;
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) {
      setError("Email không hợp lệ!");
      return false;
    }
    setError("");
    return true;
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
    <div
      style={{
        background: "#222",
        color: "#fff",
        padding: 32,
        borderRadius: 16,
        margin: "24px 0",
        boxShadow: "0 4px 24px rgba(0,0,0,0.12)",
      }}
    >
      <h2
        style={{
          marginBottom: 20,
          fontWeight: 700,
          fontSize: 24,
          letterSpacing: 1,
        }}
      >
        Thông tin sinh viên
      </h2>
      <div style={{ minHeight: 32 }}>
        <div
          style={{
            opacity: showAlert ? 1 : 0,
            transform: showAlert ? "translateY(0)" : "translateY(-20px)",
            transition: "all 0.4s",
            background: "#4caf50",
            color: "#fff",
            padding: 10,
            borderRadius: 6,
            marginBottom: 8,
            textAlign: "center",
            fontWeight: 500,
            boxShadow: showAlert ? "0 2px 8px rgba(76,175,80,0.15)" : "none",
            pointerEvents: "none",
            position: "relative",
            zIndex: 2,
          }}
        >
          {alert}
        </div>
      </div>
      <form onSubmit={handleSubmit} autoComplete="off">
        <div style={{ display: "flex", gap: 24, marginBottom: 16 }}>
          <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
            <label style={{ marginBottom: 6, fontWeight: 500 }}>Mã SV</label>
            <input
              name="maSV"
              value={form.maSV}
              onChange={handleChange}
              className="form-control"
              style={{
                padding: "10px 12px",
                borderRadius: 6,
                border: "1px solid #444",
                outline: "none",
                fontSize: 16,
                background: "#181818",
                color: "#fff",
                marginBottom: 2,
                transition: "border 0.2s",
              }}
              onFocus={(e) => (e.target.style.border = "1.5px solid #4caf50")}
              onBlur={(e) => (e.target.style.border = "1px solid #444")}
            />
          </div>
          <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
            <label style={{ marginBottom: 6, fontWeight: 500 }}>Họ tên</label>
            <input
              name="hoTen"
              value={form.hoTen}
              onChange={handleChange}
              className="form-control"
              style={{
                padding: "10px 12px",
                borderRadius: 6,
                border: "1px solid #444",
                outline: "none",
                fontSize: 16,
                background: "#181818",
                color: "#fff",
                marginBottom: 2,
                transition: "border 0.2s",
              }}
              onFocus={(e) => (e.target.style.border = "1.5px solid #4caf50")}
              onBlur={(e) => (e.target.style.border = "1px solid #444")}
            />
          </div>
        </div>
        <div style={{ display: "flex", gap: 24, marginBottom: 16 }}>
          <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
            <label style={{ marginBottom: 6, fontWeight: 500 }}>
              Số điện thoại
            </label>
            <input
              name="sdt"
              value={form.sdt}
              onChange={handleChange}
              className="form-control"
              style={{
                padding: "10px 12px",
                borderRadius: 6,
                border: "1px solid #444",
                outline: "none",
                fontSize: 16,
                background: "#181818",
                color: "#fff",
                marginBottom: 2,
                transition: "border 0.2s",
              }}
              onFocus={(e) => (e.target.style.border = "1.5px solid #4caf50")}
              onBlur={(e) => (e.target.style.border = "1px solid #444")}
            />
          </div>
          <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
            <label style={{ marginBottom: 6, fontWeight: 500 }}>Email</label>
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              className="form-control"
              style={{
                padding: "10px 12px",
                borderRadius: 6,
                border: "1px solid #444",
                outline: "none",
                fontSize: 16,
                background: "#181818",
                color: "#fff",
                marginBottom: 2,
                transition: "border 0.2s",
              }}
              onFocus={(e) => (e.target.style.border = "1.5px solid #4caf50")}
              onBlur={(e) => (e.target.style.border = "1px solid #444")}
            />
          </div>
        </div>
        {error && (
          <div style={{ color: "#ff5252", marginBottom: 12, fontWeight: 500 }}>
            {error}
          </div>
        )}
        <div style={{ display: "flex", gap: 12, marginTop: 8 }}>
          <button
            type="submit"
            className="btn btn-success"
            style={{
              background: editStudent ? "#ff9800" : "#4caf50",
              color: "#fff",
              border: "none",
              borderRadius: 6,
              padding: "10px 24px",
              fontWeight: 600,
              fontSize: 16,
              cursor: "pointer",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
              transition: "background 0.2s",
            }}
            onMouseOver={(e) =>
              (e.target.style.background = editStudent ? "#fb8c00" : "#43a047")
            }
            onMouseOut={(e) =>
              (e.target.style.background = editStudent ? "#ff9800" : "#4caf50")
            }
          >
            {editStudent ? "Cập nhật" : "Thêm sinh viên"}
          </button>
          {editStudent && (
            <button
              type="button"
              className="btn btn-secondary"
              style={{
                background: "#757575",
                color: "#fff",
                border: "none",
                borderRadius: 6,
                padding: "10px 24px",
                fontWeight: 600,
                fontSize: 16,
                cursor: "pointer",
                boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                transition: "background 0.2s",
              }}
              onClick={() => setEditStudent(null)}
              onMouseOver={(e) => (e.target.style.background = "#616161")}
              onMouseOut={(e) => (e.target.style.background = "#757575")}
            >
              Hủy
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
