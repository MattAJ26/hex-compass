const Qs = [
  { axis: "pol", dir: 1, color: "#6666cc", text: "The government derives its legitimacy entirely from the ongoing consent of the governed - any law the people reject en masse loses its moral force." },
  { axis: "pol", dir: -1, color: "#6666cc", text: "A strong central authority is necessary to maintain order; the state's right to govern should not depend on constant popular approval." },
  { axis: "pol", dir: 1, color: "#6666cc", text: "Individuals have an inalienable right to resist, protest, and disobey laws they consider unjust without requiring collective permission." },
  { axis: "pol", dir: -1, color: "#6666cc", text: "Stability and security require citizens to defer to institutional authority even when they personally disagree with specific decisions." },
  { axis: "pol", dir: 1, color: "#6666cc", text: "Power should be as decentralized as possible - local communities and individuals should make decisions that affect their own lives." },
  { axis: "pol", dir: -1, color: "#6666cc", text: "Effective governance of large, complex societies requires concentrated executive power and clear chains of command." },
  { axis: "pol", dir: 1, color: "#6666cc", text: "Surveillance, data collection, and monitoring of citizens by the state is an unacceptable violation of political freedom." },
  { axis: "eco", dir: 1, color: "#aa8800", text: "People who work harder, take more risk, or develop rarer skills deserve to earn significantly more than those who do not." },
  { axis: "eco", dir: -1, color: "#aa8800", text: "Economic resources should be distributed based on need rather than individual productivity or market contribution." },
  { axis: "eco", dir: 1, color: "#aa8800", text: "Free markets, left largely unregulated, are the most efficient and fair mechanism for allocating goods and services." },
  { axis: "eco", dir: -1, color: "#aa8800", text: "Unchecked markets produce unjust concentrations of wealth - significant state intervention in the economy is necessary." },
  { axis: "eco", dir: 1, color: "#aa8800", text: "Inheritance, investment returns, and accumulated capital represent legitimate rewards that should not be heavily taxed or redistributed." },
  { axis: "eco", dir: -1, color: "#aa8800", text: "Extreme inequality is a social harm - no one should prosper enormously while others lack basic necessities." },
  { axis: "eco", dir: 1, color: "#aa8800", text: "Entrepreneurship and the profit motive are the primary drivers of innovation and should be maximally protected." },
  { axis: "soc", dir: 1, color: "#7744bb", text: "Society functions best when there are clear social roles, recognized hierarchies of expertise, and respected chains of authority." },
  { axis: "soc", dir: -1, color: "#7744bb", text: "No person is inherently superior to another - all social hierarchies based on birth, class, or status are illegitimate." },
  { axis: "soc", dir: 1, color: "#7744bb", text: "Cultural and social traditions that have stood the test of time deserve to be preserved and respected, even if their origins are imperfect." },
  { axis: "soc", dir: -1, color: "#7744bb", text: "Established social norms and hierarchies often just entrench the interests of those already at the top and should be dismantled." },
  { axis: "soc", dir: 1, color: "#7744bb", text: "A functioning society requires that most people share a common moral framework, even if that limits some individual expression." },
  { axis: "soc", dir: -1, color: "#7744bb", text: "Social order should emerge from voluntary cooperation between equals, not from imposed hierarchy or moral authority." },
  { axis: "soc", dir: 1, color: "#7744bb", text: "Children benefit most when raised within clear authority structures - family, community, and tradition - rather than being given radical freedom to self-define." }
];

const ARCHETYPES = [
  {
    name: "Pure Libertarian",
    pol: [6, 10], eco: [6, 10], soc: [-4, 4],
    color: "#5599ff",
    tagline: "\"The individual is sovereign. The state is the problem.\"",
    body: "You believe that political and economic freedom are inseparable and supreme. The state should be minimized in all its forms - neither your wallet nor your life choices are its business. You likely see taxation as coercion, regulation as control, and most government programs as well-intentioned failures at best, power grabs at worst. Your north star is the consenting individual, not the collective.",
    traits: ["Individual sovereignty", "Free markets", "Anti-regulation", "Civil liberties", "Minimal state"],
    comparisons: "Thinkers you may resonate with: <strong>Milton Friedman</strong>, <strong>Friedrich Hayek</strong>, <strong>John Stuart Mill</strong>. You'd find common ground with classical liberals and anarcho-capitalists, though you sit between them - freer than the former, more pragmatic than the latter."
  },
  {
    name: "Anarcho-Capitalist",
    pol: [6, 10], eco: [7, 10], soc: [-2, 6],
    color: "#ffcc00",
    tagline: "\"Abolish the state. Keep the market.\"",
    body: "You push libertarianism to its logical endpoint: no state at all, but fully free markets. You believe private property, voluntary contracts, and competitive markets can replace every function government currently performs - from courts to roads to security. Coercion is the only wrong; everything consensual is permissible. You're skeptical of democracy itself as a system that legitimizes majority coercion.",
    traits: ["Stateless markets", "Private law", "Voluntaryism", "Property rights", "Anti-democracy"],
    comparisons: "Thinkers in your tradition: <strong>Murray Rothbard</strong>, <strong>Hans-Hermann Hoppe</strong>, <strong>David Friedman</strong>. You share vocabulary with libertarians but reject their willingness to engage with electoral politics."
  },
  {
    name: "Classical Liberal",
    pol: [4, 10], eco: [3, 9], soc: [-3, 4],
    color: "#88aaff",
    tagline: "\"Rule of law, not of men.\"",
    body: "You hold the founding philosophy of constitutional democracy: individuals have natural rights, governments exist to protect them, and no ruler is above the law. You believe in free markets tempered by the rule of law, civil liberties as near-absolutes, and democratic accountability as a check on power. You're suspicious of both unchecked state power and mob democracy - the constitution matters.",
    traits: ["Constitutional limits", "Civil liberties", "Rule of law", "Free enterprise", "Separation of powers"],
    comparisons: "Thinkers in your tradition: <strong>John Locke</strong>, <strong>Adam Smith</strong>, <strong>Montesquieu</strong>, <strong>Madison</strong>. The intellectual ancestor of most modern center-right and classical liberal parties."
  },
  {
    name: "Libertarian Conservative",
    pol: [3, 8], eco: [5, 10], soc: [2, 8],
    color: "#aaddaa",
    tagline: "\"Free markets and traditional values - they're not contradictory.\"",
    body: "You combine economic liberty with social traditionalism. You want government out of your business and your paycheck, but you also believe that strong families, cultural continuity, and community norms are what make freedom sustainable. You're not authoritarian - you don't want the state enforcing morality - but you think civil society's traditional structures are worth defending.",
    traits: ["Low taxes", "Limited government", "Cultural tradition", "Free enterprise", "Local community"],
    comparisons: "You'd recognize yourself in <strong>Ronald Reagan</strong>'s rhetoric, <strong>Edmund Burke</strong>'s philosophy, and modern fusionist conservatism. The tension in your worldview - between individual freedom and communal tradition - is one conservatism has never fully resolved."
  },
  {
    name: "Meritocrat",
    pol: [-3, 5], eco: [6, 10], soc: [2, 8],
    color: "#ffdd55",
    tagline: "\"Reward effort and talent. Let outcomes differ.\"",
    body: "You believe the fairest society is one where your position reflects your ability and effort, not your birth or connections. Markets are the best meritocracy we have - they route resources to whoever serves others most effectively. You accept that outcomes will be unequal, even dramatically so, because the alternative - enforced equality - punishes excellence. Social hierarchies, when based on genuine competence, are legitimate and functional.",
    traits: ["Performance-based reward", "Market efficiency", "Competence hierarchy", "Anti-redistribution", "Upward mobility"],
    comparisons: "You share assumptions with <strong>technocrats</strong>, <strong>neoliberals</strong>, and many in the startup/Silicon Valley culture. Your implicit faith in the market's ability to identify talent is contested by those who note that markets reward existing advantage as much as genuine merit."
  },
  {
    name: "Technocratic Authoritarian",
    pol: [-6, -2], eco: [5, 10], soc: [3, 9],
    color: "#6699cc",
    tagline: "\"Experts should govern. Sentiment should not.\"",
    body: "You believe that complex modern societies are too important to be managed by popular vote. Governance should be in the hands of the most capable - trained economists, scientists, administrators - insulated from electoral pressures that reward demagoguery over competence. Markets are efficient; democracy is not. You're not hostile to hierarchy - you think it's inevitable, so it should at least be based on expertise.",
    traits: ["Expert governance", "Political stability", "Market economics", "Meritocratic hierarchy", "Depoliticization"],
    comparisons: "The model states you're drawn to: <strong>Singapore</strong>, <strong>UAE</strong>, early <strong>EU technocracy</strong>. Thinkers: <strong>Lee Kuan Yew</strong>, aspects of <strong>Plato's Republic</strong>. Critics argue that 'expertise' is never politically neutral."
  },
  {
    name: "Authoritarian Nationalist",
    pol: [-10, -4], eco: [0, 7], soc: [5, 10],
    color: "#cc4444",
    tagline: "\"Order, nation, and strength above all.\"",
    body: "You believe a strong state is not a threat to the people - it is the people's instrument, at its most powerful. National unity, cultural continuity, and firm leadership are the preconditions for any other good. You see liberal individualism as a corrosive force that atomizes society and leaves it vulnerable. The collective - the nation, the community - is real; the abstract 'individual' is a liberal fiction.",
    traits: ["National unity", "Strong leadership", "Cultural preservation", "Social order", "State power"],
    comparisons: "This tradition includes <strong>Bismarckian nationalism</strong>, various 20th-century authoritarian regimes, and contemporary national-conservative movements. The line between here and fascism is real but contested."
  },
  {
    name: "Fascist / Authoritarian Right",
    pol: [-10, -6], eco: [0, 7], soc: [7, 10],
    color: "#992222",
    tagline: "\"The state is the nation. The nation is everything.\"",
    body: "You place maximal value on collective national identity, strong centralized leadership, and rigid social hierarchy - and you're willing to use state power aggressively to enforce all three. Individual rights are real only insofar as they serve the national project. You likely believe that the current liberal order is decadent, weak, and hostile to genuine human community.",
    traits: ["Ultranationalism", "Leader principle", "Racial/cultural hierarchy", "State supremacy", "Anti-liberalism"],
    comparisons: "This is the tradition of 20th-century fascism - <strong>Mussolini</strong>, <strong>Franco</strong>, and their successors. It is worth noting clearly that this quadrant's political tradition produced the worst atrocities of the modern era."
  },
  {
    name: "Totalitarian",
    pol: [-10, -6], eco: [-10, -4], soc: [4, 10],
    color: "#440000",
    tagline: "\"The state controls everything. That is the point.\"",
    body: "You land at the most extreme point of centralization across all three axes simultaneously. Political power is concentrated absolutely, the economy is fully state-directed, and social hierarchy is enforced from above. This is the logical extreme of the view that collective order requires total coordination - historically realized in Stalinist USSR, Nazi Germany, and Maoist China.",
    traits: ["Total state control", "Planned economy", "Enforced hierarchy", "No dissent", "Collective supremacy"],
    comparisons: "This position has no contemporary defenders who use the label, but it describes historical regimes that killed tens of millions. Understanding it matters precisely because it emerged from ideologies that began with more moderate premises."
  },
  {
    name: "Authoritarian Collectivist",
    pol: [-10, -5], eco: [-7, 0], soc: [3, 10],
    color: "#553388",
    tagline: "\"The state plans. The state leads. The state is the people.\"",
    body: "You believe state authority and economic planning are legitimate tools for achieving collective goals, and you're skeptical of liberal freedoms that you see as serving mainly the already-powerful. A strong state can build industry, reduce poverty, and protect national sovereignty in ways markets cannot. Social hierarchy - whether of party, class, or nation - is a reality to be organized, not denied.",
    traits: ["Central planning", "One-party governance", "State industry", "Collectivism", "Anti-liberalism"],
    comparisons: "Historically: <strong>Soviet Union</strong>, <strong>Maoist China</strong>, <strong>Ba'athism</strong>. Contemporary echoes in various nationalist-authoritarian states. The genuine tension here is between the stated goal (collective welfare) and the historical record (concentrated power)."
  },
  {
    name: "Marxist-Leninist",
    pol: [-8, -3], eco: [-10, -5], soc: [-2, 5],
    color: "#cc2222",
    tagline: "\"The vanguard leads the workers to liberation.\"",
    body: "You believe capitalism is the root of political and social unfreedom, and that a disciplined revolutionary party must seize state power to dismantle it. Economic centralization is the means; classlessness is the end. You're willing to accept concentrated political authority as a transitional necessity - the 'dictatorship of the proletariat' - on the way to a stateless communist society that, historically, never arrived.",
    traits: ["Vanguard party", "State ownership", "Class struggle", "Revolutionary change", "Planned economy"],
    comparisons: "Thinkers: <strong>Marx</strong>, <strong>Lenin</strong>, <strong>Gramsci</strong>. The internal tension: the 'transitional state' became permanent in every historical case. Contemporary Marxists debate whether this was a betrayal of the theory or an inherent consequence of it."
  },
  {
    name: "Social Democrat",
    pol: [2, 8], eco: [-8, -2], soc: [-4, 4],
    color: "#7777dd",
    tagline: "\"Economic equality through democratic means.\"",
    body: "You believe capitalism generates prosperity but distributes it unjustly, and that democratic politics is the legitimate tool to correct this. Strong unions, progressive taxation, public services, and a robust welfare state - all achieved through elections, not revolution. You reject both unregulated capitalism and authoritarian socialism. Political freedom and economic fairness are both non-negotiable.",
    traits: ["Welfare state", "Progressive taxation", "Workers' rights", "Democratic process", "Public services"],
    comparisons: "The tradition of <strong>Attlee</strong>, <strong>Willy Brandt</strong>, the Nordic model. The perennial tension: can democratic majorities sustain redistribution against the lobbying power of concentrated capital?"
  },
  {
    name: "Progressive",
    pol: [3, 9], eco: [-5, 1], soc: [-8, -2],
    color: "#9966cc",
    tagline: "\"Dismantle every hierarchy. Build from below.\"",
    body: "You want political freedom, economic redistribution, and the active dismantling of social hierarchies - racial, gender, class-based, and cultural. You don't just want the state to leave people alone; you want it to actively correct historical inequalities. Social norms that have entrenched dominance need to be challenged and replaced with genuine equality of status and recognition.",
    traits: ["Anti-hierarchy", "Social justice", "Redistribution", "Identity equality", "Institutional reform"],
    comparisons: "Contemporary progressivism draws from <strong>critical theory</strong>, <strong>intersectionality</strong>, and the New Left tradition. The tension: between using state power to dismantle hierarchy (requiring institutional authority) and a deep skepticism of all authority."
  },
  {
    name: "Anarcho-Communist",
    pol: [6, 10], eco: [-10, -5], soc: [-10, -4],
    color: "#cc4488",
    tagline: "\"No state. No class. No masters.\"",
    body: "You reject all three forms of centralized power simultaneously. No government, no capitalist ownership, no social hierarchy. You believe that voluntary, horizontal collective organization can replace all of these - that people, freed from coercion, will cooperate naturally and justly. Property is theft; the state is violence; hierarchy is domination. All three must go together.",
    traits: ["Stateless society", "Collective ownership", "Anti-hierarchy", "Voluntary cooperation", "Revolutionary"],
    comparisons: "Thinkers: <strong>Kropotkin</strong>, <strong>Bakunin</strong>, <strong>Emma Goldman</strong>. The challenge your critics raise: how does a stateless, classless society defend itself against those who choose not to cooperate, or against external states that do not share your values?"
  },
  {
    name: "Anarchist",
    pol: [7, 10], eco: [-4, 4], soc: [-10, -5],
    color: "#aaaaaa",
    tagline: "\"No gods, no masters - and no social pecking order.\"",
    body: "Your primary commitments are to political freedom and the abolition of social hierarchy. You don't necessarily have strong views on economic organization - you might be open to markets, mutual aid, or commons - but you are certain that no one has the right to rule over others, whether that authority comes from a state, a church, a class system, or a culture. Voluntary association is the only legitimate form of human organization.",
    traits: ["Anti-statism", "Anti-hierarchy", "Voluntary association", "Radical equality", "Political freedom"],
    comparisons: "The anarchist tradition is broad: <strong>Proudhon</strong>, <strong>Tolstoy</strong>, <strong>Chomsky</strong>. You may lean toward anarcho-communism, mutualism, or something else depending on your economic views - this compass captures your political and social commitments most strongly."
  },
  {
    name: "Communitarian",
    pol: [-1, 5], eco: [-3, 4], soc: [4, 10],
    color: "#ddaa44",
    tagline: "\"We before me. The community is the unit that matters.\"",
    body: "You believe that the hyper-individualism of liberal modernity has produced isolated, atomized people who've lost the social fabric that makes life meaningful. Community, tradition, shared identity, and mutual obligation are not constraints on freedom - they are its preconditions. You're not necessarily authoritarian politically or socialist economically, but you resist the reduction of all human relationships to markets or individual rights.",
    traits: ["Community bonds", "Shared identity", "Tradition", "Mutual obligation", "Social cohesion"],
    comparisons: "Thinkers: <strong>Amitai Etzioni</strong>, <strong>Alasdair MacIntyre</strong>, <strong>Michael Sandel</strong>. You'll find yourself agreeing with communitarians from both left (social solidarity) and right (cultural tradition), which makes this a politically awkward position."
  },
  {
    name: "Centrist",
    pol: [-3, 3], eco: [-3, 3], soc: [-3, 3],
    color: "#888888",
    tagline: "\"The truth is usually somewhere in the middle.\"",
    body: "You don't land strongly on any axis - which means either that you're genuinely moderate across all three dimensions, or that you hold views that pull in different directions and cancel out. Centrism can be a principled commitment to pragmatism and compromise, or it can reflect an absence of strong conviction. Either way, you're unlikely to be mobilized by extreme ideologies, and you probably believe that most political problems have workable solutions that don't require ideological purity.",
    traits: ["Pragmatism", "Compromise", "Institutional stability", "Mixed economy", "Moderate reform"],
    comparisons: "Centrism is less a tradition than a position. You may find yourself agreeing with <strong>technocrats</strong>, <strong>moderate liberals</strong>, <strong>one-nation conservatives</strong>, or <strong>third-way social democrats</strong> depending on the issue. The risk of centrism is mistaking the midpoint between two positions for the correct one."
  },
  {
    name: "Neoliberal",
    pol: [1, 6], eco: [5, 10], soc: [-2, 5],
    color: "#66aacc",
    tagline: "\"Open markets, open societies, strong institutions.\"",
    body: "You believe that free trade, market competition, and democratic governance are mutually reinforcing goods that have lifted billions out of poverty and produced the most peaceful era in human history. You're not ideologically pure - you accept regulation where markets genuinely fail - but your default is to trust markets and distrust political intervention in economics. You're socially moderate and internationalist.",
    traits: ["Free trade", "Market economics", "Democratic governance", "Internationalism", "Technocratic pragmatism"],
    comparisons: "The dominant ideology of the post-Cold War order: <strong>Blair</strong>, <strong>Clinton</strong>, <strong>Macron</strong>, the <strong>Washington Consensus</strong>. Critics from left and right argue that neoliberalism delivered growth to capital but not to labor, and that its political consensus is now collapsing."
  },
  {
    name: "Populist Right",
    pol: [-2, 5], eco: [-1, 6], soc: [5, 10],
    color: "#cc6633",
    tagline: "\"The real people against the corrupt elite - and against outsiders.\"",
    body: "You believe the nation's authentic people have been betrayed by cosmopolitan elites who prioritize globalism, diversity, and their own power over the cultural and economic interests of ordinary people. Strong social hierarchy - national identity, traditional family structures, defined roles - gives society the cohesion the elites have dissolved. You may be skeptical of both big government and big corporations, but you're certain about who the enemy is.",
    traits: ["Nationalism", "Anti-elitism", "Cultural tradition", "Populist economics", "Anti-immigration"],
    comparisons: "Contemporary examples: <strong>Trump</strong>, <strong>Orban</strong>, <strong>Le Pen</strong>, <strong>Meloni</strong>. The political science literature debates whether this is a coherent ideology or an opportunistic style. The social hierarchy component distinguishes right populism from left populism most clearly."
  },
  {
    name: "Populist Left",
    pol: [1, 6], eco: [-7, -1], soc: [-6, 0],
    color: "#dd6688",
    tagline: "\"The real people against the billionaire class.\"",
    body: "You believe economic and social power has been illegitimately concentrated in the hands of the wealthy few, and that ordinary people - the 99% - need to take it back through democratic political action. You're anti-hierarchy socially, skeptical of establishment institutions, and strongly redistributionist economically. Unlike the right populist, your 'enemy' is economic, not cultural - you're more likely to blame Wall Street than immigrants.",
    traits: ["Anti-oligarchy", "Redistribution", "Worker power", "Anti-establishment", "Social equality"],
    comparisons: "Contemporary examples: <strong>Bernie Sanders</strong>, <strong>Corbyn</strong>, <strong>Podemos</strong>, <strong>Melenchon</strong>. Thinkers: <strong>Chantal Mouffe</strong>, <strong>Ernesto Laclau</strong>. The tension: between using democratic state power to redistribute (which requires institutional trust) and deep suspicion of institutions."
  }
];

const axisNames = { pol: "Political", eco: "Economic", soc: "Social" };
const likertLabels = ["Strongly agree", "Agree", "Neutral", "Disagree", "Strongly disagree"];
const likertScores = [2, 1, 0, -1, -2];

let answers = new Array(Qs.length).fill(null);
let cur = 0;
let lastDraw = null;
let exploreArchIndex = null;

function show(id) {
  document.querySelectorAll(".screen").forEach((screen) => screen.classList.remove("active"));
  const target = document.getElementById(id);
  if (target) {
    target.classList.add("active");
  }
}

function startQuiz() {
  show("s-quiz");
  renderQ(0);
}

function renderQ(i) {
  cur = i;
  const q = Qs[i];
  const progress = document.getElementById("q-prog");
  const pct = document.getElementById("q-pct");
  const back = document.getElementById("btn-back");
  const next = document.getElementById("btn-next");
  const wrap = document.getElementById("q-wrap");

  progress.textContent = `Question ${i + 1} of ${Qs.length}`;
  pct.textContent = `${Math.round((i / Qs.length) * 100)}% done`;
  back.style.display = i > 0 ? "" : "none";
  next.textContent = i === Qs.length - 1 ? "See my result" : "Next";

  let html = `<div class="q-card"><div class="q-axis" style="color:${q.color}">${axisNames[q.axis]} axis</div><div class="q-text">${q.text}</div><div class="likert">`;
  likertLabels.forEach((lbl, k) => {
    const score = likertScores[k];
    const selected = answers[i] === score;
    const selectedClass = selected ? "sel" : "";
    const selectedStyle = selected ? ` style="background:${q.color};border-color:${q.color};color:#fff"` : "";
    html += `<button class="${selectedClass}"${selectedStyle} data-index="${i}" data-score="${score}" data-color="${q.color}">${lbl}</button>`;
  });
  html += "</div></div>";
  wrap.innerHTML = html;
}

function pick(i, score, color, buttonElement) {
  answers[i] = score;
  document.querySelectorAll(".likert button").forEach((button) => {
    button.classList.remove("sel");
    button.removeAttribute("style");
  });

  buttonElement.classList.add("sel");
  buttonElement.style.background = color;
  buttonElement.style.borderColor = color;
  buttonElement.style.color = "#fff";
}

function nextQ() {
  if (answers[cur] === null) {
    const card = document.querySelector(".q-card");
    if (card) {
      card.style.outline = "1.5px solid #E24B4A";
      setTimeout(() => {
        card.style.outline = "";
      }, 700);
    }
    return;
  }

  if (cur === Qs.length - 1) {
    showResult();
    return;
  }

  renderQ(cur + 1);
}

function prevQ() {
  if (cur > 0) {
    renderQ(cur - 1);
  }
}

function calcScores() {
  const sums = { pol: 0, eco: 0, soc: 0 };
  const counts = { pol: 0, eco: 0, soc: 0 };

  Qs.forEach((q, i) => {
    if (answers[i] !== null) {
      sums[q.axis] += answers[i] * q.dir;
      counts[q.axis] += 1;
    }
  });

  const normalize = (sum, count) => Math.max(-10, Math.min(10, (sum / count) * 10 / 4 * 2));
  return {
    pol: normalize(sums.pol, counts.pol || 1),
    eco: normalize(sums.eco, counts.eco || 1),
    soc: normalize(sums.soc, counts.soc || 1)
  };
}

function matchArch(p, e, s) {
  const inRange = (v, r) => v >= r[0] && v <= r[1];
  const score = (v, r) => 10 - Math.abs(v - (r[0] + r[1]) / 2);

  let best = null;
  let bestScore = -Infinity;
  for (const a of ARCHETYPES) {
    if (inRange(p, a.pol) && inRange(e, a.eco) && inRange(s, a.soc)) {
      const total = score(p, a.pol) + score(e, a.eco) + score(s, a.soc);
      if (total > bestScore) {
        bestScore = total;
        best = a;
      }
    }
  }

  if (!best) {
    const clamp = (v, r) => Math.max(r[0], Math.min(r[1], v));
    let minDist = Infinity;
    for (const a of ARCHETYPES) {
      const d = Math.hypot(p - clamp(p, a.pol), e - clamp(e, a.eco), s - clamp(s, a.soc));
      if (d < minDist) {
        minDist = d;
        best = a;
      }
    }
  }

  return best;
}

function showResult() {
  show("s-result");
  const scores = calcScores();
  const arch = matchArch(scores.pol, scores.eco, scores.soc);

  const dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const bg = dark ? `${arch.color}22` : `${arch.color}11`;
  const border = arch.color;
  const traitsHtml = arch.traits
    .map((t) => `<span class="trait-pill" style="background:${arch.color}22;color:${arch.color};border-color:${arch.color}55">${t}</span>`)
    .join("");

  document.getElementById("archetype-display").innerHTML = `
    <div class="archetype-card" style="background:${bg};border-left-color:${border}">
      <h3 style="color:${arch.color}">${arch.name}</h3>
      <div class="tagline" style="color:${arch.color}">${arch.tagline}</div>
      <div class="body">${arch.body}</div>
      <div class="traits">${traitsHtml}</div>
      <div class="comparisons" style="margin-top:.75rem;padding-top:.65rem;border-top:0.5px solid ${arch.color}33">${arch.comparisons}</div>
    </div>`;

  const polLbl = scores.pol > 2 ? "Toward Liberty" : scores.pol < -2 ? "Toward Authority" : "Balanced";
  const ecoLbl = scores.eco > 2 ? "Toward Meritocracy" : scores.eco < -2 ? "Toward Equality" : "Balanced";
  const socLbl = scores.soc > 2 ? "Toward Hierarchy" : scores.soc < -2 ? "Toward Anarchy" : "Balanced";

  document.getElementById("sv-pol").textContent = scores.pol.toFixed(1);
  document.getElementById("sv-eco").textContent = scores.eco.toFixed(1);
  document.getElementById("sv-soc").textContent = scores.soc.toFixed(1);
  document.getElementById("sp-pol").textContent = polLbl;
  document.getElementById("sp-eco").textContent = ecoLbl;
  document.getElementById("sp-soc").textContent = socLbl;

  lastDraw = { sc: scores, arch };
  setupExplorerSelect(arch);
  drawStar(scores, arch);
}

const HEX_EDGE_EPS = 1e-6;
const AXIS_POS_IDX = { pol: 1, eco: 2, soc: 3 };

function crossZ(ax, ay, bx, by) {
  return ax * by - ay * bx;
}

function insideConvexHex(px, py, verts) {
  let sign = null;
  const n = verts.length;
  for (let i = 0; i < n; i += 1) {
    const j = (i + 1) % n;
    const cr = crossZ(verts[j].x - verts[i].x, verts[j].y - verts[i].y, px - verts[i].x, py - verts[i].y);
    if (Math.abs(cr) < HEX_EDGE_EPS) {
      continue;
    }
    const pos = cr > 0;
    if (sign === null) {
      sign = pos;
    } else if (pos !== sign) {
      return false;
    }
  }
  return true;
}

function clampPointToConvexHex(px, py, cx, cy, verts) {
  if (insideConvexHex(px, py, verts)) {
    return { x: px, y: py };
  }
  let lo = 0;
  let hi = 1;
  for (let iter = 0; iter < 28; iter += 1) {
    const mid = (lo + hi) / 2;
    const mx = cx + mid * (px - cx);
    const my = cy + mid * (py - cy);
    if (insideConvexHex(mx, my, verts)) {
      lo = mid;
    } else {
      hi = mid;
    }
  }
  const t = lo;
  return { x: cx + t * (px - cx), y: cy + t * (py - cy) };
}

function hexVerts(cx, cy, R, vAngles) {
  return vAngles.map((a) => ({
    x: cx + R * Math.cos((a * Math.PI) / 180),
    y: cy + R * Math.sin((a * Math.PI) / 180)
  }));
}

function clipPolygonToConvexHex(poly, clipVerts) {
  if (!poly || poly.length < 2) {
    return [];
  }
  const inside = (p, a, b) => crossZ(b.x - a.x, b.y - a.y, p.x - a.x, p.y - a.y) >= -HEX_EDGE_EPS;
  function intersect(p1, p2, a, b) {
    const dx = p2.x - p1.x;
    const dy = p2.y - p1.y;
    const ex = b.x - a.x;
    const ey = b.y - a.y;
    const den = crossZ(dx, dy, ex, ey);
    if (Math.abs(den) < 1e-12) {
      return { x: p2.x, y: p2.y };
    }
    const t = crossZ(a.x - p1.x, a.y - p1.y, ex, ey) / den;
    return { x: p1.x + t * dx, y: p1.y + t * dy };
  }
  let out = poly.slice();
  const n = clipVerts.length;
  for (let i = 0; i < n; i += 1) {
    const a = clipVerts[i];
    const b = clipVerts[(i + 1) % n];
    const inp = out;
    out = [];
    if (!inp.length) {
      break;
    }
    let prev = inp[inp.length - 1];
    let prevIn = inside(prev, a, b);
    for (let j = 0; j < inp.length; j += 1) {
      const cur = inp[j];
      const curIn = inside(cur, a, b);
      if (curIn) {
        if (!prevIn) {
          out.push(intersect(prev, cur, a, b));
        }
        out.push(cur);
      } else if (prevIn) {
        out.push(intersect(prev, cur, a, b));
      }
      prev = cur;
      prevIn = curIn;
    }
  }
  if (out.length > 1) {
    const a0 = out[0];
    const b0 = out[out.length - 1];
    if (Math.hypot(a0.x - b0.x, a0.y - b0.y) < 1e-4) {
      out.pop();
    }
  }
  return out;
}

function clipPathFromVerts(ctx, verts) {
  ctx.beginPath();
  verts.forEach((v, i) => {
    if (i === 0) {
      ctx.moveTo(v.x, v.y);
    } else {
      ctx.lineTo(v.x, v.y);
    }
  });
  ctx.closePath();
  ctx.clip();
}

function placeFloatingPill(dot, cy, W, H, lw, lh, margin, rDot, gap) {
  const cands = [
    { l: dot.x - lw / 2, t: dot.y - rDot - gap - lh },
    { l: dot.x - lw / 2, t: dot.y + rDot + gap },
    { l: dot.x + rDot + gap, t: dot.y - lh / 2 },
    { l: dot.x - rDot - gap - lw, t: dot.y - lh / 2 }
  ];
  const inB = (l, t) => l >= margin && t >= margin && l + lw <= W - margin && t + lh <= H - margin;
  let order = [0, 1, 2, 3];
  if (dot.y < cy - 25) {
    order = [1, 0, 2, 3];
  } else if (dot.y > cy + 25) {
    order = [0, 1, 2, 3];
  }
  for (const i of order) {
    const c = cands[i];
    if (inB(c.l, c.t)) {
      return { l: c.l, t: c.t };
    }
  }
  return {
    l: Math.max(margin, Math.min(dot.x - lw / 2, W - margin - lw)),
    t: Math.max(margin, Math.min(dot.y - lh / 2, H - margin - lh))
  };
}

function scoresToMapPoint(pol, eco, soc, cx, cy, verts) {
  const vp = verts[AXIS_POS_IDX.pol];
  const ve = verts[AXIS_POS_IDX.eco];
  const vs = verts[AXIS_POS_IDX.soc];
  return {
    x: cx + (pol / 10) * (vp.x - cx) + (eco / 10) * (ve.x - cx) + (soc / 10) * (vs.x - cx),
    y: cy + (pol / 10) * (vp.y - cy) + (eco / 10) * (ve.y - cy) + (soc / 10) * (vs.y - cy)
  };
}

function convexHull2D(points) {
  if (points.length <= 1) {
    return points.slice();
  }
  const pts = points.slice().sort((a, b) => (a.x === b.x ? a.y - b.y : a.x - b.x));
  const cross = (o, a, b) => (a.x - o.x) * (b.y - o.y) - (a.y - o.y) * (b.x - o.x);
  const lower = [];
  for (const p of pts) {
    while (lower.length >= 2 && cross(lower[lower.length - 2], lower[lower.length - 1], p) <= 0) {
      lower.pop();
    }
    lower.push(p);
  }
  const upper = [];
  for (let i = pts.length - 1; i >= 0; i -= 1) {
    const p = pts[i];
    while (upper.length >= 2 && cross(upper[upper.length - 2], upper[upper.length - 1], p) <= 0) {
      upper.pop();
    }
    upper.push(p);
  }
  upper.pop();
  lower.pop();
  return lower.concat(upper);
}

function archetypeRegionPolygon(a, cx, cy, verts, gridSteps) {
  const n = Math.max(3, gridSteps | 0 || 5);
  const pts = [];
  const polR = a.pol;
  const ecoR = a.eco;
  const socR = a.soc;
  const add = (pol, eco, soc) => {
    const raw = scoresToMapPoint(pol, eco, soc, cx, cy, verts);
    pts.push(clampPointToConvexHex(raw.x, raw.y, cx, cy, verts));
  };
  for (let i = 0; i <= n; i += 1) {
    const pol = polR[0] + (polR[1] - polR[0]) * (i / n);
    for (let j = 0; j <= n; j += 1) {
      const eco = ecoR[0] + (ecoR[1] - ecoR[0]) * (j / n);
      for (let k = 0; k <= n; k += 1) {
        const soc = socR[0] + (socR[1] - socR[0]) * (k / n);
        add(pol, eco, soc);
      }
    }
  }
  const hull = convexHull2D(pts);
  return hull.length >= 3 ? hull : [];
}

function setupExplorerSelect(matchedArch) {
  const wrap = document.getElementById("explorer-wrap");
  const sel = document.getElementById("explorer-select");
  if (!wrap || !sel) {
    return;
  }
  wrap.style.display = "block";
  const matchedIdx = matchedArch ? ARCHETYPES.findIndex((a) => a.name === matchedArch.name) : -1;
  let html = '<option value="">Map only (no region overlay)</option>';
  ARCHETYPES.forEach((a, i) => {
    const hint = matchedIdx === i ? " (your match)" : "";
    html += `<option value="${i}">${a.name}${hint}</option>`;
  });
  sel.innerHTML = html;
  if (matchedIdx >= 0) {
    sel.value = String(matchedIdx);
  } else {
    sel.value = "";
  }
  exploreArchIndex = matchedIdx >= 0 ? matchedIdx : null;
}

function onExploreArch(val) {
  exploreArchIndex = val === "" || val === null || val === undefined ? null : parseInt(val, 10);
  if (lastDraw) {
    drawStar(lastDraw.sc, lastDraw.arch);
  }
}

function roundedRect(ctx, x, y, width, height, radius) {
  const r = Math.min(radius, width / 2, height / 2);
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + width - r, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + r);
  ctx.lineTo(x + width, y + height - r);
  ctx.quadraticCurveTo(x + width, y + height, x + width - r, y + height);
  ctx.lineTo(x + r, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

function drawStar(scores, arch) {
  const canvas = document.getElementById("star");
  const ctx = canvas.getContext("2d");
  const W = 660;
  const H = 640;
  canvas.width = W;
  canvas.height = H;

  const dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  ctx.clearRect(0, 0, W, H);

  const cx = W / 2;
  const cy = H / 2 + 10;
  const R = 220;
  const Rinner = R * 0.3;
  const vAngles = [-150, -90, -30, 30, 90, 150];
  const poles = [
    { label: "Anarchy", sub: "Social freedom", color: "#888888", axis: "soc", sign: -1 },
    { label: "Liberty", sub: "Political freedom", color: "#8888ee", axis: "pol", sign: 1 },
    { label: "Meritocracy", sub: "Economic freedom", color: "#ddbb00", axis: "eco", sign: 1 },
    { label: "Hierarchy", sub: "Social order", color: "#9955dd", axis: "soc", sign: 1 },
    { label: "Authority", sub: "Political control", color: "#cc4444", axis: "pol", sign: -1 },
    { label: "Equality", sub: "Economic control", color: "#dd4444", axis: "eco", sign: -1 }
  ];
  const trapFills = [
    dark ? "rgba(136,136,136,0.82)" : "rgba(136,136,136,0.72)",
    dark ? "rgba(255,213,79,0.82)" : "rgba(255,213,79,0.68)",
    dark ? "rgba(33,150,243,0.82)" : "rgba(33,150,243,0.65)",
    dark ? "rgba(18,18,18,0.92)" : "rgba(26,26,26,0.88)",
    dark ? "rgba(229,57,53,0.82)" : "rgba(229,57,53,0.68)",
    dark ? "rgba(67,160,71,0.82)" : "rgba(67,160,71,0.68)"
  ];
  const verts = hexVerts(cx, cy, R, vAngles);
  const vertsInner = hexVerts(cx, cy, Rinner, vAngles);
  const dotOuterR = 14 + 2.5 + 2;
  const vertsSafe = hexVerts(cx, cy, R - dotOuterR, vAngles);

  for (let i = 0; i < 6; i += 1) {
    const v1o = verts[i];
    const v2o = verts[(i + 1) % 6];
    const v1i = vertsInner[i];
    const v2i = vertsInner[(i + 1) % 6];
    ctx.beginPath();
    ctx.moveTo(v1i.x, v1i.y);
    ctx.lineTo(v1o.x, v1o.y);
    ctx.lineTo(v2o.x, v2o.y);
    ctx.lineTo(v2i.x, v2i.y);
    ctx.closePath();
    ctx.fillStyle = trapFills[i];
    ctx.fill();
    ctx.strokeStyle = dark ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.5)";
    ctx.lineWidth = 1;
    ctx.stroke();
  }

  ctx.beginPath();
  vertsInner.forEach((v, i) => {
    if (i === 0) {
      ctx.moveTo(v.x, v.y);
    } else {
      ctx.lineTo(v.x, v.y);
    }
  });
  ctx.closePath();
  ctx.fillStyle = dark ? "rgba(129,212,250,0.42)" : "rgba(179,229,252,0.92)";
  ctx.fill();
  ctx.strokeStyle = dark ? "rgba(255,255,255,0.35)" : "rgba(0,0,0,0.28)";
  ctx.lineWidth = 1.5;
  ctx.setLineDash([4, 4]);
  ctx.stroke();
  ctx.setLineDash([]);

  ctx.beginPath();
  verts.forEach((v, i) => {
    if (i === 0) {
      ctx.moveTo(v.x, v.y);
    } else {
      ctx.lineTo(v.x, v.y);
    }
  });
  ctx.closePath();
  ctx.strokeStyle = dark ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.25)";
  ctx.lineWidth = 2;
  ctx.stroke();

  for (let i = 0; i < 3; i += 1) {
    const v1 = verts[i];
    const v2 = verts[i + 3];
    ctx.beginPath();
    ctx.moveTo(v1.x, v1.y);
    ctx.lineTo(v2.x, v2.y);
    ctx.strokeStyle = dark ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.45)";
    ctx.lineWidth = 1;
    ctx.stroke();
  }

  if (exploreArchIndex !== null && !Number.isNaN(exploreArchIndex) && ARCHETYPES[exploreArchIndex]) {
    const ex = ARCHETYPES[exploreArchIndex];
    const hull = archetypeRegionPolygon(ex, cx, cy, verts, 5);
    const clipped = clipPolygonToConvexHex(hull, verts);
    if (clipped.length >= 3) {
      ctx.save();
      clipPathFromVerts(ctx, verts);
      ctx.beginPath();
      clipped.forEach((p, i) => {
        if (i === 0) {
          ctx.moveTo(p.x, p.y);
        } else {
          ctx.lineTo(p.x, p.y);
        }
      });
      ctx.closePath();
      ctx.fillStyle = ex.color + (dark ? "44" : "55");
      ctx.fill();
      ctx.strokeStyle = ex.color + (dark ? "88" : "77");
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.restore();

      ctx.save();
      ctx.font = "500 11px Inter, Segoe UI, sans-serif";
      const cxh = clipped.reduce((s, p) => s + p.x, 0) / clipped.length;
      const cyh = clipped.reduce((s, p) => s + p.y, 0) / clipped.length;
      const lbl = ex.name;
      const tw = ctx.measureText(lbl).width;
      const pad = 5;
      const bh = 15;
      const lw = tw + pad * 2;
      const pos = placeFloatingPill({ x: cxh, y: cyh }, cy, W, H, lw, bh, 6, 0, 6);
      ctx.shadowColor = dark ? "rgba(0,0,0,0.55)" : "rgba(0,0,0,0.2)";
      ctx.shadowBlur = 8;
      ctx.shadowOffsetY = 1;
      ctx.fillStyle = dark ? "rgba(25,25,30,0.92)" : "rgba(255,255,255,0.95)";
      roundedRect(ctx, pos.l, pos.t, lw, bh, 4);
      ctx.fill();
      ctx.shadowBlur = 0;
      ctx.shadowOffsetY = 0;
      ctx.fillStyle = ex.color;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(lbl, pos.l + lw / 2, pos.t + bh / 2);
      ctx.restore();
    }
  }

  const fontMain = "500 12px Inter, Segoe UI, sans-serif";
  const fontSub = "400 10px Inter, Segoe UI, sans-serif";
  poles.forEach((p, i) => {
    const a = (vAngles[i] * Math.PI) / 180;
    const lx = cx + (R + 28) * Math.cos(a);
    const ly = cy + (R + 28) * Math.sin(a);
    ctx.font = fontMain;
    ctx.fillStyle = dark ? "rgba(230,230,230,0.95)" : "rgba(20,20,20,0.9)";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(p.label, lx, ly);
    ctx.font = fontSub;
    ctx.fillStyle = dark ? "rgba(170,170,170,0.8)" : "rgba(80,80,80,0.8)";
    ctx.fillText(p.sub, lx, ly + 14);
  });

  ctx.save();
  clipPathFromVerts(ctx, verts);
  ctx.font = fontSub;
  ctx.fillStyle = dark ? "rgba(200,200,200,0.55)" : "rgba(100,100,100,0.5)";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("Centre", cx, cy);
  ctx.font = "400 9px Inter, Segoe UI, sans-serif";
  ctx.fillStyle = dark ? "rgba(180,180,190,0.45)" : "rgba(90,90,100,0.45)";
  ctx.fillText("More neutral scores", cx, cy + 12);
  ctx.restore();

  const raw = scoresToMapPoint(scores.pol, scores.eco, scores.soc, cx, cy, verts);
  const dot = clampPointToConvexHex(raw.x, raw.y, cx, cy, vertsSafe);

  ctx.save();
  clipPathFromVerts(ctx, verts);
  ctx.beginPath();
  ctx.arc(dot.x, dot.y, 14, 0, Math.PI * 2);
  ctx.fillStyle = `${arch.color}55`;
  ctx.fill();
  ctx.beginPath();
  ctx.arc(dot.x, dot.y, 9, 0, Math.PI * 2);
  ctx.fillStyle = dark ? "#1a1a22" : "#ffffff";
  ctx.fill();
  ctx.strokeStyle = arch.color;
  ctx.lineWidth = 2.5;
  ctx.stroke();
  ctx.restore();

  ctx.save();
  ctx.font = "500 11px Inter, Segoe UI, sans-serif";
  const labelText = `You: ${arch.name}`;
  const tw = ctx.measureText(labelText).width;
  const lh = 18;
  const lw = tw + 12;
  const pos = placeFloatingPill(dot, cy, W, H, lw, lh, 8, 14, 6);
  ctx.shadowColor = dark ? "rgba(0,0,0,0.55)" : "rgba(0,0,0,0.2)";
  ctx.shadowBlur = 8;
  ctx.shadowOffsetY = 1;
  ctx.fillStyle = dark ? "rgba(30,30,36,0.92)" : "rgba(255,255,255,0.96)";
  roundedRect(ctx, pos.l, pos.t, lw, lh, 4);
  ctx.fill();
  ctx.shadowBlur = 0;
  ctx.shadowOffsetY = 0;
  ctx.fillStyle = dark ? "rgba(240,240,240,0.98)" : "rgba(10,10,10,0.92)";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(labelText, pos.l + lw / 2, pos.t + lh / 2);
  ctx.restore();
}

function restart() {
  answers = new Array(Qs.length).fill(null);
  cur = 0;
  lastDraw = null;
  exploreArchIndex = null;
  const ew = document.getElementById("explorer-wrap");
  if (ew) {
    ew.style.display = "none";
  }
  show("s-intro");
}

function bindEvents() {
  document.getElementById("btn-start").addEventListener("click", startQuiz);
  document.getElementById("btn-back").addEventListener("click", prevQ);
  document.getElementById("btn-next").addEventListener("click", nextQ);
  document.getElementById("btn-restart").addEventListener("click", restart);

  const explorerSelect = document.getElementById("explorer-select");
  if (explorerSelect) {
    explorerSelect.addEventListener("change", (e) => {
      const target = e.target;
      if (target instanceof HTMLSelectElement) {
        onExploreArch(target.value);
      }
    });
  }

  document.getElementById("q-wrap").addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLButtonElement)) {
      return;
    }
    const i = Number(target.dataset.index);
    const score = Number(target.dataset.score);
    const color = target.dataset.color;
    if (Number.isNaN(i) || Number.isNaN(score) || !color) {
      return;
    }
    pick(i, score, color, target);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  bindEvents();
});
