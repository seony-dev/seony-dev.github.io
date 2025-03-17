---  
layout: post  
title: "게임 프로그래밍 패턴 - 프로토타입 패턴(Prototype Pattern)"  
description: >  
hide_last_modified: true  
categories: [study, design-patterns]  
tags: [Programming, Game Development, Design Patterns]  
comments: true  
---  

<p align="center">  
  <img src="/assets/img/blog/design_patterns/game_prototype.png" style="width: 832px; height: auto;" />  
</p>  
-----  

<span style="color:darkgray; font-size:13px;">이미지 출처: https://refactoring.guru/ko/design-patterns/prototype</span>  

-----  

## 🕹️ 프로토타입 패턴(Prototype Pattern)이란?
> **객체를 생성하는 데 드는 비용이 클 때, 기존 객체를 복제하여 새로운 객체를 생성하는 생성 패턴.**

프로토타입 패턴은 **복잡한 객체를 새로 생성하는 대신, 이미 존재하는 객체를 복제(clone)하여 새로운 객체를 생성**함으로써 **객체 생성에 필요한 시간과 자원을 절약**할 수 있다. 
{:.note}

----  

## 🕹️ 프로토타입 패턴이 필요한 이유

**💡 기존 방식의 문제점**
1. **객체 생성 비용이 높을 경우**: 객체를 생성하는 데 많은 시간과 자원이 소모될 수 있다.
2. **복잡한 초기화 과정**: 객체 생성 시 복잡한 초기화나 설정이 필요한 경우, 이를 반복하는 것은 비효율적이다.
3. **유사한 객체의 다수 생성**: 비슷한 속성을 가진 객체를 다수 생성해야 할 때, 매번 새로 생성하는 것은 비효율적이다.

**✅ 해결책**
> **기존 객체를 복제하여 새로운 객체를 생성함으로써 객체 생성 비용을 절감하고 효율성을 높인다.** citeturn0search0

----  

## 🕹️ 프로토타입 패턴의 구조

| **구성 요소**   | **설명**                                                                                 |
|----------------|------------------------------------------------------------------------------------------|
| **Prototype**  | 객체를 복제하기 위한 인터페이스를 정의.                                                   |
| **ConcretePrototype** | `Prototype` 인터페이스를 구현하며, 자신을 복제하는 메서드를 구현.                             |
| **Client**     | 새로운 객체가 필요할 때, `Prototype` 인터페이스를 통해 객체를 복제하여 사용.                      |

----  

## 🕹️ 프로토타입 패턴의 활용 사례 (게임 개발)

### 🎮 1. 몬스터 생성
- **문제점**: 각기 다른 속성을 가진 몬스터를 다수 생성해야 할 경우, 매번 객체를 새로 생성하고 초기화하는 것은 비효율적이다.
- **해결책**: 기본 몬스터 객체를 프로토타입으로 설정하고, 이를 복제하여 다양한 속성을 가진 몬스터를 생성.

### 🎮 2. 무기 및 아이템 생성
- **문제점**: 다양한 무기나 아이템을 생성할 때, 각 아이템의 생성 비용이 높거나 초기화 과정이 복잡할 수 있다.
- **해결책**: 기본 아이템 객체를 프로토타입으로 설정하고, 이를 복제하여 다양한 속성을 가진 아이템을 생성.

----  

## 🕹️ 프로토타입 패턴 예제 코드 (C++ 예시)

```cpp
#include <iostream>
#include <unordered_map>
#include <memory>
using namespace std;

// 프로토타입 인터페이스
class Monster 
{
public:
    virtual ~Monster() {}
    virtual unique_ptr<Monster> clone() const = 0;
    virtual void attack() const = 0;
};

// 구체적인 프로토타입 클래스
class Goblin : public Monster 
{
public:
    Goblin(int health, int attackPower)
        : health_(health), attackPower_(attackPower) {}

    unique_ptr<Monster> clone() const override 
    {
        return make_unique<Goblin>(*this);
    }

    void attack() const override 
    {
        printf("Goblin attacks with power %d!\n", attackPower);
    }

private:
    int health_;
    int attackPower_;
};

// 몬스터 생성기
class MonsterSpawner 
{
public:
    void registerMonster(const string& type, unique_ptr<Monster> prototype) 
    {
        prototypes_[type] = move(prototype);
    }

    unique_ptr<Monster> spawnMonster(const string& type) 
    {
        return prototypes_[type]->clone();
    }

private:
    unordered_map<string, unique_ptr<Monster>> prototypes_;
};

int main() 
{
    MonsterSpawner spawner;
    spawner.registerMonster("Goblin", make_unique<Goblin>(100, 15));

    auto goblin1 = spawner.spawnMonster("Goblin");
    goblin1->attack();

    auto goblin2 = spawner.spawnMonster("Goblin");
    goblin2->attack();

    return 0;
}
```

**출력 결과**

```
Goblin attacks with power 15!
Goblin attacks with power 15!
```

**📌 코드 설명**
- `Monster`는 복제 메서드(`clone`)와 공격 메서드(`attack`)를 갖는 프로토타입 인터페이스.
- `Goblin`은 `Monster`를 구현한 구체적인 프로토타입 클래스로, `clone` 메서드를 통해 자신을 복제.
- `MonsterSpawner`는 프로토타입 객체를 등록하고, 이를 복제하여 새로운 몬스터를 생성하는 역할.
- `main()` 함수에서는 `Goblin` 프로토타입을 등록하고, 이를 복제하여 새로운 `Goblin` 객체를 생성하고 공격 메서드를 호출.

----  

## 🕹️ 프로토타입 패턴의 장단점

| 장점                                                                                   | 단점                                                                                 |
|----------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------|
| **객체 생성 비용 절감**: 복제 방식을 통해 객체 생성에 드는 시간과 자원을 절약할 수 있다. | **복제 메서드 구현의 복잡성**: 객체의 상태나 구성에 따라 복제 메서드(`clone`) 구현이 복잡해질 수 있다. |
| **유연성 향상**: 런타임에 객체의 타입을 결정하고 생성할 수 있다.                        | **깊은 복사 문제**: 객체 내에 포인터나 참조가 있는 경우, 깊은 복사를 구현해야 하는 어려움이 있다. |

----  

## 🕹️ 최종 정리
프로토타입 패턴은 **객체 생성 비용이 높거나 복잡한 초기화 과정이 필요한 경우, 기존 객체를 복제하여 새로운 객체를 생성함으로써 효율성을 높이는 생성 패턴**이다. 게임 개발에서는 **몬스터, 아이템 등의 다양한 객체를 효율적으로 생성**하는 데 활용되며, **객체 복제 메서드의 구현에 주의**해야 한다.

----  
<span style="color:darkgray">출처 : <br>
- [프로토타입 패턴 - Refactoring Guru](https://refactoring.guru/ko/design-patterns/pro)
</span>