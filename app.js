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

  drawStar(scores, arch);
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
  const W = 560;
  const H = 540;
  canvas.width = W;
  canvas.height = H;

  const dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  ctx.clearRect(0, 0, W, H);

  const cx = W / 2;
  const cy = H / 2 + 10;
  const R = 160;
  const vAngles = [-150, -90, -30, 30, 90, 150];
  const poles = [
    { label: "Liberty", sub: "Political freedom", axis: "pol", sign: 1 },
    { label: "Meritocracy", sub: "Economic freedom", axis: "eco", sign: 1 },
    { label: "Hierarchy", sub: "Social order", axis: "soc", sign: 1 },
    { label: "Authority", sub: "Political control", axis: "pol", sign: -1 },
    { label: "Equality", sub: "Economic control", axis: "eco", sign: -1 },
    { label: "Anarchy", sub: "Social freedom", axis: "soc", sign: -1 }
  ];

  const sectionColors = ["#aaaaff", "#4466ee", "#8833cc", "#222222", "#cc3333", "#888888"];
  const verts = vAngles.map((angle) => ({
    x: cx + R * Math.cos((angle * Math.PI) / 180),
    y: cy + R * Math.sin((angle * Math.PI) / 180)
  }));

  for (let i = 0; i < 6; i += 1) {
    const v1 = verts[i];
    const v2 = verts[(i + 1) % 6];
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(v1.x, v1.y);
    ctx.lineTo(v2.x, v2.y);
    ctx.closePath();
    ctx.fillStyle = sectionColors[i] + (dark ? "bb" : "cc");
    ctx.fill();
    ctx.strokeStyle = dark ? "rgba(255,255,255,0.15)" : "rgba(255,255,255,0.6)";
    ctx.lineWidth = 1.5;
    ctx.stroke();
  }

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

  poles.forEach((pole, i) => {
    const angle = (vAngles[i] * Math.PI) / 180;
    const lx = cx + (R + 28) * Math.cos(angle);
    const ly = cy + (R + 28) * Math.sin(angle);
    ctx.font = "600 12px Inter, Segoe UI, sans-serif";
    ctx.fillStyle = dark ? "rgba(230,230,230,0.95)" : "rgba(20,20,20,0.9)";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(pole.label, lx, ly);
    ctx.font = "400 10px Inter, Segoe UI, sans-serif";
    ctx.fillStyle = dark ? "rgba(170,170,170,0.8)" : "rgba(80,80,80,0.8)";
    ctx.fillText(pole.sub, lx, ly + 14);
  });

  let dotX = cx;
  let dotY = cy;
  poles.forEach((pole, i) => {
    const rawVal = scores[pole.axis] * pole.sign;
    const weight = Math.max(0, rawVal) / 10;
    dotX += weight * (verts[i].x - cx) * 0.9;
    dotY += weight * (verts[i].y - cy) * 0.9;
  });

  ctx.beginPath();
  ctx.arc(dotX, dotY, 14, 0, Math.PI * 2);
  ctx.fillStyle = `${arch.color}55`;
  ctx.fill();

  ctx.beginPath();
  ctx.arc(dotX, dotY, 9, 0, Math.PI * 2);
  ctx.fillStyle = "#ffffff";
  ctx.fill();
  ctx.strokeStyle = arch.color;
  ctx.lineWidth = 2.5;
  ctx.stroke();

  const labelText = `You: ${arch.name}`;
  ctx.font = "600 11px Inter, Segoe UI, sans-serif";
  const textWidth = ctx.measureText(labelText).width;
  ctx.fillStyle = dark ? "rgba(30,30,30,0.75)" : "rgba(255,255,255,0.8)";
  roundedRect(ctx, dotX - textWidth / 2 - 6, dotY - 28, textWidth + 12, 16, 4);
  ctx.fill();
  ctx.fillStyle = dark ? "rgba(240,240,240,0.95)" : "rgba(10,10,10,0.9)";
  ctx.textAlign = "center";
  ctx.textBaseline = "bottom";
  ctx.fillText(labelText, dotX, dotY - 14);

  ctx.font = "400 10px Inter, Segoe UI, sans-serif";
  ctx.fillStyle = dark ? "rgba(200,200,200,0.5)" : "rgba(100,100,100,0.45)";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("Centre", cx, cy);
}

function restart() {
  answers = new Array(Qs.length).fill(null);
  cur = 0;
  show("s-intro");
}

function bindEvents() {
  document.getElementById("btn-start").addEventListener("click", startQuiz);
  document.getElementById("btn-back").addEventListener("click", prevQ);
  document.getElementById("btn-next").addEventListener("click", nextQ);
  document.getElementById("btn-restart").addEventListener("click", restart);

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
