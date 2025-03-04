---
layout: post
title:  "통합 테스트(Integration Test)"
description: >
hide_last_modified: true
categories: [study, software-engineering]
tags: [Programming, Software Engineering]
comments: true
---

<p align="center">
  <img src="/assets/img/blog/software_engineering/integration_test.png" style="width: 580px; height: auto;" />
</p>

-----

#### 🖥️ 통합 테스트(Integration Test)이란?

> 단위 테스트(Unit test)가 끝난 소프트웨어를 결합해 가면서 테스트하는 방법이다. <br>
단위 테스트가 끝난 모듈들을 좀 더 큰 단위의 집합으로 통합 구성한 후, 통합 테스트 계획에 따라 테스트를 수행한다.<br>
통합 테스트를 통과한 모듈 집합은 시스템 검사(System testing) 단계의 테스트 대상으로서 넘어가게 된다.

----

#### 🖥️ 통합 테스트의 목적

- 주요 설계 항목들이 기능, 성능, 안정성 요구사항을 잘 구현하고 있는지를 검증하는 것이다. <br>
통합된 모듈 그룹들은 노출되어 있는 인터페이스에 정상적인 입력 데이터나 비정상적인 오류 입력 데이터를 넣어보는 `블랙박스 검사 기법`으로 테스트된다.

-----
<span style="color:darkgray">출처 : 
＊ https://ko.wikipedia.org/wiki/%ED%86%B5%ED%95%A9_%EC%8B%9C%ED%97%98 <br>
＊ https://www.kodeco.com/books/android-test-driven-development-by-tutorials/v1.0/chapters/8-integration <br>

</span> 