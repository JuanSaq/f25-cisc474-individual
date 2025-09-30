import { Controller, Get, Param } from '@nestjs/common';
import { Assignment } from '@repo/database';
import { AssignmentsService } from './assignments.service';

@Controller('assignments')
export class AssignmentsController {
    constructor(private readonly assignmentsService: AssignmentsService) {}

    @Get("/:id")
    async findAssignment(@Param('id') id: string): Promise<Assignment>{
        return this.assignmentsService.findAssignment({id: id})
    }

    @Get()
    async findAllAssignment(): Promise<Assignment[]> {
        return this.assignmentsService.findAllAssignments({});
    }
    
}