---
layout: post
title:  "[Software Engineering] 리팩터링(Refactoring)"
description: >
hide_last_modified: true
categories: 
  - study
  - software-engineering
---

### 🖥️ 리팩터링(Refactoring)이란?
> 소프트웨어 공학에서 '결과의 변경 없이 코드의 구조를 재조정함'을 뜻하며, 내부 구조나 논리를 개선하여 코드의 가독성을 높이고 유지보수를 편하게 하는 행위이다.

-----
### 🖥️ 리팩터링의 방법 및 주의 사항

#### ★ 리팩터링은 작은 변경으로 이루어져야 하며, 프로그램 작동 상태를 유지하면서 기존 코드를 약간씩 개선할 수 있어야함.

- 리팩터링하는 동안 새로운 기능을 추가하면 안 됨.
  - 새로 개발한 기능과 리팩터링을 섞지 않아야 하며, 최소한 개별 커밋의 범위 내에서 프로세스를 분리하려고 노력해야함.

- 기존의 모든 테스트는 리팩터링 후에 통과해야 함.
  - 테스트가 너무 낮은 레벨일 경우, 예를 들어 클래스 내의 private 메서드를 테스트하고 있다면 문제가 될 수 있음.  
  이 경우, 테스트 자체의 문제이기 때문에 테스트 자체를 리팩터링하거나 상위 수준 테스트 세트를 완전히 새로 작성할 수 있음.  

※ **BDD** 방식으로 테스트 작성할 시, 이런 상황 발생을 방지할 수 있음.
![](https://velog.velcdn.com/images/seony-dev/post/e7787a08-b258-4236-9bb7-2db6ac68ecaa/image.png)

<span style="font-size:16px; color:darkgray;"> ※ BDD(Behavior-driven development) : 사용자의 행위를 작성하고 결과 검증을 진행하며, 개발자와 비개발자간의 협업 과정을 녹여낸 방법. </span>

-----
### 🖥️ 자동화된 코드 리팩터링 종류
1) DMS Software Reengineering Toolkit
2) Eclipse 기반:
  - Eclipse (자바, C++, PHP, Ruby, JavaScript)
  - PyDev (파이썬)
  - Photran (Eclipse IDE의 포트란 플러그인)
3) 델파이
4) IntelliJ 기반:
  - AppCode (오브젝티브-C, C, C++)
  - IntelliJ IDEA (자바)
  - PyCharm (파이썬)
  - 젯브레인즈 (자바스크립트)
  - 안드로이드 스튜디오 (자바)
5) JDeveloper (자바)
6) 넷빈즈 (자바)
7) 스몰토크
8) 비주얼 스튜디오 기반:
  - 마이크로소프트 비주얼 스튜디오 (.NET and C++)
  - CodeRush
  - Visual Assist
9) Wing IDE (파이썬)
10) 엑스코드 (C, 오브젝티브-C, Swift)[1]

-----

<span style="font-size:14px; color:darkgray;"> 출처 : <br>
https://ko.wikipedia.org/wiki/%EB%A6%AC%ED%8C%A9%ED%84%B0%EB%A7%81 <br>
https://refactoring.guru/ko/refactoring/what-is-refactoring <br>
https://blog.wakmusic.xyz/tdd-vs-bdd-c738b507930f <br>
https://tv.kakao.com/channel/3693125/cliplink/414004682
</span>