---
layout: post
title:  "[Software Engineering] 코드 스멜 (code smell)"
description: >
hide_last_modified: true
categories: [study, software-engineering]
tags: [Programming, Software Engineering]
---

<p align="center">
  <img src="../../../assets/img/blog/software_engineering/codesmell.jpg">
</p>

----

### 🖥️ 코드 스멜(code smell)이란?
> 직역하자면 코드의 냄새, 즉 '악취가 나는 코드'이며 컴퓨터 프로그래밍 코드에서 개발자가 이해하거나 유지보수하기 어려운 코드이다.

-----
### 🖥️ 코드 스멜 종류
1) 중복 코드(Duplicated Code) : 똑같은 구조를 가진 코드가 여러 곳에서 반복됨

2) 긴 메서드(Long Method) : 메소드의 내용이 너무 김.

3) 방대한 클래스(Large Class) : 한 클래스 내부에 수많은 속성과 메소드가 존재.

4) 과다한 매개변수 : 메소드의 파라미터 개수가 너무 많음.

5) 뒤엉킨 변경(Divergent Change) : 하나의 클래스에 대해 잦은 변경이 발생하는 경우

6) 기능의 산재(Shotgun Surgery) : 변경이 발생할 때 마다 많은 클래수가 수정되는 경우

7) 잘못된 소속(Feature Envy) : 객체 안의 메서드와 데이터가 잘못연결

8) 데이터 뭉치(Data Clump) 동일한 목적/사용용도인 3~4개의 데이터가 몰려있음

9) 임시필드(Temporary Field) : 클래스안의 인스턴스 변수가 아주 특정한 상황에서만 사용됨, 대부분의 경우 실제 사용되지 않는 변수

10) 지나친 관여(Inapproprate Intimacy) : 클래스 간 관게가 지나치게 밀접함. 서로를 너무 많이 관여하고 있음

11) Switch 문 (switch Statements) : 중복코드 발생확률이 높음

12) 불필요한 주석(Comments) : 코드 스멜을 감추기 위해 수 많은 주석을 남용함

-----
### 🖥 코드 스멜의 예시

- 코드 중복성의 예시

```cs
public class FileLogger
{
    public bool IsLogMessageValid(string message)
    {
        return (!string.IsNullOrEmpty(message));
    }

    public bool DoLog(string message)
    {
        return true;
    }
}

public clads DbLogger
{
    public bool IsLogMessageValid(string message)
    {
        return (!string.IsNullOrEmpty(message));
    }

    public bool DoLog(string message)
    {
        return true;
    }
}
```

> 프로그래머는 로그 메시지가 유효한지 확인하기 위해 동일한 로직을 두 번 작성해야 한다. 더 나은 방법은 이 두 클래스를 `리팩토링`하고 `추상 클래스`를 만들어야 한다. 

-----
### 🖥 코드 스멜 해결 방법

'리팩토링(Refactoring)'으로 간단명료하게 클린 코드화 할 수 있다.  

```cs
public abstract class BaseLogger
{
    public bool IsLogMessageValid(string message)
    {
        return (!string.IsNullOrEmpty(message));
    }

    public abstract bool DoLog(string message);
}
public class FileLogger : BaseLogger
{
    public override bool DoLog(string message)
    {
        return true; //File Log 
    }
}

public clads DbLogger : BaseLogger
{
    public override bool DoLog(string message)
    {
        return true; //DB Log 
    }
}
```

-----

<span style="font-size:14px; color:darkgray;"> 출처 : <br>
＊ https://ko.wikipedia.org/wiki/%EC%BD%94%EB%93%9C_%EC%8A%A4%EB%A9%9C <br>
＊ https://refactoring.guru/ko/refactoring/smells <br>
＊ https://brunch.co.kr/@dichter/15 <br>
＊ https://xangmin.tistory.com/162 <br>
＊ https://www.makeuseof.com/tag/code-smells-fix/ <br>
＊ https://www.techtarget.com/searchsoftwarequality/tip/Understanding-code-smells-and-how-refactoring-can-help <br>
</span>