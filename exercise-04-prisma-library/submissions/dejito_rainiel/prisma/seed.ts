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
      name: "Bob",
      email: "bob@example.com",
    },
  });

  const user3 = await prisma.user.create({
    data: {
      name: "Charlie",
      email: "charlie@example.com",
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
        title: "Bob Post 1",
        content: "Bob's first post",
        published: true,
        userId: user2.id,
      },
      {
        title: "Bob Post 2",
        content: "Bob again",
        published: false,
        userId: user2.id,
      },
      {
        title: "Charlie Post 1",
        content: "Charlie here",
        published: true,
        userId: user3.id,
      },
    ],
  });
  console.log("Seed completed successfully!");
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
