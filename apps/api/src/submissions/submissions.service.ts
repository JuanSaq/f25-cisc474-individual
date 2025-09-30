import { Injectable } from "@nestjs/common";
import { Submission, Prisma } from "@repo/database"
import { PrismaService } from "../prisma.service";

@Injectable()
export class SubmissionsService {
    constructor(private readonly prisma: PrismaService) {}

    
    async findSubmission(
    submissionWhereUniqueInput: Prisma.SubmissionWhereUniqueInput,
  ): Promise<Submission | null> {
    return this.prisma.submission.findUnique({
      where: submissionWhereUniqueInput,
    });
  }

  async findAllSubmissions(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.SubmissionWhereUniqueInput;
    where?: Prisma.SubmissionWhereInput;
    orderBy?: Prisma.SubmissionOrderByWithRelationInput;
  }): Promise<Submission[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.submission.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }
}