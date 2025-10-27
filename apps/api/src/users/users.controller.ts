import { Controller, Get, Param, UnauthorizedException, UseGuards } from '@nestjs/common';
import { User } from '@repo/database';
import { UsersService } from './users.service';
import { AuthGuard } from '@nestjs/passport';
import { CurrentUser } from 'src/authentication/auth/current-user.decorator';
import { JwtUser } from 'src/authentication/auth/jwt.strategy';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}


    @UseGuards(AuthGuard('jwt'))
    @Get('/me')
    async me(@CurrentUser() auth: JwtUser) {
        if (!auth || !auth.userId) {
        throw new UnauthorizedException();
        }
        const user = await this.usersService.findUser(auth.userId);
        if (!user) {
        throw new Error('User not found');
        }
        // Return only what your client needs (include the DB id!)
        return {
        id: user.id,
        name: user.name,
        email: user.email,
        };
  }

    @Get("/:id")
    async findUser(@Param('id') id: string) {
        console.log("got the user ok ok");
        console.log(id);
        return this.usersService.findUser(id)
    }

    @Get()
    async findAllUser() {
        return this.usersService.findAllUsers();
    }

    
}