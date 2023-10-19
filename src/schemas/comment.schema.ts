import { z } from "zod";

export const commentSchema = z.object({
  id: z.number(),
  user_id: z.number(),
  music_id: z.number(),
  description: z.string(),
  created_at: z.date(),
  edited: z.boolean(),
});

export const commentSchemaResponse = commentSchema
  .extend({
    user: z.object({
      id: z.number(),
      name: z.string(),
      user_color: z.string(),
    }),
  })
  .omit({
    user_id: true,
  });

export const commentSchemaRequest = commentSchema.omit({
  id: true,
});

export const manyCommentSchemaResponse = z.array(commentSchema);

export const commentSchemaUpdate = commentSchemaRequest;
