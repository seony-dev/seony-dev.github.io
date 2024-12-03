---
layout: post
title: "[Software Engineering] TDD (Test-driven development)"
description: >
TDD (Test-driven development, 테스트 주도 개발)
hide_last_modified: true
categories: [study, software-engineering]
tags: [Programming, Software Engineering]
published: true
---

![](../../../assets/img/blog/software_engineering/tdd_process.png)

<span style="color:darkgray; font-size:13px;">이미지 출처 : https://www.icterra.com/tdd-is-not-about-testing-but-the-design/</span>


#### 🖥️ TDD(Test-Driven Development, 테스트 주도 개발)이란?

> **테스트를 먼저 작성**하고, 그 테스트를 `통과`할 수 있는 `최소한의 코드`를 작성한 뒤 `리팩터링`하는 **반복적인 개발 방법론**. <br>
이는 코드의 품질을 높이고 버그를 줄이며, 더 나은 설계를 도출하게 해준다.

----

#### 🖥️ TDD의 주요 원칙

**1. 테스트 우선 접근법**
  - **테스트를 먼저 작성**하여, 원하는 기능을 구현하기 전에 예상되는 동작과 실패 조건을 명확히 정의.
  - 개발자는 작성하려는 코드의 요구사항을 기반으로 **실패할 테스트**를 먼저 설계하여, 기능 구현이 제대로 이루어졌는지 지속적으로 확인할 수 있다.
  - 이를 통해 코드가 의도대로 작동하는지 빠르게 피드백을 받을 수 있으며, 코드 품질을 유지하는 데 도움이 된다.

**2. 작고 반복적인 개발**
  - **작은 단위의 기능**을 하나씩 구현하고, 각 단위마다 **테스트와 리팩터링**을 반복적으로 진행하여 점진적으로 발전시킨다.
  - 한 번에 많은 기능을 구현하려 하지 않고, **짧고 집중적인 주기**로 작업을 진행해 기능이 추가될 때마다 테스트로 검증.
  - 이 방식은 **코드의 복잡도를 낮추고, 오류를 초기에 발견**할 수 있게 해 주며, 최종적으로 더 안정적이고 유지보수하기 쉬운 코드를 만든다.

----

#### 🖥️ TDD의 사이클

1. Red (실패하는 테스트 작성)
  - **구현할 기능에 대한 테스트를 작성.**
  - 아직 기능이 구현되지 않았으므로 테스트는 당연히 실패하지만, 이를 확인함으로써 테스트가 제대로 동작하고 있는지 검증한다.

2. Green (테스트 통과)
  - **테스트를 통과하기 위한 최소한의 코드를 작성.**
  - 코드를 "완벽하게" 짜는 것이 아니라, 테스트를 통과할 정도로만 작성하는 것이 목표이다.

3. Refactor (리팩터링)
  - **동작이 동일하게 유지되도록 코드를 정리하거나 최적화.**
  - 중복 제거 및 코드 구조를 개선하며, 가독성과 유지보수성을 높인다.
  
  ★ 이 과정을 거친 뒤에도 모든 테스트는 통과해야 한다.


위 과정을 반복하면서 점진적으로 애플리케이션을 완성해 나간다.

----

#### 🖥️ TDD의 장·단점

**[TDD의 장점]**
- **코드 품질 향상**  
  코드 작성 전에 명확한 요구사항이 정의되므로, 명확하고 오류가 적은 코드가 작성됨.
- **변경 용이성**  
  작은 단위로 개발하기 때문에 코드 수정이나 확장이 쉬움.
- **디버깅 시간 감소**  
  테스트를 통해 문제를 초기에 발견할 수 있어, 디버깅에 소요되는 시간이 줄어듦.
- **유지보수성 강화**  
  모든 기능이 테스트로 보호되기 때문에, 나중에 코드를 변경하더라도 기존 기능이 깨지지 않음을 보장받음.

**[TDD의 단점]**
- **초기 시간 투자**  
  테스트 작성과 반복적인 사이클로 인해 초기 개발 속도가 느리게 느껴질 수 있음.
- **테스트 설계의 어려움**  
  무엇을 테스트하고 어떻게 테스트할지 결정하는 게 어려울 수 있음.
- **모든 상황을 커버할 수 없음**  
  테스트가 모든 예외 상황을 다룰 수 없으므로, 실전에서의 예기치 않은 문제가 발생할 수 있음.

----

#### 🖥️ TDD를 사용할 때 유용한 툴

| 언어       | 툴                           | 설명                      |
|------------|:-----------------------------:|:--------------------------:|
| Python     | pytest, unittest              | Python의 대표적인 테스트 프레임워크 |
| Java       | JUnit                         | Java용 단위 테스트 프레임워크 |
| JavaScript | Jest, Mocha                   | JavaScript의 테스트 프레임워크  |
| Ruby       | RSpec                         | Ruby용 테스트 프레임워크     |
| CI/CD 툴   | Jenkins, GitHub Actions        | 테스트 자동화 도구            |


-----
<span style="color:darkgray">출처 : </span> <br>
https://en.wikipedia.org/wiki/Test-driven_development <br>
https://yozm.wishket.com/magazine/detail/2308/ <br>
https://www.icterra.com/tdd-is-not-about-testing-but-the-design/ <br>