# 포스팅 가이드 (POSTING GUIDE)

블로그 글과 뉴스 항목은 모두 **마크다운(.md) 파일 하나**로 관리됩니다.
파일을 추가하고 GitHub에 push하면 사이트가 자동으로 다시 빌드·배포됩니다.
관리자 페이지나 DB는 없습니다.

---

## 1. 블로그 글 쓰기

### 파일 위치

```
src/content/blog/
```

파일명이 곧 URL(slug)이 됩니다. 날짜를 앞에 붙이는 것을 권장합니다.

```
src/content/blog/2026-09-01-my-new-post.md
→ https://choidslab.github.io/blog/2026-09-01-my-new-post/
```

### 프론트매터 템플릿

파일 맨 위에 아래 메타데이터 블록을 넣습니다.

```markdown
---
title: '글 제목'
date: 2026-09-01
description: '목록 페이지에 보이는 한 줄 요약 (선택)'
tags: ['research', 'pdf']
draft: false
---

여기부터 본문을 마크다운으로 작성합니다.
코드 블록, 표, 이미지 모두 사용 가능합니다.
```

| 필드 | 필수 | 설명 |
|------|------|------|
| `title` | O | 글 제목 |
| `date` | O | 작성일 (`YYYY-MM-DD`) — 최신순 정렬 기준 |
| `description` | X | 목록/SEO에 쓰이는 한 줄 요약 |
| `tags` | X | 태그 배열. 생략 시 `[]` |
| `draft` | X | `true`면 사이트에서 숨김 (기본값 `false`) |

### 이미지 넣기

이미지 파일은 `public/img/posts/`에 넣고 본문에서 절대 경로로 참조합니다.

```markdown
![실험 결과 그래프](/img/posts/2026-09-01-result.png)
```

---

## 2. 뉴스 항목 추가

### 파일 위치

```
src/content/news/
```

뉴스는 본문 없이 프론트매터만으로 충분합니다 (제목이 곧 내용).

### 프론트매터 템플릿

```markdown
---
title: 'Our paper on X was accepted to Y (SCIE, Q1)'
date: 2026-09-01
icon: paper
---
```

| 필드 | 필수 | 설명 |
|------|------|------|
| `title` | O | 뉴스 내용 한 문장 (영문) |
| `date` | O | 날짜 (`YYYY-MM-DD`) |
| `icon` | X | `paper`(논문) / `award`(수상) / `talk`(발표) / `milestone`(이정표) / `etc`(기타). 기본값 `etc` |

뉴스는 `/news` 타임라인에 최신순으로 표시되고, 최근 3개는 홈에도 나옵니다.

---

## 3. 배포 (git add / commit / push)

```bash
# 1) 새 글 파일 작성 후
git add src/content/blog/2026-09-01-my-new-post.md

# 2) 커밋
git commit -m "post: my new post"

# 3) push → GitHub Actions가 자동으로 빌드·배포
git push
```

push 후 1~2분 안에 사이트에 반영됩니다.

배포 전에 로컬에서 확인하고 싶다면:

```bash
npm run dev      # http://localhost:4321 에서 미리보기
npm run build    # 빌드 에러 사전 확인
```

---

## 4. 초안(draft) 사용법

아직 공개하지 않을 글은 `draft: true`로 두면 됩니다.

```markdown
---
title: '아직 쓰는 중인 글'
date: 2026-09-15
draft: true
---
```

- `draft: true`인 글은 **빌드 결과에서 완전히 제외**됩니다 — 목록에도, 개별 페이지로도 생성되지 않습니다.
- push해도 사이트에는 나타나지 않으므로, 초안을 repo에 올려두고 여러 기기에서 이어서 써도 안전합니다.
- 공개할 준비가 되면 `draft: false`로 바꾸거나 해당 줄을 지우고 push하면 끝입니다.

---

## 5. 자주 겪는 문제

- **글이 안 보여요** → `draft: true`인지, `date` 형식이 `YYYY-MM-DD`인지 확인하세요.
- **빌드가 실패해요** → 프론트매터의 따옴표/콜론 문법 오류가 대부분입니다. `npm run build`로 로컬에서 에러 메시지를 확인하세요.
- **제목에 콜론(:)이 들어가요** → 제목 전체를 따옴표로 감싸세요: `title: 'AI: 다음 10년'`
