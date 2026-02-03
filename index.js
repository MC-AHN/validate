import { serve } from "@hono/node-server";
import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
    return c.text("Validation Service is Running");
})

app.post("/register", async (c) => {
    // Get JSON body
    const body = await c.req.json()

    // cek required fields
    console.log("Data: ", body);

    return c.json({ message: "Registration data received", data: body });
})

const port = 8001;
console.log(`Starting validation service on port ${port}...`);

serve({ fetch: app.fetch, port });