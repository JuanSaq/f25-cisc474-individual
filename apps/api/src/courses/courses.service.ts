import { Injectable } from "@nestjs/common";
import { Course, Prisma } from "@repo/database"
import { CourseCreateIn, CourseUpdateIn, CourseOut } from "@repo/api/courses"
import { PrismaService } from "../prisma.service";

@Injectable()
export class CoursesService {
    constructor(private readonly prisma: PrismaService) {}

    
    async findCourse(
    courseWhereUniqueInput: Prisma.CourseWhereUniqueInput,
  ): Promise<Course | null> {
    return this.prisma.course.findUnique({
      where: courseWhereUniqueInput,
    });
  }

  async findAllCourses(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.CourseWhereUniqueInput;
    where?: Prisma.CourseWhereInput;
    orderBy?: Prisma.CourseOrderByWithRelationInput;
  }): Promise<Course[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.course.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createCourse(createCourseDto: CourseCreateIn): Promise<CourseOut>{
    const newCourse = await this.prisma.course.create({
      data: createCourseDto,
    });
    return {
      title: newCourse.title,
      ownerId: newCourse.ownerId,
      id: newCourse.id,
      createdAt: newCourse.createdAt.toString(),
      updatedAt: newCourse.updatedAt.toString(),
    };
  }

  updateCourse(id: string, updateCourseDto: CourseUpdateIn) {
    return this.prisma.course.update({
      where: { id },
      data: updateCourseDto,
    });
  }

  removeCourse(id: string) {
    return this.prisma.course.delete({
      where: { id },
    });
  }
}