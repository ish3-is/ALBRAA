/** Add verified accounts here. Empty values never produce a link. */
export const profile = {
  name: { ar: 'البراء ياسر العسيري', en: 'Albaraa Yasir Alassiri' },
  email: '',
  linkedin: '',
  github: '',
  community: { madarUrl: 'https://ish3-is.github.io/MDR/' },
  caseStudies: [
    { id: 'incident-console', title: 'Incident Response Investigation Console', url: 'https://ish3-is.github.io/incident-console/', image: 'projects/incident-console.png' },
    { id: 'caseframe', title: 'CASEFRAME · Case 7712', url: 'https://ish3-is.github.io/caseframe-7712/', image: 'projects/caseframe.png' },
  ],
  deployment: {
    username: import.meta.env.VITE_GITHUB_USERNAME || '',
    repository: import.meta.env.VITE_GITHUB_REPOSITORY || '',
    siteUrl: import.meta.env.VITE_SITE_URL || '',
  },
};

export const asset = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;
export function contactLinks() {
  const result: { label: string; href: string }[] = [];
  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(profile.email)) result.push({ label: 'Email', href: `mailto:${profile.email}` });
  for (const [label, url, host] of [['LinkedIn', profile.linkedin, 'linkedin.com'], ['GitHub', profile.github, 'github.com']]) {
    try { const u = new URL(url); if (u.protocol === 'https:' && (u.hostname === host || u.hostname === `www.${host}`)) result.push({ label, href: u.href }); } catch { /* Unavailable accounts stay hidden. */ }
  }
  return result;
}
