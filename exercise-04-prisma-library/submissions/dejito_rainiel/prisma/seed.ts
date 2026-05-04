import { prisma } from "../lib/prisma";

async function main() {
  const users = await prisma.user.createManyAndReturn({
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

  const categories = await prisma.category.createManyAndReturn({
    data: [
      {
        name: "Tech",
      },
      {
        name: "Food",
      },
      {
        name: "Travel",
      },
    ],
  });

  await prisma.post.createMany({
    data: [
      {
        title: "Alice Post 1",
        content: "Hello from Alice",
        published: true,
        userId: users[0].id,
        categoryId: categories[0].id,
      },
      {
        title: "Alice Post 2",
        content: "Another post by Alice",
        published: false,
        userId: users[0].id,
        categoryId: categories[1].id,
      },
      {
        title: "Jinhyuk Post 1",
        content: "Jinhyuk's first post",
        published: true,
        userId: users[1].id,
        categoryId: categories[1].id,
      },
      {
        title: "Jinhyuk Post 2",
        content: "Jinhyuk again",
        published: false,
        userId: users[1].id,
        categoryId: categories[0].id,
      },
      {
        title: "Teresa Post 1",
        content: "Teresa here",
        published: true,
        userId: users[2].id,
        categoryId: categories[2].id,
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
