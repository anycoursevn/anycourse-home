import { useState, useMemo } from 'react';
import {
  BookOpen, ArrowRight, CheckCircle2, Laptop, Users,
  Download, Github, ExternalLink, Terminal, Database,
  BookMarked, Mic, Building2, CreditCard, Menu, X, ChevronDown,
  GraduationCap, Presentation, BrainCircuit, Layers, CheckSquare,
  HelpCircle, Copy, Check, Clock, Award, LayoutDashboard,
  FolderKanban, ShieldCheck, ArrowUpRight, Sparkles, Scale, Search,
  RotateCcw, CheckCircle, QrCode, Puzzle, Package, MessageCircle, Code2, FileUp,
  Milestone, Rocket, Activity, Zap
} from 'lucide-react';

const GITHUB_URL = 'https://github.com/anycoursevn/anycourse-desktop';
const APP_URL = 'https://app.anycourse.vn';

/* ═══════════════════════════════════════════════════════════════
   1. TOP ANNOUNCEMENT BAR
   ═══════════════════════════════════════════════════════════════ */
function TopAnnouncement() {
  return (
    <div className="bg-slate-900/95 border-b border-slate-800/80 text-xs py-2 px-4 text-center sticky top-0 z-50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-3 flex-wrap">
        <span className="px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 font-semibold text-[11px] flex items-center gap-1">
          <Sparkles className="w-3 h-3" /> Desktop Open Source · AGPL-3.0
        </span>
        <span className="text-slate-300 hidden sm:inline">
          Ứng dụng Desktop mã nguồn mở miễn phí cho mọi đối tượng. Nền tảng Cloud & AI đồng bộ đa thiết bị là dịch vụ thương mại.
        </span>
        <a
          href="#license"
          className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center gap-1 transition underline-offset-4 hover:underline"
        >
          Xem điều khoản giấy phép <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   2. NAVBAR COMPONENT
   ═══════════════════════════════════════════════════════════════ */
function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-[37px] z-40 bg-[#090d16]/90 backdrop-blur-md border-b border-slate-800/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-white shadow-lg shadow-blue-600/25 group-hover:scale-105 transition">
            <BookOpen className="w-5 h-5" />
          </div>
          <div className="flex items-center gap-2">
            <span className="font-bold text-white tracking-tight text-lg">AnyCourse</span>
            <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-full bg-slate-800 text-blue-400 border border-slate-700">
              Open Source
            </span>
          </div>
        </a>

        {/* Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
          <a href="#features" className="hover:text-white transition">Tính năng</a>
          <a href="#interactive-demo" className="hover:text-white transition">Demo tương tác</a>
          <a href="#solutions" className="hover:text-white transition">Giải pháp</a>
          <a href="#architecture" className="hover:text-white transition">Kiến trúc</a>
          <a href="#plugins" className="hover:text-white transition">Plugin SDK</a>
          <a href="#desktop" className="hover:text-white transition">Desktop App</a>
          <a href="#roadmap" className="hover:text-white transition text-blue-400 font-semibold flex items-center gap-1">
            <Milestone className="w-3.5 h-3.5" /> Lộ trình
          </a>
          <a href="#license" className="hover:text-white transition">Giấy phép & Bảng giá</a>
          <a href="#faq" className="hover:text-white transition">FAQ</a>
        </nav>

        {/* Right CTA */}
        <div className="flex items-center gap-3">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700/80 hover:border-slate-600 text-slate-200 text-xs font-semibold transition hover:bg-slate-800"
          >
            <Github className="w-3.5 h-3.5" />
            <span>Star trên GitHub</span>
            <span className="px-1.5 py-0.2 rounded bg-slate-800 text-[10px] text-amber-400 border border-amber-400/20 font-mono">★ AGPL</span>
          </a>
          <a
            href={APP_URL + '/login'}
            className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition shadow-md shadow-blue-600/20 flex items-center gap-1.5"
          >
            <span>Trải nghiệm Web App</span>
            <ExternalLink className="w-3 h-3 opacity-80" />
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition"
            aria-label="Toggle Menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-slate-800 bg-[#090d16] px-4 py-4 space-y-3">
          <a href="#features" onClick={() => setMobileOpen(false)} className="block text-sm text-slate-300 py-1.5 hover:text-blue-400">Tính năng</a>
          <a href="#interactive-demo" onClick={() => setMobileOpen(false)} className="block text-sm text-slate-300 py-1.5 hover:text-blue-400">Demo tương tác</a>
          <a href="#solutions" onClick={() => setMobileOpen(false)} className="block text-sm text-slate-300 py-1.5 hover:text-blue-400">Giải pháp theo đối tượng</a>
          <a href="#architecture" onClick={() => setMobileOpen(false)} className="block text-sm text-slate-300 py-1.5 hover:text-blue-400">Kiến trúc Offline-First</a>
          <a href="#plugins" onClick={() => setMobileOpen(false)} className="block text-sm text-slate-300 py-1.5 hover:text-blue-400">Plugin SDK & Dành cho Dev</a>
          <a href="#desktop" onClick={() => setMobileOpen(false)} className="block text-sm text-slate-300 py-1.5 hover:text-blue-400">Tải Desktop App Windows</a>
          <a href="#roadmap" onClick={() => setMobileOpen(false)} className="block text-sm text-blue-400 py-1.5 font-semibold">Lộ trình tính năng thực tế (Roadmap)</a>
          <a href="#license" onClick={() => setMobileOpen(false)} className="block text-sm text-slate-300 py-1.5 hover:text-blue-400">Giấy phép & Bảng giá</a>
          <a href="#faq" onClick={() => setMobileOpen(false)} className="block text-sm text-slate-300 py-1.5 hover:text-blue-400">Câu hỏi thường gặp (FAQ)</a>
          <div className="pt-2 border-t border-slate-800 flex items-center justify-between">
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="text-xs text-blue-400 flex items-center gap-1.5 py-1">
              <Github className="w-4 h-4" /> Kho mã nguồn GitHub (AGPL-3.0)
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

/* ═══════════════════════════════════════════════════════════════
   3. HERO SECTION WITH INTERACTIVE PRODUCT EXPLORER
   ═══════════════════════════════════════════════════════════════ */
function Hero() {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'dashboard' | 'ai' | 'exam' | 'whiteboard' | 'parent'>('dashboard');

  // Exam simulator mini state
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  // VietQR mini state
  const [qrPaid, setQrPaid] = useState(false);

  const quickCmd = `git clone ${GITHUB_URL} && cd anycourse-desktop/packages/core-oss && npm install && cd ../../apps/desktop && npm install && npm start`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(quickCmd);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative pt-16 pb-24 border-b border-slate-800/80 bg-grid-pattern spotlight overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        {/* Title Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700 text-xs font-semibold text-slate-300 shadow-md">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Hệ sinh thái đào tạo & khảo thí đa môn học · Offline-First SQLite</span>
        </div>

        {/* Primary Headline */}
        <h1 className="max-w-4xl mx-auto text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
          Nền tảng quản lý đào tạo & khảo thí <br className="hidden sm:block" />
          <span className="gradient-text-blue">mã nguồn mở cho mọi tổ chức</span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-400 leading-relaxed font-normal">
          AnyCourse cung cấp trọn gói công cụ giảng dạy 43+ môn học, ngân hàng câu hỏi, bảng trắng số, trợ lý AI bóc tách bài giảng, cổng phụ huynh và thu học phí tự động VietQR. Hoạt động độc lập không phụ thuộc internet với SQLite nội bộ.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <a
            href="#desktop"
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 group"
          >
            <Download className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            <span>Tải Desktop App (.exe)</span>
          </a>
          <a
            href={APP_URL + '/login'}
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-semibold text-sm transition flex items-center justify-center gap-2"
          >
            <span>Dùng thử trực tiếp trên Web</span>
            <ArrowRight className="w-4 h-4 text-slate-400" />
          </a>
        </div>

        {/* License Note Banner under Hero */}
        <div className="max-w-2xl mx-auto p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-400 flex items-center justify-center gap-2">
          <Scale className="w-4 h-4 text-blue-400 shrink-0" />
          <span><strong>Mô hình Dual-License:</strong> Desktop App mã nguồn mở AGPL-3.0 miễn phí vĩnh viễn cho mọi người. Nền tảng Cloud & AI đồng bộ đa thiết bị là dịch vụ thương mại.</span>
        </div>

        {/* Quick CLI Bar */}
        <div className="pt-1 max-w-xl mx-auto">
          <div className="terminal-window p-3 flex items-center justify-between gap-3 text-xs font-mono text-slate-300">
            <div className="flex items-center gap-2 truncate">
              <span className="text-slate-500 select-none">$</span>
              <span className="truncate text-slate-300">{quickCmd}</span>
            </div>
            <button
              onClick={copyToClipboard}
              className="p-1.5 rounded-md hover:bg-slate-800 text-slate-400 hover:text-white transition shrink-0 flex items-center gap-1 text-[11px]"
              title="Sao chép lệnh"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Đã sao chép!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* ─── Realistic Interactive Product Explorer Frame ─── */}
        <div className="pt-8 max-w-6xl mx-auto">
          <div className="rounded-2xl border border-slate-800 bg-[#090d16] shadow-2xl overflow-hidden text-left">
            
            {/* Window Header */}
            <div className="h-11 bg-slate-900/90 border-b border-slate-800 px-4 flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-2 text-xs text-slate-400 font-mono hidden sm:inline">AnyCourse Desktop (SQLite Local DB · AGPL-3.0)</span>
              </div>

              {/* Interactive Screen Tabs */}
              <div className="flex items-center gap-1 bg-slate-950/80 p-1 rounded-lg border border-slate-800 text-xs">
                <button
                  onClick={() => setActiveTab('dashboard')}
                  className={`px-3 py-1 rounded-md font-medium transition ${activeTab === 'dashboard' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'}`}
                >
                  Bảng Điều Khiển
                </button>
                <button
                  onClick={() => setActiveTab('ai')}
                  className={`px-3 py-1 rounded-md font-medium transition flex items-center gap-1 ${activeTab === 'ai' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'}`}
                >
                  <BrainCircuit className="w-3.5 h-3.5" /> AI Giáo Án
                </button>
                <button
                  onClick={() => setActiveTab('exam')}
                  className={`px-3 py-1 rounded-md font-medium transition ${activeTab === 'exam' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'}`}
                >
                  Khảo Thí
                </button>
                <button
                  onClick={() => setActiveTab('whiteboard')}
                  className={`px-3 py-1 rounded-md font-medium transition ${activeTab === 'whiteboard' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'}`}
                >
                  Bảng Trắng Live
                </button>
                <button
                  onClick={() => setActiveTab('parent')}
                  className={`px-3 py-1 rounded-md font-medium transition ${activeTab === 'parent' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'}`}
                >
                  VietQR Thu Phí
                </button>
              </div>

              <div className="text-xs text-emerald-400 font-mono hidden md:flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Offline 0ms Latency</span>
              </div>
            </div>

            {/* Simulated Real App Workspace */}
            <div className="grid grid-cols-12 min-h-[480px] divide-x divide-slate-800 bg-slate-950/70">
              
              {/* Sidebar */}
              <div className="col-span-3 p-4 space-y-4 hidden md:block bg-slate-900/40">
                <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-xs">
                    AC
                  </div>
                  <div className="truncate">
                    <div className="text-xs font-bold text-white truncate">Học Viện Toán & Ngoại Ngữ</div>
                    <div className="text-[10px] text-slate-400">GIẢNG VIÊN · 142 Học viên</div>
                  </div>
                </div>

                <div className="space-y-1 text-xs">
                  <button
                    onClick={() => setActiveTab('dashboard')}
                    className={`w-full text-left px-3 py-2 rounded-lg font-semibold flex items-center gap-2.5 transition ${activeTab === 'dashboard' ? 'bg-blue-600/15 text-blue-400 border border-blue-500/20' : 'text-slate-400 hover:text-slate-200'}`}
                  >
                    <LayoutDashboard className="w-4 h-4" /> Bảng điều khiển
                  </button>
                  <button
                    onClick={() => setActiveTab('ai')}
                    className={`w-full text-left px-3 py-2 rounded-lg font-semibold flex items-center gap-2.5 transition ${activeTab === 'ai' ? 'bg-blue-600/15 text-blue-400 border border-blue-500/20' : 'text-slate-400 hover:text-slate-200'}`}
                  >
                    <BrainCircuit className="w-4 h-4" /> AI Bóc tách bài học
                  </button>
                  <button
                    onClick={() => setActiveTab('exam')}
                    className={`w-full text-left px-3 py-2 rounded-lg font-semibold flex items-center gap-2.5 transition ${activeTab === 'exam' ? 'bg-blue-600/15 text-blue-400 border border-blue-500/20' : 'text-slate-400 hover:text-slate-200'}`}
                  >
                    <CheckSquare className="w-4 h-4" /> Ngân hàng đề thi (12)
                  </button>
                  <button
                    onClick={() => setActiveTab('whiteboard')}
                    className={`w-full text-left px-3 py-2 rounded-lg font-semibold flex items-center gap-2.5 transition ${activeTab === 'whiteboard' ? 'bg-blue-600/15 text-blue-400 border border-blue-500/20' : 'text-slate-400 hover:text-slate-200'}`}
                  >
                    <Presentation className="w-4 h-4" /> Bảng trắng Digital
                  </button>
                  <button
                    onClick={() => setActiveTab('parent')}
                    className={`w-full text-left px-3 py-2 rounded-lg font-semibold flex items-center gap-2.5 transition ${activeTab === 'parent' ? 'bg-blue-600/15 text-blue-400 border border-blue-500/20' : 'text-slate-400 hover:text-slate-200'}`}
                  >
                    <CreditCard className="w-4 h-4" /> Học phí & VietQR
                  </button>
                </div>

                <div className="pt-6 border-t border-slate-800/80 space-y-2">
                  <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Trạng thái hệ thống</div>
                  <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800 text-[11px] space-y-1">
                    <div className="flex justify-between text-slate-400">
                      <span>Cơ sở dữ liệu:</span>
                      <span className="text-white font-mono">SQLite Local</span>
                    </div>
                    <div className="flex justify-between text-slate-400">
                      <span>Thời gian truy vấn:</span>
                      <span className="text-emerald-400 font-mono">0.2 ms</span>
                    </div>
                    <div className="flex justify-between text-slate-400">
                      <span>Mô hình AI:</span>
                      <span className="text-blue-400 font-mono">BYOK Gemini 2.0</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Content Viewport */}
              <div className="col-span-12 md:col-span-9 p-6">
                
                {/* ── TAB 1: DASHBOARD VIEW ── */}
                {activeTab === 'dashboard' && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                        <div className="text-xs text-slate-400">Lớp học đang phụ trách</div>
                        <div className="text-2xl font-bold text-white mt-1">8 Lớp</div>
                        <div className="text-[11px] text-emerald-400 mt-1 flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3" /> 100% Điểm danh tự động
                        </div>
                      </div>
                      <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                        <div className="text-xs text-slate-400">Bài tập đã nộp cần chấm</div>
                        <div className="text-2xl font-bold text-white mt-1">34 Bài</div>
                        <div className="text-[11px] text-blue-400 mt-1 flex items-center gap-1">
                          <BrainCircuit className="w-3 h-3" /> AI đã chấm sơ bộ theo Rubric
                        </div>
                      </div>
                      <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                        <div className="text-xs text-slate-400">Học phí VietQR tháng này</div>
                        <div className="text-2xl font-bold text-emerald-400 mt-1">86.4M VNĐ</div>
                        <div className="text-[11px] text-slate-400 mt-1">Đối soát tự động NAPAS 24/7</div>
                      </div>
                    </div>

                    <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4 space-y-3">
                      <div className="flex items-center justify-between text-xs font-bold text-slate-300">
                        <span>Hoạt động & Lớp học gần nhất</span>
                        <span className="text-blue-400 cursor-pointer hover:underline">Xem tất cả</span>
                      </div>
                      <div className="divide-y divide-slate-800 text-xs">
                        <div className="py-2.5 flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <span className="p-2 rounded bg-blue-500/10 text-blue-400 font-bold text-[10px]">EXAM</span>
                            <div>
                              <div className="font-semibold text-white">Đề Khảo Thí Định Kỳ — Đợt 1 / 2026</div>
                              <div className="text-[11px] text-slate-400">40 Câu hỏi trắc nghiệm & tự luận · Hạn nộp: 20:00 Hôm nay</div>
                            </div>
                          </div>
                          <span className="px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-400 font-medium">
                            28/30 Đã nộp
                          </span>
                        </div>
                        <div className="py-2.5 flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <span className="p-2 rounded bg-purple-500/10 text-purple-400 font-bold text-[10px]">LIVE</span>
                            <div>
                              <div className="font-semibold text-white">Phòng Học Trực Tuyến & Bảng Trắng — Chuyên Đề Nâng Cao</div>
                              <div className="text-[11px] text-slate-400">Giảng viên: ThS. Lê Hoàng · 24 Học viên đang online</div>
                            </div>
                          </div>
                          <span className="px-2.5 py-1 rounded bg-blue-500/10 text-blue-400 font-medium">
                            Đang diễn ra
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* ── TAB 2: AI LESSON BUILDER ── */}
                {activeTab === 'ai' && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="text-xs font-bold text-white flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-blue-400" />
                        <span>AI Assistant — Bóc Tách Giáo Trình Tự Động (Bring-Your-Own-Key)</span>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
                        GPT-4o / Claude 3.5 / Gemini 2.0
                      </span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs space-y-2">
                      <div className="text-slate-400 font-mono text-[11px]">Tài liệu giáo trình đầu vào:</div>
                      <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-300 font-mono text-[11px]">
                        "Chương 3: Cấu trúc nguyên tử và liên kết hóa học. Hạt nhân gồm proton và nơtron, lớp vỏ electron sắp xếp theo obitan..."
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-blue-950/20 border border-blue-500/30 text-xs space-y-3">
                      <div className="flex items-center justify-between text-blue-400 font-bold">
                        <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Đã bóc tách thành 3 học phần hoàn chỉnh (0.8s)</span>
                        <span className="text-[11px] font-mono">1-Click Thêm vào lớp</span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[11px]">
                        <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                          <div className="font-bold text-white">12 Flashcards SRS</div>
                          <div className="text-slate-400">Định nghĩa & Khái niệm then chốt</div>
                        </div>
                        <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                          <div className="font-bold text-white">6 Câu Trắc Nghiệm</div>
                          <div className="text-slate-400">Kèm giải thích chi tiết từng đáp án</div>
                        </div>
                        <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                          <div className="font-bold text-white">1 Bài Tự Luận & Rubric</div>
                          <div className="text-slate-400">Tiêu chí chấm điểm tự động AI</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* ── TAB 3: EXAM SIMULATOR ── */}
                {activeTab === 'exam' && (
                  <div className="space-y-4 text-xs">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                      <div>
                        <div className="font-bold text-white text-sm">Đề Thi Trắc Nghiệm Toán Học & Khoa Học</div>
                        <div className="text-slate-400 text-[11px]">Hỗ trợ định dạng công thức Toán LaTeX/KaTeX</div>
                      </div>
                      <div className="flex items-center gap-2 text-amber-400 font-mono font-bold bg-amber-500/10 px-2.5 py-1 rounded-lg border border-amber-500/20">
                        <Clock className="w-3.5 h-3.5" /> 14:32
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-3">
                      <div className="font-semibold text-white">
                        Câu hỏi 1: Tìm đạo hàm bậc nhất của hàm số f(x) = x³ - 3x² + 2 tại điểm x = 2?
                      </div>

                      <div className="space-y-2">
                        {[
                          { id: 0, text: "A. f'(2) = 0", correct: true },
                          { id: 1, text: "B. f'(2) = 2", correct: false },
                          { id: 2, text: "C. f'(2) = -2", correct: false },
                          { id: 3, text: "D. f'(2) = 6", correct: false },
                        ].map((ans) => {
                          const isSelected = selectedAnswer === ans.id;
                          let btnClass = "border-slate-800 bg-slate-950/60 hover:bg-slate-900 text-slate-300";
                          if (isSelected) {
                            btnClass = "border-blue-500 bg-blue-500/10 text-white";
                          }
                          if (quizSubmitted) {
                            if (ans.correct) {
                              btnClass = "border-emerald-500 bg-emerald-500/10 text-emerald-300 font-bold";
                            } else if (isSelected && !ans.correct) {
                              btnClass = "border-rose-500 bg-rose-500/10 text-rose-300";
                            }
                          }

                          return (
                            <button
                              key={ans.id}
                              onClick={() => {
                                if (!quizSubmitted) setSelectedAnswer(ans.id);
                              }}
                              className={`w-full text-left p-3 rounded-lg border transition flex items-center justify-between ${btnClass}`}
                            >
                              <span>{ans.text}</span>
                              {quizSubmitted && ans.correct && <CheckCircle className="w-4 h-4 text-emerald-400" />}
                            </button>
                          );
                        })}
                      </div>

                      <div className="pt-2 flex items-center justify-between">
                        {!quizSubmitted ? (
                          <button
                            onClick={() => setQuizSubmitted(true)}
                            disabled={selectedAnswer === null}
                            className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold disabled:opacity-50 transition"
                          >
                            Nộp bài & Kiểm tra đáp án
                          </button>
                        ) : (
                          <div className="flex items-center justify-between w-full">
                            <div className="text-emerald-400 font-semibold flex items-center gap-1.5">
                              <CheckCircle2 className="w-4 h-4" /> Chính xác! f'(x) = 3x² - 6x → f'(2) = 12 - 12 = 0.
                            </div>
                            <button
                              onClick={() => {
                                setQuizSubmitted(false);
                                setSelectedAnswer(null);
                              }}
                              className="text-blue-400 hover:underline flex items-center gap-1"
                            >
                              <RotateCcw className="w-3.5 h-3.5" /> Thử lại
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* ── TAB 4: WHITEBOARD LIVE ── */}
                {activeTab === 'whiteboard' && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="text-xs font-bold text-white flex items-center gap-2">
                        <Presentation className="w-4 h-4 text-purple-400" />
                        <span>Bảng Trắng Số Digital & Phòng Học Thi Đua Trực Tuyến</span>
                      </div>
                      <span className="text-[11px] px-2 py-0.5 rounded bg-purple-500/10 text-purple-400 font-mono">
                        Canvas & WebRTC Live
                      </span>
                    </div>

                    <div className="relative rounded-xl border border-slate-800 bg-[#060910] p-4 min-h-[220px] flex flex-col justify-between overflow-hidden">
                      <div className="flex items-center gap-2 border-b border-slate-800 pb-2">
                        <span className="px-2 py-1 rounded bg-blue-600 text-white text-[11px] font-bold">Bút vẽ</span>
                        <span className="px-2 py-1 rounded bg-slate-800 text-slate-300 text-[11px]">Sơ đồ tư duy</span>
                        <span className="px-2 py-1 rounded bg-slate-800 text-slate-300 text-[11px]">Chèn ảnh</span>
                        <span className="px-2 py-1 rounded bg-slate-800 text-slate-300 text-[11px]">Laser chỉ điểm</span>
                        <span className="ml-auto text-emerald-400 text-[11px] font-mono">● 24 học viên đang theo dõi</span>
                      </div>

                      {/* Mock Canvas graphic */}
                      <div className="py-6 text-center space-y-2">
                        <div className="inline-block p-4 rounded-xl bg-blue-950/40 border border-blue-500/30 text-xs text-blue-200">
                          <div className="font-bold text-white">SƠ ĐỒ HỆ THỐNG KIẾN THỨC</div>
                          <div className="text-slate-400 text-[11px]">Thầy giáo đang giải thích dạng bài tập trên bảng trực quan</div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-[11px] text-slate-400 border-t border-slate-800/80 pt-2">
                        <span>Mini-game: Thi đua trắc nghiệm Kahoot-style</span>
                        <span className="text-emerald-400 font-semibold">Học sinh Top 1: Nguyễn Minh Anh (2,450 pts)</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* ── TAB 5: VIETQR PARENT PORTAL ── */}
                {activeTab === 'parent' && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="text-xs font-bold text-white flex items-center gap-2">
                        <CreditCard className="w-4 h-4 text-emerald-400" />
                        <span>Cổng Phụ Huynh & Thu Học Phí Tự Động VietQR NAPAS 24/7</span>
                      </div>
                      <span className="text-[11px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-mono">
                        Tự động gạch nợ tức thì
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs space-y-2.5">
                        <div className="font-bold text-white">Hóa đơn học phí tháng 09/2026</div>
                        <div className="text-slate-400">Học viên: <strong className="text-white">Trần Bảo Long (Lớp 12A1)</strong></div>
                        <div className="text-slate-400">Khoản thu: Học phí 12 buổi nâng cao</div>
                        <div className="text-lg font-bold text-emerald-400">1,800,000 VNĐ</div>
                        <div className="text-[11px] font-mono text-slate-400 bg-slate-950 p-2 rounded border border-slate-800">
                          Cú pháp: AC12A1 LONG 0926
                        </div>
                      </div>

                      <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex flex-col items-center justify-center text-center space-y-3">
                        <div className="w-28 h-28 bg-white p-2 rounded-xl flex items-center justify-center shadow-md relative">
                          <QrCode className="w-full h-full text-slate-900" />
                          {qrPaid && (
                            <div className="absolute inset-0 bg-emerald-600/90 backdrop-blur-xs rounded-xl flex flex-col items-center justify-center text-white">
                              <CheckCircle className="w-8 h-8" />
                              <span className="text-[10px] font-bold mt-1">ĐÃ GẠCH NỢ</span>
                            </div>
                          )}
                        </div>

                        {!qrPaid ? (
                          <button
                            onClick={() => setQrPaid(true)}
                            className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition"
                          >
                            Mô phỏng quét mã ngân hàng
                          </button>
                        ) : (
                          <div className="text-xs text-emerald-400 flex items-center gap-1 font-semibold">
                            <CheckCircle2 className="w-4 h-4" /> Xác nhận thanh toán thành công!
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}

              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   4. INTERACTIVE AI DEMO & SRS FLASHCARD PLAYGROUND
   ═══════════════════════════════════════════════════════════════ */
function InteractivePlaygroundSection() {
  const [topic, setTopic] = useState<'math' | 'ielts' | 'hsk' | 'physics'>('ielts');
  const [cardFlipped, setCardFlipped] = useState(false);
  const [cardIndex, setCardIndex] = useState(0);

  const presets = {
    math: {
      title: "Toán 12 — Khảo Sát & Vẽ Đồ Thị Hàm Số",
      input: "Chuyên đề khảo sát hàm phân thức hữu tỉ y = (ax+b)/(cx+d). Tập xác định, tiệm cận đứng x = -d/c, tiệm cận ngang y = a/c, bảng biến thiên và tâm đối xứng I(-d/c; a/c).",
      flashcards: [
        { front: "Tiệm cận đứng của hàm số y = (ax+b)/(cx+d)", back: "Đường thẳng x = -d/c (với c ≠ 0 và ad - bc ≠ 0)" },
        { front: "Tâm đối xứng của đồ thị hàm phân thức bậc 1 / bậc 1", back: "Giao điểm của 2 đường tiệm cận: I(-d/c; a/c)" },
        { front: "Đạo hàm của y = (ax+b)/(cx+d)", back: "y' = (ad - bc) / (cx + d)²" },
      ],
      quiz: "Đồ thị hàm số y = (2x + 1)/(x - 1) có tiệm cận đứng là x = 1 và tiệm cận ngang là y = 2.",
    },
    ielts: {
      title: "IELTS Writing Task 2 — Artificial Intelligence in Education",
      input: "Topic: Some people believe that AI will replace human teachers in the future, while others think traditional classroom education remains indispensable. Discuss both views and give your opinion.",
      flashcards: [
        { front: "Indispensable (adj)", back: "Tuyệt đối không thể thiếu, thiết yếu (= Absolutely necessary)" },
        { front: "Tailored pedagogical approach", back: "Phương pháp sư phạm được cá nhân hóa theo từng người học" },
        { front: "Foster critical thinking", back: "Bồi dưỡng và phát triển tư duy phản biện" },
      ],
      quiz: "Collocation chính xác: 'To _______ a significant role in education' → 'play / assume'.",
    },
    hsk: {
      title: "Tiếng Trung HSK 3 — Giao Tiếp Công Sở & Học Tập",
      input: "Khóa học hội thoại và từ vựng chuẩn HSK 3: 打算 (dự định), 经理 (giám đốc), 帮忙 (giúp đỡ), 解决 (giải quyết), 遇到 (gặp phải).",
      flashcards: [
        { front: "打算 (dǎsuàn)", back: "Dự định, tính toán (v / n)" },
        { front: "解决问题 (jiějué wèntí)", back: "Giải quyết vấn đề" },
        { front: "遇到困难 (yù dào kùnnán)", back: "Gặp phải khó khăn" },
      ],
      quiz: "Chọn từ đúng: '你有什​​么____?' → 打算 (dǎsuàn).",
    },
    physics: {
      title: "Vật Lý 12 — Dao Động Điều Hòa & Con Lắc Đơn",
      input: "Phương trình dao động x = A*cos(ωt + φ). Chu kỳ con lắc đơn T = 2π√(l/g). Vận tốc cực đại vmax = ωA, gia tốc cực đại amax = ω²A.",
      flashcards: [
        { front: "Công thức chu kỳ con lắc đơn", back: "T = 2π√(l/g) — Không phụ thuộc vào khối lượng con lắc" },
        { front: "Pha dao động của vận tốc so với li độ", back: "Vận tốc sớm pha π/2 so với li độ x" },
        { front: "Gia tốc dao động điều hòa", back: "a = -ω²x — Luôn hướng về vị trí cân bằng" },
      ],
      quiz: "Khi vật đi qua vị trí cân bằng: Vận tốc đạt cực đại, gia tốc bằng 0.",
    },
  };

  const currentPreset = presets[topic];

  const handleGenerate = (newTopic: 'math' | 'ielts' | 'hsk' | 'physics') => {
    setTopic(newTopic);
    setCardIndex(0);
    setCardFlipped(false);
  };

  const currentCards = currentPreset.flashcards;

  return (
    <section id="interactive-demo" className="py-20 border-b border-slate-800/80 bg-[#090d16] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-300">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" /> Trải Nghiệm Thực Tế
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Trợ Lý AI Soạn Giáo Trình & Flashcards SRS 1-3-7
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Bấm chọn chuyên đề mẫu bên dưới để xem hệ thống AI bóc tách bài học và tự động tạo thẻ ghi nhớ ôn tập ngắt quãng:
          </p>
        </div>

        {/* Topic Selector Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-4xl mx-auto">
          {[
            { id: 'ielts' as const, label: 'IELTS Writing Task 2' },
            { id: 'math' as const, label: 'Toán 12 Hàm Số' },
            { id: 'hsk' as const, label: 'Tiếng Trung HSK 3' },
            { id: 'physics' as const, label: 'Vật Lý 12 Dao Động' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => handleGenerate(item.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition flex items-center gap-2 ${
                topic === item.id
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              <Sparkles className="w-3 h-3" />
              <span>{item.label}</span>
            </button>
          ))}
        </div>

        {/* Interactive Workspace Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          
          {/* Left Column: AI Stream Generation */}
          <div className="lg:col-span-6 surface-card rounded-2xl p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <BrainCircuit className="w-5 h-5 text-blue-400" />
                <span className="font-bold text-white text-sm">Input Giáo Trình / Tài Liệu</span>
              </div>
              <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                1-Click Extract
              </span>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 font-mono leading-relaxed min-h-[110px]">
              {currentPreset.input}
            </div>

            <div className="space-y-2">
              <div className="text-xs font-bold text-slate-400">Kết quả bóc tách tự động:</div>
              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2 text-xs">
                <div className="flex items-center justify-between text-white font-semibold">
                  <span>{currentPreset.title}</span>
                  <span className="text-blue-400 font-mono text-[11px]">✓ Đã sinh 3 học phần</span>
                </div>
                <div className="text-slate-400 text-[11px]">
                  • <strong>Thẻ nhớ SRS:</strong> {currentCards.length} Thẻ ghi nhớ định nghĩa & từ vựng quan trọng<br />
                  • <strong>Khảo thí:</strong> {currentPreset.quiz}<br />
                  • <strong>Rubric:</strong> Tiêu chí đánh giá chấm điểm tự động
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Flashcard SRS Flip Demo */}
          <div className="lg:col-span-6 surface-card rounded-2xl p-6 space-y-4 flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <BookMarked className="w-5 h-5 text-purple-400" />
                <span className="font-bold text-white text-sm">Học Thẻ Ghi Nhớ SRS 1-3-7</span>
              </div>
              <span className="text-xs text-slate-400 font-mono">
                Thẻ {cardIndex + 1} / {currentCards.length}
              </span>
            </div>

            {/* Flip Card Area */}
            <div
              onClick={() => setCardFlipped(!cardFlipped)}
              className="cursor-pointer min-h-[180px] flex items-center justify-center p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-700/80 hover:border-blue-500/50 transition-all text-center group"
            >
              <div className="space-y-3">
                <div className="text-[10px] font-mono uppercase tracking-widest text-slate-500 group-hover:text-blue-400 transition">
                  {cardFlipped ? 'MẶT SAU (ĐÁP ÁN & GIẢI NGHĨA)' : 'MẶT TRƯỚC (BẤM ĐỂ LẬT THẺ)'}
                </div>
                <div className="text-lg sm:text-xl font-bold text-white">
                  {cardFlipped ? currentCards[cardIndex]?.back : currentCards[cardIndex]?.front}
                </div>
                <div className="text-xs text-slate-500">
                  {cardFlipped ? 'Nhấn để quay lại mặt trước' : 'Nhấp chuột vào đây để xem đáp án'}
                </div>
              </div>
            </div>

            {/* SRS Rating Controls */}
            <div className="space-y-2 pt-2">
              <div className="text-[11px] text-slate-400 text-center">Đánh giá mức độ ghi nhớ (Thuật toán SRS tự lên lịch ôn tập):</div>
              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => {
                    setCardFlipped(false);
                    setCardIndex((cardIndex + 1) % currentCards.length);
                  }}
                  className="py-2 px-3 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 border border-rose-500/20 text-xs font-semibold transition"
                >
                  Khó (Ôn lại 1 ngày)
                </button>
                <button
                  onClick={() => {
                    setCardFlipped(false);
                    setCardIndex((cardIndex + 1) % currentCards.length);
                  }}
                  className="py-2 px-3 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 border border-blue-500/20 text-xs font-semibold transition"
                >
                  Tốt (Ôn lại 3 ngày)
                </button>
                <button
                  onClick={() => {
                    setCardFlipped(false);
                    setCardIndex((cardIndex + 1) % currentCards.length);
                  }}
                  className="py-2 px-3 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/20 text-xs font-semibold transition"
                >
                  Dễ (Ôn lại 7 ngày)
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   5. SOLUTIONS BY PERSONA SECTION (DÀNH CHO AI?)
   ═══════════════════════════════════════════════════════════════ */
function SolutionsSection() {
  const personas = [
    {
      icon: GraduationCap,
      title: "Gia Sư & Giáo Viên Tự Do",
      desc: "Quản lý học sinh, giao bài tập về nhà, soạn bài 1-click với AI và tự động thu học phí VietQR. Tải bản Desktop hoàn toàn miễn phí trọn đời.",
      highlights: ["Lưu dữ liệu SQLite an toàn trên laptop", "Không tốn chi phí thuê hosting hàng tháng", "Hoạt động offline mượt mà không cần wifi"],
      badge: "Desktop Miễn Phí",
    },
    {
      icon: Mic,
      title: "Trung Tâm Ngoại Ngữ & Luyện Thi",
      desc: "Trọn bộ công cụ luyện thi IELTS, TOEIC, HSK, JLPT với AI Speaking chấm phát âm âm vị học, Shadowing, Dictation và đề thi tính giờ an toàn.",
      highlights: ["AI chấm phát âm ngữ điệu & lỗi sai", "Ngân hàng đề thi chuẩn hóa quốc tế", "Đồng bộ đa thiết bị Web & Desktop"],
      badge: "AI Speaking & Exam",
    },
    {
      icon: Building2,
      title: "Trường Học K-12 & Đại Học",
      desc: "Phân quyền 8 vai trò (RLS), tổ chức khảo thí tập trung, chống gian lận, báo cáo học lực định kỳ và cổng thông tin phụ huynh liên lạc.",
      highlights: ["Phân tách dữ liệu lớp học nghiêm ngặt", "Tự động gửi thông báo điểm qua Zalo / Email", "Hỗ trợ công thức Toán & Khoa học KaTeX"],
      badge: "RLS Multi-Tenant",
    },
    {
      icon: FolderKanban,
      title: "Doanh Nghiệp & Đào Tạo Nội Bộ",
      desc: "Chuẩn hóa quy trình onboarding nhân viên, đào tạo nghiệp vụ nội bộ và kiểm tra cấp chứng chỉ tự động với chi phí tối ưu nhất.",
      highlights: ["BYOK AI không rò rỉ dữ liệu doanh nghiệp", "Tùy chọn Private Cloud hoặc On-Premise", "Tích hợp SSO & báo cáo tiến độ chi tiết"],
      badge: "Enterprise Ready",
    },
  ];

  return (
    <section id="solutions" className="py-20 border-b border-slate-800/80 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-300">
            <Users className="w-3.5 h-3.5 text-blue-400" /> Giải Pháp Toàn Diện
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Thiết Kế May Đo Cho Mọi Nhu Cầu Đào Tạo
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Từ cá nhân dạy kèm 1-1 cho đến hệ sinh thái chuỗi trung tâm hàng nghìn học viên, AnyCourse luôn có cấu hình phù hợp:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {personas.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="surface-card rounded-2xl p-6 flex flex-col justify-between space-y-5 surface-card-hover border border-slate-800"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-900 border border-slate-700 text-slate-300">
                      {p.badge}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-white">{p.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{p.desc}</p>
                </div>

                <div className="pt-3 border-t border-slate-800/80 space-y-2">
                  {p.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="text-[11px] text-slate-300 flex items-start gap-1.5">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   6. 43+ STUDY TOOLS & EXAM ENGINE CATALOG (BENTO GRID)
   ═══════════════════════════════════════════════════════════════ */
function FeaturesSection() {
  return (
    <section id="features" className="py-20 border-b border-slate-800/80 bg-[#090d16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-300">
            <Layers className="w-3.5 h-3.5 text-blue-400" /> Hệ Thống 43+ Học Cụ & Khảo Thí
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Bộ Công Cụ Giảng Dạy & Đánh Giá Đa Năng
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Không giới hạn ở bất kỳ chuyên môn nào, AnyCourse hỗ trợ toàn diện từ Khoa học tự nhiên, Xã hội, Ngoại ngữ đến Kỹ năng nghề nghiệp.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: AI Lesson Extraction */}
          <div className="surface-card rounded-2xl p-6 space-y-4 md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-blue-600/10 text-blue-400 border border-blue-500/20">
                <BrainCircuit className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Soạn Bài Giảng 1-Click Bằng AI Từ Giáo Trình Bất Kỳ</h3>
                <p className="text-xs text-slate-400">Tự động phân tách tài liệu thành Flashcards, Bài tập và Trắc nghiệm trong 15 giây</p>
              </div>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Giáo viên chỉ cần dán đoạn văn bản hoặc đề tài bài giảng, hệ thống sẽ tự động bóc tách thành các học phần: Thẻ ghi nhớ SRS, Bộ câu hỏi kiểm tra độ hiểu bài, Bài tập ghép nối và Đề cương ôn tập chi tiết.
            </p>
            <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-400 font-mono">
              Input: [Giáo trình / Bài giảng] → Output: [Flashcards SRS] + [4 Câu hỏi trắc nghiệm] + [Rubric tự luận]
            </div>
          </div>

          {/* Card 2: Spaced Repetition SRS */}
          <div className="surface-card rounded-2xl p-6 space-y-4">
            <div className="p-2.5 rounded-xl bg-purple-600/10 text-purple-400 border border-purple-500/20 w-fit">
              <BookMarked className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">5 Chế Độ Ôn Luyện Khoa Học (SRS 1-3-7)</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Bao gồm Flashcards, Học tập (Learn), Kiểm tra (Test), Ghép nối (Match) và Trung tâm tự động gom câu hỏi làm sai để ôn tập ngắt quãng.
            </p>
            <div className="text-xs text-emerald-400 font-semibold flex items-center gap-1.5 pt-2">
              <CheckCircle2 className="w-4 h-4" /> Ghi nhớ kiến thức dài hạn
            </div>
          </div>

          {/* Card 3: Digital Whiteboard & Live Room */}
          <div className="surface-card rounded-2xl p-6 space-y-4">
            <div className="p-2.5 rounded-xl bg-pink-600/10 text-pink-400 border border-pink-500/20 w-fit">
              <Presentation className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">Bảng Trắng Số & Lớp Học Live</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Vẽ sơ đồ tư duy, chèn ảnh bài học, ghi chú trực quan kết hợp tổ chức mini-game tương tác đố vui thi đua thời gian thực phong cách Kahoot.
            </p>
          </div>

          {/* Card 4: Exam Builder with KaTeX */}
          <div className="surface-card rounded-2xl p-6 space-y-4 md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-emerald-600/10 text-emerald-400 border border-emerald-500/20">
                <CheckSquare className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Khảo Thí & Ngân Hàng Câu Hỏi Chuẩn Hóa</h3>
                <p className="text-xs text-slate-400">Chấm điểm an toàn phía Server, hẹn giờ làm bài và hỗ trợ công thức Toán KaTeX</p>
              </div>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Hỗ trợ đầy đủ các dạng câu hỏi: Trắc nghiệm đơn/nhiều lựa chọn, Tự luận, Điền khuyết, Nghe audio và Bài tập ghép cặp. Phân tích chi tiết tỷ lệ câu đúng/sai theo từng chuyên đề học tập.
            </p>
          </div>

          {/* Card 5: AI Speaking & Shadowing */}
          <div className="surface-card rounded-2xl p-6 space-y-4">
            <div className="p-2.5 rounded-xl bg-amber-600/10 text-amber-400 border border-amber-500/20 w-fit">
              <Mic className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">AI Speaking & Shadowing</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Thu âm giọng đọc, bóc tách âm vị học, phát hiện từ phát âm sai và luyện nhại theo người bản xứ với 3 cấp độ tốc độ.
            </p>
          </div>

          {/* Card 6: VietQR & Parent Portal */}
          <div className="surface-card rounded-2xl p-6 space-y-4 md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-blue-600/10 text-blue-400 border border-blue-500/20">
                <CreditCard className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Cổng Phụ Huynh & Thu Học Phí VietQR NAPAS 24/7</h3>
                <p className="text-xs text-slate-400">Sinh mã VietQR động định danh hóa đơn, phụ huynh quét mã ngân hàng đối soát tức thì</p>
              </div>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Phụ huynh nhận mã liên kết để theo dõi bảng điểm, chuyên cần và đóng học phí trực tiếp bằng ứng dụng ngân hàng bất kỳ qua mã VietQR động đối soát tức thì không cần xác nhận thủ công.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   7. CORE ARCHITECTURE & TECHNICAL SUPERIORITY
   ═══════════════════════════════════════════════════════════════ */
function ArchitectureSection() {
  return (
    <section id="architecture" className="py-20 border-b border-slate-800/80 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-300">
            <Database className="w-3.5 h-3.5 text-blue-400" /> Kiến Trúc Kỹ Thuật Vượt Trội
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Tối Ưu Cho Tốc Độ, Bảo Mật & Chi Phí Vận Hành
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Không sử dụng các cấu trúc máy chủ cồng kềnh, AnyCourse giải quyết bài toán đào tạo với kiến trúc gọn nhẹ, bảo mật cấp tổ chức và độ trễ gần như bằng không.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="surface-card rounded-2xl p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
              <Database className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">SQLite Cục Bộ & Offline-First</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Mọi tác vụ soạn bài, ghi điểm và lưu trữ câu hỏi chạy trực tiếp trên file database SQLite nội bộ. Hoạt động độc lập hoàn toàn khi mất mạng và tự động đồng bộ ngầm khi kết nối internet.
            </p>
            <div className="pt-2 text-xs font-mono text-slate-500">
              ✓ 0ms network latency · Zero DB maintenance
            </div>
          </div>

          <div className="surface-card rounded-2xl p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">Phân Quyền RLS 8 Vai Trò</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Kiến trúc đa tổ chức (Multi-Tenant) áp dụng Row-Level Security nghiêm ngặt. Phân tách rõ ràng giữa Chủ sở hữu, Quản lý, Giáo viên, Trợ giảng, Học viên, Phụ huynh và Khách mời.
            </p>
            <div className="pt-2 text-xs font-mono text-slate-500">
              ✓ Multi-tenant isolation · Tổ chức độc lập
            </div>
          </div>

          <div className="surface-card rounded-2xl p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
              <BrainCircuit className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">Trợ Lý AI Tự Chủ (BYOK)</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Sử dụng mô hình Bring-Your-Own-Key. Tự do gắn khóa API của OpenAI, Anthropic Claude, hoặc Google Gemini mà không phải trả thêm phí hoa hồng trung gian.
            </p>
            <div className="pt-2 text-xs font-mono text-slate-500">
              ✓ Direct API routing · Không vendor lock-in
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   7b. PLUGIN ECOSYSTEM — DEVELOPER DOCUMENTATION SECTION
   ═══════════════════════════════════════════════════════════════ */
const PLUGIN_SDK_SNIPPET = `// plugin = 1 file bundle.js + manifest.json — chạy offline hoàn toàn
const ctx = await AnyCourse.ready();   // { locale, theme, mode, user }

await AnyCourse.storage.set('k', v);   // KV 256KB/plugin  (quyền storage)
AnyCourse.notify('Xong!', 'success');  // toast của app    (notifications)

const r = await AnyCourse.fetch(url, { // proxy đã duyệt   (network)
  method: 'POST', body: '{"q":1}',
});

const text = await AnyCourse.ai.generate(prompt); // BYOK (ai)
AnyCourse.ui.size(344, 520);          // slot floating: mở panel`;

function PluginsSection() {
  const [copied, setCopied] = useState(false);
  const copySdk = () => {
    navigator.clipboard?.writeText(PLUGIN_SDK_SNIPPET).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    }).catch(() => {});
  };

  return (
    <section id="plugins" className="py-20 border-b border-slate-800/80 bg-[#090d16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">

        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-300">
            <Puzzle className="w-3.5 h-3.5 text-fuchsia-400" /> Plugin SDK · Dành cho nhà phát triển
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Hệ Sinh Thái Plugin — Mở Rộng Theo Cách Của Bạn
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Viết tiện ích cộng đồng bằng một file JavaScript duy nhất, cài từ Kho plugin hoặc chia sẻ
            trực tiếp qua gói <span className="font-mono text-slate-300">.acplugin.json</span>. Plugin chạy
            cách ly tuyệt đối trong sandbox và chỉ làm được những gì người dùng cấp quyền.
          </p>
        </div>

        {/* Slots */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="surface-card rounded-2xl p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
              <LayoutDashboard className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              Slot <code className="text-xs font-mono px-1.5 py-0.5 rounded bg-slate-800 text-blue-300 border border-slate-700">tool</code>
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Trang tiện ích toàn màn hình tại <span className="font-mono">/plugins/&lt;id&gt;</span> — có mặt trong
              Command Palette (Ctrl+K) và chạy inline ngay trong danh sách plugin đã cài.
            </p>
          </div>
          <div className="surface-card rounded-2xl p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              Slot <code className="text-xs font-mono px-1.5 py-0.5 rounded bg-slate-800 text-emerald-300 border border-slate-700">dashboard-widget</code>
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Widget nhúng dạng card lên Dashboard giáo viên và StudentPortal học sinh — cùng sandbox,
              layout compact do plugin tự render theo <span className="font-mono">ctx.mode</span>.
            </p>
          </div>
          <div className="surface-card rounded-2xl p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-fuchsia-500/10 border border-fuchsia-500/20 flex items-center justify-center text-fuchsia-400">
              <MessageCircle className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              Slot <code className="text-xs font-mono px-1.5 py-0.5 rounded bg-slate-800 text-fuchsia-300 border border-slate-700">floating</code>
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Bong bóng nổi trên <b>mọi trang</b> của app (kiểu Messenger). Hộp khởi đầu 76×76, plugin
              phóng to/thu nhỏ qua <span className="font-mono">AnyCourse.ui.size()</span> khi mở panel.
            </p>
          </div>
        </div>

        {/* Security + distribution */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="surface-card rounded-2xl p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">Sandbox Cô Lập & Phân Quyền</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Plugin chạy trong iframe <span className="font-mono">sandbox="allow-scripts"</span> (opaque origin)
              với CSP <span className="font-mono">default-src 'none'; connect-src 'none'</span> — không chạm được
              DOM/localStorage/mạng của app. Mọi lời gọi đi qua bridge postMessage, kiểm
              <span className="font-mono"> event.source</span> + quyền từng method.
            </p>
            <div className="pt-2 text-xs font-mono text-slate-500">
              ✓ storage 256KB · rate limit · bundle ≤ 2MB
            </div>
          </div>
          <div className="surface-card rounded-2xl p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
              <Package className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">Kho Plugin Ký Số Ed25519</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Marketplace có sẵn trong app: Kho plugin local ship cùng ứng dụng, store cộng đồng từ xa bắt buộc
              chữ ký <b>ed25519</b> (canonical JSON) + xác minh <b>sha256</b> từng bundle + danh sách thu hồi
              (revoked). Cập nhật hiện badge ↑ ngay trong danh sách quản lý.
            </p>
            <div className="pt-2 text-xs font-mono text-slate-500">
              ✓ hash verify khi cài · revoke 403 · update in-place
            </div>
          </div>
          <div className="surface-card rounded-2xl p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
              <FileUp className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">Chia Sẻ Trực Tiếp .acplugin.json</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Xuất plugin đã cài thành một gói JSON tự chứa (manifest + bundle + icon), cài lại ở máy khác qua
              nút <b>Nhập từ tệp</b> — server kiểm tra toàn vẹn hash, giới hạn kích thước và cảnh báo tin cậy
              rõ ràng trước khi cài.
            </p>
            <div className="pt-2 text-xs font-mono text-slate-500">
              ✓ export 1-click · import hash-verified · badge nguồn gốc
            </div>
          </div>
        </div>

        {/* SDK snippet + sample plugins */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <div className="lg:col-span-3 surface-card rounded-2xl overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3 border-b border-slate-800 bg-slate-900/60">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
                <Code2 className="w-4 h-4 text-fuchsia-400" /> SDK <span className="font-mono text-slate-400">window.AnyCourse</span>
              </div>
              <button
                onClick={copySdk}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-800 border border-slate-700 hover:border-slate-600 text-[11px] font-semibold text-slate-300 transition"
              >
                {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                {copied ? 'Đã copy' : 'Copy'}
              </button>
            </div>
            <pre className="p-4 overflow-x-auto text-[11.5px] leading-relaxed font-mono text-slate-300">
{PLUGIN_SDK_SNIPPET}
            </pre>
          </div>

          <div className="lg:col-span-2 surface-card rounded-2xl p-6 space-y-4">
            <h3 className="text-base font-bold text-white">Plugin mẫu trong Store</h3>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2.5">
                <span className="w-7 h-7 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">⏱️</span>
                <div>
                  <div className="font-bold text-slate-200">Pomodoro Focus Timer</div>
                  <div className="text-slate-400">Trang cài đặt riêng, notify, widget dashboard.</div>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-7 h-7 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center shrink-0">🧪</span>
                <div>
                  <div className="font-bold text-slate-200">Cân Bằng Phương Trình Hóa Học</div>
                  <div className="text-slate-400">Ion &amp; electron, khối lượng mol SGK, tính định lượng g/mol/L.</div>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-7 h-7 rounded-lg bg-fuchsia-500/10 border border-fuchsia-500/20 flex items-center justify-center shrink-0">💬</span>
                <div>
                  <div className="font-bold text-slate-200">Chat Bubble Demo (Messenger)</div>
                  <div className="text-slate-400">Bong bóng chat nổi mọi trang, typing indicator, bot phản hồi.</div>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-7 h-7 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0">🖊️</span>
                <div>
                  <div className="font-bold text-slate-200">Bảng Trắng Whiteboard</div>
                  <div className="text-slate-400">Bút/highlighter/tẩy, hình khối, undo/redo, mẫu kẻ dòng kẻ ô — xuất PNG.</div>
                </div>
              </li>
            </ul>
            <a
              href={GITHUB_URL + '/blob/main/packages/core-oss/docs/PLUGINS.md'}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 transition"
            >
              Tài liệu đầy đủ: manifest, SDK, bảo mật, ký store <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   8. DESKTOP APP DOWNLOAD SECTION
   ═══════════════════════════════════════════════════════════════ */
function DesktopDownloadSection() {
  return (
    <section id="desktop" className="py-20 border-b border-slate-800/80 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="surface-card rounded-3xl p-8 sm:p-12 border border-slate-800 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

            <div className="lg:col-span-8 space-y-4 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-bold text-blue-400 uppercase tracking-widest">
                <Laptop className="w-3.5 h-3.5" /> Desktop Standalone Edition
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
                Tải AnyCourse Desktop
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed max-w-2xl">
                Ứng dụng desktop độc lập hoàn toàn, chạy trực tiếp trên file SQLite nội bộ. Không cần cài đặt máy chủ phức tạp, mở lên là dạy và học ngay không phụ thuộc đường truyền internet.
              </p>

              <div className="flex flex-wrap gap-3 pt-2 text-xs text-slate-400">
                <span className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 font-mono">
                  ✓ Windows 10/11 64-bit (NSIS .exe)
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 font-mono">
                  ✓ Linux (AppImage · .deb · .tar.gz)
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 font-mono">
                  ✓ macOS (.dmg x64 &amp; arm64)
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-emerald-400 font-mono">
                  ✓ Miễn phí 100% cho cá nhân & giáo viên
                </span>
              </div>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                Bộ cài được build tự động bởi GitHub Actions trên cả ba nền tảng. Bản macOS chưa ký số — lần đầu mở bằng chuột phải → Open. Chưa thấy bản build phù hợp? <a href="#deploy" className="text-blue-400 hover:underline">Tự đóng gói từ mã nguồn trong vài phút</a>.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center lg:items-end gap-3">
              <a
                href={GITHUB_URL + '/releases'}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2.5"
              >
                <Download className="w-5 h-5" />
                <span>Tải Từ GitHub Releases</span>
              </a>
              <div className="text-[11px] text-slate-400 text-center lg:text-right">
                Phiên bản v0.1.0 · Mã nguồn mở AGPL-3.0
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   9. LICENSE MATRIX & COMPARISON SECTION
   ═══════════════════════════════════════════════════════════════ */
function LicenseSection() {
  return (
    <section id="license" className="py-20 border-b border-slate-800/80 bg-[#090d16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-300">
            <Scale className="w-3.5 h-3.5 text-blue-400" /> Điều Khoản Giấy Phép & Quyền Sử Dụng
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Desktop Mã Nguồn Mở (AGPL-3.0) — Cloud Thương Mại
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Mô hình open-core giống Bitwarden / Joplin: ứng dụng Desktop hoàn toàn tự do, nền tảng Cloud vận hành bởi AnyCourse là dịch vụ trả phí:
          </p>
        </div>

        {/* 2 Core Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">

          {/* Open Source Column */}
          <div className="surface-card rounded-2xl p-6 space-y-4 border-emerald-500/30 bg-emerald-950/10">
            <div className="flex items-center gap-2.5 text-emerald-400 font-bold text-base">
              <CheckCircle2 className="w-5 h-5" />
              <span>Desktop App — Miễn Phí & Tự Do (AGPL-3.0):</span>
            </div>
            <ul className="space-y-2.5 text-xs text-slate-300 leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">✓</span>
                <span><strong>Mọi đối tượng, mọi mục đích:</strong> học sinh, giáo viên, trung tâm — kể cả lớp học có thu phí — tải và dùng Desktop offline trọn đời, không mất phí.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">✓</span>
                <span><strong>Tự do nghiên cứu & sửa đổi:</strong> fork kho code GitHub, đọc, đóng góp Pull Request, build lại từ mã nguồn.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">✓</span>
                <span><strong>Trọn bộ công cụ offline:</strong> 43+ dạng bài tập, SRS 1-3-7, đề thi, bảng trắng, SQLite cục bộ — không cần internet.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">✓</span>
                <span><strong>Nghĩa vụ duy nhất khi sửa đổi:</strong> phân phối lại bản sửa đổi phải kèm mã nguồn theo AGPL-3.0.</span>
              </li>
            </ul>
          </div>

          {/* Commercial Cloud Column */}
          <div className="surface-card rounded-2xl p-6 space-y-4 border-blue-500/30 bg-blue-950/10">
            <div className="flex items-center gap-2.5 text-blue-400 font-bold text-base">
              <Building2 className="w-5 h-5" />
              <span>Cloud Platform & Web — Thương Mại:</span>
            </div>
            <ul className="space-y-2.5 text-xs text-slate-300 leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-blue-400 font-bold">●</span>
                <span><strong>Pro Managed Cloud / Commercial License:</strong> vận hành nền tảng web-cloud của AnyCourse (app.anycourse.vn) cho tổ chức thu phí cần gói đăng ký.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 font-bold">●</span>
                <span><strong>AI quota & chấm điểm đám mây:</strong> AI Speaking/Writing theo rubric, quota theo gói — chạy trên hạ tầng AnyCourse.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 font-bold">●</span>
                <span><strong>Đồng bộ đa thiết bị thời gian thực:</strong> Laptop ↔ Desktop ↔ Mobile qua cloud backend thương mại.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 font-bold">●</span>
                <span><strong>White-label & SLA:</strong> tên miền riêng, logo thương hiệu, hỗ trợ ưu tiên cho trung tâm & doanh nghiệp.</span>
              </li>
            </ul>
          </div>

        </div>

        {/* ── Feature Comparison Matrix Table ── */}
        <div className="max-w-5xl mx-auto rounded-2xl border border-slate-800 bg-slate-900/40 overflow-hidden">
          <div className="p-4 bg-slate-900 border-b border-slate-800 text-sm font-bold text-white flex items-center justify-between">
            <span>Ma Trận So Sánh Tính Năng Chi Tiết</span>
            <span className="text-xs text-slate-400 font-normal">Minh bạch 100%</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-300">
              <thead>
                <tr className="border-b border-slate-800 bg-slate-950/60 font-semibold text-slate-400">
                  <th className="p-3.5">Tính Năng / Đặc Quyền</th>
                  <th className="p-3.5 text-center text-emerald-400">Desktop OSS (AGPL)</th>
                  <th className="p-3.5 text-center text-blue-400">Pro Managed Cloud</th>
                  <th className="p-3.5 text-center text-slate-200">Enterprise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80">
                <tr>
                  <td className="p-3.5 font-medium text-white">Chi phí sử dụng</td>
                  <td className="p-3.5 text-center text-emerald-400 font-bold">$0 / Trọn đời</td>
                  <td className="p-3.5 text-center text-blue-400 font-bold">Gói thuê bao tháng</td>
                  <td className="p-3.5 text-center font-bold">May đo theo dự án</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-medium text-white">43+ Dạng bài tập & học cụ SRS</td>
                  <td className="p-3.5 text-center text-emerald-400">✓ Đầy đủ</td>
                  <td className="p-3.5 text-center text-emerald-400">✓ Đầy đủ</td>
                  <td className="p-3.5 text-center text-emerald-400">✓ Đầy đủ</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-medium text-white">Chạy Offline không cần Internet</td>
                  <td className="p-3.5 text-center text-emerald-400">✓ 100% SQLite</td>
                  <td className="p-3.5 text-center text-slate-400">Yêu cầu kết nối</td>
                  <td className="p-3.5 text-center text-emerald-400">✓ Hybrid / On-Prem</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-medium text-white">AI Assistant (OpenAI, Claude, Gemini)</td>
                  <td className="p-3.5 text-center text-slate-300">Gắn API Key riêng (BYOK)</td>
                  <td className="p-3.5 text-center text-blue-400">Sẵn Quota + BYOK</td>
                  <td className="p-3.5 text-center text-emerald-400">Dedicated AI / LLM</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-medium text-white">Đồng bộ đa thiết bị Real-time</td>
                  <td className="p-3.5 text-center text-slate-500">—</td>
                  <td className="p-3.5 text-center text-emerald-400">✓ Tự động 24/7</td>
                  <td className="p-3.5 text-center text-emerald-400">✓ Tự động 24/7</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-medium text-white">Tên miền riêng & White-label Brand</td>
                  <td className="p-3.5 text-center text-slate-500">—</td>
                  <td className="p-3.5 text-center text-blue-400">Tùy chọn gói Pro</td>
                  <td className="p-3.5 text-center text-emerald-400">✓ 100% White-label</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-medium text-white">Cam kết chất lượng dịch vụ SLA</td>
                  <td className="p-3.5 text-center text-slate-500">Cộng đồng GitHub</td>
                  <td className="p-3.5 text-center text-slate-300">99.5% Uptime</td>
                  <td className="p-3.5 text-center text-emerald-400">✓ 99.9% + SLA 24/7</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   10. DEPLOYMENT & QUICKSTART HUB
   ═══════════════════════════════════════════════════════════════ */
function DeploymentSection() {
  const [activeTab, setActiveTab] = useState<'desktop' | 'source' | 'releases' | 'cloud'>('desktop');
  const [copied, setCopied] = useState(false);

  const snippets = {
    desktop: `# Tải bộ cài đặt đóng gói sẵn từ GitHub Releases:
# Windows : AnyCourse-Setup-0.1.0.exe (NSIS)
# Linux   : AppImage + .deb + .tar.gz portable
# macOS   : .dmg + .zip (x64 & arm64)
# Tích hợp sẵn SQLite cục bộ, không cần cài Node.js hay DB server.`,
    source: `# 1. Clone kho mã nguồn mở AGPL-3.0 (cần Node.js 20+):
git clone https://github.com/anycoursevn/anycourse-desktop.git
cd anycourse-desktop

# 2. Cài dependencies — payload (SPA + local server) trước, shell sau:
cd packages/core-oss && npm install
cd ../../apps/desktop && npm install

# 3. Chạy app (Electron nạp payload trực tiếp, không cần build):
npm start

# 4. Đóng gói installer cho nền tảng tương ứng:
npm run dist:win    # hoặc dist:linux / dist:mac`,
    releases: `# Installer do GitHub Actions tự build trên 3 nền tảng native
# (windows-latest / ubuntu-latest / macos-latest) mỗi khi push tag v*:
git tag v0.1.0 && git push origin v0.1.0
# → CI build, chạy smoke test bản đóng gói và draft Release kèm artifact.

# Bản macOS chưa ký số (chưa có Apple Developer cert):
# lần đầu mở bằng chuột phải → Open, hoặc:
xattr -dr com.apple.quarantine AnyCourse.app`,
    cloud: `# Nền tảng Pro Managed Cloud do AnyCourse vận hành:
# Truy cập cổng đăng ký: https://app.anycourse.vn
# Hoặc liên hệ triển khai cho tổ chức: support@anycourse.vn
# Tính năng: Đồng bộ thời gian thực, AI Cloud Quota, Cổng phụ huynh & VietQR`,
  };

  const copyCode = () => {
    navigator.clipboard.writeText(snippets[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="deploy" className="py-20 border-b border-slate-800/80 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-300">
            <Terminal className="w-3.5 h-3.5 text-blue-400" /> Triển Khai Trong 30 Giây
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Trung Tâm Hướng Dẫn Bắt Đầu
          </h2>
          <p className="text-slate-400 text-sm">
            Chọn phương thức khởi chạy phù hợp nhất với nhu cầu của bạn:
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex flex-wrap justify-center gap-2">
          {[
            { id: 'desktop' as const, label: 'Bản Cài Đặt Desktop' },
            { id: 'source' as const, label: 'Build Từ Mã Nguồn Git' },
            { id: 'releases' as const, label: 'CI Release 3 Nền Tảng' },
            { id: 'cloud' as const, label: 'Pro Managed Cloud' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Code Viewport */}
        <div className="max-w-3xl mx-auto terminal-window p-5 text-xs font-mono text-slate-300 relative space-y-3">
          <div className="flex items-center justify-between text-slate-500 border-b border-slate-800 pb-2">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
              <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
              <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
              <span className="text-[11px] ml-1">Terminal Execution</span>
            </div>
            <button
              onClick={copyCode}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 transition text-[11px]"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Đã copy!' : 'Sao chép'}</span>
            </button>
          </div>
          <pre className="overflow-x-auto whitespace-pre-wrap leading-relaxed text-slate-200">
            {snippets[activeTab]}
          </pre>
        </div>

      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   10.5. REALISTIC ROADMAP & AUDIT SECTION (LỘ TRÌNH TÍNH NĂNG CHI TIẾT)
   ═══════════════════════════════════════════════════════════════ */
function RoadmapSection() {
  const [activePhase, setActivePhase] = useState<'all' | 'phase1' | 'phase2' | 'phase2b' | 'phase3' | 'phase4'>('all');

  const roadmapData = [
    {
      phase: 'phase1',
      title: 'Giai Đoạn 1: Gia Cố Nền Tảng & Zero-Mock Data',
      badge: '100% Hoàn Tất',
      status: 'completed',
      timeline: 'Đã nghiệm thu (2026-08)',
      desc: 'Nâng cấp toàn bộ các phân hệ trọng yếu từ giao diện mẫu sang kết nối dữ liệu thật 100% với SQLite và .NET 10 API.',
      items: [
        {
          name: 'AI Speaking Evaluator (F0 & Waveform)',
          status: 'done',
          percent: 85,
          detail: 'Thuật toán Autocorrelation trích xuất dao động F0 (30ms frame / 15ms hop), đường cong Pitch Contour kép so sánh trực tiếp người bản xứ, phân tích âm vị IPA (CMUDict) và sóng âm Web Audio API.'
        },
        {
          name: 'Cổng Phụ Huynh (/parent) Dữ Liệu Thật',
          status: 'done',
          percent: 90,
          detail: 'API /api/me/children truy vấn liên kết guardian_students, thống kê chuyên cần class_attendance và công nợ class_students thật trên SQLite. Xóa bỏ 100% mock data.'
        },
        {
          name: 'Live Classroom Hub Realtime',
          status: 'done',
          percent: 85,
          detail: 'SignalR Core LiveClassroomHub (/hubs/live) trên .NET API + WebSocket RFC 6455. Đồng bộ câu hỏi, chuông bấm Buzzer micro-giây, Speed Bonus, BXH và bảng vẽ Whiteboard Canvas.'
        },
        {
          name: 'Clean Architecture .NET 10 & 39/39 Tests Xanh',
          status: 'done',
          percent: 100,
          detail: 'Domain, Application, Infrastructure, Api + 11 Domain Unit Tests + 28 API Integration Tests. npx tsc --noEmit 0 lỗi. test-api.mjs đạt 149/149 passed.'
        },
        {
          name: 'Bộ 8 Dạng Bài Tập Tương Tác Duolingo',
          status: 'done',
          percent: 100,
          detail: 'Quiz hình ảnh, Word Bank, Matching nối từ, Listen TTS, Dictation nghe chép và Sắp xếp câu phản xạ.'
        },
        {
          name: 'Sổ Tay Từ Vựng Cá Nhân & Thuật Toán SRS 1-3-7',
          status: 'done',
          percent: 100,
          detail: 'Spaced Repetition tự động lên lịch ôn tập ngắt quãng Ngày 1 -> Ngày 3 -> Ngày 7, thẻ Flashcards ghi nhớ dài hạn.'
        },
        {
          name: 'Bảo Mật RBAC 8 Vai Trò Chống Leo Quyền',
          status: 'done',
          percent: 100,
          detail: 'AssignableBy matrix tại tầng Domain, bảo vệ chuyển nhượng quyền sở hữu transfer-ownership và JWT PBKDF2 hashing.'
        }
      ]
    },
    {
      phase: 'phase2',
      title: 'Giai Đoạn 2: Tự Động Hóa Doanh Thu & Thu Phí 24/7',
      badge: '50% Đang Triển Khai',
      status: 'in-progress',
      timeline: 'Sprint 1-2 (2026-09)',
      desc: 'Tự động hóa hoàn toàn luồng thu học phí ngân hàng, đối soát mã giao dịch và xuất hóa đơn điện tử VAT.',
      items: [
        {
          name: 'Sinh Mã VietQR NAPAS247 Động',
          status: 'done',
          percent: 100,
          detail: 'Tạo mã QR có số tài khoản trung tâm, số tiền chính xác và mã chuyển khoản định danh AC_PAY_xxxx.'
        },
        {
          name: 'Webhook Ngân Hàng Tự Động (Casso / SeAPay API)',
          status: 'progress',
          percent: 50,
          detail: 'Lắng nghe biến động số dư tài khoản tức thời, khớp mã giao dịch và kích hoạt gói học trong 3 giây không cần duyệt thủ công.'
        },
        {
          name: 'Quản Lý Hóa Đơn VAT & Xuất Biên Lai PDF',
          status: 'progress',
          percent: 40,
          detail: 'Tự động xuất hóa đơn điện tử hợp lệ và tạo file PDF phiếu thu gửi về email học sinh.'
        },
        {
          name: 'Báo Cáo Doanh Thu & Cảnh Báo Công Nợ Zalo/Email',
          status: 'progress',
          percent: 35,
          detail: 'Biểu đồ dòng tiền trung tâm, phân loại học viên chưa đóng phí và gửi thông báo nhắc nợ tự động.'
        }
      ]
    },
    {
      phase: 'phase2b',
      title: 'Giai Đoạn 2b: Desktop Local-First & Hệ Sinh Thái Mở',
      badge: 'Hoàn Tất (2026-09)',
      status: 'completed',
      timeline: 'Đã nghiệm thu (2026-09)',
      desc: 'Đưa Desktop thành smart client offline-first thật sự: lớp học không cần máy chủ, plugin SDK, đồng bộ nền và đóng gói đa nền tảng có CI.',
      items: [
        {
          name: 'Lớp Học Host Sharing (máy giáo viên = máy chủ)',
          status: 'done',
          percent: 100,
          detail: 'Giáo viên host lớp ngay trên máy mình: học viên vào bằng link mời / QR / LAN beacon không cần cài đặt; ma trận phân quyền 25/25 tình huống được kiểm thử tự động.'
        },
        {
          name: 'Internet Tunnel Zero-Config cho lớp online',
          status: 'done',
          percent: 100,
          detail: 'cloudflared tự tải + watchdog tự heal khi gãy; sức chứa thực nghiệm 100-300 học viên cho quiz/nội dung văn bản; hiển thị badge nhà cung cấp tunnel ngay trong panel chia sẻ.'
        },
        {
          name: 'Plugin SDK v1 + Kho Plugin trong ứng dụng',
          status: 'done',
          percent: 100,
          detail: 'Sandbox iframe cách ly, 3 slot (tool / dashboard-widget / floating), import-export .acplugin.json, store từ xa ký số ed25519; 4 plugin first-party (Pomodoro, Cân bằng hoá học, Chat demo, Bảng trắng).'
        },
        {
          name: 'Đồng Bộ Offline-First Thật (Sync IPC)',
          status: 'done',
          percent: 90,
          detail: 'Sync IPC main-process ↔ server, dict cache dùng offline, scheduler jobs nền và setup wizard /setup cho thiết bị mới; upload cloud còn trong lộ trình.'
        },
        {
          name: 'Đóng Gói Đa Nền Tảng + CI Release 3-OS',
          status: 'done',
          percent: 100,
          detail: 'Windows NSIS, Linux AppImage/.deb/.tar.gz, macOS dmg/zip (x64+arm64); push tag v* → GitHub Actions build trên runner native, smoke test bản đóng gói và draft Release tự động.'
        },
        {
          name: 'Xuất Bản GitHub Tổ Chức anycoursevn',
          status: 'done',
          percent: 100,
          detail: '3 repo: anycourse-desktop (AGPL public), anycourse-platform (private), anycourse-home; guard tự động check-boundary giữ ranh giới core/SaaS trước mỗi lần export.'
        }
      ]
    },
    {
      phase: 'phase3',
      title: 'Giai Đoạn 3: Triển Khai Cloud VPS & Pilot Trung Tâm Thật',
      badge: '15% Kế Hoạch',
      status: 'planned',
      timeline: 'Sprint 3 (2026-10)',
      desc: 'Đưa toàn bộ hệ thống lên môi trường VPS Cloud Production và vận hành thử nghiệm trên các trung tâm đối tác.',
      items: [
        {
          name: 'Triển Khai VPS Cloud Production (Postgres 16 + SSL)',
          status: 'planned',
          percent: 20,
          detail: 'Cấu hình Docker Compose (Postgres 16, .NET 10 API, Nginx SSL, Domain app.anycourse.vn) kèm backup tự động hàng ngày lên S3.'
        },
        {
          name: 'Onboarding Pilot 1–3 Trung Tâm Tiếng Anh Thật',
          status: 'planned',
          percent: 15,
          detail: 'Vận hành thực tế trên 50-100 học viên tại cơ sở đối tác để thu thập số liệu độ trễ, retention và tính ổn định.'
        },
        {
          name: 'Chứng Chỉ Ký Số Desktop (Code Signing Windows/macOS)',
          status: 'planned',
          percent: 10,
          detail: 'Ký số bộ cài NSIS Setup bằng chứng chỉ EV/OV để loại bỏ cảnh báo Windows SmartScreen.'
        }
      ]
    },
    {
      phase: 'phase4',
      title: 'Giai Đoạn 4: Đa Nền Tảng Di Động & App Store Release',
      badge: '10% Kế Hoạch',
      status: 'planned',
      timeline: 'Sprint 4 (2026-11)',
      desc: 'Đóng gói ứng dụng di động Native và phát hành bản dịch đa ngôn ngữ quốc tế.',
      items: [
        {
          name: 'Biên Dịch Native Mobile (Capacitor 8 Android & iOS)',
          status: 'planned',
          percent: 25,
          detail: 'Build Capacitor ra Android APK và Xcode TestFlight, kiểm thử ghi âm micro và Push Notifications nền.'
        },
        {
          name: 'Bản Dịch Đa Ngôn Ngữ (Tiếng Anh, Tiếng Nhật, Tiếng Hàn)',
          status: 'planned',
          percent: 20,
          detail: 'Hoàn thiện tệp dịch en.json, ja.json, ko.json cho toàn bộ giao diện học tập.'
        },
        {
          name: 'Phát Hành Google Play Store Beta & Apple TestFlight',
          status: 'planned',
          percent: 5,
          detail: 'Đưa ứng dụng lên chợ ứng dụng cho học sinh tải về học tập tiện lợi trên smartphone.'
        }
      ]
    }
  ];

  const filteredPhases = activePhase === 'all' 
    ? roadmapData 
    : roadmapData.filter(p => p.phase === activePhase);

  return (
    <section id="roadmap" className="py-20 border-b border-slate-800/80 bg-slate-950/60 relative overflow-hidden">
      {/* Glow highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600/10 blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400">
            <Milestone className="w-3.5 h-3.5" /> Thẩm Định Thực Tế & Lộ Trình Phát Triển
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Lộ Trình Tính Năng Chi Tiết (Roadmap)
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Báo cáo thẩm định kỹ thuật sâu từ mã nguồn thật: <strong className="text-white">Tiến độ tổng thể đạt ~65%</strong>, trong đó <strong className="text-emerald-400">70% phân hệ cốt lõi đã chạy dữ liệu thật 100%</strong> (Zero-Mock) và <strong className="text-emerald-400">giai đoạn Local-First Desktop đã nghiệm thu 2026-09</strong>.
          </p>
        </div>

        {/* Global Progress Bar Summary */}
        <div className="surface-card rounded-2xl p-6 border border-slate-800 space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Tiến Độ Dự Án Tổng Thể</div>
              <div className="text-2xl font-black text-white flex items-center gap-2">
                <span>65% Hoàn Thiện</span>
                <span className="text-xs font-normal text-slate-400">(5 phân kỳ phát triển)</span>
              </div>
            </div>
            
            <div className="flex items-center gap-2 flex-wrap text-xs">
              <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-medium flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> 70% Core Platform (Zero-Mock)
              </span>
              <span className="px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 font-medium flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" /> 20% Đang Hoàn Thiện
              </span>
              <span className="px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 font-medium flex items-center gap-1">
                <Rocket className="w-3.5 h-3.5" /> 25% Sắp Triển Khai
              </span>
            </div>
          </div>

          {/* Progress Stack Bar */}
          <div className="h-3 w-full bg-slate-900 rounded-full overflow-hidden flex border border-slate-800">
            <div className="bg-emerald-500 h-full transition-all" style={{ width: '60%' }} title="Đã xong 100% chạy thật" />
            <div className="bg-amber-500 h-full transition-all" style={{ width: '15%' }} title="Đang hoàn thiện Giai đoạn 2" />
            <div className="bg-blue-500/40 h-full transition-all" style={{ width: '15%' }} title="Kế hoạch Giai đoạn 3" />
            <div className="bg-slate-800 h-full transition-all" style={{ width: '10%' }} title="Kế hoạch Giai đoạn 4" />
          </div>

          {/* 4 Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2 border-t border-slate-800/80 text-xs">
            <div className="space-y-1">
              <span className="text-slate-400">Kiểm thử tự động:</span>
              <div className="font-bold text-emerald-400 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> 301 check backend · 27 E2E · 18 .NET
              </div>
            </div>
            <div className="space-y-1">
              <span className="text-slate-400">Typecheck TypeScript:</span>
              <div className="font-bold text-emerald-400 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> 0 Errors (npx tsc)
              </div>
            </div>
            <div className="space-y-1">
              <span className="text-slate-400">Dữ liệu Cổng Phụ Huynh:</span>
              <div className="font-bold text-emerald-400 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> 100% Real SQLite/Backend
              </div>
            </div>
            <div className="space-y-1">
              <span className="text-slate-400">Hạ tầng Realtime:</span>
              <div className="font-bold text-cyan-400 flex items-center gap-1">
                <Activity className="w-3.5 h-3.5" /> SignalR Hub & WebSockets
              </div>
            </div>
          </div>
        </div>

        {/* Phase Filter Tabs */}
        <div className="flex items-center justify-center gap-2 flex-wrap">
          {[
            { id: 'all' as const, label: 'Tất Cả 5 Giai Đoạn' },
            { id: 'phase1' as const, label: 'Giai Đoạn 1 (100% Xong)' },
            { id: 'phase2' as const, label: 'Giai Đoạn 2 (50% Đang Làm)' },
            { id: 'phase2b' as const, label: 'Giai Đoạn 2b (Local-First ✓)' },
            { id: 'phase3' as const, label: 'Giai Đoạn 3 (Cloud VPS)' },
            { id: 'phase4' as const, label: 'Giai Đoạn 4 (Mobile Native)' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActivePhase(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition ${
                activePhase === tab.id
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Phase Cards List */}
        <div className="space-y-8">
          {filteredPhases.map((phaseGroup, pIdx) => {
            const isCompleted = phaseGroup.status === 'completed';
            const isInProgress = phaseGroup.status === 'in-progress';

            return (
              <div 
                key={pIdx}
                className="surface-card rounded-2xl p-6 sm:p-8 border border-slate-800 space-y-6 relative overflow-hidden"
              >
                {/* Header of Phase */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-5">
                  <div className="space-y-1">
                    <div className="flex items-center gap-3">
                      <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${
                        isCompleted ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' :
                        isInProgress ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20' :
                        'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                      }`}>
                        {phaseGroup.badge}
                      </span>
                      <span className="text-xs font-mono text-slate-400">{phaseGroup.timeline}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white tracking-tight">{phaseGroup.title}</h3>
                    <p className="text-xs text-slate-400">{phaseGroup.desc}</p>
                  </div>
                </div>

                {/* Items Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {phaseGroup.items.map((item, iIdx) => {
                    const isDone = item.status === 'done';
                    const isProg = item.status === 'progress';

                    return (
                      <div 
                        key={iIdx}
                        className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition space-y-2.5"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex items-center gap-2">
                            {isDone ? (
                              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                            ) : isProg ? (
                              <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                            ) : (
                              <Rocket className="w-4 h-4 text-slate-500 shrink-0" />
                            )}
                            <span className="font-semibold text-xs sm:text-sm text-white">{item.name}</span>
                          </div>
                          <span className={`text-[11px] font-mono font-bold px-2 py-0.5 rounded ${
                            isDone ? 'bg-emerald-500/10 text-emerald-400' :
                            isProg ? 'bg-amber-500/10 text-amber-400' :
                            'bg-slate-800 text-slate-400'
                          }`}>
                            {item.percent}%
                          </span>
                        </div>
                        <p className="text-xs text-slate-400 leading-relaxed pl-6">
                          {item.detail}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Priority Sprints Callout */}
        <div className="surface-card rounded-2xl p-6 border border-blue-500/20 bg-gradient-to-r from-blue-900/20 via-slate-900 to-indigo-900/20 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-blue-400">
              <Zap className="w-4 h-4" /> Kế Hoạch Hành Động Ưu Tiên Tiếp Theo (Next Sprints)
            </div>
            <div className="text-sm text-slate-200">
              1. <strong>Sprint 1</strong>: Webhook Casso/SeAPay thu học phí tự động &amp; hóa đơn VAT &rarr;
              2. <strong>Sprint 2</strong>: Deploy Cloud VPS Staging, Domain SSL &amp; Pilot trung tâm đối tác &rarr;
              3. <strong>Sprint 3</strong>: Ký số installer (EV/OV) + AI Cloud proxy theo quota org.
            </div>
          </div>
          <a
            href={APP_URL + '/login'}
            className="shrink-0 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition shadow-lg shadow-blue-600/30 flex items-center gap-2"
          >
            <span>Trải Nghiệm Hệ Thống Đã Xong</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   11. COMMERCIAL LICENSING & PRICING
   ═══════════════════════════════════════════════════════════════ */
function PricingSection() {
  return (
    <section id="pricing" className="py-20 border-b border-slate-800/80 bg-[#090d16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-300">
            <Award className="w-3.5 h-3.5 text-blue-400" /> Bảng Giá Minh Bạch
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Lựa Chọn Gói Dịch Vụ Phù Hợp
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Bản Desktop mã nguồn mở (AGPL-3.0) miễn phí vĩnh viễn cho mọi người. Nền tảng Cloud, AI và vận hành tổ chức là các gói thương mại:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          
          {/* Community / Personal */}
          <div className="surface-card rounded-2xl p-6 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="text-sm font-bold text-white">Community (Desktop OSS)</div>
              <div className="text-3xl font-black text-white">$0 <span className="text-xs text-slate-400 font-normal">/ vĩnh viễn</span></div>
              <p className="text-xs text-slate-400">Dành cho cá nhân tự học, giáo viên và tổ chức — tải Desktop mã nguồn mở AGPL-3.0, chạy offline trọn đời.</p>
              <div className="space-y-2 text-xs text-slate-300 pt-2">
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> Trọn bộ 43+ dạng bài & học cụ</div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> Ứng dụng Desktop Windows Offline</div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> Lưu trữ SQLite an toàn trên máy</div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> BYOK AI (OpenAI, Claude, Gemini)</div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-amber-400" /> Mã nguồn AGPL-3.0 — tự do tùy biến</div>
              </div>
            </div>
            <a
              href="#desktop"
              className="w-full py-2.5 text-center rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs transition"
            >
              Tải Desktop Về Học Ngay
            </a>
          </div>

          {/* Pro Commercial */}
          <div className="surface-card rounded-2xl p-6 border-blue-500/50 bg-slate-900/60 flex flex-col justify-between space-y-6 relative shadow-lg shadow-blue-600/10">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-blue-600 text-[10px] font-bold text-white uppercase tracking-wider">
              Khuyên Dùng Cho Trung Tâm
            </div>
            <div className="space-y-4">
              <div className="text-sm font-bold text-white">Commercial License / Cloud</div>
              <div className="text-3xl font-black text-blue-400">Liên hệ <span className="text-xs text-slate-400 font-normal">/ trung tâm</span></div>
              <p className="text-xs text-slate-400">Dành cho trung tâm đào tạo, trường tư thục cần nền tảng web-cloud đồng bộ, AI chấm điểm và hỗ trợ thương mại.</p>
              <div className="space-y-2 text-xs text-slate-300 pt-2">
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-blue-400" /> Nền tảng web Pro Managed Cloud 24/7</div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-blue-400" /> Đồng bộ đa thiết bị tự động 2 chiều</div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-blue-400" /> AI Cloud Quota & Chấm Speaking/Writing</div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-blue-400" /> Cổng phụ huynh & VietQR đối soát tự động</div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-blue-400" /> Hỗ trợ kỹ thuật ưu tiên qua Email / Zalo</div>
              </div>
            </div>
            <a
              href="mailto:support@anycourse.vn"
              className="w-full py-2.5 text-center rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition shadow-md shadow-blue-600/20"
            >
              Đăng Ký Giấy Phép Thương Mại
            </a>
          </div>

          {/* Enterprise */}
          <div className="surface-card rounded-2xl p-6 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="text-sm font-bold text-white">Enterprise & Hệ Thống Lớn</div>
              <div className="text-3xl font-black text-slate-300">May đo <span className="text-xs text-slate-400 font-normal">/ theo dự án</span></div>
              <p className="text-xs text-slate-400">Dành cho trường đại học, hệ thống trường liên cấp và chuỗi đào tạo quy mô lớn.</p>
              <div className="space-y-2 text-xs text-slate-300 pt-2">
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-slate-400" /> Triển khai Private Cloud / On-Premise</div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-slate-400" /> Tên miền riêng & White-label toàn bộ</div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-slate-400" /> Cam kết chất lượng dịch vụ SLA 99.9%</div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-slate-400" /> Đào tạo & chuyển giao công nghệ</div>
              </div>
            </div>
            <a
              href="mailto:enterprise@anycourse.vn"
              className="w-full py-2.5 text-center rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs transition"
            >
              Đặt Lịch Họp Tư Vấn
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   12. INTERACTIVE SEARCH & CATEGORIZED FAQ SECTION
   ═══════════════════════════════════════════════════════════════ */
function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const faqs = [
    {
      category: 'license',
      q: 'Ứng dụng Desktop AnyCourse có được dùng cho mục đích thương mại không?',
      a: 'Có. Desktop App phát hành theo giấy phép mở AGPL-3.0 nên được dùng tự do cho mọi mục đích — kể cả lớp học hay trung tâm có thu phí — miễn là bạn phân phối lại bản sửa đổi thì phải kèm mã nguồn theo AGPL. Gói thương mại áp dụng cho nền tảng web/cloud do AnyCourse vận hành: đồng bộ đa thiết bị, AI chấm điểm theo quota, quản lý tổ chức quy mô lớn, white-label và hỗ trợ ưu tiên.',
    },
    {
      category: 'license',
      q: 'Giáo viên tự do có được dùng AnyCourse để dạy học không?',
      a: 'Hoàn toàn có thể — bản Desktop miễn phí 100% cho cả lớp học có thu phí. Khi bạn cần nền tảng web/cloud đồng bộ nhiều thiết bị, AI Speaking/Writing và hỗ trợ kỹ thuật cho tổ chức, hãy liên hệ để được tư vấn gói Pro Managed Cloud với chi phí phù hợp.',
    },
    {
      category: 'offline',
      q: 'Hệ thống có chạy được khi mất kết nối mạng (Offline) không?',
      a: 'Có. AnyCourse được thiết kế theo triết lý Offline-First với cơ sở dữ liệu SQLite nhúng trực tiếp. Bạn có thể soạn giáo án, giao bài, làm bài tập và chấm điểm trên ứng dụng Desktop hoàn toàn offline. Khi có mạng internet, dữ liệu sẽ tự động đồng bộ 2 chiều.',
    },
    {
      category: 'features',
      q: 'Tôi có thể dùng AnyCourse cho các môn Toán, Khoa học, Xã hội hoặc Đào tạo kỹ năng không?',
      a: 'Chắc chắn được. AnyCourse hỗ trợ đầy đủ hơn 43+ dạng bài tập và học cụ: Bảng trắng vẽ sơ đồ tư duy, Đề thi trắc nghiệm & tự luận đa phần (kèm công thức Toán KaTeX), Flashcards SRS, Phòng học Live Game thi đua thời gian thực, đáp ứng mọi chương trình đào tạo từ K-12, Đại học đến Doanh nghiệp.',
    },
    {
      category: 'ai',
      q: 'Tính năng AI Bring-Your-Own-Key (BYOK) hoạt động như thế nào?',
      a: 'Bạn có thể trực tiếp nhập API Key của OpenAI (GPT-4o), Anthropic (Claude 3.5 Sonnet) hoặc Google Gemini (2.0 Flash) vào mục Cài đặt. Ứng dụng sẽ gọi API trực tiếp từ máy của bạn tới nhà cung cấp mô hình AI mà không thông qua bất kỳ máy chủ trung gian nào, đảm bảo bảo mật tuyệt đối và chi phí API gốc rẻ nhất.',
    },
    {
      category: 'deploy',
      q: 'Cần cấu hình máy chủ như thế nào để dùng AnyCourse?',
      a: 'Không cần máy chủ: Desktop App chạy offline với SQLite cục bộ ngay trên máy cá nhân Windows. Nếu bạn là tổ chức muốn nền tảng web/cloud cho nhiều giảng viên – học viên truy cập đồng thời (đồng bộ realtime, AI, thu phí VietQR đối soát), đó là gói Pro Managed Cloud hoặc Enterprise — liên hệ support@anycourse.vn.',
    },
  ];

  const filteredFaqs = useMemo(() => {
    return faqs.filter((faq) => {
      const matchCat = selectedCategory === 'all' || faq.category === selectedCategory;
      const matchSearch =
        faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.a.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [faqs, selectedCategory, searchQuery]);

  return (
    <section id="faq" className="py-20 border-b border-slate-800/80 bg-slate-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-300">
            <HelpCircle className="w-3.5 h-3.5 text-blue-400" /> Giải Đáp Thắc Mắc
          </div>
          <h2 className="text-3xl font-extrabold text-white">Câu Hỏi Thường Gặp (FAQ)</h2>
          <p className="text-slate-400 text-sm">Tìm kiếm câu trả lời nhanh chóng về giấy phép, kỹ thuật và tính năng</p>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="space-y-3">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm kiếm câu hỏi (vd: offline, AGPL, SQLite, API Key, VietQR)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition"
            />
          </div>

          <div className="flex flex-wrap gap-2 pt-1">
            {[
              { id: 'all', label: 'Tất Cả' },
              { id: 'license', label: 'Giấy Phép AGPL & Chi Phí' },
              { id: 'offline', label: 'Offline SQLite' },
              { id: 'ai', label: 'AI & BYOK' },
              { id: 'features', label: 'Tính Năng & Môn Học' },
              { id: 'deploy', label: 'Cài Đặt & Máy Chủ' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1 rounded-lg text-xs font-medium transition ${
                  selectedCategory === cat.id
                    ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30'
                    : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={idx} className="rounded-xl border border-slate-800 bg-slate-900/50 overflow-hidden transition">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full p-4 text-left flex items-center justify-between gap-4 text-sm font-semibold text-white hover:text-blue-400 transition"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform shrink-0 ${isOpen ? 'rotate-180 text-blue-400' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 text-xs sm:text-sm text-slate-400 leading-relaxed border-t border-slate-800/60 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="text-center py-8 text-xs text-slate-500">
              Không tìm thấy câu hỏi phù hợp với từ khóa "{searchQuery}".
            </div>
          )}
        </div>

      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   13. FOOTER
   ═══════════════════════════════════════════════════════════════ */
function Footer() {
  return (
    <footer className="py-12 bg-[#090d16] text-xs text-slate-500 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-slate-800/80 pb-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold">
              <BookOpen className="w-4 h-4" />
            </div>
            <span className="font-bold text-white text-sm">AnyCourse Platform</span>
            <span className="text-slate-400 hidden md:inline">— Nền tảng LMS & Khảo thí Đa môn học (Desktop Open Source & Cloud)</span>
          </div>
          <div className="flex items-center gap-4 flex-wrap">
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 transition">GitHub</a>
            <a href="#features" className="hover:text-slate-300 transition">Tính năng</a>
            <a href="#interactive-demo" className="hover:text-slate-300 transition">Demos</a>
            <a href="#roadmap" className="hover:text-blue-400 transition font-semibold">Lộ trình (Roadmap)</a>
            <a href="#license" className="hover:text-slate-300 transition">Giấy phép</a>
            <a href="#pricing" className="hover:text-slate-300 transition">Bảng giá</a>
            <a href="#faq" className="hover:text-slate-300 transition">FAQ</a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-slate-500">
          <div>Bản quyền © 2026 AnyCourse. Desktop App phát hành mã nguồn mở AGPL-3.0. Nền tảng Cloud & AI là dịch vụ thương mại của AnyCourse.</div>
          <div className="text-slate-400">Được xây dựng cho cộng đồng giáo dục và người tự học.</div>
        </div>

      </div>
    </footer>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MAIN APP EXPORT
   ═══════════════════════════════════════════════════════════════ */
export default function App() {
  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 selection:bg-blue-600 selection:text-white font-sans antialiased">
      <TopAnnouncement />
      <Navbar />
      <Hero />
      <InteractivePlaygroundSection />
      <SolutionsSection />
      <FeaturesSection />
      <ArchitectureSection />
      <PluginsSection />
      <DesktopDownloadSection />
      <LicenseSection />
      <DeploymentSection />
      <RoadmapSection />
      <PricingSection />
      <FaqSection />
      <Footer />
    </div>
  );
}
