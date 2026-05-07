"use client";
import { BookOpen, Play, Trophy } from "lucide-react";
import type { LessonType } from "./course-detail-ui";
import { useState, type ReactNode } from "react";
import { Lesson } from "../../model/data/courses/course.types";

type Props = {
  selectedLesson: Lesson | null;
  code: string;
  onCodeChange: (next: string) => void;
  output: string;
  onRunCode: () => void;
  getLessonIcon: (type: LessonType) => ReactNode;
};

export function LessonContent({
  selectedLesson,
  code,
  onCodeChange,
  output,
  onRunCode,
  getLessonIcon,
}: Props) {
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");
  const [result, setResult] = useState<string>("");
  const correctAnswer = 'let name = "John";';

  const checkAnswer = () => {
    if (!selectedAnswer) {
      setResult("⚠️ Please select an option");
      return;
    }

    if (selectedAnswer === correctAnswer) {
      setResult("✅ Correct");
    } else {
      setResult(`❌ Incorrect (Correct: ${correctAnswer})`);
    }
  };

  if (!selectedLesson) {
    return (
      <div className="bg-white rounded-2xl shadow-sm p-12 text-center">
        <BookOpen className="w-16 h-16 mx-auto mb-4 text-gray-400" />
        <h3 className="text-2xl mb-2">Select a lesson to begin</h3>
        <p className="text-gray-600">Choose any lesson from the course content to start learning</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
      <div className="bg-gradient-to-r from-[#3A10E5] to-[#5B21B6] p-8 text-white">
        <div className="flex items-center gap-3 mb-3">
          {getLessonIcon(selectedLesson.type)}
          <span className="text-sm uppercase tracking-wide opacity-90">{selectedLesson.type}</span>
        </div>
        <h2 className="text-3xl mb-2">{selectedLesson.title}</h2>
        <p className="text-lg opacity-90">{selectedLesson.description}</p>
      </div>

      <div className="p-8">
        {selectedLesson.type === "video" && (
          <div className="aspect-video bg-gray-900 rounded-xl flex items-center justify-center mb-6">
            <div className="text-center text-white">
              <Play className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <p className="text-gray-400">Video player would be here</p>
            </div>
          </div>
        )}

        {selectedLesson.type === "exercise" && selectedLesson.content && (
          <div className="space-y-4 mb-6">
            <div>
              <h3 className="font-semibold mb-3">Instructions:</h3>
              {/* <p className="text-gray-600 mb-6">{selectedLesson.Instructions}</p> */}
              {selectedLesson.Instructions?.split("\n").map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>

            <div>
              <h3 className="font-semibold mb-3">Code Editor:</h3>
              <div className="border border-gray-300 rounded-xl overflow-hidden">
                <div className="bg-gray-800 px-4 py-2 text-white text-sm flex items-center justify-between">
                  <span>script.js</span>
                  <button onClick={onRunCode} className="text-green-400 hover:text-green-300">
                    Run Code
                  </button>
                </div>
                <textarea
                  value={code}
                  onChange={(e) => onCodeChange(e.target.value)}
                  className="w-full p-4 font-mono text-sm bg-gray-900 text-white min-h-[300px] focus:outline-none"
                  spellCheck={false}
                />
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-4">
              <h3 className="font-semibold mb-2">Console Output:</h3>
              <div className="font-mono text-sm text-gray-600">{output || "Ready to run your code..."}</div>
            </div>
          </div>
        )}

        {selectedLesson.type === "quiz" && (
          <div className="space-y-6">
            <div className="p-6 bg-blue-50 border border-blue-200 rounded-xl">
              <h3 className="font-semibold mb-4">Quiz Question 1:</h3>
              <p className="mb-4">
                What is the correct way to declare a variable in JavaScript?
              </p>

              <div className="space-y-2">
                {[
                  'let name = "John";',
                  'variable name = "John";',
                  'var := "John";',
                  'declare name = "John";',
                ].map((option, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedAnswer(option)}
                    className={`w-full text-left p-3 border rounded-lg transition-colors
                      ${
                        selectedAnswer === option
                          ? "border-[#3A10E5] bg-white"
                          : "border-gray-300 hover:border-[#3A10E5]"
                      }`}
                  >
                    {option}
                  </button>
                ))}
              </div>

              {/* Submit Button */}
              <button
                onClick={checkAnswer}
                className="mt-4 px-4 py-2 bg-[#3A10E5] text-white rounded-lg"
              >
                Submit Answer
              </button>

              {/* Result */}
              {result && <p className="mt-3 font-semibold">{result}</p>}
            </div>
          </div>
        )}

        {selectedLesson.type === "project" && (
          <div className="space-y-6">
            <div className="p-6 bg-yellow-50 border border-yellow-200 rounded-xl">
              <div className="flex items-start gap-3">
                <Trophy className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Final Project Challenge</h3>
                  <p className="text-gray-700">{selectedLesson.description}</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Project Requirements:</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#3A10E5]">â€¢</span>
                  <span>Implement all core features discussed in the module</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#3A10E5]">â€¢</span>
                  <span>Add proper error handling</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#3A10E5]">â€¢</span>
                  <span>Write clean, readable code with comments</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#3A10E5]">â€¢</span>
                  <span>Test your implementation thoroughly</span>
                </li>
              </ul>
            </div>
          </div>
        )}

        <div className="flex items-center justify-between pt-6 border-t border-gray-200 mt-8">
          <button className="px-6 py-3 border border-gray-300 rounded-lg hover:border-[#3A10E5] hover:text-[#3A10E5] transition-colors">
            Previous Lesson
          </button>
          <button className="px-6 py-3 bg-[#3A10E5] text-white rounded-lg hover:bg-[#3A10E5]/90 transition-colors">
            {selectedLesson.completed ? "Next Lesson" : "Mark Complete & Continue"}
          </button>
        </div>
      </div>
    </div>
  );
}

