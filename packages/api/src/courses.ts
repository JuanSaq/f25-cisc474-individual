import { z } from 'zod'

export const CourseRef = z.object({
  id: z.uuid(),
  title: z.string(),
});
export type CourseRef = z.infer<typeof CourseRef>;

export const CourseOut = z.object({
  id: z.uuid(),
  title: z.string(),
  ownerId: z.uuid(),
  createdAt: z.iso.datetime(),
  updatedAt: z.iso.datetime()
})
export type CourseOut = z.infer<typeof CourseOut>;

export const CourseCreateIn = z.object({
  title: z.string().min(1),
  ownerId: z.uuid(),
});
export type CourseCreateIn = z.infer<typeof CourseCreateIn>;

export const CourseUpdateIn = z.object({
  name: z.string().min(1).optional(),
  description: z.string().optional().nullable(),
  ownerId: z.uuid().optional(),
});
export type CourseUpdateIn = z.infer<typeof CourseUpdateIn>;