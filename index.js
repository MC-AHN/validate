import { serve } from "@hono/node-server";
import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
    return c.text("Validation Service is Running");
})

const port = 8001;
console.log(`Starting validation service on port ${port}...`);

serve({ fetch: app.fetch, port });