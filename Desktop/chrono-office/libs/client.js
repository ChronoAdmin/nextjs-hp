import { createClient } from "microcms-js-sdk";

console.log("API Key:", process.env.NEXT_PUBLIC_API_KEY);


export const client = createClient({
  serviceDomain: "blog-nextjs-chrono",
  apiKey: "F0uxuvvP2kjmeZrUvvnWl0V0Nhif1EaU0Kop"
});

