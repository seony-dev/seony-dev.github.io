---

layout: post
title: "게임 프로그래밍 패턴 - 싱글톤 패턴(Singleton Pattern)"
description: >
hide_last_modified: true
categories: [study, design-patterns]
tags: [Programming, Game Development, Design Patterns]
comments: true
---

<p align="center">  
  <img src="/assets/img/blog/design_patterns/game_singleton.png" style="width: 832px; height: auto;" />  
</p>  
-----  

<span style="color:darkgray; font-size:13px;">이미지 출처: https://www.ionos.com/digitalguide/websites/web-development/singleton-design-pattern </span>  

-----

### 🕹️ 싱글톤 패턴(Singleton Pattern)이란?
> **클래스의 인스턴스를 하나만 생성하도록 제한하고, 그 인스턴스에 전역적인 접근을 제공하는 디자인 패턴.**

싱글톤 패턴은 **전역 상태를 관리하거나 공통된 자원을 하나의 객체로 처리해야 할 때** 주로 사용된다.
{:.note}

----

### 🕹️ 싱글톤 패턴의 구조

| **구성 요소** | **설명** |
|---------------|----------|
| **Singleton (싱글톤)** | 유일한 인스턴스를 생성하고 접근할 수 있는 메서드를 제공하며, 생성자를 `private`으로 선언하여 외부에서의 직접 생성을 방지. |

----

### 🕹️ 싱글톤 패턴 예제 코드 (C++ 예시)

```cpp
#include <cstdio>

// 싱글톤 클래스
class Singleton 
{
private:
    Singleton() 
    {
        printf("Singleton 인스턴스 생성\n");
    }

    //복사 생성자와 대입 연산자를 삭제하여 복사 방지
    Singleton(const Singleton&) = delete;
    Singleton& operator=(const Singleton&) = delete;

public:
    //인스턴스를 반환하는 정적 메서드
    static Singleton& getInstance() 
    {
        static Singleton instance;
        return instance;
    }

    //예시 메서드
    void showMessage() 
    {
        printf("싱글톤 인스턴스의 메서드 호출\n");
    }
};

int main() 
{
    //싱글톤 인스턴스 획득 및 메서드 호출
    Singleton& s1 = Singleton::getInstance();
    s1.showMessage();

    //또 다른 참조 획득
    Singleton& s2 = Singleton::getInstance();
    s2.showMessage();

    //두 참조가 동일한지 확인
    if (&s1 == &s2) 
        printf("s1과 s2는 동일한 인스턴스를 참조합니다.\n"); 
    else
        printf("s1과 s2는 다른 인스턴스를 참조합니다.\n");

    return 0;
}
```

**출력 결과:**

```
Singleton 인스턴스 생성
싱글톤 인스턴스의 메서드 호출
싱글톤 인스턴스의 메서드 호출
s1과 s2는 동일한 인스턴스를 참조합니다.
```

**설명:**

- `Singleton` 클래스의 생성자는 `private`으로 선언되어 외부에서 직접 인스턴스를 생성할 수 없다.
- `getInstance()` 메서드는 클래스의 유일한 인스턴스를 반환하며, 이 메서드를 통해서만 인스턴스에 접근 가능하다.
- `main()` 함수에서 두 번의 `getInstance()` 호출을 통해 얻은 `s1`과 `s2`는 동일한 인스턴스를 참조한다.

----

### 🕹️ 싱글톤 패턴의 문제점 및 사용하지 말아야 할 이유

1. **글로벌 상태로 인한 예측 불가능성:**
   - 싱글톤은 전역 상태를 가지므로 프로그램의 다양한 부분에서 상태가 변경될 수 있다. 이는 **디버깅과 테스트를 어렵게 만들고**, **예측하지 못한 버그를 발생시킬 수 있다.**

2. **테스트의 어려움:**
   - 싱글톤은 **의존성 주입을 어렵게 만들어 단위 테스트를 방해**한다. 모의 객체(Mock Object)를 사용하여 테스트하기 어려워진다.

3. **병렬 처리에서의 문제:**
   - 멀티스레드 환경에서 싱글톤 인스턴스 생성 시 **동기화 문제**가 발생할 수 있다. 이를 적절히 처리하지 않으면 **데드락이나 레이스 컨디션과 같은 동시성 문제가 발생**할 수 있다.

4. **SRP(Single Responsibility Principle) 위반:**
   - 싱글톤 클래스는 **인스턴스 생성과 비즈니스 로직을 모두 관리**하게 되어 단일 책임 원칙을 위반할 수 있다.

5. **의존성 숨김:**
   - 클래스가 싱글톤에 의존하고 있음을 명시적으로 드러내지 않으므로, **코드의 가독성과 유지보수성이 저하**된다.

6. **유연성 부족:**
   - 싱글톤은 상속이나 다형성을 제한하여 **코드의 확장성과 유연성을 저하시킬 수 있다.**

----

### 🕹️ 싱글톤 패턴을 대체하는 방법

- **의존성 주입(Dependency Injection):** 필요한 객체를 외부에서 주입받아 사용함으로써 **테스트 용이성**과 **유연성**을 확보할 수 있다.
- **로컬 인스턴스:** 필요한 범위(scope) 내에서 객체를 생성하여 사용하고, 더 이상 필요하지 않으면 소멸시킨다.
- **팩토리 패턴(Factory Pattern):** 객체 생성 로직을 별도의 팩토리 클래스로 분리하여 **유연한 객체 생성**을 가능하게 한다.

----

### 🕹️ 최종 정리

싱글톤 패턴은 **전역적인 접근이 필요한 객체를 하나만 생성하도록 보장**하는 패턴이지만, **테스트의 어려움**, **글로벌 상태로 인한 예측 불가능성**, **멀티스레드 환경에서의 문제** 등 여러 단점이 존재한다. <br>
이러한 이유로 현대의 소프트웨어 개발에서는 싱글톤 패턴의 사용을 지양하고, **의존성 주입**이나 **팩토리 패턴** 등의 대체 방안을 활용하는 것이 권장된다.

----

<span style="color:darkgray">출처 : </span> <br> 
- [Refactoring Guru - 싱글톤 패턴](https://refactoring.guru/ko/design-patterns/singleton)
- [Wikipedia - Singleton Pattern](https://en.wikipedia.org/wiki/Singleton_pattern)




--- 