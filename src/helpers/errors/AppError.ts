class AppError extends Error {
    constructor(public statusCode: number, public message: string) {
        super();
    }
}
export { AppError };
