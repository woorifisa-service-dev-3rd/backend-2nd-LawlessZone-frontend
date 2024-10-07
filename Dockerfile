# 첫 번째 스테이지: 빌드 단계
FROM node:18 AS builder

# 작업 디렉토리 설정
WORKDIR /app

# package.json과 package-lock.json 복사
COPY package*.json ./

# 패키지 설치
RUN npm install

# 나머지 소스 코드 복사
COPY . .

# Next.js 프로젝트 빌드
RUN npm run build

# 두 번째 스테이지: 런타임 환경
FROM node:18-alpine

# 작업 디렉토리 설정
WORKDIR /app

# 빌드된 파일들 복사
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package*.json ./

# 패키지 설치 (production 의존성만 설치)
RUN npm install --production

# 환경 변수 설정 (예시로 백엔드 URL)
ENV NEXT_PUBLIC_BASE_URL=http://backend:8080

# Next.js 앱 실행 (프로덕션 모드)
CMD ["npm", "run", "start"]
