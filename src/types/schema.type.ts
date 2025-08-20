import z from "zod";

export type SchemaType<T> = z.ZodType<T, unknown, any>