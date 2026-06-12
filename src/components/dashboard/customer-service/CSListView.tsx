import type { CSItemStatus, CSListItem } from "@/constants/customerService";

const PauseGlyph = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-3 w-3 text-white">
    <rect x="6" y="5" width="4" height="14" rx="1" />
    <rect x="14" y="5" width="4" height="14" rx="1" />
  </svg>
);

const XGlyph = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={3}
    strokeLinecap="round"
    className="h-3 w-3 text-white"
  >
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
);

const CheckGlyph = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={3}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-3 w-3 text-white"
  >
    <path d="M5 13l4 4L19 7" />
  </svg>
);

const StatusBadge = ({ status }: { status: CSItemStatus }) => {
  const bg =
    status === "paused"
      ? "bg-[#f5b800]"
      : status === "rejected"
        ? "bg-[#e63946]"
        : "bg-[#3fbf4d]";
  return (
    <span
      className={`inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-sm ${bg}`}
    >
      {status === "paused" && <PauseGlyph />}
      {status === "rejected" && <XGlyph />}
      {status === "approved" && <CheckGlyph />}
    </span>
  );
};

const EmptyCheckbox = ({ active }: { active: boolean }) => (
  <span
    className={`inline-block h-3.5 w-3.5 flex-shrink-0 rounded border ${
      active ? "border-white" : "border-gray-400"
    }`}
  />
);

type Props = {
  title: string;
  items: CSListItem[];
  onSelectItem?: (item: CSListItem, index: number) => void;
  selectedIndex?: number;
};

export const CSListView = ({
  title,
  items,
  onSelectItem,
  selectedIndex,
}: Props) => {
  return (
    <div className="flex flex-1 flex-col bg-white px-6 py-6">
      <h2 className="text-base font-bold text-gray-900 sm:text-lg">{title}</h2>

      <div className="mt-4">
        {/* Header */}
        <div className="grid grid-cols-[36px_140px_1fr_1fr_1fr] items-center gap-3 px-3 py-2 text-xs font-bold text-gray-700">
          <EmptyCheckbox active={false} />
          <span>ID</span>
          <span>Subject</span>
          <span>Requester</span>
          <span>Requester updated</span>
        </div>

        {/* Rows */}
        <ul className="flex flex-col">
          {items.map((item, idx) => {
            const isSelected = selectedIndex === idx;
            return (
              <li key={idx}>
                <button
                  type="button"
                  onClick={() => onSelectItem?.(item, idx)}
                  className={`grid w-full grid-cols-[36px_140px_1fr_1fr_1fr] items-center gap-3 px-3 py-3 text-left text-xs transition ${
                    isSelected
                      ? "bg-[#00c2a8] text-white"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  <EmptyCheckbox active={isSelected} />
                  <span className="flex items-center gap-2 font-medium">
                    <StatusBadge status={item.status} />
                    {item.id}
                  </span>
                  <span>{item.subject}</span>
                  <span>{item.requester}</span>
                  <span>{item.requesterUpdated}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
