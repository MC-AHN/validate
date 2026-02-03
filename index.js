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

app.post("/register-basic", async (c) => {
    const body = await c.req.json()
    const name = body.name;
    const email = body.email;

    // Validation Manual
    // 1. Cek Data
    if (!name) {
        return c.json({ error: "Name is Required" }, 400);
    }

    // 2. Cek Mail
    if (!email) {
        return c.json({ error: "Email is Required" }, 400);
    }

    // 
    return c.json({ message: "Reqister Completed", data:body })
})

const port = 8001;
console.log(`Starting validation service on port ${port}...`);

serve({ fetch: app.fetch, port });