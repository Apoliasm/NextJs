"use client";

import { Input } from "@material-tailwind/react";
import { useState } from "react";

export default function SearchBox({ searchValue, setSearchValue }) {
  return (
    <Input
      label="Search DB"
      placeholder="Search TODO"
      icon={<i className="fas fa-search" />}
      value={searchValue}
      onChange={(e) => setSearchValue(e.target.value)}
    />
  );
}
