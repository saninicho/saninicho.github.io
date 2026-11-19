/* ==========================================================
   STUDIO CHOROK 사이트 내용 (목록·홈·사진관·소개)
   ----------------------------------------------------------
   - 글자는 "따옴표" 안만 고치면 돼요.
   - [대괄호]로 된 글은 아직 채우지 않은 빈칸이에요.
     사이트에서도 점선 상자로 눈에 띄게 보여요.
   - 사진은 images 폴더에 올린 뒤 경로를 적어요.
     예) "images/marketing/crassiang/cover.jpg"
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
    title: "기획부터 카피라이팅, 촬영과 디자인까지 — 올라운더 콘텐츠 크리에이터",
    body: [
      "블랭크코퍼레이션 마케팅팀을 시작으로 이그니스, 메디쿼터스, 아모레퍼시픽 등과 함께 수많은 브랜드의 광고 콘텐츠를 기획하고 만들어 왔습니다.",
      "지금은 고향인 경북 예천에서 마케팅 콘텐츠와 로컬 콘텐츠를 만들고, 작은 사진관 스튜디오 초록을 운영합니다."
    ]
  },

  /* 하는 일 (홈·소개에서 눌러서 펼쳐요) */
  services: [
    { name: "Marketing Content", ko: "마케팅 콘텐츠",
      desc: "제품 분석부터 광고 기획, 카피 작성, 소스 촬영, 편집과 디자인까지. META · GDN · GFA 광고 소재를 기획하고 제작합니다." },
    { name: "Graphic Design", ko: "그래픽 디자인",
      desc: "브랜드 디자인, 패키지 디자인, 상세페이지 디자인, 유튜브 영상 편집, 일러스트레이션." },
    { name: "Local Content", ko: "로컬 콘텐츠",
      desc: "[어떤 로컬 콘텐츠를 만드는지 설명]" },
    { name: "Photo Studio", ko: "사진관",
      desc: "예천 읍내에서 작은 사진관 스튜디오 초록을 운영합니다." }
  ],

  /* 함께한 회사·브랜드 (홈·소개 「Brands we worked with」) */
  brands: [
    "블랭크코퍼레이션", "이그니스", "메디쿼터스", "아모레퍼시픽", "유어유니콘", "퍼블리",
    "부스터스", "넥스트챕터", "디오", "푸름웰니스", "두브레인", "삼분의일",
    "심플리웍스", "퍼셀", "팁토우", "오호라", "리비트", "SBS 스브스뉴스"
  ],

  /* ---------- 소개 페이지 ---------- */
  about: [
    "기획부터 카피라이팅, 완성도 높은 그래픽 디자인 작업까지 가능한 올라운더 콘텐츠 크리에이터 조상인입니다.",
    "2017년 SBS 스브스뉴스 5기 인턴 디자이너 경험을 계기로 디지털 콘텐츠의 기획과 제작에 깊은 관심을 갖게 되었습니다. 첫 직장인 블랭크코퍼레이션 마케팅팀에서 2년간 콘텐츠 디자이너 겸 콘텐츠 마케터로 일하며 바디럽, 아르르, 블랙몬스터 등 여러 브랜드의 광고 콘텐츠를 기획하고 제작했습니다.",
    "2020년 고향인 경상북도 예천군으로 돌아와 프리랜서 콘텐츠 '디케터'로 활동하며, 여러 커머스 스타트업과 함께 크고 작은 브랜드들의 광고 콘텐츠를 만들고 있습니다. 그리고 예천 읍내에서 스튜디오 초록이라는 작은 사진관도 운영합니다."
  ],

  /* 이력 및 경력 */
  experience: [
    { org: "아모레퍼시픽", role: "프리랜서 콘텐츠 마케터", note: "메이크온 콘텐츠 마케팅", period: "2025.5 – 현재" },
    { org: "유어유니콘", role: "프리랜서 콘텐츠 마케터", note: "크런틴 콘텐츠 마케팅", period: "2025.5 – 현재" },
    { org: "메디쿼터스", role: "프리랜서 콘텐츠 마케터", note: "크라시앙 콘텐츠 마케팅", period: "2019.2 – 현재" },
    { org: "퍼블리", role: "프리랜서 콘텐츠 디자이너", note: "", period: "2021.7 – 2024.6" },
    { org: "이그니스", role: "프리랜서 콘텐츠 마케터", note: "랩노쉬, 한끼통살, 클룹 등 콘텐츠 마케팅·디자인", period: "2020.7 – 2022.12" },
    { org: "블랭크코퍼레이션", role: "콘텐츠 마케터", note: "바디럽, 아르르, 공백 등 콘텐츠 마케팅·디자인", period: "2019.1 – 2021.2" },
    { org: "유튜브 〈문쌤재활〉 (10만)", role: "영상 편집자", note: "", period: "2019.9 – 2026.2" },
    { org: "유튜브 〈나는 식물원에 살고있다〉 (30만)", role: "영상 편집자", note: "", period: "2022.9 – 2023.12" },
    { org: "SBS 〈스브스뉴스〉", role: "인턴 디자이너", note: "", period: "2017.3 – 2017.8" },
    { org: "경기대학교 예술대학", role: "시각정보디자인학과 학사", note: "", period: "" }
  ],

  /* 할 수 있는 일 · 툴 */
  skills: [
    { title: "Contents Marketing", items: ["META 광고 콘텐츠 기획, 제작", "GDN 광고 콘텐츠 기획, 제작", "GFA 광고 콘텐츠 기획, 제작", "영상/이미지 소스 촬영", "카피라이팅"] },
    { title: "Graphic Design", items: ["브랜드 디자인", "패키지 디자인", "상세페이지 디자인", "Youtube 영상 편집", "일러스트레이션"] },
    { title: "Tools", items: ["Photoshop", "Illustrator", "Premiere Pro", "After Effects", "InDesign", "Final Cut Pro X"] }
  ],

  contact: {
    email: "saninicho@gmail.com",
    instagram: "chorok.studio",
    phone: "010-6765-4435",
    business: "개인사업자 · 세금계산서 발행 가능",
    address: "경북 예천군 예천읍 시장로 67-1",
    naverMap: "https://naver.me/F0zPLS5r"
  },

  /* ==========================================================
     목록 위 카테고리 버튼 (이 순서대로 보여요)
     ========================================================== */
  categories: {
    marketing: ["LIVING", "K-BEAUTY", "F&B", "FASHION", "PET"],
    local: []
  },

  /* ==========================================================
     작업 목록 — 마케팅·로컬 목록과 홈 카드에 쓰여요.
     ----------------------------------------------------------
     id       : work 폴더 안 HTML 파일 이름과 똑같이 (예: crassiang → work/crassiang.html)
     cat      : "marketing" 또는 "local"
     category : 위 categories 에 적은 이름 중 하나
     name     : 카드에 보일 이름
     tags     : 분야 (카드 아래 「브랜드 | 분야」로 보여요)
     cover    : 썸네일 (가로 16:10 추천)
     featured : true 면 홈 대표 작업 줄에 나와요
     위에 있을수록 먼저 보여요.
     ========================================================== */
  works: [
    { id: "crassiang",        cat: "marketing", category: "FASHION",  name: "크라시앙", tags: ["META 광고 소재"], cover: "", featured: true },
    { id: "makeon",           cat: "marketing", category: "K-BEAUTY", name: "메이크온", tags: ["META 광고 소재"], cover: "", featured: true },
    { id: "risanghoe",        cat: "marketing", category: "F&B",      name: "리상회",   tags: ["촬영", "광고 소재"], cover: "", featured: true },
    { id: "tiptoe",           cat: "marketing", category: "K-BEAUTY", name: "팁토우",   tags: ["촬영", "광고 소재"], cover: "", featured: true },
    { id: "cruntin",          cat: "marketing", category: "F&B",      name: "크런틴",   tags: ["촬영", "광고 소재"], cover: "", featured: true },
    { id: "rebeat",           cat: "marketing", category: "LIVING",   name: "리비트",   tags: ["META 광고 소재"], cover: "", featured: true },
    { id: "labnosh",          cat: "marketing", category: "F&B",      name: "랩노쉬",   tags: ["META 광고 소재"], cover: "", featured: true },
    { id: "hankki-tongsal",   cat: "marketing", category: "F&B",      name: "한끼통살", tags: ["촬영", "광고 소재"], cover: "", featured: false },
    { id: "ohora",            cat: "marketing", category: "K-BEAUTY", name: "오호라",   tags: ["META 광고 소재"], cover: "", featured: false },
    { id: "bodylove",         cat: "marketing", category: "LIVING",   name: "바디럽",   tags: ["META 광고 소재"], cover: "", featured: true },
    { id: "3boon1",           cat: "marketing", category: "LIVING",   name: "삼분의일", tags: ["META 광고 소재"], cover: "", featured: false },
    { id: "marketolsen",      cat: "marketing", category: "LIVING",   name: "마켓올슨", tags: ["META 광고 소재"], cover: "", featured: false },
    { id: "mooming",          cat: "marketing", category: "PET",      name: "무밍",     tags: ["META 광고 소재"], cover: "", featured: false },
    { id: "wrapping-charlie", cat: "marketing", category: "PET",      name: "래핑찰리", tags: ["META 광고 소재"], cover: "", featured: false },

    { id: "yecheon-market",   cat: "local",     name: "[로컬 프로젝트]", tags: ["[분야]"], cover: "", featured: false }
  ],

  /* ==========================================================
     More Clients — 상세 페이지 없이 이름만 보여줄 브랜드
     (마케팅 목록 맨 아래, 카테고리 버튼을 누르면 같이 걸러져요)
     ========================================================== */
  moreClients: {
    marketing: {
      "LIVING":   ["아르르", "공백", "모도리", "패리티", "에이노멀", "마이하우스", "프랑떼", "뚜누", "몬스터", "브릭글로", "바렌", "메이튼", "페르바도"],
      "K-BEAUTY": ["퍼셀", "심플리웍스", "뷰런치", "라라이프", "위오", "모에브", "아이즈"],
      "F&B":      ["클룹", "제누", "보라톡스", "신농작소", "친친상회", "베이컨리얼리즘", "농부창고", "피그업", "올탁", "메이크샐러드"],
      "FASHION":  ["카우츠", "비브비브", "언코티드247"],
      "PET":      ["네오핏", "멍뭉스", "옥희독희", "소변아꼼짝마"],
      "SERVICE":  ["퍼블리", "DIO", "두브레인", "두잇"]
    }
  },

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
