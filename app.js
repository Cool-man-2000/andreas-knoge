// Ändra namnet här om du vill.
const NAME = "Andrea";

const STEPS = [
  {
    id: "pepp",
    icon: "🎈",
    title: "Steg 0: Vet du vad? Det är INTE för sent!",
    sub: "Läs det här först. Det tar bara en pytteliten minut ⏱️",
    pep: "Hej gumman! Knogis här 🧸 Har det gått mer än ett år sedan olyckan? Då är det PERFEKT läge! Hurra hurra! 🎉",
    tasks: [
      { text: "Jag har läst att det inte är för sent 🙌", detail: "Det finns en lag som säger att man oftast har 3 hela år på sig från att man förstod att man kunde få pengar (och som mest 10 år från olyckan). Kika ändå i dina villkor, för säkerhets skull! 🧐" },
      { text: "Jag har läst att ett år är precis lagom 🍯", detail: "Försäkringsbolaget vill se hur knogen blev när den har läkt klart, och det brukar vara runt ett år efter olyckan. Du är alltså PRICK i tid, som en liten klocka! ⏰ (De vuxna kallar det ”medicinsk invaliditet”, men det betyder bara besvär som stannar kvar.)" },
      { text: "Jag lovar att vara snäll mot mig själv 💖", detail: "Ett pyttelitet steg i taget. Varje bock ger ett glittrigt klistermärke! ⭐" },
    ],
  },
  {
    id: "hitta",
    icon: "🗺️",
    title: "Steg 1: Skattjakten! Var gömmer sig försäkringen?",
    sub: "Vilka försäkringar hade du när knogen blev ledsen?",
    pep: "Ta på dig detektivhatten! 🕵️‍♀️ Det kan finnas FLERA skatter gömda, och alla kan ge pengar för samma knoge! 💰",
    tasks: [
      { text: "Skriv ner vilken dag olyckan hände 📅", detail: "Ungefär räcker för att börja! Den exakta dagen står i journalen från vården (det kommer i steg 2)." },
      { text: "Titta i hemförsäkringen 🏠", detail: "Logga in hos ditt försäkringsbolag eller titta i försäkringsbrevet. Fanns det olycksfall med, eller ett tillägg som heter olycksfall?" },
      { text: "Kolla om du hade en egen olycksfallsförsäkring 🔍", detail: "Kanske via banken? Sök i mejlen på ordet ”olycksfall” och titta på kontoutdragen. Pengar som drogs varje månad kan vara en försäkring!" },
      { text: "Fråga facket 🤝", detail: "Var du med i ett fackförbund när olyckan hände? Många fack har en olycksfallsförsäkring som gäller på fritiden också. Smart va?" },
      { text: "Fråga jobbet eller HR 💼", detail: "Vissa jobb har en gruppförsäkring som gäller hela dygnet, inte bara på jobbet." },
      { text: "Gör en lista över alla skatter du hittade 📜", detail: "Skriv bolagets namn och telefonnummer eller hemsida. Den listan är rent GULD! 🥇" },
    ],
    tip: "Hittar du ingen skatt? Ingen fara! Ring ditt försäkringsbolag och fråga: ”Hade jag något olycksfallsskydd den [datum]?” Då letar de åt dig. 🔦",
  },
  {
    id: "bevis",
    icon: "🎒",
    title: "Steg 2: Packa skattkistan med bevis",
    sub: "Journal, kvitton och din egen lilla berättelse 📖",
    pep: "Nu fyller vi skattkistan! Varje papper du lägger i = mer pengar i potten! 💸✨",
    tasks: [
      { text: "Logga in på 1177 och spara journalen 🏥", detail: "Under ”Journalen” finns anteckningar och röntgensvar från när du sökte vård. Ta skärmdumpar eller skriv ut. Saknas något? Då kan du be vården om en kopia.", link: { href: "https://www.1177.se", label: "Gå till 1177.se" } },
      { text: "Samla kvitton 🧾", detail: "Vårdavgifter, medicin, resor till och från vården, skena eller ortos. Har kvittot försvunnit? Vården kan ofta skriva ut ett nytt." },
      { text: "Skriv 5 meningar om hur olyckan gick till ✏️", detail: "När, var, vad du gjorde och vad som hände. Enkelt och sant, precis som en liten saga. Var någon med? Skriv ner namnet!" },
      { text: "Ta kort på handen idag 📸", detail: "Fota ovanifrån och från sidan, med knuten hand och med öppen hand. Fota gärna båda händerna bredvid varandra, så syns skillnaden!" },
      { text: "Skriv ner hur knogen stör dig 📝", detail: "Svårt att hålla i saker? Mindre kraft? Gör det ont, värker det när det är kallt, stör det sömnen? ALLT räknas! Spara listan till doktorn." },
    ],
  },
  {
    id: "anmal",
    icon: "📣",
    title: "Steg 3: Berätta för försäkringsbolaget!",
    sub: "Det STORA modiga steget. Du klarar det, hjärtat! 🦁",
    pep: "Nu händer magin! 🪄 Det tar ungefär 15 minuter, och sedan är det bolagets tur att jobba. Puh, vad skönt!",
    tasks: [
      { text: "Gå till bolagets hemsida och hitta ”Anmäl skada” 🖱️", detail: "Välj personskada eller olycksfall. Vill du hellre prata i telefon? Det går lika bra!" },
      { text: "Fyll i anmälan med sakerna från skattkistan 📦", detail: "Kopiera gärna mallen här nedanför och klistra in din berättelse." },
      { text: "Skriv ner skadenumret 🔢", detail: "Spara det i mobilen. Det är som en hemlig kod som du behöver varje gång du pratar med bolaget." },
      { text: "Har du fler försäkringar? Anmäl till alla! 📮", detail: "Samma papper funkar hos alla bolag. Dubbelt så kul!" },
    ],
    template: {
      title: "Mall att kopiera eller läsa upp i telefon (den här är på vuxenspråk, för den ska ju till bolaget 😉)",
      text: "Hej! Jag vill anmäla en olycksfallsskada.\n\nDen [datum] skadade jag min knoge på fritiden när [kort om vad som hände]. Jag sökte vård på [vårdcentral/akut] den [datum]. Knogen har läkt med en kvarstående skada: den är insjunken, och jag har fortfarande besvär med [grepp/kraft/smärta/rörlighet].\n\nJag vill ansöka om ersättning för vårdkostnader och för bestående besvär (medicinsk invaliditet). Vad behöver ni från mig, och vill ni att jag skickar in ett läkarintyg?",
    },
    tip: "Du behöver inte kunna allt perfekt! Bolaget frågar om något fattas. Klart är bättre än perfekt! 🌟",
  },
  {
    id: "lakare",
    icon: "🩺",
    title: "Steg 4: Doktorn tittar på knogen",
    sub: "Det är här de STORA pengarna gömmer sig 💰",
    pep: "”Invaliditet” låter som ett läskigt monster 👹 men det betyder bara besvär som stannar kvar. Även en liten procent kan ge pengar!",
    tasks: [
      { text: "Fråga bolaget vilket intyg de vill ha 📞", detail: "Säg: ”Vill ni ha ett invaliditetsintyg? Vilken blankett ska läkaren fylla i? Betalar ni för intyget?”" },
      { text: "Boka tid hos doktorn 👩‍⚕️", detail: "På vårdcentralen, eller hos en ortoped eller handkirurg om du har remiss. Säg att det gäller ett intyg till försäkringsbolaget." },
      { text: "Ta med listan från skattkistan till doktorn 📋", detail: "Berätta om ALLT: grepp, kraft, ont, hur fingrarna rör sig och hur knogen ser ut. Var inte blygsam nu, gumman!" },
      { text: "Skicka intyget till bolaget ✉️", detail: "Skriv med ditt skadenummer (den hemliga koden!). Spara en kopia själv." },
    ],
    tip: "Ibland bokar bolaget en egen doktor åt dig. Då är det bara att gå dit med din lista, lätt som en plätt! 🥞",
  },
  {
    id: "folj",
    icon: "💌",
    title: "Steg 5: Vänta på brevet med pengarna",
    sub: "Håll lite koll, så att ärendet inte somnar 😴",
    pep: "Nästan framme! Nu är du chefen som ser till att de gör sitt jobb. 😎👑",
    tasks: [
      { text: "Lägg in en påminnelse om 3–4 veckor ⏰", detail: "Har du inte hört något då? Ring och fråga snällt hur det går med ditt ärende." },
      { text: "Läs beslutet när det kommer 📬", detail: "Vad fick du pengar för? Vilken procent blev det? Fråga bolaget om något är krångligt." },
      { text: "Inte nöjd? Be dem titta igen 🔁", detail: "Skriv till bolaget och förklara varför du tycker att det blev fel. Det kallas omprövning och är helt vanligt!", link: { href: "https://www.konsumenternas.se", label: "Gratis hjälp: Konsumenternas försäkringsbyrå" } },
      { text: "Vet att det finns snälla nämnder som kan hjälpa gratis 🛟", detail: "Till exempel Personförsäkringsnämnden och Allmänna reklamationsnämnden (ARN). Konsumenternas försäkringsbyrå hjälper dig att välja rätt." },
    ],
  },
];

const HYPE = [
  "Ooooh, vad DUKTIG du är! 🌟",
  "Titta, ett nytt klistermärke! ⭐ Du är bäst!",
  "Wiiiiie! En bock till! 🎢",
  "Knogis gör en glädjedans! 🧸💃",
  "Du är modigare än ett lejon! 🦁",
  "Bra jobbat, gumman! High five! ✋",
  "Pengarna hör dig komma! 💸🎶",
  "Du glittrar som en enhörning! 🦄✨",
  "Hurra hurra hurra! 🎈🎈🎈",
  "Supersmart! Du är ett riktigt geni! 🧠",
  "Knogen ler för första gången på ett år! 😊👊",
  "Sambon är SÅ himla stolt över dig! ❤️",
  "Du förtjänar en glass för det där! 🍦",
];

const STEP_DONE = [
  "HELA STEGET KLART!!! Nu blir det fika med extra grädde! ☕🍰",
  "BOOM! Ett helt steg! Du är en superhjälte! 🦸‍♀️💥",
  "Steget är KLART! Regnbågen är stolt över dig! 🌈",
];

const GREETINGS = [
  "Hej gumman! Jag heter Knogis 🧸 Vi gör det här tillsammans, en liten bock i taget!",
  "Knogis här! 🧸 Vet du vad? Du är jätteduktig som ens kikar på det här! 💖",
  "Hallå där, superstjärna! 🧸 Ska vi samla några klistermärken idag? ⭐",
];

const LEVELS = [
  [0, "Nivå 1: Liten modig mus 🐭"],
  [15, "Nivå 2: Tapper kanin 🐰"],
  [35, "Nivå 3: Klok uggla 🦉"],
  [55, "Nivå 4: Stark björn 🐻"],
  [75, "Nivå 5: Superhjälte 🦸‍♀️"],
  [95, "Nivå 6: REGNBÅGSDROTTNING 🦄👑"],
];

// Ett klistermärke per ruta, i samma ordning som rutorna.
const STICKERS = ["🦄", "🌈", "⭐", "🍭", "🐶", "🌸", "🍓", "🐱", "🎈", "🦋", "🍩", "🐰", "🌻", "🐼", "🧁", "🐸", "🍉", "🦊", "🌟", "🐳", "🍦", "🐥", "🎀", "🐢", "💎", "👑"];

const FLOATIES = ["⭐", "🌈", "🦄", "💖", "🎈", "✨", "🍭", "🌸", "🦋", "☁️"];

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
const ALL_KEYS = STEPS.flatMap((s) => s.tasks.map((_, i) => key(s.id, i)));
const totalTasks = ALL_KEYS.length;
const doneCount = () => ALL_KEYS.filter((k) => state[k]).length;

// Gör varje bokstav till en egen färg som studsar
const RAINBOW = ["#ff4fa3", "#ff8a1f", "#ffd23f", "#2fd07a", "#3fa9ff", "#9b5cff"];
function rainbowify(el) {
  const text = el.textContent;
  el.setAttribute("aria-label", text);
  el.textContent = "";
  [...text].forEach((ch, i) => {
    const s = document.createElement("span");
    s.setAttribute("aria-hidden", "true");
    if (ch === " ") { s.className = "space"; s.textContent = " "; }
    else {
      s.textContent = ch;
      s.style.color = RAINBOW[i % RAINBOW.length];
      s.style.animationDelay = `${i * 0.08}s`;
    }
    el.appendChild(s);
  });
}

function makeFloaties() {
  const box = document.getElementById("floaties");
  for (let i = 0; i < 18; i++) {
    const s = document.createElement("span");
    s.textContent = FLOATIES[i % FLOATIES.length];
    s.style.left = `${Math.random() * 100}%`;
    s.style.fontSize = `${22 + Math.random() * 30}px`;
    s.style.animationDuration = `${14 + Math.random() * 16}s`;
    s.style.animationDelay = `${-Math.random() * 30}s`;
    box.appendChild(s);
  }
}

function say(msg) {
  const b = document.getElementById("bubble");
  b.textContent = msg;
  b.classList.remove("pop");
  void b.offsetWidth;
  b.classList.add("pop");
}

function renderStickers(newKey) {
  const box = document.getElementById("stickers");
  box.innerHTML = "";
  ALL_KEYS.forEach((k, i) => {
    const s = document.createElement("span");
    s.className = "sticker";
    if (state[k]) {
      s.classList.add("got");
      s.textContent = STICKERS[i % STICKERS.length];
      if (k === newKey) s.classList.add("new");
    } else {
      s.textContent = "?";
    }
    box.appendChild(s);
  });
  const n = doneCount();
  document.getElementById("album-count").textContent =
    n === 0 ? "Inga klistermärken än. Det första väntar på dig! 🥰"
    : n === totalTasks ? `Alla ${totalTasks} klistermärken! FULLT ALBUM! 🎉`
    : `${n} av ${totalTasks} klistermärken. Så fint det börjar bli! 😍`;
}

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
      btn.textContent = "📋 Kopiera texten";
      btn.addEventListener("click", async () => {
        try {
          await navigator.clipboard.writeText(step.template.text);
          toast("Kopierat! Klistra in och fyll i hakparenteserna. ✍️✨");
        } catch {
          toast("Hoppsan, det gick inte! Markera texten och kopiera själv. 🙈");
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

  renderStickers();
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
  const k = key(step.id, ti);
  if (checked) state[k] = true; else delete state[k];
  save();
  label.classList.toggle("checked", checked);
  renderStickers(checked ? k : null);

  if (checked) {
    const stepComplete = stepDoneCount(step) === step.tasks.length;
    const rect = label.getBoundingClientRect();
    const msg = stepComplete ? pick(STEP_DONE) : pick(HYPE);
    toast(msg);
    say(msg);
    if (stepComplete) {
      confetti(260);
      openNextStep(step);
    } else {
      confetti(80, rect.left + 20, rect.top + 12);
    }
  } else {
    say("Ingen fara, gumman! Man får ångra sig. 🧸💕");
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
  const done = doneCount();
  const pct = Math.round((done / totalTasks) * 100);
  document.getElementById("progress-fill").style.width = pct + "%";
  document.getElementById("progressbar").setAttribute("aria-valuenow", pct);
  document.getElementById("percent").textContent = pct + " %";

  const levelEl = document.getElementById("level");
  const level = [...LEVELS].reverse().find(([min]) => pct >= min)[1];
  if (celebrate && levelEl.textContent !== level) {
    setTimeout(() => { toast("⬆️ NY NIVÅ! Nu är du: " + level.replace(/^Nivå \d: /, "")); confetti(150); }, 1600);
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
    setTimeout(() => { confetti(600); finale.scrollIntoView({ behavior: "smooth" }); }, 1200);
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
      toast("Bara den här lilla! Inget mer. Du fixar det, hjärtat! 🫶");
      return;
    }
  }
  toast("Allt är redan klart, din lilla superhjälte! 🦸‍♀️");
  confetti(200);
}

let toastTimer;
function toast(msg) {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("show"), 2800);
}

// Enkel konfetti utan bibliotek, med emojis inblandat
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");
let pieces = [];
let raf = null;
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const CONFETTI_EMOJI = ["⭐", "💖", "🌈", "🦄", "✨", "🎈"];

function resize() {
  canvas.width = window.innerWidth * devicePixelRatio;
  canvas.height = window.innerHeight * devicePixelRatio;
  ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
}
window.addEventListener("resize", resize);
resize();

function confetti(count, x = window.innerWidth / 2, y = window.innerHeight / 3) {
  if (reducedMotion) return;
  for (let i = 0; i < count; i++) {
    const angle = Math.random() * Math.PI * 2;
    const speed = 4 + Math.random() * 9;
    pieces.push({
      x, y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - 6,
      size: 6 + Math.random() * 8,
      rot: Math.random() * Math.PI,
      vr: (Math.random() - 0.5) * 0.3,
      color: RAINBOW[i % RAINBOW.length],
      emoji: Math.random() < 0.25 ? pick(CONFETTI_EMOJI) : null,
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
    if (p.emoji) {
      ctx.font = `${p.size * 2.4}px sans-serif`;
      ctx.fillText(p.emoji, -p.size, p.size);
    } else {
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2);
    }
    ctx.restore();
  });
  pieces = pieces.filter((p) => p.y < window.innerHeight + 40 && p.life < 400);
  raf = pieces.length ? requestAnimationFrame(tick) : null;
  if (!raf) ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
}

document.getElementById("tiny-step").addEventListener("click", tinyStep);
document.getElementById("party").addEventListener("click", () => confetti(400));
document.getElementById("reset").addEventListener("click", () => {
  if (confirm("Vill du verkligen sudda bort alla bockar och klistermärken?")) {
    state = {};
    save();
    render();
    say(pick(GREETINGS));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
});

rainbowify(document.getElementById("title"));
rainbowify(document.getElementById("finale-title"));
makeFloaties();
say(pick(GREETINGS));
render();
