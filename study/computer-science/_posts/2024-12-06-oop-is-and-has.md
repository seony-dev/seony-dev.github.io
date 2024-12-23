---
layout: post
title:  "[CS/OOP] is-a와 has-a"
description: > 
hide_last_modified: true
categories: [study, computer-science]
tags: [Programming, CS, OOP]
comments: true
---

<p align="center">
  <img src="../../../assets/img/blog/computer_science/oop.png">
</p>

-----

#### 🖥️ 'is-a'란?

**B(class) is a A(class)** 
> 클래스 A가 서로 관련있는 클래스 B의 서브 클래스임을 의미함.
**상속** 관계에서 주로 사용.
{:.lead}

```cpp
class A
{
public:
	void MoveA()
    {
    	printf("Move A\n");
    }
};

class B : public A
{
public:
	void MoveB()
    {
    	printf("Move B\n");
    }
};

int main()
{
	B b;
    b.MoveA();
    
	return 0;
}
```
> console :
**Move A**

🚨 문제점 : 클래스 A와 클래스 B는 서로 밀접하게 결합되기 때문에 부모 클래스인 A에서 변경이 일어날 경우, 자식 클래스 B도 영향을 받을 가능성이 높다.<br>
'고양이는 포유류이다.'와 같은 1:1 관계에서는 안전한 클래스 계층구조를 이룰 수 있지만, 빈번한 상속은 피하는 것이 좋다.
혹은 `추상 클래스`로 다루는 것도 한 방법이다.

>
Don't use inheritance just to get code reuse If all you really want is to reuse code and there is no is-a relationship in sight, use composition. <br>
&nbsp;&nbsp; → _단지 `코드 재사용성`을 위해 상속을 사용하면 안 된다. 만약 코드 재사용을 원한다면 is-a 관계가 아닌, `객체 합성(composition)`을 사용하라._

> 
Don't use inheritance just to get at polymorphism If all you really want is a polymorphism, but there is no natural is-a relationship, use composition with interfaces. <br>
&nbsp;&nbsp; → _단지 `다형성`을 위해 상속을 사용하면 안 된다. 만약 다형성을 원한다면 is-a 관계가 아닌, `인터페이스와 함께 객체 합성(composition)`을 사용하라._

<span style="color:darkgray; font-size:14px;">＊ 인용 출처 : https://www.w3resource.com/java-tutorial/inheritance-composition-relationship.php </span>

---

#### 🖥️ 'has-a'란?
**A(class) has a B(class)** 
> 클래스 A가 서로 관련 없는 클래스 B를 가지고(포함하고) 있음을 의미.
{:.lead}

```cpp
class A
{
public:
	void Attack()
    {
    	printf("A - Attack! \n");
    }
};

class B : public A
{
public:
	void UseWeapon()
    {
    	Attack();
    }
};

int main()
{
	B b;
    b.UseWeapon();
    
	return 0;
}
```
> console :
**A - Attack!** 

🚨 문제점 : <br>
결합도(coupling; 의존도)가 높아져, 소프트웨어 


-----
<span style="color : darkgray;">출처 : <br>
＊ https://en.wikipedia.org/wiki/Is-a <br>
＊ https://en.wikipedia.org/wiki/Has-a <br>
＊ https://www.w3resource.com/java-tutorial/inheritance-composition-relationship.php <br>
＊ https://minusi.tistory.com/entry/%EA%B0%9D%EC%B2%B4-%EC%A7%80%ED%96%A5%EC%A0%81-%EA%B4%80%EC%A0%90%EC%97%90%EC%84%9C%EC%9D%98-has-a%EC%99%80-is-a-%EC%B0%A8%EC%9D%B4%EC%A0%90 <br>
＊ https://en.wikipedia.org/wiki/Coupling_(computer_programming) <br>
</span>