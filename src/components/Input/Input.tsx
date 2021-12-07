import React, { useRef } from "react";
import clsx from "clsx";
import { Button } from "../Button";
import { ClearCircleIcon } from "../Icon";

interface InputProps {
  children: React.ReactNode;
  className?: string;
  /**
   * Element id
   */
  id: string;
  /**
   * Input label
   */
  label: string;
  /**
   * Input label
   */
  allowClear?: boolean;
  /**
   * Input value
   */
  value?: string;
  /**
   * Optional change handler
   */
  onChange?: () => void;
}

/**
 * A button indicates a possible user action. Should be visible and inform the users on what will happen when they click on it.
 */
export const Input = ({
  children,
  className = "",
  id,
  label = "Test",
  allowClear = true,
  ...props
}: InputProps) => {
  const ref = useRef<HTMLInputElement>(null!);

  const handleClear = () => {
    ref.current.value = "";
    ref.current.focus();
  };

  return (
    <div className="relative inline-block">
      <input
        ref={ref}
        id={id}
        className={clsx(
          "peer outline-none text-sm rounded-sm ring-1 ring-inset ring-primary-3 px-4 pt-6 pb-1 placeholder-transparent",
          "focus:ring-primary-main",
          className
        )}
        placeholder={label}
        {...props}
      />
      {allowClear && (
        <Button
          type="link"
          tabIndex={-1}
          onClick={handleClear}
          className={clsx(
            "peer absolute top-3 right-2 text-primary-3 hover:text-primary-2 focus:text-primary-1 active:text-primary-1"
          )}
        >
          <ClearCircleIcon />
        </Button>
      )}
      <label
        htmlFor={id}
        className={clsx(
          "absolute left-4 top-2 text-primary-2 text-xs transition-all",
          "peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm",
          "peer-focus:top-2 peer-focus:text-xs"
        )}
      >
        {label}
      </label>
    </div>
  );
};
