---
layout: post
title:  "브릿지 패턴(Bridge Pattern)"
description: > 
hide_last_modified: true
categories: [study, computer-science]
tags: [Programming, CS, DesignPattern]
comments: true
---

<p align="center">
  <img src="../../../assets/img/blog/computer_science/bridge-pattern.png" style="width: 832px; height: auto;" />
</p>
-----

<span style="color:darkgray; font-size:13px;">이미지 출처 : https://refactoring.guru/ko/design-patterns/bridge </span>


-----
#### 🖥️ 브릿지 패턴(Bridge Pattern)란?
> 소프트웨어 공학에서 추상화와 구현을 분리하여 독립적으로 변형할 수 있도록 하는 구조적 디자인 패턴.

----
#### 🖥️ 브릿지 패턴(Bridge Pattern) 구조

- Abstraction(추상화): 상위 수준의 제어를 담당하며, Implementor 객체에 작업 위임.
- Implementor(구현자): Abstraction이 사용하는 인터페이스를 정의.
- RefinedAbstraction(정제된 추상화): Abstraction의 확장으로, 구체적인 구현 제공.
- ConcreteImplementor(구체적인 구현자): Implementor 인터페이스를 실제로 구현.

----
#### 🖥️ 브릿지 패턴(Bridge Pattern) 예시 코드

**C++ 예시**

```cpp
#include <iostream>
#include <memory>

//Implementor 인터페이스
class DrawingAPI {
public:
    virtual void drawCircle(double x, double y, double radius) = 0;
    virtual ~DrawingAPI() = default;
};

//ConcreteImplementor 1
class DrawingAPI1 : public DrawingAPI {
public:
    void drawCircle(double x, double y, double radius) override {
        std::cout << "API1.circle at (" << x << ", " << y << ") radius " << radius << std::endl;
    }
};

//ConcreteImplementor 2
class DrawingAPI2 : public DrawingAPI {
public:
    void drawCircle(double x, double y, double radius) override {
        std::cout << "API2.circle at (" << x << ", " << y << ") radius " << radius << std::endl;
    }
};

//Abstraction
class Shape {
public:
    virtual void draw() = 0;
    virtual void resizeByPercentage(double pct) = 0;
    virtual ~Shape() = default;
};

//RefinedAbstraction
class CircleShape : public Shape {
public:
    CircleShape(double x, double y, double radius, std::shared_ptr<DrawingAPI> drawingAPI)
        : x_(x), y_(y), radius_(radius), drawingAPI_(drawingAPI) {}

    void draw() override {
        drawingAPI_->drawCircle(x_, y_, radius_);
    }

    void resizeByPercentage(double pct) override {
        radius_ *= pct;
    }

private:
    double x_, y_, radius_;
    std::shared_ptr<DrawingAPI> drawingAPI_;
};

int main() {
    std::shared_ptr<Shape> circle1 = std::make_shared<CircleShape>(1, 2, 3, std::make_shared<DrawingAPI1>());
    std::shared_ptr<Shape> circle2 = std::make_shared<CircleShape>(5, 7, 11, std::make_shared<DrawingAPI2>());

    circle1->draw();
    circle2->draw();

    return 0;
}

```

##### 출력 결과

```cpp
API1.circle at (1, 2) radius 3
API2.circle at (5, 7) radius 11
```
> **출력 설명**
<br>circle1 객체는 DrawingAPI1을 사용하므로 "API1.circle at (1, 2) radius 3"이 출력됨.
<br>circle2 객체는 DrawingAPI2을 사용하므로 "API2.circle at (5, 7) radius 11"이 출력됨.
<br>이처럼 브리지 패턴을 활용하면, Shape 클래스 계층과 DrawingAPI 클래스 계층을 독립적으로 확장할 수 있어 유지보수가 용이해짐.
<br>
<br> 💡 Tip : 새로운 DrawingAPI3을 추가하더라도 기존 Shape 클래스들을 변경할 필요 없이 새로운 구현을 사용할 수 있음.