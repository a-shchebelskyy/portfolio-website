import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import github from '../../public/icons/github.png';
import linkedin from '../../public/icons/linkedin.png';
import { Copy, Check } from 'react-feather';
import './../index.css'; // Make sure to import your CSS file

const Footer = () => {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);
  const email = "alexanders823@gmail.com"

  const handleCopy = async () => {
    try {
      // Use the modern asynchronous Clipboard API
      await navigator.clipboard.writeText(email);
      setCopied(true);
      
      // Reset the button text back to original after 2 seconds
      setTimeout(() => {
        setCopied(false);
      }, 5000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div className="footer">
      <div>
        <button className="email-button" onClick={handleCopy} style={{ color: copied ? 'green' : 'black'}}>
          <p>{email}</p>
          {copied ? (
            <Check color="green" size={16} />
          ) : (
            <Copy color="black" size={16} />
          )}
        </button>
      </div>
      <div className="footer-socials">
        <a className="footer-link" href="https://github.com/a-shchebelskyy/" target="_blank">
          GitHub
        </a>
        <p>·</p> 
        <a className="footer-link" href="https://github.com/a-shchebelskyy/" target="_blank">
          LinkedIn
        </a>
      </div>
    </div>
  );
};

export default Footer;