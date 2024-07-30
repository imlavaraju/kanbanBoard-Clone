# Kanban Board Application [Live Link]()

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Technologies Used](#technologies-used)

## Introduction

The Given Application is a task management tool that helps you organize and manage tasks across different stages: To Do, In Progress, Peer Review, and Done. It supports drag-and-drop functionality, search, and task creation.

## Features

- Task management across multiple stages.
- Drag-and-drop functionality.
- Search functionality.
- Task creation with a floating button.
- Responsive UI using Tailwind CSS.
- State management using Redux

## Requirements

- Node.js (v12 )
- npm (v6)

## Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/imlavaraju/kanbanBoard-Clone.git
   cd kanban-board
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

## Usage

1. **Start the development server:**

   ```sh
   npm start
   ```

   The application will open in your default browser at `http://localhost:3000`.

2. **Build the application for production:**
   ```sh
   npm run build
   ```
   The build files will be generated in the `build` directory.

## Folder Structure

```
kanban-board-Clone/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── Column.js
│   │   ├── KanbanBoard.js
│   │   ├── TaskCard.js
├── │   └── TaskForm.js
│   ├── redux/
│   │   ├── Store.js
│   │   └── tasksSlice.js
│   ├── App.js
│   ├── index.js
│   └── ...
├── styles/
│   ├── tailwind.css
│   └── ...
├── package.json
└── README.md
```

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Redux**: A predictable state container for JavaScript apps.
- **React-DnD**: Drag-and-Drop for React.
  - **HTML5Backend**: Backend for React-DnD.
  - Reference: [Drag-and-drop with React and react-dnd](https://blog.logrocket.com/drag-and-drop-react-dnd/).
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **React-Router**: Declarative routing for React.
