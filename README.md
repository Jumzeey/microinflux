# Micro-Influx

<div align="center">
  <br />
    <img src="https://dummyimage.com/600x200/000/fff&text=Micro-Influx" alt="Micro-Influx Banner">
  <br />
  
  <div>
    <img src="https://img.shields.io/badge/-Typescript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="typescript" />
    <img src="https://img.shields.io/badge/-React-black?style=for-the-badge&logoColor=white&logo=react&color=61DAFB" alt="react" />
    <img src="https://img.shields.io/badge/-Vite-black?style=for-the-badge&logoColor=white&logo=vite&color=646CFF" alt="vite" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
    <img src="https://img.shields.io/badge/-Lucide-black?style=for-the-badge&logoColor=white&logo=lucide" alt="lucide" />
  </div>
</div>

---

## 🤖 Introduction

**Micro-Influx** is a comprehensive platform that allows users to create and manage marketing campaigns efficiently. The app provides a responsive dashboard that adapts to both mobile and desktop screens, offering a smooth and seamless user experience.

## Table of Contents

🕸️ [Features](#features) </br>
🕸️ [Project Structure](#project-structure) </br>
🕸️ [Technologies Used](#technologies-used) </br>
🕸️ [Installation](#installation) </br>
🕸️ [Gallery](#gallery) </br>
🕸️ [Snippets](#snippets)  </br>
🕸️ [Footnote](#footnote)</br>

## 🔋 Features

👉 **Campaign Management**: Create and view marketing campaigns.

👉 **Search Functionality**: Filter campaigns by title for quick access.

👉 **Responsive Dashboard**: Optimized layout for both desktop and mobile views.

👉 **Dynamic Gravatars**: Generate initials and colored backgrounds for users dynamically using Gravatar.

👉 **Intuitive Sidebar Navigation**: Easily accessible sidebar for seamless navigation on mobile.

👉 **TypeScript Support**: Full TypeScript integration for static type checking.

## ⚙️ Tech Stack

- **TypeScript** for static typing and improved developer experience.
- **React** as the core UI library for building component-driven user interfaces.
- **Vite** as the build tool for fast and optimized bundling.
- **Tailwind CSS** for utility-first styling and rapid UI development.
- **Lucide React** for iconography with simple yet customizable icons.
- **ShadCN UI** components to streamline the interface.

## Project Structure

```
src/
├── assets/                 # Static assets
│   ├── fonts/             # Font files
│   ├── icons/             # Icon files
│   └── images/            # Image files
├── components/             # Reusable React components
│   ├── campaign/          # Campaign-related components
│   ├── dashboard/         # Dashboard components
│   ├── shared/            # Shared components (used across multiple features)
│   └── ui/                # UI components (buttons, forms, etc.)
│       └── index.ts       # Export file for UI components
├── context/                # React context for state management
│   └── campaign-context.tsx # Context for campaign-related state
├── data/                   # Data fetching and mock data
│   ├── categories-data.ts  # Category-related data
│   ├── profile-overview-data.ts # Profile overview data
│   └── sidebar-data.ts     # Sidebar data for navigation
├── lib/                    # Library for utility functions (currently empty)
├── pages/                  # Page components
│   ├── Dashboard.tsx       # Dashboard page
│   ├── RootLayout.tsx      # Root layout component
│   └── index.ts            # Export file for page components
├── repositories/           # Repositories for handling data interactions
│   └── campaign-repository.ts # Campaign-specific repository
├── types/                  # TypeScript types and interfaces
│   └── campaign-types.ts    # Types related to campaigns
├── utils/                  # Utility functions
│   ├── gravatar-generator.ts # Gravatar generation utility
│   └── shorten-text.ts     # Utility to shorten text strings
├── App.tsx                 # Main application component
├── index.css               # Global CSS
└── main.tsx                # Entry point for the app
```

## ⚙️ Technologies Used

- **React**: A JavaScript library for building user interfaces
- **TypeScript**: Adds static typing to JavaScript, ensuring code correctness
- **Vite**: A build tool that aims to provide a faster and leaner development experience
- **Tailwind CSS**: A utility-first CSS framework
- **Lucide React**: Icon library used for rendering icons
- **ShadCN UI**: Component library for building user interfaces
- **Gravatar**: Used for generating dynamic user avatars

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Jumzeey/microinflux.git
   ```

2. Navigate to the project directory:

   ```bash
   cd micro-influx
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open your browser and visit `http://localhost:5173` to see the app running.

## 📸 Gallery

Below are some dummy screenshots of the app on mobile and desktop views.

### Mobile View

<div style="display: flex; justify-content: space-between;">
  <img src="https://via.placeholder.com/300x600?text=Mobile+Screenshot+1" alt="Mobile Screenshot 1" width="300" />
  <img src="https://via.placeholder.com/300x600?text=Mobile+Screenshot+2" alt="Mobile Screenshot 2" width="300" />
  <img src="https://via.placeholder.com/300x600?text=Mobile+Screenshot+3" alt="Mobile Screenshot 3" width="300" />
  <img src="https://via.placeholder.com/300x600?text=Mobile+Screenshot+4" alt="Mobile Screenshot 4" width="300" />
</div>

_Resolution: 300x600px_

### Desktop View

<div style="display: flex; justify-content: space-between;">
  <img src="https://via.placeholder.com/1024x768?text=Desktop+Screenshot+1" alt="Desktop Screenshot 1" width="500" />
  <img src="https://via.placeholder.com/1024x768?text=Desktop+Screenshot+2" alt="Desktop Screenshot 2" width="500" />
</div>

_Resolution: 1024x768px_


## 🕸️ Snippets

<details>
<summary><code>src/components/CampaignCard.tsx</code></summary>

````tsx
import React from 'react';
import { getInitials, getBackgroundColor } from '@/utils/avatarUtils';

type CampaignCardProps = {
  title: string;
  budget: number;
  user: {
    name: string;
  };
};

const CampaignCard: React.FC<CampaignCardProps> = ({ title, budget, user }) => {
  const initials = getInitials(user.name);
  const backgroundColor = getBackgroundColor(user.name);

  return (
    <div className="p-4 shadow-lg bg-white rounded-lg">
      <div className="flex items-center">
        <div
          className="w-10 h-10 rounded-full text-white flex items-center justify-center"
          style={{ backgroundColor }}
        >
          {initials}
        </div>
        <h2 className="ml-4 text-xl font-bold">{title}</h2>
      </div>
      <p className="text-gray-600">Budget: ${budget}</p>
    </div>
  );
};

export default CampaignCard;
</details>
<details>
<summary><code>src/utils/avatarUtils.ts</code></summary>

````ts
export function getInitials(name: string): string {
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('');
  return initials.toUpperCase();
}

export function getBackgroundColor(name: string): string {
  const colors = ['#FF5733', '#33FF57', '#3357FF', '#F333FF'];
  const charCodeSum = name
    .split('')
    .reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return colors[charCodeSum % colors.length];
}
</details>



````
### Footnote
This project was built as a test given to Jumat Adeogun for the role of Frontend Engineer. Feel free to explore and learn from the codebase!