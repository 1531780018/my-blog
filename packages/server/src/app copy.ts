import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // const allUser = await prisma.user.findMany();
  await insterUser("测试用户2", "test1@test.com")
  const result = await prisma.user.findMany({
    include: {
      posts: true,
      profile: true,
    },
  })
  console.dir(result, { depth: null })
}

async function insterUser(name: string, email: string) {
  await prisma.user.create({
    data: {
      name: name,
      email: email
    }
  })
}


main().catch((e) => {
  throw e
}).finally(async () => {
  await prisma.$disconnect();
})