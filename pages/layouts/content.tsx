import React from "react";
function contentLayout({ children }) {
  return (
    <div className="py-12 px-7 h-screen w-[calc(100vw-350px)] overflow-y-auto space-y-7">
      <div className="mx-auto max-w-[1000px]">{children}</div>
    </div>
  );
}
export default contentLayout;
