import { prisma } from "../lib/prisma";

async function main() {
  const user1 = await prisma.user.create({
    data: {
      name: "Alice",
      email: "alice@example.com",
    },
  });

  const user2 = await prisma.user.create({
    data: {
      name: "Jinhyuk",
      email: "jinhyuk@example.com",
    },
  });

  const user3 = await prisma.user.create({
    data: {
      name: "Teresa",
      email: "teresa@example.com",
    },
  });

  await prisma.post.createMany({
    data: [
      {
        title: "Alice Post 1",
        content: "Hello from Alice",
        published: true,
        userId: user1.id,
      },
      {
        title: "Alice Post 2",
        content: "Another post by Alice",
        published: false,
        userId: user1.id,
      },
      {
        title: "Jinhyuk Post 1",
        content: "Jinhyuk's first post",
        published: true,
        userId: user2.id,
      },
      {
        title: "Jinhyuk Post 2",
        content: "Jinhyuk again",
        published: false,
        userId: user2.id,
      },
      {
        title: "Teresa Post 1",
        content: "Teresa here",
        published: true,
        userId: user3.id,
      },
    ],
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
