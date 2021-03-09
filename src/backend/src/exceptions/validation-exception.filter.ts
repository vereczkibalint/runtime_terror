import { ArgumentsHost, Catch, ExceptionFilter } from "@nestjs/common";
import { Error } from "mongoose";
import { Response } from "express";

@Catch(Error.ValidationError)
export class ValidationExceptionFilter implements ExceptionFilter {
  catch(exception: Error.ValidationError, host: ArgumentsHost) {
    let ctx = host.switchToHttp();
    let response = ctx.getResponse<Response>();
    let errors = [];

    // @ts-ignore
    Object.values(exception.errors).forEach(({ properties }) => {
      errors.push({
        path: properties.path,
        message: properties.message
      });
    });

    response.status(400).json({ errors });
  }
}