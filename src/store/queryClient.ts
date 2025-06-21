import { QueryClient } from '@tanstack/react-query';
// Create a client
const queryClient = new QueryClient();

export default queryClient;
// This file is used to create a react-query client instance.
// It is used to manage server state in React applications.
// The QueryClient instance is passed to the QueryClientProvider component,
// which makes it available to all components in the application.
