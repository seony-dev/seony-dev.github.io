---  
layout: post  
title: "디자인 패턴(Design Patterns)"  
description: >  
hide_last_modified: true  
categories: [study, software-engineering]  
tags: [Programming, Software Engineering]  
comments: true  
---  

<p align="center">  
  <img src="/assets/img/blog/software_engineering/design-patterns.png" style="width: 832px; height: auto;" />  
</p>  
-----  

<span style="color:darkgray; font-size:13px;">이미지 출처: https://refactoring.guru/ko/design-patterns/what-is-pattern</span>  

-----  
#### 🖥️ 디자인 패턴(Design Patterns)이란?  
> 소프트웨어 설계 시 반복적으로 나타나는 문제에 대한 **재사용 가능한 해결책**.
<br>이는 특정한 구현이 아닌, 다양한 상황에 적용 가능한 **일반적인 설계 템플릿**을 제공하여 코드의 유연성과 유지보수성을 향상시킴.

----  
#### 🖥️ 디자인 패턴을 배우는 이유

**💥 소프트웨어 개발에서의 공통 문제점**  

1. **반복되는 설계 문제**: 유사한 문제를 매번 새롭게 해결하려다 보면 비효율적이고 오류가 발생하기 쉬움.
2. **팀원 간의 의사소통 어려움**: 개발자마다 문제 해결 방식이 다를 수 있어, 코드 이해와 유지보수에 어려움이 생김.
3. **코드의 유연성 부족**: 변경 사항에 대응하기 어려운 경직된 코드 구조는 유지보수 비용을 증가시킴.

**✅ 해결 방안**  
이러한 문제를 해결하기 위해 **디자인 패턴**을 학습하고 활용하는 것이 중요함.

> 디자인 패턴은 검증된 설계 방안을 제공하여 **코드의 재사용성**과 **유연성**을 높이고,  
> 개발자 간 **공통된 언어**를 형성하여 의사소통을 원활하게 함.

----  
#### 🖥️ 디자인 패턴의 분류


| **분류**       | **설명**                                                                                   | **예시**                                                                 |
|----------------|--------------------------------------------------------------------------------------------|--------------------------------------------------------------------------|
| **생성 패턴**  | 객체 생성과 관련된 패턴으로, 객체 생성 방식을 유연하게 하여 기존 코드를 재사용하고 확장성을 높임. | 싱글톤 패턴, 팩토리 메서드 패턴, 추상 팩토리 패턴 등                     |
| **구조 패턴**  | 클래스나 객체를 조합하여 더 큰 구조를 만드는 패턴으로, 시스템의 구조를 유연하고 효율적으로 설계함. | 어댑터 패턴, 브리지 패턴, 복합체 패턴 등                                  |
| **행동 패턴**  | 객체나 클래스 간의 상호작용과 책임 분배와 관련된 패턴으로, 객체 간의 효율적인 소통과 책임 분담을 다룸. | 옵서버 패턴, 전략 패턴, 커맨드 패턴 등                                    |  h2

----  
#### 🖥️ 디자인 패턴의 예시
**- 싱글톤 패턴(Singleton Pattern)**
<br><br>
**C++ 예시**

```cpp
#include <stdio.h>

//싱글톤 클래스
class Singleton 
{
private:
    static Singleton* instance;

    // 생성자를 private으로 선언하여 외부에서 인스턴스 생성 불가
    Singleton() 
    {
        printf("- Singleton 인스턴스 생성\n");
    }

public:
    //인스턴스에 접근하는 정적 메서드
    static Singleton* getInstance() 
    {
        if (instance == nullptr) 
        {
            instance = new Singleton();
        }

        return instance;
    }

    //소멸자
    ~Singleton() 
    {
        printf("- Singleton 인스턴스 소멸\n");
    }

    //예시 메서드
    void doSomething() 
    {
        printf("- Singleton 인스턴스의 메서드 호출\n");
    }
};

//정적 멤버 변수 초기화
Singleton* Singleton::instance = nullptr;

int main() 
{
    //싱글톤 인스턴스에 접근하여 메서드 호출
    Singleton* s1 = Singleton::getInstance();
    s1->doSomething();

    //동일한 인스턴스인지 확인
    Singleton* s2 = Singleton::getInstance();
    
    if (s1 == s2) 
    {
        printf("- s1과 s2는 동일한 인스턴스.\n");
    }

    // 프로그램 종료 시 메모리 해제
    delete s1;
    
    //// s2를 delete하지 않는 이유? - s1과 s2는 동일한 인스턴스이므로 중복 해제 방지

    return 0;
}
```

**출력 결과**

```
- Singleton 인스턴스 생성
- Singleton 인스턴스의 메서드 호출
- s1과 s2는 동일한 인스턴스.
- Singleton 인스턴스 소멸
```

**설명**

- `Singleton` 클래스는 자신의 유일한 인스턴스를 가리키는 정적 포인터 `instance`를 가짐.
- 생성자를 `private`으로 선언하여 외부에서 직접 인스턴스를 생성하지 못하도록 제한.
- `getInstance` 정적 메서드를 통해 유일한 인스턴스에 접근하며, 최초 호출 시 인스턴스를 생성하고 이후에는 생성된 인스턴스를 반환.
- `main` 함수에서 `getInstance`를 통해 얻은 두 개의 포인터 `s1`과 `s2`는 동일한 인스턴스를 가리킴을 확인.
- 프로그램 종료 전에 `delete`를 통해 동적으로 할당된 메모리를 해제하여 메모리 누수 방지.

> **💥주의!**  
> 멀티스레드 환경에서는 `getInstance` 메서드가 동시에 호출될 수 있음.
<br>→ 인스턴스 생성 부분에 대한 동기화 처리가 필요.

---- 