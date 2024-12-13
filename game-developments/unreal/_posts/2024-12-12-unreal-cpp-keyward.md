---
layout: post
title:  "[Unreal C++] 주요 키워드 정리"
description: >
hide_last_modified: true
categories: [game-developments, unreal]
tags: ["게임 개발", "unreal"]
---

<p align="center">
  <img src="../../../assets/img/blog/unreal/unreal_img.png"/>
</p>

----

{:.toc}

----
### 🎮 HAL(Hardware Abstraction Layer; 하드웨어 추상화 계층)이란?
> 하드웨어와 소프트웨어 사이의 추상화 계층. 하드웨어의 차이를 숨겨, 응용 프로그램이 작동할 수 있는 일관된 플랫폼을 제공한다. <br>
OS는 HAL을 다른 하드웨어로 쉽게 이식할 수 있게 해주는 것으로 정의한다.


BSD, 리눅스, 윈도우 NT는 하드웨어 추상화 계층에 기반하고 있으며, 특정한 기능에 대한 하부 시스템을 가지고 있다.
{:.memo}

----
### 🎮 DXGI이란?
> Direct3D와 함께 쓰이는 API로 DirectX 그래픽 런타임에 독립적인 저수준(Low-Level)의 작업을 관리하며, DirectX 그래픽을 위한 기본적이고 공통적인 프레임워크를 제공한다. <br>
DXGI의 주요 목표는 DirectX 그래픽 런타임과 독립적일 수 있는 하위 수준 작업을 관리하는 것이다. <br>

※ 그래픽의 일부가 다른 부분보다 더 느리게 진화한다는 것을 인식하여, 향후 그래픽 구성 요소에 대한 공통 프레임워크를 제공함. 즉 DXGI는 **DirectX의 하드웨어 추상 레이어이다.**

<p align="center">
  <img src="../../../assets/img/blog/unreal/DXGI.png"/>
</p>

- 목적 : 위 다이어그램과 같이 커널 모드 드라이버 및 시스템 하드웨어와 통신하는 것.

----
### 🎮 직렬화(Serialization)란?
> 언리얼 오브젝트 및 오브젝트 그래프를 하드웨어의 I/O(입출력)을 통해 바이트 스트림으로 변환하는 과정. <br>
↔ 역직렬화


----
### 🎮 바이트 스트림(ByteStream)이란?
>


----
### 🎮 엔디언(Endian)이란?
>


----
### 🎮 pragma pack이란?
>


----
<span style="color:darkgray; font-size:14px;"> 출처 : <br>
＊ https://en.wikipedia.org/wiki/Hardware_abstraction <br>
＊ https://learn.microsoft.com/ko-kr/windows/win32/direct3ddxgi/d3d10-graphics-programming-guide-dxgi <br>
＊ https://lipcoder.tistory.com/24 <br>
</span>