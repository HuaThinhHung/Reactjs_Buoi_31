import React from "react";
import { useDispatch } from "react-redux";
import { removeStudent } from "../studentSlice";

export default function Renderfrom({ onEdit, students }) {
  const dispatch = useDispatch();

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 rounded-2xl shadow-xl p-8 my-8 overflow-x-auto border border-gray-200 dark:border-gray-700">
      <h2 className="font-extrabold text-2xl mb-6 tracking-wide text-blue-700 dark:text-blue-400 flex items-center gap-2">
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path
            d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6Z"
            stroke="#2563eb"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M8 10h8M8 14h5"
            stroke="#2563eb"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
        Danh sách sinh viên
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-[600px] w-full text-sm text-left border-separate border-spacing-y-2">
          <thead>
            <tr className="bg-blue-50 dark:bg-gray-800">
              <th className="py-3 px-4 font-bold text-gray-700 dark:text-gray-200 rounded-tl-xl">
                Mã SV
              </th>
              <th className="py-3 px-4 font-bold text-gray-700 dark:text-gray-200">
                Họ tên
              </th>
              <th className="py-3 px-4 font-bold text-gray-700 dark:text-gray-200">
                Số điện thoại
              </th>
              <th className="py-3 px-4 font-bold text-gray-700 dark:text-gray-200">
                Email
              </th>
              <th className="py-3 px-4 font-bold text-gray-700 dark:text-gray-200 rounded-tr-xl text-center">
                Hành động
              </th>
            </tr>
          </thead>
          <tbody>
            {students.map((sv, idx) => (
              <tr
                key={sv.id}
                className={`transition hover:bg-blue-100 dark:hover:bg-blue-900 ${
                  idx % 2 === 0
                    ? "bg-white dark:bg-gray-900"
                    : "bg-gray-50 dark:bg-gray-800"
                }`}
              >
                <td className="py-2 px-4 text-center font-semibold">
                  {sv.maSV}
                </td>
                <td className="py-2 px-4 font-semibold">{sv.hoTen}</td>
                <td className="py-2 px-4 font-semibold">{sv.sdt}</td>
                <td className="py-2 px-4 font-semibold">{sv.email}</td>
                <td className="py-2 px-4 text-center flex gap-2 justify-center">
                  <button
                    onClick={() => onEdit(sv)}
                    className="inline-flex items-center gap-1 bg-orange-500 hover:bg-orange-600 text-white font-bold px-4 py-2 rounded-lg shadow-md transition focus:outline-none"
                  >
                    <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                      <path
                        d="M4 21h4.586a1 1 0 0 0 .707-.293l10.414-10.414a2 2 0 0 0 0-2.828l-2.172-2.172a2 2 0 0 0-2.828 0L4.293 15.707A1 1 0 0 0 4 16.414V21z"
                        stroke="#fff"
                        strokeWidth="2"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Sửa
                  </button>
                  <button
                    onClick={() => dispatch(removeStudent(sv.id))}
                    className="inline-flex items-center gap-1 bg-red-600 hover:bg-red-700 text-white font-bold px-4 py-2 rounded-lg shadow-md transition focus:outline-none"
                  >
                    <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                      <path
                        d="M6 7h12M9 7V5a3 3 0 0 1 6 0v2m2 0v12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V7h12Z"
                        stroke="#fff"
                        strokeWidth="2"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Xóa
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
