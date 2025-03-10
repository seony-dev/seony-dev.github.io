---
layout: post
title: "게임 프로그래밍 패턴 - 명령 패턴(Command Pattern)"
description: >
hide_last_modified: true
categories: [study, design-patterns]
tags: [Programming, Game Development, Design Patterns]
comments: true
---

<p align="center">  
  <img src="/assets/img/blog/design_patterns/game_command_pattern.jpg" style="width: 832px; height: auto;" />  
</p>
-----  

<span style="color:darkgray; font-size:13px;">이미지 출처: https://unity.com/kr/how-to/use-command-pattern-flexible-and-extensible-game-systems </span>

-----  

## 🕹️ 명령 패턴(Command Pattern)이란?
> 요청을 객체로 변환하여 **명령을 캡슐화하고, 실행 취소(Undo) 및 요청 저장 등의 기능을 지원하는 디자인 패턴.**

명령 패턴을 사용하면 **사용자 입력을 개별 객체로 관리**할 수 있으며, 게임 개발에서 **키 입력, 실행 취소, AI 행동 관리, 네트워크 동기화** 등의 기능을 쉽게 구현할 수 있다.

----  

## 🕹️ 명령 패턴이 필요한 이유

**💡 기존 방식의 문제점**
1. 특정 동작을 직접 호출하면 **입력과 로직이 강하게 결합**됨
2. **실행 취소(Undo) 기능을 구현하기 어려움**
3. **입력 키 변경이 유연하지 않음**
4. 명령을 **네트워크로 전달하거나 저장하는 것이 어려움**

**✅ 해결책**
> 명령 패턴을 사용하여 입력을 객체화하고, 실행 로직을 유연하게 변경 가능하도록 설계!

----  

## 🕹️ 명령 패턴의 구조

| **구성 요소** | **설명** |
|----------------|----------|
| **Command (명령 인터페이스)** | 실행될 동작을 정의하는 인터페이스. 모든 명령 객체가 이를 구현. |
| **Concrete Command (구체적인 명령 클래스)** | 실제로 실행할 로직을 정의한 클래스. Command 인터페이스를 구현. |
| **Invoker (호출자)** | 명령 객체를 저장하고 실행하는 역할. |
| **Receiver (수신자)** | 명령이 수행될 실제 객체. |

----  

## 🕹️ 명령 패턴의 활용 사례 (게임 개발)

### 🎮 1. 입력 처리 시스템
- 키 입력을 `Command` 객체로 변환하여 **유연한 키 매핑** 가능
- **예제**: `JumpCommand`, `AttackCommand`, `MoveLeftCommand`

### 🎮 2. 실행 취소(Undo) 기능
- 사용자의 입력을 저장하여 **되돌리기 기능** 구현 가능
- **예제**: RTS 게임에서 유닛 이동 취소

### 🎮 3. AI 행동 관리
- AI 행동을 명령 패턴을 사용해 **객체 단위로 관리**
- **예제**: AI의 공격, 이동, 대기 명령을 큐에 저장하여 실행

### 🎮 4. 네트워크 동기화
- 명령을 **객체화하여 네트워크로 전송 가능**
- **예제**: 멀티플레이 게임에서 플레이어 행동을 서버와 동기화

----  

## 🕹️ 명령 패턴 예제 코드 (C# Unity)

```csharp
public interface ICommand {
    void Execute();
    void Undo();
}

public class JumpCommand : ICommand {
    private Player player;
    public JumpCommand(Player player) { this.player = player; }
    public void Execute() { player.Jump(); }
    public void Undo() { player.CancelJump(); }
}

public class InputHandler {
    private ICommand jumpCommand;
    public InputHandler(ICommand jump) { jumpCommand = jump; }
    public void HandleInput() {
        if (Input.GetKeyDown(KeyCode.Space)) jumpCommand.Execute();
        if (Input.GetKeyDown(KeyCode.Z)) jumpCommand.Undo();
    }
}
```

**📌 코드 설명**
- `ICommand` 인터페이스를 만들어 **모든 명령이 공통적으로 `Execute()`와 `Undo()`를 가짐**
- `JumpCommand` 클래스는 `ICommand`를 구현하여 점프 동작을 수행
- `InputHandler`가 명령을 받아 실행하며, 사용자가 Z 키를 누르면 실행 취소

----  

## 🕹️ 명령 패턴의 장단점

| 장점 | 단점 |
|------|------|
| **코드의 유연성이 증가** (명령을 동적으로 변경 가능) | 클래스 수가 많아질 수 있음 |
| **실행 취소(Undo) 기능을 쉽게 구현 가능** | 작은 기능에는 과한 구조가 될 수 있음 |
| **요청을 큐에 저장하여 비동기 처리 가능** | 초기 구현 시 다소 복잡할 수 있음 |

----  

## 🕹️ 최종 정리
명령 패턴은 **입력 처리, 실행 취소, AI 행동 관리, 네트워크 동기화** 등에 활용되며, 코드의 유지보수성과 확장성을 높이는 데 큰 장점을 제공한다. 그러나 **클래스 수 증가 및 코드 복잡성 증가**라는 단점도 존재하므로, **복잡한 입력 처리가 필요한 경우에 적절하게 사용**하는 것이 중요하다.

----  

## 📚 출처
- [게임 디자인 패턴 1. 명령 패턴 (Command Pattern)](https://seoksii.tistory.com/68)
- [Chapter 14. 명령 패턴(Command Pattern)](https://ansohxxn.github.io/design%20pattern/chapter14/)
- [게임 시스템에서 명령 패턴을 사용하는 방법 - Unity](https://unity.com/kr/how-to/use-command-pattern-flexible-and-extensible-game-systems)

