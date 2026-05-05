export interface ContentBlock {
  type:
    | 'paragraph'
    | 'heading'
    | 'subheading'
    | 'code'
    | 'list'
    | 'note'
    | 'example'
    | 'image'
    | 'video'
    | 'table'
    | 'quote'
    | 'divider'
    | 'grid'
    | 'section'
    | 'codeBlock'
    | 'preformatted';

  // Common properties
  text?: string;
  description?: string;

  // Code-related
  code?: string;
  language?: string;

  // List-related
  items?: string[];

  // Image/Video
  url?: string;
  alt?: string;

  // Table-related
  headers?: string[];
  rows?: string[][];

  // Quote-related
  author?: string;

  // ========== NEW: codeBlock ==========
  // Pre-formatted code with syntax highlighting
  codeText?: string;
  codeLanguage?: string;
  highlightLines?: number[]; // Line numbers to highlight

  // ========== NEW: preformatted ==========
  // Raw text that preserves spacing (ASCII art, diagrams)
  rawText?: string;
  fontFamily?: 'monospace' | 'serif' | 'sans-serif';
  backgroundColor?: string;
  fontSize?: 'small' | 'medium' | 'large';

  // ========== NEW: grid ==========
  // Multi-column card layout
  columns?: number; // 1, 2, 3, 4
  gridItems?: GridItem[];

  // ========== NEW: section ==========
  // Nested section with subsections
  sectionTitle?: string;
  subsections?: ContentBlock[];
  collapsible?: boolean;
  isExpanded?: boolean;
}

// ========== Grid Item Interface ==========
export interface GridItem {
  id?: string;
  title: string;
  icon?: string; // emoji or icon name
  description: string;
  detail?: string;
  color?: string; // hex color
  metadata?: Record<string, string>;
  link?: string;
  imageUrl?: string;
}

export interface Section {
  title: string;
  description?: string;
  subsections?: string[];
  content: ContentBlock[];
}

export interface DocumentContent {
  title: string;
  description: string;
  sections: Section[];
}

export type DocumentRecord = Record<string, DocumentContent>;