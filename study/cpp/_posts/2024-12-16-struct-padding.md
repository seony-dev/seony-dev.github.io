---
layout: post
title:  "구조체 패딩(Struct Padding)"
description: > 
hide_last_modified: true
categories: [study, cpp]
tags: [Programming, C++]
comments: true
---

<p align="center">
  <img src="../../../assets/img/blog/cpp/cpp_img.png">
</p>

----
### 🖥️ 구조체 패딩(Struct Padding)이란?
> 성능 향상을 위해 CPU가 접근하기 쉬운 위치 메모리에 구조체 필드를 배치하는 것. <br>
CPU는 메모리를 읽어올 때, 32bit 환경에서는 4Byte, 64bit 환경에서는 8Byte를 한 번에 읽어온다.

----
### 🖥️ 구조체 패딩의 장·단점

```cpp
#pragma once

struct test 
{
  char c;
  int num; 
};

```
----
보통 char는 1Byte, int는 4Byte라 생각해서 메모리 할당도 5Byte가 될 것이라 생각하지만, 실제로는 32bit 기준 4Byte씩 미리 할당되기 때문에 총 8Byte를 할당하게 된다. <br>
{:.note}

**[장점]** <br>
- 메모리에 접근하는 횟수가 줄어들어 성능 저하를 막을 수 있다.(CPU 연산 횟수 감소)

**[단점]** <br>
- 패딩 비트의 크기만큼 메모리를 낭비한다.
- 네트워크를 통해 구조체를 전송하게 되면, 서로 다른 메모리 정의를 가진 시스템 간 구조체를 주고 받으면 패딩 비트때문에 구조체의 값이 달라질 수 있다.

----
### 🖥️ 구조체 패딩의 해결 방안

1. `#pragma pack(push, n)`을 사용해서 컴파일러가 패딩 비트를 사용하지 않도록 한다.

```cpp
//n 바이트 단위로 저장하겠다고 지정하여 메모리 낭비 없애기
#pragma pack(push, 1)
struct test 
{
  char c;
  int num; 
};
#pragma pack(pop)
```

2. 직접 임의로 패딩 비트를 삽입한다.
```cpp
//임의의 값을 패딩 비트로 넣기.
struct test 
{
  char c;
  char padding[7];
  int num; 
};
```

---- 
<span style="color:darkgray; font-size:14px;"> 출처 : <br>
＊ https://bumukisbest.tistory.com/18 <br>
</span>



