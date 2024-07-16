# Frontend - Next.js

## Setup Instructions

### Prerequisites

- Node.js 14.x or higher
- npm or yarn
- Git (for version control)

### Installation

1. **Clone the repository:**

    ```sh
    git clone https://github.com/yourusername/yourproject.git
    cd yourproject/frontend
    ```

2. **Install dependencies:**

    ```sh
    npm install
    # or
    yarn install
    ```

3. **Run the development server:**

    ```sh
    npm run dev
    # or
    yarn dev
    ```

4. **Open your browser and navigate to:**

    ```
    http://localhost:3000
    ```

### Components

- TaskList: Displays all tasks.
- TaskForm: Form to add a new task.
- TaskItem: Displays individual task details with options to update status or delete.

### Styling

- TailwindCSS: Used for styling components.
- ShadCN: Used for enhanced component design.

### Assumptions and Design Decisions

- Next.js: Chosen for its simplicity in SSR and SSG, which can improve SEO and performance.
- Axios: For HTTP requests to the backend API.
- TailwindCSS: For rapid and easy styling.
- ShadCN: Used for enhanced component design and consistency.
