import { serverFetch } from "@/lib/server-fetch";

export const analyticsData = async()=> {
    const res = await serverFetch.get("/admin/analytics")

console.log("hello analytics", res)
  const result = await res.json()
  return result
}