// src/components/privacy-policy/PrivacyPolicyContent.tsx

import { PRIVACY_POLICY_META, PRIVACY_POLICY_SECTIONS, PolicyBlock } from '@/constants/privacy-policy';

// --- SUB-KOMPONEN: Render tiap blok konten ---
function RenderBlock({ block }: { block: PolicyBlock }) {
  switch (block.type) {
    case 'paragraph':
      return (
        <p
          className="text-sm leading-relaxed text-slate-600 mb-3"
          dangerouslySetInnerHTML={{ __html: block.text }}
        />
      );

    case 'unordered-list':
      return (
        <ul className="list-disc pl-6 mb-4 space-y-1.5">
          {block.items.map((item, i) => (
            <li
              key={i}
              className="text-sm text-slate-600 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: item }}
            />
          ))}
        </ul>
      );

    case 'ordered-list':
      return (
        <ol className="list-decimal pl-6 mb-4 space-y-1.5">
          {block.items.map((item, i) => (
            <li
              key={i}
              className="text-sm text-slate-600 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: item }}
            />
          ))}
        </ol>
      );

    case 'contact-box':
      return (
        <div className="mt-5 mb-4 rounded-lg border border-teal-100 border-l-4 border-l-[#007A74] bg-teal-50/60 px-5 py-4 space-y-2">
          {block.items.map((item, i) => (
            <p key={i} className="text-sm text-slate-700">
              <span className="font-semibold text-slate-800">{item.label}:</span>{' '}
              {item.href ? (
                <a
                  href={item.href}
                  className="font-semibold text-[#007A74] hover:underline"
                >
                  {item.value}
                </a>
              ) : (
                <span>{item.value}</span>
              )}
            </p>
          ))}
        </div>
      );

    default:
      return null;
  }
}

// --- KOMPONEN UTAMA ---
export function PrivacyPolicyContent() {
  return (
    <section className="min-h-screen bg-slate-50 px-4 py-10 sm:py-16">
      <div className="mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white px-8 py-10 shadow-sm sm:px-12">

        {/* Header */}
        <div className="mb-8 border-b border-slate-100 pb-6 text-center">
          <h1 className="text-2xl font-bold text-[#007A74] sm:text-3xl">
            {PRIVACY_POLICY_META.title}
          </h1>
          <p className="mt-2 text-sm italic text-slate-500">
            Terakhir Diperbarui: {PRIVACY_POLICY_META.lastUpdated}
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-6">
          {PRIVACY_POLICY_SECTIONS.map((section) => (
            <div key={section.id} id={section.id}>
              <h2 className="mb-3 text-base font-semibold text-slate-900 sm:text-lg">
                {section.heading}
              </h2>
              {section.content.map((block, i) => (
                <RenderBlock key={i} block={block} />
              ))}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

