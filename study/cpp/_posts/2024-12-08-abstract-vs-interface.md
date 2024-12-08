---
layout: post
title:  "[C++] 추상 클래스와 인터페이스의 차이"
description: > 
hide_last_modified: true
categories: [study, cpp]
tags: [Programming, C++]
---

<p align="center">
  <img src="../../../assets/img/blog/cpp/cpp_img.png">
</p>

----

### 🖥️ C++에서 순수 가상 메서드를 이용한 인터페이스 구현 방법
> C++에서는 `다중 상속`때문에 C#이나 Java처럼 인터페이스와 추상 클래스의 구분이 필요 없고, 순수 가상 메서드가 있는 추상 클래스가 인터페이스 역할을 함. <br>
이런 클래스는 직접 만들 수 없고, 자식 클래스에서 메서드를 구현해야 함. C++에서 순수 가상 메서드를 사용하면 인터페이스처럼 동작하고, 코드의 명확성과 유지 관리를 도와줌.

----
### 🖥️ 추상 클래스란?
> 보다 구체적인 클래스가 파생될 수 있는 일반 개념의 식 역할을 한다. 추상 클래스 형식의 개체는 만들 수 없지만, 포인터 및 참조를 사용하여 추상 클래스 형식을 사용할 수 있다.

* 클래스 내부에 순수 지정자(= 0) 구문을 사용하여 선언된 가상 함수를 하나 이상 포함하면, 이를 추상 클래스라고 한다. <br>
추상 클래스에서 파생된 클래스는 순수 가상 함수를 구현해야하며, 구현하지 않을 시 해당 클래스도 추상 클래스이다. 

----
### 🖥️ 인터페이스란?
> 클래스를 구현할 수 있는 방법을 정의하며, 인터페이스는 클래스가 아니다. (클래스는 인터페이스만 구현할 수 있다.) <br>
클래스가 인터페이스에서 선언된 함수를 정의하는 경우 함수가 재정의되지 않고 구현된다. <br>
인터페이스에는 함수, 이벤트 및 속성에 대한 선언을 포함할 수 있다.

**[인터페이스의 정의**
* 0개 이상의 기본 인터페이스에서 상속할 수 있다.
* 기본 클래스에서 상속할 수 없다.
* 공용 순수 가상 메서드만 포함할 수 있다.
* 생성자, 소멸자 또는 연산자를 포함할 수 없다.
* 정적 메서드를 포함할 수 없다.
* 데이터 멤버를 포함할 수 없다. (속성은 허용)

----
<span style="color:darkgray; font-size:14px;"> 출처 : <br>
- https://blog.devgenius.io/what-is-the-difference-between-interface-and-abstract-class-1b76277f2659 <br>\
- https://learn.microsoft.com/ko-kr/cpp/cpp/abstract-classes-cpp?view=msvc-170 <br>
- https://learn.microsoft.com/ko-kr/cpp/cpp/interface?view=msvc-170 <br>
- https://learn.microsoft.com/ko-kr/cpp/extensions/interface-class-cpp-component-extensions?view=msvc-170 <br>

</span>



