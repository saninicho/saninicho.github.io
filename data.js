/* ==========================================================
   STUDIO CHOROK 사이트 내용 (목록·홈·사진관·소개)
   ----------------------------------------------------------
   - 글자는 "따옴표" 안만 고치면 돼요.
   - [대괄호]로 된 글은 아직 채우지 않은 빈칸이에요.
     사이트에서도 점선 상자로 눈에 띄게 보여요.
   - 사진은 images 폴더에 올린 뒤 경로를 적어요.
     예) "images/marketing/brand-a/cover.jpg"
     비워두면("") 연한 초록 빈 칸으로 보여요.
   - 항목 사이 쉼표(,)는 지우지 마세요!
   - 작업 상세 내용은 work 폴더 안 각 HTML 파일에 있어요.
   ========================================================== */

window.SITE = {

  name: "STUDIO CHOROK",
  nameKo: "스튜디오 초록",

  /* 홈 첫 화면 큰 문구 (영어) */
  headline: "Content for brands and places.",

  /* 홈 가운데 소개 */
  intro: {
    title: "[여기에 한 줄 소개]",
    body: ["[여기에 짧은 소개 문단 — 두세 문장]"]
  },

  /* 하는 일 (홈·소개에서 눌러서 펼쳐요) */
  services: [
    { name: "Marketing Content", ko: "마케팅 콘텐츠", desc: "[어떤 마케팅 콘텐츠를 만드는지 설명]" },
    { name: "Local Content",     ko: "로컬 콘텐츠",   desc: "[어떤 로컬 콘텐츠를 만드는지 설명]" },
    { name: "Photo Studio",      ko: "사진관",        desc: "[사진관에서 찍는 사진 종류 — 예: 증명·프로필·가족]" }
  ],

  /* 함께한 브랜드 (이름만 쭉) */
  brands: ["[브랜드 1]", "[브랜드 2]", "[브랜드 3]", "[브랜드 4]"],

  /* 소개 페이지 본문 */
  about: ["[여기에 스튜디오 소개 글]"],

  contact: {
    email: "",                 // 예) "hello@studiochorok.com"
    instagram: "",             // 예) "studiochorok"  (@ 없이)
    phone: "",
    address: "경북 예천군 예천읍 시장로 67-1",
    naverMap: "https://naver.me/F0zPLS5r"
  },

  /* ==========================================================
     목록 위 카테고리 버튼 (이 순서대로 보여요)
     ----------------------------------------------------------
     카테고리를 더하거나 빼려면 여기 이름만 바꾸면 돼요.
     비워두면([]) 버튼 없이 전체만 보여요.
     ========================================================== */
  categories: {
    marketing: ["LIVING", "K-BEAUTY", "F&D"],
    local: []
  },

  /* ==========================================================
     작업 목록 — 마케팅·로컬 목록과 홈 카드에 쓰여요.
     ----------------------------------------------------------
     id       : work 폴더 안 HTML 파일 이름과 똑같이 (예: brand-a → work/brand-a.html)
     cat      : "marketing" 또는 "local"
     category : 위 categories 에 적은 이름 중 하나 (예: "LIVING")
     name     : 카드에 보일 이름
     tags     : 분야 (카드 아래 「브랜드 | 분야」로 보여요)
     cover    : 썸네일 (가로 16:10 추천)
     featured : true 면 홈 대표 작업 줄에 나와요
     위에 있을수록 먼저 보여요.
     ========================================================== */
  works: [
    { id: "brand-a", cat: "marketing", category: "LIVING",   name: "BRAND A", tags: ["SNS 운영"], cover: "", featured: true },
    { id: "brand-b", cat: "marketing", category: "K-BEAUTY", name: "BRAND B", tags: ["캠페인", "촬영"], cover: "", featured: true },
    { id: "brand-c", cat: "marketing", category: "F&D",      name: "BRAND C", tags: ["상세페이지"], cover: "", featured: true },
    { id: "yecheon-market", cat: "local", name: "LOCAL PROJECT", tags: ["인터뷰"], cover: "", featured: true }
  ],

  /* ==========================================================
     사진관 사진 — 경로만 계속 추가하면 갤러리에 쌓여요.
     ========================================================== */
  photo: [
    { src: "", caption: "" },
    { src: "", caption: "" },
    { src: "", caption: "" },
    { src: "", caption: "" },
    { src: "", caption: "" },
    { src: "", caption: "" },
    { src: "", caption: "" },
    { src: "", caption: "" }
  ]
};
