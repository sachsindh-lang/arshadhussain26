export default function Home() {
  return (
    <div style={{
      backgroundColor: '#090d16',
      color: '#f1f5f9',
      minHeight: '100vh',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '40px 20px',
    }}>
      {/* Hero Section */}
      <header style={{ maxWidth: '800px', width: '100%', textAlign: 'center', marginTop: '50px', marginBottom: '60px' }}>
        <span style={{ backgroundColor: '#1e293b', color: '#10b981', padding: '6px 16px', borderRadius: '20px', fontSize: '0.9rem', fontWeight: '600', border: '1px solid #10b981' }}>
          Available for Freelance Projects 🟢
        </span>
        <h1 style={{ fontSize: '3.5rem', fontWeight: '800', marginTop: '20px', marginBottom: '15px', background: 'linear-gradient(to right, #38bdf8, #6366f1)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          Hi, I am Arshad Hussain 👋
        </h1>
        <p style={{ fontSize: '1.6rem', color: '#94a3b8', margin: '0 auto 35px auto', maxWidth: '600px', fontWeight: '400', lineHeight: '1.6' }}>
          Professional React & Next.js Web Developer
        </p>
        
        <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="https://wa.me" target="_blank" rel="noopener noreferrer" style={{
            backgroundColor: '#25D366', color: 'white', padding: '14px 28px', borderRadius: '30px', textDecoration: 'none', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '8px', boxShadow: '0 8px 16px -4px rgba(37, 211, 102, 0.4)'
          }}>
            WhatsApp Chat 💬
          </a>
          <a href="mailto:arshadh6611@gmail.com" style={{
            backgroundColor: '#1e293b', color: '#f8fafc', padding: '14px 28px', borderRadius: '30px', textDecoration: 'none', fontWeight: '600', border: '1px solid #334155'
          }}>
            Email Me ✉️
          </a>
        </div>
      </header>

      {/* Tech Stack */}
      <section style={{ maxWidth: '800px', width: '100%', marginBottom: '60px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '1.8rem', color: '#f8fafc', marginBottom: '20px', fontWeight: '700' }}>Technical Skills</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center' }}>
          {['Next.js', 'React.js', 'Tailwind CSS', 'JavaScript (ES6+)', 'Node.js', 'Git & GitHub', 'UI/UX Design'].map((skill, index) => (
            <span key={index} style={{ backgroundColor: '#111827', color: '#38bdf8', padding: '10px 22px', borderRadius: '30px', fontSize: '0.95rem', border: '1px solid #1f2937', fontWeight: '500' }}>
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section style={{ maxWidth: '800px', width: '100%', marginBottom: '60px' }}>
        <h2 style={{ fontSize: '1.8rem', color: '#f8fafc', marginBottom: '25px', textAlign: 'center', fontWeight: '700' }}>Featured Projects</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
          {/* Card 1 */}
          <div style={{ backgroundColor: '#111827', padding: '30px', borderRadius: '20px', border: '1px solid #1f2937' }}>
            <span style={{ fontSize: '0.8rem', color: '#6366f1', fontWeight: 'bold', textTransform: 'uppercase' }}>Next.js + Tailwind</span>
            <h3 style={{ color: '#38bdf8', marginTop: '5px', marginBottom: '12px', fontSize: '1.4rem' }}>🛒 Modern E-Commerce Store</h3>
            <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: '1.6', margin: '0' }}>A high-performance online shopping platform featuring a dynamic cart, product filtering, and a fully responsive layout.</p>
          </div>

          {/* Card 2 */}
          <div style={{ backgroundColor: '#111827', padding: '30px', borderRadius: '20px', border: '1px solid #1f2937' }}>
            <span style={{ fontSize: '0.8rem', color: '#6366f1', fontWeight: 'bold', textTransform: 'uppercase' }}>React + APIs</span>
            <h3 style={{ color: '#38bdf8', marginTop: '5px', marginBottom: '12px', fontSize: '1.4rem' }}>🤖 AI SaaS Dashboard</h3>
            <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: '1.6', margin: '0' }}>An artificial intelligence dashboard integrated with OpenAI APIs to process real-time automated data for users.</p>
          </div>
        </div>
      </section>

      {/* Footer / Contact Info */}
      <footer style={{ maxWidth: '800px', width: '100%', borderTop: '1px solid #1f2937', paddingTop: '40px', textAlign: 'center', color: '#64748b', fontSize: '0.95rem' }}>
        <p style={{ marginBottom: '10px' }}>📧 arshadh6611@gmail.com | 📞 +92 305 3044806</p>
        <p>© {new Date().getFullYear()} Arshad Hussain. All rights reserved.</p>
      </footer>
    </div>
  );
}
