"use client";

import { useState, useMemo, useCallback } from "react";
import quizSets from "@/data/quiz";
import type { QuizQuestion } from "@/data/quiz";

type Category = "all" | "vocabulary" | "phrasal_verb" | "sentence";

const CATEGORY_LABELS: Record<Category, string> = {
  all: "전체",
  vocabulary: "단어",
  phrasal_verb: "구동사/숙어",
  sentence: "문장 해석",
};

const CATEGORY_COLORS: Record<string, string> = {
  vocabulary: "bg-blue-100 text-blue-700",
  phrasal_verb: "bg-purple-100 text-purple-700",
  sentence: "bg-amber-100 text-amber-700",
};

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function VocabQuizPage() {
  const [setIndex, setSetIndex] = useState(0);
  const [category, setCategory] = useState<Category>("all");
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [wrongList, setWrongList] = useState<QuizQuestion[]>([]);

  const quizSet = quizSets[setIndex];

  const questions = useMemo(() => {
    const filtered =
      category === "all"
        ? quizSet.questions
        : quizSet.questions.filter((q) => q.category === category);
    return shuffle(filtered);
  }, [quizSet, category]);

  const q = questions[current];

  const handleSelect = useCallback(
    (idx: number) => {
      if (showResult) return;
      setSelected(idx);
      setShowResult(true);
      if (idx === q.correctIndex) {
        setScore((s) => s + 1);
      } else {
        setWrongList((prev) => [...prev, q]);
      }
    },
    [showResult, q],
  );

  const handleNext = useCallback(() => {
    if (current + 1 >= questions.length) {
      setFinished(true);
    } else {
      setCurrent((c) => c + 1);
      setSelected(null);
      setShowResult(false);
    }
  }, [current, questions.length]);

  const handleRestart = useCallback(
    (cat?: Category) => {
      if (cat !== undefined) setCategory(cat);
      setCurrent(0);
      setSelected(null);
      setShowResult(false);
      setScore(0);
      setFinished(false);
      setWrongList([]);
    },
    [],
  );

  // ─── 퀴즈셋 선택 화면 ────────────────────────────
  if (quizSets.length > 1 && setIndex === -1) {
    return (
      <div className="min-h-screen bg-gray-950 text-gray-100 flex items-center justify-center p-4">
        <div className="max-w-lg w-full space-y-4">
          <h1 className="text-2xl font-bold text-center">Vocab Quiz</h1>
          {quizSets.map((s, i) => (
            <button
              key={s.id}
              onClick={() => setSetIndex(i)}
              className="w-full p-4 rounded-xl bg-gray-800 hover:bg-gray-700 text-left transition"
            >
              <p className="font-semibold">{s.book}</p>
              <p className="text-sm text-gray-400">
                {s.title} ({s.pages})
              </p>
            </button>
          ))}
        </div>
      </div>
    );
  }

  // ─── 결과 화면 ────────────────────────────────────
  if (finished) {
    const pct = Math.round((score / questions.length) * 100);
    return (
      <div className="min-h-screen bg-gray-950 text-gray-100 flex items-center justify-center p-4">
        <div className="max-w-lg w-full space-y-6">
          <div className="text-center space-y-3">
            <p className="text-5xl font-bold">
              {pct >= 80 ? "🎉" : pct >= 50 ? "💪" : "📖"}
            </p>
            <h2 className="text-2xl font-bold">결과</h2>
            <p className="text-4xl font-bold text-blue-400">
              {score}/{questions.length}
              <span className="text-lg text-gray-400 ml-2">({pct}%)</span>
            </p>
            <p className="text-gray-400 text-sm">
              {pct >= 80
                ? "훌륭해요! 이 챕터의 어휘를 잘 알고 있어요."
                : pct >= 50
                  ? "괜찮아요! 틀린 문제를 복습해보세요."
                  : "아직 익숙하지 않은 단어가 많아요. 천천히 복습해봐요!"}
            </p>
          </div>

          {/* 틀린 문제 복습 */}
          {wrongList.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wide">
                틀린 문제 복습
              </h3>
              <div className="space-y-2 max-h-[40vh] overflow-y-auto pr-1">
                {wrongList.map((w) => (
                  <div
                    key={w.id}
                    className="bg-gray-800 rounded-xl p-4 space-y-2"
                  >
                    <div className="flex items-start gap-2">
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full ${CATEGORY_COLORS[w.category]}`}
                      >
                        {CATEGORY_LABELS[w.category as Category]}
                      </span>
                      <p className="font-semibold text-sm flex-1">
                        {w.question}
                      </p>
                    </div>
                    <p className="text-sm text-green-400">
                      정답: {w.options[w.correctIndex]}
                    </p>
                    <p className="text-xs text-gray-400">{w.meaning}</p>
                    <p className="text-xs text-gray-500 italic">
                      &quot;{w.example}&quot;
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="flex flex-col gap-2">
            <button
              onClick={() => handleRestart()}
              className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 font-medium transition"
            >
              다시 풀기
            </button>
            {wrongList.length > 0 && (
              <button
                onClick={() => {
                  setCurrent(0);
                  setSelected(null);
                  setShowResult(false);
                  setScore(0);
                  setFinished(false);
                  // 틀린 문제만 다시 출제 — questions를 직접 바꿀 수 없으므로 카테고리 리셋 없이 재시작
                }}
                className="w-full py-3 rounded-xl bg-gray-800 hover:bg-gray-700 font-medium transition text-sm"
              >
                전체 다시 풀기
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  // ─── 퀴즈 풀기 화면 ──────────────────────────────
  if (!q) {
    return (
      <div className="min-h-screen bg-gray-950 text-gray-100 flex items-center justify-center p-4">
        <div className="text-center space-y-4">
          <p className="text-gray-400">이 카테고리에 문제가 없어요.</p>
          <button
            onClick={() => handleRestart("all")}
            className="px-6 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 transition"
          >
            전체 문제로 돌아가기
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 flex flex-col">
      {/* Header */}
      <header className="px-4 py-4 md:px-8 border-b border-gray-800">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-lg font-bold">Vocab Quiz</h1>
            <p className="text-xs text-gray-500">
              {quizSet.book} · {quizSet.title} ({quizSet.pages})
            </p>
          </div>
          <div className="text-right">
            <p className="text-sm font-mono text-gray-400">
              {current + 1}/{questions.length}
            </p>
            <p className="text-xs text-green-400">
              {score}점
            </p>
          </div>
        </div>
      </header>

      {/* Category filter */}
      <div className="px-4 py-3 md:px-8">
        <div className="max-w-2xl mx-auto flex gap-2 overflow-x-auto">
          {(Object.keys(CATEGORY_LABELS) as Category[]).map((cat) => {
            const count =
              cat === "all"
                ? quizSet.questions.length
                : quizSet.questions.filter((qq) => qq.category === cat).length;
            return (
              <button
                key={cat}
                onClick={() => handleRestart(cat)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition ${
                  category === cat
                    ? "bg-blue-600 text-white"
                    : "bg-gray-800 text-gray-400 hover:bg-gray-700"
                }`}
              >
                {CATEGORY_LABELS[cat]} ({count})
              </button>
            );
          })}
        </div>
      </div>

      {/* Progress bar */}
      <div className="px-4 md:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-500 transition-all duration-300"
              style={{
                width: `${((current + (showResult ? 1 : 0)) / questions.length) * 100}%`,
              }}
            />
          </div>
        </div>
      </div>

      {/* Question */}
      <main className="flex-1 flex items-center justify-center px-4 py-6">
        <div className="max-w-2xl w-full space-y-6">
          {/* Badge + question */}
          <div className="space-y-3">
            <span
              className={`inline-block text-xs px-2.5 py-1 rounded-full ${CATEGORY_COLORS[q.category]}`}
            >
              {CATEGORY_LABELS[q.category as Category]}
            </span>
            <h2
              className={`font-bold leading-snug ${
                q.category === "sentence"
                  ? "text-lg md:text-xl"
                  : "text-2xl md:text-3xl"
              }`}
            >
              {q.question}
            </h2>
          </div>

          {/* Options */}
          <div className="space-y-3">
            {q.options.map((opt, idx) => {
              let style = "bg-gray-800 hover:bg-gray-700 border-gray-700";
              if (showResult) {
                if (idx === q.correctIndex) {
                  style = "bg-green-900/50 border-green-500 text-green-300";
                } else if (idx === selected && idx !== q.correctIndex) {
                  style = "bg-red-900/50 border-red-500 text-red-300";
                } else {
                  style = "bg-gray-800/50 border-gray-700 text-gray-500";
                }
              }
              return (
                <button
                  key={idx}
                  onClick={() => handleSelect(idx)}
                  disabled={showResult}
                  className={`w-full text-left px-4 py-3.5 rounded-xl border transition text-sm md:text-base ${style}`}
                >
                  <span className="font-mono text-xs text-gray-500 mr-3">
                    {String.fromCharCode(65 + idx)}
                  </span>
                  {opt}
                </button>
              );
            })}
          </div>

          {/* Feedback */}
          {showResult && (
            <div className="bg-gray-800/60 rounded-xl p-4 space-y-2 border border-gray-700">
              <p className="text-sm font-semibold text-blue-400">
                {selected === q.correctIndex ? "✓ 정답!" : "✗ 오답"}
              </p>
              <p className="text-sm text-gray-300">{q.meaning}</p>
              <p className="text-xs text-gray-500 italic leading-relaxed">
                &quot;{q.example}&quot;
              </p>
            </div>
          )}

          {/* Next button */}
          {showResult && (
            <button
              onClick={handleNext}
              className="w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 font-medium transition text-sm"
            >
              {current + 1 >= questions.length ? "결과 보기" : "다음 문제 →"}
            </button>
          )}
        </div>
      </main>
    </div>
  );
}
