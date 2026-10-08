import React from 'react';
import { SocialIcons } from './SocialIcons';

export default function FooterSection({ profile, socialLinks }) {
  const currentYear = new Date().getFullYear();

  const getSocialIcon = (name) => {
    switch (name.toLowerCase()) {
      case 'instagram':
        return <SocialIcons.Instagram size={15} />;
      case 'facebook':
        return <SocialIcons.Facebook size={15} />;
      case 'linkedin':
        return <SocialIcons.Linkedin size={15} />;
      case 'twitter':
        return <SocialIcons.Twitter size={15} />;
      case 'youtube':
        return <SocialIcons.Youtube size={15} />;
      case 'pinterest':
        return <SocialIcons.Pinterest size={15} />;
      default:
        return <SocialIcons.Instagram size={15} />;
    }
  };


  return (
    <footer className="vcard-footer" id="footer">
      <div className="footer-social-icons">
        {socialLinks.map((item) => (
          <a
            key={item.name}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon-link"
            aria-label={item.name}
          >
            {getSocialIcon(item.name)}
          </a>
        ))}
      </div>

      <div className="footer-brand-signature">
        <div className="footer-logo-badge">
          <span className="footer-n">N</span>
        </div>
        <div className="footer-titles">
          <span className="footer-company-name">NAVI PROMOTIONS</span>
          <span className="footer-copy-text">© {currentYear} Navi Promotions. All Rights Reserved.</span>
        </div>
      </div>

      <div className="footer-powered">
        <span>Powered by Universal NFC V-Card</span>
      </div>
    </footer>
  );
}
