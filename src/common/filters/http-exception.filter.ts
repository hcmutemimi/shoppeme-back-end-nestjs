import { ArgumentsHost, ExceptionFilter } from "@nestjs/common";
import { ERROR_MESSAGES } from "@/common/consts";

export class HttpExceptionFilter implements ExceptionFilter {
    catch(exception: any, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();

        const status = exception.getStatus ? exception.getStatus() : 500;

        const responseBody = {
            statusCode: status,
            timestamp: new Date().toISOString(),
            path: request.url,
            message: exception.message || ERROR_MESSAGES.INTERNAL_SERVER_ERROR,
        };

        response.status(status).json(responseBody);
    }
}