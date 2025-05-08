---
layout: post
title:  "자바(Java)란?"
description: >
hide_last_modified: true
categories: [web-developments, language, java]
comments: true
---

<p align="center">  
  <img src="/assets/img/blog/java/java_logo.png" style="width: 832px; height: auto;" />  
</p>  

-----  

<span style="color:darkgray; font-size:13px;">이미지 출처: https://icon-icons.com/ko/download/168609/PNG/512/ </span>  

---
### ☕ 자바(Java)란?
> 자바(Java)는 1995년 Sun Microsystems(현 Oracle)에 의해 개발된 **객체지향 프로그래밍 언어**로, 한 번 작성한 코드를 여러 플랫폼에서 실행할 수 있는 **"Write Once, Run Anywhere"** 철학으로 잘 알려져 있다. <br>
웹 애플리케이션부터 서버 백엔드, 기업용 시스템에 이르기까지 폭넓은 웹 개발 환경에서 활용되고 있다.

---

### ☕ 웹 개발에서 자바가 사용되는 이유

- Java는 대규모 시스템에서도 안정적으로 동작하고, 수많은 오픈소스 프레임워크와 툴이 존재하기 때문에 기업 환경을 포함한 다양한 웹 서비스 개발에 적합함함.

**1. 안정성과 유지보수성**
- 정적 타입 언어로, 빌드 시 오류를 미리 방지 가능.
- 명확한 클래스 구조와 패키지 시스템으로 대규모 코드베이스도 관리 용이.

**2. 편리한 프레임워크 사용 가능**
- **Spring / Spring Boot**는 자바 웹 개발의 대표 프레임워크로, REST API부터 보안, ORM, 테스트까지 완전한 웹 개발 환경을 제공.
- JPA, Hibernate 등을 활용한 강력한 데이터베이스 연동 기능을 사용할 수 있음.

**3. 멀티스레드 및 보안, 확장성**
- 웹 트래픽 증가에도 견딜 수 있는 구조와 멀티 스레드 기반 처리.
- 다양한 보안 기능(Basic/Auth, JWT, OAuth2 등)을 프레임워크 수준에서 제공.

---

#### ☕ 자바 웹 개발의 구성 요소 예시

| 구성 요소 | 기술 스택 | 설명 |
|-----------|------------|------|
| 백엔드 프레임워크 | Spring, Spring Boot | RESTful API 서버 구축에 최적화 |
| ORM & DB 연동 | JPA, Hibernate | 객체 기반으로 데이터베이스 매핑 |
| 템플릿 엔진 | Thymeleaf, JSP | 서버 사이드 렌더링 기반 UI 처리 |
| 보안 | Spring Security | 인증, 인가, 세션 관리 등 엔터프라이즈 기능 |
| 테스트 | JUnit, Mockito | 유닛 테스트 및 통합 테스트 작성 가능 |

---

### ☕ Java와 C++의 주요 차이점

| 항목              | Java                           | C++                        |
| :-------------- | :----------------------------- | :------------------------- |
| **언어 타입**       | 고수준, 객체지향 언어                   | 중/저수준, 절차적 + 객체지향          |
| **실행 환경**       | JVM 기반 (가상 머신)                 | 컴파일 후 시스템에서 직접 실행          |
| **메모리 관리**      | 자동 (GC 기반)                     | 수동 (new/delete 또는 스마트 포인터) |
| **플랫폼 독립성**     | 높음 (Write Once, Run Anywhere)  | 낮음 (컴파일된 OS/플랫폼 의존적)       |
| **성능**          | 상대적으로 느림                       | 최적화하면 매우 빠름                |
| **포인터 사용**      | 사용 불가                          | 직접 사용 가능 (메모리 조작 가능)       |
| **멀티스레드 지원**    | 기본 내장 (`java.util.concurrent`) | 표준 지원은 최근 (C++11 이후)       |
| **주요 활용 분야**    | 웹, 모바일(Android), 엔터프라이즈        | 게임, 시스템 프로그래밍, 임베디드        |
| **대표 프레임워크/엔진** | Spring, Android SDK            | Unreal Engine, Qt, DirectX |
| **에러 처리**       | 예외 기반 (`try-catch`)            | 예외 + 리턴코드 혼용               |

---

#### ☕ 자바 웹 개발의 장단점 요약

| 항목 | 장점 | 단점 |
|------|------|------|
| 생산성 | 대규모 시스템에서도 구조적으로 개발 가능 | 진입 장벽이 높음 (초기 설정, 문법 등) |
| 생태계 | Spring, Maven, Gradle 등 강력한 생태계 | 설정이 복잡해질 수 있음 |
| 안정성 | 정적 타입 기반으로 코드 안정성 높음 | 러닝커브가 있음 |
| 배포 | JAR/WAR 패키징으로 서버 배포 용이 | 서버 사양 요구 높을 수 있음 |

---

#### ☕ 최종 정리

Java는 오랜 시간 동안 엔터프라이즈(개인이 아닌, 조직에서 사용) 웹 개발의 중심에 있어 왔으며, 특히 Spring 프레임워크를 중심으로 안정적인 서버 백엔드 구축이 가능하다.  
초기 진입 장벽은 존재하지만, 일단 익숙해지면 대규모 시스템에서 뛰어난 유지보수성과 확장성을 제공하는 강력한 웹 개발 언어이다.

-----
<span style="color:darkgray">출처 : </span> <br>
- [Oracle - Java 공식 문서](https://docs.oracle.com/en/java/)
- [Spring 공식 홈페이지](https://spring.io/)
- [Baeldung - Java & Spring 가이드](https://www.baeldung.com/)
- [GeeksforGeeks - Java Tutorials](https://www.geeksforgeeks.org/java/)
- [Velog - 자바 백엔드 개발자 로드맵 정리](https://velog.io/)
- [Inflearn - 스프링 입문 강의](https://www.inflearn.com/course/spring_recommend)
