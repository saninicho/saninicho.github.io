/* 화면을 그리는 공통 코드예요. 내용은 data.js와 work 폴더의 HTML에서 바꾸고, 이 파일은 건드리지 않아도 돼요. */
(function () {
  var S = window.SITE;
  var body = document.body;
  var page = body.dataset.page;
  var R = body.dataset.root || "";           // work 폴더 안 페이지는 "../"
  var CATS = {
    marketing: { title: "Marketing Content", ko: "마케팅 콘텐츠", href: "marketing.html" },
    local:     { title: "Local Content",     ko: "로컬 콘텐츠",   href: "local.html" }
  };

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  /* [대괄호] 글은 빈칸 표시 */
  function t(s) { s = String(s == null ? "" : s); return /^\[.*\]$/.test(s.trim()) ? '<span class="todo">' + esc(s) + "</span>" : esc(s); }
  function ph(label) { return '<div class="ph">' + esc(label || "IMAGE") + "</div>"; }
  function img(src, alt) {
    if (!src) return ph();
    return '<img src="' + esc(R + src) + '" alt="' + esc(alt || "") + '" loading="lazy" ' +
      'onerror="this.outerHTML=\'<div class=&quot;ph&quot;>사진을 찾을 수 없어요</div>\'">';
  }
  function $(sel, el) { return (el || document).querySelector(sel); }
  function workHref(w) { return R + "work/" + encodeURIComponent(w.id) + ".html"; }
  function card(w) {
    return '<a class="card" href="' + workHref(w) + '" data-tags="' + esc((w.tags || []).join("|")) + '">' +
      '<div class="thumb">' + img(w.cover, w.name) + "</div>" +
      '<div class="cap"><span>' + t(w.name) + "</span>" +
      ((w.tags || []).length ? '<span class="sep"></span><span class="tag">' + esc(w.tags.join(" & ")) + "</span>" : "") +
      "</div></a>";
  }
  function services(list) {
    return '<div class="services">' + (list || []).map(function (s) {
      return "<details><summary><span>" + esc(s.name) + '<span class="ko">' + esc(s.ko) + "</span></span></summary>" +
        '<p class="desc">' + t(s.desc) + "</p></details>";
    }).join("") + "</div>";
  }
  var c = S.contact || {};

  /* ---------- 머리 ---------- */
  var cat = body.dataset.cat || page;
  var links = [
    ["marketing", "Marketing", "marketing.html"],
    ["local", "Local", "local.html"],
    ["photo", "Photo Studio", "photo.html"],
    ["about", "About", "about.html"]
  ];
  body.insertAdjacentHTML("afterbegin",
    '<header class="site-header"><div class="wrap">' +
      '<a class="logo" href="' + R + 'index.html"><span class="mark" aria-hidden="true"></span>' + esc(S.name) + "</a>" +
      '<button class="menu-btn" aria-label="메뉴 열기" aria-expanded="false" aria-controls="nav"></button>' +
      '<nav class="nav" id="nav">' + links.map(function (l) {
        return '<a href="' + R + l[2] + '"' + (cat === l[0] ? ' class="on" aria-current="page"' : "") + ">" + l[1] + "</a>";
      }).join("") + "</nav>" +
    "</div></header>");
  var btn = $(".menu-btn"), nav = $(".nav");
  btn.addEventListener("click", function () {
    var open = nav.classList.toggle("open");
    btn.setAttribute("aria-expanded", open);
    btn.setAttribute("aria-label", open ? "메뉴 닫기" : "메뉴 열기");
    document.documentElement.style.overflow = open ? "hidden" : "";
  });

  /* ---------- 바닥 ---------- */
  body.insertAdjacentHTML("beforeend",
    '<footer class="site-footer"><div class="wrap">' +
      "<span>© " + new Date().getFullYear() + " " + esc(S.name) + "</span>" +
      '<span class="links">' + [
        c.email ? '<a href="mailto:' + esc(c.email) + '">' + esc(c.email) + "</a>" : "",
        c.instagram ? '<a href="https://instagram.com/' + esc(c.instagram) + '" target="_blank" rel="noopener">Instagram</a>' : "",
        c.address ? "<span>" + esc(c.address) + "</span>" : ""
      ].filter(Boolean).join("") + "</span>" +
    "</div></footer>");

  var main = $("main");
  var works = S.works || [];

  /* ---------- 홈 ---------- */
  if (page === "home") {
    var featured = works.filter(function (w) { return w.featured; }).slice(0, 8);
    var lead = featured[0];
    main.innerHTML =
      '<section class="hero wrap"><h1>' + t(S.headline) + "</h1>" +
        '<div class="hero-media">' + (lead ? '<a href="' + workHref(lead) + '" aria-label="' + esc(lead.name) + '">' + img(lead.cover, lead.name) + "</a>" : ph()) + "</div>" +
      "</section>" +
      '<section class="intro wrap reveal"><h2>' + t(S.intro.title) + "</h2>" + (S.intro.body || []).map(function (p) { return "<p>" + t(p) + "</p>"; }).join("") + "</section>" +
      (featured.length ? '<section class="wrap reveal"><div class="sec-title"><h2>Selected Works</h2></div>' +
        '<div class="rail">' + featured.map(card).join("") + "</div>" +
        '<div class="pills"><a class="pill" href="marketing.html">Marketing 전체 보기</a><a class="pill" href="local.html">Local 전체 보기</a></div></section>' : "") +
      '<section class="services-band"><div class="wrap reveal"><p class="eyebrow">What we do</p>' + services(S.services) + "</div></section>" +
      ((S.brands || []).length ? '<section class="brands-sec wrap reveal"><p class="eyebrow">Brands we worked with</p><ul class="brand-list">' +
        S.brands.map(function (b) { return "<li>" + t(b) + "</li>"; }).join("") + "</ul></section>" : "") +
      '<section class="contact-sec wrap reveal"><p class="eyebrow">Contact</p><p class="contact-big">' +
        (c.email ? '<a href="mailto:' + esc(c.email) + '">' + esc(c.email) + "</a>" : '<span class="todo">[이메일 주소]</span>') +
        (c.instagram ? '<br><a href="https://instagram.com/' + esc(c.instagram) + '" target="_blank" rel="noopener">@' + esc(c.instagram) + "</a>" : "") +
      '</p><p class="contact-meta">' + esc(c.address) + "</p></section>";
  }

  /* ---------- 마케팅 / 로컬 목록 ---------- */
  if (page === "marketing" || page === "local") {
    var list = works.filter(function (w) { return w.cat === page; });
    var cats = ((S.categories || {})[page] || []).slice();
    list.forEach(function (w) { if (w.category && cats.indexOf(w.category) < 0) cats.push(w.category); });
    function slug(s) { return String(s).toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9가-힣]+/g, "-").replace(/^-|-$/g, ""); }
    main.innerHTML =
      '<section class="page-head wrap"><h1>' + CATS[page].title + '</h1><p class="sub">' + CATS[page].ko + "</p></section>" +
      (cats.length ? '<div class="filters wrap" role="group" aria-label="카테고리"><button class="on" data-c="" aria-pressed="true">All</button>' +
        cats.map(function (x) { return '<button data-c="' + esc(x) + '" aria-pressed="false">' + esc(x) + "</button>"; }).join("") + "</div>" : "") +
      (list.length ? '<section class="grid wrap">' + list.map(function (w) {
        return card(w).replace('<a class="card"', '<a class="card" data-c="' + esc(w.category || "") + '"');
      }).join("") + '</section><p class="empty wrap" id="none" hidden>이 카테고리에는 아직 작업이 없어요.</p>' : '<p class="empty wrap">아직 올린 작업이 없어요.</p>');

    function pick(name) {
      var shown = 0;
      main.querySelectorAll(".filters button").forEach(function (x) {
        var on = x.dataset.c === name; x.classList.toggle("on", on); x.setAttribute("aria-pressed", on);
      });
      main.querySelectorAll(".card").forEach(function (el) {
        var hide = !!name && el.dataset.c !== name;
        el.classList.toggle("hide", hide); if (!hide) shown++;
      });
      var none = $("#none", main); if (none) none.hidden = shown > 0;
    }
    main.addEventListener("click", function (e) {
      var b = e.target.closest(".filters button");
      if (!b) return;
      pick(b.dataset.c);
      history.replaceState(null, "", b.dataset.c ? "#" + slug(b.dataset.c) : location.pathname);
    });
    /* 주소 끝에 #living 처럼 붙어 있으면 그 카테고리로 열기 */
    var h = decodeURIComponent(location.hash.slice(1));
    if (h) cats.forEach(function (x) { if (slug(x) === h) pick(x); });
  }

  /* ---------- 작업 상세: 이전 / 다음 ---------- */
  if (page === "work") {
    var id = body.dataset.id;
    var same = works.filter(function (w) { return w.cat === cat; });
    var i = -1;
    same.forEach(function (w, k) { if (w.id === id) i = k; });
    if (i >= 0 && same.length > 1) {
      var prev = same[(i - 1 + same.length) % same.length], next = same[(i + 1) % same.length];
      $("article", main).insertAdjacentHTML("beforeend",
        '<nav class="pager" aria-label="다른 작업"><p class="pager-title">More ' + (CATS[cat] ? CATS[cat].title : "Works") + "</p>" +
        (same.length > 2 || i > 0 ? '<a href="' + workHref(prev) + '"><span class="dir">← Previous</span><div class="nm">' + esc(prev.name) + "</div></a>" : "") +
        '<a class="next" href="' + workHref(next) + '"><span class="dir">Next →</span><div class="nm">' + esc(next.name) + "</div></a></nav>");
    } else {
      $("article", main).insertAdjacentHTML("beforeend", '<div style="height:96px"></div>');
    }
    main.querySelectorAll(".section, .info, .prose").forEach(function (el) { el.classList.add("reveal"); });
  }

  /* ---------- 사진관 ---------- */
  if (page === "photo") {
    var items = S.photo || [];
    main.innerHTML =
      '<section class="page-head wrap"><h1>Photo Studio</h1><p class="sub">사진관</p></section>' +
      (items.length ? '<section class="gallery wrap">' + items.map(function (p) {
        return "<figure>" + img(p.src, p.caption || "사진관 사진") + (p.caption ? "<figcaption>" + t(p.caption) + "</figcaption>" : "") + "</figure>";
      }).join("") + "</section>" : '<p class="empty wrap">아직 올린 사진이 없어요.</p>');
  }

  /* ---------- 소개 ---------- */
  if (page === "about") {
    var rows = [
      ["Email", c.email ? '<a href="mailto:' + esc(c.email) + '">' + esc(c.email) + "</a>" : '<span class="todo">[이메일 주소]</span>'],
      ["Instagram", c.instagram ? '<a href="https://instagram.com/' + esc(c.instagram) + '" target="_blank" rel="noopener">@' + esc(c.instagram) + "</a>" : '<span class="todo">[인스타그램 아이디]</span>']
    ];
    if (c.phone) rows.push(["Phone", '<a href="tel:' + esc(c.phone) + '">' + esc(c.phone) + "</a>"]);
    if (c.address) rows.push(["Studio", esc(c.address) + (c.naverMap ? ' &nbsp;<a href="' + esc(c.naverMap) + '" target="_blank" rel="noopener">지도</a>' : "")]);
    main.innerHTML =
      '<section class="page-head wrap"><h1>About</h1><p class="sub">' + esc(S.nameKo) + "</p></section>" +
      '<section class="about wrap"><div class="about-text">' + (S.about || []).map(function (p) { return "<p>" + t(p) + "</p>"; }).join("") +
        '<div style="margin-top:48px"><h2>What we do</h2>' + services(S.services) + "</div></div>" +
        '<div><div id="contact"><h2>Contact</h2><ul class="contact-list">' +
          rows.map(function (r) { return '<li><span class="k">' + r[0] + '</span><span class="v">' + r[1] + "</span></li>"; }).join("") +
        "</ul></div>" +
        ((S.brands || []).length ? '<div style="margin-top:48px"><h2>Brands we worked with</h2><ul class="contact-list">' +
          S.brands.map(function (b) { return '<li style="grid-template-columns:1fr"><span class="v">' + t(b) + "</span></li>"; }).join("") + "</ul></div>" : "") +
      "</div></section>";
  }

  /* ---------- 은은한 등장 ---------- */
  var rv = [].slice.call(main.querySelectorAll(".reveal"));
  function reveal() {
    var h = window.innerHeight * 0.95;
    rv = rv.filter(function (el) {
      if (el.getBoundingClientRect().top < h) { el.classList.add("in"); return false; }
      return true;
    });
    if (!rv.length) { removeEventListener("scroll", reveal); removeEventListener("resize", reveal); }
  }
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
    rv.forEach(function (el) { el.classList.add("in"); });
  } else {
    addEventListener("scroll", reveal, { passive: true });
    addEventListener("resize", reveal);
    reveal();
  }

  /* ---------- 사진 크게 보기 ---------- */
  var lb = document.createElement("div");
  lb.className = "lightbox";
  lb.setAttribute("role", "dialog");
  lb.setAttribute("aria-label", "사진 크게 보기");
  lb.innerHTML = '<img alt=""><button class="lb-close">Close ✕</button><button class="lb-prev" aria-label="이전 사진">‹</button><button class="lb-next" aria-label="다음 사진">›</button>';
  body.appendChild(lb);
  var lbImg = $("img", lb), pics = [], cur = 0;
  function show(k) { cur = (k + pics.length) % pics.length; lbImg.src = pics[cur].src; lbImg.alt = pics[cur].alt; }
  main.addEventListener("click", function (e) {
    var el = e.target;
    if (el.tagName !== "IMG" || el.closest("a")) return;
    pics = [].slice.call(main.querySelectorAll(".imgs img, .gallery img, .detail-cover img"));
    if (pics.indexOf(el) < 0) return;
    show(pics.indexOf(el)); lb.classList.add("open"); $(".lb-close", lb).focus();
  });
  lb.addEventListener("click", function (e) {
    if (e.target.classList.contains("lb-prev")) show(cur - 1);
    else if (e.target.classList.contains("lb-next")) show(cur + 1);
    else if (e.target !== lbImg) lb.classList.remove("open");
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && nav.classList.contains("open")) btn.click();
    if (!lb.classList.contains("open")) return;
    if (e.key === "Escape") lb.classList.remove("open");
    if (e.key === "ArrowLeft") show(cur - 1);
    if (e.key === "ArrowRight") show(cur + 1);
  });
})();
