export type ActionRes<T> = {
    success: false,
    error: string,
} | {
    success: true,
    data: T,
}