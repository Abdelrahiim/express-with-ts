# Project TS-Express-Decorator

This project demonstrates a simple Express server built with TypeScript and utilizing decorators for route management.

## Prerequisites:

- Node.js
- yarn (optional)

## Installation:

### Using npm

```bash
npm install
```

### Running the server:

```bash
npm run dev
```

This will start the server on port 3000 by default.

### Project Structure:

- app.ts: Entry point for the application. Initializes Express and loads controllers.
- controllers: Directory containing controller files.
- routes: (Optional) Directory for manually defining routes.
- types: (Optional) Directory for type definitions.
- utils: (Optional) Utility functions.

### Decorators:

This project utilizes the express-ts-decorators package, which provides several decorators for defining routes and handling requests:

- @Controller: Marks a class as a controller.
- @Get, @Post, @Put, @Delete: Decorates methods to define routes for specific HTTP methods.
- @Use: Defines middleware for a route or controller.
- @Validator: Validates request body with Joi.
- @Path: Specifies the base path for a controller.

### Example Usage:

TypeScript

```typescript
// controllers/hello.ts

import { Controller, Get } from "express-ts-decorators";

@Controller("/api/hello")
export class HelloController {
  @Get("")
  public hello() {
    return "Hello World!";
  }
}
```

This example defines a controller class HelloController with a route for the /api/hello path. The @Get decorator defines a route for the HTTP GET method.

### Extending and Customizing:

You can extend the functionality of the project by:

- Adding more controllers and routes.
- Implementing custom middleware for specific needs.
- Using libraries like Joi for data validation.
- Creating separate directories for types and utilities.

### Contributing:

Feel free to contribute to this project by submitting pull requests with improvements or new features.
