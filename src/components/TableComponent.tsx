import React from 'react';

interface LogRow {
  time: string;
  pid: number;
  tag: string;
  message: string;
}

const logData: LogRow[] = [
  { time: "2025-02-20T08:00:00Z", pid: 101, tag: "INFO", message: "App initialized successfully." },
  { time: "2025-02-20T08:05:30Z", pid: 102, tag: "DEBUG", message: "User logged in and dashboard loaded." },
  { time: "2025-02-20T08:10:45Z", pid: 103, tag: "WARN", message: "API response time exceeded threshold." },
  { time: "2025-02-20T08:15:00Z", pid: 104, tag: "ERROR", message: "Failed to fetch data from server." },
  { time: "2025-02-20T08:20:15Z", pid: 101, tag: "INFO", message: "User logged out successfully." },
];

const TableComponent: React.FC = () => {
  return (
    <div className="overflow-x-auto">
      <input type='text' name='search-log' value="search logs" className='border-1 w-full mb-3' />
      <table className="min-w-full bg-white border border-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 border-b text-start">Time</th>
            <th className="px-4 py-2 border-b text-start">PID</th>
            <th className="px-4 py-2 border-b text-start">Tag</th>
            <th className="px-4 py-2 border-b text-start">Message</th>
          </tr>
        </thead>
        <tbody>
          {logData.map((row) => (
            <tr key={row.pid} className="hover:bg-gray-50">
              <td className="px-4 py-2 border-b">{row.time}</td>
              <td className="px-4 py-2 border-b">{row.pid}</td>
              <td className="px-4 py-2 border-b">{row.tag}</td>
              <td className="px-4 py-2 border-b">{row.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
