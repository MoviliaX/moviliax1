import React, { useState, useEffect, useRef } from 'react';
import { Search, Share2, MessageCircle, TrendingUp, Moon, Sun, Filter, BookOpen } from 'lucide-react';

const MoviliaxV2 = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [darkMode, setDarkMode] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDate, setSelectedDate] = useState('all');
  const [articles, setArticles] = useState([
    {
      id: 1,
      title: 'El Boom de los Vehículos Eléctricos en México',
      category: 'evs',
      date: '2024-10-05',
      excerpt: 'Cómo la electromovilidad pasó de ser una promesa futurista a una realidad cotidiana...',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
      views: 2450,
      shares: 156,
      comments: 34,
      readTime: 15
    },
    {
      id: 2,
      title: 'Logística Digital: El Nearshoring Mexicano',
      category: 'logistica',
      date: '2024-10-03',
      excerpt: 'Análisis de cómo el nearshoring está transformando cadenas de suministro...',
      content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...',
      views: 1823,
      shares: 112,
      comments: 28,
      readTime: 12
    },
    {
      id: 3,
      title: '5 Startups de Movilidad que Debes Conocer',
      category: 'startups',
      date: '2024-10-01',
      excerpt: 'Las compañías emergentes liderando la transformación del sector...',
      content: 'Duis aute irure dolor in reprehenderit in voluptate velit...',
      views: 3200,
      shares: 245,
      comments: 67,
      readTime: 10
    }
  ]);
  const [filteredArticles, setFilteredArticles] = useState(articles);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [comments, setComments] = useState({});
  const [newComment, setNewComment] = useState('');
  const canvasRef = useRef(null);
  const [readingMode, setReadingMode] = useState(false);

  // Filtrar artículos
  useEffect(() => {
    let filtered = articles;

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(a => a.category === selectedCategory);
    }

    if (selectedDate !== 'all') {
      const now = new Date();
      const articleDate = new Date(articles[0].date);
      filtered = filtered.filter(a => {
        const diff = now - new Date(a.date);
        const days = diff / (1000 * 60 * 60 * 24);
        if (selectedDate === 'week') return days <= 7;
        if (selectedDate === 'month') return days <= 30;
        return true;
      });
    }

    if (searchQuery) {
      filtered = filtered.filter(a =>
        a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        a.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredArticles(filtered);
  }, [searchQuery, selectedCategory, selectedDate, articles]);

  // Three.js Background
  useEffect(() => {
    if (!canvasRef.current || currentPage !== 'home') return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let animationId;
    const nodes = Array.from({ length: 30 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
      r: Math.random() * 3 + 2
    }));

    const animate = () => {
      ctx.fillStyle = 'rgba(10, 15, 44, 0.95)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      nodes.forEach((node, i) => {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        ctx.fillStyle = '#00E0FF';
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.r, 0, Math.PI * 2);
        ctx.fill();

        nodes.forEach((other, j) => {
          if (i < j) {
            const dx = node.x - other.x;
            const dy = node.y - other.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < 150) {
              ctx.strokeStyle = `rgba(0, 224, 255, ${0.3 * (1 - dist / 150)})`;
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(node.x, node.y);
              ctx.lineTo(other.x, other.y);
              ctx.stroke();
            }
          }
        });
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, [currentPage]);

  const handleShare = (platform, article) => {
    const text = `Leyendo: ${article.title}`;
    const url = 'https://moviliax.com';
    const urls = {
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${url}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      whatsapp: `https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`
    };
    if (urls[platform]) window.open(urls[platform]);
  };

  const addComment = (articleId) => {
    if (!newComment.trim()) return;
    if (!comments[articleId]) comments[articleId] = [];
    comments[articleId] = [...comments[articleId], {
      text: newComment,
      author: 'Usuario',
      date: new Date().toLocaleDateString()
    }];
    setNewComment('');
  };

  const HomePage = () => (
    <div style={{ position: 'relative' }}>
      <canvas ref={canvasRef} style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0
      }} />

      <div style={{
        position: 'relative',
        zIndex: 1,
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '40px'
      }}>
        <div>
          <h1 style={{
            fontSize: '72px',
            fontWeight: '900',
            marginBottom: '20px',
            background: 'linear-gradient(135deg, #ffffff, #00E0FF)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            letterSpacing: '2px'
          }}>
            MOVILIA<span style={{ color: '#00E0FF' }}>X</span>
          </h1>
          <p style={{
            fontSize: '24px',
            color: '#7A7F8C',
            marginBottom: '40px'
          }}>
            Movilidad y Logística Digital en México
          </p>
          <button
            onClick={() => setCurrentPage('articles')}
            style={{
              padding: '18px 45px',
              background: 'linear-gradient(135deg, #00E0FF, #0099cc)',
              color: '#0A0F2C',
              border: 'none',
              borderRadius: '50px',
              fontSize: '16px',
              fontWeight: '700',
              cursor: 'pointer',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}
          >
            Explorar Contenido
          </button>
        </div>
      </div>
    </div>
  );

  const ArticlesPage = () => (
    <div style={{ minHeight: '100vh', background: '#0A0F2C', padding: '100px 40px 40px' }}>
      {/* Search and Filters */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        marginBottom: '40px'
      }}>
        <div style={{
          display: 'flex',
          gap: '15px',
          marginBottom: '20px',
          flexWrap: 'wrap'
        }}>
          <div style={{
            flex: 1,
            minWidth: '250px',
            position: 'relative'
          }}>
            <Search size={20} style={{
              position: 'absolute',
              left: '15px',
              top: '15px',
              color: '#00E0FF'
            }} />
            <input
              type="text"
              placeholder="Buscar artículos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '15px 15px 15px 45px',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(0, 224, 255, 0.3)',
                borderRadius: '10px',
                color: '#ffffff',
                fontSize: '16px'
              }}
            />
          </div>

          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            style={{
              padding: '15px 20px',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(0, 224, 255, 0.3)',
              borderRadius: '10px',
              color: '#ffffff',
              cursor: 'pointer'
            }}
          >
            <option value="all">Todas las categorías</option>
            <option value="evs">Vehículos Eléctricos</option>
            <option value="logistica">Logística</option>
            <option value="startups">Startups</option>
          </select>

          <select
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            style={{
              padding: '15px 20px',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(0, 224, 255, 0.3)',
              borderRadius: '10px',
              color: '#ffffff',
              cursor: 'pointer'
            }}
          >
            <option value="all">Cualquier fecha</option>
            <option value="week">Esta semana</option>
            <option value="month">Este mes</option>
          </select>
        </div>

        {/* Tag Filters */}
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          {['EVs', 'Logística', 'IA', 'Startups', 'México'].map(tag => (
            <button
              key={tag}
              onClick={() => setSearchQuery(tag)}
              style={{
                padding: '8px 16px',
                background: 'rgba(0, 224, 255, 0.1)',
                border: '1px solid rgba(0, 224, 255, 0.3)',
                borderRadius: '20px',
                color: '#00E0FF',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: '600'
              }}
            >
              #{tag}
            </button>
          ))}
        </div>
      </div>

      {/* Articles Grid */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
        gap: '30px'
      }}>
        {filteredArticles.map((article) => (
          <div
            key={article.id}
            onClick={() => {
              setSelectedArticle(article);
              setCurrentPage('article');
            }}
            style={{
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(0, 224, 255, 0.2)',
              borderRadius: '20px',
              padding: '25px',
              cursor: 'pointer',
              transition: 'all 0.3s',
              transform: 'translateY(0)',
              ':hover': { transform: 'translateY(-10px)' }
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)';
              e.currentTarget.style.borderColor = '#00E0FF';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = 'rgba(0, 224, 255, 0.2)';
            }}
          >
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '15px',
              alignItems: 'center'
            }}>
              <span style={{
                display: 'inline-block',
                padding: '4px 12px',
                background: 'rgba(0, 224, 255, 0.2)',
                color: '#00E0FF',
                borderRadius: '20px',
                fontSize: '12px',
                fontWeight: '700'
              }}>
                {article.category.toUpperCase()}
              </span>
              <span style={{ fontSize: '12px', color: '#7A7F8C' }}>
                {article.date}
              </span>
            </div>
            <h3 style={{
              fontSize: '20px',
              fontWeight: '700',
              marginBottom: '10px',
              color: '#ffffff'
            }}>
              {article.title}
            </h3>
            <p style={{
              color: '#7A7F8C',
              fontSize: '14px',
              marginBottom: '20px'
            }}>
              {article.excerpt}
            </p>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              fontSize: '12px',
              color: '#7A7F8C',
              paddingTop: '15px',
              borderTop: '1px solid rgba(0, 224, 255, 0.1)'
            }}>
              <span>👁️ {article.views} vistas</span>
              <span>💬 {article.comments} comentarios</span>
              <span>⏱️ {article.readTime} min</span>
            </div>
          </div>
        ))}
      </div>

      {filteredArticles.length === 0 && (
        <div style={{
          textAlign: 'center',
          padding: '60px 20px',
          color: '#7A7F8C'
        }}>
          <p style={{ fontSize: '18px' }}>No se encontraron artículos con esos criterios</p>
        </div>
      )}
    </div>
  );

  const ArticleView = () => (
    <div style={{
      minHeight: '100vh',
      background: readingMode ? '#f5f5f0' : '#0A0F2C',
      color: readingMode ? '#333' : '#ffffff',
      padding: '100px 40px 40px',
      transition: 'all 0.3s'
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        {/* Article Header */}
        <div style={{ marginBottom: '40px' }}>
          <button
            onClick={() => setCurrentPage('articles')}
            style={{
              padding: '10px 20px',
              background: 'transparent',
              border: '1px solid #00E0FF',
              color: '#00E0FF',
              borderRadius: '20px',
              cursor: 'pointer',
              marginBottom: '20px'
            }}
          >
            ← Volver
          </button>

          <h1 style={{
            fontSize: '42px',
            fontWeight: '900',
            marginBottom: '20px'
          }}>
            {selectedArticle?.title}
          </h1>

          <div style={{
            display: 'flex',
            gap: '20px',
            marginBottom: '25px',
            color: readingMode ? '#666' : '#7A7F8C'
          }}>
            <span>📅 {selectedArticle?.date}</span>
            <span>⏱️ {selectedArticle?.readTime} min de lectura</span>
            <span>👁️ {selectedArticle?.views} vistas</span>
          </div>

          {/* Share Buttons */}
          <div style={{
            display: 'flex',
            gap: '15px',
            marginBottom: '30px'
          }}>
            <button
              onClick={() => handleShare('twitter', selectedArticle)}
              style={{
                padding: '10px 20px',
                background: 'rgba(0, 224, 255, 0.1)',
                border: '1px solid #00E0FF',
                color: '#00E0FF',
                borderRadius: '10px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <Share2 size={16} /> Twitter ({selectedArticle?.shares})
            </button>
            <button
              onClick={() => handleShare('linkedin', selectedArticle)}
              style={{
                padding: '10px 20px',
                background: 'rgba(0, 224, 255, 0.1)',
                border: '1px solid #00E0FF',
                color: '#00E0FF',
                borderRadius: '10px',
                cursor: 'pointer'
              }}
            >
              LinkedIn
            </button>
            <button
              onClick={() => handleShare('whatsapp', selectedArticle)}
              style={{
                padding: '10px 20px',
                background: 'rgba(0, 224, 255, 0.1)',
                border: '1px solid #00E0FF',
                color: '#00E0FF',
                borderRadius: '10px',
                cursor: 'pointer'
              }}
            >
              WhatsApp
            </button>
            <button
              onClick={() => setReadingMode(!readingMode)}
              style={{
                padding: '10px 20px',
                background: 'rgba(0, 224, 255, 0.1)',
                border: '1px solid #00E0FF',
                color: '#00E0FF',
                borderRadius: '10px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <BookOpen size={16} /> {readingMode ? 'Normal' : 'Lectura'}
            </button>
          </div>
        </div>

        {/* Article Content */}
        <div style={{
          fontSize: '18px',
          lineHeight: '1.8',
          marginBottom: '40px',
          background: readingMode ? '#ffffff' : 'rgba(255, 255, 255, 0.02)',
          padding: readingMode ? '40px' : '0',
          borderRadius: readingMode ? '10px' : '0'
        }}>
          <p>{selectedArticle?.content}</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>

        {/* Comments Section */}
        <div style={{
          background: readingMode ? '#ffffff' : 'rgba(255, 255, 255, 0.02)',
          padding: '30px',
          borderRadius: '10px',
          marginTop: '40px'
        }}>
          <h3 style={{
            fontSize: '24px',
            fontWeight: '700',
            marginBottom: '25px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}>
            <MessageCircle size={24} /> Comentarios ({comments[selectedArticle?.id]?.length || 0})
          </h3>

          <div style={{ marginBottom: '30px' }}>
            <textarea
              placeholder="Comparte tu opinión..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              style={{
                width: '100%',
                padding: '15px',
                background: readingMode ? '#f5f5f0' : 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(0, 224, 255, 0.3)',
                borderRadius: '10px',
                color: readingMode ? '#333' : '#ffffff',
                fontSize: '16px',
                minHeight: '100px',
                fontFamily: 'Inter, sans-serif'
              }}
            />
            <button
              onClick={() => addComment(selectedArticle?.id)}
              style={{
                marginTop: '10px',
                padding: '12px 30px',
                background: 'linear-gradient(135deg, #00E0FF, #0099cc)',
                color: '#0A0F2C',
                border: 'none',
                borderRadius: '20px',
                fontWeight: '700',
                cursor: 'pointer'
              }}
            >
              Comentar
            </button>
          </div>

          {comments[selectedArticle?.id]?.map((comment, idx) => (
            <div key={idx} style={{
              background: readingMode ? '#f5f5f0' : 'rgba(255, 255, 255, 0.05)',
              padding: '15px',
              borderRadius: '10px',
              marginBottom: '15px'
            }}>
              <div style={{
                fontWeight: '700',
                marginBottom: '5px',
                color: readingMode ? '#333' : '#00E0FF'
              }}>
                {comment.author} • {comment.date}
              </div>
              <p style={{ margin: 0 }}>{comment.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const AnalyticsDashboard = () => (
    <div style={{
      minHeight: '100vh',
      background: '#0A0F2C',
      padding: '100px 40px 40px'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{
          fontSize: '42px',
          fontWeight: '900',
          marginBottom: '40px',
          color: '#00E0FF'
        }}>
          📊 Analytics Dashboard
        </h1>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '25px'
        }}>
          {[
            { label: 'Visitantes Totales', value: '45,230', trend: '+23%' },
            { label: 'Artículos Publicados', value: '28', trend: '+4' },
            { label: 'Comentarios', value: '1,247', trend: '+156' },
            { label: 'Comparticiones', value: '3,456', trend: '+234%' }
          ].map((stat, i) => (
            <div key={i} style={{
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(0, 224, 255, 0.2)',
              borderRadius: '15px',
              padding: '30px',
              position: 'relative'
            }}>
              <div style={{
                fontSize: '14px',
                color: '#7A7F8C',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                marginBottom: '10px'
              }}>
                {stat.label}
              </div>
              <div style={{
                fontSize: '42px',
                fontWeight: '900',
                color: '#00E0FF',
                marginBottom: '10px'
              }}>
                {stat.value}
              </div>
              <div style={{
                fontSize: '14px',
                color: '#00FF88',
                display: 'flex',
                alignItems: 'center',
                gap: '5px'
              }}>
                <TrendingUp size={16} /> {stat.trend}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div style={{
      fontFamily: "'Inter', sans-serif",
      background: '#0A0F2C',
      color: '#ffffff',
      minHeight: '100vh'
    }}>
      {/* Header */}
      <div style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        background: 'rgba(10, 15, 44, 0.95)',
        backdropFilter: 'blur(20px)',
        zIndex: 100,
        borderBottom: '1px solid rgba(0, 224, 255, 0.2)',
        padding: '20px 40px'
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div
            onClick={() => setCurrentPage('home')}
            style={{
              fontSize: '28px',
              fontWeight: '900',
              cursor: 'pointer',
              letterSpacing: '2px'
            }}
          >
            MOVILIA<span style={{ color: '#00E0FF' }}>X</span>
          </div>

          <div style={{
            display: 'flex',
            gap: '20px',
            alignItems: 'center'
          }}>
            <button
              onClick={() => setCurrentPage('articles')}
              style={{
                background: 'transparent',
                border: 'none',
                color: currentPage === 'articles' ? '#00E0FF' : '#ffffff',
                cursor: 'pointer',
                fontSize: '16px',
                fontWeight: '600'
              }}
            >
              Artículos
            </button>
            <button
              onClick={() => setCurrentPage('analytics')}
              style={{
                background: 'transparent',
                border: 'none',
                color: currentPage === 'analytics' ? '#00E0FF' : '#ffffff',
                cursor: 'pointer',
                fontSize: '16px',
                fontWeight: '600'
              }}
            >
              Analytics
            </button>
            <button
              onClick={() => setDarkMode(!darkMode)}
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                border: 'none',
                color: '#00E0FF',
                cursor: 'pointer',
                padding: '10px 15px',
                borderRadius: '10px'
              }}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Pages */}
      {currentPage === 'home' && <HomePage />}
      {currentPage === 'articles' && <ArticlesPage />}
      {currentPage === 'article' && <ArticleView />}
      {currentPage === 'analytics' && <AnalyticsDashboard />}
    </div>
  );
};

export default MoviliaxV2;
