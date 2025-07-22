import React, { useState } from "react";
import Header from "./From/header.jsx";
import Footer from "./From/footer.jsx";
import From from "./From/from.jsx";
import Gallery from "./From/gallery.jsx";
import Renderfrom from "./From/render_from.jsx";
import Search from "./From/Search.jsx";
import { useSelector } from "react-redux";

export default function ReactFrom() {
  const [editStudent, setEditStudent] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const students = useSelector((state) => state.students);
  const filteredStudents = students.filter((sv) => {
    const q = searchTerm.toLowerCase();
    return (
      sv.maSV.toLowerCase().includes(q) ||
      sv.hoTen.toLowerCase().includes(q) ||
      sv.sdt.toLowerCase().includes(q) ||
      sv.email.toLowerCase().includes(q)
    );
  });
  return (
    <div>
      <h1>ReactFrom</h1>
      <Header />
      <From editStudent={editStudent} setEditStudent={setEditStudent} />
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Renderfrom onEdit={setEditStudent} students={filteredStudents} />
      <Gallery />
      <Footer />
    </div>
  );
}
