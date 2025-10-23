import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { Course } from '@repo/database';
import { CoursesService } from './courses.service';
import { CourseCreateIn, CourseUpdateIn } from '@repo/api/courses';

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
    
    @Post()
    createCourse(@Body() createCourseDto: CourseCreateIn){
        return this.coursesService.createCourse(createCourseDto);
    }

    @Patch("/:id")
    updateCourse(@Param('id') id: string, @Body() updateCourseDto: CourseUpdateIn){
        return this.coursesService.updateCourse(id, updateCourseDto);
    }

    @Delete("/:id")
    removeCourse(@Param('id') id: string){
        return this.coursesService.removeCourse(id);
    }
}