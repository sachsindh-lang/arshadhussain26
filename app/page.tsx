export default function Home() {
  return (
    <div style={{
      backgroundColor: '#090d16',
      color: '#f1f5f9',
      minHeight: '100vh',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      scrollBehavior: 'smooth'
    }}>
      
      {/* Sticky Navigation Bar */}
      <nav style={{
        position: 'sticky', top: 0, backgroundColor: 'rgba(9, 13, 22, 0.9)',
        backdropFilter: 'blur(10px)', borderBottom: '1px solid #1f2937',
        padding: '15px 20px', display: 'flex', justifyContent: 'space-between',
        alignItems: 'center', zIndex: 100
      }}>
        <div style={{ fontWeight: 'bold', fontSize: '1.2rem', color: '#38bdf8' }}>AH.Dev</div>
        <div style={{ display: 'flex', gap: '20px' }}>
          <a href="#home" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.95rem' }}>Home</a>
          <a href="#about" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.95rem' }}>About</a>
          <a href="#projects" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.95rem' }}>Projects</a>
          <a href="#contact" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.95rem' }}>Contact</a>
        </div>
      </nav>

      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 20px' }}>
        
        {/* 1. HOME SECTION (With Profile Image) */}
        <header id="home" style={{ padding: '80px 0 60px 0', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <span style={{ backgroundColor: '#1e293b', color: '#10b981', padding: '6px 16px', borderRadius: '20px', fontSize: '0.9rem', fontWeight: '600', border: '1px solid #10b981', marginBottom: '25px' }}>
            Available for Hire 🟢
          </span>

          {/* Your Profile Picture Block */}
          <img 
            src="/profile.jpg" 
            alt="Arshad Hussain" 
            style={{
              width: '150px',
              height: '150px',
              borderRadius: '50%',
              objectFit: 'cover',
              border: '4px solid #38bdf8',
              marginBottom: '20px',
              boxShadow: '0 10px 25px -5px rgba(56, 189, 248, 0.3)'
            }} 
          />

          <h1 style={{ fontSize: '3.5rem', fontWeight: '800', marginTop: '10px', marginBottom: '15px', background: 'linear-gradient(to right, #38bdf8, #6366f1)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Hi, I am Arshad Hussain 👋
          </h1>
          <p style={{ fontSize: '1.5rem', color: '#94a3b8', marginBottom: '30px' }}>
            Professional React & Next.js Web Developer
          </p>
          <div style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
            <a href="#contact" style={{ backgroundColor: '#10b981', color: 'white', padding: '12px 24px', borderRadius: '30px', textDecoration: 'none', fontWeight: '600' }}>Hire Me 🚀</a>
            <a href="#projects" style={{ backgroundColor: 'transparent', color: '#38bdf8', padding: '12px 24px', borderRadius: '30px', textDecoration: 'none', fontWeight: '600', border: '2px solid #38bdf8' }}>View Work 👇</a>
          </div>
        </header>

        {/* 2. ABOUT SECTION */}
        <section id="about" style={{ padding: '60px 0', borderTop: '1px solid #1f2937' }}>
          <h2 style={{ fontSize: '2rem', color: '#f8fafc', marginBottom: '20px' }}>About Me & My Skills</h2>
          <p style={{ color: '#94a3b8', fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '25px' }}>
            I am a passionate front-end developer specializing in building clean, fast, and secure web applications. With expertise in JavaScript ecosystems, I focus on turning complex business ideas into interactive digital real estate.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {['Next.js', 'React.js', 'Tailwind CSS', 'JavaScript (ES6+)', 'Node.js', 'Git & GitHub', 'REST APIs'].map((skill, index) => (
              <span key={index} style={{ backgroundColor: '#111827', color: '#38bdf8', padding: '8px 18px', borderRadius: '20px', fontSize: '0.9rem', border: '1px solid #1f2937' }}>
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* 3. PROJECTS SECTION */}
        <section id="projects" style={{ padding: '60px 0', borderTop: '1px solid #1f2937' }}>
          <h2 style={{ fontSize: '2rem', color: '#f8fafc', marginBottom: '25px' }}>Featured Projects</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
            <div style={{ backgroundColor: '#111827', padding: '25px', borderRadius: '16px', border: '1px solid #1f2937' }}>
              <span style={{ fontSize: '0.8rem', color: '#6366f1', fontWeight: 'bold' }}>NEXT.JS + TAILWIND</span>
              <h3 style={{ color: '#38bdf8', marginTop: '5px', marginBottom: '10px' }}>🛍️ Modern E-Commerce Store</h3>
              <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: '1.5' }}>A high-performance online store with a live shopping cart system and fully responsive web design.</p>
            </div>
            <div style={{ backgroundColor: '#111827', padding: '25px', borderRadius: '16px', border: '1px solid #1f2937' }}>
              <span style={{ fontSize: '0.8rem', color: '#6366f1', fontWeight: 'bold' }}>REACT + REST APIs</span>
              <h3 style={{ color: '#38bdf8', marginTop: '5px', marginBottom: '10px' }}>🤖 AI SaaS Dashboard</h3>
              <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: '1.5' }}>An artificial intelligence workspace built to integrate external APIs for real-time customer data management.</p>
            </div>
          </div>
        </section>

        {/* 4. CONTACT SECTION */}
        <section id="contact" style={{ padding: '60px 0', borderTop: '1px solid #1f2937', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '2rem', color: '#f8fafc', marginBottom: '10px' }}>Get In Touch</h2>
          <p style={{ color: '#94a3b8', marginBottom: '25px' }}>Have an exciting project? Drop me a message directly or connect via social networks.</p>
          
          <div style={{ display: 'flex', gap: '15px', marginBottom: '30px', flexWrap: 'wrap' }}>
            <a href="https://wa.me" target="_blank" rel="noopener noreferrer" style={{ backgroundColor: '#25D366', color: 'white', padding: '12px 24px', borderRadius: '30px', textDecoration: 'none', fontWeight: '600' }}>WhatsApp Chat 💬</a>
            <a href="mailto:arshadh6611@gmail.com" style={{ backgroundColor: '#1e293b', color: 'white', padding: '12px 24px', borderRadius: '30px', textDecoration: 'none', fontWeight: '600', border: '1px solid #334155' }}>Email Me ✉️</a>
          </div>

          <div style={{ textAlign: 'left', backgroundColor: '#111827', padding: '20px', borderRadius: '12px', border: '1px solid #1f2937' }}>
            <p style={{ margin: '5px 0', color: '#94a3b8' }}><strong>Official Email:</strong> arshadh6611@gmail.com</p>
            <p style={{ margin: '5px 0', color: '#94a3b8' }}><strong>Phone/WhatsApp:</strong> +92 305 3044806</p>
          </div>
        </section>

        {/* Footer */}
        <footer style={{ borderTop: '1px solid #1f2937', padding: '30px 0', textAlign: 'center', color: '#64748b', fontSize: '0.9rem' }}>
          <p>© {new Date().getFullYear()} Arshad Hussain. All rights reserved.</p>
        </footer>

      </div>
    </div>
  );
}
