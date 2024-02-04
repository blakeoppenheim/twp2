import React from "react";

const Button = ({
  text,
  className,
  icon,
  isLoading,
  isLoadingWithSkeleton,
  id,
  latestValue,
  ...rest
}) => {
  return (
    <button className={`button ${className}`} {...rest}>
      {!isLoading && icon && <img src={icon} alt="" />}
      <span>{text}</span>
    </button>
  );
};
export default Button;
