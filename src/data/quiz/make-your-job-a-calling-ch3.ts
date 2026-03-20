import { QuizSet } from "./types";

const ch3: QuizSet = {
  id: "make-your-job-ch3",
  title: "Chapter 3: Listening",
  book: "Make Your Job a Calling",
  chapter: "3 - Listening",
  pages: "p.56–74",
  questions: [
    // ── Vocabulary (15문항) ──────────────────────────
    {
      id: "v1",
      category: "vocabulary",
      question: "discernment",
      options: ["분별력, 식별력", "실망, 낙담", "장식, 꾸밈", "동의, 승인"],
      correctIndex: 0,
      meaning: "분별력, 식별력 — 옳고 그름이나 참과 거짓을 구별하는 능력",
      example:
        "An active process of discernment was part of the instruction.",
    },
    {
      id: "v2",
      category: "vocabulary",
      question: "uncanny",
      options: ["평범한, 보통의", "기이한, 놀라운", "불쾌한, 거슬리는", "온화한, 부드러운"],
      correctIndex: 1,
      meaning: "기이한, 놀라울 정도의 — 설명하기 어려울 만큼 뛰어난",
      example:
        "He possessed an uncanny ability to de-escalate a tense situation.",
    },
    {
      id: "v3",
      category: "vocabulary",
      question: "de-escalate",
      options: [
        "확대하다, 심화시키다",
        "올라가다, 상승하다",
        "(긴장·갈등을) 완화시키다",
        "탈출하다, 피하다",
      ],
      correctIndex: 2,
      meaning: "(긴장·갈등을) 완화시키다, 진정시키다",
      example:
        "He possessed an uncanny ability to de-escalate a tense situation by understanding.",
    },
    {
      id: "v4",
      category: "vocabulary",
      question: "transcendent",
      options: ["일시적인, 순간적인", "초월적인, 탁월한", "투명한, 명백한", "점진적인, 단계적인"],
      correctIndex: 1,
      meaning: "초월적인, 뛰어난 — 일상적 경험을 넘어서는",
      example:
        "This was a transcendent summons, if there ever was one.",
    },
    {
      id: "v5",
      category: "vocabulary",
      question: "normative",
      options: ["규범적인, 표준적인", "비정상적인", "형식적인, 절차적인", "부정적인, 반대의"],
      correctIndex: 0,
      meaning: "규범적인, 표준적인 — 일반적 기준이나 규범에 부합하는",
      example:
        "This kind of dramatic encounter is not normative.",
    },
    {
      id: "v6",
      category: "vocabulary",
      question: "godsend",
      options: ["신의 분노", "뜻밖의 행운, 하늘이 내린 선물", "종교적 의무", "신성한 장소"],
      correctIndex: 1,
      meaning: "뜻밖의 행운, 하늘이 내린 선물 — 꼭 필요한 때에 찾아온 좋은 것",
      example:
        "The absolute clarity and specificity in Roger's calling would be, well, a godsend.",
    },
    {
      id: "v7",
      category: "vocabulary",
      question: "prosocial",
      options: ["반사회적인", "전문적인", "친사회적인, 이타적인", "수동적인"],
      correctIndex: 2,
      meaning: "친사회적인 — 다른 사람이나 사회 전체에 도움이 되는",
      example:
        "The neoclassical perspective of calling, with its emphasis on duty and prosocial values.",
    },
    {
      id: "v8",
      category: "vocabulary",
      question: "acumen",
      options: ["축적, 누적", "통찰력, 예리한 판단력", "정확성, 정밀도", "습관, 관행"],
      correctIndex: 1,
      meaning: "통찰력, 예리한 판단력 — 특정 분야에서의 뛰어난 이해력",
      example: "Writing acumen, an affinity for numbers.",
    },
    {
      id: "v9",
      category: "vocabulary",
      question: "penchant",
      options: ["벌칙, 처벌", "강한 기호, 취향", "후회, 유감", "주저, 망설임"],
      correctIndex: 1,
      meaning: "강한 기호, 취향 — 특정 것에 대한 뚜렷한 선호",
      example: "A penchant for understanding engines.",
    },
    {
      id: "v10",
      category: "vocabulary",
      question: "constellation",
      options: [
        "(별자리에서 유래) 집합, 배치",
        "건설, 구축",
        "헌법, 규약",
        "소비, 소모",
      ],
      correctIndex: 0,
      meaning: "집합, 배치 — 관련된 것들의 모임 (원래 별자리)",
      example:
        "People find themselves navigating a complicated constellation of life roles.",
    },
    {
      id: "v11",
      category: "vocabulary",
      question: "affirmation",
      options: ["부정, 반박", "긍정, 확인, 지지", "제한, 규제", "혼란, 당혹"],
      correctIndex: 1,
      meaning: "긍정, 확인, 지지 — 누군가의 가치나 행동을 인정하고 격려하는 것",
      example:
        "The others offered encouragement, support, and affirmation.",
    },
    {
      id: "v12",
      category: "vocabulary",
      question: "misguided",
      options: ["잘못된, 오도된", "안내된, 인도된", "실종된, 행방불명의", "혼합된, 섞인"],
      correctIndex: 0,
      meaning: "잘못된, 오도된 — 그릇된 판단이나 정보에 기반한",
      example:
        "Passively waiting for a compelling calling experience is very likely a misguided strategy.",
    },
    {
      id: "v13",
      category: "vocabulary",
      question: "xeriscaping",
      options: [
        "실내 인테리어 기법",
        "수중 조경 기법",
        "건조지역 조경법 (물 절약형)",
        "도시 계획 방법론",
      ],
      correctIndex: 2,
      meaning: "건조지역 조경법 — 물 사용을 최소화하는 정원 가꾸기 기법",
      example:
        "She had recently attended a weekend workshop on xeriscaping, a form of landscaping popular in the arid western United States.",
    },
    {
      id: "v14",
      category: "vocabulary",
      question: "rebuke",
      options: ["칭찬하다, 격려하다", "꾸짖다, 책망하다", "후퇴하다, 물러나다", "반복하다, 되풀이하다"],
      correctIndex: 1,
      meaning: "꾸짖다, 책망하다 — 강하게 비난하거나 거부하다",
      example:
        "I felt a sense of evil, and I rebuked it.",
    },
    {
      id: "v15",
      category: "vocabulary",
      question: "tingling",
      options: ["타는 듯한 감각", "저림, 찌릿거림", "가려움, 간지러움", "무감각, 마비"],
      correctIndex: 1,
      meaning: "저림, 찌릿거림 — 피부에 느껴지는 가벼운 전기 자극 같은 감각",
      example:
        "He noticed an unmistakable physical sensation, a sort of tingling.",
    },

    // ── Phrasal Verbs & Idioms (10문항) ─────────────
    {
      id: "p1",
      category: "phrasal_verb",
      question: "fit like a glove",
      options: [
        "손에 쥐다, 장악하다",
        "(크기·조건 등이) 딱 맞다",
        "장갑처럼 부드럽다",
        "허세를 부리다",
      ],
      correctIndex: 1,
      meaning: "딱 맞다 — 상황이나 조건이 완벽하게 들어맞을 때 사용",
      example:
        "It was a dream job that fit like a glove, and Roger thrived in it.",
    },
    {
      id: "p2",
      category: "phrasal_verb",
      question: "move up the ranks",
      options: ["이동하다, 이사하다", "순위가 떨어지다", "승진하다, 직급이 올라가다", "행렬에 서다"],
      correctIndex: 2,
      meaning: "승진하다 — 조직 내에서 더 높은 직위로 올라가다",
      example: "He quickly moved up the ranks.",
    },
    {
      id: "p3",
      category: "phrasal_verb",
      question: "put off",
      options: ["내려놓다", "미루다, 연기하다", "꺼버리다", "떠나다, 출발하다"],
      correctIndex: 1,
      meaning: "미루다, 연기하다 — 해야 할 일을 나중으로 뒤로 밀다",
      example:
        "Whatever he had been putting off, he had to stop.",
    },
    {
      id: "p4",
      category: "phrasal_verb",
      question: "ring hollow",
      options: [
        "전화벨이 울리다",
        "공허하게 들리다, 진실성이 없어 보이다",
        "크게 울려 퍼지다",
        "조용히 사라지다",
      ],
      correctIndex: 1,
      meaning: "공허하게 들리다 — 말이나 성취가 진심이 아닌 것처럼 느껴질 때",
      example:
        "Success not only came at a cost, it eventually started to ring hollow.",
    },
    {
      id: "p5",
      category: "phrasal_verb",
      question: "a lot riding on it",
      options: [
        "위에 많이 올라타다",
        "많은 것이 걸려 있다, 중대한 결과가 달린",
        "많이 움직이다",
        "길게 이어지다",
      ],
      correctIndex: 1,
      meaning: "많은 것이 걸려 있다 — 결과에 따라 큰 영향이 있다",
      example:
        "Feeling like there is a lot riding on it is very normal.",
    },
    {
      id: "p6",
      category: "phrasal_verb",
      question: "squeeze out",
      options: [
        "짜내다, 밀어내다",
        "압축하다, 줄이다",
        "쪼개다, 나누다",
        "빠져나가다",
      ],
      correctIndex: 0,
      meaning: "밀어내다, 짜내다 — 공간이나 기회를 없애버리다",
      example:
        "Neither should they squeeze out deep reflection on how you might use your gifts.",
    },
    {
      id: "p7",
      category: "phrasal_verb",
      question: "charge out of the gates",
      options: [
        "문 앞에서 요금을 내다",
        "문밖을 박차고 나가다, 적극적으로 시작하다",
        "문을 지키다",
        "서두르다가 실패하다",
      ],
      correctIndex: 1,
      meaning: "적극적으로 시작하다 — 큰 에너지와 열정으로 뛰어들다 (경마에서 유래)",
      example:
        "They charged out of the gates as young adults in fields like law or business.",
    },
    {
      id: "p8",
      category: "phrasal_verb",
      question: "on the back burner",
      options: [
        "뜨거운 상태로, 긴급하게",
        "뒷전에, 후순위로",
        "불 위에서, 요리 중인",
        "숨겨진 상태로",
      ],
      correctIndex: 1,
      meaning: "뒷전에, 후순위로 — 당장은 아니고 나중에 다룰 일 (요리 비유)",
      example:
        "Other roles are peripheral, lurking on the back burner.",
    },
    {
      id: "p9",
      category: "phrasal_verb",
      question: "to no avail",
      options: ["이용 가능한", "소용없이, 헛되이", "모든 수단을 동원하여", "성공적으로"],
      correctIndex: 1,
      meaning: "소용없이, 헛되이 — 노력했지만 결과가 없을 때",
      example:
        "He pleaded with his boss for leave time, to no avail.",
    },
    {
      id: "p10",
      category: "phrasal_verb",
      question: "on a lark",
      options: [
        "새처럼 날아서",
        "장난삼아, 호기심으로",
        "아침 일찍",
        "즐거운 분위기에서",
      ],
      correctIndex: 1,
      meaning: "장난삼아, 호기심으로 — 깊은 생각 없이 재미로 해보는 것",
      example:
        "An independent study in literature he took on a lark because of a good relationship he had with a professor.",
    },

    // ── Sentence Interpretation (5문항) ─────────────
    {
      id: "s1",
      category: "sentence",
      question:
        '"The place where your deep gladness and the world\'s deep hunger meet."',
      options: [
        "당신이 기쁨을 느끼는 장소와 세상의 배고픔이 만나는 식당",
        "당신의 깊은 기쁨과 세상의 절실한 필요가 만나는 지점 = 소명",
        "당신이 즐겁게 식사하며 세상의 기아 문제를 논하는 곳",
        "깊은 행복감과 세상의 깊은 굶주림이 공존하는 모순적 상황",
      ],
      correctIndex: 1,
      meaning:
        "프레드릭 뷰크너(Frederick Buechner)의 소명(calling) 정의: 내가 진정으로 기뻐하는 일과 세상이 절실히 필요로 하는 것이 교차하는 바로 그 지점",
      example:
        'Frederick Buechner\'s description of calling as "the place where your deep gladness and the world\'s deep hunger meet" may ring true.',
    },
    {
      id: "s2",
      category: "sentence",
      question:
        '"Golden handcuffs had kept them chained to jobs they did not experience as a calling."',
      options: [
        "금으로 만든 수갑 때문에 범죄자들이 일을 못했다",
        "높은 보수와 안정성이 소명 없는 직업에 묶이게 만들었다",
        "황금 팔찌를 차고 일하는 것이 소명이었다",
        "손목 부상 때문에 직업을 바꿀 수 없었다",
      ],
      correctIndex: 1,
      meaning:
        "'Golden handcuffs(황금 수갑)' = 높은 연봉·복지 때문에 떠나기 어려운 상황. 소명으로 느끼지 못하는 직업에 경제적 이유로 묶여 있음을 비유",
      example:
        '"Golden handcuffs" had kept them chained to jobs they did not experience as a calling.',
    },
    {
      id: "s3",
      category: "sentence",
      question:
        '"Searching for a transcendent summons is negatively related to people\'s decision status."',
      options: [
        "초월적 부름을 찾는 것은 사람들의 결정 상태와 긍정적 관계가 있다",
        "초월적 부름을 찾는 행위 자체가 오히려 의사결정 능력을 약화시킨다",
        "초월적 소환은 부정적인 사람들에게만 찾아온다",
        "부름을 검색하면 결정이 빨라진다",
      ],
      correctIndex: 1,
      meaning:
        "초월적 부름을 수동적으로 기다리며 '찾는' 행위는 오히려 진로 결정 상태, 자신감, 삶의 의미감과 부정적 관련이 있다 → 능동적 탐색이 중요",
      example:
        "Searching for a transcendent summons is negatively related to people's decision status, to how confident they are in their ability to successfully navigate the career decision process.",
    },
    {
      id: "s4",
      category: "sentence",
      question:
        '"If you perceive a set of social needs that you are well equipped to address by virtue of your gifts and experiences, you bear some obligation to orient your work activity toward addressing those needs."',
      options: [
        "사회적 필요를 인식하면 의무적으로 봉사활동을 해야 한다",
        "자신의 재능으로 해결 가능한 사회적 필요를 발견하면, 그 방향으로 일을 맞춰야 할 의무가 있다",
        "경험이 많은 사람만이 사회 문제를 해결할 수 있다",
        "사회적 필요에 맞춰 선물을 준비해야 한다",
      ],
      correctIndex: 1,
      meaning:
        "당신의 재능(gifts)과 경험으로 해결할 수 있는 사회적 필요를 인식한다면, 그 필요를 향해 당신의 일(work)을 방향 짓는(orient) 의무가 있다 — 신고전적(neoclassical) 소명관의 핵심",
      example:
        "If you perceive a set of social needs that you are well equipped to address by virtue of your gifts and experiences, you bear some obligation to orient your work activity toward addressing those needs.",
    },
    {
      id: "s5",
      category: "sentence",
      question:
        '"This rather exaggerated example of the modern view of calling shows the call arising from within and driving the protagonist toward self-fulfillment."',
      options: [
        "이 과장된 예시는 현대적 소명관이 내면에서 우러나와 자기실현으로 향하는 것을 보여준다",
        "이 과장된 사례는 고전적 소명관이 외부에서 오는 것임을 보여준다",
        "현대적 부름의 관점에서 주인공은 타인의 도움을 받아 성장한다",
        "이 과대평가된 예시는 소명이 비현실적임을 보여준다",
      ],
      correctIndex: 0,
      meaning:
        "현대적(modern) 소명관 = 소명이 외부가 아닌 내면에서 발생하여 자기실현(self-fulfillment)을 향해 이끈다는 관점. 저자는 이를 '다소 과장된(rather exaggerated)' 것으로 본다",
      example:
        "This rather exaggerated example of the modern view of calling shows the call arising from within and driving the protagonist toward self-fulfillment.",
    },
  ],
};

export default ch3;
