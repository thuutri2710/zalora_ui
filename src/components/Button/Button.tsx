import React from 'react';
import clsx from 'clsx';

export const buttonType = ['primary', 'outline', 'apply', 'danger', 'link', 'invert'] as const
export type ButtonType = typeof buttonType[number];

export const buttonSize = ['small', 'medium'] as const
export type ButtonSize = typeof buttonSize[number];

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  /**
   * Button type
   */
  type?: ButtonType;
  /**
   * Button size
   */
   size?: ButtonSize;
  /**
   * Optional click handler
   */
  icon?: React.ReactNode;
  isDisabled?: boolean;
  tabIndex?: number;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

/**
 * A button indicates a possible user action. Should be visible and inform the users on what will happen when they click on it.
 */
export const Button = ({
  children,
  className = '',
  type = 'primary',
  size = 'medium',
  icon = null,
  isDisabled = false,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={clsx(
        'outline-none transition inline-flex items-center space-x-4 disabled:cursor-not-allowed',
        size === 'small' && 'text-sm h-10',
        type !== 'link' && 'px-6 py-3 rounded-sm',
        type === 'primary' && 'bg-primary-main text-white hover:bg-primary-1 focus:bg-primary-1 active:bg-black',
        type === 'outline' && 'text-primary-main ring-1 ring-inset ring-primary-1 hover:bg-primary-4 focus:bg-primary-4 active:bg-primary-3 active:ring-primary-main',
        type === 'apply' && 'bg-secondary-main text-primary-4 hover:bg-secondary-2 focus:bg-secondary-2 active:bg-secondary-1',
        type === 'danger' && 'bg-error-main text-primary-4 hover:bg-error-2 focus:bg-error-2 active:bg-error-1',
        type === 'link' && 'text-secondary-main hover:text-secondary-2 focus:text-secondary-2 active:text-secondary-1',
        type === 'invert' && 'bg-transparent text-primary-4 ring-1 ring-inset ring-white hover:bg-white hover:text-primary-main hover:ring-transparent focus:bg-white focus:text-primary-main focus:ring-transparent active:bg-primary-4',
        type === 'outline' ? 'disabled:bg-white disabled:text-primary-4 disabled:ring-primary-4' : 'disabled:bg-primary-4 disabled:text-primary-2',
        className,
      )}
      disabled={isDisabled}
      {...props}
    >
      {icon}
      <span>{children}</span>
    </button>
  );
};
