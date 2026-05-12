export const MerchantIllustration = () => (
  <div className="flex h-full min-h-[220px] w-full flex-col gap-2 overflow-hidden rounded-xl bg-white p-3 text-[10px] text-gray-700">
    {/* Tabs */}
    <div className="flex items-center gap-1.5">
      <span className="rounded bg-[#0d4f47] px-2 py-1 text-[9px] font-bold text-white">
        Daily Today
      </span>
      <span className="rounded px-2 py-1 text-[9px] font-medium text-gray-500">
        Monthly Sales
      </span>
      <span className="rounded px-2 py-1 text-[9px] font-medium text-gray-500">
        Custom
      </span>
    </div>

    {/* Mini KPIs */}
    <div className="grid grid-cols-2 gap-1.5">
      <div className="rounded border border-gray-100 px-2 py-1.5">
        <p className="text-[8px] text-gray-400">Sales Today</p>
        <p className="text-[11px] font-bold text-gray-900">Rp 1.230K</p>
      </div>
      <div className="rounded border border-gray-100 px-2 py-1.5">
        <p className="text-[8px] text-gray-400">Traffic Sources</p>
        <p className="text-[11px] font-bold text-[#00c2a8]">+82.1%</p>
      </div>
    </div>

    {/* Mini bar chart */}
    <div className="flex flex-1 items-end gap-1 rounded border border-gray-100 p-2">
      {[40, 65, 50, 80, 60, 90, 70, 55, 75, 85].map((h, i) => (
        <div
          key={i}
          className="flex-1 rounded-t bg-gradient-to-t from-[#00c2a8] to-[#5fd9c4]"
          style={{ height: `${h}%` }}
        />
      ))}
    </div>

    {/* Table rows */}
    <div className="flex flex-col gap-1">
      {[
        { label: 'Total Orders', value: '128', delta: '+12%' },
        { label: 'Avg Rating', value: '4.8', delta: '+0.2' },
        { label: 'Visits', value: '2.1K', delta: '+18%' },
      ].map((row) => (
        <div
          key={row.label}
          className="flex items-center justify-between rounded bg-gray-50 px-2 py-1"
        >
          <span className="text-[9px] text-gray-500">{row.label}</span>
          <span className="text-[9px] font-bold text-gray-900">{row.value}</span>
          <span className="text-[8px] font-semibold text-[#00c2a8]">{row.delta}</span>
        </div>
      ))}
    </div>
  </div>
);
