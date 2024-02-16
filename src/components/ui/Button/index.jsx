import React from "react";
import { useNavigate } from "react-router-dom";

const Button = ({
  link,
  text,
  className,
  icon,
  isLoading,
  isLoadingWithSkeleton,
  id,
  latestValue,
  ...rest
}) => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => {
        link && navigate(link);
      }}
      className={`button ${className}`}
      {...rest}
    >
      {!isLoading && icon && <img src={icon} alt="" />}
      <span>{text}</span>
    </button>
  );
};
export default Button;
