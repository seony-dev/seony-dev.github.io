---
layout: post
title:  "Color 클래스 메서드 정리"
description: >
hide_last_modified: true
categories: [study, computer-graphics]
tags: [Programming, ComputerGraphics]
comments: true
---

#### 📼 `D3DCOLOR`란?
> 32비트의 DWORD(Unsinged Long)형 기본 Direct3D 색 형식. <br><br>
※ 범위 : 2^8 = 0 ~ 255 

```cpp
typedef DWORD D3DCOLOR;
```
---
#### 📼 D3DCOLOR 주요 매크로 <br>

* D3DCOLOR_COLORVALUE : RGBA 부동 소수점(`float`) 값으로 색을 초기화. <br>
```cpp
D3DCOLOR D3DCOLOR_COLORVALUE(
   float r,
   float g,
   float b,
   float a
);
```

* D3DCOLOR_RGBA : RGBA 값(`int`)으로 색을 초기화. <br>
R(8Bit), G(8Bit), B(8Bit), A(8Bit) <br><br>
```cpp
D3DCOLOR D3DCOLOR_RGBA(
   int r,
   int g,
   int b,
   int a
);
```

* D3DCOLOR_ARGB : ARGB 값(`int`)으로 색을 초기화. <br>
A(8Bit), R(8Bit), G(8Bit), B(8Bit) <br><br>
```cpp
D3DCOLOR D3DCOLOR_ARGB(
   int a,
   int r,
   int g,
   int b
);
```
* D3DCOLOR_XRGB : A(Alpha)를 제외한 RGB 값(`int`)으로 색을 초기화. <br><br>
```cpp
D3DCOLOR D3DCOLOR_XRGB(
   int r,
   int g,
   int b
);
```

---

#### 📼 새로 정의한 Color class 주요 메서드

```cpp
Color::Color(UINT rgba)
{
    //255를 나눔으로써 0 ~ 1 사이의 값으로 변환
	A = ((rgba >> 24) & 255) / 255.0f; 
	B = ((rgba >> 16) & 255) / 255.0f;
	G = ((rgba >> 8) & 255) / 255.0f;
	R = (rgba & 255) / 255.0f;
}

int Color::ToRgba()
{
	UINT a = (UINT)(A * 255.0f) & 255;
	UINT r = (UINT)(R * 255.0f) & 255;
	UINT g = (UINT)(G * 255.0f) & 255;
	UINT b = (UINT)(B * 255.0f) & 255;

	UINT value = r;
	value |= g << 8;
	value |= b << 16;
	value |= a << 24;

	return (int)value;
}
```
