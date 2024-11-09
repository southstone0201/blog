import { ApiPropertyOptional } from "@nestjs/swagger";
import {IsOptional, IsString} from "class-validator";

export class GetUsersParamDto {
    @ApiPropertyOptional({
        description: 'User ID',
        example: '1234',
    })
    @IsOptional()
    @IsString()
    id?: string;
}