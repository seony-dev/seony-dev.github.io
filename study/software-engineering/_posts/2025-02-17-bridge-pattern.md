---
layout: post
title:  "브릿지 패턴(Bridge Pattern)"
description: >
hide_last_modified: true
categories: [study, software-engineering]
tags: [Programming, Software Engineering]
comments: true
---

<p align="center">
  <img src="../../../assets/img/blog/software_engineering/bridge-pattern.png" style="width: 832px; height: auto;" />
</p>
-----

<span style="color:darkgray; font-size:13px;">이미지 출처 : https://refactoring.guru/ko/design-patterns/bridge </span>

-----
#### 🖥️ 브릿지 패턴(Bridge Pattern)이란?
> 추상화와 구현을 분리하여 독립적으로 변형할 수 있도록 하는 구조적 디자인 패턴.
<br>이는 **하나의 계층을 변경해도 다른 계층에 영향을 주지 않도록 설계하여 유연성을 극대화함.**

----
#### 🖥️ 브릿지 패턴을 사용하는 이유
<br>

**⚠ 상속을 통한 기능 확장의 문제점** <br>

1. 추상화(Abstraction)와 구현(Implementation)이 강하게 결합되면 **확장성이 떨어짐**.
2. 새로운 기능을 추가할 때 **기존 클래스를 수정해야 하는 문제 발생**.
3. **유지보수와 코드 재사용이 어려워짐**.

<br>

ex) 그래픽 시스템에서 다양한 도형과 렌더링 방식이 존재하는 경우

| 조합 | 필요 클래스 |
|------|------------|
| 원형 + API1 | `CircleWithAPI1` |
| 원형 + API2 | `CircleWithAPI2` |
| 사각형 + API1 | `RectangleWithAPI1` |
| 사각형 + API2 | `RectangleWithAPI2` |
| 원형 + API3 | `CircleWithAPI3` |
| 사각형 + API3 | `RectangleWithAPI3` |
| 새로운 도형 추가 시 | **모든 API 조합 클래스를 추가해야 함** |

**✅ 해결방안**<br>
위처럼 상속 기반의 확장 문제를 해결하기 위해 **`브릿지 패턴`**을 사용.

> 브릿지 패턴은 추상화 계층과 구현 계층을 **분리하여 독립적으로 확장 가능**.<br>
기존 코드 수정 없이 새로운 기능을 추가할 수 있음.

----
#### 🖥️ 브릿지 패턴의 구성 요소

| **구성 요소**            | **설명** |
|-------------------------|----------|
| **Abstraction (추상화)** | 상위 수준의 제어를 담당하며, `Implementor` 객체에 작업을 위임. |
| **RefinedAbstraction (정제된 추상화)** | `Abstraction`의 확장으로, 구체적인 기능을 추가하는 클래스. |
| **Implementor (구현자)** | `Abstraction`이 사용하는 인터페이스를 정의. |
| **ConcreteImplementor (구체적인 구현자)** | `Implementor` 인터페이스를 실제로 구현하는 클래스. |

----

### 🖥️ 브릿지 패턴(Bridge Pattern) 예시 코드

**C++ 예시**

```cpp
#include <stdio.h>

//구현을 위한 인터페이스 정의 - * Implementor (구현자)
class DrawingAPI 
{
public:
    virtual void drawCircle(double x, double y, double radius) = 0;
    virtual ~DrawingAPI() {}
};

//구현 클래스 1 - * ConcreteImplementor (구체적인 구현자)
class DrawingAPI1 : public DrawingAPI 
{
public:
    void drawCircle(double x, double y, double radius) override 
    {
        printf("API1.circle at (%.1f, %.1f) radius %.1f\n", x, y, radius);
    }
};

//구현 클래스 2 - * ConcreteImplementor (구체적인 구현자)
class DrawingAPI2 : public DrawingAPI 
{
public:
    void drawCircle(double x, double y, double radius) override 
    {
        printf("API2.circle at (%.1f, %.1f) radius %.1f\n", x, y, radius);
    }
};

//도형의 추상 클래스 - * Abstraction (추상화)
class Shape 
{
protected:
    DrawingAPI* drawingAPI;

public:
    Shape(DrawingAPI* api) : drawingAPI(api) {}
    virtual void draw() = 0;
    virtual void resizeByPercentage(double pct) = 0;
    virtual ~Shape() {}
};

//원형 도형 클래스 - * Refined Abstraction (정제된 추상화)
class CircleShape : public Shape 
{
private:
    double x, y, radius;

public:
    CircleShape(double x, double y, double radius, DrawingAPI* api)
        : Shape(api), x(x), y(y), radius(radius) {}

    void draw() override 
    {
        drawingAPI->drawCircle(x, y, radius);
    }

    void resizeByPercentage(double pct) override 
    {
        radius *= pct;
    }
};

int main() 
{
    //원 객체 생성
    Shape* circle1 = new CircleShape(1, 2, 3, new DrawingAPI1());
    Shape* circle2 = new CircleShape(5, 7, 11, new DrawingAPI2());

    //도형 그리기
    circle1->draw();
    circle2->draw();

    //최종 객체들 삭제 - 메모리 릭 방지
    delete circle1;
    delete circle2;

    return 0;
}
```

**출력 결과**

```
API1.circle at (1.0, 2.0) radius 3.0
API2.circle at (5.0, 7.0) radius 11.0
```

**설명**

- `Shape` 클래스는 `DrawingAPI`를 활용하여 도형을 그리는 역할을 수행.
- `CircleShape`는 `Shape`를 상속받아 원형을 구현하며, `DrawingAPI` 객체를 통해 실제 그림을 그림.
- `main()`에서 `CircleShape`를 생성하여 **다양한 구현(API1, API2)과 독립적으로 결합 가능**.
- **새로운 DrawingAPI 추가 시 기존 `Shape` 클래스를 수정할 필요 없음**.

----
<span style="color:darkgray">출처 : <br>
＊ https://en.wikipedia.org/wiki/Bridge_pattern <br>
＊ https://refactoring.guru/ko/design-patterns/bridge <br>
</span>

