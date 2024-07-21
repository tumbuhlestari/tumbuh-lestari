import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';

export async function getPost(id) {
  const response = await fetch(`${process.env.API_URL}/posts/${id}`, {
    cache: 'no-store',
  });
  const post = await response.json();

  return post;
}

export default async function Page({ params }) {
  const post = await getPost(params.id);

  const createdAt = new Date(post.createdAt).toLocaleDateString('id-ID', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <main className='container mt-16 space-y-16 mb-64'>
      <div className='max-w-4xl mx-auto space-y-8'>
        <div className='space-y-4'>
          <h1 className='text-3xl md:text-6xl font-bold'>{post.title}</h1>
          <p className='text-base md:text-lg'>
            Tumbuh Lestari Admin | Ditulis pada {createdAt}
          </p>
        </div>
        <p className='text-lg md:text-xl whitespace-pre-line'>{post.content}</p>
      </div>
    </main>
  );
}
