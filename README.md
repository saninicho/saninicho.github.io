# STUDIO CHOROK 홈페이지

www.studiochorok.com — 스튜디오 초록 포트폴리오 사이트.
HTML · CSS · JavaScript 파일만으로 만들었고, GitHub Pages에 그대로 올라가요. 설치하거나 빌드할 것은 없어요.

## 파일 구조

```
index.html        홈
marketing.html    마케팅 콘텐츠 목록
local.html        로컬 콘텐츠 목록
photo.html        사진관 갤러리
about.html        소개 · 연락처
404.html          없는 주소로 들어왔을 때
work/             작업 상세 페이지 (작업 하나 = 파일 하나)
  _template.html  새 작업 만들 때 복사할 틀 (사이트에는 안 보여요)
data.js           ★ 목록 · 홈 · 사진관 · 소개 · 연락처 내용
style.css         디자인 (글꼴 · 색 · 여백)
site.js           화면을 그리는 공통 코드 (안 건드려도 돼요)
images/           웹용으로 줄인 사진
header.png        파비콘 · 로고 마크
images/og.png     카톡 · 인스타 공유 미리보기 (1200×630)
CNAME             www.studiochorok.com 연결 — 지우거나 고치지 마세요
```

## 빈칸 채우기

`[대괄호]`로 된 글이 아직 안 채운 곳이에요. 사이트에서도 노란 점선 상자로 보여요.

- 홈 문구 · 소개 · 하는 일 · 함께한 브랜드 · 연락처 → `data.js`
- 작업 상세 내용 → `work/작업이름.html`
  (채운 뒤에는 `<span class="todo">` 와 `</span>` 를 지워요)

## 새 작업 추가하는 순서

1. 사진을 줄여서(긴 변 2400px 이하, 한 장 500KB 안팎) `images/marketing/작업이름/` 또는 `images/local/작업이름/`에 넣어요.
2. `work/_template.html`을 복사해서 `work/작업이름.html`로 저장해요. (작업이름은 영어 소문자 · 숫자 · 하이픈)
3. 그 파일 맨 위 `data-id="_template"` 를 `data-id="작업이름"` 으로, `data-cat` 을 `marketing` 또는 `local` 로 바꿔요.
4. 제목 · 정보 · 설명 · 사진을 채워요.
5. `data.js` 의 `works` 목록에 한 줄 추가해요.
   ```js
   { id: "작업이름", cat: "marketing", name: "브랜드명", tags: ["분야"], cover: "images/marketing/작업이름/cover.jpg", featured: true },
   ```
   `featured: true` 면 홈 대표 작업 줄에도 나와요.

## 사진관 사진 추가

`images/photo/`에 사진을 넣고, `data.js` 의 `photo` 목록에 `{ src: "images/photo/파일.jpg", caption: "" },` 를 추가해요.

## 고칠 때 순서 (Claude Code)

1. 작업 폴더에서 Claude Code를 켜요.
2. "최신 내용 받고 이어서 하자"
3. 고칠 점을 말로 설명해요.
4. 다 고치면 "올려"

## 꼭 지킬 것

- `CNAME` 파일은 지우거나 고치지 않아요.
- 이 저장소는 누구나 볼 수 있어요. 원본 · 개인정보 · 계약서는 올리지 말고 작업 폴더의 `materials`에만 둬요.
- 글꼴은 무료로 상업적 사용이 가능한 것만 써요 (지금: Slabo 13px, Pretendard — 둘 다 OFL 라이선스).
