# Match Tracker

Match Tracker is a Next.js application built with the App Router (Next.js 15+), TypeScript, Tailwind CSS, and SWR. It fetches live match data via an API, displays team names, scores, and match statuses, and supports client-side revalidation without a full page reload—all while leveraging SSR for the initial load.

## Features

- **Server-Side Rendering (SSR):**  
  Initial data is fetched on the server for performance and SEO benefits.
  
- **Client-Side Revalidation:**  
  Uses SWR to revalidate and refresh data on the client without reloading the page.
  
- **Live Data Updates:**  
  Data auto-refreshes on tab focus and via a manual Refresh button.
  
- **Tailwind CSS:**  
  Rapidly build a responsive UI with utility-first styling.
  
- **TypeScript:**  
  Ensures type safety and a better developer experience.

## Getting Started

### Prerequisites

- Node.js (v20 or later)
- npm or yarn

### Installation

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd my-match-tracker

2. **Install dependencies:
    ```bash
   npm install
   # or
   yarn install
   
3. **Environment Variables:
    Create a **.env** file at the root of the project and add the following variable:
    ```bash
   NEXT_PUBLIC_BASEURL=*your-match-tracker-base-url*
   
### Running the Application

Start the development server:
    
    npm run dev
    # or
    yarn dev
Open http://localhost:3000 in your browser to view the app.

### Building for Production
```bash
npm run build
npm run start

