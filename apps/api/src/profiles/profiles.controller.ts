import { Controller, Get, Param } from '@nestjs/common';
import { Profile } from '@repo/database';
import { ProfilesService } from './profiles.service';

@Controller('profiles')
export class ProfilesController {
    constructor(private readonly profilesService: ProfilesService) {}

    @Get("/:id")
    async findProfile(@Param('id') id: string): Promise<Profile>{
        return this.profilesService.findProfile({id: id})
    }

    @Get()
    async findAllProfile(): Promise<Profile[]> {
        return this.profilesService.findAllProfiles({});
    }
    
}