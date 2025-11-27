import React from 'react';

const Bio = () => {
    return (
        <section style={{ padding: '5rem 0', background: 'var(--color-bg-secondary)' }}>
            <div className="container">
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '3rem',
                    maxWidth: '900px',
                    margin: '0 auto'
                }}>
                    {/* Image Container */}
                    <div style={{
                        width: '200px',
                        height: '200px',
                        borderRadius: '50%',
                        overflow: 'hidden',
                        border: '3px solid var(--color-primary)',
                        boxShadow: '0 0 30px rgba(212, 175, 55, 0.3)'
                    }}>
                        <img
                            src="/andressa_bio.jpg"
                            alt="Andressa Campos"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </div>

                    <div style={{ textAlign: 'center' }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>
                            Sobre mim
                        </h2>
                        <div style={{
                            width: '50px',
                            height: '3px',
                            background: 'var(--color-primary)',
                            margin: '0 auto 2rem'
                        }}></div>
                        <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
                            <strong style={{ color: '#fff' }}>Andressa Campos</strong> é naturóloga, especialista no inconsciente, mentora e facilitadora de retiros e grupos há 22 anos. Hoje, seu trabalho é inteiramente dedicado ao estudo e à expansão do campo eletromagnético do coração.
                        </p>
                        <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
                            Depois de ajudar milhares de pessoas a saírem da escassez e reconstruírem sua força interna, ela percebeu que algumas alunas/os precisam de um nível de acompanhamento mais próximo — em grupo, mas com atenção individual.
                        </p>
                        <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)' }}>
                            Este diagnóstico existe para identificar quem está no momento certo para dar o salto que o coração já vem pedindo — o salto de frequência que abre novas possibilidades.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Bio;
