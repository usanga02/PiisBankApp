import { IsEmail, isNotEmpty, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class AuthDto1 {
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    password: string;

    
}