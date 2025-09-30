import { Controller, Get, Param } from '@nestjs/common';
import { Course } from '@repo/database';
import { CoursesService } from './courses.service';

@Controller('courses')
export class CoursesController {
    constructor(private readonly coursesService: CoursesService) {}

    @Get("/:id")
    async findCourse(@Param('id') id: string): Promise<Course>{
        return this.coursesService.findCourse({id: id})
    }

    @Get()
    async findAllCourse(): Promise<Course[]> {
        return this.coursesService.findAllCourses({});
    }
    
}