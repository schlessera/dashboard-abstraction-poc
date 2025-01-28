import React from 'react';
import './Card.css';

export interface CardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ title, children, className }) => {
  return (
    <div className={`storybook-card-container ${className}`}>
      <div className="storybook-card-header">
        <h3 className="storybook-card-title">{title}</h3>
      </div>
      <div className="storybook-card-content">
        {children}
      </div>
    </div>
  );
};
