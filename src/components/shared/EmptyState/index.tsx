import React from 'react';
import { BookX } from 'lucide-react';

interface EmptyStateProps {
  text: string;
}

const EmptyState: React.FC<EmptyStateProps> = ({ text }) => {
  return (
    <div className="flex flex-col items-center justify-center py-[5%] text-center">
      <BookX className="text-primary-blue mb-4" size={50} />
      <div className="text-lg text-gray-600">{text}</div>
    </div>
  );
};

export default EmptyState;
