import React, { useState } from 'react';
// Solução robusta para remover marca d'água flutuante
// Adicione este código no seu App.jsx ou em um useEffect no componente principal

import { useEffect } from 'react';

// Função para remover marca d'água
const removeWatermark = () => {
  // Remove elementos com position fixed no canto inferior direito
  const selectors = [
    '[style*="position: fixed"][style*="bottom"][style*="right"]',
    '[style*="position:fixed"][style*="bottom"][style*="right"]',
    'div[style*="z-index: 2147483647"]',
    'div[style*="z-index:2147483647"]',
    'a[style*="position: fixed"]',
    'a[style*="position:fixed"]',
  ];

  selectors.forEach(selector => {
    document.querySelectorAll(selector).forEach(el => {
      const style = el.getAttribute('style') || '';
      // Verifica se tem position fixed e está no canto inferior direito
      if (
        style.includes('position') && 
        (style.includes('fixed') || style.includes('absolute')) &&
        style.includes('bottom') &&
        (style.includes('right') || style.includes('z-index'))
      ) {
        el.remove();
      }
    });
  });

  // Remove também por texto comum em marcas d'água
  document.querySelectorAll('a, div, span').forEach(el => {
    const text = el.textContent?.toLowerCase() || '';
    const style = window.getComputedStyle(el);
    
    if (
      style.position === 'fixed' &&
      (text.includes('made with') || 
       text.includes('powered by') || 
       text.includes('created with') ||
       text.includes('built with'))
    ) {
      el.remove();
    }
  });
};

// Hook personalizado para usar no React
export const useRemoveWatermark = () => {
  useEffect(() => {
    // Executa imediatamente
    removeWatermark();

    // Executa após um pequeno delay
    const timeout = setTimeout(removeWatermark, 100);

    // Observa mudanças no DOM
    const observer = new MutationObserver(() => {
      removeWatermark();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['style']
    });

    // Cleanup
    return () => {
      clearTimeout(timeout);
      observer.disconnect();
    };
  }, []);
};

// Versão standalone para usar fora do React
export const initWatermarkRemoval = () => {
  removeWatermark();

  const observer = new MutationObserver(removeWatermark);
  observer.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ['style']
  });

  // Executa periodicamente como backup
  setInterval(removeWatermark, 1000);
};


import Hero from './components/Hero';
import Cards from './components/Cards';
import Bio from './components/Bio';
import QuizContainer from './components/Quiz/QuizContainer';
import Footer from './components/Footer';
import './index.css';

function App() {
    const scrollToQuiz = () => {
        const quizElement = document.getElementById('quiz-section');
        if (quizElement) {
            quizElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="app-container">
            <Hero onStart={scrollToQuiz} />
            <Cards />

            {/* CTA Strip */}
            <section className="cta-strip" style={{
                background: 'linear-gradient(90deg, #1a0b2e 0%, #2d1b4e 100%)',
                padding: '4rem 0',
                textAlign: 'center',
                borderTop: '1px solid rgba(255,255,255,0.1)',
                borderBottom: '1px solid rgba(255,255,255,0.1)'
            }}>
                <div className="container">
                    <h2 style={{ marginBottom: '1rem' }}>Esse diagnóstico é analisado pessoalmente pela Andressa e equipe.</h2>
                    <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem' }}>Responda com calma. Cada resposta conta.</p>
                    <button onClick={scrollToQuiz} className="btn-primary">QUERO RESPONDER AGORA</button>
                </div>
            </section>

            <Bio />

            <div id="quiz-section">
                <QuizContainer />
            </div>

            <Footer />
        </div>
    );
}

export default App;
