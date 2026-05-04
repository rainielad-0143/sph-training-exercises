import { prisma } from "./lib/prisma";

async function main() {
  const [allPosts, publishedPosts, userPosts, usersWithPostCount] =
    await Promise.all([
      prisma.post.findMany({
        include: {
          author: true,
        },
      }),
      prisma.post.findMany({
        where: {
          published: true,
        },
      }),
      prisma.post.findMany({
        where: {
          author: {
            name: "Jinhyuk",
          },
        },
      }),
      prisma.user.findMany({
        include: {
          _count: {
            select: {
              posts: true,
            },
          },
        },
      }),
    ]);
  console.log("All Posts:", allPosts);
  console.log("Published Posts:", publishedPosts);
  console.log("User's Posts", userPosts);
  console.log("Posts per User", usersWithPostCount);
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
