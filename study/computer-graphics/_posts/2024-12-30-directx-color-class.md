---
layout: post
title:  "[Computer Graphics] Color 클래스 메서드 정리"
description: >
hide_last_modified: true
categories: [study, computer-graphics]
tags: [Programming, ComputerGraphics]
comments: true
---

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
