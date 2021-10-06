import React from 'react';
import { ButtonHTMLAttributes, useState } from 'react';
import { Switch } from '@headlessui/react';
import clsx from 'clsx';

const sizes = {
  default: 'py-1 px-3 text-md font-medium',
  sm: 'py-1 px-2 text-sm font-medium'
};

const variants = {
  default: `
    bg-gray-50 
    shadow-sm
    hover:bg-gray-100 
    active:bg-gray-50  
    dark:bg-gray-800
    dark:hover:bg-gray-700
    dark:active:bg-gray-700
    dark:active:opacity-80
    
    border-gray-100 
    hover:border-gray-200
    active:border-gray-200
    dark:border-gray-700 
    dark:active:border-gray-600 
    dark:hover:border-gray-600

    text-gray-700
    hover:text-gray-900 
    active:text-gray-600 
    dark:text-gray-200  
    dark:active:text-white 
    dark:hover:text-white 
  `,
  gray: `
    bg-gray-100 
    shadow-sm
    hover:bg-gray-200 
    active:bg-gray-100  
    dark:bg-gray-800
    dark:hover:bg-gray-700
    dark:active:bg-gray-700
    dark:active:opacity-80
    
    border-gray-200 
    hover:border-gray-300
    active:border-gray-200
    dark:border-gray-700 
    dark:active:border-gray-600 
    dark:hover:border-gray-600

    text-gray-700
    hover:text-gray-900 
    active:text-gray-600 
    dark:text-gray-200  
    dark:active:text-white 
    dark:hover:text-white 
    
  `,
  primary:
    'bg-primary text-white shadow-sm border-primary-600 dark:border-primary-400 active:bg-primary-600 active:border-primary-700 hover:bg-primary-400 hover:border-primary-500',
  selected:
    'bg-gray-100 dark:bg-gray-500 active:text-gray-100  dark:hover:text-white dark:text-white'
};

export type ButtonVariant = keyof typeof variants;
export type ButtonSize = keyof typeof sizes;

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  icon?: React.ReactNode;
  noPadding?: boolean;
  noBorder?: boolean;
  pressEffect?: boolean;
  justifyLeft?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ loading, ...props }) => {
  return (
    <button
      {...props}
      className={clsx(
        'flex border rounded-md transition-colors duration-100',
        { 'opacity-5': loading, '!p-1': props.noPadding },
        { 'justify-center': !props.justifyLeft },
        sizes[props.size || 'default'],
        variants[props.variant || 'default'],
        { 'active:translate-y-[1px]': props.pressEffect },
        { 'border-0': props.noBorder },
        props.className
      )}
    >
      {props.children}
    </button>
  );
};