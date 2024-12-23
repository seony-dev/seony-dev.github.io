---
layout: post
title:  "[C++] 인라인 함수(inline function)"
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
### 🖥️ 인라인 함수(inline function)란?
> `inline` 키워드를 사용하여 컴파일러가 해당 함수에 대한 각 호출 대신, 함수 정의 내의 코드를 대체하도록 **제안**한다. <br>
 인라인 함수를 사용하면 함수 호출과 연관된 오버헤드가 제거되어 프로그램 속도가 더 빨라질 수 있다.

----
### 🖥️ 함수 호출 순서

> Stack에 개체 주소 저장 → 매개변수(파라미터) 저장 → 호출자 스택 프레임 보존 → 새 스택 프레임 생성 및 값 대입 → 처리 완료 후, 리턴 값 저장 → 이전에 보존한 스택 프레임 복원 → Return → 복귀 - 이전 스택 프레임 삭제



**※ 인라인화 시, 위 과정 삭제.**

----
### 🖥️ 인라인 함수 지정자 종류

- `inline` / `__inline` 
  - 함수가 호출되는 각 위치에 함수 본문의 복사본을 삽입하도록 컴파일러에 제안.
&nbsp;&nbsp;★ 컴파일러의 비용/이익 분석에서 가치가 있어 보일 경우에만 일어남.

- `__forceinline`
  - 인라인화를 위해 컴파일러에 강제 제안. <br>
&nbsp;&nbsp;★ 언리얼 C++에서는 강제하지만, 사실상 Visual Studio에서는 `inline` 지정자와 같이 가치가 있을 때만 인라인화 함.

컴파일러는 재귀함수, 변환 단위의 다른 위치에서 포인터를 통해 참조되는 함수일 경우 인라인을 무시함.
{:.note}

----
### 🖥️ 인라인 함수(inline) VS 매크로(Macro)
> 매크로는 예기치 않은 동작을 발생시킬 수 있고, 이로써 미묘한 버그가 발생할 수 있다. <br>
즉 인라인 함수는 매크로가 가지는 버그없이 일반 함수처럼 사용할 수 있으며, 디버깅이 가능하다.


``` cpp
#include <stdio.h>

#define mult1(a, b) a * b
#define mult2(a, b) (a) * (b)
#define mult3(a, b) ((a) * (b)) //반드시 전체 식에 괄호 한 번 더 감싸주기!

inline int multiply(int a, int b)
{
    return a * b;
}

//시험에 잘 나옴.
#define sqr(x) ((x) * (x))

inline int square(int x)
{
	return x * x;
}

int increment(int& number)
{
	return number++; // 리턴 후 후위 증가 처리 - 이 부분 중요!
}

int main()
{
    //Macro보다 Inline이 안전. (지금은 크게 의미 없음.)
    int a = (48 / mul(2 + 2, 3 + 3)); // (48 / 2) + (2 * 3) + 3 = 33
    int b = (48 / mul2(2 + 2, 3 + 3)); // 48 / (2 + 2) * (3 + 3) = 72
    int c = (48 / mul3(2 + 2, 3 + 3)); // 48 / ((2 + 2) * (3 + 3)) = 2 //괄호를 끝까지 쳐야 안전~!
    int d = (48 / Multiply(2 + 2, 3 + 3)); // 2 

    printf("a = %d\n", a);
    printf("b = %d\n", b);
    printf("c = %d\n", c);
    printf("d = %d\n", d);


    ////////////////////////////////////////////////////////////////////////


    int g = 5;
    printf("sqr(increment(g)) = %d\n", sqr(increment(g))); // sqr(increment(g) * increment(g)) = 30 -> return시 후위 증가하기 때문에 5 * 6 = 30
    printf("g = %d\n", g); //7


    g = 5;
    printf("square(increment(g)) = %d\n", square(increment(g))); // 5 * 5 = 25;
    printf("g = %d\n", g); //6

}
```

---- 
<span style="color:darkgray; font-size:14px;"> 출처 : <br>
＊ https://learn.microsoft.com/ko-kr/cpp/cpp/inline-functions-cpp?view=msvc-170 <br>
＊ https://siloam72761.tistory.com/entry/C-%EC%9D%B8%EB%9D%BC%EC%9D%B8-%ED%95%A8%EC%88%98%EC%9D%98-%EC%9E%A5%EB%8B%A8%EC%A0%90-define-%EB%A7%A4%ED%81%AC%EB%A1%9C%EC%99%80-%EC%B0%A8%EC%9D%B4 <br>
</span>



