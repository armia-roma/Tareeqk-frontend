# Tareeqk Frontend

A modern web application for towing service requests.

## Prerequisites

Before running this application, make sure you have the following installed:

-   [Node.js](https://nodejs.org/) (v18 or later recommended)
-   npm (comes with Node.js) or [yarn](https://yarnpkg.com/)

## Installation

1. Clone the repository:

    ```bash
    git clone [repository-url]
    cd tareegk-front
    ```

2. Install dependencies:

    ```bash
    npm install
    # or if you use yarn
    yarn
    ```

3. Set up environment variables:
   Create or modify the `.env` file in the root directory with necessary configuration.

## Running the Application

### Development Mode

To run the application in development mode with hot-reload:

```bash
npm run dev
# or
yarn dev
```

The application will be available at [http://localhost:5173](http://localhost:5173) by default.

### Building for Production

To build the application for production:

```bash
npm run build
# or
yarn build
```

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
# or
yarn preview
```

## Project Structure

-   `src/` - Source code of the application
    -   `Components/` - Reusable React components
    -   `Pages/` - Page components
    -   `services/` - API and service integrations

## Technologies Used

-   React 19
-   TypeScript
-   Vite
-   React Router
-   Tailwind CSS
-   Axios for API requests
