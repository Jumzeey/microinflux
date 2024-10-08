import md5 from 'md5';

const colors = [
  'bg-purple-600',
  'bg-blue-600',
  'bg-red-600',
  'bg-green-600',
  'bg-yellow-600',
  'bg-indigo-600',
  'bg-pink-600',
];

// Function to generate initials
export const getInitials = (name: string) => {
  const initials = name
    .split(' ')
    .map(word => word.charAt(0).toUpperCase())
    .join('')
    .slice(0, 2);
  return initials;
};

// Function to assign dynamic background colors
export const getBackgroundColor = (name: string) => {
  const index = md5(name).charCodeAt(0) % colors.length;
  return colors[index];
};
