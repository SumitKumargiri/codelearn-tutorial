"use client";
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Menu, X, BookOpen, Home, ChevronDown } from 'lucide-react';
import { useParams } from 'next/navigation';
import { coursesData } from '../model/course-data';
import { documentContents } from '../model/documentContents';
import Link from 'next/link';
import ComingSoonPage from '@/features/coming-soon/components/ComingSoonPage';

type Props = {
  courseId?: string;
  documentId?: string;
};

export function DocumentViewer({
  courseId: propCourseId,
  documentId: propDocumentId,
}: Props) {
  const params = useParams<{ courseId: string; documentId: string }>();
  const courseId = propCourseId || params?.courseId;
  const documentId = propDocumentId || params?.documentId;

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());

  const course = courseId ? coursesData[courseId] : null;
  const documentKey = `${courseId}-${documentId}`;
  const documentContent = documentContents[documentKey];
  const document = course?.documents.find(d => d.id === Number(documentId));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentSection]);

  if (!course || !document || !documentContent) {
    return <ComingSoonPage />;
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

  const toggleSection = (sectionId: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(sectionId)) {
      newExpanded.delete(sectionId);
    } else {
      newExpanded.add(sectionId);
    }
    setExpandedSections(newExpanded);
  };

  const currentSectionData = documentContent.sections[currentSection];

  return (
    <div style={{height:'650px'}} className="bg-gray-50">
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
       <aside className={`fixed top-0 left-0 h-full w-[260px] bg-white border-r border-gray-200 z-40
          transform transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:translate-x-0 lg:static lg:h-[600px]
        `} >
          <div className="p-6 pt-36 lg:pt-6">
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
        <main className="flex-1 overflow-y-auto lg:ml-[10px] h-[600px]">
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
                    {/* PARAGRAPH */}
                    {block.type === 'paragraph' && (
                      <p className="text-gray-700 leading-relaxed mb-4">{block.text}</p>
                    )}

                    {/* HEADING */}
                    {block.type === 'heading' && (
                      <h2 className="text-2xl font-semibold mb-4 mt-8 first:mt-0">{block.text}</h2>
                    )}

                    {/* SUBHEADING */}
                    {block.type === 'subheading' && (
                      <h3 className="text-xl font-semibold mb-3 mt-6">{block.text}</h3>
                    )}

                    {/* CODE */}
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

                    {/* CODEBLOCK - NEW */}
                    {block.type === 'codeBlock' && (
                      <div className="bg-gray-900 rounded-xl overflow-hidden mb-4 text-white">
                        <div className="bg-gray-800 px-4 py-2 text-white text-sm border-b border-gray-700 flex justify-between items-center">
                          <span>{block.codeLanguage || 'code'}</span>
                          <button
                            onClick={() => navigator.clipboard.writeText(block.codeText || '')}
                            className="text-xs bg-gray-700 hover:bg-gray-600 px-2 py-1 rounded"
                          >
                            Copy
                          </button>
                        </div>
                        <pre className="p-4 overflow-x-auto">
                          <code className="text-sm text-gray-100 font-mono">
                            {block.codeText}
                          </code>
                        </pre>
                      </div>
                    )}

                    {/* PREFORMATTED - NEW */}
                    {block.type === 'preformatted' && (
                      <div
                        className="rounded-xl overflow-hidden mb-4 p-4"
                        style={{
                          backgroundColor: block.backgroundColor || '#f5f5f5',
                          fontFamily: block.fontFamily || 'monospace',
                          fontSize: 
                            block.fontSize === 'small' ? '12px' :
                            block.fontSize === 'large' ? '16px' :
                            '14px',
                        }}
                      >
                        <pre className="whitespace-pre-wrap break-words text-gray-800">
                          {block.rawText}
                        </pre>
                      </div>
                    )}

                    {/* IMAGE */}
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

                    {/* VIDEO */}
                    {block.type === 'video' && block.url && (
                      <div className="my-6">
                        <video controls className="w-full rounded-xl">
                          <source src={block.url} />
                        </video>
                      </div>
                    )}

                    {/* TABLE */}
                    {block.type === 'table' && block.headers && block.rows && (
                      <div className="overflow-x-auto my-6">
                        <table className="w-full border">
                          <thead className="bg-gray-100">
                            <tr>
                              {block.headers.map((h, i) => (
                                <th key={i} className="p-2 border font-semibold text-left">{h}</th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {block.rows.map((row, i) => (
                              <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : ''}>
                                {row.map((cell, j) => (
                                  <td key={j} className="p-2 border text-gray-700">{cell}</td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}

                    {/* QUOTE */}
                    {block.type === 'quote' && block.text && (
                      <blockquote className="border-l-4 border-gray-400 pl-4 italic my-6 text-gray-700">
                        "{block.text}"
                        {block.author && (
                          <div className="text-sm text-gray-500 mt-2 not-italic">— {block.author}</div>
                        )}
                      </blockquote>
                    )}

                    {/* DIVIDER */}
                    {block.type === 'divider' && (
                      <hr className="my-8 border-gray-300" />
                    )}

                    {/* LIST */}
                    {block.type === 'list' && (
                      <ul className="list-disc list-inside space-y-2 mb-4">
                        {block.items?.map((item, i) => (
                          <li key={i} className="text-gray-700">{item}</li>
                        ))}
                      </ul>
                    )}

                    {/* NOTE */}
                    {block.type === 'note' && (
                      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg mb-4">
                        <div className="flex items-start gap-2">
                          <span className="text-blue-600 font-semibold">Note:</span>
                          <p className="text-blue-900">{block.text}</p>
                        </div>
                      </div>
                    )}

                    {/* EXAMPLE */}
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

                    {/* GRID - NEW */}
                    {block.type === 'grid' && block.gridItems && (
                      <div
                        className="my-6 gap-4"
                        style={{
                          display: 'grid',
                          gridTemplateColumns: `repeat(auto-fit, minmax(${block.columns === 1 ? '100%' : block.columns === 3 ? '280px' : block.columns === 4 ? '240px' : '300px'}, 1fr))`,
                        }}
                      >
                        {block.gridItems.map((item, idx) => (
                          <div
                            key={item.id || idx}
                            className="rounded-lg p-4 border-2 transition-all hover:shadow-lg"
                            style={{
                              borderColor: item.color || '#ddd',
                              backgroundColor: item.color ? `${item.color}15` : '#f9f9f9',
                            }}
                          >
                            {item.icon && (
                              <div className="text-3xl mb-2">{item.icon}</div>
                            )}
                            <h4 className="font-semibold text-lg mb-2 text-gray-900">
                              {item.title}
                            </h4>
                            <p className="text-gray-700 text-sm mb-2">
                              {item.description}
                            </p>
                            {item.detail && (
                              <p className="text-gray-600 text-xs mb-3 italic">
                                {item.detail}
                              </p>
                            )}
                            {item.metadata && (
                              <div className="text-xs space-y-1 mt-3 pt-3 border-t">
                                {Object.entries(item.metadata).map(([key, value]) => (
                                  <div key={key} className="text-gray-600">
                                    <strong className="text-gray-700">{key}:</strong> {value}
                                  </div>
                                ))}
                              </div>
                            )}
                            {item.link && (
                              <a
                                href={item.link}
                                className="inline-block mt-3 text-sm font-semibold"
                                style={{ color: item.color || '#3A10E5' }}
                              >
                                Learn more →
                              </a>
                            )}
                          </div>
                        ))}
                      </div>
                    )}

                    {/* SECTION - NEW (Collapsible) */}
                    {block.type === 'section' && (
                      <div className="my-6 border rounded-lg overflow-hidden">
                        <button
                          onClick={() => toggleSection(block.sectionTitle || `section-${index}`)}
                          className="w-full px-4 py-4 bg-gray-100 hover:bg-gray-200 flex items-center justify-between text-left transition-colors"
                        >
                          <h3 className="font-semibold text-lg text-gray-900">
                            {block.sectionTitle}
                          </h3>
                          <ChevronDown
                            className={`w-5 h-5 transition-transform ${
                              expandedSections.has(block.sectionTitle || `section-${index}`)
                                ? 'rotate-180'
                                : ''
                            }`}
                          />
                        </button>
                        {(block.isExpanded !== false ||
                          expandedSections.has(
                            block.sectionTitle || `section-${index}`
                          )) && (
                          <div className="p-4 bg-white">
                            {block.subsections?.map((subBlock, subIdx) => (
                              <div key={subIdx} className="mb-4">
                                {/* Recursively render subsections */}
                                {subBlock.type === 'paragraph' && (
                                  <p className="text-gray-700 mb-3">{subBlock.text}</p>
                                )}
                                {subBlock.type === 'list' && (
                                  <ul className="list-disc list-inside space-y-2 mb-3">
                                    {subBlock.items?.map((item, i) => (
                                      <li key={i} className="text-gray-700">
                                        {item}
                                      </li>
                                    ))}
                                  </ul>
                                )}
                                {subBlock.type === 'codeBlock' && (
                                  <div className="bg-gray-900 rounded-lg overflow-hidden text-white mb-3">
                                    <div className="bg-gray-800 px-4 py-2 text-sm">
                                      {subBlock.codeLanguage || 'code'}
                                    </div>
                                    <pre className="p-4 overflow-x-auto">
                                      <code className="text-sm text-gray-100 font-mono">
                                        {subBlock.codeText}
                                      </code>
                                    </pre>
                                  </div>
                                )}
                              </div>
                            ))}
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