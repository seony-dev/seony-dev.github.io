---
layout: post
title:  "[C++] C++ 이론 정리"
description: > 
hide_last_modified: true
categories: [study, cpp]
tags: [Programming, C++]
---

![](../../../assets/img/blog/cpp/cpp_img.png)

### 🖥️ C/C++ 처리 과정
> Header -> 전처리기 -> 컴파일러 -> 목적파일(obj) -> 링커(lnk) -> 실행파일(exe)
Cpp 

> CPU <-> RAM <-> SSD(exe)
RAM 
-> 프로세스
Code - 컴파일된 결과
Data - 전역/스태틱 변수
Stack
 .
 .
 .
Heap - 직접 메모리 할당하고 수정할 수 있는 부분
BSS - 초기화 안된 변수


-----

1. 절차지향(Procedural) - 함수지향
기능을 함수별로 나눔

2. 정보공학(구조체) - 데이터 중심

=============  구현에 집중
* SDLC
요구사항 분석 > 설계 > 구현 > 검증 > 유지보수 > 폐기(섭종)

============= 설계에 집중
3. 객체지향
정보은닉, 캡슐화, 상속성, 다형성(오버로딩, 오버라이딩), 추상화
SOLID 원칙

4. CBD - 컴포넌트 중심

Unreal : 상속 및 컴포넌트로 구성

------

```cpp
int Add(int a, int b); //선언부

int main()
{
	int d = Add(10, 20); //호출부
		//Add(10, 20) - 콜 스택(스택 프레임)
		
		return 0;
}

int Add(int a, int b) //정의부
{
	int c = a + b;
	return c;
	
}
```

* 기술시험 단골문제 : 함수 호출 규약 - 정리
    - cdecl
    - stdcall
    - ebp, esp

------

* 디자인 패턴

생성 / 구조 / 행동

→ 생성 : 대부분이 2차 포인터로 이루어져 있음.

------

* 동적 할당

> malloc - free / 용량 단위
new - delete / 자료형 단위
============ Heap 영역
virtualAlloc(가상메모리 할당) - virtualFree(가상메모리 제거) / 용량 단위
============ SSD 영역
void* malloc() //몇 바이트를 동적 할당할건지 (void* : 필요한 자료형으로 캐스팅해서 사용)

-----

주소 사상(매핑)기법
- 찾아보기

------

* 저수준 언어 / 고수준 언어 나누는 기준
    - Decoder

------

* 구조체 / 클래스 차이 
    - 구조체 : 접근지정자 지정 안 해주면 public / 클래스 : 접근지정자 지정 안 해주면 private

------

* 객체 지향 5가지

1. 정보은닉화(접근 지정자)
2. 캡슐화(멤버 메서드 함수) -> '블랙박스'화 / 실제 처리하는 내부는 알 수 없음.
3. 상속성
4. 다형성(오버로딩)
5. 추상화

------

* 접근 지정자
    - . : 직접 / -> : 간접

-----

절차지향 : 함수 기반 프로그래밍
   |
   ↓
정보공학(;구조적) : 데이터(변수) 기반 프로그래밍. -> struct (데이터만, 즉 멤버변수만 모아놓음. 현재의 구조체와는 다름)
   |
   ↓  - s/w 위기 (개발의 패러다임이 완전히 바뀜)
객체지향 : 구조체를 발전시켜서 클래스화. / 주로 데이터만 저장 - 구조체, 주로 복잡한 행동 저장 - 클래스
		  클래스 - 멤버 변수 / 멤버 메서드
 
 
------

* Static 변수, 메서드는 클래스:: 로 접근하는 것이 일반적. - 클래스 공용 영역(Data)에 존재.
모호성 방지


-----

** [암시적 멤버 메서드(자동 선언 메서드) 5가지] **

1. 기본생성자 : Character(){}
2. 소멸자 - 오버로딩이 불가능하기 때문에, 하나만 선언 가능. : ~Chracater(){}
3. 복사 생성자 
	[호출 조건]
	1) 자신의 타입 객체로 초기화
	Character* c = new Character();
	Character* c = new Character(*c);

	2) 객체 초기화 - 1,2 같은 얘기이므로 '초기화'로 생각
	Character e = &d;

	3) 파라미터로 전달 : Chracter(const Chracter& val){}
	
	4) 리턴 : e = *c;
	
4. 대입 연산자 : Chracter& operator = (const Character& val){}
5. 이동 생성자
6. 이동 대입 연산자

-----

* String
> 
**ASCII - ANSI (1Byte) - 0~127**
Char
[+,-][][][][][][][]
맨 앞은 부호 
2^7 = 128 (0~127)

**Unicode - MBCS - L"" / Unicode - Text("")**
		  
		  


