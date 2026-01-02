import { Elysia } from "elysia";
import { node } from "@elysiajs/node";

new Elysia({ adapter: node() })
	.get("/", () => {
        return {
            statusCode: 200,
            statusMessage: "OK"
        }
    })
	.listen(3000, ({ hostname, port }) => console.log(`Running ➟ ${hostname}:${port}`));