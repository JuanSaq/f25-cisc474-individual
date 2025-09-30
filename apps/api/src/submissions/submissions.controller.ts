import { Controller, Get, Param } from '@nestjs/common';
import { Submission } from '@repo/database';
import { SubmissionsService } from './submissions.service';

@Controller('submissions')
export class SubmissionsController {
    constructor(private readonly submissionsService: SubmissionsService) {}

    @Get("/:id")
    async findSubmission(@Param('id') id: string): Promise<Submission>{
        return this.submissionsService.findSubmission({id: id})
    }

    @Get()
    async findAllSubmission(): Promise<Submission[]> {
        return this.submissionsService.findAllSubmissions({});
    }
    
}