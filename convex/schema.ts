import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  posts: defineTable({
    title: v.string(),
    description: v.string(),
    imageId: v.id("_storage"),
    }),
})