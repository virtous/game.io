// Import the main function
import { main } from './src/main.ts';

// Run the function
main(Deno.env.get('PORT') as string);