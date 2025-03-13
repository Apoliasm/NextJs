"use client";

import DropboxImgList from "./component/DropboxImgList";
import FileDragDrop from "./component/FileDragDrop";
import Logo from "./component/Logo";
import SearchBox from "./component/SearchBox";
import { useState } from "react";

export default function DropboxUI() {
  const [searchValue, setSearchValue] = useState("");
  return (
    <main className="w-full p-2 flex flex-col gap-4">
      <Logo />
      <SearchBox
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      ></SearchBox>
      <FileDragDrop></FileDragDrop>
      <DropboxImgList></DropboxImgList>\
    </main>
  );
}
