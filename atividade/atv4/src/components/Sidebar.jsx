export function Sidebar({ relatedPosts }) {
  return (
    <aside className="sidebar">
      <section className="widget">
        <h4>Posts Relacionados</h4>
        <ul className="related-list">
          {relatedPosts.map((post) => (
            <li key={post.id}>
              <a href={post.url}>{post.title}</a>
            </li>
          ))}
        </ul>
      </section>
    </aside>
  );
}