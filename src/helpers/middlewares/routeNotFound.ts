import { Request, Response, NextFunction } from 'express';

const routeNotFound = (
    _request: Request,
    response: Response,
    _next: NextFunction,
): Response => {
    return response.status(404).json({
        status: 'not found',
        message: 'Rota não encontrada!',
    });
};

export default routeNotFound;
