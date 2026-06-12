"use client";

import { useState } from "react";
import {
  CS_REPORT_ITEMS,
  CS_SUPPORT_TICKET_ITEMS,
} from "@/constants/customerService";

const Chevron = ({ open }: { open: boolean }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
  >
    <path d="M6 9l6 6 6-6" />
  </svg>
);

const Checkbox = () => (
  <span className="mt-0.5 inline-block h-3.5 w-3.5 flex-shrink-0 rounded border border-gray-400" />
);

type Props = {
  onSelectLiveChat: () => void;
  onSelectTickets: () => void;
};

export const CustomerServiceSidebar = ({
  onSelectLiveChat,
  onSelectTickets,
}: Props) => {
  const [reportsOpen, setReportsOpen] = useState(true);
  const [ticketsOpen, setTicketsOpen] = useState(true);

  return (
    <aside className="flex w-full flex-col gap-4 bg-white px-5 py-6 text-xs text-gray-700">
      {/* Reports */}
      <div>
        <button
          type="button"
          onClick={() => setReportsOpen((v) => !v)}
          className="flex w-full items-center justify-between text-sm font-bold text-gray-800"
        >
          <span>Reports</span>
          <Chevron open={reportsOpen} />
        </button>
        {reportsOpen && (
          <ul className="mt-3 flex flex-col gap-2.5">
            {CS_REPORT_ITEMS.map((item) => (
              <li key={item} className="flex items-start gap-2 leading-snug">
                <Checkbox />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Support Tickets */}
      <div>
        <button
          type="button"
          onClick={() => setTicketsOpen((v) => !v)}
          className="flex w-full items-center justify-between text-sm font-bold text-gray-800"
        >
          <span>Support Tickets</span>
          <Chevron open={ticketsOpen} />
        </button>
        {ticketsOpen && (
          <ul className="mt-3 flex flex-col gap-2.5">
            {CS_SUPPORT_TICKET_ITEMS.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <Checkbox />
                <button
                  type="button"
                  onClick={onSelectTickets}
                  className="text-left transition hover:text-[#00c2a8]"
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Live Chat */}
      <div>
        <button
          type="button"
          onClick={onSelectLiveChat}
          className="text-sm font-bold text-gray-900 transition hover:text-[#00c2a8]"
        >
          Live Chat
        </button>
        <button
          type="button"
          onClick={onSelectLiveChat}
          className="mt-2 block pl-3 text-xs font-semibold text-[#00c2a8] transition hover:underline"
        >
          In queue ( 0 )
        </button>
      </div>
    </aside>
  );
};
