// Ändra namnet här om du vill.
const NAME = "Andrea";

const STEPS = [
  {
    id: "pepp",
    icon: "🔥",
    title: "Steg 0: Du har tid, och timingen är PERFEKT",
    sub: "Läs det här först. Det tar 1 minut.",
    pep: "Över ett år sedan olyckan? Det är inte för sent. Det är faktiskt precis rätt läge!",
    tasks: [
      { text: "Jag har läst att det inte är för sent", detail: "Enligt försäkringsavtalslagen har du oftast 3 år på dig från att du förstod att du kunde få ersättning (och max 10 år från olyckan). Kolla ändå dina villkor." },
      { text: "Jag har läst att ett år är rätt läge", detail: "Bestående besvär (”medicinsk invaliditet”) bedöms oftast först när skadan har läkt färdigt, ofta runt ett år efter olyckan. Du ligger alltså helt rätt i tid." },
      { text: "Jag lovar att vara snäll mot mig själv", detail: "Ett litet steg i taget. Varje bock är en vinst. 💖" },
    ],
  },
  {
    id: "hitta",
    icon: "🕵️",
    title: "Steg 1: Hitta försäkringen (eller försäkringarna!)",
    sub: "Vilka försäkringar hade du när olyckan hände?",
    pep: "Detektivläge PÅ. Du kan ha FLERA försäkringar som betalar för samma skada!",
    tasks: [
      { text: "Skriv ner datumet för olyckan", detail: "Ungefärligt räcker för att komma igång. Exakt datum finns i journalen från vården (se steg 2)." },
      { text: "Kolla hemförsäkringen", detail: "Logga in hos ditt försäkringsbolag eller titta i försäkringsbrevet. Ingick olycksfall, eller hade du ett olycksfallstillägg?" },
      { text: "Kolla om du hade en egen olycksfallsförsäkring", detail: "Till exempel via bank eller försäkringsbolag. Sök i mejlen på ”olycksfall” och kolla kontoutdragen efter premier." },
      { text: "Kolla facket", detail: "Var du med i ett fackförbund när olyckan hände? Många förbund har en olycksfallsförsäkring som gäller även på fritiden." },
      { text: "Fråga arbetsgivaren eller HR", detail: "Vissa arbetsgivare har en gruppförsäkring som gäller dygnet runt, inte bara på jobbet." },
      { text: "Skriv en lista med alla försäkringar du hittade", detail: "Bolag + telefonnummer/hemsida. Den listan är GULD." },
    ],
    tip: "Hittar du ingen? Ring ditt försäkringsbolag och fråga: ”Hade jag något olycksfallsskydd den [datum]?” De kan kolla åt dig.",
  },
  {
    id: "bevis",
    icon: "📁",
    title: "Steg 2: Samla bevisen",
    sub: "Journal, kvitton och din egen berättelse.",
    pep: "Du bygger din vinnarmapp nu. Varje papper = mer pengar i potten! 💸",
    tasks: [
      { text: "Logga in på 1177 och spara journalen", detail: "Under ”Journalen” hittar du anteckningar och röntgensvar från när du sökte vård. Ta skärmdumpar eller skriv ut. Saknas något kan du begära kopia från vårdgivaren.", link: { href: "https://www.1177.se", label: "Gå till 1177.se" } },
      { text: "Samla kvitton", detail: "Vårdavgifter, medicin, resor till och från vården, skena/ortos. Hittar du inte kvittot kan vården ofta skriva ut en kopia." },
      { text: "Skriv 5 meningar om hur olyckan gick till", detail: "När, var, vad du gjorde och vad som hände. Enkelt och sant. Fanns det någon med? Skriv ner namnet." },
      { text: "Fota handen idag", detail: "Ta bilder ovanifrån och från sidan, med knytnäve och med öppen hand. Fota gärna båda händerna bredvid varandra." },
      { text: "Skriv ner hur knogen påverkar vardagen", detail: "Svårt att greppa? Mindre kraft? Gör det ont, värker det i kyla, stör det sömnen? Allt räknas. Spara listan till läkarbesöket." },
    ],
  },
  {
    id: "anmal",
    icon: "📣",
    title: "Steg 3: Anmäl skadan",
    sub: "Det här är det STORA steget. Och du klarar det.",
    pep: "Det är här magin händer. Det tar ungefär 15 minuter och sedan är bollen hos dem! 🚀",
    tasks: [
      { text: "Öppna bolagets hemsida och leta upp ”Anmäl skada”", detail: "Välj personskada eller olycksfall. Vill du hellre prata? Ring, det funkar lika bra." },
      { text: "Fyll i anmälan med det du samlat i steg 2", detail: "Kopiera gärna mallen nedan och klistra in din berättelse." },
      { text: "Skriv ner skadenumret/ärendenumret", detail: "Spara det i mobilen. Du behöver det varje gång du har kontakt med bolaget." },
      { text: "Har du fler försäkringar? Anmäl till varje bolag", detail: "Samma underlag funkar hos alla." },
    ],
    template: {
      title: "Mall att kopiera eller läsa upp i telefon",
      text: "Hej! Jag vill anmäla en olycksfallsskada.\n\nDen [datum] skadade jag min knoge på fritiden när [kort om vad som hände]. Jag sökte vård på [vårdcentral/akut] den [datum]. Knogen har läkt med en kvarstående skada: den är insjunken, och jag har fortfarande besvär med [grepp/kraft/smärta/rörlighet].\n\nJag vill ansöka om ersättning för vårdkostnader och för bestående besvär (medicinsk invaliditet). Vad behöver ni från mig, och vill ni att jag skickar in ett läkarintyg?",
    },
    tip: "Du behöver inte veta allt perfekt. Bolaget ställer frågor om något saknas. Klart är bättre än perfekt!",
  },
  {
    id: "lakare",
    icon: "🩺",
    title: "Steg 4: Låt en läkare bedöma de bestående besvären",
    sub: "Det är här de STORA pengarna finns.",
    pep: "”Invaliditet” låter läskigt, men det betyder bara bestående besvär. Även en liten procent kan ge pengar! 💰",
    tasks: [
      { text: "Fråga bolaget vilket intyg de vill ha", detail: "”Vill ni ha ett invaliditetsintyg? Vilken blankett ska läkaren fylla i? Ersätter ni kostnaden för intyget?”" },
      { text: "Boka läkartid", detail: "Vårdcentralen, eller en ortoped eller handkirurg om du har remiss. Säg att det gäller ett intyg till försäkringsbolaget." },
      { text: "Ta med listan från steg 2 till läkaren", detail: "Berätta om ALLT: grepp, kraft, smärta, rörlighet och utseende. Tona inte ner besvären!" },
      { text: "Skicka in intyget till bolaget", detail: "Ange ditt skadenummer. Spara en kopia själv." },
    ],
    tip: "Ibland bokar bolaget själva en bedömning hos sin egen läkare. Då är det bara att gå dit med din lista!",
  },
  {
    id: "folj",
    icon: "📬",
    title: "Steg 5: Följ upp och ta emot beslutet",
    sub: "Håll koll, så att ärendet inte fastnar.",
    pep: "Nästan i mål! Nu är du chefen som ser till att de gör sitt jobb. 😎",
    tasks: [
      { text: "Lägg in en påminnelse om 3–4 veckor", detail: "Har du inte hört något då? Ring och fråga hur det går med ditt ärende." },
      { text: "Läs beslutet när det kommer", detail: "Vilka ersättningar fick du? Vilken procent invaliditet blev det? Fråga om något är oklart." },
      { text: "Inte nöjd? Begär omprövning", detail: "Skriv till bolaget och förklara varför du tycker att beslutet blev fel. Det är helt normalt att göra det.", link: { href: "https://www.konsumenternas.se", label: "Gratis hjälp: Konsumenternas försäkringsbyrå" } },
      { text: "Vet att det finns nämnder som kan pröva beslutet gratis", detail: "Till exempel Personförsäkringsnämnden och Allmänna reklamationsnämnden (ARN). Konsumenternas försäkringsbyrå hjälper dig att välja rätt." },
    ],
  },
];

const HYPE = [
  "DU ÄR EN MASKIN! 🤖💪",
  "Knogen darrar av respekt. 👊",
  "Försäkringsbolaget anar inte vad som kommer! 😤",
  "En bock till! Du är OSTOPPBAR. 🚂",
  "Kolla på dig! Ren och skär STJÄRNGLANS. ⭐",
  "Det där var ju hur lätt som helst för dig! 😎",
  "Pengarna hör dig komma. 💸",
  "Legendariskt. Absolut legendariskt. 👑",
  "Du gör det här så bra att jag blir rörd. 🥹",
  "Pang! Ännu ett steg närmare målet! 🎯",
  "Om det fanns OS i att fixa grejer skulle du ta guld. 🥇",
  "Sambon är SÅ stolt över dig just nu. ❤️",
];

const STEP_DONE = [
  "HELT STEG KLART!!! Ta en fika, du har förtjänat den. ☕🍰",
  "BOOM! Ett helt steg avklarat! 💥",
  "Steget är KLART! Du är en ren försäkringsninja. 🥷",
];

const LEVELS = [
  [0, "Nivå 1: Nybörjarnäve"],
  [15, "Nivå 2: Modig knoge"],
  [35, "Nivå 3: Pappersgeni"],
  [55, "Nivå 4: Försäkringsproffs"],
  [75, "Nivå 5: Ostoppbar"],
  [95, "Nivå 6: LEGENDAR 👑"],
];

const STORAGE_KEY = "knoge-progress-v1";

function load() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; } catch { return {}; }
}
function save() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch { /* inget sparande, inga problem */ }
}

let state = load();
const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
const key = (s, i) => `${s}:${i}`;
const totalTasks = STEPS.reduce((n, s) => n + s.tasks.length, 0);

function render() {
  document.getElementById("name").textContent = NAME;
  const main = document.getElementById("steps");
  main.innerHTML = "";

  STEPS.forEach((step, si) => {
    const el = document.createElement("section");
    el.className = "step";
    el.id = `step-${step.id}`;

    const head = document.createElement("button");
    head.className = "step-head";
    head.setAttribute("aria-expanded", "false");
    head.innerHTML = `
      <span class="step-icon" aria-hidden="true">${step.icon}</span>
      <span><p class="step-title"></p><span class="step-sub"></span></span>
      <span class="step-count"></span>
      <span class="chev" aria-hidden="true">▶</span>`;
    head.querySelector(".step-title").textContent = step.title;
    head.querySelector(".step-sub").textContent = step.sub;
    head.addEventListener("click", () => toggle(el, head));

    const body = document.createElement("div");
    body.className = "step-body";

    const pep = document.createElement("p");
    pep.className = "pep";
    pep.textContent = step.pep;
    body.appendChild(pep);

    const ul = document.createElement("ul");
    ul.className = "tasks";
    step.tasks.forEach((t, ti) => {
      const li = document.createElement("li");
      const label = document.createElement("label");
      label.className = "task";
      label.dataset.key = key(step.id, ti);
      const cb = document.createElement("input");
      cb.type = "checkbox";
      cb.checked = !!state[key(step.id, ti)];
      cb.addEventListener("change", () => onCheck(step, ti, cb.checked, label));
      const span = document.createElement("span");
      const txt = document.createElement("span");
      txt.className = "task-text";
      txt.textContent = t.text;
      const det = document.createElement("span");
      det.className = "task-detail";
      det.textContent = t.detail;
      span.append(txt, det);
      if (t.link) {
        const a = document.createElement("a");
        a.href = t.link.href;
        a.target = "_blank";
        a.rel = "noopener";
        a.textContent = t.link.label + " ↗";
        a.className = "task-detail";
        span.appendChild(a);
      }
      label.append(cb, span);
      if (cb.checked) label.classList.add("checked");
      li.appendChild(label);
      ul.appendChild(li);
    });
    body.appendChild(ul);

    if (step.template) {
      const tpl = document.createElement("div");
      tpl.className = "template";
      const title = document.createElement("div");
      title.className = "template-title";
      title.textContent = "📝 " + step.template.title;
      const text = document.createElement("div");
      text.textContent = step.template.text;
      const btn = document.createElement("button");
      btn.className = "btn copy-btn";
      btn.textContent = "Kopiera texten";
      btn.addEventListener("click", async () => {
        try {
          await navigator.clipboard.writeText(step.template.text);
          toast("Kopierat! Klistra in och fyll i hakparenteserna. ✍️");
        } catch {
          toast("Kunde inte kopiera, markera texten och kopiera själv. 🙏");
        }
      });
      tpl.append(title, text, btn);
      body.appendChild(tpl);
    }

    if (step.tip) {
      const tip = document.createElement("p");
      tip.className = "tip";
      tip.textContent = "💡 " + step.tip;
      body.appendChild(tip);
    }

    el.append(head, body);
    main.appendChild(el);
    if (si === firstUnfinishedStep()) { el.classList.add("open"); head.setAttribute("aria-expanded", "true"); }
  });

  updateProgress(false);
}

function toggle(el, head) {
  const open = el.classList.toggle("open");
  head.setAttribute("aria-expanded", String(open));
}

function stepDoneCount(step) {
  return step.tasks.filter((_, i) => state[key(step.id, i)]).length;
}

function firstUnfinishedStep() {
  const i = STEPS.findIndex((s) => stepDoneCount(s) < s.tasks.length);
  return i === -1 ? STEPS.length - 1 : i;
}

function onCheck(step, ti, checked, label) {
  state[key(step.id, ti)] = checked;
  if (!checked) delete state[key(step.id, ti)];
  save();
  label.classList.toggle("checked", checked);

  if (checked) {
    const stepComplete = stepDoneCount(step) === step.tasks.length;
    const rect = label.getBoundingClientRect();
    if (stepComplete) {
      toast(pick(STEP_DONE));
      confetti(220);
      openNextStep(step);
    } else {
      toast(pick(HYPE));
      confetti(60, rect.left + 20, rect.top + 12);
    }
  }
  updateProgress(checked);
}

function openNextStep(step) {
  const i = STEPS.indexOf(step);
  const next = STEPS[i + 1];
  if (!next) return;
  setTimeout(() => {
    const el = document.getElementById(`step-${next.id}`);
    el.classList.add("open");
    el.querySelector(".step-head").setAttribute("aria-expanded", "true");
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, 900);
}

function updateProgress(celebrate) {
  const done = Object.keys(state).length;
  const pct = Math.round((done / totalTasks) * 100);
  document.getElementById("progress-fill").style.width = pct + "%";
  document.getElementById("progressbar").setAttribute("aria-valuenow", pct);
  document.getElementById("percent").textContent = pct + " %";

  const levelEl = document.getElementById("level");
  const level = [...LEVELS].reverse().find(([min]) => pct >= min)[1];
  if (celebrate && levelEl.textContent !== level) {
    setTimeout(() => toast("⬆️ LEVEL UP! " + level), 1600);
  }
  levelEl.textContent = level;

  STEPS.forEach((s) => {
    const el = document.getElementById(`step-${s.id}`);
    const n = stepDoneCount(s);
    el.querySelector(".step-count").textContent = n === s.tasks.length ? "✅" : `${n}/${s.tasks.length}`;
    el.classList.toggle("complete", n === s.tasks.length);
  });

  const finale = document.getElementById("finale");
  const wasHidden = finale.hidden;
  finale.hidden = done < totalTasks;
  if (celebrate && wasHidden && !finale.hidden) {
    setTimeout(() => { confetti(500); finale.scrollIntoView({ behavior: "smooth" }); }, 1200);
  }
}

function tinyStep() {
  for (const step of STEPS) {
    const ti = step.tasks.findIndex((_, i) => !state[key(step.id, i)]);
    if (ti !== -1) {
      const el = document.getElementById(`step-${step.id}`);
      el.classList.add("open");
      el.querySelector(".step-head").setAttribute("aria-expanded", "true");
      const label = el.querySelector(`[data-key="${key(step.id, ti)}"]`);
      label.scrollIntoView({ behavior: "smooth", block: "center" });
      label.classList.remove("highlight");
      void label.offsetWidth;
      label.classList.add("highlight");
      toast("Bara den här. Inget mer. Du fixar det! 🫶");
      return;
    }
  }
  toast("Allt är redan klart, din superhjälte! 🦸‍♀️");
  confetti(200);
}

let toastTimer;
function toast(msg) {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("show"), 2600);
}

// Enkel konfetti utan bibliotek
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");
let pieces = [];
let raf = null;
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function resize() {
  canvas.width = window.innerWidth * devicePixelRatio;
  canvas.height = window.innerHeight * devicePixelRatio;
  ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
}
window.addEventListener("resize", resize);
resize();

function confetti(count, x = window.innerWidth / 2, y = window.innerHeight / 3) {
  if (reducedMotion) return;
  const colors = ["#ff2e93", "#7b2cff", "#ffb800", "#10b981", "#38bdf8", "#ff6b6b"];
  for (let i = 0; i < count; i++) {
    const angle = Math.random() * Math.PI * 2;
    const speed = 4 + Math.random() * 9;
    pieces.push({
      x, y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - 6,
      size: 6 + Math.random() * 7,
      rot: Math.random() * Math.PI,
      vr: (Math.random() - 0.5) * 0.3,
      color: colors[i % colors.length],
      life: 0,
    });
  }
  if (!raf) raf = requestAnimationFrame(tick);
}

function tick() {
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  pieces.forEach((p) => {
    p.vy += 0.25;
    p.vx *= 0.99;
    p.x += p.vx;
    p.y += p.vy;
    p.rot += p.vr;
    p.life++;
    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate(p.rot);
    ctx.fillStyle = p.color;
    ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2);
    ctx.restore();
  });
  pieces = pieces.filter((p) => p.y < window.innerHeight + 40 && p.life < 400);
  raf = pieces.length ? requestAnimationFrame(tick) : null;
  if (!raf) ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
}

document.getElementById("tiny-step").addEventListener("click", tinyStep);
document.getElementById("party").addEventListener("click", () => confetti(400));
document.getElementById("reset").addEventListener("click", () => {
  if (confirm("Vill du verkligen nollställa alla bockar?")) {
    state = {};
    save();
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
});

render();
