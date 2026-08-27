export default function Home() {
  return (
    <div style={{
      backgroundColor: '#0f172a',
      color: '#f8fafc',
      minHeight: '100vh',
      fontFamily: 'system-ui, sans-serif',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px',
      textAlign: 'center'
    }}>
      <main style={{ maxWidth: '600px', width: '100%' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '10px', color: '#38bdf8' }}>
          السلام علیکم، میں ارشد حسین ہوں 👋
        </h1>
        <p style={{ fontSize: '1.5rem', color: '#94a3b8', marginBottom: '30px' }}>
          Professional React & Next.js Developer
        </p>

        <div style={{ 
          backgroundColor: '#1e293b', 
          padding: '20px', 
          borderRadius: '12px', 
          marginBottom: '35px',
          border: '1px solid #334155'
        }}>
          <h3 style={{ marginTop: '0', color: '#38bdf8' }}>میری مہارتیں (My Tech Stack)</h3>
          <p style={{ letterSpacing: '1px' }}>👉 Next.js | React.js | Tailwind CSS | JavaScript</p>
        </div>

        <div>
          <a href="https://upwork.com" target="_blank" rel="noopener noreferrer" style={{
            backgroundColor: '#10b981',
            color: 'white',
            padding: '12px 24px',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: 'bold',
            fontSize: '1.1rem',
            boxShadow: '0 4px 6px -1px rgba(16, 185, 129, 0.4)',
            transition: 'all 0.3s'
          }}>
            Upwork پر مجھے ہائر کریں 🚀
          </a>
        </div>
      </main>
    </div>
  );
}
