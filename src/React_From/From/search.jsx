import React from "react";

export default function Search({ searchTerm, setSearchTerm }) {
  return (
    <div
      style={{ margin: "24px 0", display: "flex", justifyContent: "center" }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          background: "#fff",
          borderRadius: 32,
          boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
          padding: "4px 18px",
          minWidth: 340,
          maxWidth: 480,
          width: "100%",
          border: "1.5px solid #e0e0e0",
          transition: "border 0.2s",
        }}
      >
        <span
          style={{
            color: "#888",
            fontSize: 20,
            marginRight: 8,
            display: "flex",
            alignItems: "center",
          }}
        >
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="7" stroke="#888" strokeWidth="2" />
            <path
              stroke="#888"
              strokeWidth="2"
              strokeLinecap="round"
              d="M20 20l-3.5-3.5"
            />
          </svg>
        </span>
        <input
          type="text"
          placeholder="Tìm kiếm sinh viên..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            width: "100%",
            padding: "10px 0",
            border: "none",
            outline: "none",
            fontSize: 16,
            background: "transparent",
            color: "#222",
            fontWeight: 500,
          }}
          onFocus={(e) =>
            (e.target.parentNode.style.border = "1.5px solid #4caf50")
          }
          onBlur={(e) =>
            (e.target.parentNode.style.border = "1.5px solid #e0e0e0")
          }
        />
      </div>
    </div>
  );
}
