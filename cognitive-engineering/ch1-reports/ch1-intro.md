---
source: Engineering Psychology and Human Performance (Wickens et al., 2022) Chapter 1
title: Introduction to Engineering Psychology and Human Performance
pages: 1-7
created: 2026-04-23
---

# Ch1. Introduction to Engineering Psychology and Human Performance

## 0. Argument Spine (논증의 뼈대)

> **이 챕터의 한 줄 주장**: 공학심리학은 "목 위(above the neck)"의 인지 수행을 *이론*으로 설명하는 응용심리학 분야이며, 그 설명의 공통 프레임이 바로 **인간 정보 처리 모델(Human Information Processing Model, HIPM)** 이다.

**왜 이 순서로 개념을 배치했나**

1. 먼저 "공학심리학"이라는 분야의 **정체성**을 타 분야(인간공학/인지공학/실험심리학)와 비교하여 좁힌다 (1.1) — 무엇을 다루는가.
2. 다루는 대상인 "수행(performance)"을 **3대 지표**(Speed·Accuracy·Attentional demand)로 조작적 정의한다 (1.2) — 어떻게 평가할 것인가.
3. 그 수행을 **어떻게 측정하는가** — 연구방법 연속체(lab → field)와 메타분석·계산모델을 제시 (2).
4. 수행이 *왜* 그렇게 나타나는지 설명할 **이론적 뼈대**로 HIPM을 제시 (3) — Figure 1.1이 책 전체 목차의 설계도다.
5. 책 읽는 법 안내 (4).

**Spine 아래에서 각 주요 개념의 역할**

- **Engineering Psychology (1.1)**: 분야의 *정의* — 이론 기반 + above the neck + 응용심리학의 하위
- **3대 지표 (1.2)**: Spine의 *측정축* — 좋은 설계 원칙은 이 세 지표를 동시 개선해야 한다 (그러나 현실에선 trade-off)
- **Intervening variables (1.2)**: 3대 지표로 직접 잡히지 않는 인지현상(멘탈 모델, 상황인식, 과신)도 결국 수행에 반영된다는 **이론적 다리**
- **Research methods continuum (2)**: Spine의 *증거수집 도구* — 각 방법의 trade-off 인지 자체가 연구자 역량
- **HIPM (3, Figure 1.1)**: Spine의 **구조 자체** — 책 전체(Ch2~Ch12)의 조직 프레임. 4단계 + 기억 + 주의(filter/fuel) + 피드백 = 전 챕터 매핑
- **Attention의 이중 역할 (3)**: filter(선택) + fuel(자원) — 이 두 역할이 Ch3(selective attention)와 Ch10(multi-tasking)로 분기

> 📌 이 챕터는 **책 전체의 조직 원리**이자 얇은 **논증형 챕터**다. 지식 파일이지만 Figure 1.1만은 정확히 외워야 한다 — 중간고사 Q1이 이 모델을 그대로 적용하는 문제다.

## 1. 챕터 개요

> **한 문장 핵심**: 공학심리학은 "목 위(인지)"의 수행을 이론으로 설명하며, Speed·Accuracy·Attentional demand를 3대 지표로 삼고 HIPM을 전(全)분야 공통 프레임으로 사용한다.

공학심리학(engineering psychology)은 제2차 세계대전 후(1945년경) 실험심리학자들이 "멀쩡한 항공기가 왜 추락하는가(Fitts & Jones, 1947)"를 조사하면서 탄생한 인간요인공학의 하위 분야다. 인간공학(ergonomics)이 "목 아래(신체/피로/자세)"를 다룬다면, 공학심리학은 **"목 위(지각·주의·기억·의사결정·반응선택)"**의 수행을 이론으로 설명한다. 이론적 설명의 공통 프레임이 Figure 1.1의 **인간 정보 처리 모델(HIPM)**이며, 이 모델이 책 Ch2~Ch12의 목차 자체가 된다.

## 2. 섹션별 핵심 요약

### 1. Definitions

#### 1.1 Engineering Psychology
공학심리학의 정체성은 **4가지 비교축**으로 정의된다.

| 비교 대상 | 공학심리학의 차별점 |
|---------|------------------|
| vs Ergonomics (인간공학) | "목 위" 인지 수행 (vs 목 아래 신체) |
| vs Cognitive Ergonomics / Cognitive Engineering | **이론 기반**이 더 강함 (vs 과업 기술·설계·디자인 원칙 중심) |
| vs Human Factors Engineering | 이론 중심 (vs 제품·워크스테이션 **디자인과 평가** 중심) |
| vs Experimental Psychology | **실용적 유의미성** 고려 (vs 통계적 유의미성·실험 통제 우선) |

**실험심리학과의 3대 차이 (매우 중요)**:
1. **실험 통제(experimental control)**: 실험심리학은 조작 변인 외 전부 통제 → 공학심리학은 너무 많이 통제하면 현장에서 "wash out" 되어 실용성이 없음
2. **통계적 vs 실용적 유의미성**: 10ms 차이가 실험심리학에선 excitement, 현장에선 의미 없음
3. **과제 설계**: 실험심리학은 이론적 이유로 과제 설계, 공학심리학은 **실세계 맥락·과제와의 관련성**을 반드시 고려

> 실무 함의: 경계는 **퍼지(fuzzy)**하다. 고속도로 안전은 업무가 아니어도 공학심리학 영역이고, "목 아래" 불편이 "목 위" 주의분산을 유발한다. 피드백 루프가 기초심리학 이론을 **정련**하게 만든다.

#### 1.2 Human Performance — Big Three
공학심리학의 평가축은 **수행의 질(quality)**이며, "Big Three"로 표준화된다.

| 지표 | 방향 | 의미 |
|-----|------|-----|
| **Speed** | 빠를수록 좋음 | 반응시간, 과제 완수 시간 |
| **Accuracy** | 높을수록 좋음 | 오류율의 역수 |
| **Attentional Demand** | **낮을수록 좋음** | 자원 요구량 → 낮으면 동시에 다른 과제 수행 가능 |

**완벽한 설계 원칙**: 이 세 가지를 *동시에* 개선. 그러나 실제로는 trade-off (예: 속도-정확성 trade-off).

**Intervening Variables**: 3대 지표로 직접 측정되진 않지만, 궁극적으로는 수행으로 표현되는 인지 현상들:
- 개념의 학습도·기억도
- 장비에 대한 멘탈 모델(mental model)의 질
- 과정에 대한 상황 인식(situation awareness)의 수준
- 의사결정에 대한 과신(overconfidence)의 정도

> 이 중개변인들이 **"human performance theory의 심장부"**라고 교재가 명시한다. Ch7(멘탈 모델·SA), Ch8(의사결정·과신) 등에서 재등장.

### 2. Research Methods — 방법론의 연속체

연구방법은 하나의 **연속선(continuum)** 위에 놓인다:

```
Laboratory Experiments → Human-in-the-Loop Simulations → Field Studies → Real World Observations
   (통제 ↑)                                                                    (생태학적 타당도 ↑)
   (비용 ↓)                                                                    (비용 ↑)
```

실세계 관찰의 구체 형태:
- **Surveys of users** (사용자 설문)
- **Observational studies** (관찰연구)
- **Case studies / Accident analyses** (주요 사고 사례 분석)
- **Incident databases** (의료·항공에서 수집하는 경미 사건 DB)

**"Best" technique은 없다** — 각 방법은 비용·현장 충실도에서 trade-off. 공학심리학자는 여러 방법의 결과를 **해석**할 수 있어야 한다.

**최근 중요도가 높아진 2가지**:
- **Meta-analyses (메타분석)**: 여러 연구의 양적 자료를 통합하여 "집합적 지혜(collective wisdom)" 추출 (Egger & Smith 1997; Glass 1976; Rosenthal & DeMatteo 2001; Wolfe 1986)
- **Computational Models (계산 모델)**: 소프트웨어로 인간 행동·인지를 시뮬레이션 (Gray 2007; Pew & Mavor 1998). 단순 과제(마우스 이동, 목록 검색)에서 실제 수행 근사 가능.

### 3. A Model of Human Information Processing (가장 중요)

> 공학심리학자는 수행이 **얼마나(how much)** 변하는가뿐 아니라 **왜(why)** 변하는가를 묻는다. 그 "왜"를 설명하는 공통 프레임이 HIPM.

**예시 시나리오 (카 라디오 조작 오류)** — 네 가지 다른 원인:
- 컨트롤을 다른 것에 부딪히지 않고 누를 수 없음 (→ Response Execution)
- 컨트롤이 너무 민감함 (→ Response Execution)
- 주파수 올리려면 어느 방향인지 혼란 (→ Response Selection / Cognition)
- 아이콘을 이해 못함 (→ Perception)

각 오류 유형별로 **다른 설계 해법**이 필요 → 정보처리 단계 구분이 실용적 가치.

#### HIPM (Figure 1.1) — 4단계 + 기억 + 주의 + 피드백

```
                    ┌─────────────────────────┐
                    │    Attention Resources  │ ← "fuel" (자원/에너지)
                    └────────┬────────────────┘
                             │ (점선: 각 단계에 자원 공급)
                             ↓
        ┌──────────┐    ┌────────────┐
        │Long-term │ ← →│  Working   │
        │ Memory   │    │Memory /    │
        └──────┬───┘    │ Cognition  │
               │        └──────┬─────┘
               ↓               ↓
  ┌─────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐
  │Env  │→│Sensory  │→│Perception│→ │Response │→ │Response │→ Output
  │     │  │Proc/STSS│  │          │  │Selection│  │Execution│
  └──┬──┘  └─────────┘  └─────────┘  └─────────┘  └────┬────┘
     ↑                                                  │
     └──────────── Feedback Loop ────────────────────←─┘
                        (System Environment)
                        
       Selection ← attention "filter" (점선, Sensory→Perception)
```

**각 단계의 역할**:

| 단계 | 기능 | 지속/용량 | 교차로 예시 |
|-----|-----|---------|-----------|
| **Sensory Processing + STSS** | 감각 수용(시각·청각·촉각), Short-Term Sensory Store — 약 1초 내 유지 | <1초 | 신호등, 주변 차량, 라디오, 대화 **모두** 감지 |
| **Perception** | 감각 신호에 *의미* 부여 (과거 경험·장기기억 기반) | — | "노란불 = 주의" 해석 |
| **Working Memory / Cognition** | 정보의 일시 보관 + **생각**(cognition). 감각↔반응 사이 "해석" 과정 | 수 초~수십 초 | 신호등 상태 유지하며 주변 경찰차 탐색; 강의 내용 리허설하여 장기기억화 |
| **Long-term Memory** | 사실·이미지·세상 작동 방식 저장 | 반영구 | "노란불 의미"의 출처 |
| **Response Selection** | 가능한 반응 중 하나 선택 | — | 액셀 vs 브레이크 |
| **Response Execution** | 근육 + 뇌의 근육 제어 | — | 실제 페달 밟기 |

**추가 요소 2가지**:

1. **Feedback Loop**: 실행된 반응 → 환경 변화 → 새로운 감각 입력. "고정된 시작점·끝점이 없다"는 중요한 속성.

2. **Attention의 이중 역할 (Wickens & McCarley, 2008)**:
   - **Filter (필터)**: 감각된 것 중 일부만 지각으로 통과 — Figure에서 Perception 화살표가 입력보다 출력이 얇은 이유. 운전자가 신호등에 집중하면 승객 대화는 "tune out".
   - **Fuel (자원/연료)**: 각 단계에 정신자원 공급 (점선 화살표). 안개 속 신호등은 맑은 밤보다 더 많은 지각 자원 요구. 자원 총량은 **유한** → 동시과제 실패 발생.

#### HIPM 사용 시 주의 (문자 그대로 읽지 말 것)
- 각 단계가 뇌의 특정 구조와 **대강** 대응되지만 **명확하진 않음**.
- **엄격한 순차가 아님** — 강의에서 리허설+필기가 병렬로 발생.
- **피드백 때문에 고정된 시작·끝 없음** — 과제는 LTM의 영감·의도에서 시작할 수도(감각 입력 없이).
- 그럼에도 **과제 분석·원리 기술·해법 제안·이론 개발**에 매우 유용.

#### HIPM이 책 목차 자체다 (매우 중요)

| 단계 | 다루는 챕터 |
|-----|----------|
| Perception (Signal Detection) | Ch2 |
| Attention Filter (Selection) | Ch3 |
| Perception/Cognition for Space | Ch4 |
| Manual Control | Ch5 |
| Language | Ch6 |
| WM + LTM + Training | Ch7 |
| Response Selection (deliberate: Decision Making) | Ch8 |
| Response Selection (rapid) | Ch9 |
| Multi-tasking (Resources 경쟁) | Ch10 |
| Workload, Stress, Individual Differences, Neuroergonomics | Ch11 |
| Human-Automation Interaction | Ch12 |
| Key Themes Summary | (final) |

### 4. Pedagogy of the Book

1. **방대한 인용**: 개별 연구 세부보다 "take home messages" 강조. 책을 커리어 레퍼런스로 사용 가능.
2. **교차 참조 풍부**: 인간 수행의 복잡성·상호연결성 반영. 예: **overconfidence**가 여러 장에서 반복 등장 (Ch7 메모리, Ch8 의사결정 등).
3. **굵은 글씨 vs 이탤릭**: 굵은 글씨 = 신규 핵심 용어 (각 장 끝에 리스트), 이탤릭 = 독자가 이미 알 법한 용어 강조.
4. **일반 원리 > 구체 디자인**: 설계 적용은 인간요인공학 책들로 hand-off (Salvendy 2012; Wickens, Lee, Liu & Gordon-Becker 2004; Peacock 2009; Proctor & van Zandt 2008).

## 3. 핵심 개념 정의

| 용어 | 정의 | 관련 섹션 |
|------|------|-----------|
| **engineering psychology** | 인간요인공학 내 하위 분야로, "목 위(인지)" 수행을 이론적으로 설명하는 응용심리학 | 1.1 |
| **ergonomics** | 작업(work)을 연구하는 학문. 고전적으로 "목 아래" (신체·피로·자세) 중심 | 1.1 |
| **cognitive ergonomics / cognitive engineering** | 인간공학의 인지적 하위 분과. "목 위" 작업 연구 (Vicente 1999; Jenkins, Stanton et al. 2009) | 1.1 |
| **applied psychology** | 실험실 밖(산업·학교·상담·정신건강·스포츠)에 심리 원리를 적용하는 심리학의 상위 범주 | 1.1 |
| **experimental control** | 조작 변인 외 모든 변인을 고정하려는 실험심리학의 방법론적 원칙 | 1.1 |
| **human performance** | 수행의 *질* — Speed, Accuracy, Attentional demand "Big Three"로 측정 | 1.2 |
| **meta-analyses** | 다수 연구의 양적 자료를 통합해 집합적 결과를 추출하는 기법 | 2 |
| **computational models** | 소프트웨어로 인간 행동·인지를 시뮬레이션하는 방법 | 2 |
| **human information processing (HIPM)** | 감각→지각→작업기억/인지→반응선택→반응실행의 단계 + 기억·주의·피드백을 포함하는 모델 (Figure 1.1) | 3 |
| **senses** | 시각·청각·촉각 등 감각 양상 | 3 |
| **short term sensory store (STSS)** | 감각 정보를 약 1초 이내 짧게 유지하는 저장소 | 3 |
| **perception** | 감각 신호에 *의미*를 부여하는 과정 (장기기억의 과거 경험으로 해석) | 3 |
| **working memory** | 정보를 일시 저장하며 *생각*(cognition)하는 시스템. 장기기억으로의 commit 통로 | 3 |
| **long term memory** | 사실·이미지·세상 작동 방식을 반영구 저장 | 3 |
| **cognition** | 감각된 자료의 *해석* 과정 (빠르게: 신호등, 느리게: 강의 아이디어). 지각↔WM 경계는 퍼지 | 3 |
| **response selection** | 가능한 반응들 중 하나를 선택하는 단계 | 3 |
| **attention** | 정보처리의 핵심 도구. **Filter**(선택) + **Fuel**(자원) 이중 역할 (Wickens & McCarley 2008) | 3 |
| **mental resources** | 각 처리 단계에 공급되는 정신 자원(연료). 총량은 **유한** → 동시과제 실패 요인 | 3 |
| **feedback** | 실행된 반응이 환경을 바꿔 새로운 감각 입력을 만드는 순환 | 3 |

## 4. 주요 Figure 해설

### Figure 1.1: A Model of Human Information Processing Stages (★★★ 중간고사 직접 출제)

- **내용**: 좌에서 우로 Sensory Processing/STSS → Perception → Working Memory·Cognition / Long-term Memory → Response Selection → Response Execution의 단계적 흐름. 상단에 Attention Resources가 점선으로 각 단계에 공급되고, 하단에 System Environment → 감각 입력으로 돌아가는 Feedback 루프가 그려짐. Perception 앞에 "Selection"이라는 attention filter가 표시됨.
- **의미**: 
  1. **단계적 분석의 프레임** — 오류나 병목(bottleneck)이 어느 단계에서 발생하는지 특정 가능
  2. **주의의 이중 역할** — 점선(fuel)과 Selection 화살표(filter)가 동시에 표현됨
  3. **피드백의 동적 특성** — 시작·끝이 고정되지 않음
  4. **책 목차의 설계도** — Ch2~Ch12가 이 모델의 각 요소에 대응
- **시험 포인트** (중간고사 Q1-1 직접 적용):
  - 차량 인포테인먼트 터치스크린 추돌 사고의 **병목 단계 특정**
  - 운전 중 디스플레이 시선 분산은 주로 **Perception 단계의 Attention Filter 실패** + **Response Execution 자원 경쟁** (Ch10 다중자원과 연결)
  - "터치 반응속도 향상"은 Response Execution 개선이지만, 실제 병목이 Perception·Attention이면 효과 없음 → 문제 시나리오의 "반응 속도 높였는데 사고율 감소 없음"의 이론적 근거

## 5. 주요 실험 / 연구 사례

| 연구자 (연도) | 연구 내용 | 결과 | 함의 |
|--------------|-----------|------|------|
| Fitts & Jones (1947) | WWII 후 조종사들이 멀쩡한 항공기를 왜 추락시키는가 조사 | 인간 오류는 인터페이스 설계의 산물 | **공학심리학 분야 탄생의 출발점** |
| Mackworth (1948) | 영국해협 상공 적기 감시 시의 경계(vigilance) 실패 | 장시간 감시 과제에서 탐지율 저하 | Vigilance decrement 연구의 효시 (Ch2 연결) |
| Melton (1947) | 학습이론을 군 인력 훈련에 적용 | — | 훈련 연구의 초기 틀 (Ch7 연결) |
| Kohn, Corrigan & Donaldson (1999) | 의료 분야 인간 오류 보고 | — | 공학심리학이 의료로 확장된 계기 |
| Wickens & McCarley (2008) | 주의의 이중 역할 이론화 | Attention = Filter + Fuel | HIPM에서 주의 표현의 근거 |

## 6. 퀴즈 후보

1. **Engineering psychology와 cognitive ergonomics의 가장 큰 차이는?**
   → Engineering psychology는 *이론* 기반이 강함 (뇌·행동·인지 이론). Cognitive ergonomics는 이론도 있지만 **과업 기술·분석·설계 원칙**까지 다룸.

2. **실험심리학과 공학심리학의 연구 방법론에서 가장 큰 차이 3가지는?**
   → ① 실험 통제 수준(공학은 너무 통제하면 wash out), ② 통계적 유의미성 vs **실용적 유의미성**, ③ 과제 설계 시 **실세계 관련성** 고려 여부.

3. **Human performance의 "Big Three"는 무엇이며, 각각의 방향은?**
   → Speed(빠를수록), Accuracy(높을수록), **Attentional Demand(낮을수록)** 좋음. 완벽한 원리는 3가지 동시 개선.

4. **Intervening variables의 예를 3개 들고, 이것이 human performance theory에서 왜 중요한가?**
   → 멘탈 모델, 상황 인식, 과신(overconfidence). 3대 지표로 직접 측정되진 않지만 궁극적으로 수행에 반영되므로 이론의 심장부에 위치.

5. **연구 방법 연속체의 양 끝은? 각각의 장단점은?**
   → Lab experiments(통제 ↑, 생태 타당도 ↓, 비용 ↓) ↔ Real world observations(통제 ↓, 생태 타당도 ↑, 비용 ↑). "Best" 방법은 없고 trade-off.

6. **HIPM의 4단계를 순서대로 쓰고 각 단계의 기능을 설명하시오.**
   → ① Sensory Processing/STSS(<1초 감각 유지), ② Perception(의미 부여, LTM 기반 해석), ③ Response Selection(반응 선택), ④ Response Execution(근육+뇌 제어). + Working Memory/LTM(기억·인지)과 Attention(filter/fuel), Feedback loop.

7. **Attention의 "이중 역할"이란? 각각 Figure 1.1에서 어떻게 표현되는가?**
   → **Filter**: 감각→지각 통과량 선별 (Figure의 "Selection" 화살표, 지각 출력이 입력보다 얇음). **Fuel**: 각 단계에 자원 공급 (Figure 상단 Attention Resources에서 점선). 자원은 **유한** → 동시과제 실패의 원인.

8. **"터치스크린 반응속도를 높였는데 사고율이 감소하지 않았다"를 HIPM으로 진단하시오.**
   → 반응속도 개선은 **Response Execution** 단계의 개선. 그러나 추돌 원인이 **시선 분산(attention filter 실패) + 지각(perception) 병목 + 자원 경쟁(fuel 부족)** 이라면 Execution 개선만으로는 병목이 해결되지 않음. 병목은 앞 단계(지각·주의)에 있음.

9. **카 라디오 조작 오류의 4가지 원인을 HIPM 단계별로 매핑하시오.**
   → ① 컨트롤 물리 부딪힘 → Response Execution, ② 컨트롤 과민감 → Response Execution, ③ 조작 방향 혼란 → Response Selection / Cognition, ④ 아이콘 이해 불가 → Perception.

10. **HIPM을 "문자 그대로 읽으면 안 되는" 이유 3가지는?**
    → ① 뇌 구조와의 대응이 명확하지 않음, ② 엄격한 순차가 아님(병렬 가능), ③ 피드백 때문에 고정된 시작·끝 없음(LTM → WM → Response로 감각입력 없이도 시작 가능).

11. **Meta-analysis와 computational model의 차이와 공통점은?**
    → 공통점: 둘 다 신규 데이터 수집 부담을 줄이는 방법. 차이: 메타분석은 **기존 실증 연구의 양적 통합**, 계산 모델은 **소프트웨어 기반 행동·인지 시뮬레이션**(단순 과제에서 강력).

12. **Overconfidence가 이 책 전체에서 "반복 등장하는 현상"으로 언급되는 이유는?**
    → 과신은 지각·기억·의사결정·자동화 등 여러 단계에서 서로 다른 모습으로 나타나며, 공학심리학이 다루는 수행 오류의 공통된 인지적 뿌리다 (Ch7, Ch8, Ch12 재등장).

## 7. 챕터 연결고리

- **이전 챕터와의 연결**: 없음 (첫 장). 대신 **WWII 시대 Fitts-Jones·Mackworth·Melton** 연구가 분야의 역사적 출발점으로 등장.

- **다음 챕터 예고**:
  - **Ch2 (Signal Detection & Absolute Judgment)**: HIPM의 "Sensory Processing + Perception" 단계를 신호탐지이론(SDT)로 수리화. Mackworth(1948)의 vigilance 연구가 직접 계승됨.
  - **Ch3 (Attention in Perception and Display Space)**: HIPM의 "Attention Filter" 역할을 심화. SEEV·PCP 등.
  - **Ch4~6**: Perception/Cognition 심화 (Space, Manual Control, Language).
  - **Ch7 (Memory & Training)**: HIPM의 WM + LTM 심화. Intervening variables(멘탈 모델, SA) 본격 전개.
  - **Ch8~9 (Decision Making, Action Selection)**: Response Selection 심화.
  - **Ch10 (Multi-tasking)**: Attention의 "Fuel" 역할 심화 — 자원 경쟁.
  - **Ch11 (Workload, Stress, Individual Differences)**: Attentional demand 측정의 심화 + 개인차.
  - **Ch12 (Human-Automation Interaction)**: 2026년 시험 문항 Q2(AI Cry wolf)의 이론적 근거.

- **반복 등장 원리 예고**:
  - **Overconfidence** (Ch7, Ch8에서 재등장)
  - **Intervening variables**(멘탈 모델, SA)는 직접 측정 안 되지만 수행의 뿌리
  - **Attention 자원의 유한성** (Ch10에서 MRT로 정식화)

## 8. 2026-1학기 중간고사 직접 연결

| 시험 문항 | Ch1 매핑 지점 |
|---------|------------|
| Q1-1 (차량 인포테인먼트 병목) | **HIPM 4단계** (Figure 1.1) — 터치스크린 시선분산은 Attention Filter 실패 + Perception 병목 + Response Execution 자원 경쟁 |
| Q1-2 (UI 실험 설계: 정확성·주의요구량) | **Big Three** 중 Accuracy + Attentional Demand 직접 측정 설계 |
| Q6-1 (개인 인지 변화 성찰) | HIPM의 4단계 + Attention 이중 역할 + WM 한계는 Ch1에서 **전체 프레임**으로 기억해야 서술 가능 |
