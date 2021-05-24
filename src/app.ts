// Import our application type
import { Application } from 'https://deno.land/x/oak/mod.ts';


// Export the listen function
export function listen(app: Application, port: number, callback?: (() => void)): void {
    // Listen to the port
    app.listen({ port })

    // Run the callback function (if any)
    callback?.();
    return;
}