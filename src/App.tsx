import { useEffect, useMemo, useRef, useState, type CSSProperties } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'
import RouteGlobe from './components/RouteGlobe'

gsap.registerPlugin(ScrollTrigger)

const IMG = {
  hero: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDWvM7zHOPr9sHZo8THNFjV52VORUVuCN9jweyrNaUXM7bXJKfa1jqAsz_vEpk6JE2hkM6JXOo-4mLLvinGssWtUC4QloZ5nEsrIlePGaUzGtvuz3aeQGdABLRRAjW3BhGNxykDPepOA8JeEWotZjqEIEwdkAvyghXSJQkGEc8ogR_0usc5TeM0I0sj7y2yLd1vAxW7EEHgqxFJ4l6C6DnrdS2wbANM6Y6n5xls_nzoUg8X2Me7upUEqg',
  air: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAEjO4aCPGY5uObPa97xfE0zK_9yjw0Gzl5hPF6r52Y4rsyl7-VxjiC6WT1haJYXbWGImUDR6qrQKX-5T8UWtpaX8t9uvTCG-JK8s90e1pzDlrt6kUb2e48JlZEJ4pza0JNf2SXqxNAj6L8I1Dd97K_BZtULuvAdvThigJUS1sbT-R9p1aR8WUhSrIMdLqaAFOIGMU2NrSn7SvSiEliHPWdlh74m6GxisWLdXdJ6PvY-FfjSsSNBIfseA',
  sea: 'https://lh3.googleusercontent.com/aida-public/AB6AXuChQyz-qfdPuvWQUHUlPiJx1I2ITpnzsaRDG46h0ncIilBZye_7tnDPV5L4WPuZq5ZsFvwe5E4wYSjxU_s4v4mJ-cAab2AHk_mkF1oxf_Fnmfrk79plH6Fp1S8auQ94j7ArepK4Uh9CmM-JUvWSEQMdp0N9aTXLxNag_1aJiAxYA38lLg2AmOo0R7663atd8IV2430Ljn5qHtHSzTpgQ2q9t_rd9jfqB_GUr0TkczmcI_-EhPEYyxLKFQ',
  land: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDBT5Xbr4RX2-qYyhA2sakj4uT1b8MCiWQiw4Afnuywzz1C8BxlN8dzKVvAjC268xWQYTIvggt1qZraolR_eSiX7tUDRdmv5aknQTGzufcsNdyjaw9pbD-RUi_lsR46Pu2CJRRzsLBzjMY2VzGiZO2Bew1Hvvp83WfSMDGx2Bou-xG3xxGZGo4sDRQDz-Mr6PE8aekS5tOX6f77zatgD67wonjkdfa43Y3yXpNI4C0FMy90w_qGhad9Lg',
  emblem: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAfk91BLSGMHmyrVWrkE2rxv7JqozotXvcmRwq_7OxHJRaJwlvCWK35Orb0mgVqzYQFzLMls3ZZ201E0v_zkmFVcBA0YgMmLLPBupa_2iZy28oARToc3-5LD341GwS75tCho2APDBDKd-TECE6ysQfWVpM5aBCRdcb3SId4lBnxBXnXmllcHOTMDWGGcRDOF796K1WGAuHVajlzvopFbwrlOA-d8BEqUSjjI60QTjze-l4nnHoEWsI5hA'
}

type Lang = 'en' | 'ar'

const copy = {
  en: {
    nav: ['Services','Journey','Qatar Hub','Why ADC','Process','About'],
    kicker: 'Doha · Qatar · Air / Sea / Land',
    title: ['ARTIFICIAL','DOCUMENTS','CLEARANCE'],
    sub: 'From Document to Destination.',
    desc: 'A premium clearance and documentation partner connecting air, sea and land cargo routes through Doha.',
    request: 'Request Clearance',
    explore: 'Explore Services',
    journeyTitle: 'THE SHIPMENT JOURNEY',
    journeyDesc: 'One document. Multiple checkpoints. One controlled path to clearance.',
    routes: 'ONE SHIPMENT. THREE ROUTES. ONE CLEARANCE PARTNER.',
    why: 'BUILT FOR PRECISION & VELOCITY',
    process: 'CLEARANCE PROCESS',
    about: 'SETTING A NEW STANDARD FOR CLEARANCE DOCUMENTATION',
    final: 'READY TO CLEAR YOUR NEXT SHIPMENT?',
    finalDesc: 'Talk directly to ADC in Doha for document and customs-clearance support.'
  },
  ar: {
    nav: ['الخدمات','رحلة الشحنة','محور قطر','لماذا ADC','الخطوات','عن الشركة'],
    kicker: 'الدوحة · قطر · جوًا / بحرًا / برًا',
    title: ['التخليص','والمستندات','ADC'],
    sub: 'من المستند إلى الوجهة.',
    desc: 'شريك احترافي للتخليص والمستندات يربط مسارات الشحن الجوي والبحري والبري عبر الدوحة.',
    request: 'اطلب التخليص',
    explore: 'استكشف الخدمات',
    journeyTitle: 'رحلة الشحنة',
    journeyDesc: 'مستند واحد. نقاط تحقق متعددة. مسار واضح حتى إتمام التخليص.',
    routes: 'شحنة واحدة. ثلاثة مسارات. شريك تخليص واحد.',
    why: 'دقة وسرعة في كل خطوة',
    process: 'خطوات التخليص',
    about: 'معيار احترافي لخدمات المستندات والتخليص',
    final: 'جاهز لتخليص شحنتك القادمة؟',
    finalDesc: 'تواصل مباشرة مع ADC في الدوحة لدعم المستندات والتخليص الجمركي.'
  }
} as const

const serviceData = [
  { no: '01', key: 'AIR', title: 'Air Freight & Express Clearance', desc: 'Airport-focused documentation and clearance presentation for time-sensitive cargo.', image: IMG.air },
  { no: '02', key: 'SEA', title: 'Hamad Port Sea Freight Logistics', desc: 'A visual route for containerized shipments, port documents and sea-freight workflows.', image: IMG.sea },
  { no: '03', key: 'LAND', title: 'Land Transport & Border Clearance', desc: 'Road freight support designed around cross-border movement and document readiness.', image: IMG.land }
]
const steps = ['Received','Review','Verification','Clearance','Route','Cleared']
const pillars = [
  ['SPEED','Fast-moving workflows designed around time-critical shipments.'],
  ['ACCURACY','Clear document structure and verification-led handoffs.'],
  ['SECURITY','Professional handling and controlled information flow.'],
  ['EFFICIENCY','A concise route from request to completion.']
]
const processSteps = ['Request submitted','Documents reviewed','Clearance processing','Shipment cleared','Completed']
const hrefs = ['#services','#journey','#hub','#pillars','#process','#about']

export default function App() {
  const [lang, setLang] = useState<Lang>('en')
  const [menu, setMenu] = useState(false)
  const [progress, setProgress] = useState(0)
  const heroRef = useRef<HTMLElement>(null)
  const journeyRef = useRef<HTMLElement>(null)
  const t = copy[lang]
  const ar = lang === 'ar'
  const current = useMemo(() => Math.min(steps.length - 1, Math.floor(progress * steps.length)), [progress])

  useEffect(() => {
    document.documentElement.dir = ar ? 'rtl' : 'ltr'
    document.documentElement.lang = lang
  }, [ar, lang])

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.05, smoothWheel: true })
    let raf = 0
    const frame = (time: number) => {
      lenis.raf(time)
      raf = requestAnimationFrame(frame)
    }
    raf = requestAnimationFrame(frame)

    const ctx = gsap.context(() => {
      gsap.from('.hero-line', { y: 100, opacity: 0, duration: 1.05, stagger: .12, ease: 'power4.out', delay: .1 })
      gsap.from('.hero-meta', { y: 24, opacity: 0, duration: .8, stagger: .08, delay: .5 })
      gsap.to('.hero-bg', { yPercent: 10, scale: 1.08, ease: 'none', scrollTrigger: { trigger: heroRef.current, start: 'top top', end: 'bottom top', scrub: true } })
      gsap.to('.orbit', { rotate: 35, yPercent: 45, ease: 'none', scrollTrigger: { trigger: heroRef.current, start: 'top top', end: 'bottom top', scrub: true } })
      gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) => {
        gsap.from(el, { y: 48, opacity: 0, duration: .85, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 85%' } })
      })
      if (journeyRef.current) {
        ScrollTrigger.create({
          trigger: journeyRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: true,
          onUpdate: (self) => setProgress(self.progress)
        })
      }
    })
    return () => {
      cancelAnimationFrame(raf)
      lenis.destroy()
      ctx.revert()
      ScrollTrigger.getAll().forEach((item) => item.kill())
    }
  }, [])

  return (
    <main className={ar ? 'arabic' : ''}>
      <header className="nav-shell">
        <a href="#top" className="brand" aria-label="ADC home">
          <span className="brand-mark">ADC</span><span className="dot" /><span className="brand-meta">DOHA · QATAR</span>
        </a>
        <nav className="desktop-nav">
          {t.nav.map((item, i) => <a key={item} href={hrefs[i]}>{item}</a>)}
        </nav>
        <div className="nav-actions">
          <button className="lang" onClick={() => setLang(ar ? 'en' : 'ar')}>{ar ? 'EN' : 'AR'}</button>
          <a className="nav-cta" href="https://wa.me/97466292927" target="_blank" rel="noreferrer">{ar ? 'تواصل' : 'Get Clearance'} ↗</a>
          <button className="menu-btn" onClick={() => setMenu(!menu)} aria-label="Open menu"><span /><span /></button>
        </div>
      </header>

      <div className={'mobile-menu ' + (menu ? 'open' : '')}>
        {t.nav.map((item, i) => <a key={item} href={hrefs[i]} onClick={() => setMenu(false)}>{item}</a>)}
      </div>

      <section className="hero" id="top" ref={heroRef}>
        <img className="hero-bg" src={IMG.hero} alt="ADC air sea and land logistics in Doha" />
        <div className="hero-shade" />
        <div className="grid-overlay" />
        <div className="orbit orbit-a" />
        <div className="orbit orbit-b" />
        <div className="hero-content">
          <div className="hero-meta kicker"><span className="pulse" />{t.kicker}</div>
          <h1>{t.title.map((line, i) => <span key={line} className={'hero-line ' + (i === 1 ? 'outline' : '')}>{line}</span>)}</h1>
          <div className="hero-bottom">
            <div>
              <p className="hero-meta hero-sub">{t.sub}</p>
              <p className="hero-meta hero-desc">{t.desc}</p>
            </div>
            <div className="hero-meta buttons">
              <a className="btn primary" href="https://wa.me/97466292927" target="_blank" rel="noreferrer">{t.request} ↗</a>
              <a className="btn ghost" href="#services">{t.explore} ↓</a>
            </div>
          </div>
        </div>
        <div className="route-rail"><span>AIR</span><i /><span>SEA</span><i /><span>LAND</span></div>
      </section>

      <section className="journey" id="journey" ref={journeyRef}>
        <div className="journey-sticky">
          <div className="head center" data-reveal>
            <span className="eyebrow">01 / CONTROLLED CLEARANCE FLOW</span>
            <h2>{t.journeyTitle}</h2>
            <p>{t.journeyDesc}</p>
          </div>
          <div className="journey-stage">
            <div className="doc-card" style={{ '--p': progress } as CSSProperties}>
              <span>ADC / DOC</span><strong>{String(current + 1).padStart(2, '0')}</strong><small>{steps[current]}</small>
            </div>
            <div className="track"><div className="track-progress" style={{ width: progress * 100 + '%' }} /></div>
            <div className="journey-steps">
              {steps.map((step, i) => <div className={'journey-step ' + (i <= current ? 'active' : '')} key={step}><b>{String(i + 1).padStart(2,'0')}</b><span>{step}</span></div>)}
            </div>
          </div>
          <div className="mode-row"><span className={current >= 4 ? 'on' : ''}>AIR</span><span className={current >= 4 ? 'on' : ''}>SEA</span><span className={current >= 4 ? 'on' : ''}>LAND</span><strong className={current === 5 ? 'on' : ''}>CLEARED ✓</strong></div>
        </div>
      </section>

      <section className="section services" id="services">
        <div className="head split" data-reveal>
          <div><span className="eyebrow">02 / MULTI-MODAL CAPABILITY</span><h2>MULTI-MODAL CLEARANCE MODULES</h2></div>
          <p>Three movement layers. One visual system built around air, sea and land.</p>
        </div>
        <div className="service-stack">
          {serviceData.map((s, i) => (
            <article className={'service-card ' + (i % 2 ? 'reverse' : '')} key={s.key} data-reveal>
              <div className="service-image">
                <img src={s.image} alt={s.title} />
                <div className="scan" />
                <span className="chip">{s.key} / DOHA</span>
              </div>
              <div className="service-copy">
                <span className="service-no">{s.no}</span>
                <span className="eyebrow">{s.key} CLEARANCE</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <div className="tags"><span>DOCUMENTS</span><span>CLEARANCE</span><span>ROUTE CONTROL</span></div>
                <a href="#contact">Explore module ↗</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section hub" id="hub">
        <div className="hub-copy" data-reveal>
          <span className="eyebrow">03 / QATAR CONNECTION POINT</span>
          <h2>{t.routes}</h2>
          <p>ADC’s identity is built around the convergence of cargo routes in Doha. The interface turns that idea into a live visual system.</p>
          <div className="route-list"><span><b>01</b> AIR / Airport route</span><span><b>02</b> SEA / Port route</span><span><b>03</b> LAND / Border route</span></div>
        </div>
        <div className="globe" data-reveal>
          <RouteGlobe />
          <span className="globe-tag air-tag">AIR</span>
          <span className="globe-tag sea-tag">SEA</span>
          <span className="globe-tag land-tag">LAND</span>
          <span className="qatar">DOHA<br /><b>QATAR</b></span>
        </div>
      </section>

      <section className="section pillars" id="pillars">
        <div className="head split" data-reveal>
          <div><span className="eyebrow">04 / WHY ADC</span><h2>{t.why}</h2></div>
          <p>A focused brand story built around operational qualities rather than generic claims.</p>
        </div>
        <div className="pillar-grid">
          {pillars.map((p, i) => <article key={p[0]} data-reveal><span className="pillar-no">0{i + 1}</span><div className="pillar-icon"><i /><i /></div><h3>{p[0]}</h3><p>{p[1]}</p></article>)}
        </div>
      </section>

      <section className="section process" id="process">
        <div className="head center" data-reveal><span className="eyebrow">05 / SIMPLE HANDOFFS</span><h2>{t.process}</h2></div>
        <div className="process-track" data-reveal>
          {processSteps.map((item, i) => <div className="process-step" key={item}><b>{String(i + 1).padStart(2, '0')}</b><span>{item}</span></div>)}
        </div>
      </section>

      <section className="section about" id="about">
        <div className="emblem-wrap" data-reveal><img src={IMG.emblem} alt="ADC emblem" /><span className="ring ring-a" /><span className="ring ring-b" /></div>
        <div className="about-copy" data-reveal>
          <span className="eyebrow">06 / ADC — DOHA, QATAR</span>
          <h2>{t.about}</h2>
          <p>Artificial Documents Clearance presents its services around air, sea and land movement, with a visual identity centered on professionalism, speed, accuracy and safe handling.</p>
          <div className="facts"><span>DOHA · QATAR</span><span>AIR · SEA · LAND</span><span>DOCUMENTS · CLEARANCE</span></div>
        </div>
      </section>

      <section className="final-cta" id="contact">
        <div className="grid-overlay" />
        <div className="cta-copy" data-reveal>
          <span className="eyebrow">07 / DIRECT CONTACT</span>
          <h2>{t.final}</h2>
          <p>{t.finalDesc}</p>
          <div className="buttons"><a className="btn primary" href="https://wa.me/97466292927" target="_blank" rel="noreferrer">WhatsApp +974 66292927 ↗</a><a className="btn ghost" href="tel:+97466292927">Call ADC</a></div>
        </div>
        <div className="request-card" data-reveal>
          <span className="eyebrow">REQUEST / ADC-QA</span>
          <div className="field"><small>ROUTE</small><div><span>AIR</span><span>SEA</span><span>LAND</span></div></div>
          <div className="field"><small>STATUS</small><strong>READY TO START</strong></div>
          <a href="https://wa.me/97466292927" target="_blank" rel="noreferrer">START CLEARANCE REQUEST <b>↗</b></a>
        </div>
      </section>

      <footer>
        <div className="brand"><span className="brand-mark">ADC</span><span className="dot" /><span className="brand-meta">ARTIFICIAL DOCUMENTS CLEARANCE</span></div>
        <p>Doha, Qatar · +974 66292927</p>
        <p>© {new Date().getFullYear()} ADC</p>
      </footer>
    </main>
  )
}