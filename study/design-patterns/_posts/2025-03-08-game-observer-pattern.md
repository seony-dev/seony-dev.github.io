---
layout: post
title: "게임 프로그래밍 패턴 - 관찰자 패턴(Observer Pattern)"
description: >
hide_last_modified: true
categories: [study, design-patterns]
tags: [Programming, Game Development, Design Patterns]
comments: true
---

<p align="center">  
  <img src="/assets/img/blog/design_patterns/game_observer_pattern.jpg" style="width: 832px; height: auto;" />  
</p>  
-----  

<span style="color:darkgray; font-size:13px;">이미지 출처: https://unity.com/how-to/create-modular-and-maintainable-code-observer-pattern </span>  

-----  

## 🕹️ 관찰자 패턴(Observer Pattern)이란?
> **객체 간의 1:N 관계에서, 한 객체의 상태 변화가 발생하면 연결된 여러 객체에게 자동으로 변경 사항을 알리는 디자인 패턴.**

관찰자 패턴은 **이벤트 기반 시스템을 설계할 때 유용**하며, **게임 개발에서는 UI 이벤트, 게임 상태 변경, NPC 행동 제어 등** 다양한 곳에서 활용된다.

----  

## 🕹️ 관찰자 패턴이 필요한 이유

**💡 기존 방식의 문제점**
1. **객체 간 강한 결합(Dependency)이 발생하여 유지보수가 어려움**
2. **한 객체가 변경될 때, 여러 객체를 수동으로 업데이트해야 함**
3. **코드가 복잡해지고, 확장성이 떨어짐**

**✅ 해결책**
> **주체(Subject)와 관찰자(Observer)를 분리하여, 변경 사항을 자동으로 전달하도록 설계!**

----  

## 🕹️ 관찰자 패턴의 구조

| **구성 요소** | **설명** |
|----------------|----------|
| **Subject (주체/발행자)** | 상태를 관리하고, 관찰자들에게 변경 사항을 알리는 역할. |
| **Observer (관찰자/구독자)** | Subject를 구독하며, 상태 변경 시 자동으로 알림을 받음. |
| **ConcreteSubject (구체적인 주체)** | 특정 상태를 가지고 있으며, 상태 변경 시 모든 Observer에게 알림. |
| **ConcreteObserver (구체적인 관찰자)** | Subject를 구독하며, 알림을 받을 때 특정 동작을 수행. |

----  

## 🕹️ 관찰자 패턴의 활용 사례 (게임 개발)

### 🎮 1. UI 이벤트 시스템
- 버튼 클릭, 메뉴 선택 등의 이벤트를 **중앙 이벤트 시스템을 통해 여러 UI 요소에 전달**
- **예제**: 게임에서 체력바가 플레이어의 체력 변화에 따라 자동 업데이트

### 🎮 2. 게임 상태 변경 알림
- 게임의 상태가 변경될 때 **여러 객체에 변경 사항을 자동으로 전달**
- **예제**: 게임 오버 시, 모든 캐릭터의 움직임을 멈추고 UI를 업데이트

### 🎮 3. NPC 행동 패턴
- 플레이어 행동에 따라 **NPC가 반응하도록 설계**
- **예제**: 플레이어가 공격하면, 주변의 모든 NPC가 반응하도록 설정

----  

## 🕹️ 관찰자 패턴 예제 코드 (C++ 예시)

```cpp
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

class Observer 
{
public:
    virtual void update(string message) = 0;
};

class Subject 
{
private:
    vector<Observer*> observers;

public:
    void addObserver(Observer* observer) 
    {
        observers.push_back(observer);
    }

    void removeObserver(Observer* observer) 
    {
        observers.erase(remove(observers.begin(), observers.end(), observer), observers.end());
    }

    void notifyObservers(string message) 
    {
        for (Observer* observer : observers)
            observer->update(message);
    }
};

class Player : public Observer 
{
public:
    void update(string message) override 
    {
        cout << "Player received update: " << message << endl;
    }
};

int main() 
{
    Subject gameEvent;
    Player player1, player2;
    
    gameEvent.addObserver(&player1);
    gameEvent.addObserver(&player2);
    
    gameEvent.notifyObservers("Game Started!");
    
    return 0;
}
```

**📌 코드 설명**
- `Observer` 인터페이스는 **모든 관찰자가 구현해야 하는 `update()` 메서드를 정의**
- `Subject` 클래스는 **관찰자를 등록하고, 변경 사항을 알리는 역할** 수행
- `Player` 클래스는 `Observer`를 구현하여 **알림을 받으면 특정 동작을 수행**
- `main()`에서 **두 개의 플레이어를 Subject에 추가하고, 이벤트 발생 시 자동으로 알림**

----  

## 🕹️ 관찰자 패턴의 장단점

| 장점 | 단점 |
|------|------|
| **객체 간 결합도를 낮춤** (Subject와 Observer가 독립적으로 동작) | 다수의 Observer가 존재할 경우, 알림 처리 비용 증가 가능 |
| **이벤트 기반 설계로 확장성이 뛰어남** | Observer 관리(추가/제거)가 필요하여 코드가 복잡해질 수 있음 |
| **자동 알림을 통해 코드의 유지보수가 용이함** | 순환 참조 문제가 발생할 수 있음 (Weak Pointer 사용 필요) |

----  

## 🕹️ 최종 정리
관찰자 패턴은 **객체 간의 결합도를 낮추고, 상태 변경을 자동으로 전파하는 강력한 디자인 패턴**으로, 게임 개발에서 **UI 시스템, NPC AI, 이벤트 처리 등** 다양한 곳에서 활용된다. 하지만 **Observer 관리 비용과 순환 참조 문제**에 주의하며 설계해야 한다.

----  

## 📚 출처
- [관찰자 패턴(Observer Pattern) 설명 - Refactoring Guru](https://refactoring.guru/ko/design-patterns/observer)
- [C++ Observer Pattern Example](https://en.wikipedia.org/wiki/Observer_pattern)

