"use client";
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Menu, X, BookOpen, Home } from 'lucide-react';
import { useParams } from 'next/navigation';
import { coursesData } from '../model/course-data';
import { documentContents } from '../model/documentContents';
import Link from 'next/link';

export function DocumentViewer() {
  const { courseId, documentId } = useParams<{ courseId: string; documentId: string }>();
//   const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);

  const course = courseId ? coursesData[courseId] : null;
  const documentKey = `${courseId}-${documentId}`;
  const documentContent = documentContents[documentKey];
  const document = course?.documents.find(d => d.id === Number(documentId));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentSection]);

//   useEffect(() => {
//   const handleResize = () => {
//     if (window.innerWidth >= 1024) {
//       setSidebarOpen(true); // desktop → open
//     } else {
//       setSidebarOpen(false); // mobile → closed
//     }
//   };

//   handleResize(); // initial check
//   window.addEventListener("resize", handleResize);

//   return () => window.removeEventListener("resize", handleResize);
// }, []);

  if (!course || !document || !documentContent) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <BookOpen className="w-16 h-16 mx-auto mb-4 text-gray-400" />
          <h1 className="text-3xl mb-4">Document not found</h1>
          <Link href="/" className="text-[#3A10E5] hover:underline">
            Go back to home
          </Link>
        </div>
      </div>
    );
  }

  const handlePrevious = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
    }
  };

  const handleNext = () => {
    if (currentSection < documentContent.sections.length - 1) {
      setCurrentSection(currentSection + 1);
    }
  };

  const currentSectionData = documentContent.sections[currentSection];

  return (
    <div style={{height:'650px'}} className="bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
              >
                {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
              <Link href="/" className="flex items-center gap-2 text-gray-600 hover:text-[#3A10E5]">
                <Home className="w-5 h-5" />
              </Link>
              <ChevronRight className="w-4 h-4 text-gray-400" />
              <Link href={`/course/${courseId}`} className="text-gray-600 hover:text-[#3A10E5]">
                {course.title}
              </Link>
              <ChevronRight className="w-4 h-4 text-gray-400" />
              <span className="text-gray-900 font-semibold truncate max-w-xs">{document.title}</span>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/*------ Sidebar ----------*/}
       <aside style={{ width: '260px',height:'600px' }}
          className={`${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
            bg-white border-r border-gray-200
            transition-transform duration-300 z-40
            lg:sticky overflow-y-auto           
          `} >
          <div className="p-6">
            <div className="mb-6">
              <div className={`w-12 h-12 ${course.color} rounded-xl flex items-center justify-center text-2xl mb-3`}>
                {course.icon}
              </div>
              <h2 className="text-xl mb-1">{documentContent.title}</h2>
              <p className="text-sm text-gray-600">{documentContent.description}</p>
            </div>

            <nav className="space-y-1">
              {documentContent.sections.map((section, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSection(index)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                    currentSection === index
                      ? 'bg-[#3A10E5] text-white'
                      : 'hover:bg-gray-100 text-gray-700'
                  }`}
                >
                  <div className="text-sm font-semibold mb-1">{section.title}</div>
                  {section.subsections && (
                    <div className="text-xs opacity-75">
                      {section.subsections.length} topics
                    </div>
                  )}
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {/*---------- Main Content -------*/}
        <main style={{height:'600px'}} className="flex-1 overflow-y-auto">
          <div className="max-w-6xl mx-auto px-6 py-8">
            {/* Section Header */}
            <div className="mb-8">
              <div className="text-sm text-gray-600 mb-2">
                Section {currentSection + 1} of {documentContent.sections.length}
              </div>
              <h1 className="text-4xl mb-4">{currentSectionData.title}</h1>
              {currentSectionData.description && (
                <p className="text-xl text-gray-600">{currentSectionData.description}</p>
              )}
            </div>

            {/*-------- Section Content ---------*/}
            <div className="prose prose-lg max-w-none">
              <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
                {currentSectionData.content.map((block, index) => (
                  <div key={index} className="mb-6 last:mb-0">
                    {block.type === 'paragraph' && (
                      <p className="text-gray-700 leading-relaxed mb-4">{block.text}</p>
                    )}

                    {block.type === 'heading' && (
                      <h2 className="text-2xl font-semibold mb-4 mt-8 first:mt-0">{block.text}</h2>
                    )}

                    {block.type === 'subheading' && (
                      <h3 className="text-xl font-semibold mb-3 mt-6">{block.text}</h3>
                    )}
      {/* ---------------------------- code show on ui ----------------------   */}
                    {block.type === 'code' && (
                      <div className="bg-gray-900 rounded-xl overflow-hidden mb-4 text-white">
                        <div className="bg-gray-800 px-4 py-2 text-white text-sm border-b border-gray-700">
                          {block.language || 'code'}
                        </div>
                        <pre className="p-4 overflow-x-auto">
                          <code className="text-sm text-gray-100 font-mono">{block.code}</code>
                        </pre>
                      </div>
                    )}
  {/* ------------ image show on ui ---------------------- */}
                    {block.type === 'image' && block.url && (
                      <div className="my-6">
                        <img
                          src={block.url}
                          alt={block.alt || 'image'}
                          className="w-full rounded-xl"
                        />
                        {block.alt && (
                          <p className="text-sm text-gray-500 text-center mt-2">{block.alt}</p>
                        )}
                      </div>
                    )}
    {/* -------------------- video show on ui ---------------------- */}
                    {block.type === 'video' && block.url && (
                      <div className="my-6">
                        <video controls className="w-full rounded-xl">
                          <source src={block.url} />
                        </video>
                      </div>
                    )}
    {/* --------------------- table show on ui ---------------------- */}
                    {block.type === 'table' && block.headers && block.rows && (
                      <div className="overflow-x-auto my-6">
                        <table className="w-full border">
                          <thead className="bg-gray-100">
                            <tr>
                              {block.headers.map((h, i) => (
                                <th key={i} className="p-2 border">{h}</th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {block.rows.map((row, i) => (
                              <tr key={i}>
                                {row.map((cell, j) => (
                                  <td key={j} className="p-2 border">{cell}</td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}
    {/* -------------------- quote show on ui ---------------------- */}
                    {block.type === 'quote' && block.text && (
                      <blockquote className="border-l-4 border-gray-400 pl-4 italic my-6">
                        "{block.text}"
                        {block.author && (
                          <div className="text-sm text-gray-500 mt-2">— {block.author}</div>
                        )}
                      </blockquote>
                    )}
      {/* ---------- divider show on ui ---------------------- */}
                    {block.type === 'divider' && (
                      <hr className="my-8 border-gray-300" />
                    )}
      {/* --------------------- list show on ui ----------------------  */}
                    {block.type === 'list' && (
                      <ul className="list-disc list-inside space-y-2 mb-4">
                        {block.items?.map((item, i) => (
                          <li key={i} className="text-gray-700">{item}</li>
                        ))}
                      </ul>
                    )}
      {/* ----------------- note and example show on ui ----------------------   */}
                    {block.type === 'note' && (
                      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg mb-4">
                        <div className="flex items-start gap-2">
                          <span className="text-blue-600 font-semibold">Note:</span>
                          <p className="text-blue-900">{block.text}</p>
                        </div>
                      </div>
                    )}

                    {block.type === 'example' && (
                      <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-4">
                        <div className="font-semibold text-green-800 mb-2">Example:</div>
                        <p className="text-green-900 mb-3">{block.description}</p>
                        {block.code && (
                          <div className="bg-gray-900 rounded-lg overflow-hidden text-white">
                            <pre className="p-4 overflow-x-auto">
                              <code className="text-sm text-gray-100 font-mono">{block.code}</code>
                            </pre>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/*------- Navigation Buttons -------------*/}
            <div className="flex items-center justify-between pt-8 border-t border-gray-200">
              <button
                onClick={handlePrevious}
                disabled={currentSection === 0}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-colors ${
                  currentSection === 0
                    ? 'opacity-50 cursor-not-allowed bg-gray-100 text-gray-400'
                    : 'bg-white border border-gray-300 hover:border-[#3A10E5] hover:text-[#3A10E5] text-gray-700'
                }`}
              >
                <ChevronLeft className="w-5 h-5" />
                Previous
              </button>

              <button
                onClick={handleNext}
                disabled={currentSection === documentContent.sections.length - 1}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-colors ${
                  currentSection === documentContent.sections.length - 1
                    ? 'opacity-50 cursor-not-allowed bg-gray-100 text-gray-400'
                    : 'bg-[#3A10E5] text-white hover:bg-[#3A10E5]/90'
                }`}
              >
                Next
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </main>
      </div>
      </div>
  );
}
