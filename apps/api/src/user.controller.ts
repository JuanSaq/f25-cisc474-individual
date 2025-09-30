import { Controller, Get, Param } from '@nestjs/common';
import { User } from '@repo/database';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get("/:id")
    async findUser(@Param('id') id: string): Promise<User>{
        return this.userService.findUser({id: id})
    }

    @Get()
    async findAllUser(): Promise<User[]> {
        return this.userService.findAllUsers({});
    }
    
}