// Import our app, config and types
import { Application as App, send } from 'https://deno.land/x/oak/mod.ts';
import { listen } from './app.ts';
import { join } from 'https://deno.land/std@0.96.0/path/mod.ts';

// Declare our app
const app: App = new App();

// Export the main function
export function main(port: string | number = 3000): void {
    // Convert the port to number
    port = Number(port);
    
    // Our app main handler
    app.use((ctx) => {
        return send(ctx, ctx.request.url.pathname, {
            root: join(Deno.cwd(), '/public'),
            index: 'home/home.html'
        });
    })

    // Listen the pport andhost
    listen(app, port, () => {
        return console.log(
            '[%c%s%c]: %s:%d',
            'color:#00af00',
            'Info',
            'color:white',
            'Running on http://localhost',
            port
        );
    });
}