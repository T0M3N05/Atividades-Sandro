export function Article({ title, author, date, paragraphs, videoUrl }) {
  return (
    <article className="post-content">
      <header className="post-header">
        <h2>{title}</h2>
        <p className="post-meta">
          Publicado em <time dateTime={date}>{date}</time> por <strong>{author}</strong>
        </p>
      </header>

      <section className="post-body">
        {paragraphs.map((p, idx) => (
          <p key={idx}>{p}</p>
        ))}
      </section>

      {videoUrl && (
        <section className="media-section">
          <h3>Vídeo em Destaque</h3>
          <div className="video-wrapper">
            <iframe
              src={videoUrl}
              title="Vídeo informativo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </section>
      )}
    </article>
  );
}