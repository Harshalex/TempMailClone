import React from "react";
import { useLocation } from "react-router-dom";

function EmailDetails({ selectedMessage }) {
  console.log(selectedMessage);
  const location = useLocation();
  return (
    <div className="border border-gray-200 rounded-lg p-4 shadow-sm bg-gray-50">
      <h2 className="text-lg font-semibold mb-3">✉️ Message Detail</h2>
      <div className="space-y-2 text-sm">
        <p>
          <strong>From:</strong>{" "}
          {selectedMessage.from.name || selectedMessage.from.address}
        </p>
        <p>
          <strong>To:</strong>{" "}
          {selectedMessage.to.map((t) => t.address).join(", ")}
        </p>
        <p>
          <strong>Subject:</strong> {selectedMessage.subject}
        </p>
        <p>
          <strong>Received:</strong>{" "}
          {new Date(selectedMessage.createdAt).toLocaleString()}
        </p>
        <div
          className="mt-2 p-3 bg-white border rounded text-gray-800"
          dangerouslySetInnerHTML={{
            __html:
              selectedMessage.body ||
              selectedMessage.text ||
              "No content available.",
          }}
        />
      </div>
    </div>
  );
}

export default EmailDetails;
