# EonTickets

A modern, frontend-only ticket management application built with React and localStorage. EonTickets provides a seamless user experience for managing support tickets with a beautiful, responsive interface, all while maintaining data locally in the browser.

## Features

### 🎨 Beautiful Landing Page

- Welcoming hero section with wavy SVG background
- Decorative circular elements for visual appeal
- Feature showcase with card-based layout
- Fully responsive design (mobile, tablet, desktop)
- Maximum width of 1440px, centered on larger screens

### 🔐 Secure Authentication

- User signup and login functionality
- Form validation with inline error messages
- Toast notifications for user feedback
- localStorage-based session management (key: `ticketapp_session`)
- Protected routes with automatic redirect to login

### 📊 Dashboard

- Real-time statistics display:
  - Total tickets
  - Open tickets
  - In-progress tickets
  - Closed tickets
- Quick navigation to ticket management
- Prominent logout functionality

### 🎫 Complete Ticket Management (CRUD)

- **Create**: Add new tickets with title, description, status, and priority
- **Read**: View all tickets in a beautiful card-based grid layout
- **Update**: Edit ticket details with real-time validation
- **Delete**: Remove tickets with confirmation dialog

### 🎯 Status Management

Color-coded status indicators:

- **Open**: Green theme (bg-green-100, text-green-700, border-green-500)
- **In Progress**: Amber theme (bg-amber-100, text-amber-700, border-amber-500)
- **Closed**: Gray theme (bg-gray-100, text-gray-700, border-gray-500)

### ✨ Additional Features

- Real-time form validation
- Toast notifications for all actions (success, error, info)
- Loading states with skeleton screens
- Empty states with helpful CTAs
- Comprehensive error handling
- Accessible design with semantic HTML and ARIA labels
- Consistent footer across all pages

## Tech Stack

### Frontend

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Wouter** - Lightweight routing
- **TailwindCSS** - Styling and responsive design
- **Shadcn UI** - Component library
- **React Hook Form** - Form management
- **Zod** - Schema validation
- **TanStack Query (React Query)** - Data fetching and state management
- **Lucide React** - Icon library

### Data Storage

- **localStorage** - Browser-based data persistence
- **TypeScript** - Type safety
- **Zod** - Data validation
- **bcryptjs** - Password hashing

### Build Tools

- **Vite** - Build tool and dev server
- **TypeScript** - Type checking

## Installation & Setup

### Prerequisites

- Node.js 20 or higher
- npm or yarn
- Modern web browser with localStorage support

### Installation Steps

1. **Install Dependencies**

   ```bash
   npm install
   ```

2. **Start the Development Server**

   ```bash
   npm run dev
   ```

3. **Access the Application**
   Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

## Project Structure

```
├── src/                    # Application source
│   ├── components/         # Reusable UI components
│   │   ├── ui/            # Shadcn UI components
│   │   ├── footer.tsx     # Footer component
│   │   └── protected-route.tsx
│   ├── lib/               # Utilities and helpers
│   │   ├── auth.tsx       # Authentication context
│   │   ├── storage.ts     # localStorage operations
│   │   └── queryClient.ts # Query management
│   ├── pages/             # Page components
│   │   ├── landing.tsx
│   │   ├── login.tsx
│   │   ├── signup.tsx
│   │   ├── dashboard.tsx
│   │   └── tickets.tsx
│   ├── App.tsx            # Main application component
│   └── index.css          # Global styles
├── shared/                # Shared code and types
│   └── schema.ts         # Data models and validation
├── public/               # Static assets
└── README.md

```

## Application Flow

### 1. User Journey

1. **Landing Page** (`/`) - Users land on a welcoming page with CTAs
2. **Sign Up** (`/auth/signup`) - New users create an account
3. **Login** (`/auth/login`) - Existing users authenticate
4. **Dashboard** (`/dashboard`) - Protected route showing ticket statistics
5. **Ticket Management** (`/tickets`) - Protected route for CRUD operations

### 2. Authentication Flow

- Users sign up or log in with username and password
- Server validates credentials and returns a session token
- Token is stored in localStorage under key `ticketapp_session`
- Token is sent with all API requests via Authorization header
- Protected routes check for valid session, redirect to login if unauthorized

### 3. Data Flow

```
User Action → React Component → React Query → API Request
                                                    ↓
User Feedback ← React Component ← React Query ← API Response
```

## State Management

### Frontend State

- **Authentication**: Managed by AuthContext (React Context API)
- **Server State**: Managed by TanStack Query
  - Automatic caching
  - Optimistic updates
  - Cache invalidation on mutations
- **Form State**: Managed by React Hook Form with Zod validation

### Backend State

- **In-Memory Storage**: MemStorage class
  - Users stored in Map<string, User>
  - Tickets stored in Map<string, Ticket>
  - Fast access and modification
  - Automatically generates UUIDs for new records

## API Endpoints

### Authentication

- `POST /api/auth/signup` - Create new user account
- `POST /api/auth/login` - Authenticate user

### Tickets (Protected)

- `GET /api/tickets` - Get all tickets for authenticated user
- `POST /api/tickets` - Create new ticket
- `PATCH /api/tickets/:id` - Update existing ticket
- `DELETE /api/tickets/:id` - Delete ticket

## UI Components

### Core Components

- **Landing Page**: Hero with wavy SVG, feature cards, benefits section, CTA
- **Auth Forms**: Centered cards with validation, inline errors, submit buttons
- **Dashboard**: Stats grid with icons, quick action buttons
- **Ticket Cards**: Color-coded borders, status badges, edit/delete actions
- **Dialogs**: Create/Edit ticket modals with form validation
- **Footer**: Consistent across all pages with links and social icons

### Design System

- **Colors**: Primary (blue), Success (green), Warning (amber), Error (red)
- **Typography**: Open Sans for body, clear hierarchy
- **Spacing**: Consistent padding and margins (p-6, p-8, gap-6, gap-8)
- **Shadows**: Subtle elevation (shadow-md, shadow-lg, shadow-xl)
- **Borders**: Rounded corners (rounded-lg, rounded-xl)
- **Responsive**: Mobile-first with breakpoints at 768px, 1024px

## Form Validation

### Ticket Validation Rules

- **Title**: Required, must not be empty
- **Status**: Required, must be one of: "open", "in_progress", "closed"
- **Description**: Optional
- **Priority**: Optional, must be one of: "low", "medium", "high"

### User Validation Rules

- **Username**: Required, minimum 3 characters
- **Password**: Required, minimum 6 characters
- **Confirm Password**: Must match password (signup only)

## Error Handling

### Client-Side Errors

- Form validation errors displayed inline beneath fields
- Network errors shown via toast notifications
- Unauthorized access redirects to login page
- 404 errors show "Not Found" page

### Server-Side Errors

- 400: Bad Request (validation errors)
- 401: Unauthorized (invalid/missing token)
- 403: Forbidden (not authorized for this resource)
- 404: Not Found (resource doesn't exist)
- 500: Internal Server Error

## Accessibility Features

- Semantic HTML5 elements (header, nav, main, footer, section)
- ARIA labels for icon-only buttons
- Keyboard navigation support
- Visible focus states on interactive elements
- Sufficient color contrast (WCAG AA compliance)
- Alt text for decorative SVG elements
- Form labels properly associated with inputs

## Responsive Design

### Breakpoints

- **Mobile**: < 768px
  - Single column layouts
  - Stacked navigation
  - Full-width cards
- **Tablet**: 768px - 1024px
  - 2-column grids
  - Horizontal navigation
- **Desktop**: > 1024px
  - 3-column grids for features
  - 4-column stats dashboard
  - Full multi-column layouts

### Container System

- Max-width: 1440px
- Horizontal centering: mx-auto
- Responsive padding: px-6 (mobile) to px-12 (desktop)

## Known Issues & Limitations

1. **Browser Storage**: Data is limited by browser's localStorage capacity (typically 5-10 MB)
2. **Single Device**: Data is stored locally and not synced across devices
3. **Browser Support**: Requires modern browsers with localStorage support
4. **No Offline Sync**: Changes made offline in different browsers won't sync
5. **File Attachments**: Ticket attachments are not supported due to storage limitations

## Future Enhancements

- IndexedDB support for larger storage capacity
- Export/Import functionality for data backup
- Offline mode with service workers
- Advanced filtering and search
- Ticket comments and activity history
- Priority-based sorting
- Due dates tracking
- Export functionality (CSV, PDF)
- Dark mode support
- Browser sync using IndexedDB and service workers

## Development Notes

- The application uses a schema-first development approach
- All data models are defined in `shared/schema.ts` for type safety
- Frontend and backend share the same TypeScript types
- React Query handles all server state management
- Form validation uses Zod schemas derived from database models
- The app follows a horizontal batching development methodology

## Contributing

This is a demonstration project. For production use, please implement:

- Proper password hashing (bcrypt)
- Database persistence (PostgreSQL)
- Environment variable management
- Rate limiting
- CSRF protection
- Input sanitization
- Comprehensive error logging

## License

MIT License - feel free to use this project for learning and development purposes.

---

Built with ❤️ using modern web technologies
