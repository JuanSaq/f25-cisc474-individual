import { Injectable } from "@nestjs/common";
import { User, Prisma } from "@repo/database"
import { PrismaService } from "../prisma.service";

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

    
  findUser(id: string) {
    return this.prisma.user.findFirst({ where: { id } });
  }

  findAllUsers() {
    return this.prisma.user.findMany();
  }
}