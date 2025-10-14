<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!-- SEO Meta Tags -->
    <title>MOVILIAX - El Futuro de la Movilidad en Movimiento</title>
    <meta name="description" content="MoviliaX - Revista digital líder en movilidad, logística e innovación tecnológica en América Latina. Electromovilidad, ciudades inteligentes y transporte del futuro.">
    <meta name="keywords" content="movilidad, logística, tecnología, transporte, LATAM, electromovilidad, ciudades inteligentes, vehículos eléctricos, IA transporte">
    <meta name="author" content="MoviliaX">
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://moviliax.com/">
    <meta property="og:title" content="MOVILIAX - El Futuro de la Movilidad en Movimiento">
    <meta property="og:description" content="Explora la nueva experiencia de moverte. El futuro de la movilidad digital, las ciudades inteligentes y la tecnología aplicada al transporte en América Latina">
    <meta property="og:image" content="https://moviliax.com/assets/og-image.jpg">
    
    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="https://moviliax.com/">
    <meta property="twitter:title" content="MOVILIAX - El Futuro de la Movilidad en Movimiento">
    <meta property="twitter:description" content="Explora la nueva experiencia de moverte">
    <meta property="twitter:image" content="https://moviliax.com/assets/og-image.jpg">
    
    <!-- Favicon -->
    <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🚀</text></svg>">
    
    <!-- Preconnect for Performance -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Exo+2:wght@400;600;700;800&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
    
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        :root {
            --azul-profundo: #0A0F2C;
            --cian-electrico: #00E0FF;
            --gris-metalico: #7A7F8C;
            --blanco: #FFFFFF;
            --negro-carbon: #0D0D0D;
        }

        body {
            font-family: 'Inter', sans-serif;
            background: var(--azul-profundo);
            color: var(--blanco);
            overflow-x: hidden;
        }

        /* Header */
        header {
            position: fixed;
            top: 0;
            width: 100%;
            background: rgba(10, 15, 44, 0.95);
            backdrop-filter: blur(10px);
            z-index: 1000;
            border-bottom: 1px solid rgba(0, 224, 255, 0.1);
        }

        nav {
            max-width: 1400px;
            margin: 0 auto;
            padding: 20px 40px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .logo {
            font-family: 'Exo 2', sans-serif;
            font-size: 28px;
            font-weight: 800;
            letter-spacing: 2px;
            color: var(--blanco);
        }

        .logo-x {
            color: var(--cian-electrico);
            position: relative;
            display: inline-block;
            animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
            0%, 100% { text-shadow: 0 0 10px var(--cian-electrico); }
            50% { text-shadow: 0 0 20px var(--cian-electrico), 0 0 30px var(--cian-electrico); }
        }

        .nav-links {
            display: flex;
            gap: 40px;
            list-style: none;
        }

        .nav-links a {
            color: var(--blanco);
            text-decoration: none;
            font-weight: 500;
            transition: all 0.3s;
            position: relative;
        }

        .nav-links a:hover {
            color: var(--cian-electrico);
        }

        .nav-links a::after {
            content: '';
            position: absolute;
            bottom: -5px;
            left: 0;
            width: 0;
            height: 2px;
            background: var(--cian-electrico);
            transition: width 0.3s;
        }

        .nav-links a:hover::after {
            width: 100%;
        }

        /* Mobile Menu Toggle */
        .menu-toggle {
            display: none;
            font-size: 28px;
            color: var(--cian-electrico);
            cursor: pointer;
            background: none;
            border: none;
            padding: 5px;
        }

        /* Hero Section */
        .hero {
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            overflow: hidden;
            background: linear-gradient(135deg, #0A0F2C 0%, #1a1f4a 50%, #0A0F2C 100%);
        }

        .hero-grid {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: 
                linear-gradient(rgba(0, 224, 255, 0.03) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0, 224, 255, 0.03) 1px, transparent 1px);
            background-size: 50px 50px;
            animation: gridMove 20s linear infinite;
        }

        @keyframes gridMove {
            0% { transform: translate(0, 0); }
            100% { transform: translate(50px, 50px); }
        }

        .hero-content {
            text-align: center;
            z-index: 2;
            max-width: 900px;
            padding: 0 20px;
        }

        .hero h1 {
            font-family: 'Exo 2', sans-serif;
            font-size: 72px;
            font-weight: 800;
            margin-bottom: 20px;
            letter-spacing: 3px;
            background: linear-gradient(135deg, var(--blanco) 0%, var(--cian-electrico) 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .hero-tagline {
            font-size: 24px;
            color: var(--gris-metalico);
            margin-bottom: 40px;
            font-weight: 300;
        }

        .cta-button {
            display: inline-block;
            padding: 18px 45px;
            background: linear-gradient(135deg, var(--cian-electrico), #0099cc);
            color: var(--azul-profundo);
            text-decoration: none;
            font-weight: 700;
            border-radius: 50px;
            transition: all 0.3s;
            box-shadow: 0 10px 30px rgba(0, 224, 255, 0.3);
            text-transform: uppercase;
            letter-spacing: 1px;
        }

        .cta-button:hover {
            transform: translateY(-3px);
            box-shadow: 0 15px 40px rgba(0, 224, 255, 0.5);
        }

        /* Featured Section */
        .featured {
            max-width: 1400px;
            margin: 100px auto;
            padding: 0 40px;
        }

        .section-title {
            font-family: 'Exo 2', sans-serif;
            font-size: 42px;
            font-weight: 700;
            margin-bottom: 60px;
            text-align: center;
            position: relative;
        }

        .section-title::after {
            content: '';
            display: block;
            width: 100px;
            height: 3px;
            background: var(--cian-electrico);
            margin: 20px auto 0;
        }

        .articles-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 40px;
        }

        .article-card {
            background: rgba(255, 255, 255, 0.03);
            border: 1px solid rgba(0, 224, 255, 0.1);
            border-radius: 15px;
            overflow: hidden;
            transition: all 0.4s;
            cursor: pointer;
        }

        .article-card:hover {
            transform: translateY(-10px);
            border-color: var(--cian-electrico);
            box-shadow: 0 20px 50px rgba(0, 224, 255, 0.2);
        }

        .article-image {
            height: 220px;
            background: linear-gradient(135deg, #1a1f4a, #0A0F2C);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 60px;
            color: var(--cian-electrico);
            position: relative;
            overflow: hidden;
        }

        .article-image::before {
            content: '';
            position: absolute;
            width: 200%;
            height: 200%;
            background: linear-gradient(45deg, transparent, rgba(0, 224, 255, 0.1), transparent);
            animation: shine 3s infinite;
        }

        @keyframes shine {
            0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
            100% { transform: translateX(100%) translateY(100%) rotate(45deg); }
        }

        .article-content {
            padding: 30px;
        }

        .article-tag {
            display: inline-block;
            padding: 6px 15px;
            background: rgba(0, 224, 255, 0.1);
            color: var(--cian-electrico);
            border-radius: 20px;
            font-size: 12px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 15px;
        }

        .article-title {
            font-family: 'Exo 2', sans-serif;
            font-size: 22px;
            font-weight: 700;
            margin-bottom: 15px;
            line-height: 1.4;
        }

        .article-excerpt {
            color: var(--gris-metalico);
            line-height: 1.6;
            margin-bottom: 20px;
        }

        .read-more {
            color: var(--cian-electrico);
            font-weight: 600;
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            transition: gap 0.3s;
        }

        .read-more:hover {
            gap: 15px;
        }

        /* Stats Section */
        .stats {
            background: linear-gradient(135deg, rgba(0, 224, 255, 0.05), rgba(26, 31, 74, 0.5));
            padding: 100px 40px;
            margin: 100px 0;
        }

        .stats-grid {
            max-width: 1200px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 60px;
            text-align: center;
        }

        .stat-item {
            position: relative;
        }

        .stat-number {
            font-family: 'Exo 2', sans-serif;
            font-size: 56px;
            font-weight: 800;
            color: var(--cian-electrico);
            margin-bottom: 10px;
        }

        .stat-label {
            font-size: 18px;
            color: var(--gris-metalico);
            text-transform: uppercase;
            letter-spacing: 2px;
        }

        /* Newsletter */
        .newsletter {
            max-width: 800px;
            margin: 100px auto;
            padding: 60px 40px;
            text-align: center;
            background: rgba(255, 255, 255, 0.03);
            border: 2px solid var(--cian-electrico);
            border-radius: 20px;
        }

        .newsletter h2 {
            font-family: 'Exo 2', sans-serif;
            font-size: 36px;
            margin-bottom: 20px;
        }

        .newsletter p {
            color: var(--gris-metalico);
            margin-bottom: 30px;
            font-size: 18px;
        }

        .newsletter-form {
            display: flex;
            gap: 15px;
            max-width: 500px;
            margin: 0 auto;
        }

        .newsletter-input {
            flex: 1;
            padding: 15px 25px;
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(0, 224, 255, 0.3);
            border-radius: 50px;
            color: var(--blanco);
            font-size: 16px;
            outline: none;
            transition: all 0.3s;
        }

        .newsletter-input::placeholder {
            color: var(--gris-metalico);
        }

        .newsletter-input:focus {
            border-color: var(--cian-electrico);
            background: rgba(255, 255, 255, 0.08);
        }

        .newsletter-button {
            padding: 15px 35px;
            background: var(--cian-electrico);
            color: var(--azul-profundo);
            border: none;
            border-radius: 50px;
            font-weight: 700;
            cursor: pointer;
            transition: all 0.3s;
        }

        .newsletter-button:hover {
            transform: scale(1.05);
            box-shadow: 0 10px 30px rgba(0, 224, 255, 0.4);
        }

        /* Footer */
        footer {
            background: var(--negro-carbon);
            padding: 60px 40px 30px;
            margin-top: 100px;
        }

        .footer-content {
            max-width: 1400px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 40px;
            margin-bottom: 40px;
        }

        .footer-section h3 {
            font-family: 'Exo 2', sans-serif;
            color: var(--cian-electrico);
            margin-bottom: 20px;
        }

        .footer-links {
            list-style: none;
        }

        .footer-links li {
            margin-bottom: 10px;
        }

        .footer-links a {
            color: var(--gris-metalico);
            text-decoration: none;
            transition: color 0.3s;
        }

        .footer-links a:hover {
            color: var(--cian-electrico);
        }

        .footer-bottom {
            text-align: center;
            padding-top: 30px;
            border-top: 1px solid rgba(0, 224, 255, 0.1);
            color: var(--gris-metalico);
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
            .hero h1 {
                font-size: 48px;
            }
            
            .hero-tagline {
                font-size: 18px;
            }
            
            .menu-toggle {
                display: block;
            }
            
            .nav-links {
                position: fixed;
                top: 70px;
                left: -100%;
                width: 100%;
                height: calc(100vh - 70px);
                background: var(--azul-profundo);
                flex-direction: column;
                align-items: center;
                padding: 40px 20px;
                gap: 30px;
                transition: left 0.3s ease-in-out;
                border-top: 1px solid rgba(0, 224, 255, 0.1);
            }
            
            .nav-links.active {
                left: 0;
            }
            
            .nav-links li {
                width: 100%;
                text-align: center;
            }
            
            .nav-links a {
                display: block;
                padding: 15px;
                font-size: 18px;
            }
            
            .articles-grid {
                grid-template-columns: 1fr;
            }
            
            .newsletter-form {
                flex-direction: column;
            }
            
            .section-title {
                font-size: 32px;
            }
            
            .stat-number {
                font-size: 42px;
            }
        }

        @media (max-width: 480px) {
            .hero h1 {
                font-size: 36px;
            }
            
            nav {
                padding: 15px 20px;
            }
            
            .logo {
                font-size: 24px;
            }
        }
    </style>
</head>
<body>
    <header>
        <nav>
            <div class="logo">MOVILIA<span class="logo-x">X</span></div>
            <button class="menu-toggle" id="menuToggle" aria-label="Abrir menú de navegación">☰</button>
            <ul class="nav-links" id="navLinks">
                <li><a href="#articulos">Artículos</a></li>
                <li><a href="#podcast">Podcast</a></li>
                <li><a href="#comunidad">Comunidad</a></li>
                <li><a href="#newsletter">Newsletter</a></li>
            </ul>
        </nav>
    </header>

    <section class="hero">
        <div class="hero-grid"></div>
        <div class="hero-content">
            <h1>MOVILIA<span class="logo-x">X</span></h1>
            <p class="hero-tagline">Explora la nueva experiencia de moverte</p>
            <p style="font-size: 18px; color: var(--gris-metalico); margin-bottom: 40px;">
                El futuro de la movilidad digital, las ciudades inteligentes y la tecnología aplicada al transporte en América Latina
            </p>
            <a href="#articulos" class="cta-button">Descubre Más</a>
        </div>
    </section>

    <section class="featured" id="articulos">
        <h2 class="section-title">Destacado del Mes</h2>
        <div class="articles-grid">
            <article class="article-card">
                <div class="article-image" aria-label="Electromovilidad">🔋</div>
                <div class="article-content">
                    <span class="article-tag">Reportaje Especial</span>
                    <h3 class="article-title">El Estado de la Movilidad Eléctrica en América Latina 2025</h3>
                    <p class="article-excerpt">Un análisis profundo de cómo la electromovilidad está transformando el panorama del transporte en la región, con datos exclusivos de inversión y adopción por país.</p>
                    <a href="#" class="read-more">Leer reportaje →</a>
                </div>
            </article>

            <article class="article-card">
                <div class="article-image" aria-label="Inteligencia Artificial">🤖</div>
                <div class="article-content">
                    <span class="article-tag">IA en Movimiento</span>
                    <h3 class="article-title">Gestión de Tráfico Predictiva: El Algoritmo que Anticipa el Caos</h3>
                    <p class="article-excerpt">Descubre cómo la inteligencia artificial está revolucionando la manera en que las ciudades gestionan el flujo vehicular en tiempo real.</p>
                    <a href="#" class="read-more">Explorar →</a>
                </div>
            </article>

            <article class="article-card">
                <div class="article-image" aria-label="Ciudades Inteligentes">🏙️</div>
                <div class="article-content">
                    <span class="article-tag">Ciudades del Futuro</span>
                    <h3 class="article-title">5 Ciudades LATAM que Están Redefiniendo la Movilidad Urbana</h3>
                    <p class="article-excerpt">Medellín, Santiago, São Paulo, Ciudad de México y Montevideo lideran la transformación hacia ciudades más inteligentes y conectadas.</p>
                    <a href="#" class="read-more">Ver ranking →</a>
                </div>
            </article>
        </div>
    </section>

    <section class="stats">
        <div class="stats-grid">
            <div class="stat-item">
                <div class="stat-number">2M+</div>
                <div class="stat-label">Vehículos EV en LATAM</div>
            </div>
            <div class="stat-item">
                <div class="stat-number">47%</div>
                <div class="stat-label">Crecimiento Anual</div>
            </div>
            <div class="stat-item">
                <div class="stat-number">15</div>
                <div class="stat-label">Ciudades Inteligentes</div>
            </div>
            <div class="stat-item">
                <div class="stat-number">$8.2B</div>
                <div class="stat-label">Inversión en Tech Mobility</div>
            </div>
        </div>
    </section>

    <section class="newsletter" id="newsletter">
        <h2>RADAR<span class="logo-x">X</span></h2>
        <p>Tu dosis semanal de innovación en movilidad. Tendencias, datos exclusivos y lo que está transformando el movimiento en América Latina.</p>
        <form class="newsletter-form" id="newsletterForm">
            <input type="email" class="newsletter-input" placeholder="tu@email.com" required aria-label="Email para suscripción">
            <button type="submit" class="newsletter-button">Suscribirse</button>
        </form>
    </section>

    <footer>
        <div class="footer-content">
            <div class="footer-section">
                <h3>MOVILIA<span class="logo-x">X</span></h3>
                <p style="color: var(--gris-metalico); line-height: 1.6;">
                    El punto de conexión entre la movilidad humana y la inteligencia tecnológica.
                </p>
            </div>
            <div class="footer-section">
                <h3>Contenido</h3>
                <ul class="footer-links">
                    <li><a href="#">Reportajes Especiales</a></li>
                    <li><a href="#">Series Temáticas</a></li>
                    <li><a href="#">Entrevistas</a></li>
                    <li><a href="#">Podcast</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h3>Comunidad</h3>
                <ul class="footer-links">
                    <li><a href="#">MOVILIAX Connect</a></li>
                    <li><a href="#">Eventos</a></li>
                    <li><a href="#">Colaboradores</a></li>
                    <li><a href="#">Partners</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h3>Recursos</h3>
                <ul class="footer-links">
                    <li><a href="#">Glosario Tech</a></li>
                    <li><a href="#">Estudios e Informes</a></li>
                    <li><a href="#">Guía de Startups</a></li>
                    <li><a href="#">Media Kit</a></li>
                </ul>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2025 MOVILIAX. El futuro de la movilidad está en movimiento.</p>
        </div>
    </footer>

    <script>
        // Mobile Menu Toggle
        const menuToggle = document.getElementById('menuToggle');
        const navLinks = document.getElementById('navLinks');

        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuToggle.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
        });

        // Close menu when clicking a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                menuToggle.textContent = '☰';
            });
        });

        // Smooth scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });

        // Parallax effect for hero
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const hero = document.querySelector('.hero-content');
            if (hero && scrolled < 700) {
                hero.style.transform = `translateY(${scrolled * 0.5}px)`;
                hero.style.opacity = 1 - (scrolled / 700);
            }
        });

        // Intersection Observer for fade-in animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        document.querySelectorAll('.article-card, .stat-item').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'all 0.6s ease-out';
            observer.observe(el);
        });

        // Newsletter form handling
        document.getElementById('newsletterForm').addEventListener('submit', (e) => {
            e.preventDefault();
            const email = e.target.querySelector('input').value;
            alert(`¡Gracias por suscribirte a RADARX! Confirma tu correo: ${email}`);
            e.target.reset();
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
                navLinks.classList.remove('active');
                menuToggle.textContent = '☰';
            }
        });
    </script>
</body>
</html>
