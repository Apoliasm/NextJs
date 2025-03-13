"use client";

import { IconButton } from "@material-tailwind/react";

export default function DropboxImage() {
  return (
    <div className="relative w-full flex flex-col p-4 border-1 border-gray-100 rounded-2xl shadow-md">
      <div>
        <img className="rounded-2xl" src="/images/dropbox_icon.png"></img>
      </div>
      <div>filename</div>
      <div className="absolute top-4 right-4">
        <IconButton color="red">
          <i className="fas fa-trash"></i>
        </IconButton>
      </div>
    </div>
  );
}
