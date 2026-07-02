import { Elysia } from "elysia";
import { node } from "@elysiajs/node";
import { openapi } from "@elysia/openapi";

new Elysia({ adapter: node() })
    .use(openapi({
        provider: "scalar",
        documentation: {
            info: {
                title: "API Documentation",
                version: "0.1.0",
                description: "OpenAPI Generated Documentation"
            }
        }
    }))
    .get("/", () => {
        return {
            statusCode: 200,
            statusMessage: "OK"
        }
    })
    .listen(3000, ({ hostname, port }) => console.log(`Running ➟ ${hostname}:${port}`));