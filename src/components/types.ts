import React from 'react';

interface ButtonProps {
  size?: 'small' | 'medium' | 'large';
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
  text?: string;
}

export type { ButtonProps };
