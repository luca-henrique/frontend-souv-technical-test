# Project Architecture

This project follows Feature Sliced Architecture (FSA) combined with Atomic Design principles.

## Directory Structure

```
src/
├── app/                 # Application initialization, routing, store, providers
├── pages/              # Page components
├── widgets/            # Complex UI components composed of entities and features
├── features/           # User interactions, actions, and processes
├── entities/           # Business entities and their logic
└── shared/             # Reusable modules, helpers, and UI components
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

5. **entities/** - Business entities
   - Data models
   - Entity-specific logic
   - API interactions

### Atomic Design

1. **atoms/** - Basic building blocks

   - Buttons
   - Inputs
   - Labels
   - Icons

2. **molecules/** - Groups of atoms

   - Search forms
   - Navigation menus
   - Cards

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

3. **Code Splitting**

   - Split code by features
   - Use lazy loading for routes
   - Optimize bundle size

4. **State Management**
   - Use local state for UI state
   - Use global state for shared data
   - Keep state as close to usage as possible
