# Project Architecture

## Technologies

- **Atomic Design** - For component organization and reusability
- **Shadcn UI** - For beautiful, accessible, and customizable components
  - Built on top of Radix UI primitives
  - Styled with Tailwind CSS
  - Dark mode support
  - Fully customizable and themeable
- **React Query (TanStack Query)** - For efficient data fetching and caching
  - Automatic background refetching
  - Request deduplication
  - Caching and invalidation
  - Optimistic updates
  - Error handling

## Directory Structure

```
src/
├── app/                 # Application initialization, routing, store, providers
│   └── providers/       # Global providers (QueryProvider, etc.)
├── pages/              # Page components
├── widgets/            # Complex UI components composed of entities and features
├── features/           # User interactions, actions, and processes
├── entities/           # Business entities and their logic
└── shared/             # Reusable modules, helpers, and UI components
    ├── api/            # API-related utilities and hooks
    └── ui/             # UI components following Atomic Design
        ├── atoms/      # Basic building blocks (buttons, inputs, etc.)
        ├── molecules/  # Groups of atoms working together
        └── organisms/  # Complex UI components composed of molecules
```

## Architecture Guidelines

### Feature Sliced Architecture (FSA)

1. **app/** - Application-wide configurations and providers

   - App initialization
   - Routing configuration
   - Global state management
   - Theme providers
   - React Query provider

2. **pages/** - Page components

   - Each page represents a route
   - Composed of widgets and features
   - No business logic, only composition

3. **widgets/** - Complex UI components

   - Composed of entities and features
   - Can be used across multiple pages
   - May contain some business logic

4. **features/** - User interactions and processes

   - User actions
   - Business processes
   - Feature-specific logic
   - Data fetching with React Query

5. **entities/** - Business entities
   - Data models
   - Entity-specific logic
   - API interactions

### Atomic Design with Shadcn UI

1. **atoms/** - Basic building blocks

   - Buttons (using Shadcn UI Button)
   - Inputs (using Shadcn UI Input)
   - Labels (using Shadcn UI Label)
   - Icons (using Lucide icons)

2. **molecules/** - Groups of atoms

   - Search forms
   - Navigation menus
   - Cards (using Shadcn UI Card)

3. **organisms/** - Complex UI components
   - Headers
   - Sidebars
   - Content sections

## Best Practices

1. **Dependencies Flow**

   - Higher layers can import from lower layers
   - Lower layers cannot import from higher layers
   - Shared layer can be imported by any layer

2. **Component Organization**

   - Keep components small and focused
   - Use clear naming conventions
   - Document component props and usage
   - Use Shadcn UI components when available
   - Customize Shadcn UI components using Tailwind CSS

3. **Data Fetching**

   - Use React Query for all data fetching
   - Implement proper error handling
   - Use optimistic updates when appropriate
   - Cache data at the appropriate level
   - Implement proper loading states
   - Use the shared `useApi` hook for consistency

4. **Code Splitting**

   - Split code by features
   - Use lazy loading for routes
   - Optimize bundle size

5. **State Management**

   - Use React Query for server state
   - Use local state for UI state
   - Use global state for shared data
   - Keep state as close to usage as possible

6. **Styling**
   - Use Tailwind CSS for custom styling
   - Follow Shadcn UI design patterns
   - Maintain consistent spacing and colors
   - Use CSS variables for theming
