# the-one-seoul

The One Seoul 프로젝트 모노레포. (one-eye-clinic 구조 기준)

## 구성

| 폴더 | 설명 | 포트 |
|---|---|---|
| [`frontend-user`](./frontend-user) | 사용자 프론트엔드 (Next.js) | 3000 |
| [`frontend-admin`](./frontend-admin) | 관리자 프론트엔드 (Next.js) | 3001 |

## 실행

각 폴더에서 독립적으로 실행합니다.

```bash
# 사용자 프론트
cd frontend-user && npm install && npm run dev    # http://localhost:3000

# 관리자 프론트
cd frontend-admin && npm install && npm run dev   # http://localhost:3001
```
