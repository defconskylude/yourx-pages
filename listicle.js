/*!
 * YOURx Health · Stage 3 listicle ("7 Questions") · loaded by one line in GHL:
 *   <div id="yourx-listicle"></div><script src="https://defconskylude.github.io/yourx-pages/listicle.js"></script>
 *
 * EDIT HERE ↓  Headlines, decks and the survey link live in CONFIG.
 * Pick a headline per ad with ?h=<key> on the page URL (e.g. ?h=price). No ?h → CONFIG.defaultHeadline.
 * After editing: commit + push. GitHub Pages serves the new version within ~10 minutes.
 */
(function () {
  var CONFIG = {
    surveyUrl: "https://rx.yourxhealth.com/intake/wm-ib7z0p",
    defaultHeadline: "questions",
    headlines: {
      questions: {
        headline: "7 Questions to Ask Any Online GLP-1 Program Before You Pay",
        green: "7 Questions to Ask Any Online",
        deck: "Most people check the starting price. The month-3 price is what you'll actually pay. Here's what to check first, and how to verify the answers yourself."
      },
      price: {
        headline: "The GLP-1 Price Trap: Why $125 Can Turn Into Much More by Month 3",
        deck: "Before you pay any online weight-loss program, ask these 7 questions. Most people only ask one, and it isn't the one that matters."
      },
      pill: {
        headline: "Pill or Shot? 7 Honest Answers Before You Try a GLP-1 Online",
        deck: "Some GLP-1 pills are brand-name and FDA-approved. Some are compounded. Here's how to tell what you're actually getting, and what it really costs."
      },
      scam: {
        headline: "Every Online GLP-1 Site Looks Like a Scam. Here's How to Check in 6 Minutes.",
        deck: "Seven questions that separate a real prescription program from bait pricing and borrowed reviews, with the answers you can verify yourself."
      }
    },
    // Ad-click IDs and UTM tags on the page URL are passed through to the survey so attribution survives.
    forwardParams: ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "fbclid", "gclid", "ttclid"]
  };
  // ── nothing below needs editing for headline swaps ──────────────────────────

  if (window.__yxListicleLoaded) return;
  window.__yxListicleLoaded = true;

  var qs = new URLSearchParams(window.location.search);
  var v = CONFIG.headlines[qs.get("h")] || CONFIG.headlines[CONFIG.defaultHeadline];
  // optional "green" field: that part of the headline shows in brand green
  var h1 = v.green && v.headline.indexOf(v.green) > -1
    ? v.headline.replace(v.green, '<span class="yx-green">' + v.green + "</span>")
    : v.headline;

  var survey = CONFIG.surveyUrl;
  try {
    var out = new URL(CONFIG.surveyUrl);
    CONFIG.forwardParams.forEach(function (k) { if (qs.get(k)) out.searchParams.set(k, qs.get(k)); });
    out.searchParams.set("lp_variant", qs.get("h") && CONFIG.headlines[qs.get("h")] ? qs.get("h") : CONFIG.defaultHeadline);
    survey = out.toString().replace(/&/g, "&amp;");
  } catch (e) {}

  var CSS = `
#yx-lst{--yx-green:#1f7a4d;--yx-green-dark:#155c39;--yx-ink:#1d2421;--yx-muted:#5b6661;--yx-line:#e3e8e5;--yx-soft:#f4f8f5;--yx-paper:#ffffff;
  background:var(--yx-paper);color:var(--yx-ink);font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
  font-size:18px;line-height:1.65;-webkit-font-smoothing:antialiased;padding:0 16px 48px;box-sizing:border-box}
#yx-lst *,#yx-lst *::before,#yx-lst *::after{box-sizing:border-box}
#yx-lst .yx-wrap{max-width:720px;margin:0 auto}
#yx-lst p{margin:0 0 14px}
#yx-lst a{color:var(--yx-green);text-decoration:underline;text-underline-offset:2px}
#yx-lst .yx-logo{display:flex;align-items:center;justify-content:center;padding:22px 0 14px}
#yx-lst .yx-logo a{display:inline-block;line-height:0;text-decoration:none}
#yx-lst .yx-logo img{display:block;height:30px;width:auto;max-width:100%;border:0}
#yx-lst .yx-logo-foot{padding:30px 0 6px;border-top:1px solid var(--yx-line);margin-top:38px}
#yx-lst .yx-logo-foot img{height:26px}
#yx-lst .yx-ad{font-size:12px;letter-spacing:.06em;text-transform:uppercase;color:var(--yx-muted);border-bottom:1px solid var(--yx-line);padding:0 0 10px;margin-bottom:28px;text-align:center}
#yx-lst .yx-h1{font-family:Georgia,"Times New Roman",serif;font-size:clamp(30px,6vw,44px);line-height:1.15;font-weight:700;margin:0 0 16px;color:var(--yx-ink);letter-spacing:-.01em}
#yx-lst .yx-deck{font-size:20px;color:var(--yx-muted);margin:0 0 22px;line-height:1.5}
#yx-lst .yx-byline{display:flex;align-items:center;gap:10px;font-size:14px;color:var(--yx-muted);margin-bottom:30px}
#yx-lst .yx-h1 .yx-green{color:var(--yx-green);background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 20' preserveAspectRatio='none'><path fill='%23d62828' d='M3 11C40 5 110 4 170 5C222 6 266 4 297 7C291 11 262 12 220 12C160 13 92 15 42 16C20 16 8 16 3 11Z' opacity='.92'/><path fill='%23d62828' d='M30 13C90 10 170 9 250 9C200 12 120 14 40 15Z' opacity='.55'/></svg>");background-repeat:no-repeat;background-size:100% .26em;background-position:0 100%;padding-bottom:.14em;-webkit-box-decoration-break:clone;box-decoration-break:clone}
#yx-lst .yx-dot{width:8px;height:8px;border-radius:50%;background:var(--yx-green);display:inline-block;flex-shrink:0}
#yx-lst .yx-note{background:var(--yx-soft);border-left:4px solid var(--yx-green);border-radius:0 10px 10px 0;padding:20px 22px;margin:0 0 36px}
#yx-lst .yx-note p:last-child{margin-bottom:0}
#yx-lst .yx-item{border-top:1px solid var(--yx-line);padding:34px 0 8px}
#yx-lst .yx-num{display:inline-flex;align-items:center;justify-content:center;width:40px;height:40px;border-radius:50%;background:var(--yx-green);color:#fff;font-weight:700;font-size:18px;margin-bottom:12px}
#yx-lst .yx-h2{font-family:Georgia,"Times New Roman",serif;font-size:clamp(23px,4.4vw,29px);line-height:1.25;margin:0 0 16px;font-weight:700;color:var(--yx-ink)}
#yx-lst .yx-lbl{font-weight:700}
#yx-lst .yx-answer{background:var(--yx-soft);border:1px solid var(--yx-line);border-radius:12px;padding:18px 20px;margin:18px 0 14px}
#yx-lst .yx-answer .yx-tag{display:block;font-size:12px;letter-spacing:.08em;text-transform:uppercase;color:var(--yx-green);font-weight:700;margin-bottom:6px}
#yx-lst .yx-answer p:last-child{margin-bottom:0}
#yx-lst .yx-check{font-size:16px;color:var(--yx-muted);padding-left:26px;position:relative}
#yx-lst .yx-check::before{content:"\\2713";position:absolute;left:0;top:0;color:var(--yx-green);font-weight:700}
#yx-lst ul.yx-list{margin:6px 0 16px;padding-left:22px}
#yx-lst ul.yx-list li{margin-bottom:10px}
#yx-lst .yx-honest{border:2px solid var(--yx-ink);border-radius:12px;padding:18px 20px;margin:18px 0}
#yx-lst .yx-need{background:#fff3a8;color:#5a4a00;border-radius:4px;padding:1px 5px;font-size:.88em;font-weight:600}
#yx-lst .yx-sum{border-top:1px solid var(--yx-line);padding-top:34px;margin-top:10px}
#yx-lst table.yx-table{width:100%;border-collapse:collapse;font-size:16px;margin:8px 0 26px}
#yx-lst .yx-table th,#yx-lst .yx-table td{text-align:left;vertical-align:top;padding:12px 14px;border-bottom:1px solid var(--yx-line)}
#yx-lst .yx-table th{background:var(--yx-soft);font-size:13px;letter-spacing:.06em;text-transform:uppercase;color:var(--yx-muted)}
#yx-lst .yx-table td:first-child{font-weight:600;width:42%}
#yx-lst .yx-cta{background:var(--yx-soft);border:1px solid var(--yx-line);border-radius:16px;padding:28px 22px;text-align:center;margin:30px 0}
#yx-lst .yx-cta-title{font-family:Georgia,"Times New Roman",serif;font-size:24px;font-weight:700;line-height:1.3;margin:0 0 10px}
#yx-lst a.yx-btn{display:inline-block;background:var(--yx-green);color:#fff !important;text-decoration:none;font-weight:700;font-size:19px;
  padding:17px 34px;border-radius:999px;box-shadow:0 6px 16px rgba(31,122,77,.25);transition:background .15s ease,transform .15s ease;max-width:100%}
#yx-lst a.yx-btn:hover{background:var(--yx-green-dark);transform:translateY(-1px)}
#yx-lst a.yx-btn:focus-visible{outline:3px solid #9fd3b6;outline-offset:3px}
#yx-lst .yx-micro{font-size:14px;color:var(--yx-muted);margin:12px 0 0}
#yx-lst .yx-trust{display:flex;flex-wrap:wrap;justify-content:center;gap:8px 18px;font-size:14px;color:var(--yx-muted);margin-top:14px}
#yx-lst .yx-proof{border-top:1px solid var(--yx-line);padding-top:38px;margin-top:10px}
#yx-lst .yx-eyebrow{display:block;font-size:12px;letter-spacing:.1em;text-transform:uppercase;color:var(--yx-green);font-weight:700;margin-bottom:8px}
#yx-lst .yx-sub{color:var(--yx-muted);margin:-6px 0 20px}
#yx-lst .yx-vids{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin:0 0 10px}
#yx-lst .yx-vid{position:relative;aspect-ratio:9/16;border-radius:14px;overflow:hidden;background:#0f1412;box-shadow:0 4px 14px rgba(0,0,0,.08)}
#yx-lst .yx-vid video,#yx-lst .yx-vid iframe{position:absolute;inset:0;width:100%;height:100%;border:0;object-fit:cover;display:block}
#yx-lst .yx-vary{font-size:13px;color:var(--yx-muted);text-align:center;margin:8px 0 0}
#yx-lst .yx-revs{display:grid;grid-template-columns:repeat(2,1fr);gap:14px;margin:6px 0 10px}
#yx-lst .yx-rev{background:#fff;border:1px solid var(--yx-line);border-radius:14px;padding:18px 18px 16px;display:flex;flex-direction:column}
#yx-lst .yx-rev-top{display:flex;align-items:center;gap:10px;margin-bottom:10px}
#yx-lst .yx-av{width:36px;height:36px;border-radius:50%;background:var(--yx-soft);color:var(--yx-green);font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0;border:1px solid var(--yx-line)}
#yx-lst .yx-rev-name{font-weight:700;font-size:16px;line-height:1.2}
#yx-lst .yx-stars{color:#e0a100;font-size:14px;letter-spacing:1px}
#yx-lst .yx-rev p{font-size:16px;line-height:1.55;margin:0 0 12px;flex:1}
#yx-lst .yx-result{font-size:14px;font-weight:700;color:var(--yx-green);background:var(--yx-soft);border-radius:8px;padding:6px 10px;align-self:flex-start}
#yx-lst a.yx-imglink{display:block;text-decoration:none;border-radius:14px;overflow:hidden;transition:transform .15s ease,box-shadow .15s ease}
#yx-lst a.yx-imglink:hover{transform:translateY(-2px);box-shadow:0 10px 24px rgba(0,0,0,.10)}
#yx-lst a.yx-imglink:focus-visible{outline:3px solid #9fd3b6;outline-offset:3px}
#yx-lst a.yx-imglink img{display:block;width:100%;height:auto;border:0}
#yx-lst .yx-cta a.yx-imglink{max-width:460px;margin:0 auto 18px}
#yx-lst .yx-offer{margin:34px 0 0}
#yx-lst .yx-offer a.yx-imglink{max-width:560px;margin:0 auto;border:1px solid var(--yx-line)}
#yx-lst .yx-fine{margin-top:0;padding-top:14px;text-align:center;font-size:13px;line-height:1.6;color:var(--yx-muted)}
@media (max-width:600px){
  #yx-lst{font-size:17px}
  #yx-lst .yx-deck{font-size:18px}
  #yx-lst a.yx-btn{display:block;padding:17px 18px}
  #yx-lst .yx-table thead{display:none}
  #yx-lst .yx-table tr{display:block;border-bottom:1px solid var(--yx-line);padding:10px 0}
  #yx-lst .yx-table td{display:block;border:0;padding:2px 0;width:auto}
  #yx-lst .yx-table td:first-child{width:auto}
  #yx-lst .yx-vids{display:flex;overflow-x:auto;scroll-snap-type:x mandatory;gap:12px;margin:0 -16px 10px;padding:0 16px 6px;-webkit-overflow-scrolling:touch}
  #yx-lst .yx-vid{flex:0 0 72%;scroll-snap-align:center}
  #yx-lst .yx-revs{grid-template-columns:1fr}
}
`;

  var HTML = `
<div id="yx-lst">
 <div class="yx-wrap">

  <div class="yx-logo"><a href="${survey}" data-yx-survey target="_top" rel="noopener" aria-label="YOURx Health: get started"><img src="https://assets.cdn.filesafe.space/gEvLxQGmqQxP0v78ubVN/media/6ae8ec18736386d0dcea1109.svg" alt="YOURx Health" width="225" height="30"></a></div>
  <div class="yx-ad">Advertisement · Paid for by YOURx Health</div>

  <h1 class="yx-h1">${h1}</h1>
  <p class="yx-deck">${v.deck}</p>
  <div class="yx-byline"><span class="yx-dot"></span>A buyer's guide from YOURx Health · <strong>About 6 minutes to read</strong></div>

  <div class="yx-note">
   <p><strong>A quick word before the list.</strong></p>
   <p>This page is paid for by YOURx Health, an online prescription weight-loss program. So yes, we're biased.</p>
   <p>That's why every answer below comes with a way to check it yourself.</p>
   <p>If a program can't answer these 7 questions plainly, in writing, before you pay, that tells you something. That goes for us too.</p>
  </div>

  <!-- 1 -->
  <div class="yx-item">
   <span class="yx-num">1</span>
   <h2 class="yx-h2">"What will I be paying in month 3?"</h2>
   <p><span class="yx-lbl">Why it matters:</span> Many programs advertise the starting dose. With GLP-1 medicine, your prescriber usually raises the dose slowly over the first few months. At some programs the price rises with it, so a $125 start can become several hundred dollars by month 3 or 4.</p>
   <p><span class="yx-lbl">A good answer looks like:</span> a price table with every dose on it, written down before you check out, plus the renewal terms.</p>
   <div class="yx-answer"><span class="yx-tag">YOURx's answer</span>
    <p>Plans start at $125 a month, and your price doesn't go up when your prescriber raises your dose. YOURx calls it "no surprise price increases as your dosage changes."</p>
   </div>
   <p class="yx-check"><strong>How to check:</strong> Ask any program for its maintenance-dose price in writing. If they won't give it to you, don't buy.</p>
  </div>

  <!-- 2 -->
  <div class="yx-item">
   <span class="yx-num">2</span>
   <h2 class="yx-h2">"Who actually makes it, and is it compounded?"</h2>
   <p><span class="yx-lbl">Why it matters:</span> Most online GLP-1 programs sell compounded medicine. A licensed pharmacy prepares it from the active ingredient. The brand-name drug company doesn't make it, and it isn't FDA-approved. Compounding is legal in defined situations. But you deserve to know which pharmacy is making what you swallow.</p>
   <p><span class="yx-lbl">A good answer looks like:</span> the pharmacy's name, the state it's licensed in, and a plain statement that the medicine is compounded.</p>
   <div class="yx-answer"><span class="yx-tag">YOURx's answer</span>
    <p>YOURx's tirzepatide is compounded and filled by a licensed US pharmacy. Compounded medicines aren't FDA-approved, and YOURx says so up front. YOURx Health is also LegitScript certified. LegitScript is an independent service that checks online pharmacies and telehealth companies.</p>
   </div>
   <p class="yx-check"><strong>How to check:</strong> Search "yourxhealth.com" on <a href="https://www.legitscript.com/websites/?checker_keywords=yourxhealth.com" target="_blank" rel="noopener">LegitScript's public lookup</a>. Then call YOURx and ask which pharmacy fills your prescription. A real program will tell you.</p>
  </div>

  <!-- 3 -->
  <div class="yx-item">
   <span class="yx-num">3</span>
   <h2 class="yx-h2">"Will I talk to a real prescriber? Who?"</h2>
   <p><span class="yx-lbl">Why it matters:</span> Some programs approve you off a form, and you never hear from a clinician again. GLP-1 medicine needs a real medical conversation, both at the start and when side effects come up.</p>
   <p><span class="yx-lbl">A good answer looks like:</span> a live consultation, the name of the provider network, and a way to reach someone after you start.</p>
   <div class="yx-answer"><span class="yx-tag">YOURx's answer</span>
    <p>A phone consultation with a licensed physician from the Dr. Telx network is included. A licensed physician decides whether a prescription fits you, not the website. After you start, you can reach licensed medical providers 24/7 at no extra cost.</p>
   </div>
   <p class="yx-check"><strong>How to check:</strong> Call YOURx at <a href="tel:+18335631061">(833) 563-1061</a> before you sign up and ask what the consult covers.</p>
  </div>

  <!-- 4 -->
  <div class="yx-item">
   <span class="yx-num">4</span>
   <h2 class="yx-h2">"What are the side effects, and who shouldn't take it?"</h2>
   <p><span class="yx-lbl">Why it matters:</span> A program that only talks about results is hoping you won't ask. GLP-1 medicine has real side effects, and it isn't right for everyone.</p>
   <p><span class="yx-lbl">A good answer looks like:</span> the common side effects in plain words, the reasons someone would be turned down, and what the program does when you feel rough.</p>
   <div class="yx-answer"><span class="yx-tag">YOURx's answer</span>
    <p>The most common side effects are stomach-related: nausea, diarrhea, constipation and sometimes vomiting, usually when the dose goes up. Tirzepatide is not for people with a personal or family history of medullary thyroid cancer or MEN2, or who are pregnant. If side effects hit, you can reach a provider, who can adjust your plan.</p>
   </div>
   <p class="yx-check"><strong>How to check:</strong> Ask the program to send you its safety information before you pay. You should never have to go hunting for it.</p>
  </div>

  <!-- 5 -->
  <div class="yx-item">
   <span class="yx-num">5</span>
   <h2 class="yx-h2">"Pill or shot? What's the honest difference?"</h2>
   <p><span class="yx-lbl">Why it matters:</span> "GLP-1 pill" can mean very different things, and some sellers blur them on purpose.</p>
   <div class="yx-honest">
    <p><strong>Here's the honest version:</strong></p>
    <ul class="yx-list">
     <li><strong>Injectable tirzepatide</strong> is the weekly shot. It has the largest body of clinical research of the options here, and it's what YOURx's main program uses.</li>
     <li><strong>Brand-name GLP-1 pills</strong> have their own large trials and FDA approval. These are Lilly's Foundayo and Novo Nordisk's Wegovy pill. They use different molecules from tirzepatide. Self-pay prices start around $149 a month.</li>
     <li><strong>Compounded tirzepatide capsules</strong> use the same active ingredient as the shot in a daily capsule. There is much less published research on this form, and it isn't FDA-approved.</li>
    </ul>
   </div>
   <p><span class="yx-lbl">What YOURx offers:</span> a weekly tirzepatide injection protocol, enhanced with vitamin B12 for sustained energy, from $125 a month. It's a small needle, once a week, at home. The physician consult and shipping are included, and the price stays flat as your dose changes.</p>
   <p><span class="yx-lbl">Really don't want a needle?</span> YOURx also offers daily capsules. Ask your prescriber whether they fit you, knowing there's less research on the oral form.</p>
   <p><span class="yx-lbl">When YOURx may not be your best choice:</span> if your insurance covers a brand-name GLP-1 like Zepbound or Wegovy, that could cost you less. Check with your insurer first. We'd rather you start with the right option than start with us.</p>
  </div>

  <!-- mid CTA -->
  <div class="yx-cta">
   <a class="yx-imglink" href="${survey}" data-yx-survey target="_top" rel="noopener" aria-label="Get started: check your eligibility with YOURx Health"><img src="https://files.leadconnectorhq.com/file/6af620e0e2f577d4a30c90f2/tirzepatide-vial-and-syringe-product-shot.png" alt="YOURx Health tirzepatide vial, prescription only" width="1448" height="1086" loading="lazy"></a>
   <p class="yx-cta-title">Weekly injection from $125: see your price at every dose</p>
   <a class="yx-btn" href="${survey}" data-yx-survey target="_top" rel="noopener">Get Started: See Your Price</a>
   <p class="yx-micro">About 5 minutes. A licensed physician reviews every request.</p>
  </div>

  <!-- 6 -->
  <div class="yx-item">
   <span class="yx-num">6</span>
   <h2 class="yx-h2">"What if I'm not approved, or I want to stop?"</h2>
   <p><span class="yx-lbl">Why it matters:</span> Some programs take your card first and ask medical questions later. Then you're chasing a refund if you don't qualify.</p>
   <p><span class="yx-lbl">A good answer looks like:</span> you find out whether you're eligible before anyone asks you to pay.</p>
   <div class="yx-answer"><span class="yx-tag">YOURx's answer</span>
    <p>You can't check out unless your answers to the eligibility questions show you qualify. If they don't, you're never asked to pay.</p>
   </div>
   <p><span class="yx-lbl">One more honest thing:</span> many people regain weight after stopping GLP-1 medicine without a plan for what comes next. Ask any program what that plan looks like. Ask YOURx too.</p>
  </div>

  <!-- 7 -->
  <div class="yx-item">
   <span class="yx-num">7</span>
   <h2 class="yx-h2">"Are the reviews real?"</h2>
   <p><span class="yx-lbl">Why it matters:</span> Star ratings with no source, "ranked best" badges from sites you've never heard of, and one-line reviews from people with only a first name are everywhere in this industry. Many are easy to make up.</p>
   <p><span class="yx-lbl">A good answer looks like:</span> reviews on a platform you can open yourself, with dates, details, a downside or two, and a note that results vary.</p>
   <div class="yx-answer"><span class="yx-tag">YOURx's answer</span>
    <p>YOURx reports more than 3,000 Google reviews with a 4.7-star average. That's a platform you can open and read yourself, 2-star reviews included. Patient videos and reviews are also at the bottom of this page.</p>
   </div>
   <p class="yx-check"><strong>How to check:</strong> Open the review platform yourself rather than trusting a screenshot. Read the 2- and 3-star reviews first. They tell you how a company handles problems.</p>
  </div>

  <!-- summary -->
  <div class="yx-sum">
   <h2 class="yx-h2">The short version</h2>
   <table class="yx-table">
    <thead><tr><th>Question</th><th>YOURx's answer</th></tr></thead>
    <tbody>
     <tr><td>Price in month 3?</td><td>Starts at $125; price doesn't rise with dose</td></tr>
     <tr><td>Who makes it?</td><td>Licensed US pharmacy · LegitScript certified</td></tr>
     <tr><td>Real prescriber?</td><td>Phone consult with a licensed physician, included</td></tr>
     <tr><td>Side effects?</td><td>Listed before you pay</td></tr>
     <tr><td>Pill vs shot?</td><td>Weekly tirzepatide injection with B12; capsules also available</td></tr>
     <tr><td>Not eligible?</td><td>You can't check out, so you never pay</td></tr>
     <tr><td>Real reviews?</td><td>3,000+ Google reviews, 4.7 stars; patient videos below</td></tr>
    </tbody>
   </table>
   <p>If those answers work for you, the next step is small. Answer a few health questions, see your price at every dose, and a licensed physician decides whether it fits you.</p>
   <p>If they don't work for you, you now know exactly what to ask everyone else.</p>
  </div>

  <!-- REAL STORIES (videos from YOURx) -->
  <div class="yx-proof">
   <span class="yx-eyebrow">Real Stories</span>
   <h2 class="yx-h2">Hear it from YOURx patients</h2>
   <p class="yx-sub">Short videos from people in YOURx's weight-loss program.</p>
   <div class="yx-vids">
    <div class="yx-vid"><video src="https://assets.cdn.filesafe.space/gEvLxQGmqQxP0v78ubVN/media/6aeb3850eb97c673780367ec.mp4#t=0.1" controls playsinline preload="metadata"></video></div>
    <div class="yx-vid"><video src="https://assets.cdn.filesafe.space/gEvLxQGmqQxP0v78ubVN/media/6aeb384ddfd4785f084d26e4.mp4#t=0.1" controls playsinline preload="metadata"></video></div>
    <div class="yx-vid"><iframe src="https://player.vimeo.com/video/930010687?title=0&amp;byline=0&amp;portrait=0" title="YOURx Health testimonial" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen loading="lazy"></iframe></div>
   </div>
   <p class="yx-vary">Individual results may vary.</p>
  </div>

  <!-- REAL PATIENT FEEDBACK (reviews from YOURx) -->
  <div class="yx-proof">
   <span class="yx-eyebrow">Real Patient Feedback</span>
   <h2 class="yx-h2">In their own words</h2>
   <p class="yx-sub">Reviews from YOURx patients, unedited.</p>
   <div class="yx-revs">
    <div class="yx-rev"><div class="yx-rev-top"><span class="yx-av">R</span><div><div class="yx-rev-name">Ryan</div><div class="yx-stars">★★★★★</div></div></div>
     <p>"The team at YOURx Health is awesome! They are on top of their game. They provide one on one help, reply to messages and emails quickly, and are fast to solve any issues that may arise. Very professional and eager to help. With their help I've lost 12lbs in my first month."</p>
     <span class="yx-result">Lost 12 pounds in 1 month</span></div>
    <div class="yx-rev"><div class="yx-rev-top"><span class="yx-av">S</span><div><div class="yx-rev-name">Sara L.</div><div class="yx-stars">★★★★★</div></div></div>
     <p>"The medication is working so good I haven't started working out yet but I've lost 22 pounds in 2 months."</p>
     <span class="yx-result">Lost 22 pounds in 2 months</span></div>
    <div class="yx-rev"><div class="yx-rev-top"><span class="yx-av">B</span><div><div class="yx-rev-name">Bria F.</div><div class="yx-stars">★★★★★</div></div></div>
     <p>"I have been on this medication for 8 weeks now am amazed and so very happy with the 20 plus pounds I have lost, with no side affects at all! Anytime I have any questions there is always someone right there to give me an answer. I love this!"</p>
     <span class="yx-result">Lost 20 pounds in 8 weeks</span></div>
    <div class="yx-rev"><div class="yx-rev-top"><span class="yx-av">R</span><div><div class="yx-rev-name">Renee D.</div><div class="yx-stars">★★★★★</div></div></div>
     <p>"One of the things I appreciate most about the GLP-1 program is its convenience. The simple daily dosing schedule has made it incredibly easy to integrate into my routine. It's a relief to know that I don't have to worry about complicated steps — just take my medication and go."</p>
     <span class="yx-result">Lost 55 pounds in 12 months</span></div>
    <div class="yx-rev"><div class="yx-rev-top"><span class="yx-av">S</span><div><div class="yx-rev-name">Susie T.</div><div class="yx-stars">★★★★★</div></div></div>
     <p>"I feel like a weight has been lifted off my shoulders! I have lost over 27 pounds and although it might be a slow journey, it's been well worth it. YOURx Health is in constant communication with you to help with anything you might need."</p>
     <span class="yx-result">Lost 27 pounds in 8 months</span></div>
    <div class="yx-rev"><div class="yx-rev-top"><span class="yx-av">D</span><div><div class="yx-rev-name">Debi</div><div class="yx-stars">★★★★★</div></div></div>
     <p>"I have been using my medication for 2 months and I have lost 25 pounds so far. I am well on my way to reaching my goal for summer. Thank you so much YOURx Health!!"</p>
     <span class="yx-result">Lost 25 pounds in 2 months</span></div>
   </div>
   <p class="yx-vary">Individual results vary. Results depend on your health, dose, diet and activity, and how long you stay on treatment.</p>
  </div>

  <!-- offer graphic (clicks to survey) -->
  <div class="yx-offer">
   <a class="yx-imglink" href="${survey}" data-yx-survey target="_top" rel="noopener" aria-label="Get started with YOURx Health: check your eligibility"><img src="https://files.leadconnectorhq.com/file/6afc5ee3893246071fe7b9d3/yourx-health-vial-advertisement.png" alt="YOURx Health prescription tirzepatide: 123,000 prescriptions written, 3,000+ Google reviews at 4.7 stars, consultation, shipping and support included, oral and injectable options, no surprise price increases as your dosage changes" width="1254" height="1254" loading="lazy"></a>
  </div>

  <!-- final CTA -->
  <div class="yx-cta">
   <p class="yx-cta-title">See your price at every dose</p>
   <a class="yx-btn" href="${survey}" data-yx-survey target="_top" rel="noopener">Get Started</a>
   <p class="yx-micro">About 5 minutes. A licensed physician reviews every request.</p>
   <div class="yx-trust"><span>✓ LegitScript certified</span><span>✓ Licensed physicians</span><span>✓ Ships to all 50 states</span><span>✓ <a href="tel:+18335631061">(833) 563-1061</a></span></div>
  </div>

  <div class="yx-logo yx-logo-foot"><a href="${survey}" data-yx-survey target="_top" rel="noopener" aria-label="YOURx Health: get started"><img src="https://assets.cdn.filesafe.space/gEvLxQGmqQxP0v78ubVN/media/6ae8ec18736386d0dcea1109.svg" alt="YOURx Health" width="195" height="26" loading="lazy"></a></div>
  <div class="yx-fine">
   <p>Prescription required; a licensed physician decides eligibility. YOURx tirzepatide is compounded and is not FDA-approved. Compounded medicines are not reviewed by the FDA for safety, effectiveness or quality. Individual results vary. Zepbound, Wegovy and Foundayo are trademarks of their owners; YOURx Health is not affiliated with them.</p>
   <p>YOURx Health LLC · 880 22nd Street, Beaumont, TX 77706 · (833) 563-1061 · <a href="https://yourxhealth.com/privacy-policy/" target="_blank" rel="noopener">Privacy</a> · <a href="https://yourxhealth.com/terms-of-service/" target="_blank" rel="noopener">Terms</a></p>
  </div>

 </div>
</div>`;

  function mount() {
    var host = document.getElementById("yourx-listicle");
    if (!host) {
      host = document.createElement("div");
      host.id = "yourx-listicle";
      var me = document.currentScript || document.querySelector('script[src*="yourx-pages/listicle.js"]');
      if (me && me.parentNode) me.parentNode.insertBefore(host, me); else document.body.appendChild(host);
    }
    var st = document.createElement("style");
    st.textContent = CSS;
    host.innerHTML = "";
    host.appendChild(st);
    host.insertAdjacentHTML("beforeend", HTML);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", mount); else mount();
})();
