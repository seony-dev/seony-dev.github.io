---
layout: post
title:  "[Software Engineering] CBD (Component-based development)"
description: >
hide_last_modified: true
categories: [study, software-engineering]
tags: [Programming, Software Engineering]
---

<p align="center">
  <img src="../../../assets/img/blog/software_engineering/cbd_process.png">
</p>

-----


<span style="color:darkgray; font-size:13px;">이미지 출처 : https://mobileappcircular.com/understanding-the-essence-of-component-based-architecture-5c6d4452f100 </span>
----

#### 🖥️ CBD(component-based development, 테스트 주도 개발)이란?

> 기존의 시스템이나 소프트웨어를 구성하는 컴포넌트를 조립해서 하나의 새로운 응용 프로그램을 만드는 소프트웨어 개발방법론.

----

#### 🖥️ CBD의 주요 원칙

**1. 테스트 우선 접근법**
  - **테스트를 먼저 작성**하여, 원하는 기능을 구현하기 전에 예상되는 동작과 실패 조건을 명확히 정의.
  

----

#### 🖥️ CBD의 출현 배경 및 역사

| 연도       | 내용                           |
|------------|:-----------------------------:|
| 1970년대 |  소프트웨어의 개발속도가 하드웨어의 개발속도를 따라가지 못하고, 소프트웨어 유지보수에 너무 많은 시간과 인력이 필요하게 되면서 소프트웨어위기(Software Crisis)가 도래됨. |
| 1980년대 | **컴포넌트 기반 개발(CBD) 방법**에 대한 연구 개발 시작. 소프트웨어의 재사용(Reuse) 및 독립성이 보장된 객체지향 방법론이 활용됨. |
| 1990년대 중반 | 객체지향 방법론에 기반한 컴포넌트 기반 개발 방법론은 컴포넌트 기반의 대규모 개발에 정착하기 시작. |
| 2004년 ~ | 차세대 컴포넌트 기술로 응용 분야에 특성을 잘 반영할 수 있는 영역별 아키텍처를 기반으로 하는컴포넌트 기술인 제품계열(Product Line) 방법론이 대두 |

----

#### 🖥️ CBD의 장·단점

**[CBD의 장점]**
- **소프트웨어의 재사용성(Reusability) 및 독립성**
  - 기존의 컴포넌트를 재사용 할 수 있어 생산성과 경제성을 높일 수 있다. 

- **개발 기간 단축**
  - 컴포넌트를 만드는데 자동화기능(Wizard)을 사용하거나, 소프트웨어 컴포넌트를 조립해서 새로운 애플리케이션을 만들 수 있다. 

- **유지보수(리팩토링) 용이**
  - 컴포넌트가 캡슐화돼 있어, 로직상의 에러나 런타임 에러 등의 범위를 컴포넌트로 한정할 수 있다.
  - 단위 테스트 기반의 테스트 코드를 작성하기 때문에 추후 문제 발생시, 각각 모듈별로 테스트를 진행하여 이슈를 보다 빠르게 찾을 수 있다.
  
- **시스템 통합성 및 확장성**


**[CBD의 단점]**

- **생산성 저하**
  - 예외 상황의 발생으로 개발 기간이 타이트하게 잡힐 경우가 더러 있는데, TDD의 경우 테스트 코드를 작성한 후에 통과 코드를 작성하기 때문에 비효율적이다.

- **사전 준비 기간 필요**
  - 사전에 필요한 지식을 습득하고 개발 환경을 구축해야하기 때문에, TDD를 효과적으로 사용할 수 있는 수준으로 개발자를 교육하는 데 보통 수 개월의 시간이 필요하다.


----

#### 🖥️ CBD 기술 종류

| 기술       | 종류                           |
|------------|:-----------------------------:|
| 특정 도메인의 컴포넌트 기반 소프트웨어 프레임워크 | ESMF, React.js |
| 컴포넌트 지향 프로그래밍 | Unity, Unreal engine, XPCOM 등 |
| 분산 컴퓨팅 소프트웨어 컴포넌트 | Jakarta EE |
| 웹 서비스 | REST |
| 인터페이스 서술언어(IDLs) | XML-RPC 등 |


-----
<span style="color:darkgray">출처 : </span> <br>
https://en.wikipedia.org/wiki/Component-based_software_engineering <br>
정의석, 「차세대 소프트웨어 개발 방법론」, 한국데이터베이스진흥원, 제115권, p94-97 <br>
https://incodom.kr/%ED%85%8C%EC%8A%A4%ED%8A%B8_%EC%A3%BC%EB%8F%84_%EA%B0%9C%EB%B0%9C <br>
