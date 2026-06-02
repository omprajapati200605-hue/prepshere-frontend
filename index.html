import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { RadarChart, Radar, PolarGrid, PolarAngleAxis, ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip,
BarChart, Bar, Cell, AreaChart, Area } from "recharts";

/* ============================================================
GLOBAL STYLES — injected into

<head> via style tag
  ============================================================ */
  const STYLES = `
  @import
  url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=IBM+Plex+Sans:ital,wght@0,300;0,400;0,500;0,600;1,400&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  :root {
  --navy: #080C1A;
  --navy2: #0D1426;
  --navy3: #111B30;
  --navy4: #162040;
  --cyan: #00D4FF;
  --cyan2: #00A8CC;
  --cyan3: rgba(0,212,255,0.12);
  --gold: #FFD166;
  --gold2: #E8B94F;
  --green: #06D6A0;
  --red: #EF476F;
  --amber: #FFB703;
  --purple: #845EF7;
  --glass: rgba(255,255,255,0.035);
  --glass2: rgba(255,255,255,0.06);
  --border: rgba(255,255,255,0.07);
  --b2: rgba(0,212,255,0.18);
  --text: #E2EAF4;
  --text2: #8A9BB8;
  --text3: #4A5568;
  --sw: 260px;
  --sc: 64px;
  }
  html { scroll-behavior: smooth; }
  body {
  font-family: 'IBM Plex Sans', sans-serif;
  background: var(--navy);
  color: var(--text);
  min-height: 100vh;
  overflow-x: hidden;
  }
  h1,h2,h3,h4,h5,h6 { font-family: 'Syne', sans-serif; }

  /* Scrollbar */
  ::-webkit-scrollbar { width: 5px; height: 5px; }
  ::-webkit-scrollbar-track { background: var(--navy2); }
  ::-webkit-scrollbar-thumb { background: rgba(0,212,255,0.25); border-radius: 4px; }

  /* Animated mesh background */
  .bg-mesh {
  position: fixed; inset: 0; z-index: 0; pointer-events: none;
  background:
  radial-gradient(ellipse 80% 60% at 10% 15%, rgba(0,212,255,0.055) 0%, transparent 60%),
  radial-gradient(ellipse 60% 50% at 85% 80%, rgba(255,209,102,0.035) 0%, transparent 55%),
  radial-gradient(ellipse 50% 70% at 55% 40%, rgba(6,214,160,0.025) 0%, transparent 55%),
  radial-gradient(ellipse 40% 40% at 30% 70%, rgba(132,94,247,0.03) 0%, transparent 50%);
  animation: bgPulse 10s ease-in-out infinite alternate;
  }
  @keyframes bgPulse {
  0% { opacity: 0.75; transform: scale(1); }
  100% { opacity: 1; transform: scale(1.03); }
  }

  /* Glass cards */
  .card {
  background: var(--glass);
  border: 1px solid var(--border);
  border-radius: 18px;
  backdrop-filter: blur(14px);
  transition: border-color .3s, box-shadow .3s, transform .3s;
  }
  .card:hover {
  border-color: rgba(0,212,255,0.22);
  box-shadow: 0 4px 40px rgba(0,212,255,0.07), 0 12px 32px rgba(0,0,0,0.28);
  }
  .card-lit {
  background: var(--glass2);
  border: 1px solid var(--b2);
  border-radius: 18px;
  backdrop-filter: blur(18px);
  box-shadow: 0 0 50px rgba(0,212,255,0.09), 0 20px 50px rgba(0,0,0,0.38);
  }

  /* Buttons */
  .btn { border: none; border-radius: 11px; cursor: pointer; font-family: 'Syne', sans-serif; font-weight: 700;
  transition: all .25s; display: inline-flex; align-items: center; gap: 7px; letter-spacing: .3px; }
  .btn-primary {
  background: linear-gradient(135deg, var(--cyan) 0%, var(--cyan2) 100%);
  color: var(--navy);
  padding: 11px 22px; font-size: 14px;
  box-shadow: 0 0 24px rgba(0,212,255,0.35);
  }
  .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 0 40px rgba(0,212,255,0.55), 0 8px 24px
  rgba(0,0,0,0.3); }
  .btn-primary:active { transform: translateY(0); }
  .btn-ghost { background: transparent; border: 1px solid var(--border); color: var(--text2); padding: 10px 20px;
  font-size: 13px; }
  .btn-ghost:hover { border-color: var(--cyan); color: var(--cyan); background: var(--cyan3); }
  .btn-gold { background: linear-gradient(135deg, var(--gold), var(--gold2)); color: var(--navy); padding: 11px 22px;
  font-size: 14px; box-shadow: 0 0 24px rgba(255,209,102,0.35); }
  .btn-gold:hover { transform: translateY(-2px); box-shadow: 0 0 42px rgba(255,209,102,0.55); }
  .btn-danger { background: rgba(239,71,111,0.12); border: 1px solid rgba(239,71,111,0.3); color: var(--red); padding:
  9px 18px; font-size: 13px; }
  .btn-danger:hover { background: rgba(239,71,111,0.22); }

  /* Inputs */
  input, textarea, select {
  background: rgba(255,255,255,0.045);
  border: 1px solid var(--border);
  border-radius: 11px;
  color: var(--text);
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 14px;
  padding: 12px 16px;
  width: 100%;
  transition: border-color .25s, box-shadow .25s;
  outline: none;
  }
  input:focus, textarea:focus, select:focus {
  border-color: var(--cyan);
  box-shadow: 0 0 0 3px rgba(0,212,255,0.1);
  }
  input::placeholder, textarea::placeholder { color: var(--text3); }
  select option { background: var(--navy3); }
  label { font-size: 12px; color: var(--text2); font-weight: 500; display: block; margin-bottom: 6px; letter-spacing:
  .4px; text-transform: uppercase; }

  /* Tags */
  .chip {
  display: inline-flex; align-items: center; gap: 5px;
  padding: 5px 13px; border-radius: 20px; font-size: 12px; font-weight: 600; cursor: pointer;
  border: 1px solid rgba(0,212,255,0.2); background: rgba(0,212,255,0.08); color: var(--cyan);
  transition: all .2s; font-family: 'IBM Plex Sans', sans-serif;
  }
  .chip:hover { background: rgba(0,212,255,0.18); border-color: var(--cyan); }
  .chip.on { background: var(--cyan); color: var(--navy); border-color: var(--cyan); }

  /* Progress */
  .pbar { height: 5px; background: rgba(255,255,255,0.06); border-radius: 3px; overflow: hidden; }
  .pfill { height: 100%; border-radius: 3px; background: linear-gradient(90deg, var(--cyan), var(--green)); box-shadow:
  0 0 8px rgba(0,212,255,0.5); transition: width .9s cubic-bezier(.4,0,.2,1); }

  /* Sidebar */
  .sidebar {
  position: fixed; left: 0; top: 0; bottom: 0; width: var(--sw);
  background: rgba(8,12,26,0.96); border-right: 1px solid var(--border);
  z-index: 200; display: flex; flex-direction: column;
  transition: width .3s cubic-bezier(.4,0,.2,1); overflow: hidden;
  backdrop-filter: blur(22px);
  }
  .sidebar.col { width: var(--sc); }
  .nav-item {
  display: flex; align-items: center; gap: 13px;
  padding: 12px 16px; margin: 2px 10px; border-radius: 11px;
  color: var(--text2); cursor: pointer; font-size: 14px; font-weight: 500;
  transition: all .2s; white-space: nowrap; position: relative;
  }
  .nav-item:hover { background: var(--glass2); color: var(--text); }
  .nav-item.act { background: rgba(0,212,255,0.1); color: var(--cyan); }
  .nav-item.act::after {
  content: ''; position: absolute; left: -10px; top: 50%; transform: translateY(-50%);
  width: 3px; height: 55%; background: var(--cyan); border-radius: 0 3px 3px 0;
  box-shadow: 0 0 8px var(--cyan);
  }
  .nav-icon { width: 20px; height: 20px; flex-shrink: 0; display: flex; align-items: center; justify-content: center; }

  /* Page transitions */
  .page-in { animation: pageIn .4s cubic-bezier(.4,0,.2,1) both; }
  @keyframes pageIn { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: translateY(0); } }

  /* Avatar */
  .avatar {
  border-radius: 50%; display: flex; align-items: center; justify-content: center;
  font-family: 'Syne', sans-serif; font-weight: 800;
  background: linear-gradient(135deg, var(--cyan), var(--green));
  color: var(--navy); flex-shrink: 0;
  }

  /* Circular ring */
  .ring-wrap { position: relative; display: inline-flex; align-items: center; justify-content: center; }
  .ring-wrap svg { transform: rotate(-90deg); }
  .ring-val { position: absolute; font-family: 'Syne', sans-serif; font-weight: 800; }

  /* Modals */
  .overlay {
  position: fixed; inset: 0; background: rgba(5,8,18,0.85);
  z-index: 1000; display: flex; align-items: center; justify-content: center;
  backdrop-filter: blur(10px); animation: fadeIn .2s;
  }
  @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
  .modal {
  background: var(--navy2); border: 1px solid var(--b2);
  border-radius: 22px; padding: 36px; max-width: 480px; width: 93%;
  box-shadow: 0 0 70px rgba(0,212,255,0.12), 0 36px 72px rgba(0,0,0,0.55);
  animation: modalIn .3s cubic-bezier(.4,0,.2,1);
  }
  @keyframes modalIn { from { opacity: 0; transform: scale(.94) translateY(12px); } to { opacity: 1; transform: scale(1)
  translateY(0); } }

  /* Toast */
  .toast-wrap { position: fixed; top: 18px; right: 18px; z-index: 9999; display: flex; flex-direction: column; gap: 8px;
  }
  .toast {
  min-width: 280px; padding: 14px 18px; border-radius: 13px;
  background: var(--navy3); border: 1px solid var(--border);
  display: flex; align-items: center; gap: 10px; font-size: 13px;
  animation: toastIn .3s ease; box-shadow: 0 10px 36px rgba(0,0,0,0.45);
  cursor: pointer;
  }
  @keyframes toastIn { from { opacity: 0; transform: translateX(20px); } to { opacity: 1; transform: translateX(0); } }
  .toast.s { border-color: rgba(6,214,160,.35); }
  .toast.e { border-color: rgba(239,71,111,.35); }
  .toast.i { border-color: rgba(0,212,255,.35); }

  /* XP bar */
  .xpbar { height: 7px; background: rgba(255,255,255,0.07); border-radius: 5px; overflow: hidden; }
  .xpfill { height: 100%; border-radius: 5px; background: linear-gradient(90deg, var(--gold), var(--gold2)); box-shadow:
  0 0 10px rgba(255,209,102,.5); transition: width 1.1s cubic-bezier(.4,0,.2,1); }

  /* Badge */
  .badge {
  width: 54px; height: 54px; border-radius: 50%; display: flex;
  align-items: center; justify-content: center; font-size: 22px;
  background: rgba(255,255,255,0.04); border: 2px solid var(--border);
  transition: all .3s; cursor: pointer; position: relative;
  }
  .badge.earned { border-color: var(--gold); background: rgba(255,209,102,0.1); }
  .badge:hover .tip { opacity: 1; transform: translateX(-50%) translateY(-6px); }
  .tip {
  position: absolute; bottom: calc(100% + 8px); left: 50%; transform: translateX(-50%) translateY(0);
  background: var(--navy3); border: 1px solid var(--border); border-radius: 8px;
  padding: 6px 11px; font-size: 11px; white-space: nowrap; opacity: 0;
  transition: all .2s; pointer-events: none; z-index: 10; font-family: 'IBM Plex Sans', sans-serif;
  }

  /* Heat cell */
  .hcell { border-radius: 7px; display: flex; align-items: center; justify-content: center; font-size: 11px;
  font-weight: 600; cursor: pointer; transition: transform .2s; }
  .hcell:hover { transform: scale(1.08); }

  /* Accordion */
  .acc-hd { display: flex; align-items: center; justify-content: space-between; padding: 15px 0; cursor: pointer;
  border-bottom: 1px solid var(--border); transition: color .2s; }
  .acc-hd:hover { color: var(--cyan); }
  .acc-body { overflow: hidden; max-height: 0; transition: max-height .35s ease; }
  .acc-body.open { max-height: 500px; }

  /* Glow texts */
  .gt { background: linear-gradient(135deg, var(--cyan), var(--green)); -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; background-clip: text; }
  .goldtext { background: linear-gradient(135deg, var(--gold), var(--gold2)); -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; background-clip: text; }

  /* Confetti */
  .conf { position: fixed; inset: 0; pointer-events: none; z-index: 9997; }
  .cp { position: absolute; width: 7px; height: 7px; animation: cf 3.2s ease-in forwards; }
  @keyframes cf { 0% { transform: translateY(-20px) rotate(0deg); opacity: 1; } 100% { transform: translateY(105vh)
  rotate(720deg); opacity: 0; } }

  /* Track card */
  .tcard {
  background: var(--glass); border: 1px solid var(--border); border-radius: 18px;
  padding: 24px; cursor: pointer; transition: all .3s; position: relative; overflow: hidden;
  }
  .tcard::before { content: ''; position: absolute; inset: 0; background: radial-gradient(ellipse at top left, var(--gc,
  rgba(0,212,255,0.05)), transparent 70%); opacity: 0; transition: opacity .3s; }
  .tcard:hover { transform: translateY(-5px); box-shadow: 0 20px 50px rgba(0,0,0,0.3); border-color:
  rgba(0,212,255,0.25); }
  .tcard:hover::before { opacity: 1; }
  .tcard.sel { border-color: var(--cyan); background: rgba(0,212,255,0.07); }

  /* Skeleton shimmer */
  .skel { background: linear-gradient(90deg, rgba(255,255,255,0.04) 25%, rgba(255,255,255,0.08) 50%,
  rgba(255,255,255,0.04) 75%); background-size: 200% 100%; animation: skel 1.6s infinite; border-radius: 8px; }
  @keyframes skel { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }

  /* Auth split */
  .auth-wrap { display: grid; grid-template-columns: 1fr 1fr; min-height: 100vh; }
  @media (max-width: 768px) {
  .auth-wrap { grid-template-columns: 1fr; }
  .auth-left { display: none; }
  .sidebar { transform: translateX(-100%); }
  .sidebar.mob { transform: translateX(0); }
  .main { margin-left: 0 !important; }
  }

  /* Password strength */
  .psbar { display: flex; gap: 4px; margin-top: 6px; }
  .psseg { flex: 1; height: 4px; border-radius: 2px; background: rgba(255,255,255,0.08); transition: background .3s; }

  /* Interview timer */
  .itimer { font-family: 'Syne', sans-serif; font-size: 34px; font-weight: 800; background: linear-gradient(135deg,
  var(--cyan), var(--green)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip:
  text; }

  /* Roadmap day */
  .rday { display: flex; gap: 14px; padding: 11px 0; border-bottom: 1px solid rgba(255,255,255,0.04); }
  .rday:last-child { border-bottom: none; }

  /* Resume */
  .res-sec { border-left: 3px solid var(--cyan); padding-left: 16px; margin: 14px 0; }

  /* Leaderboard */
  .lb-row { display: flex; align-items: center; gap: 12px; padding: 11px 14px; border-radius: 11px; transition:
  background .2s; }
  .lb-row:hover { background: var(--glass); }
  .lb-row.me { background: rgba(0,212,255,0.08); border: 1px solid rgba(0,212,255,0.2); }

  /* Print */
  @media print {
  .sidebar, .no-print { display: none !important; }
  .main { margin-left: 0 !important; }
  body { background: white !important; color: black !important; }
  .card, .card-lit { background: white !important; border: 1px solid #ddd !important; }
  }
  `;

  /* ============================================================
  CONSTANTS & MOCK DATA
  ============================================================ */
  const MOCK_USER = {
  id: "u1", name: "Alex Chen", email: "demo@prepsphere.ai", password: "demo",
  role: "Student", city: "Bangalore", linkedin: "linkedin.com/in/alexchen",
  degree: "B.Tech Computer Science", college: "IIT Bombay", gradYear: "2024", cgpa: "8.7",
  domains: ["Data Science", "Machine Learning", "Web Dev"],
  experience: 1, currentRole: "ML Intern", skills: ["Python","TensorFlow","React","SQL","Pandas"],
  targetCompany: "Product-based MNC", timeline: "3 months", availability: "Daily",
  xp: 2450, streak: 7, profileCompletion: 88, onboardingDone: true, avatar: null,
  };

  const TRACKS = [
  { id:"Data Science", icon:"📊", color:"#00D4FF", desc:"Statistics, EDA, pipelines, model eval" },
  { id:"Machine Learning",icon:"🤖",color:"#06D6A0",desc:"Algorithms, optimization, production ML" },
  { id:"Deep Learning", icon:"🧠", color:"#845EF7", desc:"Neural nets, transformers, CV & NLP" },
  { id:"DSA", icon:"💻", color:"#E74C3C", desc:"Data structures, algorithms, complexity" },
  { id:"SQL", icon:"🗄️", color:"#F39C12", desc:"Queries, optimization, DB design" },
  { id:"Web Dev", icon:"🌐", color:"#3498DB", desc:"Frontend, backend, APIs, performance" },
  { id:"System Design", icon:"📦", color:"#1ABC9C", desc:"Architecture, scalability, distributed" },
  { id:"Product Manager",icon:"🎯", color:"#E67E22", desc:"Product sense, metrics, roadmapping" },
  { id:"Cybersecurity", icon:"🔒", color:"#EF476F", desc:"Security, threat modeling, protocols" },
  { id:"Cloud & DevOps", icon:"☁️", color:"#5DADE2", desc:"AWS/GCP, CI/CD, Kubernetes" },
  ];

  const QB = {
  "Data Science": [
  { q:"Explain the bias-variance tradeoff and its effect on model selection.", cat:"Conceptual", hint:"Think
  underfitting vs overfitting scenarios." },
  { q:"What's the difference between supervised, unsupervised, and reinforcement learning?", cat:"Conceptual",
  hint:"Focus on the role of labeled data and feedback loops." },
  { q:"Write pseudocode to implement K-Means clustering from scratch.", cat:"Coding", hint:"Init centroids randomly,
  then iterate: assign → recalculate." },
  { q:"How do you handle a severely imbalanced dataset in classification?", cat:"Conceptual", hint:"Consider SMOTE,
  class weights, and evaluation metrics carefully." },
  { q:"Describe a time you had to clean and preprocess complex real-world data.", cat:"Behavioral", hint:"Use STAR:
  Situation, Task, Action, Result." },
  { q:"Compare MAE, MSE, RMSE and R² — when would you choose each?", cat:"Conceptual", hint:"Consider outlier
  sensitivity and interpretability." },
  { q:"Explain why Random Forest often outperforms a single Decision Tree.", cat:"Conceptual", hint:"Bagging reduces
  variance; feature randomness reduces correlation." },
  ],
  "Machine Learning": [
  { q:"Explain Gradient Descent variants: SGD, Adam, RMSProp. When to use each?", cat:"Conceptual", hint:"Focus on
  convergence speed vs stability trade-offs." },
  { q:"What is regularization? Compare L1 vs L2 penalty effects on weights.", cat:"Conceptual", hint:"L1→sparse,
  L2→shrink-all. Think feature selection." },
  { q:"Write pseudocode for logistic regression training via gradient descent.", cat:"Coding", hint:"Sigmoid →
  cross-entropy loss → backprop → update weights." },
  { q:"How does k-fold cross-validation help? Compare to LOOCV.", cat:"Conceptual", hint:"Trade-off between evaluation
  bias and computational cost." },
  { q:"Describe an end-to-end ML project you shipped. What went wrong?", cat:"Behavioral", hint:"Be honest about
  failures — interviewers value self-awareness." },
  { q:"Explain the kernel trick in SVMs. Why is it computationally efficient?", cat:"Conceptual", hint:"Implicit mapping
  — Gram matrix avoids explicit coordinates." },
  { q:"Your model performs well in training but poorly in production. Debug.", cat:"Case Study", hint:"Distribution
  shift, data leakage, feature drift, label errors." },
  ],
  "DSA": [
  { q:"Compare BFS vs DFS. Give one use case where each is strictly better.", cat:"Conceptual", hint:"BFS=shortest path
  in unweighted; DFS=topological sort, cycle detection." },
  { q:"Find the kth largest element in an unsorted array in O(n) average time.", cat:"Coding", hint:"QuickSelect —
  partition around pivot, recurse on one side only." },
  { q:"Solve the 0/1 Knapsack problem using dynamic programming.", cat:"Coding", hint:"Define dp[i][w]. Fill bottom-up.
  Reconstruct path from table." },
  { q:"What are the time/space complexities of merge sort, quicksort, heapsort?", cat:"Conceptual", hint:"Average vs
  worst case; in-place vs auxiliary space differences." },
  { q:"Design a data structure supporting insert, delete, getRandom in O(1).", cat:"Coding", hint:"Combine HashMap +
  ArrayList — swap-and-pop for deletion." },
  { q:"Tell me about a time you optimized a slow algorithm under pressure.", cat:"Behavioral", hint:"Quantify the
  improvement. What was your profiling methodology?" },
  { q:"Find top-K most frequent words from a stream of 10B tokens.", cat:"Case Study", hint:"Min-heap of size K, hash
  map for counts. Discuss memory tradeoffs." },
  ],
  "SQL": [
  { q:"Explain INNER, LEFT, RIGHT, and FULL OUTER JOIN with examples.", cat:"Conceptual", hint:"Venn diagrams as mental
  model; think about NULL propagation." },
  { q:"Find the second highest salary without using LIMIT or TOP.", cat:"Coding", hint:"Correlated subquery: SELECT MAX
  WHERE salary < (SELECT MAX ...)." }, { q:"Write a query using RANK(), DENSE_RANK() and ROW_NUMBER(). Explain
    differences.", cat:"Coding", hint:"Ties handling: RANK skips, DENSE_RANK doesn't, ROW_NUMBER is unique." }, {
    q:"Explain 1NF, 2NF, 3NF normalization with a concrete example.", cat:"Conceptual", hint:"Work through a
    denormalized orders table step by step." }, { q:"A query scanning 100M rows takes 30 seconds. How do you optimize?",
    cat:"Case Study", hint:"EXPLAIN ANALYZE, composite indexes, partitioning, materialized views." }, { q:"Write a
    query: customers who placed orders every month of 2024.", cat:"Coding", hint:"COUNT(DISTINCT month)=12 per
    customer_id, HAVING clause." }, { q:"Describe the most complex analytical SQL you've written. What was the business
    problem?", cat:"Behavioral", hint:"Focus on the business impact, not just the technical complexity." }, ], "Web Dev"
    : [ { q:"Explain the JavaScript event loop. How does it enable non-blocking async?", cat:"Conceptual", hint:"Call
    stack → microtask queue → task queue. Promises vs setTimeout order." }, { q:"How does React's Virtual DOM and
    reconciliation algorithm work?", cat:"Conceptual", hint:"Fiber architecture, diffing heuristics, key prop
    importance." }, { q:"Implement debounce from scratch in JavaScript.", cat:"Coding", hint:"Closure over timer ID;
    clearTimeout on each call before setting new one." }, { q:"Design RESTful endpoints for a Twitter-like follow
    system.", cat:"Case Study", hint:"Resource naming, HTTP verbs, idempotency, status codes." }, { q:"How would you
    optimize a React app rendering 50,000 list items?", cat:"Case Study", hint:"Virtualization (react-window),
    memoization, pagination, lazy loading." }, { q:"Explain CORS. Walk me through a preflight request.",
    cat:"Conceptual", hint:"Simple vs complex requests; Access-Control headers lifecycle." }, { q:"Describe your most
    technically challenging full-stack project.", cat:"Behavioral", hint:"Emphasize architectural decisions, trade-offs,
    and what you'd change." }, ], "System Design" : [ { q:"Design a URL shortener handling 100K requests/sec. Discuss
    all layers.", cat:"Case Study", hint:"Base62 hashing, read replicas, CDN caching, rate limiting." }, { q:"Explain
    CAP theorem. Give examples of CP, AP, and CA systems.", cat:"Conceptual", hint:"Cassandra=AP, HBase=CP, single-node
    MySQL=CA. Real-world tradeoffs." }, { q:"Design a real-time notification system for 100M users.", cat:"Case Study",
    hint:"Fan-out on write vs read; Kafka queues; WebSocket connections." }, { q:"Horizontal vs vertical scaling. When
    does each approach break down?", cat:"Conceptual", hint:"Stateful services resist horizontal; vertical has hardware
    ceiling." }, { q:"Design Google Docs — real-time collaborative editing.", cat:"Case Study", hint:"OT vs CRDT for
    conflict resolution; awareness cursors via WebSocket." }, { q:"Implement a rate limiter for an API with 1B
    requests/day.", cat:"Case Study", hint:"Token bucket vs sliding window; Redis INCR + EXPIRE; distributed counters."
    }, { q:"Walk me through a critical technical architecture decision you've made.", cat:"Behavioral", hint:"STAR with
    quantified outcomes. What did you learn from it?" }, ], }; // Fill remaining tracks with Data Science questions as
    fallback ["Deep Learning","Product Manager","Cybersecurity","Cloud & DevOps"].forEach(k=> QB[k] = QB["Data
    Science"]);

    const ACHIEVEMENTS = [
    { id:"first", emoji:"🎯", label:"First Interview", desc:"Complete your first mock interview" },
    { id:"streak7", emoji:"🔥", label:"7-Day Streak", desc:"Practice 7 days in a row" },
    { id:"perfect", emoji:"💯", label:"Perfect Score", desc:"Score 100 in any interview" },
    { id:"speed", emoji:"🚀", label:"Speed Demon", desc:"Finish 20% faster than time limit" },
    { id:"allround",emoji:"📚", label:"All-Rounder", desc:"Complete 5 different tracks" },
    { id:"top10", emoji:"🏅", label:"Top 10%", desc:"Reach top 10% in leaderboard" },
    { id:"century", emoji:"⚡", label:"Century", desc:"Complete 100 questions" },
    { id:"comeback",emoji:"🌟", label:"Comeback Kid", desc:"Improve score by 30+ points" },
    ];

    const LB_DATA = [
    { rank:1, name:"Priya Sharma", xp:12400, level:"Master", badge:"🏆" },
    { rank:2, name:"Rahul Kumar", xp:10200, level:"Master", badge:"🥈" },
    { rank:3, name:"Sarah Johnson", xp:9800, level:"Expert", badge:"🥉" },
    { rank:4, name:"Wei Chen", xp:8600, level:"Expert", badge:"" },
    { rank:5, name:"Aditya Patel", xp:7900, level:"Expert", badge:"" },
    { rank:6, name:"Alex Chen", xp:2450, level:"Skilled", badge:"", me:true },
    { rank:7, name:"Jordan Lee", xp:2100, level:"Skilled", badge:"" },
    { rank:8, name:"Arjun Singh", xp:1800, level:"Apprentice", badge:"" },
    { rank:9, name:"Lisa Wang", xp:1500, level:"Apprentice", badge:"" },
    { rank:10, name:"Mike Davis", xp:1200, level:"Novice", badge:"" },
    ];

    const HISTORY = [
    { id:1, track:"Data Science", diff:"Intermediate", score:78, date:"2025-05-28", dur:32, xp:780 },
    { id:2, track:"SQL", diff:"Beginner", score:92, date:"2025-05-25", dur:28, xp:920 },
    { id:3, track:"DSA", diff:"Intermediate", score:65, date:"2025-05-20", dur:45, xp:650 },
    { id:4, track:"Web Dev", diff:"Beginner", score:88, date:"2025-05-15", dur:25, xp:880 },
    { id:5, track:"Machine Learning",diff:"Intermediate",score:71, date:"2025-05-10", dur:38, xp:710 },
    ];

    const LEVELS = [
    { name:"Novice", min:0, max:500 },
    { name:"Apprentice", min:500, max:1500 },
    { name:"Skilled", min:1500, max:3000 },
    { name:"Expert", min:3000, max:6000 },
    { name:"Master", min:6000, max:Infinity },
    ];

    const QUOTES = [
    "The expert in anything was once a beginner.",
    "Consistency beats intensity — show up every day.",
    "Every interview is practice for the next one.",
    "Your next great opportunity is one interview away.",
    "Prepare like you've never won. Perform like you've never lost.",
    ];

    const ROADMAP_WEEKS = [
    { week:1, title:"Foundation Repair", color:"#EF476F", days:[
    { day:1, topic:"Statistics & Probability Refresher", type:"Video", time:"2h" },
    { day:2, topic:"Pandas & NumPy Deep Dive", type:"Practice", time:"2.5h" },
    { day:3, topic:"SQL Window Functions Masterclass", type:"Video", time:"2h" },
    { day:4, topic:"Python OOP & Functional Concepts", type:"Article", time:"1.5h" },
    { day:5, topic:"Linear Algebra for ML", type:"Article", time:"2h" },
    { day:6, topic:"Mock SQL Interview — Beginner", type:"Practice", time:"1h" },
    { day:7, topic:"Rest Day — Review & Reflect", type:"Article", time:"45m" },
    ]},
    { week:2, title:"Core Skill Building", color:"#FFB703", days:[
    { day:8, topic:"Model Evaluation Metrics (PR, ROC, F1)", type:"Video", time:"2h" },
    { day:9, topic:"Cross-Validation & Hyperparameter Tuning", type:"Article", time:"1.5h" },
    { day:10, topic:"Ensemble Methods: RF, XGBoost, LightGBM", type:"Video", time:"2.5h" },
    { day:11, topic:"DSA: Trees, Graphs, BFS/DFS", type:"Practice", time:"2h" },
    { day:12, topic:"System Design Foundations", type:"Article", time:"2h" },
    { day:13, topic:"Mock ML Interview — Intermediate", type:"Practice", time:"1h" },
    { day:14, topic:"Weak Areas Deep Dive", type:"Article", time:"1.5h" },
    ]},
    { week:3, title:"Mock Practice Intensive", color:"#00D4FF", days:[
    { day:15, topic:"Neural Networks & Backpropagation", type:"Video", time:"2.5h" },
    { day:16, topic:"NLP: Transformers & BERT", type:"Article", time:"2h" },
    { day:17, topic:"Full Mock: Data Science (30 min)", type:"Practice", time:"1h" },
    { day:18, topic:"Case Study: Recommendation System", type:"Practice", time:"2h" },
    { day:19, topic:"Full Mock: SQL (30 min)", type:"Practice", time:"1h" },
    { day:20, topic:"Behavioral Questions — STAR Practice", type:"Video", time:"1.5h" },
    { day:21, topic:"Analysis & Gap Identification", type:"Article", time:"1h" },
    ]},
    { week:4, title:"Final Prep & Polish", color:"#06D6A0", days:[
    { day:22, topic:"Advanced SQL: Optimization & Indexing", type:"Practice", time:"2h" },
    { day:23, topic:"System Design: Design for Scale", type:"Article", time:"2h" },
    { day:24, topic:"Full Mock: Advanced Level", type:"Practice", time:"1h" },
    { day:25, topic:"Resume & LinkedIn Optimization", type:"Article", time:"1.5h" },
    { day:26, topic:"HR & Culture Fit Questions", type:"Video", time:"1h" },
    { day:27, topic:"Final Full-Length Mock Interview", type:"Practice", time:"1.5h" },
    { day:28, topic:"Confidence Building & Final Review", type:"Article", time:"2h" },
    ]},
    ];

    /* ============================================================
    UTILITY FUNCTIONS
    ============================================================ */
    const initials = n => n?.split(" ").map(w=>w[0]).join("").toUpperCase().slice(0,2)||"??";
    const getLevelIdx = xp => LEVELS.findIndex((l,i) => xp>=l.min && (i===LEVELS.length-1||xp<LEVELS[i+1].min)); const
      getLevelName=xp=> LEVELS[getLevelIdx(xp)]?.name||"Master";
      const getXPPct = xp => {
      const i = getLevelIdx(xp), l = LEVELS[i], nx = LEVELS[i+1];
      if (!nx) return 100;
      return Math.round(((xp-l.min)/(nx.min-l.min))*100);
      };
      const pwdStrength = p => {
      if (!p) return 0;
      let s=0;
      if (p.length>=8) s++;
      if (/[A-Z]/.test(p)) s++;
      if (/[0-9]/.test(p)) s++;
      if (/[^A-Za-z0-9]/.test(p)) s++;
      return s;
      };
      const fmtDate = d => new Date(d).toLocaleDateString("en-IN",{day:"2-digit",month:"short",year:"numeric"});
      const fmtTime = s => `${String(Math.floor(s/60)).padStart(2,"0")}:${String(s%60).padStart(2,"0")}`;

      /* ============================================================
      TOAST SYSTEM
      ============================================================ */
      function Toasts({ list, remove }) {
      const icons = { s:"✓", e:"✗", i:"ℹ" };
      const colors = { s:"var(--green)", e:"var(--red)", i:"var(--cyan)" };
      return (
      <div className="toast-wrap">
        {list.map(t => (
        <div key={t.id} className={`toast ${t.type}`} onClick={()=>remove(t.id)}>
          <span style={{color:colors[t.type],fontWeight:700,fontSize:15}}>{icons[t.type]}</span>
          <span style={{flex:1}}>{t.msg}</span>
        </div>
        ))}
      </div>
      );
      }

      /* ============================================================
      AVATAR
      ============================================================ */
      function Av({ user, size=36 }) {
      if (user?.avatar) return <img src={user.avatar}
        style={{width:size,height:size,borderRadius:"50%",objectFit:"cover"}} alt="avatar" />;
      return (
      <div className="avatar" style={{width:size,height:size,fontSize:size*0.36}}>
        {initials(user?.name)}
      </div>
      );
      }

      /* ============================================================
      CIRCULAR RING
      ============================================================ */
      function Ring({ val, size=130, stroke=10, color="var(--cyan)" }) {
      const r=(size-stroke)/2, circ=2*Math.PI*r, dash=(val/100)*circ;
      return (
      <div className="ring-wrap" style={{width:size,height:size}}>
        <svg width={size} height={size}>
          <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth={stroke} />
          <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={color} strokeWidth={stroke}
            strokeDasharray={`${dash} ${circ}`} strokeLinecap="round" style={{transition:"stroke-dasharray 1.1s
            cubic-bezier(.4,0,.2,1)",filter:`drop-shadow(0 0 7px ${color})`}} />
        </svg>
        <div className="ring-val" style={{fontSize:size*0.2,color}}>
          {val}<span style={{fontSize:size*0.12}}>%</span>
        </div>
      </div>
      );
      }

      /* ============================================================
      CONFETTI
      ============================================================ */
      function Confetti({ show }) {
      if (!show) return null;
      const cols=["#00D4FF","#FFD166","#06D6A0","#EF476F","#845EF7","#F39C12"];
      return (
      <div className="conf">
        {Array.from({length:70}).map((_,i)=>(
        <div key={i} className="cp" style={{ left:`${Math.random()*100}%`, top:"-10px",
          background:cols[Math.floor(Math.random()*cols.length)], width:`${Math.random()*7+4}px`,
          height:`${Math.random()*7+4}px`, borderRadius:Math.random()>.5?"50%":"3px",
          animationDelay:`${Math.random()*2.5}s`,
          animationDuration:`${Math.random()*2+2.2}s`,
          }}/>
          ))}
        </div>
        );
        }

        /* ============================================================
        AUTH PAGE
        ============================================================ */
        function AuthPage({ onAuth, toast }) {
        const [mode, setMode] = useState("login");
        const [f, setF] = useState({ name:"", email:"", pwd:"", cpwd:"", role:"Student" });
        const [vis, setVis] = useState(false);
        const [errs, setErrs] = useState({});
        const [forgot, setForgot] = useState(false);
        const [fEmail, setFEmail] = useState("");

        const ps = pwdStrength(f.pwd);
        const psColors=["","#EF476F","#FFB703","#00D4FF","#06D6A0"];
        const psLabels=["","Weak","Fair","Good","Strong"];

        const validate = () => {
        const e={};
        if (mode==="signup" && !f.name.trim()) e.name="Name required";
        if (!f.email.includes("@")) e.email="Invalid email";
        if (f.pwd.length<6) e.pwd="Min 6 chars" ; if (mode==="signup" && f.pwd!==f.cpwd) e.cpwd="Passwords don't match"
          ; setErrs(e); return !Object.keys(e).length; }; const submit=()=> {
          if (!validate()) return;
          const users = JSON.parse(localStorage.getItem("ps_users")||"[]");
          if (mode==="signup") {
          if (users.find(u=>u.email===f.email)) { setErrs({email:"Email already registered"}); return; }
          const nu = {...MOCK_USER, id:Date.now()+"", name:f.name, email:f.email, password:f.pwd, role:f.role,
          onboardingDone:false, xp:0, streak:0, profileCompletion:20 };
          users.push(nu);
          localStorage.setItem("ps_users", JSON.stringify(users));
          localStorage.setItem("ps_session", JSON.stringify(nu));
          toast("Account created! Let's set up your profile. 🎉","s");
          onAuth(nu);
          } else {
          let u = users.find(u=>u.email===f.email && u.password===f.pwd);
          if (!u) {
          if (f.email===MOCK_USER.email) u=MOCK_USER;
          else { setErrs({pwd:"Invalid credentials"}); return; }
          }
          localStorage.setItem("ps_session", JSON.stringify(u));
          toast(`Welcome back, ${u.name}! 👋`,"s");
          onAuth(u);
          }
          };

          return (
          <>
            <div className="bg-mesh" />
            <div className="auth-wrap" style={{position:"relative",zIndex:1}}>
              {/* LEFT BRANDING */}
              <div className="auth-left"
                style={{background:"linear-gradient(160deg,rgba(0,212,255,0.04),rgba(6,214,160,0.02))",borderRight:"1px
                solid
                var(--border)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"60px
                48px",position:"relative",overflow:"hidden"}}>
                {[0,1,2].map(i=>(
                <div key={i} style={{position:"absolute",borderRadius:"50%",border:`1px solid
                  rgba(0,212,255,${0.07-i*0.02})`,width:`${280+i*160}px`,height:`${280+i*160}px`,top:"50%",left:"50%",transform:"translate(-50%,-50%)",animation:`bgPulse
                  ${5+i}s ease-in-out infinite alternate`}} />
                ))}
                <div style={{position:"relative",zIndex:1,textAlign:"center"}}>
                  <div style={{fontSize:56,marginBottom:14}}>🎯</div>
                  <h1 style={{fontSize:44,fontWeight:800,marginBottom:14}}><span className="gt">PrepSphere</span></h1>
                  <p style={{color:"var(--text2)",fontSize:16,lineHeight:1.75,maxWidth:360,marginBottom:44}}>
                    AI-powered mock interviews, deep analytics, and personalized roadmaps to land your dream role.
                  </p>
                  {[["🎙️","10 Interview Tracks"],["📊","Deep Performance Analytics"],["🗓️","30-Day Personalized
                  Roadmap"],["🏆","Gamified Learning Journey"]].map(([ic,tx])=>(
                  <div key={tx}
                    style={{display:"flex",alignItems:"center",gap:14,marginBottom:15,justifyContent:"flex-start"}}>
                    <span style={{fontSize:20}}>{ic}</span>
                    <span style={{color:"var(--text2)",fontSize:15}}>{tx}</span>
                  </div>
                  ))}
                </div>
              </div>

              {/* RIGHT FORM */}
              <div
                style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"44px
                32px"}}>
                <div style={{width:"100%",maxWidth:420}}>
                  <div style={{textAlign:"center",marginBottom:32}}>
                    <div style={{display:"block",marginBottom:8,fontSize:24}}>🎯</div>
                    <h2 style={{fontSize:30,fontWeight:800,marginBottom:8}}>{mode==="login"?"Welcome back":"Create
                      account"}</h2>
                    <p style={{color:"var(--text2)",fontSize:14}}>{mode==="login"?"Sign in to continue your
                      journey":"Start your interview prep today"}</p>
                  </div>

                  {/* Social */}
                  <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,marginBottom:22}}>
                    {[["G","Google"],["⌥","GitHub"]].map(([ic,lb])=>(
                    <button key={lb} className="btn btn-ghost" style={{justifyContent:"center",fontSize:13}}
                      onClick={()=>toast("Social login coming soon!","i")}>
                      <span style={{fontWeight:700,fontSize:14}}>{ic}</span>{lb}
                    </button>
                    ))}
                  </div>
                  <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:22}}>
                    <div style={{flex:1,height:1,background:"var(--border)"}} />
                    <span style={{fontSize:12,color:"var(--text3)"}}>or with email</span>
                    <div style={{flex:1,height:1,background:"var(--border)"}} />
                  </div>

                  <div style={{display:"flex",flexDirection:"column",gap:14}}>
                    {mode==="signup" && <>
                      <div><label>Full Name</label><input placeholder="Alex Chen" value={f.name}
                          onChange={e=>setF({...f,name:e.target.value})}/>{errs.name&&<p
                          style={{color:"var(--red)",fontSize:12,marginTop:4}}>{errs.name}</p>}</div>
                    </>}
                    <div>
                      <label>Email Address</label>
                      <input type="email" placeholder={mode==="login" ?"demo@prepsphere.ai":"you@example.com"}
                        value={f.email} onChange={e=>setF({...f,email:e.target.value})}/>
                      {errs.email&&<p style={{color:"var(--red)",fontSize:12,marginTop:4}}>{errs.email}</p>}
                    </div>
                    <div>
                      <label>Password</label>
                      <div style={{position:"relative"}}>
                        <input type={vis?"text":"password"} placeholder={mode==="login" ?"any password":"Min 6 chars"}
                          value={f.pwd} onChange={e=>setF({...f,pwd:e.target.value})} style={{paddingRight:44}}/>
                        <button onClick={()=>setVis(!vis)}
                          style={{position:"absolute",right:12,top:"50%",transform:"translateY(-50%)",background:"none",border:"none",cursor:"pointer",color:"var(--text3)",fontSize:14}}>
                          {vis?"🙈":"👁"}
                        </button>
                      </div>
                      {mode==="signup" && f.pwd && (
                      <>
                        <div className="psbar">{[1,2,3,4].map(i=>
                          <div key={i} className="psseg" style={{background:i<=ps?psColors[ps]:undefined}} />)}
                        </div>
                        <p style={{fontSize:12,color:psColors[ps],marginTop:4}}>{psLabels[ps]}</p>
                      </>
                      )}
                      {errs.pwd&&<p style={{color:"var(--red)",fontSize:12,marginTop:4}}>{errs.pwd}</p>}
                    </div>
                    {mode==="signup" && <>
                      <div>
                        <label>Confirm Password</label>
                        <input type="password" placeholder="Re-enter password" value={f.cpwd}
                          onChange={e=>setF({...f,cpwd:e.target.value})}/>
                        {errs.cpwd&&<p style={{color:"var(--red)",fontSize:12,marginTop:4}}>{errs.cpwd}</p>}
                      </div>
                      <div>
                        <label>I am a</label>
                        <select value={f.role} onChange={e=>setF({...f,role:e.target.value})}>
                          <option>Student</option>
                          <option>Professional</option>
                          <option>Career Switcher</option>
                        </select>
                      </div>
                    </>}
                    <button className="btn btn-primary"
                      style={{width:"100%",padding:"14px",fontSize:16,justifyContent:"center"}} onClick={submit}>
                      {mode==="login"?"Sign In →":"Create Account →"}
                    </button>
                    {mode==="login"&&(
                    <p style={{textAlign:"center",fontSize:13,color:"var(--text3)"}}>
                      <span style={{cursor:"pointer",color:"var(--cyan)"}} onClick={()=>setForgot(true)}>Forgot
                        password?</span>
                      &nbsp;·&nbsp;Demo: <code
                        style={{color:"var(--cyan)",fontSize:12}}>demo@prepsphere.ai / demo</code>
                    </p>
                    )}
                    <p style={{textAlign:"center",fontSize:14,color:"var(--text2)"}}>
                      {mode==="login"?"No account?":"Already have one?"}
                      <span style={{color:"var(--cyan)",cursor:"pointer",marginLeft:6}}
                        onClick={()=>{setMode(mode==="login"?"signup":"login");setErrs({});}}>
                        {mode==="login"?"Sign up":"Sign in"}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Forgot modal */}
            {forgot&&(
            <div className="overlay" onClick={()=>setForgot(false)}>
              <div className="modal" onClick={e=>e.stopPropagation()}>
                <h3 style={{fontSize:20,marginBottom:8}}>Reset Password</h3>
                <p style={{color:"var(--text2)",fontSize:14,marginBottom:20}}>We'll send a reset link to your email.</p>
                <input type="email" placeholder="your@email.com" value={fEmail} onChange={e=>setFEmail(e.target.value)}
                style={{marginBottom:16}}/>
                <div style={{display:"flex",gap:10}}>
                  <button className="btn btn-primary" style={{flex:1,justifyContent:"center"}}
                    onClick={()=>{toast("Reset link sent! (demo)","s");setForgot(false);}}>Send Link</button>
                  <button className="btn btn-ghost" onClick={()=>setForgot(false)}>Cancel</button>
                </div>
              </div>
            </div>
            )}
          </>
          );
          }

          /* ============================================================
          ONBOARDING WIZARD
          ============================================================ */
          function Onboarding({ user, onDone, toast }) {
          const [step, setStep] = useState(1);
          const [d, setD] = useState({ name:user.name||"", avatar:null, city:"", linkedin:"", degree:"", college:"",
          gradYear:"", cgpa:"", domains:[], experience:1, currentRole:"", skills:[], targetCompany:"", timeline:"",
          availability:"Daily" });
          const [skillIn, setSkillIn] = useState("");
          const DOMAINS=["Data Science","Machine Learning","Deep Learning","Web Dev","System
          Design","Product","DevOps","Cybersecurity","Cloud","Mobile","Blockchain","NLP"];

          const addSkill=()=>{
          if(skillIn.trim()&&!d.skills.includes(skillIn.trim())&&d.skills.length<5){ setD(x=>
            ({...x,skills:[...x.skills,skillIn.trim()]})); setSkillIn("");
            }
            };

            const handlePhoto=e=>{
            const file=e.target.files[0]; if(!file) return;
            const r=new FileReader(); r.onload=ev=>setD(x=>({...x,avatar:ev.target.result})); r.readAsDataURL(file);
            };

            const next=()=>step<5?setStep(s=>s+1):finish();
              const finish=()=>{
              const u={...user,...d,onboardingDone:true,profileCompletion:88};
              localStorage.setItem("ps_session",JSON.stringify(u));
              toast("Profile setup complete! 🎉","s"); onDone(u);
              };

              const icons=["👤","🎓","🎯","💼","🚀"];
              const labels=["Basic Info","Education","Focus Areas","Experience","Goals"];

              return (
              <>
                <div className="bg-mesh" />
                <div
                  style={{minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"40px
                  20px",position:"relative",zIndex:1}}>
                  <div style={{width:"100%",maxWidth:580}}>
                    <div style={{textAlign:"center",marginBottom:36}}>
                      <h1 style={{fontSize:30,fontWeight:800}}><span className="gt">PrepSphere</span></h1>
                      <p style={{color:"var(--text2)",marginTop:6}}>Let's personalize your experience</p>
                    </div>

                    {/* Progress */}
                    <div style={{marginBottom:32}}>
                      <div style={{display:"flex",justifyContent:"space-between",marginBottom:12}}>
                        {labels.map((lb,i)=>(
                        <div key={i} style={{textAlign:"center",flex:1}}>
                          <div style={{width:38,height:38,borderRadius:"50%",margin:"0 auto
                            5px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:16,background:i+1<=step?"linear-gradient(135deg,var(--cyan),var(--green))":"rgba(255,255,255,0.05)",border:`2px
                            solid ${i+1===step?"var(--cyan)":"transparent"}`,transition:"all
                            .3s",color:i+1<step?"var(--navy)":i+1===step?"var(--cyan)":"var(--text3)"}}>
                            {i+1<step?"✓":icons[i]} </div>
                          </div>
                          ))}
                        </div>
                        <div className="pbar">
                          <div className="pfill" style={{width:`${((step-1)/4)*100}%`}} />
                        </div>
                        <p style={{textAlign:"center",color:"var(--text2)",fontSize:13,marginTop:8}}>Step {step} of 5 —
                          {labels[step-1]}</p>
                      </div>

                      <div className="card-lit" style={{padding:36}}>
                        {step===1&&(
                        <div style={{display:"flex",flexDirection:"column",gap:18}}>
                          <h3 style={{fontSize:18}}>👤 Basic Information</h3>
                          <div style={{display:"flex",alignItems:"center",gap:16}}>
                            <div style={{width:72,height:72,borderRadius:"50%",overflow:"hidden",border:"2px solid
                              var(--b2)",flexShrink:0}}>
                              {d.avatar?<img src={d.avatar} style={{width:"100%",height:"100%",objectFit:"cover"}} />:
                              <div className="avatar" style={{width:72,height:72,fontSize:24}}>{initials(d.name)}</div>}
                            </div>
                            <label htmlFor="ph" style={{textTransform:"none",cursor:"pointer"}}><button
                                className="btn btn-ghost" style={{pointerEvents:"none"}}>Upload Photo</button></label>
                            <input id="ph" type="file" accept="image/*" style={{display:"none"}}
                              onChange={handlePhoto} />
                          </div>
                          <div><label>Full Name</label><input value={d.name}
                              onChange={e=>setD(x=>({...x,name:e.target.value}))}/></div>
                          <div><label>City</label><input placeholder="Bangalore, India" value={d.city}
                              onChange={e=>setD(x=>({...x,city:e.target.value}))}/></div>
                          <div><label>LinkedIn URL (optional)</label><input placeholder="linkedin.com/in/username"
                              value={d.linkedin} onChange={e=>setD(x=>({...x,linkedin:e.target.value}))}/></div>
                        </div>
                        )}
                        {step===2&&(
                        <div style={{display:"flex",flexDirection:"column",gap:18}}>
                          <h3 style={{fontSize:18}}>🎓 Education</h3>
                          <div>
                            <label>Degree</label>
                            <select value={d.degree} onChange={e=>setD(x=>({...x,degree:e.target.value}))}>
                              <option value="">Select...</option>
                              {["B.Tech / B.E.","B.Sc","M.Tech / M.E.","M.Sc","MBA","PhD","Other"].map(o=><option
                                key={o}>{o}</option>)}
                            </select>
                          </div>
                          <div><label>College / University</label><input placeholder="IIT Bombay" value={d.college}
                              onChange={e=>setD(x=>({...x,college:e.target.value}))}/></div>
                          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14}}>
                            <div><label>Grad Year</label><input placeholder="2024" value={d.gradYear}
                                onChange={e=>setD(x=>({...x,gradYear:e.target.value}))}/></div>
                            <div><label>CGPA / %</label><input placeholder="8.5" value={d.cgpa}
                                onChange={e=>setD(x=>({...x,cgpa:e.target.value}))}/></div>
                          </div>
                        </div>
                        )}
                        {step===3&&(
                        <div style={{display:"flex",flexDirection:"column",gap:16}}>
                          <h3 style={{fontSize:18}}>🎯 Area of Focus</h3>
                          <p style={{color:"var(--text2)",fontSize:14}}>Select all domains you're preparing for</p>
                          <div style={{display:"flex",flexWrap:"wrap",gap:8}}>
                            {DOMAINS.map(dm=>(
                            <span key={dm} className={`chip${d.domains.includes(dm)?" on":""}`}
                              onClick={()=>setD(x=>({...x,domains:x.domains.includes(dm)?x.domains.filter(v=>v!==dm):[...x.domains,dm]}))}>
                              {d.domains.includes(dm)&&"✓ "}{dm}
                            </span>
                            ))}
                          </div>
                        </div>
                        )}
                        {step===4&&(
                        <div style={{display:"flex",flexDirection:"column",gap:18}}>
                          <h3 style={{fontSize:18}}>💼 Experience</h3>
                          <div>
                            <label>Years of Experience: <strong
                                style={{color:"var(--cyan)"}}>{d.experience}</strong></label>
                            <input type="range" min={0} max={15} value={d.experience}
                              onChange={e=>setD(x=>({...x,experience:+e.target.value}))}
                            style={{background:"none",border:"none",padding:"8px 0",cursor:"pointer",width:"100%"}}/>
                          </div>
                          <div><label>Current Role</label><input placeholder="Intern / Fresher / SDE-1"
                              value={d.currentRole} onChange={e=>setD(x=>({...x,currentRole:e.target.value}))}/></div>
                          <div>
                            <label>Top Skills (up to 5)</label>
                            <div style={{display:"flex",gap:8,marginBottom:10}}>
                              <input placeholder="e.g. Python" value={skillIn} onChange={e=>setSkillIn(e.target.value)}
                              onKeyDown={e=>e.key==="Enter"&&addSkill()}/>
                              <button className="btn btn-ghost" onClick={addSkill} style={{flexShrink:0,padding:"10px
                                16px"}}>+</button>
                            </div>
                            <div style={{display:"flex",flexWrap:"wrap",gap:6}}>
                              {d.skills.map(s=>(
                              <span key={s} className="chip on">{s} <span style={{cursor:"pointer",marginLeft:2}}
                                  onClick={()=>setD(x=>({...x,skills:x.skills.filter(v=>v!==s)}))}>✕</span></span>
                              ))}
                            </div>
                          </div>
                        </div>
                        )}
                        {step===5&&(
                        <div style={{display:"flex",flexDirection:"column",gap:18}}>
                          <h3 style={{fontSize:18}}>🚀 Your Goals</h3>
                          <div>
                            <label>Target Company Type</label>
                            <select value={d.targetCompany}
                              onChange={e=>setD(x=>({...x,targetCompany:e.target.value}))}>
                              <option value="">Select...</option>
                              {["FAANG / MAANG","Product-based MNC","Startup / Unicorn","Service Company","Government /
                              PSU","Research / Academia"].map(o=><option key={o}>{o}</option>)}
                            </select>
                          </div>
                          <div>
                            <label>Timeline to Get Hired</label>
                            <select value={d.timeline} onChange={e=>setD(x=>({...x,timeline:e.target.value}))}>
                              <option value="">Select...</option>
                              {["1 month","3 months","6 months","1 year"].map(o=><option key={o}>{o}</option>)}
                            </select>
                          </div>
                          <div>
                            <label>Practice Availability</label>
                            <div style={{display:"flex",gap:8,marginTop:6}}>
                              {["Daily","3x/week","Weekends"].map(a=>(
                              <span key={a} className={`chip${d.availability===a?" on":""}`}
                                onClick={()=>setD(x=>({...x,availability:a}))}>{a}</span>
                              ))}
                            </div>
                          </div>
                        </div>
                        )}

                        <div style={{display:"flex",justifyContent:"space-between",marginTop:30}}>
                          {step>1?<button className="btn btn-ghost" onClick={()=>setStep(s=>s-1)}>← Back</button>:
                          <div />}
                          <button className="btn btn-primary" onClick={next}>
                            {step===5?"Complete Setup 🎉":"Continue →"}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
              </>
              );
              }

              /* ============================================================
              SIDEBAR
              ============================================================ */
              function Sidebar({ user, tab, setTab, col, setCol, mobOpen, setMobOpen }) {
              const nav=[
              {id:"dash", icon:"🏠", label:"Dashboard"},
              {id:"int", icon:"🎙️", label:"Start Interview"},
              {id:"analysis",icon:"📊",label:"My Analysis"},
              {id:"road", icon:"🗓️", label:"My Roadmap"},
              {id:"ach", icon:"🏆", label:"Achievements"},
              {id:"resume", icon:"📄", label:"My Resume"},
              {id:"profile",icon:"👤", label:"Profile"},
              {id:"settings",icon:"⚙️",label:"Settings"},
              ];
              const pct=getXPPct(user.xp);

              return (
              <div className={`sidebar${col?" col":""}${mobOpen?" mob":""}`}>
                {/* Logo */}
                <div style={{padding:"20px 16px 14px",borderBottom:"1px solid
                  var(--border)",display:"flex",alignItems:"center",justifyContent:col?"center":"space-between"}}>
                  {!col&&<span style={{fontSize:17,fontWeight:800}}><span className="gt">PrepSphere</span></span>}
                  <button onClick={()=>setCol(!col)}
                    style={{background:"none",border:"none",cursor:"pointer",color:"var(--text3)",fontSize:14,padding:4}}>
                    {col?"›":"‹"}
                  </button>
                </div>

                {/* User card */}
                {!col&&(
                <div style={{padding:"14px 16px",borderBottom:"1px solid var(--border)"}}>
                  <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:10}}>
                    <Av user={user} size={36} />
                    <div style={{overflow:"hidden",flex:1}}>
                      <p
                        style={{fontWeight:600,fontSize:13,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}}>
                        {user.name}</p>
                      <p style={{color:"var(--text3)",fontSize:11}}>{getLevelName(user.xp)} · Lv{getLevelIdx(user.xp)+1}
                      </p>
                    </div>
                  </div>
                  <div style={{display:"flex",justifyContent:"space-between",marginBottom:4}}>
                    <span style={{fontSize:11,color:"var(--text3)"}}>XP</span>
                    <span style={{fontSize:11,color:"var(--gold)",fontWeight:600}}>{user.xp?.toLocaleString()}</span>
                  </div>
                  <div className="xpbar">
                    <div className="xpfill" style={{width:`${pct}%`}} />
                  </div>
                </div>
                )}

                {/* Nav */}
                <nav style={{flex:1,padding:"10px 0",overflowY:"auto"}}>
                  {nav.map(it=>(
                  <div key={it.id} className={`nav-item${tab===it.id?" act":""}`} onClick={()=>
                    {setTab(it.id);setMobOpen(false);}}
                    title={col?it.label:""}>
                    <span className="nav-icon" style={{fontSize:17}}>{it.icon}</span>
                    {!col&&<span>{it.label}</span>}
                  </div>
                  ))}
                </nav>

                {/* Streak */}
                {!col&&(
                <div style={{padding:"12px 16px",borderTop:"1px solid
                  var(--border)",display:"flex",alignItems:"center",gap:8}}>
                  <span style={{fontSize:18,animation:"bgPulse 1s ease-in-out infinite alternate"}}>🔥</span>
                  <span style={{fontSize:13,color:"var(--text2)"}}>{user.streak} day streak</span>
                </div>
                )}

                {/* Logout */}
                <div className="nav-item" style={{margin:"4px 10px 12px",borderTop:"1px solid
                  var(--border)",paddingTop:12}} title={col?"Logout":""} onClick={()=>
                  {localStorage.removeItem("ps_session");window.location.reload();}}>
                  <span className="nav-icon" style={{fontSize:17}}>🚪</span>
                  {!col&&<span>Logout</span>}
                </div>
              </div>
              );
              }

              /* ============================================================
              DASHBOARD
              ============================================================ */
              function Dashboard({ user, setTab, toast }) {
              const quote=QUOTES[new Date().getDay()%QUOTES.length];
              const last=HISTORY[0];
              const scoreColor=s=>s>=80?"var(--green)":s>=60?"var(--amber)":"var(--red)";

              return (
              <div className="page-in" style={{padding:"32px 32px 64px"}}>
                {/* Welcome */}
                <div className="card-lit" style={{padding:"26px
                  30px",marginBottom:22,display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:18}}>
                  <div style={{display:"flex",alignItems:"center",gap:16}}>
                    <Av user={user} size={58} />
                    <div>
                      <h2 style={{fontSize:22,fontWeight:800,marginBottom:4}}>Welcome back, {user.name?.split(" ")[0]}!
                        👋</h2>
                      <p style={{color:"var(--text2)",fontSize:14,fontStyle:"italic"}}>"{quote}"</p>
                    </div>
                  </div>
                  <button className="btn btn-primary" onClick={()=>setTab("int")}>
                    🎙️ Start Interview
                  </button>
                </div>

                {/* Stats row */}
                <div
                  style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(160px,1fr))",gap:14,marginBottom:22}}>
                  {[["⚡","XP
                  Points",user.xp?.toLocaleString(),"var(--gold)"],["🏅","Level",getLevelName(user.xp),"var(--cyan)"],["🔥","Streak",`${user.streak}
                  days`,"#FF6B35"],["👤","Profile",`${user.profileCompletion}%`,"var(--green)"]].map(([ic,lb,val,col])=>(
                  <div key={lb} className="card" style={{padding:20}}>
                    <div style={{fontSize:24,marginBottom:8}}>{ic}</div>
                    <p style={{fontSize:22,fontWeight:800,color:col,fontFamily:"'Syne',sans-serif"}}>{val}</p>
                    <p style={{color:"var(--text3)",fontSize:12,marginTop:2}}>{lb}</p>
                  </div>
                  ))}
                </div>

                <div style={{display:"grid",gridTemplateColumns:"2fr 1fr",gap:20}}>
                  {/* Last interview + trend */}
                  <div className="card" style={{padding:24}}>
                    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:20}}>
                      <h3 style={{fontSize:16}}>Last Interview</h3>
                      <button className="btn btn-ghost" style={{padding:"6px 12px",fontSize:12}}
                        onClick={()=>setTab("int")}>⟳ Retry</button>
                    </div>
                    <div style={{display:"flex",alignItems:"center",gap:20,marginBottom:20}}>
                      <Ring val={last.score} size={84} stroke={8} color={scoreColor(last.score)} />
                      <div>
                        <p style={{fontSize:18,fontWeight:700}}>{last.track}</p>
                        <p style={{color:"var(--text2)",fontSize:13,marginBottom:8}}>{last.diff} · {fmtDate(last.date)}
                        </p>
                        <span style={{fontSize:12,padding:"3px
                          11px",borderRadius:20,background:last.score>=80?"rgba(6,214,160,0.12)":last.score>=60?"rgba(255,183,3,0.12)":"rgba(239,71,111,0.12)",color:scoreColor(last.score)}}>
                          {last.score>=80?"✓ Excellent":last.score>=60?"⚡ Good":"📚 Needs Work"}
                        </span>
                      </div>
                    </div>
                    <p style={{fontSize:12,color:"var(--text3)",marginBottom:8}}>Score Trend</p>
                    <ResponsiveContainer width="100%" height={80}>
                      <AreaChart data={[...HISTORY].reverse().map((h,i)=>({i:i+1,score:h.score}))}>
                        <defs>
                          <linearGradient id="cg" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="var(--cyan)" stopOpacity={0.3} />
                            <stop offset="95%" stopColor="var(--cyan)" stopOpacity={0} />
                          </linearGradient>
                        </defs>
                        <Area type="monotone" dataKey="score" stroke="var(--cyan)" fill="url(#cg)" strokeWidth={2}
                          dot={{fill:"var(--cyan)",r:3}} />
                        <Tooltip contentStyle={{background:"var(--navy3)",border:"1px solid
                          var(--border)",borderRadius:8,fontSize:12}} labelFormatter={()=>""}/>
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>

                  {/* Right column */}
                  <div style={{display:"flex",flexDirection:"column",gap:14}}>
                    {/* XP level */}
                    <div className="card" style={{padding:20}}>
                      <div style={{display:"flex",justifyContent:"space-between",marginBottom:10}}>
                        <div>
                          <p style={{fontSize:15,fontWeight:700}}>{getLevelName(user.xp)}</p>
                          <p style={{color:"var(--text3)",fontSize:12}}>Level {getLevelIdx(user.xp)+1}</p>
                        </div>
                        <span className="goldtext" style={{fontWeight:800,fontSize:18}}>⚡{user.xp}</span>
                      </div>
                      <div className="xpbar">
                        <div className="xpfill" style={{width:`${getXPPct(user.xp)}%`}} />
                      </div>
                      <p style={{fontSize:11,color:"var(--text3)",marginTop:5}}>{getXPPct(user.xp)}% to next level</p>
                    </div>
                    {/* Profile */}
                    <div className="card" style={{padding:20}}>
                      <p style={{fontSize:15,fontWeight:700,marginBottom:12}}>Profile Complete</p>
                      <div style={{display:"flex",alignItems:"center",gap:12}}>
                        <Ring val={user.profileCompletion} size={62} stroke={6} color="var(--green)" />
                        <div>
                          <p style={{color:"var(--text2)",fontSize:12,marginBottom:6}}>Add details to rank higher</p>
                          <button className="btn btn-ghost" style={{padding:"4px 10px",fontSize:12}}
                            onClick={()=>setTab("profile")}>Edit</button>
                        </div>
                      </div>
                    </div>
                    {/* Suggested */}
                    <div className="card" style={{padding:20,borderColor:"rgba(255,209,102,0.25)"}}>
                      <p style={{fontSize:12,color:"var(--gold)",marginBottom:6}}>💡 Next Suggestion</p>
                      <p style={{fontSize:14,fontWeight:700}}>SQL Window Functions</p>
                      <p style={{color:"var(--text3)",fontSize:12,marginBottom:12}}>Weak area from analysis</p>
                      <button className="btn btn-primary" style={{padding:"8px 14px",fontSize:12}}
                        onClick={()=>setTab("int")}>Practice →</button>
                    </div>
                  </div>
                </div>

                {/* Recent interviews */}
                <div className="card" style={{padding:24,marginTop:20}}>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:16}}>
                    <h3 style={{fontSize:16}}>Recent Interviews</h3>
                    <button className="btn btn-ghost" style={{padding:"6px 12px",fontSize:12}}
                      onClick={()=>setTab("analysis")}>View All</button>
                  </div>
                  {HISTORY.map((h,i)=>(
                  <div key={i} style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"11px
                    0",borderBottom:i<HISTORY.length-1?"1px solid var(--border)":"none"}}>
                    <div style={{display:"flex",alignItems:"center",gap:12}}>
                      <span style={{fontSize:22}}>{TRACKS.find(t=>t.id===h.track)?.icon||"🎯"}</span>
                      <div>
                        <p style={{fontWeight:600,fontSize:14}}>{h.track}</p>
                        <p style={{color:"var(--text3)",fontSize:12}}>{h.diff} · {fmtDate(h.date)}</p>
                      </div>
                    </div>
                    <div style={{textAlign:"right"}}>
                      <p style={{fontSize:20,fontWeight:800,color:scoreColor(h.score)}}>{h.score}</p>
                      <p style={{color:"var(--text3)",fontSize:11}}>+{h.xp} XP</p>
                    </div>
                  </div>
                  ))}
                </div>
              </div>
              );
              }

              /* ============================================================
              INTERVIEW — TRACK SELECTION
              ============================================================ */
              function TrackSelect({ onStart, toast }) {
              const [sel, setSel]=useState(null);
              const [diff, setDiff]=useState("Intermediate");
              const [dur, setDur]=useState(30);

              return (
              <div className="page-in" style={{padding:"32px 32px 64px"}}>
                <h2 style={{fontSize:24,fontWeight:800,marginBottom:8}}>Choose Your Interview Track</h2>
                <p style={{color:"var(--text2)",marginBottom:28}}>Select a domain, set difficulty, and start your mock
                  session</p>

                <div
                  style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(210px,1fr))",gap:14,marginBottom:30}}>
                  {TRACKS.map(t=>(
                  <div key={t.id} className={`tcard${sel===t.id?" sel":""}`} style={{"--gc":`${t.color}12`}}
                    onClick={()=>setSel(t.id)}>
                    {sel===t.id&&<div
                      style={{position:"absolute",top:12,right:12,width:20,height:20,borderRadius:"50%",background:"var(--cyan)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:11,color:"var(--navy)",fontWeight:700}}>
                      ✓</div>}
                    <div style={{fontSize:30,marginBottom:12}}>{t.icon}</div>
                    <h4 style={{fontSize:14,fontWeight:700,marginBottom:6}}>{t.id}</h4>
                    <p style={{color:"var(--text3)",fontSize:12,lineHeight:1.5}}>{t.desc}</p>
                  </div>
                  ))}
                </div>

                {sel&&(
                <div className="card-lit" style={{padding:28,maxWidth:560}}>
                  <h3 style={{fontSize:16,marginBottom:20}}>Configure: {TRACKS.find(t=>t.id===sel)?.icon} {sel}</h3>
                  <div style={{marginBottom:18}}>
                    <label>Difficulty</label>
                    <div style={{display:"flex",gap:8,marginTop:7}}>
                      {["Beginner","Intermediate","Advanced"].map(d=>(
                      <button key={d} className="btn" onClick={()=>setDiff(d)} style={{
                        padding:"7px 16px",fontSize:12,borderRadius:20,
                        background:diff===d?(d==="Beginner"?"rgba(6,214,160,0.2)":d==="Intermediate"?"rgba(255,183,3,0.2)":"rgba(239,71,111,0.2)"):"transparent",
                        border:`1px solid
                        ${diff===d?(d==="Beginner"?"var(--green)":d==="Intermediate"?"var(--amber)":"var(--red)"):"var(--border)"}`,
                        color:diff===d?(d==="Beginner"?"var(--green)":d==="Intermediate"?"var(--amber)":"var(--red)"):"var(--text2)",
                        }}>
                        {d==="Beginner"?"🟢":d==="Intermediate"?"🟡":"🔴"} {d}
                      </button>
                      ))}
                    </div>
                  </div>
                  <div style={{marginBottom:24}}>
                    <label>Duration</label>
                    <div style={{display:"flex",gap:8,marginTop:7}}>
                      {[15,30,45].map(m=>(
                      <button key={m} className="btn" onClick={()=>setDur(m)} style={{padding:"7px
                        16px",fontSize:12,borderRadius:20,background:dur===m?"rgba(0,212,255,0.15)":"transparent",border:`1px
                        solid ${dur===m?"var(--cyan)":"var(--border)"}`,color:dur===m?"var(--cyan)":"var(--text2)"}}>⏱
                        {m}m</button>
                      ))}
                    </div>
                  </div>
                  <button className="btn btn-primary"
                    style={{width:"100%",padding:14,fontSize:16,justifyContent:"center"}}
                    onClick={()=>onStart(sel,diff,dur)}>
                    🎙️ Start Interview →
                  </button>
                </div>
                )}
              </div>
              );
              }

              /* ============================================================
              INTERVIEW SESSION
              ============================================================ */
              function Session({ track, diff, durMin, onFinish, toast }) {
              const qs=useMemo(()=>(QB[track]||QB["Data Science"]).slice(0,6),[track]);
              const [ci, setCi]=useState(0);
              const [ans, setAns]=useState({});
              const [flagged, setFlagged]=useState(new Set());
              const [skipped, setSkipped]=useState(new Set());
              const [left, setLeft]=useState(durMin*60);
              const [hintT, setHintT]=useState(120);
              const [showHint, setShowHint]=useState(false);
              const [endModal, setEndModal]=useState(false);
              const tmr=useRef(); htmr=useRef(); atm=useRef();

              // prevent undeclared variable issues
              var htmr=useRef();

              useEffect(()=>{
              tmr.current=setInterval(()=>setLeft(t=>{if(t<=1){clearInterval(tmr.current);doFinish();return 0;}return
                t-1;}),1000); htmr.current=setInterval(()=>setHintT(t=>Math.max(0,t-1)),1000);
                atm.current=setInterval(()=>toast("Auto-saved ✓","i"),30000);
                return()=>{clearInterval(tmr.current);clearInterval(htmr.current);clearInterval(atm.current);};
                },[]);

                useEffect(()=>{setShowHint(false);setHintT(120);},[ci]);

                const doFinish=()=>{
                clearInterval(tmr.current);
                const answered=Object.values(ans).filter(a=>a.trim()).length;
                const base=Math.round((answered/qs.length)*65+Math.random()*28+7);
                const score=Math.min(100,Math.max(12,base));
                onFinish({track,diff,score,date:new
                Date().toISOString(),dur:durMin*60-left,ans,flagged:[...flagged],skipped:[...skipped],answered,total:qs.length,xp:score*10});
                };

                const q=qs[ci];
                const wc=(ans[ci]||"").split(/\s+/).filter(Boolean).length;
                const catColors={Conceptual:"var(--cyan)",Coding:"var(--amber)",Behavioral:"var(--green)","Case
                Study":"var(--purple)"};

                return (
                <div className="page-in" style={{padding:"28px 32px 64px",maxWidth:880,margin:"0 auto"}}>
                  {/* Header */}
                  <div
                    style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:22,flexWrap:"wrap",gap:12}}>
                    <div>
                      <p style={{fontSize:12,color:"var(--text3)"}}>Q {ci+1} of {qs.length}</p>
                      <p style={{color:"var(--text2)",fontSize:13}}>{track} · {diff}</p>
                    </div>
                    <div className="itimer">{fmtTime(left)}</div>
                    <button className="btn btn-danger" onClick={()=>setEndModal(true)}>End Session</button>
                  </div>

                  {/* Q track */}
                  <div style={{display:"flex",gap:4,marginBottom:22}}>
                    {qs.map((_,i)=>(
                    <div key={i} style={{flex:1,height:4,borderRadius:2,cursor:"pointer",transition:"background .3s",
                      background:i<ci?(skipped.has(i)?"var(--amber)":flagged.has(i)?"var(--red)":"var(--cyan)"):i===ci?"var(--cyan)":"rgba(255,255,255,0.08)"}}
                      onClick={()=>setCi(i)}/>
                      ))}
                    </div>

                    {/* Question */}
                    <div className="card-lit" style={{padding:28,marginBottom:18}}>
                      <div style={{display:"flex",gap:10,marginBottom:16,flexWrap:"wrap"}}>
                        <span style={{fontSize:11,fontWeight:600,padding:"3px
                          11px",borderRadius:20,background:`${catColors[q.cat]}18`,color:catColors[q.cat],border:`1px
                          solid ${catColors[q.cat]}30`}}>{q.cat}</span>
                        {flagged.has(ci)&&<span style={{fontSize:11,padding:"3px
                          11px",borderRadius:20,background:"rgba(239,71,111,0.1)",color:"var(--red)"}}>🚩
                          Flagged</span>}
                        {skipped.has(ci)&&<span style={{fontSize:11,padding:"3px
                          11px",borderRadius:20,background:"rgba(255,183,3,0.1)",color:"var(--amber)"}}>⏭
                          Skipped</span>}
                      </div>
                      <h3 style={{fontSize:18,lineHeight:1.65,marginBottom:18}}>{q.q}</h3>
                      {hintT===0?(
                      <div>
                        <button className="btn btn-ghost" style={{padding:"6px 13px",fontSize:12,marginBottom:8}}
                          onClick={()=>setShowHint(!showHint)}>
                          💡 {showHint?"Hide":"Show"} Hint
                        </button>
                        {showHint&&<div style={{background:"rgba(255,209,102,0.07)",border:"1px solid
                          rgba(255,209,102,0.2)",borderRadius:11,padding:"11px 15px",fontSize:13,color:"var(--text2)"}}>
                          💡 {q.hint}</div>}
                      </div>
                      ):(
                      <p style={{fontSize:12,color:"var(--text3)"}}>Hint available in {fmtTime(hintT)}</p>
                      )}
                    </div>

                    {/* Answer */}
                    <textarea placeholder="Type your answer here… (Ctrl+Enter → next question)" value={ans[ci]||""}
                      onChange={e=>setAns(a=>({...a,[ci]:e.target.value}))}
        onKeyDown={e=>{if(e.ctrlKey&&e.key==="Enter"){ci<qs.length-1?setCi(c=>c+1):setEndModal(true);}}}
        style={{width:"100%",minHeight:180,resize:"vertical",marginBottom:8,fontSize:15,lineHeight:1.7}}
      />
      <p style={{fontSize:12,color:"var(--text3)",textAlign:"right",marginBottom:20}}>{wc} words · Ctrl+Enter to advance</p>

      {/* Actions */}
      <div style={{display:"flex",justifyContent:"space-between",flexWrap:"wrap",gap:10}}>
        <div style={{display:"flex",gap:8}}>
          <button className="btn btn-ghost" style={{padding:"9px 15px",fontSize:13}} onClick={()=>setSkipped(s=>{const n=new Set(s);n.has(ci)?n.delete(ci):n.add(ci);return n;})}>
            ⏭ {skipped.has(ci)?"Unskip":"Skip"}
          </button>
          <button className="btn btn-ghost" style={{padding:"9px 15px",fontSize:13,borderColor:flagged.has(ci)?"var(--red)":"var(--border)",color:flagged.has(ci)?"var(--red)":"var(--text2)"}}
            onClick={()=>setFlagged(f=>{const n=new Set(f);n.has(ci)?n.delete(ci):n.add(ci);return n;})}>
            🚩 {flagged.has(ci)?"Unflag":"Flag"}
          </button>
        </div>
        <div style={{display:"flex",gap:8}}>
          {ci>0&&<button className="btn btn-ghost" onClick={()=>setCi(c=>c-1)}>← Prev</button>}
          {ci<qs.length-1
            ?<button className="btn btn-primary" onClick={()=>setCi(c=>c+1)}>Next →</button>
            :<button className="btn btn-gold" onClick={()=>setEndModal(true)}>Finish 🏁</button>
          }
        </div>
      </div>

      {endModal&&(
        <div className="overlay" onClick={()=>setEndModal(false)}>
          <div className="modal" onClick={e=>e.stopPropagation()}>
            <h3 style={{fontSize:20,marginBottom:8}}>Submit Interview?</h3>
            <p style={{color:"var(--text2)",fontSize:14,marginBottom:6}}>
              Answered: {Object.values(ans).filter(a=>a.trim()).length}/{qs.length}
            </p>
            <p style={{color:"var(--text2)",fontSize:14,marginBottom:20}}>
              Skipped: {skipped.size} · Flagged: {flagged.size}
            </p>
            <div style={{display:"flex",gap:10}}>
              <button className="btn btn-primary" style={{flex:1,justifyContent:"center"}} onClick={doFinish}>Submit & See Results</button>
              <button className="btn btn-ghost" onClick={()=>setEndModal(false)}>Continue</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ============================================================
   INTERVIEW RESULTS
   ============================================================ */
function Results({ res, onRetry, onAnalysis }) {
  const [conf, setConf]=useState(false);
  useEffect(()=>{ if(res.score>=80){setConf(true);setTimeout(()=>setConf(false),4200);} },[]);

  const grade=res.score>=90?"Excellent":res.score>=75?"Good":res.score>=50?"Needs Work":"Beginner";
  const gc=res.score>=90?"var(--green)":res.score>=75?"var(--cyan)":res.score>=50?"var(--amber)":"var(--red)";
  const breakdown=[
    {lb:"Accuracy",   val:Math.min(100,Math.round(res.score*.92+Math.random()*8))},
    {lb:"Depth",      val:Math.min(100,Math.round(res.score*.85+Math.random()*14))},
    {lb:"Speed",      val:Math.min(100,Math.round(res.score*.95+Math.random()*5))},
    {lb:"Communication",val:Math.min(100,Math.round(res.score*.88+Math.random()*12))},
  ];

  return (
    <div className="page-in" style={{padding:"32px 32px 64px",maxWidth:800,margin:"0 auto"}}>
      <Confetti show={conf}/>
      <div style={{textAlign:"center",marginBottom:36}}>
        <h2 style={{fontSize:28,fontWeight:800,marginBottom:6}}>Interview Complete! 🎉</h2>
        <p style={{color:"var(--text2)"}}>{res.track} · {res.diff}</p>
      </div>

      {/* Main score */}
      <div className="card-lit" style={{padding:44,textAlign:"center",marginBottom:22}}>
        <Ring val={res.score} size={170} stroke={14} color={gc}/>
        <div style={{marginTop:22}}>
          <span style={{fontSize:15,fontWeight:700,padding:"6px 22px",borderRadius:22,background:`${gc}18`,color:gc,border:`1px solid ${gc}35`}}>{grade}</span>
          <p style={{color:"var(--text2)",marginTop:12,fontSize:14}}>+{res.xp.toLocaleString()} XP earned</p>
        </div>
      </div>

      {/* Stats grid */}
      <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:14,marginBottom:22}}>
        {[["✅","Answered",`${res.answered}/${res.total}`],["⏭️","Skipped",res.skipped.length],["🚩","Flagged",res.flagged.length],["⏱️","Time Used",`${Math.round(res.dur/60)}m`],["⚡","XP Earned",`+${res.xp}`],["📅","Date",fmtDate(res.date)]].map(([ic,lb,val])=>(
          <div key={lb} className="card" style={{padding:"15px 18px",textAlign:"center"}}>
            <div style={{fontSize:20,marginBottom:5}}>{ic}</div>
            <p style={{fontSize:16,fontWeight:700}}>{val}</p>
            <p style={{color:"var(--text3)",fontSize:12}}>{lb}</p>
          </div>
        ))}
      </div>

      {/* Breakdown */}
      <div className="card" style={{padding:24,marginBottom:22}}>
        <h3 style={{fontSize:16,marginBottom:18}}>Score Breakdown</h3>
        {breakdown.map(b=>{
          const bc=b.val>=75?"var(--green)":b.val>=50?"var(--amber)":"var(--red)";
          return (
            <div key={b.lb} style={{marginBottom:13}}>
              <div style={{display:"flex",justifyContent:"space-between",marginBottom:5}}>
                <span style={{fontSize:14}}>{b.lb}</span>
                <span style={{fontWeight:700,color:bc}}>{b.val}%</span>
              </div>
              <div className="pbar"><div className="pfill" style={{width:`${b.val}%`,background:`linear-gradient(90deg,${bc},${bc}cc)`}}/></div>
            </div>
          );
        })}
      </div>

      {/* Actions */}
      <div style={{display:"flex",gap:12,justifyContent:"center",flexWrap:"wrap"}}>
        <button className="btn btn-primary" style={{padding:"12px 26px"}} onClick={onRetry}>⟳ Try Another Track</button>
        <button className="btn btn-gold" onClick={onAnalysis}>📊 View Full Analysis</button>
      </div>
    </div>
  );
}

/* ============================================================
   INTERVIEW PAGE (conductor)
   ============================================================ */
function InterviewPage({ user, onComplete, setTab, toast }) {
  const [phase, setPhase]=useState("select"); // select | session | results
  const [cfg, setCfg]=useState({});
  const [res, setRes]=useState(null);

  const start=(track,diff,dur)=>{ setCfg({track,diff,dur}); setPhase("session"); };
  const finish=r=>{ setRes(r); setPhase("results"); onComplete(r); };

  if (phase==="select") return <TrackSelect onStart={start} toast={toast}/>;
  if (phase==="session") return <Session track={cfg.track} diff={cfg.diff} durMin={cfg.dur} onFinish={finish} toast={toast}/>;
  if (phase==="results") return <Results res={res} onRetry={()=>setPhase("select")} onAnalysis={()=>setTab("analysis")}/>;
}

/* ============================================================
   ANALYSIS DASHBOARD
   ============================================================ */
function Analysis() {
  const [open, setOpen]=useState(null);

  const radar=[
    {axis:"Knowledge",val:78},{axis:"Problem Solving",val:65},{axis:"Communication",val:82},
    {axis:"Speed",val:70},{axis:"Accuracy",val:74},{axis:"Depth",val:60},
  ];
  const heat=[
    {t:"Statistics",l:"h"},{t:"Pandas",l:"h"},{t:"SQL Joins",l:"l"},{t:"ML Algos",l:"m"},
    {t:"Python",l:"h"},{t:"System Design",l:"l"},{t:"Neural Nets",l:"l"},{t:"React",l:"h"},
    {t:"DSA",l:"m"},{t:"Model Eval",l:"l"},{t:"Big Data",l:"m"},{t:"Git/DevOps",l:"m"},
  ];
  const hc={h:"#06D6A0",m:"#FFB703",l:"#EF476F"};

  const sampleQA=[
    {q:"Explain bias-variance tradeoff",sc:85,your:"Bias is error from simplistic model assumptions. Variance is sensitivity to data fluctuations. High bias = underfitting, high variance = overfitting...",ideal:"Bias-variance tradeoff describes the fundamental tension between two error types. High bias (underfitting) occurs when the model is too simple. High variance (overfitting) occurs when it memorizes training data. The sweet spot minimizes total error by balancing both through model complexity, regularization, and more data."},
    {q:"Write K-Means pseudocode",sc:62,your:"Pick k random points as centroids. Assign each point to nearest centroid. Recalculate centroid as mean. Repeat until stable.",ideal:"def kmeans(X, k, max_iter=100):\\n  centroids = X[random_choice(len(X), k)]\\n  for _ in range(max_iter):\\n    labels = [argmin(distance(x, c) for c in centroids) for x in X]\\n    new_c = [mean(X[labels==i]) for i in range(k)]\\n    if converged(centroids, new_c): break\\n    centroids = new_c\\n  return labels, centroids"},
  ];

  return (
    <div className="page-in" style={{padding:"32px 32px 64px"}}>
      <h2 style={{fontSize:24,fontWeight:800,marginBottom:6}}>Performance Analysis</h2>
      <p style={{color:"var(--text2)",marginBottom:28}}>Deep insights from your interview history</p>

      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:22,marginBottom:22}}>
        {/* Radar */}
        <div className="card" style={{padding:24}}>
          <h3 style={{fontSize:16,marginBottom:20}}>Skill Radar</h3>
          <ResponsiveContainer width="100%" height={240}>
            <RadarChart data={radar}>
              <PolarGrid stroke="rgba(255,255,255,0.08)"/>
              <PolarAngleAxis dataKey="axis" tick={{fill:"var(--text2)",fontSize:11}}/>
              <Radar dataKey="val" stroke="var(--cyan)" fill="var(--cyan)" fillOpacity={0.13} strokeWidth={2}/>
            </RadarChart>
          </ResponsiveContainer>
        </div>

        {/* Percentile */}
        <div className="card" style={{padding:24}}>
          <h3 style={{fontSize:16,marginBottom:18}}>Your Ranking</h3>
          <div style={{textAlign:"center",marginBottom:18}}>
            <p className="gt" style={{fontSize:46,fontWeight:800,lineHeight:1}}>67th</p>
            <p style={{color:"var(--text2)",fontSize:14}}>Percentile</p>
            <p style={{color:"var(--text3)",fontSize:12,marginTop:4}}>Better than 67% of Data Science aspirants</p>
          </div>
          <div style={{position:"relative",height:22,background:"rgba(255,255,255,0.06)",borderRadius:11,marginBottom:18}}>
            <div style={{height:"100%",width:"67%",background:"linear-gradient(90deg,rgba(0,212,255,0.25),rgba(0,212,255,0.55))",borderRadius:11}}/>
            <div style={{position:"absolute",left:"67%",top:"50%",transform:"translate(-50%,-50%)",width:16,height:16,borderRadius:"50%",background:"var(--cyan)",border:"2px solid var(--navy)",boxShadow:"0 0 10px var(--cyan)"}}/>
          </div>
          <ResponsiveContainer width="100%" height={110}>
            <BarChart data={HISTORY.slice(0,4)} barSize={18}>
              <XAxis dataKey="track" tick={{fill:"var(--text3)",fontSize:10}} tickFormatter={v=>v.split(" ")[0]}/>
              <YAxis hide domain={[0,100]}/>
              <Tooltip contentStyle={{background:"var(--navy3)",border:"1px solid var(--border)",borderRadius:8,fontSize:12}}/>
              <Bar dataKey="score" radius={[4,4,0,0]}>
                {HISTORY.slice(0,4).map((h,i)=><Cell key={i} fill={h.score>=80?"var(--green)":h.score>=60?"var(--amber)":"var(--red)"}/>)}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Strengths / Weaknesses */}
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:22,marginBottom:22}}>
        <div className="card" style={{padding:24}}>
          <h3 style={{fontSize:16,marginBottom:16}}>💪 Strengths</h3>
          {[{s:"Statistical Concepts",d:"Strong probability & distribution understanding"},{s:"Python Syntax",d:"Clean, readable, well-structured code"},{s:"SQL Basics",d:"Confident with SELECT, JOINs, aggregations"}].map(it=>(
            <div key={it.s} style={{display:"flex",gap:10,marginBottom:11,padding:"10px 13px",background:"rgba(6,214,160,0.07)",borderRadius:11,border:"1px solid rgba(6,214,160,0.18)"}}>
              <span style={{color:"var(--green)",marginTop:1}}>✓</span>
              <div><p style={{fontSize:13,fontWeight:600}}>{it.s}</p><p style={{fontSize:12,color:"var(--text3)"}}>{it.d}</p></div>
            </div>
          ))}
        </div>
        <div className="card" style={{padding:24}}>
          <h3 style={{fontSize:16,marginBottom:16}}>📚 Needs Improvement</h3>
          {[{s:"Model Evaluation",d:"Practice precision/recall, ROC-AUC, F1"},{s:"SQL Window Functions",d:"Focus on RANK, ROW_NUMBER, LAG/LEAD"},{s:"System Design",d:"Study distributed systems, scalability"}].map(it=>(
            <div key={it.s} style={{display:"flex",gap:10,marginBottom:11,padding:"10px 13px",background:"rgba(255,183,3,0.07)",borderRadius:11,border:"1px solid rgba(255,183,3,0.18)"}}>
              <span style={{color:"var(--amber)",marginTop:1}}>⚠</span>
              <div><p style={{fontSize:13,fontWeight:600}}>{it.s}</p><p style={{fontSize:12,color:"var(--text3)"}}>{it.d}</p></div>
            </div>
          ))}
        </div>
      </div>

      {/* Heatmap */}
      <div className="card" style={{padding:24,marginBottom:22}}>
        <h3 style={{fontSize:16,marginBottom:16}}>Topic Mastery Heatmap</h3>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(88px,1fr))",gap:8}}>
          {heat.map(t=>(
            <div key={t.t} className="hcell" style={{background:`${hc[t.l]}12`,border:`1px solid ${hc[t.l]}28`,color:hc[t.l],padding:"9px 5px",aspectRatio:1}} title={t.l==="h"?"Mastered":t.l==="m"?"Developing":"Needs Work"}>
              {t.t}
            </div>
          ))}
        </div>
        <div style={{display:"flex",gap:16,marginTop:12}}>
          {[["var(--green)","Mastered"],["var(--amber)","Developing"],["var(--red)","Needs Work"]].map(([c,l])=>(
            <div key={l} style={{display:"flex",alignItems:"center",gap:6,fontSize:12,color:"var(--text3)"}}>
              <div style={{width:10,height:10,borderRadius:2,background:c}}/>{l}
            </div>
          ))}
        </div>
      </div>

      {/* Q&A accordion */}
      <div className="card" style={{padding:24,marginBottom:22}}>
        <h3 style={{fontSize:16,marginBottom:16}}>Question Breakdown</h3>
        {sampleQA.map((qa,i)=>(
          <div key={i} className="acc-hd" onClick={()=>setOpen(open===i?null:i)}>
            <div style={{display:"flex",alignItems:"center",gap:10}}>
              <span style={{fontSize:12,fontWeight:700,padding:"2px 9px",borderRadius:12,background:qa.sc>=75?"rgba(6,214,160,0.13)":"rgba(255,183,3,0.13)",color:qa.sc>=75?"var(--green)":"var(--amber)"}}>{qa.sc}%</span>
              <span style={{fontSize:14}}>{qa.q}</span>
            </div>
            <span style={{color:"var(--text3)",fontSize:12}}>{open===i?"▲":"▼"}</span>
            <div className={`acc-body${open===i?" open":""}`} style={{width:"100%",paddingTop:open===i?14:0}}>
              {open===i&&(
                <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14,paddingBottom:16}}>
                  <div style={{background:"rgba(255,255,255,0.025)",borderRadius:11,padding:14}}>
                    <p style={{fontSize:12,color:"var(--text3)",marginBottom:7}}>Your Answer</p>
                    <p style={{fontSize:13,lineHeight:1.65}}>{qa.your}</p>
                  </div>
                  <div style={{background:"rgba(6,214,160,0.05)",border:"1px solid rgba(6,214,160,0.14)",borderRadius:11,padding:14}}>
                    <p style={{fontSize:12,color:"var(--green)",marginBottom:7}}>Ideal Answer</p>
                    <pre style={{fontSize:12,lineHeight:1.6,whiteSpace:"pre-wrap",fontFamily:"inherit"}}>{qa.ideal}</pre>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* History chart */}
      <div className="card" style={{padding:24}}>
        <h3 style={{fontSize:16,marginBottom:18}}>Interview History & Trend</h3>
        <ResponsiveContainer width="100%" height={180}>
          <LineChart data={[...HISTORY].reverse()}>
            <XAxis dataKey="track" tick={{fill:"var(--text3)",fontSize:11}} tickFormatter={v=>v.split(" ")[0]}/>
            <YAxis domain={[0,100]} tick={{fill:"var(--text3)",fontSize:11}}/>
            <Tooltip contentStyle={{background:"var(--navy3)",border:"1px solid var(--border)",borderRadius:8,fontSize:12}}/>
            <Line type="monotone" dataKey="score" stroke="var(--cyan)" strokeWidth={2.5} dot={{fill:"var(--cyan)",r:4}}/>
          </LineChart>
        </ResponsiveContainer>
        <div style={{marginTop:14}}>
          {HISTORY.map((h,i)=>(
            <div key={i} style={{display:"flex",justifyContent:"space-between",padding:"9px 0",borderBottom:i<HISTORY.length-1?"1px solid var(--border)":"none",fontSize:13}}>
              <span>{TRACKS.find(t=>t.id===h.track)?.icon} {h.track}</span>
              <span style={{color:"var(--text3)"}}>{fmtDate(h.date)}</span>
              <span style={{fontWeight:700,color:h.score>=80?"var(--green)":h.score>=60?"var(--amber)":"var(--red)"}}>{h.score}/100</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   ROADMAP
   ============================================================ */
function Roadmap({ user, toast }) {
  const [generated, setGen]=useState(false);
  const [done, setDone]=useState(new Set([1,2,3,4,5,6,7]));
  const [loading, setLoading]=useState(false);
  const allDays=ROADMAP_WEEKS.flatMap(w=>w.days);
  const pct=Math.round((done.size/allDays.length)*100);
  const typeIcons={Video:"🎬",Article:"📄",Practice:"💪"};
  const typeC={Video:"var(--red)",Article:"var(--cyan)",Practice:"var(--green)"};

  const gen=()=>{ setLoading(true); setTimeout(()=>{setLoading(false);setGen(true);toast("30-day roadmap generated! 🗓️","s");},1500); };
  const toggle=day=>setDone(s=>{const n=new Set(s);n.has(day)?n.delete(day):n.add(day);return n;});

  return (
    <div className="page-in" style={{padding:"32px 32px 64px"}}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:26,flexWrap:"wrap",gap:14}}>
        <div>
          <h2 style={{fontSize:24,fontWeight:800,marginBottom:6}}>30-Day Roadmap</h2>
          <p style={{color:"var(--text2)"}}>Personalized study plan based on your weak areas</p>
        </div>
        {generated&&(
          <button className="btn btn-ghost" onClick={()=>{toast("Printing...","i");window.print();}}>⬇ Download PDF</button>
        )}
      </div>

      {!generated?(
        <div className="card-lit" style={{padding:60,textAlign:"center",maxWidth:540,margin:"0 auto"}}>
          <div style={{fontSize:52,marginBottom:18}}>🗓️</div>
          <h3 style={{fontSize:22,marginBottom:12}}>Generate Your Roadmap</h3>
          <p style={{color:"var(--text2)",fontSize:14,lineHeight:1.75,marginBottom:32}}>
            We'll build a personalized 30-day plan targeting your weak areas (<strong>Model Evaluation, SQL Joins, System Design</strong>) for your goal of joining a <strong>{user.targetCompany||"top tech company"}</strong>.
          </p>
          <button className="btn btn-primary" style={{padding:"14px 42px",fontSize:16,justifyContent:"center"}} onClick={gen}>
            {loading?"⏳ Generating...":"✨ Generate My Roadmap"}
          </button>
        </div>
      ):(
        <>
          {/* Progress bar */}
          <div className="card" style={{padding:22,marginBottom:22}}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:10}}>
              <div style={{display:"flex",alignItems:"center",gap:8}}>
                <span style={{fontSize:20}}>🔥</span>
                <strong>{user.streak} day streak!</strong>
              </div>
              <span style={{color:"var(--cyan)",fontWeight:700}}>{done.size}/{allDays.length} days</span>
            </div>
            <div className="pbar" style={{height:10}}><div className="pfill" style={{width:`${pct}%`}}/></div>
            <p style={{fontSize:12,color:"var(--text3)",marginTop:5}}>{pct}% of roadmap complete</p>
          </div>

          {ROADMAP_WEEKS.map(wk=>(
            <div key={wk.week} className="card" style={{padding:24,marginBottom:14}}>
              <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:16}}>
                <div style={{width:36,height:36,borderRadius:"50%",background:`${wk.color}18`,border:`2px solid ${wk.color}`,display:"flex",alignItems:"center",justifyContent:"center",fontWeight:800,fontSize:13,color:wk.color}}>W{wk.week}</div>
                <div>
                  <h3 style={{fontSize:15}}>{wk.title}</h3>
                  <p style={{fontSize:12,color:"var(--text3)"}}>Days {wk.days[0].day}–{wk.days[wk.days.length-1].day}</p>
                </div>
              </div>
              {wk.days.map(dy=>(
                <div key={dy.day} className="rday">
                  <input type="checkbox" checked={done.has(dy.day)} onChange={()=>toggle(dy.day)} style={{width:16,height:16,marginTop:2,cursor:"pointer",accentColor:"var(--cyan)",flexShrink:0}}/>
                  <div style={{flex:1}}>
                    <div style={{display:"flex",alignItems:"center",gap:7,marginBottom:3}}>
                      <span style={{fontSize:11,color:"var(--text3)"}}>Day {dy.day}</span>
                      <span style={{fontSize:11,fontWeight:600,padding:"1px 8px",borderRadius:10,background:`${typeC[dy.type]}13`,color:typeC[dy.type]}}>{typeIcons[dy.type]} {dy.type}</span>
                      <span style={{fontSize:11,color:"var(--text3)"}}>⏱ {dy.time}</span>
                    </div>
                    <p style={{fontSize:14,textDecoration:done.has(dy.day)?"line-through":"none",color:done.has(dy.day)?"var(--text3)":"var(--text)"}}>{dy.topic}</p>
                  </div>
                  {done.has(dy.day)&&<span style={{color:"var(--green)",flexShrink:0}}>✓</span>}
                </div>
              ))}
            </div>
          ))}
        </>
      )}
    </div>
  );
}

/* ============================================================
   ACHIEVEMENTS
   ============================================================ */
function Achievements({ user }) {
  const earned=new Set(["first","streak7","speed"]);
  const rankColors=["var(--gold)","#C0C0C0","#CD7F32"];

  return (
    <div className="page-in" style={{padding:"32px 32px 64px"}}>
      <h2 style={{fontSize:24,fontWeight:800,marginBottom:6}}>Achievements</h2>
      <p style={{color:"var(--text2)",marginBottom:28}}>Track milestones and level up</p>

      {/* Level card */}
      <div className="card-lit" style={{padding:28,marginBottom:22,display:"flex",alignItems:"center",gap:24,flexWrap:"wrap"}}>
        <Ring val={getXPPct(user.xp)} size={100} stroke={9} color="var(--gold)"/>
        <div style={{flex:1}}>
          <h3 style={{fontSize:24,fontWeight:800}}><span className="goldtext">{getLevelName(user.xp)}</span></h3>
          <p style={{color:"var(--text2)",marginBottom:14}}>{user.xp?.toLocaleString()} XP · {getXPPct(user.xp)}% to next level</p>
          <div style={{display:"flex",gap:14,flexWrap:"wrap"}}>
            {LEVELS.map((l,i)=>(
              <div key={l.name} style={{display:"flex",alignItems:"center",gap:5,opacity:getLevelIdx(user.xp)>=i?1:0.3}}>
                <div style={{width:8,height:8,borderRadius:"50%",background:getLevelIdx(user.xp)>=i?"var(--gold)":"var(--border)"}}/>
                <span style={{fontSize:12,color:getLevelIdx(user.xp)>=i?"var(--gold)":"var(--text3)"}}>{l.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Badges */}
      <div className="card" style={{padding:24,marginBottom:22}}>
        <h3 style={{fontSize:16,marginBottom:20}}>Badges</h3>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(96px,1fr))",gap:14}}>
          {ACHIEVEMENTS.map(a=>(
            <div key={a.id} style={{textAlign:"center"}}>
              <div className={`badge${earned.has(a.id)?" earned":""}`} style={{margin:"0 auto 8px"}}>
                {a.emoji}
                <div className="tip">{a.label}: {a.desc}</div>
              </div>
              <p style={{fontSize:11,color:earned.has(a.id)?"var(--gold)":"var(--text3)",fontWeight:earned.has(a.id)?600:400}}>{a.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Leaderboard */}
      <div className="card" style={{padding:24}}>
        <h3 style={{fontSize:16,marginBottom:16}}>Global Leaderboard</h3>
        {LB_DATA.map((u,i)=>(
          <div key={i} className={`lb-row${u.me?" me":""}`}>
            <div style={{width:28,height:28,borderRadius:"50%",background:i<3?rankColors[i]:"var(--glass)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:12,fontWeight:800,flexShrink:0,color:i<3?"var(--navy)":"var(--text2)"}}>{u.rank}</div>
            <div className="avatar" style={{width:32,height:32,fontSize:12,flexShrink:0}}>{initials(u.name)}</div>
            <div style={{flex:1}}>
              <p style={{fontSize:14,fontWeight:u.me?700:500}}>{u.name} {u.me&&<span style={{color:"var(--cyan)",fontSize:11}}>(you)</span>}</p>
              <p style={{fontSize:11,color:"var(--text3)"}}>{u.level}</p>
            </div>
            <div style={{textAlign:"right"}}>
              <p className={i<3?"goldtext":""} style={{fontWeight:700,fontSize:14}}>{u.xp.toLocaleString()} XP</p>
              {u.badge&&<span style={{fontSize:16}}>{u.badge}</span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ============================================================
   RESUME BUILDER
   ============================================================ */
function Resume({ user, toast }) {
  const [tmpl, setTmpl]=useState(1);
  const [aiSum, setAiSum]=useState("");
  const [loading, setLoading]=useState(false);
  const hasHistory=HISTORY.length>0;

  const genAI=async()=>{
    setLoading(true);
    try {
      const r=await fetch("https://api.anthropic.com/v1/messages",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({
          model:"claude-sonnet-4-20250514",
          max_tokens:1000,
          messages:[{role:"user",content:`Write a punchy 3-sentence ATS-optimized professional resume summary (max 75 words) for: Name: ${user.name}, Role: ${user.currentRole||"Student"}, Skills: ${user.skills?.join(", ")}, Domains: ${user.domains?.join(", ")}, Degree: ${user.degree} from ${user.college}. Target: ${user.targetCompany||"top tech companies"}. Return ONLY the summary text, no labels.`}]
        })
      });
      const data=await r.json();
      const txt=data.content?.find(c=>c.type==="text")?.text||"";
      if(txt) { setAiSum(txt); toast("AI summary generated! ✨","s"); }
      else throw new Error();
    } catch {
      setAiSum(`${user.role||"Passionate"} technologist specializing in ${user.domains?.slice(0,2).join(" and ")||"software development"} with hands-on expertise in ${user.skills?.slice(0,3).join(", ")||"Python and data tools"}. Pursuing ${user.degree||"Computer Science"} from ${user.college||"a top university"} with strong foundations in both theoretical and applied domains. Ready to drive impactful solutions at ${user.targetCompany||"leading tech organizations"}.`);
      toast("AI summary ready!","s");
    }
    setLoading(false);
  };

  if (!hasHistory) return (
    <div className="page-in" style={{padding:32,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",minHeight:"60vh",textAlign:"center"}}>
      <div style={{fontSize:52,marginBottom:16}}>🔒</div>
      <h3 style={{fontSize:22,marginBottom:12}}>Resume Builder Locked</h3>
      <p style={{color:"var(--text2)",maxWidth:380,lineHeight:1.75}}>Complete your first mock interview to unlock the free AI Resume Builder!</p>
    </div>
  );

  const rs=[
    {bg:"var(--navy2)",border:"var(--b2)",acc:"var(--cyan)",text:"var(--text)"},
    {bg:"#FFFFFF",border:"#E5E7EB",acc:"#1F2937",text:"#1F2937"},
    {bg:"#F8F4FF",border:"#D8B4FE",acc:"#7C3AED",text:"#1F2937"},
  ][tmpl-1];

  return (
    <div className="page-in" style={{padding:"32px 32px 64px"}}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:26,flexWrap:"wrap",gap:14}}>
        <div>
          <h2 style={{fontSize:24,fontWeight:800,marginBottom:6}}>AI Resume Builder</h2>
          <p style={{color:"var(--text2)"}}>Auto-populated · AI-powered summary</p>
        </div>
        <div style={{display:"flex",gap:10,alignItems:"center"}}>
          <div style={{padding:"7px 15px",background:"rgba(6,214,160,0.1)",border:"1px solid rgba(6,214,160,0.3)",borderRadius:10,fontSize:13,color:"var(--green)",fontWeight:700}}>ATS: 74%</div>
          <button className="btn btn-primary" onClick={()=>{toast("Printing resume...","i");window.print();}}>⬇ Download PDF</button>
        </div>
      </div>

      {/* Templates */}
      <div style={{display:"flex",gap:10,marginBottom:20}}>
        {["Modern Dark","Clean Pro","Creative"].map((n,i)=>(
          <button key={n} className="btn" onClick={()=>setTmpl(i+1)} style={{padding:"9px 17px",fontSize:13,borderRadius:10,background:tmpl===i+1?"rgba(0,212,255,0.14)":"transparent",border:`1px solid ${tmpl===i+1?"var(--cyan)":"var(--border)"}`,color:tmpl===i+1?"var(--cyan)":"var(--text2)"}}>
            {n}
          </button>
        ))}
      </div>

      {/* AI button */}
      {!aiSum&&<button className="btn btn-gold" style={{marginBottom:20}} onClick={genAI} disabled={loading}>{loading?"✨ Generating...":"✨ Generate AI Summary"}</button>}

      {/* Resume */}
      <div style={{background:rs.bg,border:`1px solid ${rs.border}`,borderRadius:18,padding:44,color:rs.text,fontFamily:"'IBM Plex Sans',sans-serif",maxWidth:800,boxShadow:"0 24px 64px rgba(0,0,0,0.45)"}}>
        <div style={{borderBottom:`3px solid ${rs.acc}`,paddingBottom:20,marginBottom:20}}>
          <h1 style={{fontSize:28,fontWeight:800,color:rs.acc,marginBottom:4}}>{user.name}</h1>
          <p style={{fontSize:14,opacity:.7,marginBottom:8}}>{user.currentRole||"Software Developer"} · {user.city}</p>
          <div style={{display:"flex",gap:18,fontSize:12,opacity:.65,flexWrap:"wrap"}}>
            <span>📧 {user.email}</span>
            {user.linkedin&&<span>🔗 {user.linkedin}</span>}
            <span>🎓 {user.college}</span>
          </div>
        </div>

        <div className="res-sec" style={{borderColor:rs.acc,marginBottom:18}}>
          <h3 style={{fontSize:13,color:rs.acc,marginBottom:8,letterSpacing:1,textTransform:"uppercase"}}>Professional Summary</h3>
          <p style={{fontSize:13,lineHeight:1.75,opacity:.88}}>
            {aiSum||`${user.role} specializing in ${user.domains?.slice(0,2).join(" and ")||"technology"}. Pursuing ${user.degree} from ${user.college} with ${user.experience>0?`${user.experience} year(s) of`:"internship"} experience in ${user.skills?.slice(0,3).join(", ")||"core technologies"}.`}
          </p>
        </div>

        <div className="res-sec" style={{borderColor:rs.acc,marginBottom:18}}>
          <h3 style={{fontSize:13,color:rs.acc,marginBottom:10,letterSpacing:1,textTransform:"uppercase"}}>Technical Skills</h3>
          <div style={{display:"flex",flexWrap:"wrap",gap:6}}>
            {(user.skills||["Python","SQL","TensorFlow","React"]).map(s=>(
              <span key={s} style={{fontSize:12,padding:"4px 12px",borderRadius:16,background:`${rs.acc}12`,border:`1px solid ${rs.acc}28`,color:rs.acc}}>{s}</span>
            ))}
          </div>
        </div>

        <div className="res-sec" style={{borderColor:rs.acc,marginBottom:18}}>
          <h3 style={{fontSize:13,color:rs.acc,marginBottom:10,letterSpacing:1,textTransform:"uppercase"}}>Education</h3>
          <div style={{display:"flex",justifyContent:"space-between"}}>
            <div>
              <p style={{fontWeight:600,fontSize:14}}>{user.degree||"B.Tech Computer Science"}</p>
              <p style={{fontSize:13,opacity:.7}}>{user.college||"University"} · CGPA: {user.cgpa||"8.5"}</p>
            </div>
            <p style={{fontSize:12,opacity:.6}}>{user.gradYear||"2024"}</p>
          </div>
        </div>

        <div className="res-sec" style={{borderColor:rs.acc,marginBottom:18}}>
          <h3 style={{fontSize:13,color:rs.acc,marginBottom:10,letterSpacing:1,textTransform:"uppercase"}}>Experience</h3>
          <div style={{display:"flex",justifyContent:"space-between",marginBottom:8}}>
            <div>
              <p style={{fontWeight:600,fontSize:14}}>{user.currentRole||"Data Science Intern"}</p>
              <p style={{fontSize:13,opacity:.7}}>Tech Company · {user.city}</p>
            </div>
            <p style={{fontSize:12,opacity:.6}}>2023 – Present</p>
          </div>
          <ul style={{fontSize:13,opacity:.82,paddingLeft:20,lineHeight:1.85}}>
            <li>Built ML pipeline with Python & scikit-learn, improving accuracy by 18%</li>
            <li>Authored SQL queries processing 2M+ row datasets for business intelligence</li>
            <li>Developed React dashboards with D3.js for real-time stakeholder reporting</li>
          </ul>
        </div>

        <div className="res-sec" style={{borderColor:rs.acc}}>
          <h3 style={{fontSize:13,color:rs.acc,marginBottom:10,letterSpacing:1,textTransform:"uppercase"}}>Projects</h3>
          {[{n:"Customer Churn Predictor",d:"XGBoost model (91% accuracy) using Python, Pandas, SHAP interpretability"},{n:"E-commerce Analytics Dashboard",d:"Full-stack React + FastAPI with real-time SQL integration & live charts"}].map(p=>(
            <div key={p.n} style={{marginBottom:11}}>
              <p style={{fontWeight:600,fontSize:13}}>{p.n}</p>
              <p style={{fontSize:12,opacity:.72}}>{p.d}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ATS tips */}
      <div className="card" style={{padding:20,marginTop:18}}>
        <h4 style={{fontSize:14,marginBottom:12}}>💡 ATS Optimization Tips</h4>
        {[{ok:true,t:"Contains key technical skills"},{ok:true,t:"Professional summary present"},{ok:false,t:"Add quantified achievements (%, numbers)"},{ok:false,t:"Include more job-relevant keywords"}].map((t,i)=>(
          <div key={i} style={{display:"flex",gap:8,marginBottom:6,fontSize:13}}>
            <span style={{color:t.ok?"var(--green)":"var(--amber)"}}>{t.ok?"✓":"⚠"}</span>
            <span style={{color:t.ok?"var(--text2)":"var(--amber)"}}>{t.t}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ============================================================
   PROFILE PAGE
   ============================================================ */
function Profile({ user, onUpdate, toast }) {
  const [editing, setEdit]=useState(false);
  const [f, setF]=useState(user);

  const save=()=>{
    localStorage.setItem("ps_session",JSON.stringify(f));
    onUpdate(f); setEdit(false); toast("Profile updated!","s");
  };

  return (
    <div className="page-in" style={{padding:"32px 32px 64px",maxWidth:780}}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:26}}>
        <h2 style={{fontSize:24,fontWeight:800}}>My Profile</h2>
        <button className={editing?"btn btn-primary":"btn btn-ghost"} onClick={editing?save:()=>setEdit(true)}>
          {editing?"✓ Save Changes":"✎ Edit Profile"}
        </button>
      </div>

      <div className="card-lit" style={{padding:32,marginBottom:20}}>
        <div style={{display:"flex",gap:20,alignItems:"center",marginBottom:24,flexWrap:"wrap"}}>
          <Av user={user} size={80}/>
          <div>
            {editing?<input value={f.name} onChange={e=>setF(x=>({...x,name:e.target.value}))} style={{fontSize:20,fontWeight:700,marginBottom:8}}/>:<h3 style={{fontSize:22,fontWeight:800,marginBottom:4}}>{user.name}</h3>}
            <p style={{color:"var(--text2)",fontSize:14}}>{user.role} · {user.city}</p>
            <div style={{display:"flex",gap:7,marginTop:8,flexWrap:"wrap"}}>
              {user.domains?.slice(0,3).map(d=><span key={d} className="chip">{d}</span>)}
            </div>
          </div>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:18}}>
          {[["Email","email","📧"],["City","city","📍"],["College","college","🎓"],["Degree","degree","📜"],["CGPA","cgpa","⭐"],["Current Role","currentRole","💼"]].map(([lb,fd,ic])=>(
            <div key={fd}>
              <label>{ic} {lb}</label>
              {editing?<input value={f[fd]||""} onChange={e=>setF(x=>({...x,[fd]:e.target.value}))}/>:<p style={{fontSize:14,padding:"10px 0",color:user[fd]?"var(--text)":"var(--text3)"}}>{user[fd]||"Not set"}</p>}
            </div>
          ))}
        </div>
      </div>

      <div className="card" style={{padding:24}}>
        <h3 style={{fontSize:16,marginBottom:16}}>Stats</h3>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(130px,1fr))",gap:14}}>
          {[["Interviews",HISTORY.length],["Avg Score",`${Math.round(HISTORY.reduce((a,b)=>a+b.score,0)/HISTORY.length)}%`],["Total XP",user.xp?.toLocaleString()],["Streak",`${user.streak}d`]].map(([lb,val])=>(
            <div key={lb} style={{textAlign:"center",padding:16,background:"var(--glass)",borderRadius:12}}>
              <p className="gt" style={{fontSize:24,fontWeight:800}}>{val}</p>
              <p style={{color:"var(--text3)",fontSize:12}}>{lb}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   SETTINGS
   ============================================================ */
function AppSettings({ toast }) {
  const [dark, setDark]=useState(true);
  const [notif, setNotif]=useState({daily:true,ach:true,remind:false});

  const Toggle=({on,set})=>(
    <div onClick={()=>set(!on)} style={{width:44,height:24,borderRadius:12,cursor:"pointer",background:on?"var(--cyan)":"rgba(255,255,255,0.1)",position:"relative",transition:"background .2s",flexShrink:0}}>
      <div style={{width:18,height:18,borderRadius:"50%",background:"white",position:"absolute",top:3,left:on?23:3,transition:"left .2s",boxShadow:"0 1px 4px rgba(0,0,0,0.3)"}}/>
    </div>
  );

  const expData=()=>{
    const d={user:JSON.parse(localStorage.getItem("ps_session")||"{}"),history:HISTORY,achievements:["first","streak7","speed"]};
    const a=document.createElement("a");
    a.href=URL.createObjectURL(new Blob([JSON.stringify(d,null,2)],{type:"application/json"}));
    a.download="prepsphere_data.json"; a.click();
    toast("Data exported!","s");
  };

  return (
    <div className="page-in" style={{padding:"32px 32px 64px",maxWidth:620}}>
      <h2 style={{fontSize:24,fontWeight:800,marginBottom:26}}>Settings</h2>

      {[
        {title:"Appearance",items:[{lb:"Dark Mode",desc:"Recommended for long sessions",ctrl:<Toggle on={dark} set={setDark}/>}]},
        {title:"Notifications",items:[
          {lb:"Daily Reminders",desc:"Practice reminders",ctrl:<Toggle on={notif.daily} set={v=>setNotif(n=>({...n,daily:v}))}/>},
          {lb:"Achievement Alerts",desc:"Badge unlock notifications",ctrl:<Toggle on={notif.ach} set={v=>setNotif(n=>({...n,ach:v}))}/>},
          {lb:"Roadmap Reminders",desc:"Daily task nudges",ctrl:<Toggle on={notif.remind} set={v=>setNotif(n=>({...n,remind:v}))}/>},
        ]},
        {title:"Data & Privacy",items:[
          {lb:"Export My Data",desc:"Download everything as JSON",ctrl:<button className="btn btn-ghost" style={{padding:"6px 13px",fontSize:12}} onClick={expData}>⬇ Export</button>},
          {lb:"Delete Account",desc:"Permanently remove all data",ctrl:<button className="btn btn-danger" style={{padding:"6px 13px"}} onClick={()=>toast("Deletion requires email confirmation (demo)","i")}>Delete</button>},
        ]},
      ].map(sec=>(
        <div key={sec.title} className="card" style={{padding:24,marginBottom:14}}>
          <h3 style={{fontSize:15,marginBottom:16}}>{sec.title}</h3>
          {sec.items.map((it,i)=>(
            <div key={i} style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"13px 0",borderBottom:i<sec.items.length-1?"1px solid var(--border)":"none"}}>
              <div><p style={{fontSize:14,fontWeight:500}}>{it.lb}</p><p style={{fontSize:12,color:"var(--text3)"}}>{it.desc}</p></div>
              {it.ctrl}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

/* ============================================================
   ROOT APP
   ============================================================ */
export default function App() {
  // Inject styles
  useEffect(()=>{
    const s=document.createElement("style"); s.textContent=STYLES; document.head.appendChild(s);
    return()=>s.remove();
  },[]);

  const [user, setUser]=useState(()=>{
    try { const s=localStorage.getItem("ps_session"); return s?JSON.parse(s):null; } catch { return null; }
  });
  const [tab, setTab]=useState("dash");
  const [col, setCol]=useState(false);
  const [mob, setMob]=useState(false);
  const [toasts, setToasts]=useState([]);

  const toast=useCallback((msg,type="i")=>{
    const id=Date.now();
    setToasts(t=>[...t,{id,msg,type}]);
    setTimeout(()=>setToasts(t=>t.filter(x=>x.id!==id)),3500);
  },[]);
  const rmToast=id=>setToasts(t=>t.filter(x=>x.id!==id));

  const handleComplete=r=>{
    const upd={...user,xp:(user.xp||0)+r.xp};
    setUser(upd); localStorage.setItem("ps_session",JSON.stringify(upd));
    toast(`Interview done! +${r.xp} XP earned 🎉`,"s");
  };

  if (!user) return (
    <>
      <Toasts list={toasts} remove={rmToast}/>
      <AuthPage onAuth={setUser} toast={toast}/>
    </>
  );

  if (!user.onboardingDone) return (
    <>
      <Toasts list={toasts} remove={rmToast}/>
      <Onboarding user={user} onDone={setUser} toast={toast}/>
    </>
  );

  const SW=col?"var(--sc)":"var(--sw)";

  const pages={
    dash:     <Dashboard user={user} setTab={setTab} toast={toast}/>,
    int:      <InterviewPage user={user} onComplete={handleComplete} setTab={setTab} toast={toast}/>,
    analysis: <Analysis/>,
    road:     <Roadmap user={user} toast={toast}/>,
    ach:      <Achievements user={user}/>,
    resume:   <Resume user={user} toast={toast}/>,
    profile:  <Profile user={user} onUpdate={setUser} toast={toast}/>,
    settings: <AppSettings toast={toast}/>,
  };

  return (
    <div style={{minHeight:"100vh",background:"var(--navy)"}}>
      <div className="bg-mesh"/>
      <Toasts list={toasts} remove={rmToast}/>

      {/* Mobile overlay */}
      {mob&&<div onClick={()=>setMob(false)} style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.55)",zIndex:199,backdropFilter:"blur(4px)"}}/>}

      <Sidebar user={user} tab={tab} setTab={setTab} col={col} setCol={setCol} mobOpen={mob} setMobOpen={setMob}/>

      {/* Main */}
      <div className="main" style={{marginLeft:SW,minHeight:"100vh",transition:"margin-left .3s",position:"relative",zIndex:1}}>
        {/* Mobile topbar */}
        <div className="no-print" style={{display:"none",padding:"14px 20px",borderBottom:"1px solid var(--border)",alignItems:"center",gap:12,background:"rgba(8,12,26,0.96)",position:"sticky",top:0,zIndex:50,backdropFilter:"blur(14px)"}}>
          <button onClick={()=>setMob(true)} style={{background:"none",border:"none",cursor:"pointer",color:"var(--text)",fontSize:18}}>☰</button>
          <span style={{fontSize:16,fontWeight:800}}><span className="gt">PrepSphere</span></span>
        </div>

        <div key={tab}>{pages[tab]||pages.dash}</div>
      </div>

      <style>{`@media(max-width:768px){.main{margin-left:0!important;}.sidebar{transform:translateX(-100%)}.sidebar.mob{transform:translateX(0)}.no-print{display:flex!important}}`}</style>
    </div>
  );
}