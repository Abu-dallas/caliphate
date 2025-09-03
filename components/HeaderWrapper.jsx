"use client";
import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useState } from "react";

function HeaderWrapper() {
  const [Open, setOpen] = useState(false);
  return (
    <div className="w-full">
      <Navbar setOpen={setOpen} />
      <Sidebar setOpen={setOpen} Open={Open} />
    </div>
  );
}

export default HeaderWrapper;
