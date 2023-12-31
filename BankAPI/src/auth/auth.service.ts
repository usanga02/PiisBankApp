import { ForbiddenException, Injectable, NotFoundException } from "@nestjs/common";
import { User, Transaction, Account, Prisma } from "@prisma/client";
import { PrismaService } from "../prisma/prisma.service";
import { AuthDto } from "./dto";
import { AuthDto1 } from "./dto/auth1.dto";
import * as argon from 'argon2';
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
import { JwtService } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";
import { Session } from "express-session";


@Injectable()
export class AuthService{
    constructor(
        private prisma: PrismaService, 
        private jwt: JwtService,
        private config: ConfigService
        ) {}

    async signup(dto: AuthDto) {
        // generate the password hash
        const hash = await argon.hash(dto.password)

        // save the new user in the db
        try {
            const user = await this.prisma.user.create({
                data: {
                    email: dto.email,
                    phoneNumber: dto.phoneNumber,
                    address: dto.address,
                    hash,
                },
            });
            return this.signToken(user.id, user.email);
        } catch(error) {
            if (error instanceof PrismaClientKnownRequestError) {
                if (error.code === 'P2002') {
                    throw new ForbiddenException(
                        'Credentials taken',
                    );
                }
            }
            throw error;
        }
    }


    async login(dto: AuthDto1) {

        // find user by email
        const user =  await this.prisma.user.findFirst({
            where: {
                email: dto.email,
                phoneNumber: dto.phoneNumber
            },
        });
        // if user does not exist throw exception
        if (!user)
            throw new ForbiddenException(
                'Credientials incorrect',
            );
        // compare password
        const pwmaches = await argon.verify(
            user.hash,
            dto.password,
        );
        // if password incorrect throw exception
        if (!pwmaches)
            throw new ForbiddenException(
                'Credientials incorrect'
            );
        return this.signToken(user.id, user.email);
    }

    async signToken(
        userId: number, 
        email: string
        ): Promise<{access_token: string}> {
            const payload = {
                sub: userId,
                email
            };

            const secret = this.config.get('JWT_SECRET')

            const token = await this.jwt.signAsync(
                payload, 
                {
                expiresIn: '15m',
                secret: secret,
            },)
            return {
                access_token: token,
            }
        }
       
        
        
        async logout(userId: number, session: Session) {
            try {
              session.destroy((error) => {
                if (error) {
                  throw new Error('Session could not be destroyed');
                }
              });
          
              await this.prisma.user.update({
                where: {
                  id: userId,
                  
                },
                data: {
                  signOut: true,
                } as Prisma.UserUpdateInput
              });
          
              return {
                message: 'Logout successful',
              };
          
            } catch (error) {
              throw new NotFoundException('Logout failed');
            }
          }
}