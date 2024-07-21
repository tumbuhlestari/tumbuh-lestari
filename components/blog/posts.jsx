import BlogCard from './blog-card';

async function fetchBlogPosts() {
  const response = await fetch(`${process.env.API_URL}/posts`, {
    cache: 'no-store',
  });
  const data = await response.json();
  return data;
}

export default async function Posts() {
  const posts = await fetchBlogPosts();

  return (
    <div className='grid md:grid-cols-3 gap-8 py-16'>
      {posts.map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  );
}
