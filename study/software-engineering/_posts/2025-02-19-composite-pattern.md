---  
layout: post  
title: "복합체 패턴(Composite Pattern)"  
description: >  
hide_last_modified: true  
categories: [study, software-engineering]  
tags: [Programming, Software Engineering]  
comments: true  
---  

<p align="center">  
  <img src="../../../assets/img/blog/software_engineering/composite-pattern.png" style="width: 832px; height: auto;" />  
</p>  
-----  

<span style="color:darkgray; font-size:13px;">이미지 출처: https://refactoring.guru/ko/design-patterns/composite</span>  

-----  
#### 🖥️ 복합체 패턴(Composite Pattern)이란?  
> 객체들을 **트리 구조**로 구성하여 단일 객체와 복합 객체를 **동일**하게 다루도록 하는 구조적 디자인 패턴.  
<br>이는 **클라이언트가 개별 객체와 복합 객체를 구분하지 않고 일관되게 처리할 수 있도록 설계하여 코드의 유연성과 재사용성을 높임.**  

----  
#### 🖥️ 복합체 패턴을 사용하는 이유  
<br>  

**⚠ 객체 계층 구조 처리의 문제점** <br>  

1. **부분-전체 계층 구조**를 표현할 때, 클라이언트는 개별 객체와 복합 객체를 **별도로 처리해야 하는 복잡성**이 발생함.  
2. 새로운 구성 요소를 추가할 때마다 **클라이언트 코드를 수정해야 하는 문제**가 생김.  
3. **객체들의 재귀적 합성**을 효과적으로 관리하기 어려움.  

<br>  

ex) 그래픽 편집기에서 점, 선, 사각형 등의 기본 도형과 이러한 도형들의 그룹을 다루는 경우

| 구성 요소 | 설명 |
|-----------|------|
| 점 (Dot) | 단일 객체로, 좌표를 가짐 |
| 선 (Line) | 두 개의 점으로 구성된 객체 |
| 사각형 (Rectangle) | 네 개의 점으로 구성된 객체 |
| 그룹 (Group) | 여러 개의 점, 선, 사각형 또는 다른 그룹을 포함할 수 있는 복합 객체 |

**✅ 해결방안**<br>  
위와 같은 문제를 해결하기 위해 **`복합체 패턴`**을 사용.

> 복합체 패턴은 **단일 객체와 복합 객체를 동일한 인터페이스로 다루도록 설계**하여, 클라이언트 코드의 복잡성을 줄이고 새로운 구성 요소의 추가를 용이하게 함.  
> 이를 통해 **객체들의 트리 구조를 재귀적으로 처리**할 수 있음.  

----  
#### 🖥️ 복합체 패턴의 구성 요소

| **구성 요소**            | **설명** |
|-------------------------|----------|
| **Component (컴포넌트)** | 부분과 전체를 동일하게 다루기 위한 공통 인터페이스 또는 추상 클래스. |
| **Leaf (잎)**            | 하위 요소를 가질 수 없는 개별 객체로, `Component` 인터페이스를 구현. |
| **Composite (복합체)**   | 하위 요소를 가질 수 있는 복합 객체로, `Component` 인터페이스를 구현하며, 자식 컴포넌트들을 관리. |

----  

### 🖥️ 복합체 패턴(Composite Pattern) 예시 코드

**C++ 예시**

```cpp
#include <stdio.h>
#include <vector>
#include <algorithm>

using namespace std;

//컴포넌트 인터페이스
class Graphic 
{
public:
    virtual void draw() const = 0;
    virtual ~Graphic() {}
};

//원 - Leaf(잎)
class Circle : public Graphic 
{
public:
    void draw() const override 
    {
        printf("원 그리기\n");
    }
};

//사각형 - Leaf(잎)
class Rectangle : public Graphic 
{ 
public:
    void draw() const override 
    {
        printf("사각형 그리기\n");
    }
};

//복합 그래픽 - 복합체(Composite)
class CompositeGraphic : public Graphic 
{
private:
    vector<Graphic*> children;
public:
    void add(Graphic* graphic) 
    {
        children.push_back(graphic);
    }

    void remove(Graphic* graphic) 
    {
        children.erase
        (
            remove(children.begin(), children.end(), graphic), children.end()
        );
    }

    void draw() const override 
    {
        for (const auto& child : children) 
        {
            child->draw();
        }
    }

    ~CompositeGraphic() 
    {
        //메모리 삭제
        for (auto& child : children) 
        {
            delete child;
        }
    }
};

int main() 
{
    //개별 객체 생성
    Graphic* circle = new Circle();
    Graphic* rectangle = new Rectangle();

    //복합 객체 생성
    CompositeGraphic* composite = new CompositeGraphic();
    composite->add(circle);
    composite->add(rectangle);

    //복합 객체를 포함하는 상위 복합 객체 생성
    CompositeGraphic* root = new CompositeGraphic();
    root->add(composite);

    //전체 구조 그리기
    root->draw();

    //메모리 해제
    delete root;

    return 0;
}
```

**출력 결과**

```
원 그리기
사각형 그리기
```

**설명**

- `Graphic` 인터페이스는 `draw` 메서드를 정의하여 모든 구성 요소가 이를 구현하도록 함.
- `Circle`과 `Rectangle` 클래스는 `Graphic` 인터페이스를 구현한 개별 객체(잎)로, 각각 원과 사각형을 그리는 기능을 제공.
- `CompositeGraphic` 클래스는 `Graphic` 인터페이스를 구현한 복합 객체로, 자식 `Graphic` 객체들을 관리하며, `draw` 메서드를 호출하면 모든 자식 객체의 `draw` 메서드를 재귀적으로 호출.
- `main` 함수에서는 개별 객체와 복합 객체를 생성하고, 복합 객체 내에 다른 복합 객체를 포함시켜 트리 구조를 형성한 후, 최상위 복합 객체의 `draw` 메서드를 호출하여 전체 구조를 그리며, 마지막에 메모리를 해제.

---- 
<span style="color:darkgray">출처 : <br>
＊ https://en.wikipedia.org/wiki/Composite_pattern <br>
＊ https://refactoring.guru/ko/design-patterns/composite <br>
</span>