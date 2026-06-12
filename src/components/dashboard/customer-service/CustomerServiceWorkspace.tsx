"use client";

import { useState } from "react";
import {
  CS_CHATS_LIST,
  CS_TICKETS_LIST,
} from "@/constants/customerService";
import { CustomerServiceSidebar } from "./CustomerServiceSidebar";
import { CustomerServiceStatsBar } from "./CustomerServiceStatsBar";
import { CSListView } from "./CSListView";
import { LiveChatView } from "./LiveChatView";

type View = "chats-list" | "chat-detail" | "tickets-list";

export const CustomerServiceWorkspace = () => {
  const [view, setView] = useState<View>("chats-list");
  const [selectedChatIdx, setSelectedChatIdx] = useState<number>(3);
  const [selectedTicketIdx, setSelectedTicketIdx] = useState<number>(3);

  const statsMode = view === "tickets-list" ? "tickets" : "chats";

  return (
    <div className="flex flex-1 bg-white">
      <div className="w-[200px] flex-shrink-0 border-r border-gray-200">
        <CustomerServiceSidebar
          onSelectLiveChat={() => setView("chats-list")}
          onSelectTickets={() => setView("tickets-list")}
        />
      </div>

      <div className="flex flex-1 flex-col">
        <CustomerServiceStatsBar mode={statsMode} />

        {view === "chats-list" && (
          <CSListView
            title={`Live chats List ( 80 )`}
            items={CS_CHATS_LIST}
            selectedIndex={selectedChatIdx}
            onSelectItem={(_item, idx) => {
              setSelectedChatIdx(idx);
              setView("chat-detail");
            }}
          />
        )}

        {view === "tickets-list" && (
          <CSListView
            title={`Tickets List ( 80 )`}
            items={CS_TICKETS_LIST}
            selectedIndex={selectedTicketIdx}
            onSelectItem={(_item, idx) => setSelectedTicketIdx(idx)}
          />
        )}

        {view === "chat-detail" && (
          <LiveChatView onBack={() => setView("chats-list")} />
        )}
      </div>
    </div>
  );
};
