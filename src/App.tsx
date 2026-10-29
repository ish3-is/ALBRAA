import { useEffect, useRef, useState } from 'react';
import { ArrowDown, ArrowUpRight, ArrowUp, Globe2, Menu, X, Plus, GraduationCap, ExternalLink } from 'lucide-react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { copy, type Language } from './content/copy';
import { certificates, type Category } from './content/certificates';
import { asset, contactLinks, profile } from './config/profile';
import Magnet from './components/Magnet';
import Monogram from './components/Monogram';
import CertificateDialog from './components/CertificateDialog';
gsap.registerPlugin(useGSAP, ScrollTrigger);

function initialLanguage(): Language {
  const url = new URL(location.href).searchParams.get('lang');
  if (url === 'en' || url === 'ar') return url;
  try { return localStorage.getItem('language') === 'en' ? 'en' : 'ar'; } catch { return 'ar'; }
}
const navIds = ['about', 'learning', 'community', 'contact'];

export default function App() {
  const [lang, setLang] = useState<Language>(initialLanguage);
  const [menu, setMenu] = useState(false);
  const [category, setCategory] = useState<Category>('all');
  const [selected, setSelected] = useState<number | null>(null);
  const [active, setActive] = useState('');
  const container = useRef<HTMLDivElement>(null);
  const t = copy[lang]; const contacts = contactLinks();
  useEffect(() => { ScrollTrigger.refresh(); }, [lang, category]);
  useEffect(() => {
    document.documentElement.lang = lang; document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.title = t.title;
    const url = new URL(location.href); url.searchParams.set('lang', lang); history.replaceState({}, '', url);
    try { localStorage.setItem('language', lang); } catch { /* Storage may be disabled. */ }
    document.querySelector('meta[name="description"]')?.setAttribute('content', t.description);
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', t.title);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', t.description);
    document.querySelector('meta[property="og:locale"]')?.setAttribute('content', lang === 'ar' ? 'ar_SA' : 'en_US');
  }, [lang, t]);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); }), { rootMargin: '-15% 0px -55% 0px' });
    navIds.forEach(id => { const element = document.getElementById(id); if (element) observer.observe(element); });
    return () => observer.disconnect();
  }, []);
  useEffect(() => { if (!menu) return; const close = (e: KeyboardEvent) => { if (e.key === 'Escape') { setMenu(false); document.getElementById('menu-toggle')?.focus(); } }; window.addEventListener('keydown', close); return () => window.removeEventListener('keydown', close); }, [menu]);
  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.from('.hero-reveal', { y: 22, opacity: .2, duration: .95, stagger: .11, ease: 'power3.out', clearProps: 'all' });
      const paths = container.current?.querySelectorAll<SVGPathElement>('.hero-emblem .mark-path');
      paths?.forEach(path => { const length = path.getTotalLength(); gsap.fromTo(path, { strokeDasharray: length, strokeDashoffset: length }, { strokeDashoffset: 0, duration: 1.8, delay: .2, ease: 'power2.inOut', clearProps: 'all' }); });
      gsap.from('.about-statement', { y: 20, opacity: .45, duration: .8, ease: 'power3.out', clearProps: 'all', scrollTrigger: { trigger: '#about', start: 'top 80%', once: true } });
      container.current?.querySelectorAll('.certificate-preview').forEach(el => {
        gsap.from(el, { clipPath: 'inset(0 0 8% 0)', opacity: .5, duration: .7, ease: 'power2.out', clearProps: 'all', scrollTrigger: { trigger: el, start: 'top 92%', once: true } });
      });
    });
    return () => mm.revert();
  }, { scope: container });
  const filtered = certificates.filter(c => category === 'all' || c.category === category);
  const toggleLang = () => { setLang(lang === 'ar' ? 'en' : 'ar'); setMenu(false); };
  return <div ref={container}>
    <a className="skip-link" href="#main">{t.skip}</a>
    <header className="site-header page-width">
      <a href="#top" className="wordmark" aria-label={lang === 'ar' ? 'البراء — الرئيسية' : 'Albaraa — Home'}><Monogram decorative /><span>{lang === 'ar' ? 'البراء العسيري' : 'ALBARAA ALASSIRI'}</span></a>
      <nav id="main-nav" aria-label={lang === 'ar' ? 'التنقل الرئيسي' : 'Main navigation'} className={menu ? 'is-expanded' : ''}>{t.nav.map((label, i) => <a key={navIds[i]} href={`#${navIds[i]}`} aria-current={active === navIds[i] ? 'location' : undefined} onClick={() => setMenu(false)}>{label}</a>)}</nav>
      <div className="header-controls"><button className="language-button" onClick={toggleLang} aria-label={lang === 'ar' ? 'Switch to English' : 'التبديل إلى العربية'}><Globe2 size={16} /><span>{lang === 'ar' ? 'EN' : 'عربي'}</span></button><button id="menu-toggle" className="icon-button mobile-menu" onClick={() => setMenu(!menu)} aria-expanded={menu} aria-controls="main-nav" aria-label={menu ? t.closeMenu : t.menu}>{menu ? <X /> : <Menu />}</button></div>
    </header>
    <main id="main">
      <section id="top" className="hero page-width">
        <div className="hero-main">
          <div className="hero-copy"><h1 className="hero-reveal"><span>{t.name}</span><span>{t.family}<span className="name-dot">.</span></span></h1><p className="hero-role hero-reveal">{t.role}</p><p className="hero-tagline hero-reveal">{t.tagline}<br /><span>{t.taglineEnd}</span></p><p className="hero-description hero-reveal">{t.intro}</p><div className="hero-actions hero-reveal"><Magnet padding={30} maxOffset={5} magnetStrength={8}><a className="primary-button" href="#about">{t.journey}<ArrowDown size={19} /></a></Magnet><a className="text-link" href="#learning">{t.certificates}<ArrowUpRight size={17} /></a></div></div>
          <div className="hero-emblem" aria-hidden="true"><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="emblem-center"><Monogram decorative /></div><div className="orbit-dot dot-one" /><div className="orbit-dot dot-two" /></div>
        </div>
        <div className="hero-bottom"><p>{t.university}<span>{t.year}</span></p><a href="#about">{t.scroll}<ArrowDown size={16} /></a><span className="hero-english" lang={lang === 'ar' ? 'en' : 'ar'} dir={lang === 'ar' ? 'ltr' : 'rtl'}>{lang === 'ar' ? 'Albaraa Yasir Alassiri' : 'البراء ياسر العسيري'}</span></div>
      </section>

      <section id="about" className="about section page-width"><div className="section-heading"><h2>{t.aboutTitle}<br /><span>{t.aboutAccent}</span></h2><span className="heading-symbol" aria-hidden="true"><Plus strokeWidth={1} /></span></div><div className="about-body"><div className="about-statement"><p>{t.about}</p><p className="secondary-text">{t.aboutSecond}</p></div><aside className="education"><div className="education-header"><GraduationCap size={26} /><h3>{t.education}</h3></div><div className="university-logo"><img src={asset('clubs/university.png')} alt={t.university} width="253" height="198" loading="lazy" /></div><h4>{t.university}</h4><p>{t.degree}</p><div className="education-meta"><span>{t.year}</span><span>{t.student}</span></div><p className="academic-note">{t.academic}</p></aside></div></section>

      <section id="learning" className="section learning page-width"><div className="section-heading"><h2>{t.learningTitle}<br /><span>{t.learningAccent}</span></h2><p className="section-intro">{t.learningIntro}</p></div><div className="filter-bar" role="group" aria-label={lang === 'ar' ? 'تصفية الشهادات' : 'Filter certificates'}>{(Object.keys(t.categories) as Category[]).map(key => <button key={key} onClick={() => setCategory(key)} aria-pressed={category === key}>{t.categories[key]}</button>)}</div><p className="sr-only" aria-live="polite">{filtered.length} {t.filtered}</p><div className="certificate-grid">{filtered.map(c => <article className={`certificate-card ${c.category === 'language' ? 'portrait' : ''}`} key={c.id}><button className="certificate-preview" onClick={() => setSelected(certificates.indexOf(c))} aria-label={`${t.view}: ${c.title[lang]}`}><img src={asset(`certificates/thumbs/${c.id}.webp`)} alt={c.title[lang]} loading="lazy" width={c.category === 'language' ? 420 : 680} height={c.category === 'language' ? 580 : 470} /><span className="preview-action"><Plus size={22} /></span><span className="preview-type">{c.kind[lang]}</span></button><div className="certificate-info"><div className="certificate-date"><span>{t.categories[c.category]}</span><time>{c.date[lang]}</time></div><h3>{c.title[lang]}</h3><p>{c.issuer[lang]}</p><p className="certificate-detail">{c.details[lang]}</p><button className="text-link" onClick={() => setSelected(certificates.indexOf(c))}>{t.view}<ArrowUpRight size={17} /></button></div></article>)}</div><p className="gallery-note">{t.note}</p></section>

      <section id="practice" className="section page-width practice"><div className="section-heading"><h2>{t.practiceTitle}<br /><span>{t.practiceAccent}</span></h2><p className="section-intro">{t.practiceIntro}</p></div><div className="practice-grid">{profile.caseStudies.map((project, i) => <article key={project.id}><a className="project-image" href={project.url} target="_blank" rel="noreferrer" aria-label={`${t.practiceVisit}: ${project.title}`}><img src={asset(project.image)} alt={project.title} width="1440" height="900" loading="lazy" /><span><ArrowUpRight size={24} /></span></a><p className="project-meta">{t.practiceLabel}</p><h3 lang="en" dir="ltr">{project.title}</h3><p className="project-description">{t.practiceDescriptions[i]}</p><a className="text-link" href={project.url} target="_blank" rel="noreferrer">{t.practiceVisit}<ExternalLink size={17} /></a></article>)}</div></section>
      <section id="community" className="section page-width community"><div className="section-heading"><h2>{t.communityTitle}<br /><span>{t.communityAccent}</span></h2><p className="section-intro">{t.communityIntro}</p></div><div className="club-grid">{[{ logo: 'digital-tech.png', title: t.clubOne, english: 'Digital Technology Club' }, { logo: 'cybersecurity.jpg', title: t.clubTwo, english: 'Cybersecurity Club' }].map(club => <article key={club.logo} className="club"><div className="club-logo"><img src={asset(`clubs/${club.logo}`)} alt={club.title} loading="lazy" width="180" height="180" /></div><div className="club-info"><p>{t.member} · {t.university}</p><h3>{club.title}</h3>{lang === 'ar' && <span lang="en" dir="ltr">{club.english}</span>}</div><ArrowUpRight className="club-arrow" size={24} aria-hidden="true" /></article>)}</div>
      <div className="madar-membership" aria-labelledby="madar-heading"><div className="madar-logo"><img src={asset('clubs/madar.png')} alt={t.madar} loading="lazy" width="180" height="180" /></div><div><p className="madar-status">{t.member}</p><h3 id="madar-heading">{t.madar}</h3><p>{t.madarDescription}</p></div><a className="text-link" href={profile.community.madarUrl} target="_blank" rel="noreferrer">{t.madarVisit}<ExternalLink size={18} /></a></div></section>
      <section id="interests" className="section page-width interests"><div className="section-heading"><h2>{t.interestsTitle}<br /><span>{t.interestsAccent}</span></h2></div><div className="interests-columns"><div><h3>{t.verified}</h3><ul>{t.learned.map(item => <li key={item}><span className="list-marker solid" />{item}</li>)}</ul></div><div><h3>{t.exploring}</h3><ul>{t.interests.map(item => <li key={item}><span className="list-marker" />{item}</li>)}</ul></div></div></section>

      <section id="contact" className="contact section page-width"><Monogram className="contact-mark" decorative /><div><h2>{t.contactTitle}<br /><span>{t.contactAccent}</span></h2><p>{contacts.length ? t.contactReady : t.contactText}</p>{contacts.length > 0 && <div className="social-links">{contacts.map(c => <a key={c.label} href={c.href} target={c.href.startsWith('mailto:') ? undefined : '_blank'} rel="noreferrer">{c.label === 'Email' && lang === 'ar' ? 'البريد الإلكتروني' : c.label}<ExternalLink size={18} /></a>)}</div>}</div><a className="back-top icon-button" href="#top" aria-label={t.back}><ArrowUp /></a></section>
    </main>
    <footer className="page-width"><p>{t.rights} <span dir="ltr">© {new Date().getFullYear()}</span></p><span>{t.footer}</span></footer>
    {selected !== null && <CertificateDialog index={selected} lang={lang} onChange={setSelected} onClose={() => setSelected(null)} />}
  </div>;
}
