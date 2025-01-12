import React from 'react';
import './App.css';
import instagramLogo from './images/instagram.png';
import linkedinLogo from './images/linkedin.png';
import twitterLogo from './images/twitter.png';

function App() {
  return (
    <div className="container">
      <header>
        <h1>Berkay Çarkcı CV</h1>
      </header>

      <section>
        <h2>Kişisel Bilgiler</h2>
        <p><strong>Ad Soyad:</strong> Berkay Çarkcı</p>
        <p><strong>İletişim:</strong> berkaycarkci4@gmail.com</p>
        <p><strong>Telefon:</strong> +90 541 *** ****</p>
      </section>

      <section>
        <h2>Eğitim Bilgileri</h2>
        <ul>
          <li><strong>Üniversite:</strong> Kapadokya Üniversitesi</li>
          <li><strong>Bölüm:</strong> Bilgisayar Programcılığı</li>
          <li><strong>Mezuniyet Yılı:</strong> 2025</li>
        </ul>
      </section>

      <section>
        <h2>İş Deneyimi</h2>
        <ul className="no-bullet-list">
  <li><strong>Şirket:</strong> CARBER</li>
  <li><strong>Pozisyon:</strong> Kurucu</li>
  <li><strong>Çalışma Süresi:</strong> 2020 - 2025</li>
  <li><strong>Açıklama:</strong> Carber şirketi 2020 yılında çeşitli yazılımlar geliştirmek için kurulmuştur.</li>
</ul>

      </section>

      <section>
        <h2>Yetenekler</h2>
        <div className="skills">
          <span>React.js</span>
          <span>Node.js</span>
          <span>HTML & CSS</span>
          <span>JavaScript</span>
        </div>
      </section>

      <section>
        <h2>Hobiler ve İlgi Alanları</h2>
        <ul>
          <li>Vücut Geliştirme</li>
          <li>Teknoloji</li>
          <li>Yüzme</li>
        </ul>
      </section>

      <section>
        <h2>Sosyal Medya</h2>
        <div className="social-media">
          <a href="https://www.linkedin.com/in/berkay-%C3%A7arkc%C4%B1-1a4b33295/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinLogo} alt="LinkedIn" />
          </a>
          <a href="https://www.instagram.com/berkaycarkci/" target="_blank" rel="noopener noreferrer">
            <img src={instagramLogo} alt="Instagram" />
          </a>
          <a href="https://x.com/i/flow/login" target="_blank" rel="noopener noreferrer">
            <img src={twitterLogo} alt="Twitter" />
          </a>
        </div>
      </section>
    </div>
  );
}

export default App;
