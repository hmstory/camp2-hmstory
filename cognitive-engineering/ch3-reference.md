# Wickens et al. — Ch.3: Attention in Perception and Display Space
> **영구 참조 문서** | pp.49-83 전체 커버 | 다시 PDF 읽을 필요 없음
> 생성일: 2026-04-04

---

## 목차
1. [시각적 주의 개요 (§1)](#1-시각적-주의-개요)
2. [선택적 주의 (§2)](#2-선택적-주의)
3. [객체 기반 주의 (§3)](#3-객체-기반-주의)
4. [PCP — 근접 호환성 원리 (§3.5)](#4-pcp--근접-호환성-원리)
5. [청각 주의 (§4)](#5-청각-주의)
6. [핵심 용어 색인](#6-핵심-용어-색인)

---

## 1. 시각적 주의 개요

### 기본 개념
- **주의 = 필터**: 환경의 모든 정보를 처리할 수 없으므로 선택적으로 처리
- **foveal vision**: 중심 ~2° 이내에서 정밀 판독 가능; 주변시는 저해상도
- **시선 고정(fixation)**: 눈이 멈추는 곳 = 정보 획득 지점

### SEEV 모델 (p.50-51)
어떤 AOI(Area of Interest)에 주의가 얼마나 자주 향하는지 예측:

```
P(AOI) = a + b·Salience + c·Effort + d·Expectancy + e·Value
```

| 요소 | 의미 | 방향 |
|------|------|------|
| **S**alience | 자극의 물리적 현저성 (움직임, 깜빡임, 색상) | ↑ 높을수록 주의 ↑ |
| **E**ffort | 주의 이동에 필요한 노력 (거리, 방향) | ↑ 높을수록 주의 ↓ |
| **E**xpectancy | 해당 AOI에서 중요 정보가 나타날 확률 | ↑ 높을수록 주의 ↑ |
| **V**alue | 정보의 중요도/가치 | ↑ 높을수록 주의 ↑ |

- **AOI 측정**: 고정 빈도(fixation frequency), 체류 시간(dwell time)
- **Frequency of sequential use**: 두 AOI가 연속으로 사용되는 빈도 → 가까이 배치해야 노력 절감

### Change Blindness (p.52)
- 화면 전환 시 변화를 알아채지 못하는 현상
- 주의가 변화 지점에 없으면 감지 불가
- **Periods of neglect**: 어떤 AOI도 보지 않는 시간 간격

---

## 2. 선택적 주의

### 전주의(Pre-attentive) vs. 주의(Attentive) 처리

| 구분 | 특성 | 예시 |
|------|------|------|
| Pre-attentive | 병렬, 빠름, 자동 | 색상, 크기, 방향 → **target popout** |
| Attentive | 직렬, 느림, 의식적 | 글자 읽기, 복잡한 탐색 |

### 탐색 유형
- **병렬 탐색(Parallel search)**: 단순 특징 하나 → 군중 속에서 즉시 발견
- **결합 탐색(Conjunction search)**: 두 특징의 조합 → **SSTS(Serial Self-Terminating Search)** 모델
  - 목표 발견 시 탐색 종료; 평균 탐색 시간 = n/2 × 단계별 시간
- **Guided search**: 탐색 이전에 특징 필터링으로 탐색 집합 축소 (Ahissar & Hochstein)

### 클러터(Clutter) — p.61
세 가지 유형:
1. **Local density clutter**: 특정 영역에 항목 밀집
2. **Heterogeneous clutter**: 다양한 크기/형태/색상 혼재 → 비균일한 배경
3. **Numerosity clutter**: 전체 항목 수 과다

### Flanker/Readout Clutter — p.61
- 관심 자극으로부터 **~1° 시각각(visual angle) 이내**의 다른 읽기값 → 판독 속도 저하
- 출처: Broadbent (1982)
- 응용: HUD 판독값이 활주로 근처에 겹치면 문제 발생

### 공간 분리와 분할 주의 비용 — p.67
- 두 정보 간 거리가 멀수록 분할 주의 비용 증가
- **비선형(not linear)**: Figure 3.1에 나타난 공간 거리 함수를 따름 (선형이 아님!)
- Banbury, Selcon & McCrerie (1997):
  - **비호환(incompatible) 배열 → 점검 오류 4배 증가** (호환 배열 대비)
  - (주의: "4배 감소"가 아님. incompatible이 4배 더 나쁨)

### 자동화와 일관 매핑 — p.59
- **Consistent mapping**: 동일 자극이 항상 동일 반응 → 자동화(automaticity) 달성
- **Varied mapping**: 자극-반응 관계가 변함 → 자동화 어려움
- 출처: Shiffrin & Schneider (1977)
- **Automation complacency** (p.62): 자동화에 과도 의존 → 실패 감지 늦어짐

### Attentional Cueing & Narrowing — p.62-63
- **Imperative stimulus**: 갑작스러운 자극(소리, 깜빡임)이 주의 강제 포획 → attentional capture
- **Attentional narrowing / tunneling** (p.63): 고부하·고스트레스 상황에서 주의 범위 협소화
  - HUD 맥락에서 교재가 사용하는 용어 (inattentional blindness가 아님)
  - 활주로 위 비행기를 HUD 판독값에 집중할 때 못 보는 현상
  - **Highlighting**: 중요 항목 강조 → tunneling 완화

### HUD 연구 — Wickens & Long (1995) — p.63, 69
- **Conformal HUD**: HUD 심볼 위치 = 실제 외부 환경 위치와 일치 (Figure 3.5c)
  - 비행기가 움직이면 HUD 활주로 심볼도 함께 이동
  - 결과: 착륙 중 항공기 위치 제어 향상
- **Non-conformal HUD**: 심볼이 실제 환경과 불일치 → 클러터 문제 + 터널링 유발
- 이것은 **증강현실(Augmented Reality)** 의 초기 형태 (Chapter 5에서 상세)

---

## 3. 객체 기반 주의

### 공간 기반 vs. 객체 기반 — p.65-68
- **공간 기반 주의(Space-based attention)**: 위치에 주의 집중
  - Eriksen & Hoftman (1972) — 위치 cueing 효과
  - UFOV(Useful Field of View): ~5.5°까지 공간 기반 주의 효과 (Nakayama & Mackeben, 1989)
- **객체 기반 주의(Object-based attention)**: 공간이 아닌 객체 전체에 주의 확장
  - Duncan (1984): 단일 객체의 두 속성 → 병렬 처리 용이
  - 별개 객체의 두 속성 → 직렬, 주의 비용 발생

### Object File Theory — p.68
- **Kahneman, Treisman & Gibbs (1992)**
- 각 객체는 고유한 "object file" 생성 → 객체 내 특징들이 결합(binding)
- 객체 내: 병렬 처리 / 객체 간: 직렬 처리

### Stroop Effect — p.68
- 단어와 색상이 같은 객체에 결합될 때 발생
- 읽기의 자동화(Shiffrin & Schneider, 1977)로 인해 글자 의미가 자동 처리 → 색상 반응과 충돌
- **Response conflict**: 관련 정보(색상)와 무관 정보(단어 의미)가 동일 객체 내 있을 때
- **Redundancy gain**: 두 특징이 같은 반응을 요구할 때 반응 촉진

### Weapons Effect — p.64
- 무기처럼 보이는 객체가 주의를 포획하는 현상

### 창발적 특징(Emergent Features) — p.64
- 개별 항목이 아닌, 자극 집합의 전체적 속성
- 예: 엔진 다이얼 12시 방향 정렬 → "all is well" 신호
- 집합 처리(holistic/global processing)에 의존

### Conformal Symbology & Object Displays — p.69-71
**Conformal symbology** (p.69):
- HUD 심볼이 실제 환경 위치에 대응 → 실제+HUD = 하나의 객체
- Common fate 원리(Gestalt): 비행기가 회전하면 활주로 심볼도 회전 → 단일 객체 지각
- 병렬 처리 향상, 클러터 문제 해소

**Object displays** (p.69-70):
| 디스플레이 | 설계 | 창발적 특징 |
|-----------|------|------------|
| 원자력발전소 안전변수 (Westinghouse) | 8개 파라미터 = 8개 스포크 폴리곤 (Woods et al., 1981) | 폴리곤 형태/대칭성 |
| 의료용 O2 교환 표시 (Cole, 1986) | 직사각형: 폭=호흡률, 높이=깊이 → 면적=총산소량 | 크기, 형태 |
| 마취 심혈관 디스플레이 (Drews & Westenskow, 2006) | 심혈관 시스템 구조 기반 | 비대칭 = 이상상태 |

**텍스트의 객체 통합** (p.70):
- 시카고 타이포그래픽 맵(Figure 3.8): 거리 이름 글자들이 거리 자체를 형성 → 통합 객체

---

## 4. PCP — 근접 호환성 원리

> **Proximity Compatibility Principle (PCP)**
> Wickens & Carswell (1995, 2012)
> 핵심: "과제 근접성(task proximity)과 디스플레이 근접성(display proximity)은 일치해야 한다"

### 핵심 다이어그램 (Figure 3.10, p.72)
```
성능(Performance)
↑
│ ╲ (High display proximity) ╱
│  ╲                        ╱ 고과제근접(분할주의, 정보통합)
│   ╲                      ╱ → 디스플레이 근접 ↑ = 성능 ↑ [점선]
│    ╲                    ╱
│     ╲                  ╱
│      ╲                ╱ 저과제근접(집중주의)
│       ╲              ╱  → 디스플레이 근접 ↑ = 성능 ↓ [실선]
└────────────────────────→ 디스플레이 근접성
   Low(distant)    High(close)
```

- **고과제근접(High task proximity)**: 정보 통합 필요 → 디스플레이 가깝게 → 성능 향상
- **저과제근접(Low task proximity)**: 한 정보에 집중, 나머지 무시 → 디스플레이 가깝게 → 성능 저하

### 중요 제한 조건
- PCP는 **정보 통합 과제(information integration tasks)** 에만 적용
- **이중 과제(dual task processing)** 에는 적용 안 됨 (Chapter 10에서 별도 논의)
- 정보 통합 = 여러 입력을 하나의 인지/운동 반응으로 결합 (예: 속도+방향 → 충돌 위험 판단)
- 이중 과제 = 각 요소가 별개 반응과 목표 (예: 핸드폰 걸면서 차선 유지)

### 디스플레이 근접성 차원 (Figure 3.11, p.73)

#### 3.5.1 감각/지각적 유사성
1. **공간 근접(Space proximity)**
   - 같은 페이지에 그림+본문 → Liu & Wickens (1992)
   - 위험 정보 + 제품 정보 공동 배치 → 경고 준수율 향상 (Frantz, 1994)
2. **색상 근접(Color proximity)**
   - 같은 색 → 병렬 처리 용이, 분할 주의 지원 (Yeh & Wickens, 2001a)
   - ATC 응용: 같은 고도 항공기 = 같은 색 (Remington et al., 2001)
   - 충돌 위험 쌍 = 빨간색으로 통합

#### 3.5.2 공통 객체(Common Object)
3. **연결선(Connections)**
   - 선으로 연결된 두 객체 → 주의가 선을 따라 자동 이동 (Jolicoeur & Ingleton, 1991)
   - ATC 분쟁 디스플레이: 같은 색 + 연결선으로 충돌 쌍 표시
4. **인접(Abutment)**
   - 두 객체 경계 접촉 → 단일 객체로 지각
   - 창발적 특징 = 공선성(co-linearity)
   - **Vernier acuity**: 인간이 선의 불연속에 극도로 민감 (McKee & Nakayama, 1983)
5. **이질적 특징(Heterogeneous features)**
   - 크기+밝기+형태 등 **서로 다른 지각 분석기**에서 처리 (Treisman, 1986)
   - 정보 병렬 처리에 유리 → 클러터 감소 효과
   - 통합 과제가 불리언 논리(A이면서 B인가?)일 때 최적
   - **단점**: 산술적 통합(차이 계산 등)에는 부적합 → 동일 "지각 통화"로 표현 불가
6-7. **동질적 특징(Homogeneous features)**
   - 단일 지각 분석기로 처리 (공간 거리 분석기)
   - XY 좌표 (행 6), 직사각형 W×H (행 7)
   - 곱셈/비율 통합에 유리: 면적 = 폭 × 높이 → 숫자 곱셈 불필요

#### 3.5.3 창발적 특징(Emergent Features)
8. **동질적 특징 (다시)**: 창발적 특징 → 통합 과제 (Bennett & Flach, 1992)
   - 공통 기준선 정렬(Figure 3.12): 두 막대그래프를 공통 기준선에서 → 높이 같음이 창발적으로 지각
   - 출처: Sanderson, Flach et al. (1989)
9. **폴리곤 디스플레이와 대칭성(Polygon display)**
   - 대칭 = 정상 상태, 비대칭 = 이상 상태로 즉각 지각
   - 참고: Beringer & Chrisman (1995), Hughes & MacRae (1994), Woods et al. (1981)

**선 그래프의 창발적 특징** (Figure 3.13, p.76):
- 두 데이터 포인트를 선으로 연결 → **기울기(angle)** 라는 창발적 특징 생성
- 상호작용 효과가 막대그래프보다 선 그래프에서 더 현저하게 지각됨

#### 3.5.4 집중 주의 비용: 공짜 점심이 있나? (p.77)
핵심 결론: **상황에 따라 공짜 점심이 있다**

| 근접성 수단 | 통합 도움 | 집중 방해 | 비고 |
|-----------|----------|----------|------|
| 공간 거리 축소 (20°→2°) | ✓ | ✗ (1° 이상에서는) | 1° 미만 overlap 시 방해 |
| 색상 공유 | ✓ | ✗ | 가장 안전한 방법 |
| 연결선 | ✓ | ✗ | X축 외삽에 방해 없음 |
| 같은 객체 내 배치 (겹침) | ✓ | ✓ | 1° 미만 → Flanker 효과 |

- 겹침(overlap) 발생 시에만 집중 주의 비용 크게 증폭 (Wickens & Carswell, 1995)
- 실무 원칙: 색상·연결선을 우선 활용하면 통합도 돕고 집중도 방해하지 않음

---

## 5. 청각 주의

### 시각 주의와의 3가지 차이 (p.77)
1. **전방향성(Omnidirectional)**: 모든 방향에서 입력 받음 → "eyeball" 없음, 방향 이동 없음
2. **항상 수신(Always receiving)**: 어둠 속, 수면 중에도 입력 → "earblink" 없음
3. **일시성(Transient)**: 소리는 들리고 사라짐 → 전주의 청각 저장소(3-6초)가 더 중요

### 4.1 청각 분할 주의 (p.78-79)
- 공간 분리 또는 주파수 차이 → 두 목소리 분리 용이 (Humes, Lee & Coughlin, 2006)
- **전주의 청각 저장소**: 미주의 채널도 3-6초 저장 (Norman, 1968; Keele, 1972) → 나중에 의식적 스위치 가능
- **자기 이름 효과**: 다른 채널 청취 중에도 자기 이름이 들리면 주의 전환 (Moray, 1959; Wood & Cowan, 1995)
- **Attensors**: 조용하지만 주의를 포획하는 경보 (Hawkins & Orlady, 1993; Sarter, 2009)
- **청각 객체(Auditory object)**: 여러 차원을 가진 소리 → 시각 객체처럼 병렬 처리 가능

### 4.2 청각 집중 주의 (p.79-80)
- **칵테일 파티 효과(Cocktail party effect)**: 소음 속에서 특정 화자 선택적 청취
- **청각 스트리밍(Auditory streaming)**: 소리를 지각적으로 구별되는 스트림으로 조직화 (Bregman, 1990)
  - **Fusion** (융합): 작은 음높이 차이 → 단일 스트림 (Figure 3.14a)
  - **Fission** (분리): 큰 음높이 차이 OR 빠른 제시 속도 → 두 스트림 (Figure 3.14b,c)
  - 클래식 음악의 **Polyphony**: 두 개 이상 멜로디 동시 연주 → 별개 스트림으로 지각
- **단이(Monaural) vs. 양이(Dichotic)**: 양이 청취(각 귀에 다른 채널)가 단이보다 분리 훨씬 우수

### 4.3 교차 양식 주의 (p.80-82)
**3D 오디오**:
- 공간적 위치 시뮬레이션 → 전 360° 범위에서 청각 주의 유도
- 일반 스테레오 헤드폰으로도 구현 가능
- 시각 주의와 달리 거리에 따른 반응 시간 차이 없음

**무관 소음 효과(Irrelevant Sound Effect)** (p.81):
- 배경 소음이 인지 수행에 방해
- **주요 피해**: 순서 유지(serial order) 작업 → 전화번호 기억, 숫자 순서 등
- 최대 **60% 수행 저하** (Banbury & Berry, 1998; Szalma & Hancock, 2011 메타분석)
- 핵심 요인: 소음의 **수준(level)** 이 아닌 **음향 변동성(acoustic variability)**

**무관 소음 효과 적용 분야** (연구 결과):
- 사무실, 교실, 강의실, 비행 갑판 모두에서 확인
- 개방형 사무실: 업무 집중력 저하, 수행 2배 손실 (Kaarlela-Tuomaala et al., 2009)
- 항공기 소음 장기 노출 → 아동 읽기 이해력 손상 (Stansfeld, Berglund et al., 2005)
- 습관화는 불완전 → 짧은 정숙 후 역습관화(dishabituation) 발생 (Banbury & Berry, 1997)

**해결 방안**:
| 방법 | 효과 | 비고 |
|------|------|------|
| 연속 백색소음 | 변동성 마스킹 → 방해 감소 (Venetjoki et al., 2006) | 가장 효과적 |
| 기악 음악 | 백색소음보다 효과 낮음 (Andre & Wickens, 1995) | 사용자는 선호하지만 성능 저하 있음 |
| 음향 흡수재/칸막이 | 소리 가역성 낮춤 | 의사소통 방해 부작용 |

---

## 6. 핵심 용어 색인

| 용어 | 페이지 | 한국어 설명 |
|------|--------|------------|
| Area of Interest (AOI) | 50 | 관심 영역 — 시선 분석 단위 |
| Attentional capture | 53 | 주의 포획 |
| Attentional narrowing/tunneling | 63 | 주의 협소화/터널링 (고부하 상황) |
| Auditory object | 78 | 청각 객체 |
| Auditory streaming | 79 | 청각 스트리밍 (Bregman, 1990) |
| Augmented reality | 69 | 증강현실 |
| Automaticity | 59 | 자동화 (Shiffrin & Schneider, 1977) |
| Automation complacency | 63 | 자동화 안주 |
| Central cue | 62 | 중심 단서 |
| Change blindness | 52 | 변화 맹시 |
| Clutter | 61 | 클러터 (local density / heterogeneous / numerosity) |
| Cocktail party effect | 79 | 칵테일 파티 효과 |
| Conformal displays | 69 | 순응형 디스플레이 |
| Conformal symbology | 69 | 순응형 심볼 체계 |
| Conjunction search | 58 | 결합 탐색 |
| Consistent mapping | 59 | 일관 매핑 |
| Dichotic listening | 80 | 양이 청취 |
| Display representation | 71 | 디스플레이 표현 |
| Divided attention | 49 | 분할 주의 |
| Dual task processing | 72 | 이중 과제 처리 (PCP 적용 제외) |
| Effort | 51 | 노력 (SEEV) |
| Emergent features | 64 | 창발적 특징 |
| Exhaustive search | 58 | 전수 탐색 |
| Focused attention | 49 | 집중 주의 |
| Forward field of view (FFOV) | 65 | 전방 시야 |
| Frequency of sequential use | 53 | 연속 사용 빈도 |
| Global density clutter | 61 | 전체 밀도 클러터 |
| Global/holistic processing | 64 | 전체적 처리 |
| Guided search | 59 | 유도 탐색 |
| Head-up display (HUD) | 65 | 헤드업 디스플레이 |
| Heterogeneous features | 74 | 이질적 특징 |
| Homogeneous features | 74 | 동질적 특징 |
| Highlighting | 63 | 강조 표시 |
| Imperative stimulus | 62 | 명령적 자극 |
| Inattentional blindness | 55 | 무주의 맹시 (HUD 맥락엔 부적합) |
| Information integration | 72 | 정보 통합 (PCP의 핵심 과제) |
| Irrelevant sound effect | 81 | 무관 소음 효과 |
| Local density clutter | 61 | 지역 밀도 클러터 |
| Mental model | 52 | 정신 모델 |
| Monaural | 80 | 단이 (단일 귀) |
| Numerosity clutter | 61 | 수량 클러터 |
| Object display | 69 | 객체 디스플레이 |
| Object file | 68 | 객체 파일 (Kahneman, Treisman & Gibbs, 1992) |
| Object-based attention | 65 | 객체 기반 주의 |
| Omnidirectional | 77 | 전방향성 (청각) |
| Parallel search | 58 | 병렬 탐색 |
| Perceptual analyzers | 74 | 지각 분석기 |
| Perceptual competition | 67 | 지각 경쟁 |
| Periods of neglect | 52 | 방치 기간 |
| Peripheral cue | 62 | 주변 단서 |
| Polyphony | 80 | 다성음악 |
| Pre-attentive | 58 | 전주의적 |
| Proximity compatibility principle | 53 | 근접 호환성 원리 (PCP) |
| Proximity/readout clutter | 61 | 근접/판독 클러터 (Broadbent, 1982) |
| Redundancy | 64 | 중복성 |
| Redundancy gain | 67 | 중복 이득 |
| Response conflict | 67 | 반응 충돌 |
| Salience | 51 | 현저성 (SEEV) |
| SEEV model | 50 | SEEV 모델 |
| Selective attention | 49 | 선택적 주의 |
| Serial self-terminating search (SSTS) | 57 | 직렬 자기종료 탐색 |
| Space-based attention | 65 | 공간 기반 주의 |
| Stroop effect | 68 | 스트룹 효과 |
| Sustained attention | 49 | 지속적 주의 |
| Target popout | 58 | 목표 팝아웃 |
| Task compatibility | 71 | 과제 호환성 |
| Task proximity | 72 | 과제 근접성 |
| Task representation | 71 | 과제 표현 |
| Useful field of view (UFOV) | 56 | 유용 시야 |
| Varied mapping | 59 | 변동 매핑 |
| Vernier acuity | 74 | 버니어 시력 (McKee & Nakayama, 1983) |
| Weapons effect | 64 | 무기 효과 |

---

## 핵심 인용 레퍼런스

| 연구 | 내용 |
|------|------|
| Banbury, Selcon & McCrerie (1997) | 비호환 배열 → 점검 오류 4배 증가 |
| Barnett & Wickens (1988) | 객체 디스플레이 효과 |
| Bennett & Flach (1992) | 창발적 특징 → 통합 과제 |
| Bregman (1990) | 청각 스트리밍 |
| Broadbent (1982) | ~1° 내 flanker clutter → 판독 저하 |
| Cole (1986) | 의료용 O2 교환 직사각형 디스플레이 |
| Drews & Westenskow (2006) | 마취 심혈관 객체 디스플레이 |
| Duncan (1984) | 단일 객체 두 속성 → 병렬 처리 |
| Frantz (1994) | 위험 정보 공동 배치 → 경고 준수율 ↑ |
| Jolicoeur & Ingleton (1991) | 연결선 따라 주의 자동 이동 |
| Jones et al. (1999) | 무관 소음의 순서 유지 방해 |
| Kahneman, Treisman & Gibbs (1992) | Object File Theory |
| McKee & Nakayama (1983) | Vernier acuity |
| Moray (1959) | 자기 이름 효과 |
| Remington et al. (2001) | ATC: 같은 고도 = 같은 색 |
| Sanderson, Flach et al. (1989) | 공통 기준선 정렬 → 창발적 특징 |
| Shiffrin & Schneider (1977) | 일관 매핑 → 자동화 |
| Szalma & Hancock (2011) | 무관 소음 효과 메타분석 (최대 60% 저하) |
| Treisman (1986) | 이질적 특징 → 별도 지각 분석기 |
| Venetjoki et al. (2006) | 백색소음 → 변동성 마스킹 → 방해 감소 |
| Wickens & Carswell (1995, 2012) | PCP 원리 |
| Wickens & Long (1995) | Conformal HUD 연구 |
| Woods, Wise & Hanes (1981) | 원전 폴리곤 안전변수 디스플레이 |
| Yeh & Wickens (2001a) | 색상 근접성 → 병렬 처리 |
