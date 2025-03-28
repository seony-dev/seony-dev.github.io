---
layout: post  
title: "삼각형과 반직선의 교차 판정"  
description: >  
hide_last_modified: true  
categories: [study, computer-graphics]  
tags: [Ray Tracing, Intersection, Geometry]  
comments: true  
---

<p align="center">  
  <img src="/assets/img/blog/graphics/ray_triangle_intersection.jpg" style="width: 832px; height: auto;" />  
</p>  
-----

<span style="color:darkgray; font-size:13px;">이미지 출처: https://en.wikipedia.org/wiki/Möller–Trumbore_intersection_algorithm</span>  

-----

### 📼 `삼각형과 반직선의 교차 판정`이란?

> **3차원 공간에서 주어진 반직선(Ray)이 삼각형과 교차하는지 여부를 판단하는 기법.**

컴퓨터 그래픽스, 특히 **레이 트레이싱(Ray Tracing)** 기법에서 **광선과 객체의 교차 판정**은 필수적이다. 삼각형은 **3D 모델링에서 가장 기본적인 폴리곤 단위**이므로, 반직선과 삼각형의 교차 판정은 **렌더링의 정확도와 효율성**에 큰 영향을 미친다.

----

### 📼 `삼각형과 반직선의 교차 판정`이 중요한 이유

**💡 레이 트레이싱에서의 핵심 역할**
- **광선과 객체의 정확한 교차 판정**은 **픽셀 색상 결정**에 직접적인 영향을 미친다.
- **비효율적인 교차 판정 알고리즘**은 **렌더링 성능 저하**를 초래할 수 있다.

**✅ 해결책: 효율적인 교차 판정 알고리즘 사용**
- **Möller–Trumbore 알고리즘** 등은 **빠르고 정확한 교차 판정**을 제공하여 **렌더링 성능 향상**에 기여한다.

----

### 📼 `Möller–Trumbore 알고리즘` 개요

| 단계 | 설명 |
|------|------|
| 1. 벡터 계산 | 삼각형의 두 변 벡터를 계산한다. |
| 2. 행렬식 계산 | 반직선 방향 벡터와 삼각형 변 벡터의 행렬식을 계산한다. |
| 3. 매개변수 계산 | 교차 지점의 매개변수 값을 계산하여 유효성을 판정한다. |

> 📌 **Möller–Trumbore 알고리즘**은 **빠른 교차 판정**을 위해 **벡터 연산과 행렬식 계산**을 활용한다.

----

### 📼 Unreal C++ 예제 코드

```cpp
#include "CoreMinimal.h"
#include "Engine/Engine.h"

// 삼각형과 레이의 교차 판정 함수
bool RayIntersectsTriangle(const FVector& RayOrigin, const FVector& RayDir, const FVector& V0, const FVector& V1, const FVector& V2, float& OutDistance) 
{
    //광선이 평면과 너무 평행할 때 false로 간주
    const float EPS = 1e-6f; //부동소수점 오차 허용 범위를 위해 설정.

    //삼각형 면의 두 방향 벡터
    FVector Edge1 = V1 - V0;
    FVector Edge2 = V2 - V0;

    //노멀 벡터 계산 (평면 판정용 수직 벡터)
    FVector P = FVector::CrossProduct(RayDir, Edge2);
    float Det = FVector::DotProduct(Edge1, P);

    //광선이 삼각형 평면과 거의 평행하면 X
    if (FMath::Abs(Det) < EPS)
        return false;

    float InvDet = 1.0f / Det;
    FVector T = RayOrigin - V0;

    //u 파라미터
    float U = FVector::DotProduct(T, P) * InvDet;
    if (U < 0 || U > 1)
        return false;

    //v 파라미터
    FVector Q = FVector::CrossProduct(T, Edge1);
    float V = FVector::DotProduct(RayDir, Q) * InvDet;
    if (V < 0 || U + V > 1)
        return false;

    //t : 교차 거리
    float TDistance = FVector::DotProduct(Edge2, Q) * InvDet;
    if (TDistance > EPS) 
    {
        OutDistance = TDistance;
        
        return true;
    }

    return false;
}
```
```cpp
void ACPlayer::BeginPlay()
{
    Super::BeginPlay();

    FVector RayStart = FVector(0, 0, 0);
    FVector RayDir = FVector(0, 0, 1); //Up 방향

    FVector A = FVector(0, 100, 500);
    FVector B = FVector(-100, -100, 500);
    FVector C = FVector(100, -100, 500);

    float HitDist = 0.0f;

    if (SimpleRayTriangleIntersect(RayStart, RayDir, A, B, C, HitDist)) 
    {
        UE_LOG(LogTemp, Warning, TEXT("교차 거리 = %.2f"), HitDist);
    } 
    else 
    {
        UE_LOG(LogTemp, Warning, TEXT("✘ 교차하지 않음"));
    }
}
```


**출력 결과:**
```
교차 거리 = 500.00
```

**📌 코드 설명**

- **`SimpleRayTriangleIntersect` 함수**  
  → 반직선(Ray)이 삼각형과 교차하는지를 검사하는 함수.  
  → 교차 시 교차 거리(`OutDistance`)를 반환하며, 삼각형 내부에 있을 때만 `true` 리턴.

- **`RayOrigin`, `RayDir`**  
  → 광선의 시작점과 방향 벡터.  
  → 일반적으로 `RayDir`은 단위 벡터(normalized)로 설정하는 것이 좋음.

- **`V0, V1, V2`**  
  → 검사 대상 삼각형의 세 꼭짓점.

- **`Edge1`, `Edge2`**  
  → 삼각형의 두 변 벡터를 구함.  
  → 평면의 방향성을 결정하는 기준.

- **`Det`, `InvDet`**  
  → 광선과 평면의 관계를 나타내는 값.  
  → `Det`가 0에 가까우면 광선과 평면이 평행하므로 교차하지 않음.

- **`U`, `V` 파라미터**  
  → 삼각형 내부 좌표계(바리센트릭 좌표계)의 위치 값.  
  → `0 ~ 1` 사이의 값이며, `U + V <= 1`일 때만 삼각형 내부로 간주.

- **`TDistance`**  
  → 광선의 시작점으로부터 삼각형과의 교차 지점까지의 거리.  
  → 이 값이 `0`보다 크면 교차 지점이 광선의 앞쪽에 있으므로 유효한 교차로 판단.

----

## ✅ 장단점 요약

| 장점 | 단점 |
|------|------|
| **빠르고 정확한 교차 판정** | **삼각형에만 적용 가능** |
| **메모리 사용이 적음** | **복잡한 형상의 객체에는 추가 처리 필요** |
| **구현이 비교적 간단함** | **반직선이 아닌 경우에는 수정 필요** |

----

## 📌 요약 정리

| 항목 | 설명 |
|------|------|
| 목적 | 반직선과 삼각형의 교차 여부 판정 |
| 방법 | Möller–Trumbore 알고리즘 활용 |
| 적용 분야 | 레이 트레이싱, 충돌 판정 등 |

----

## 📚 참고 자료

- [Möller–Trumbore intersection algorithm - Wikipedia](https://en.wikipedia.org/wiki/Möller–Trumbore_intersection_algorithm)
- [Real-Time Rendering](https://www.realtimerendering.com/)