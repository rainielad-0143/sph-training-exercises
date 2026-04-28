import { prisma } from "../lib/prisma";

async function main() {
  await prisma.user.createMany({
    data: [
      {
        name: "Alice",
        email: "alice@example.com",
      },
      {
        name: "Jinhyuk",
        email: "jinhyuk@example.com",
      },
      {
        name: "Teresa",
        email: "teresa@example.com",
      },
    ],
  });

  await prisma.post.createMany({
    data: [
      {
        title: "Alice Post 1",
        content: "Hello from Alice",
        published: true,
        userId: 1,
      },
      {
        title: "Alice Post 2",
        content: "Another post by Alice",
        published: false,
        userId: 1,
      },
      {
        title: "Jinhyuk Post 1",
        content: "Jinhyuk's first post",
        published: true,
        userId: 2,
      },
      {
        title: "Jinhyuk Post 2",
        content: "Jinhyuk again",
        published: false,
        userId: 2,
      },
      {
        title: "Teresa Post 1",
        content: "Teresa here",
        published: true,
        userId: 3,
      },
    ],
  });

  console.log("✅ Seed completed");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
