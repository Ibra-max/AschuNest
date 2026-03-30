'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function Contact() {
    const t = useTranslations('contact');
    const [status, setStatus] = useState<'' | 'loading' | 'success' | 'error'>('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('loading');

        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            message: formData.get('message'),
        };

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setStatus('success');
                (e.target as HTMLFormElement).reset();
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <section className="contact-section" id="kontakt-form" style={{ padding: '5rem 2rem', maxWidth: '800px', margin: '0 auto' }}>
            <div className="section__tag" style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                {t('tag')}
            </div>
            <h2 className="contact-section__headline" style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>
                {t('headline')}
            </h2>
            
            <div className="contact-section__form-wrapper">
                {status === 'success' ? (
                    <div className="success-message" style={{ padding: '1.5rem', backgroundColor: 'var(--bg-secondary, #1a1a1a)', border: '1px solid #4ade80', color: '#4ade80', borderRadius: '12px' }}>
                        {t('success')}
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <label htmlFor="name" style={{ color: 'var(--text-primary)' }}>{t('name')}</label>
                            <input 
                                type="text" 
                                id="name" 
                                name="name" 
                                required 
                                style={{ padding: '1rem', borderRadius: '12px', border: '1px solid var(--border-color, #333)', backgroundColor: 'var(--bg-secondary, #0a0a0a)', color: 'var(--text-primary)', outline: 'none' }}
                            />
                        </div>
                        
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <label htmlFor="email" style={{ color: 'var(--text-primary)' }}>{t('email')}</label>
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                required 
                                style={{ padding: '1rem', borderRadius: '12px', border: '1px solid var(--border-color, #333)', backgroundColor: 'var(--bg-secondary, #0a0a0a)', color: 'var(--text-primary)', outline: 'none' }}
                            />
                        </div>
                        
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <label htmlFor="message" style={{ color: 'var(--text-primary)' }}>{t('message')}</label>
                            <textarea 
                                id="message" 
                                name="message" 
                                rows={5} 
                                required 
                                style={{ padding: '1rem', borderRadius: '12px', border: '1px solid var(--border-color, #333)', backgroundColor: 'var(--bg-secondary, #0a0a0a)', color: 'var(--text-primary)', resize: 'vertical', outline: 'none' }}
                            ></textarea>
                        </div>
                        
                        <button 
                            type="submit" 
                            className="btn-primary" 
                            disabled={status === 'loading'}
                            style={{ alignSelf: 'flex-start', marginTop: '0.5rem', opacity: status === 'loading' ? 0.7 : 1, cursor: status === 'loading' ? 'not-allowed' : 'pointer' }}
                        >
                            {status === 'loading' ? t('loading') : t('submit')}
                        </button>
                        
                        {status === 'error' && (
                            <div className="error-message" style={{ padding: '1rem', backgroundColor: '#3f1111', color: '#f87171', borderRadius: '12px', marginTop: '1rem', border: '1px solid #f87171' }}>
                                {t('error')}
                            </div>
                        )}
                    </form>
                )}
            </div>
        </section>
    );
}
