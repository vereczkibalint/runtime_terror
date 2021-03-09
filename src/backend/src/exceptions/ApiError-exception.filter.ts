import { ArgumentsHost, Catch, ExceptionFilter } from "@nestjs/common";
import { Response } from "express";
import ApiError from "./ApiError";

@Catch(ApiError)
export class ApiErrorExceptionFilter implements ExceptionFilter {
  catch(exception: ApiError, host: ArgumentsHost) {
    let ctx = host.switchToHttp();
    let response = ctx.getResponse<Response>();

    response.status(500).json({
      message: exception.message
    });
  }
}