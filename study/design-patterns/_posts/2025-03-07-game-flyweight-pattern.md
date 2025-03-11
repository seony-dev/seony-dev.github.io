---
layout: post
title: "게임 프로그래밍 패턴 - 경량 패턴(Flyweight Pattern)"
description: >
hide_last_modified: true
categories: [study, design-patterns]
tags: [Programming, Game Development, Design Patterns]
comments: true
---

<p align="center">  
  <img src="/assets/img/blog/design_patterns/game_flyweight_pattern.jpg" style="width: 832px; height: auto;" />  
</p>  
-----  

<span style="color:darkgray; font-size:13px;">이미지 출처: https://unity.com/kr/blog/game-programming-patterns-update-ebook </span>  

-----  

## 🕹️ 경량 패턴(Flyweight Pattern)이란?
> **공유 가능한 객체를 사용하여 메모리 사용량을 줄이고 성능을 최적화하는 디자인 패턴.**

경량 패턴은 **반복적으로 사용되는 대량의 객체를 효율적으로 관리**하여 **게임 개발에서 그래픽 리소스, 파티클 시스템, 문자 렌더링 등의 성능 최적화**에 활용된다.

----  

## 🕹️ 경량 패턴이 필요한 이유

**💡 기존 방식의 문제점**
1. **대량의 객체를 개별적으로 생성할 경우 메모리 사용량 급증**
2. **불필요한 중복 데이터가 많아 리소스 낭비 발생**
3. **GC(Garbage Collection) 부담 증가로 인해 성능 저하 가능**

**✅ 해결책**
> **공유 가능한 상태(Intrinsic State)와 개별 상태(Extrinsic State)를 분리하여 동일한 객체를 재사용하도록 설계!**

----  

## 🕹️ 경량 패턴의 구조

| **구성 요소** | **설명** |
|----------------|----------|
| **Flyweight (경량 객체)** | 공유 가능한 상태(색상, 모양 등)를 포함한 객체. |
| **ConcreteFlyweight (구체적인 경량 객체)** | Flyweight를 구현하며, 내부적으로 상태를 공유. |
| **FlyweightFactory (경량 객체 팩토리)** | 동일한 객체가 이미 존재하는지 확인하고 재사용. |
| **Client (클라이언트)** | Flyweight 객체를 필요할 때 요청하고 사용. |

----  

## 🕹️ 경량 패턴의 활용 사례 (게임 개발)

### 🎮 1. 문자 렌더링 시스템
- 같은 폰트의 글자는 **공유 객체로 관리**하여 메모리 절약
- **예제**: 게임에서 여러 개의 텍스트를 화면에 표시할 때 동일한 글꼴 데이터를 공유

### 🎮 2. 파티클 시스템 (Particle System)
- **같은 타입의 파티클 효과를 공유하여 메모리 최적화**
- **예제**: 불꽃 효과, 폭발 효과 등

### 🎮 3. NPC 및 오브젝트 데이터 공유
- NPC의 기본적인 스킨이나 애니메이션을 공유하여 리소스 사용 절감
- **예제**: MMORPG에서 같은 종류의 몬스터를 여러 마리 배치할 때

----  

## 🕹️ 경량 패턴 예제 코드 (C++ 예시)

```cpp
#include <iostream>
#include <unordered_map>
using namespace std;

class Flyweight 
{
public:
    virtual void render(int x, int y) = 0;
};

class ConcreteFlyweight : public Flyweight 
{
    string texture;

public:
    ConcreteFlyweight(string tex) : texture(tex) {}
    
    void render(int x, int y) override 
    {
        cout << "Rendering " << texture << " at (" << x << ", " << y << ")\n";
    }
};

class FlyweightFactory 
{
private:
    unordered_map<string, Flyweight*> flyweights;

public:
    Flyweight* getFlyweight(string key) 
    {
        if (flyweights.find(key) == flyweights.end()) 
            flyweights[key] = new ConcreteFlyweight(key);

        return flyweights[key];
    }
};

int main() 
{
    FlyweightFactory factory;
    Flyweight* tree1 = factory.getFlyweight("TreeTexture");
    Flyweight* tree2 = factory.getFlyweight("TreeTexture");
    
    tree1->render(10, 20);
    tree2->render(30, 40);
    return 0;
}
```

**📌 코드 설명**
- `Flyweight` 인터페이스는 공유 객체의 기본 구조를 정의
- `ConcreteFlyweight`는 동일한 상태를 공유하며, 필요할 때만 새로운 객체 생성
- `FlyweightFactory`가 동일한 객체가 존재하는지 확인하고 **이미 존재하는 객체를 재사용**
- `main()`에서 두 개의 트리 객체를 요청했지만, **하나의 공유 객체를 사용하여 최적화**

----  

## 🕹️ 경량 패턴의 장단점

| 장점 | 단점 |
|------|------|
| **메모리 사용량 절감** (공유 객체 활용) | 코드 복잡성이 증가할 수 있음 |
| **객체 생성 비용 감소** | 공유 상태와 개별 상태를 명확히 구분해야 함 |
| **GC(Garbage Collection) 부담 감소** | 특정 경우에는 공유가 어려울 수도 있음 |

----  

## 🕹️ 최종 정리
경량 패턴은 **자주 사용되는 객체를 공유하여 메모리를 절약하고 성능을 최적화하는 패턴**으로, 게임 개발에서 **파티클 시스템, NPC 데이터, 텍스트 렌더링 등** 다양한 곳에서 활용된다. 그러나 **공유 상태와 개별 상태를 잘 설계해야 하며, 코드의 복잡성이 증가할 수 있음**에 주의해야 한다.

----  

## 📚 출처
- [경량 패턴(Flyweight Pattern) 설명 - Refactoring Guru](https://refactoring.guru/ko/design-patterns/flyweight)
- [C++ Flyweight Pattern Example](https://en.wikipedia.org/wiki/Flyweight_pattern)

