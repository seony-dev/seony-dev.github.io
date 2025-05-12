---
layout: post
title:  "Node.js란?"
description: >
hide_last_modified: true
categories: [web-developments, language, node-js]
comments: true
---

<p align="center">  
  <img src="/assets/img/blog/node_js/node_js_logo.png" style="width: 832px; height: auto;" />  
</p>  

---

### ☕ Node.js란?

>  
2009년 Ryan Dahl에 의해 개발된 서버 사이드 JavaScript 실행 환경. <br>
원래는 브라우저에서만 동작하던 JavaScript를 서버에서도 실행할 수 있도록 하여, 프론트엔드와 백엔드를 모두 JavaScript로 통합 개발하는 풀스택 환경이 가능해짐. <br>
비동기 I/O와 이벤트 기반 처리 방식을 채택하여, 빠르고 가벼운 서버 구축에 적합함.

---

### ☕ 웹 개발에서 Node.js가 사용되는 이유

Node.js는 높은 처리 성능과 개발 속도를 바탕으로  
**RESTful API, 실시간 채팅, SPA 백엔드** 등 다양한 웹 서비스에서 널리 사용된다.

**1. 빠른 비동기 처리 및 성능**  
- 이벤트 기반 구조로 수천 개의 동시 요청 처리에 강함  
- 싱글 스레드 모델이지만, 논블로킹 방식으로 I/O 작업을 효율적으로 처리

**2. JavaScript 통합 개발 환경**  
- 프론트와 백엔드 모두 JavaScript로 작성 가능 → **개발 생산성 향상**  
- 공통 데이터 포맷(JSON), 공통 유틸 사용으로 코드 중복 최소화

**3. 방대한 모듈 생태계**  
- npm(Node Package Manager)을 통해 수많은 라이브러리 활용 가능  
- Express, Socket.io, Next.js, Prisma 등 다양한 웹 프레임워크 지원

---

#### ☕ Node.js 웹 개발의 구성 요소 예시

| 구성 요소 | 기술 스택 | 설명 |
|-----------|------------|------|
| 웹 프레임워크 | Express.js | RESTful API 구축을 위한 가장 널리 쓰이는 프레임워크 |
| 실시간 처리 | Socket.io | 실시간 채팅, WebSocket 통신 |
| DB 연동 | Mongoose, Prisma | MongoDB 또는 SQL DB와 연결 |
| 인증/보안 | Passport.js, JWT | 사용자 인증, 토큰 기반 보안 처리 |
| 테스트 | Jest, Mocha | 단위 테스트 및 통합 테스트 도구 |

---

#### ☕ Node.js 웹 개발의 장단점 요약

| 항목 | 장점 | 단점 |
|------|------|------|
| 생산성 | JS 단일 언어로 프론트/백엔드 통합 개발 | 복잡한 계산 로직에선 성능 이슈 가능 |
| 생태계 | npm 생태계, 오픈소스 활용 용이 | 과도한 의존성 관리 필요 |
| 실시간 처리 | 비동기 처리와 Socket 기반 처리 강력 | 싱글 스레드라 CPU 집중 작업엔 부적합 |
| 배포 | 경량 서버로 빠른 배포 가능 | 안정성 면에선 전통적인 서버보다 부족할 수 있음 |

---

#### ☕ 최종 정리

Node.js는 웹 개발에서 빠른 개발, 가벼운 서버, 비동기 처리에 강점을 가진 언어 실행 환경이다.  
프론트엔드와 백엔드 모두를 JavaScript로 개발할 수 있다는 점에서 생산성이 뛰어나며,  
특히 실시간 서비스, 마이크로서비스, API 서버 구축에 적합하다.  
다만, 복잡한 로직과 CPU 바운드 작업에는 다른 언어와의 혼용도 고려해야 한다.

-----

<span style="color:darkgray">출처 :</span> <br>
- [Node.js 공식 홈페이지](https://nodejs.org/en)
- [MDN Web Docs - Node.js 개요](https://developer.mozilla.org/ko/docs/Glossary/Node.js)
- [Express 공식 문서](https://expressjs.com/)
- [Velog - Node.js 정리글](https://velog.io/)
- [freeCodeCamp - Node.js 튜토리얼](https://www.freecodecamp.org/news/learn-node-by-building-a-web-server/)
- [Nomad Coders - Node.js 강의](https://nomadcoders.co/)
