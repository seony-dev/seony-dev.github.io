---
layout: post
title:  "구조 - 데코레이터 패턴(Decorator Pattern)"
description: > 
hide_last_modified: true
categories: [study, design-patterns]  
tags: [Programming, Design Patterns]  
comments: true
---

<p align="center">
  <img src="/assets/img/blog/software_engineering/decorator-pattern.png" style="width: 832px; height: auto;" />
</p>
-----

<span style="color:darkgray; font-size:13px;">이미지 출처 : https://refactoring.guru/ko/design-patterns/decorator </span>


-----
#### 🖥️ 데코레이터 패턴(Decorator Pattern)이란?
> 객체에 새로운 기능을 동적으로 추가하는 구조적 디자인 패턴. 
<br>이는 기능 확장을 위해 `상속`을 사용하는 대신, 객체를 감싸는 래퍼(wrapper) 객체를 활용하여 유연성과 재사용성을 높인다.

----
#### 🖥️ 데코레이터 패턴을 사용하는 이유
<br>

**💥 상속을 통한 기능 확장의 문제점** <br>

1. 상속을 사용하여 기능을 추가할 시, 클래스의 수가 기하급수적으로 증가할 수 있음.
2. 새로은 기능을 조합할 때마다, 새로운 클래스를 만들어야 함.
3. 유지보수와 확장이 어려움.

<br>

ex) 알림 시스템 - 이메일, SMS, 인스타그램 알림을 조합 할 경우

| 조합 | 필요 클래스 |
|------|------------|
| 이메일 | `EmailNotifier` |
| SMS | `SMSNotifier` |
| 인스타그램 | `InstagramNotifier` |
| 이메일 + SMS | `EmailSMSNotifier` |
| 이메일 + 인스타그램 | `EmailInstagramNotifier` |
| SMS + 인스타그램 | `SMSInstagramNotifier` |
| 이메일 + SMS + 인스타그램 | `EmailSMSInstagramNotifier` |

**✅ 해결방안**<br>
위처럼 상속을 통한 문제점을 해결하기 위해 **`데코레이터 패턴`**을 사용.

> 데코레이터 패턴은 객체의 기능을 동적으로 조합하여 확장할 수 있어, 상속의 복잡성을 줄이고 코드의 유연성을 높임. <br>
새로운 기능 추가 시 기존 코드 수정 없이 데코레이터 클래스로 확장 가능.

----
#### 🖥️ 데코레이터 패턴의 구성 요소

| **구성 요소**            | **설명** |
|-------------------------|----------|
| **Component (컴포넌트)** | 기본 인터페이스 또는 추상 클래스. 핵심 기능을 정의. |
| **ConcreteComponent (구체 컴포넌트)** | `Component`를 구현하는 기본 클래스. 실제 동작을 수행. |
| **Decorator (데코레이터)** | `Component`를 상속하며, 추가 기능을 동적으로 부여하는 래퍼 역할. |
| **ConcreteDecorator (구체 데코레이터)** | `Decorator`를 구현하여 새로운 기능을 추가하는 클래스. |

----

### 🖥️ 데코레이터 패턴(Decorator Pattern) 예시 코드

**C++ 예시**

```cpp
#include <stdio.h>

//컴포넌트 인터페이스
class Notifier 
{
public:
    virtual void send(const char* message) = 0;
    virtual ~Notifier() {}  // 가상 소멸자 필요
};

//구체 컴포넌트
class EmailNotifier : public Notifier 
{
public:
    void send(const char* message) override 
    {
        printf("Email: %s\n", message);
    }
};

//데코레이터
class NotifierDecorator : public Notifier 
{
protected:
    Notifier* wrappee;

public:
    NotifierDecorator(Notifier* notifier) 
        : wrappee(notifier) {}
    
    virtual ~NotifierDecorator() 
    {
        delete wrappee;  //객체 삭제
    }
    
    void send(const char* message) override 
    {
        wrappee->send(message);
    }
};

//구체 데코레이터1 - SMS 알림 추가
class SMSNotifier : public NotifierDecorator 
{
public:
    SMSNotifier(Notifier* notifier) 
        : NotifierDecorator(notifier) {}
    
    void send(const char* message) override 
    {
        NotifierDecorator::send(message);
        
        printf("SMS: %s\n", message);
    }
};

//구체 데코레이터2 - 인스타그램 알림 추가
class InstagramNotifier : public NotifierDecorator 
{
public:
    InstagramNotifier(Notifier* notifier) 
        : NotifierDecorator(notifier) {}
    
    void send(const char* message) override 
    {
        NotifierDecorator::send(message);
        
        printf("Instagram: %s\n", message);
    }
};

int main() 
{
   
    Notifier* notifier = new EmailNotifier();
    notifier = new SMSNotifier(notifier); //SMS 동적 객체 생성
    notifier = new InstagramNotifier(notifier); //Instagram 동적 객체 생성

    notifier->send("당장 전기장판 위에 누워서 푹 쉬십시오.");

    delete notifier; //최종 객체 삭제 - 필수! 메모리 릭 방지

    return 0;
}


```

**출력 결과**

```
Email: 당장 전기장판 위에 누워서 푹 쉬십시오.
SMS: 당장 전기장판 위에 누워서 푹 쉬십시오.
Instagram: 당장 전기장판 위에 누워서 푹 쉬십시오.
```

**설명**

- `EmailNotifier` : 기본적인 이메일 알림 기능 제공.
- `SMSNotifier`, `InstagramNotifier` : `NotifierDecorator`를 상속하여 각각 SMS와 인스타그램 알림 기능 추가.
- ★ `main` 함수에서 `EmailNotifier` 객체 생성 후, 이를 `SMSNotifier`와 `InstagramNotifier`로 **감싸서 알림 기능 확장.**
- `send` 메서드 호출 : 이메일, SMS, 인스타그램 알림이 순차적으로 전송 완료.

----
<span style="color:darkgray">출처 : <br>
＊ https://en.wikipedia.org/wiki/Decorator_pattern <br>
＊ https://refactoring.guru/ko/design-patterns/decorator <br>
</span>