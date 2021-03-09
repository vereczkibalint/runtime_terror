import { ArgumentsHost, Catch, ExceptionFilter } from "@nestjs/common";
import { Error } from "mongoose";
import { Response } from "express";

@Catch(Error.CastError)
export class CastErrorExceptionFilter implements ExceptionFilter {
  catch(exception: Error.CastError, host: ArgumentsHost) {
    let ctx = host.switchToHttp();
    let response = ctx.getResponse<Response>();

    response.status(500).json({
      message: "Hibás azonosító!"
    });
  }
}