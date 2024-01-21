
# Next.js Passwordless Authentication with Clerk

## Overview

This repository demonstrates how to implement passwordless authentication in a Next.js project using [Clerk](https://clerk.dev/).

[Clerk](https://clerk.dev/) is a powerful authentication and user management solution that simplifies the process of adding authentication to your web applications.

## Prerequisites

Before you start, ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## Setup

1. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

2. Create a Clerk account and set up your Clerk project. Retrieve your API Key and Clerk Frontend API URL.

3. Create a `.env.local` file in the root of your project and add your Clerk configuration:

   ```env
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your-public-clerk-publishable-key
   CLERK_SECRET_KEY=sk_test_*********************************
   ```

4. Update `clerkSettings.js` with your Clerk project URL.

5. Run the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. Open your browser and visit [http://localhost:3000](http://localhost:3000).

## Usage

- Visit the home page to see the passwordless authentication in action.

- Click on the "Log In" or "Sign Up" buttons to initiate the authentication flow.

- Check your email for the magic link and follow the instructions to authenticate.

## Additional Resources

- [Clerk Documentation](https://docs.clerk.dev/): Refer to the official Clerk documentation for in-depth guides and features.

