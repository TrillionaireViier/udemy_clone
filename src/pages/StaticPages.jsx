import React from 'react';

const PageTemplate = ({ title }) => (
  <div style={{ padding: '6rem 4rem', minHeight: '60vh', color: '#fff' }}>
    <h1 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: '#66fcf1' }}>{title}</h1>
    <p style={{ fontSize: '1.1rem', color: '#c5c6c7', maxWidth: '800px', lineHeight: '1.8' }}>
      This is the official {title} page for Learnify. We are currently updating our documentation and policies. 
      Please check back later for detailed information regarding our {title.toLowerCase()}.
    </p>
  </div>
);

export const Blog = () => <PageTemplate title="Blog" />;
export const HelpSupport = () => <PageTemplate title="Help and Support" />;
export const Affiliate = () => <PageTemplate title="Affiliate Program" />;
export const Investors = () => <PageTemplate title="Investors" />;
export const Terms = () => <PageTemplate title="Terms of Service" />;
export const PrivacyPolicy = () => <PageTemplate title="Privacy Policy" />;
export const CookieSettings = () => <PageTemplate title="Cookie Settings" />;
export const Sitemap = () => <PageTemplate title="Sitemap" />;
export const Accessibility = () => <PageTemplate title="Accessibility Statement" />;
