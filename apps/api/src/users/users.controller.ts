import { Controller, Get, Param } from '@nestjs/common';
import { User } from '@repo/database';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get("/:id")
    async findUser(@Param('id') id: string): Promise<User>{
        return this.usersService.findUser({id: id})
    }

    @Get()
    async findAllUser(): Promise<User[]> {
        return this.usersService.findAllUsers({});
    }
    
}