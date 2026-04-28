import { prisma } from "./lib/prisma";

async function main() {
  const allPosts = await prisma.post.findMany({
    include: {
      author: true,
    },
  });
  console.log("All Posts:", allPosts);

  const publishedPosts = await prisma.post.findMany({
    where: {
      published: true,
    },
  });
  console.log("Published Posts:", publishedPosts);

  const userPosts = await prisma.post.findMany({
    where: {
      author: {
        name: "Jinhyuk",
      },
    },
  });
  console.log("User's Posts", userPosts);

  const countPosts = await prisma.user.findMany({
    include: {
      _count: {
        select: { posts: true },
      },
    },
  });
  console.log("Posts per User", countPosts);
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
