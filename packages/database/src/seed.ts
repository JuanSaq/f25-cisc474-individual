import { PrismaClient } from "../generated/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();

const pronounOptions = ["he/him", "she/her", "they/them"];

async function main() {
  // Create some users with profiles
  const users = await Promise.all(
    Array.from({ length: 5 }).map(async () => {
      const user = await prisma.user.create({
        data: {
          email: faker.internet.email(),
          name: faker.person.fullName(),
          profile: {
            create: {
              bio: faker.lorem.sentence(),
              pronouns: faker.helpers.arrayElement(pronounOptions),
            },
          },
        },
      });
      return user;
    })
  );

  // Create some courses (each owned by a random user)
  const courses = await Promise.all(
    Array.from({ length: 3 }).map(async () => {
      const owner = faker.helpers.arrayElement(users);
      const course = await prisma.course.create({
        data: {
          title: faker.lorem.words({ min: 2, max: 4 }),
          ownerId: owner.id,
        },
      });
      return course;
    })
  );

  // Create assignments for each course
  const assignments = await Promise.all(
    courses.flatMap((course) =>
      Array.from({ length: 3 }).map(async () => {
        const assignment = await prisma.assignment.create({
          data: {
            title: faker.lorem.words({ min: 3, max: 6 }),
            description: faker.lorem.paragraph(),
            dueDate: faker.date.soon({ days: 14 }),
            courseId: course.id,
          },
        });
        return assignment;
      })
    )
  );

  // Create submissions (each assignment gets submissions from users)
  await Promise.all(
    assignments.flatMap((assignment) =>
      users.map(async (user) => {
        // 50% chance the user has submitted
        const submitted = faker.datatype.boolean();
        await prisma.submission.create({
          data: {
            assignmentId: assignment.id,
            ownerId: user.id,
            submittedAt: submitted ? faker.date.between({
              from: new Date(),
              to: assignment.dueDate ?? new Date(),
            }) : null,
          },
        });
      })
    )
  );

  console.log("✅ Database has been seeded");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });