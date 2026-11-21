
export default function InnerPage({ eyebrow, title, description, children }) {
  return (
    <main className="inner-page">
      <div className="inner-heading">
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>

      <div className="inner-content">
        {children}
      </div>
    </main>
  );
}
