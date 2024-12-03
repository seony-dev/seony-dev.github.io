---
layout: post
title:  "[CS] RAM(Random Access Memory)"
description: > 
hide_last_modified: true
categories: [study, computer-science]
tags: [Programming, CS]
---

![](../../../assets/img/blog/computer_science/ram.jpg)

-----
#### 🖥️ RAM(Random Access Memory)이란?

> 프로그램이 실행되는 동안 필요한 정보를 저장하는 컴퓨터 메모리. 즉 저장된 데이터를 순차적이 아닌 임의의 순서로 액세스할 수 있는 데이터 저장소이다. 
RAM은 데이터를 저장하거나 저장된 데이터를 읽어내는 ‘기억 장치’의 역할을 하기 때문에, 데이터를 무기한 저장할 수 있는 하드 디스크 드라이브(HDD)와 솔리드 스테이트 드라이브(SSD)와 달리 전원이 꺼지면 데이터가 삭제된다.

`📝 대부분의 컴퓨터는 최소한의 메모리만 장착되어 출시되므로 메모리를 추가하면 경제적으로 컴퓨터의 성능을 매우 쉽게 향상할 수 있음.`

-----
#### 🖥️ RAM의 종류

![Crucial DDR4-3200 CL22](https://velog.velcdn.com/images/seony-dev/post/5ec9abc8-35c0-430f-8075-0b4b92552d35/image.jpg)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▲ 마이크론 Crucial DDR4-3200 CL22


> 메모리 종류에는 SDRAM, RDRAM, DDR SDRAM 등이 있으며, 현재는 `DDR-SDRAM` 종류만 사용되고 있다.

- **SDRAM(Synchronous Dynamic RAM)**
	- SDRAM은 SIMM 및 DIMM 패키지에서 사용할 수 있으며, 두 가지 구성으로 사용할 수 있다. 

- **RDRAM(Rambus Direct RAM)**
	- RDRAM은 Rambus Inc.에서 SDRAM의 뒤를 이어 개발한 고성능 RAM이며, RDRAM은 RIMM 패키지에서만 사용할 수 있다.
    
- **DDR-SDRAM(Double Data Rate-Synchronous DRAM)**
	- DDR-SDRAM은 SDRAM II 또는 DDRAM이라고도 하며, SDRAM에서 발전된 유형으로 클럭 주기당 2배의 메모리를 전송할 수 있다.	
 	- DDR 메모리는 DDR1, DDR2, DDR3, DDR4, DDR5로 분류된다. 현재아직 DDR3을 쓰는 컴퓨터도 더러 있지만, 대부분 `DDR4 SDRAM`을 지원하고 있다. 
    - DDR5의 경우, 2019년에 출시된 가장 최신 RAM 기술이며, 2023년 후반부터 점유율이 크게 상승하고 있다고 한다. 

- **패리티 RAM**
	- ECC RAM이라고도 하며, 일반적으로 대량의 스프레드시트 및 데이터베이스와 같이 많은 데이터 처리가 요구되는 애플리케이션에서 사용된다. 
    또한, 패리티 RAM에는 추가 회로가 포함되어 있어서 RAM 고유 오류를 최소화합니다.

- **비패리티 RAM**
	- Non-ECC RAM이라고도 하며, 일반적으로 패리티 RAM보다 값이 저렴합니다.
    
`📝 패리티 RAM 및 비패리티 RAM은 대개 서로 호환되지 않는다.`

-----
#### 🖥️ RAM의 작동 방식

RAM은 "휘발성 메모리"이기 때문에 사용 중인 프로그램은 RAM에 일시적으로 로딩되지만, 스토리지 드라이브에는 삭제될때까지 영구적으로 저장된다.

컴퓨터가 프로그램을 실행하거나 작업을 수행할 때 필요한 임시 데이터는 빠르게 접근되어야 한다. 이를 위해 스토리지 장치보다는 RAM에서 데이터를 읽고 쓰는 것이 훨씬 빠르다. 예를들어 최신 PC 게임같은 경우 신속한 art asset 검색이 필수적이기 때문에 RAM을 주로 활용한다.

-----

#### 🖥️ RAM의 용량

RAM(메모리) 용량이란 1개의 메모리 기판에서 제공하는 용량을 의미한다. 단위는 GB(기가바이트)이며, 2의 제곱 단위로 올라간다. 
`ex) 시작: 1GB → 2GB, 4GB, 8GB, 16GB, 32GB…`

컴퓨터가 메모리 용량이 부족할 때, 하드디스크에서 직접 데이터를 읽어오는데, 이로 인해 작업 속도가 매우 느려진다. 
따라서 메모리가 부족한 경우 용량을 증설하면 속도가 향상될 수 있지만, 이것은 단순히 ‘용량’을 늘리는 개념이므로 '작동 속도' 자체가 빨라지는 것은 아니다. 그러므로 **메모리가 충분한 경우에도 추가적으로 메모리를 늘려도 속도가 향상되지 않는다.**

메모리를 구입할 때 고려해야 할 점은 메인보드가 인식할 수 있는 메모리 종류와 최대 메모리 용량이 정해져 있다는 점이다. 
또한, 운영체제가 32비트인 경우 3GB 이상의 메모리를 사용할 수 없다. 3GB 이상을 사용하려면 운영체제 설정을 변경할 수 있지만, 이는 권장되지 않는다.

만약 4GB 이상의 메모리를 사용하려면 64비트 운영체제를 사용해야 한다. 따라서 RAM을 선택할 때에는 `메인보드`와 `운영체제`를 고려해야 한다.

-----
<span style="color : darkgray;">출처 : 
https://www.dell.com/support/kbdoc/ko-kr/000148441/%EB%A9%94%EB%AA%A8%EB%A6%AC-ram-%EC%A0%95%EC%9D%98
  
  https://www.intel.co.kr/content/www/kr/ko/gaming/resources/how-much-ram-gaming.html
  
https://library.gabia.com/contents/infrahosting/1237/
  
https://www.chosun.com/economy/tech_it/2023/10/16/PBECBXCKQ5HSTD3VG73IHAH7NU/
</span>