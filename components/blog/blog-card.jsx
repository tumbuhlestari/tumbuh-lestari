import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";

export default function BlogCard({ post }) {
  const createdAt = new Date(post.createdAt).toLocaleDateString("id-ID", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  console.log(post);
  return (
    <Card className="border-2 border-foreground hover:shadow-lg flex flex-col justify-between">
      <CardHeader className="space-y-8">
        <div className="space-y-4">
          <CardTitle className="font-bold text-2xl">{post.title}</CardTitle>
          <div>
            <Image
              width={1024}
              height={1024}
              className="relative w-full rounded-xl"
              alt=""
              src={post.imageUrl}
            />
          </div>
          <CardDescription className="text-white whitespace-pre-line line-clamp-3 text-lg">
            {post.content}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center">
          <div>
            <p>oleh Admin</p>
            <p>{createdAt}</p>
          </div>
          <Link
            href={`/blog/${post.id}`}
            className={buttonVariants({ variant: "default" })}
          >
            Lihat Selengkapnya
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
