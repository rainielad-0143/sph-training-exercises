import { prisma } from "../lib/prisma";

async function main() {
  const user1 = await prisma.user.create({
    data: {
      name: "Alice",
      email: "alice@example.com",
      posts: {
        create: [
          {
            title: "Alice Post 1",
            content: "Hello from Alice",
            published: true,
          },
          {
            title: "Alice Post 2",
            content: "Another post by Alice",
            published: false,
          },
        ],
      },
    },
    include: { posts: true },
  });

  const user2 = await prisma.user.create({
    data: {
      name: "Jinhyuk",
      email: "Jinhyuk@example.com",
      posts: {
        create: [
          {
            title: "Jinhyuk Post 1",
            content: "Jinhyuk's first post",
            published: true,
          },
          {
            title: "Jinhyuk Post 2",
            content: "Jinhyuk again",
            published: false,
          },
        ],
      },
    },
    include: { posts: true },
  });

  const user3 = await prisma.user.create({
    data: {
      name: "Teresa",
      email: "Teresa@example.com",
      posts: {
        create: [
          {
            title: "Teresa Post 1",
            content: "Teresa here",
            published: true,
          },
        ],
      },
    },
    include: { posts: true },
  });

  console.log("✅ Seed completed");
  console.log({ user1, user2, user3 });
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
