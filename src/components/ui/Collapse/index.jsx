import React, { useRef } from "react";

const Collapse = ({ isOpen, children, className }) => {
  const contentRef = useRef(null);

  const getContentHeight = () => {
    return isOpen ? contentRef.current?.scrollHeight : 0;
  };

  return (
    <div
      className={`collapse ${className} ${isOpen ? "open" : ""}`}
      style={{ maxHeight: getContentHeight() }}
      ref={contentRef}
    >
      {children}
    </div>
  );
};

export default Collapse;
