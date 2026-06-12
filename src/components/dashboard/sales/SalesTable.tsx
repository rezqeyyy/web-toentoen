import { SALES_COLUMNS, SALES_ROWS, type SalesRow } from "@/constants/sales";

const Cell = ({ lines }: { lines: [string, string] }) => (
  <td className="border-r-2 border-b-2 border-white bg-[#00c2a8] px-5 py-4 align-top text-sm text-white last:border-r-0">
    <div>{lines[0]}</div>
    <div>{lines[1]}</div>
  </td>
);

const ROW_KEYS: (keyof SalesRow)[] = [
  "merchants",
  "shopOwned",
  "status",
  "monthlyGoals",
  "weeklyGoals",
  "dailyGoals",
];

export const SalesTable = () => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            {SALES_COLUMNS.map((col) => (
              <th
                key={col}
                className="border-r-2 border-b-2 border-white bg-[#1aaa92] px-5 py-4 text-left text-base font-bold text-white last:border-r-0"
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {SALES_ROWS.map((row, idx) => (
            <tr key={idx}>
              {ROW_KEYS.map((key) => (
                <Cell key={key} lines={row[key]} />
              ))}
            </tr>
          ))}
          {/* Empty trailing row (just bg color, no text) */}
          <tr>
            {ROW_KEYS.map((key) => (
              <td
                key={key}
                className="h-12 border-r-2 border-white bg-[#00c2a8] last:border-r-0"
              />
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};
