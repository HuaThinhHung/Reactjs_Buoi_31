import React from "react";
import { useDispatch } from "react-redux";
import { removeStudent } from "../studentSlice";

export default function Renderfrom({ onEdit, students }) {
  const dispatch = useDispatch();

  return (
    <div
      style={{
        background: "#fff",
        color: "#222",
        borderRadius: 16,
        padding: 24,
        boxShadow: "0 4px 24px rgba(0,0,0,0.10)",
        margin: "24px 0",
        overflowX: "auto",
      }}
    >
      <h2
        style={{
          fontWeight: 700,
          fontSize: 22,
          marginBottom: 18,
          letterSpacing: 1,
        }}
      >
        Danh sách sinh viên
      </h2>
      <table
        style={{
          width: "100%",
          borderCollapse: "separate",
          borderSpacing: 0,
          minWidth: 600,
        }}
      >
        <thead>
          <tr style={{ background: "#f5f5f5" }}>
            <th
              style={{
                padding: "12px 8px",
                fontWeight: 700,
                fontSize: 15,
                color: "#333",
                borderTopLeftRadius: 10,
              }}
            >
              Mã SV
            </th>
            <th
              style={{
                padding: "12px 8px",
                fontWeight: 700,
                fontSize: 15,
                color: "#333",
              }}
            >
              Họ tên
            </th>
            <th
              style={{
                padding: "12px 8px",
                fontWeight: 700,
                fontSize: 15,
                color: "#333",
              }}
            >
              Số điện thoại
            </th>
            <th
              style={{
                padding: "12px 8px",
                fontWeight: 700,
                fontSize: 15,
                color: "#333",
              }}
            >
              Email
            </th>
            <th
              style={{
                padding: "12px 8px",
                fontWeight: 700,
                fontSize: 15,
                color: "#333",
                borderTopRightRadius: 10,
              }}
            >
              Hành động
            </th>
          </tr>
        </thead>
        <tbody>
          {students.map((sv, idx) => (
            <tr
              key={sv.id}
              style={{
                background: idx % 2 === 0 ? "#fafbfc" : "#f0f1f3",
                transition: "background 0.2s",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.background = "#e3f2fd")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.background =
                  idx % 2 === 0 ? "#fafbfc" : "#f0f1f3")
              }
            >
              <td
                style={{
                  padding: "10px 8px",
                  textAlign: "center",
                  fontWeight: 500,
                }}
              >
                {sv.maSV}
              </td>
              <td style={{ padding: "10px 8px", fontWeight: 500 }}>
                {sv.hoTen}
              </td>
              <td style={{ padding: "10px 8px", fontWeight: 500 }}>{sv.sdt}</td>
              <td style={{ padding: "10px 8px", fontWeight: 500 }}>
                {sv.email}
              </td>
              <td style={{ padding: "10px 8px", textAlign: "center" }}>
                <button
                  onClick={() => onEdit(sv)}
                  className="btn btn-warning"
                  style={{
                    marginRight: 8,
                    background: "#ff9800",
                    color: "#fff",
                    border: "none",
                    borderRadius: 6,
                    padding: "7px 18px",
                    fontWeight: 600,
                    fontSize: 15,
                    cursor: "pointer",
                    boxShadow: "0 1px 4px rgba(0,0,0,0.07)",
                    transition: "background 0.2s",
                  }}
                  onMouseOver={(e) => (e.target.style.background = "#fb8c00")}
                  onMouseOut={(e) => (e.target.style.background = "#ff9800")}
                >
                  Sửa
                </button>
                <button
                  onClick={() => dispatch(removeStudent(sv.id))}
                  className="btn btn-danger"
                  style={{
                    background: "#e53935",
                    color: "#fff",
                    border: "none",
                    borderRadius: 6,
                    padding: "7px 18px",
                    fontWeight: 600,
                    fontSize: 15,
                    cursor: "pointer",
                    boxShadow: "0 1px 4px rgba(0,0,0,0.07)",
                    transition: "background 0.2s",
                  }}
                  onMouseOver={(e) => (e.target.style.background = "#c62828")}
                  onMouseOut={(e) => (e.target.style.background = "#e53935")}
                >
                  Xóa
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
