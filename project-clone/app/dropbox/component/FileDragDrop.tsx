"use client";

export default function FileDragDrop() {
  return (
    <section className="w-full p-20 flex flex-col items-center border-4 border-dotted border-indigo-700">
      <input type="file"></input>
      <p>파일을 끌어다 놓아 업로드하세요</p>
    </section>
  );
}
