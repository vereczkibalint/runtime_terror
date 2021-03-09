import { Controller, UseFilters } from "@nestjs/common";
import { ValidationExceptionFilter } from "../exceptions/validation-exception.filter";

@Controller('users')
export class UsersController {}
