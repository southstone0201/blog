import { IsString, IsNotEmpty, IsEmail, MaxLength, MinLength, Matches, IsOptional, min, Max } from 'class-validator'

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    @MaxLength(96)
    @MinLength(3)
    firstname: string;

    @IsString()
    @IsOptional()
    @MaxLength(96)
    @MinLength(3)
    lastname: string;

    @IsEmail()
    @IsNotEmpty()
    @MaxLength(96)
    email: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(8)
    @MaxLength(96)
    @Matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, {
        message: 'Password must contain at least 8 characters, 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character'
    })
    password: string;
}