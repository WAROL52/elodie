import { Prisma } from "@prisma/client";

// 1: Define a type that includes the relation to `Post`
const userWithPosts = Prisma.validator<Prisma.UsersArgs>()({
  include: { email: true },
});

// 3: This type will include a user and all their posts
type UserWithPosts = Prisma.UsersGetPayload<typeof userWithPosts>;
