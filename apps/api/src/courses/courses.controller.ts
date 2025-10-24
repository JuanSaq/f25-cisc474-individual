import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { Course } from '@repo/database';
import { CoursesService } from './courses.service';
import { CourseCreateIn, CourseUpdateIn } from '@repo/api/courses';
import { AuthGuard } from '@nestjs/passport';
import { CurrentUser } from 'src/authentication/auth/current-user.decorator';
import { JwtUser } from 'src/authentication/auth/jwt.strategy';

@Controller('courses')
export class CoursesController {
    constructor(private readonly coursesService: CoursesService) {}

    @UseGuards(AuthGuard('jwt'))
    @Get("/:id")
    async findCourse(@Param('id') id: string): Promise<Course>{
        return this.coursesService.findCourse({id: id})
    }

    @UseGuards(AuthGuard('jwt'))
    @Get()
    async findAllCourse(@CurrentUser() user: JwtUser): Promise<Course[]> {
        return this.coursesService.findAllCourses({});
    }
    
    @UseGuards(AuthGuard('jwt'))
    @Post()
    createCourse(@Body() createCourseDto: CourseCreateIn){
        return this.coursesService.createCourse(createCourseDto);
    }

    @UseGuards(AuthGuard('jwt'))
    @Patch("/:id")
    updateCourse(@Param('id') id: string, @Body() updateCourseDto: CourseUpdateIn){
        return this.coursesService.updateCourse(id, updateCourseDto);
    }

    @UseGuards(AuthGuard('jwt'))
    @Delete("/:id")
    removeCourse(@Param('id') id: string){
        return this.coursesService.removeCourse(id);
    }
}