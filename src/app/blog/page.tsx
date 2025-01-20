// src/app/blog/page.tsx
export default function BlogPage() {
  const posts = [
    { id: 1, title: "Post One", excerpt: "This is the first post." },
    { id: 2, title: "Post Two", excerpt: "This is the second post." },
    { id: 3, title: "Post Three", excerpt: "This is the third post." },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Blog</h2>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.id} className="border p-4 rounded hover:shadow-md">
            <h3 className="text-2xl font-semibold">{post.title}</h3>
            <p>{post.excerpt}</p>
            {/* In the future, wrap the post title or a "Read More" link with a <Link> to a dynamic blog detail page */}
          </li>
        ))}
      </ul>
    </div>
  );
}
