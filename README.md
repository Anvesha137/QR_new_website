# QuickRevert Website Design

This project is organized into separate frontend and backend directories.

## Project Structure

```
.
├── backend/              # Backend API server
│   ├── server.js         # Main server file
│   └── package.json      # Backend dependencies
├── public/               # Static assets
├── src/                  # Frontend source code
│   ├── components/       # React components
│   ├── services/         # API service files
│   └── ...               # Other frontend files
├── .env                  # Environment variables
├── index.html            # Main HTML file
└── package.json          # Frontend dependencies
```

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Running the Application

1. **Install frontend dependencies:**
   ```bash
   npm install
   ```

2. **Install backend dependencies:**
   ```bash
   cd backend
   npm install
   cd ..
   ```

3. **Start the backend server:**
   ```bash
   cd backend
   npm run dev
   ```
   The backend server will run on http://localhost:3001

4. **Start the frontend development server:**
   ```bash
   npm run dev
   ```
   The frontend will run on http://localhost:3000

The frontend development server is configured to proxy API requests to the backend server automatically.

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```
VITE_STACK_PROJECT_ID=your_stack_project_id
VITE_STACK_PUBLISHABLE_CLIENT_KEY=your_publishable_key
STACK_SECRET_SERVER_KEY=your_secret_key
DATABASE_URL=your_database_connection_string
VITE_NEON_DB_URL=your_neon_db_url
```


## Development

### Frontend
The frontend is built with React, TypeScript, and Vite. Components are located in the `src/components` directory.

### Backend
The backend is built with Node.js and Express. API routes are defined in `backend/server.js`.
