import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import EmailDetails from "./EmailDetails";
import axios from "axios";
import Loader from "./Loader";

function EmailCard({ messages, loading, setLoading }) {
  const [selectedMessage, setSelectedMessage] = useState("");
  const [showId, setShowId] = useState("");
  const navigate = useNavigate();

  const fetchMessage = async (id) => {
    if (showId == id) {
      setSelectedMessage("");
      setShowId("");
    } else {
      try {
        setLoading(true);
        const res = await axios.get(`https://tempmailclone.onrender.com/messages/${id}`);
        setSelectedMessage(res.data);
        console.log(selectedMessage);
        setLoading(false);
        setShowId(id);
      } catch (error) {
        console.error("Error fetching message:", error);
      }
    }
  };

  return (
    <div className="w-[50%] mx-auto shadow-lg overflow-hidden flex rounded-lg justify-center">
      <div className="w-full border border-gray-200 rounded-lg p-4 shadow-sm bg-gray-50">
        <h2 className="text-lg font-semibold mb-3">📥 Inbox</h2>
        <div className="space-y-3 max-h-96 overflow-y-auto">
          {messages.length === 0 ? (
            <p className="text-sm text-gray-500">No messages received yet.</p>
          ) : (
            messages.map((msg) => (
              <div
                key={msg.id}
                className="bg-white p-3 rounded-md shadow cursor-pointer hover:bg-blue-50 transition-all"
                onClick={() => fetchMessage(msg.id)}
              >
                <p className="text-blue-700 font-medium text-sm">
                  From: {msg.from.name || msg.from.address}
                </p>
                <p className="text-gray-800 text-sm font-semibold truncate">
                  Subject: {msg.subject || "No subject"}
                </p>
                <p className="text-xs text-gray-500">
                  {new Date(msg.createdAt).toLocaleString()}
                </p>
              </div>
            ))
          )}
        </div>
        {(loading == true && selectedMessage.id == "") || null ? (
          <Loader />
        ) : selectedMessage && selectedMessage.id === showId ? (
          <EmailDetails selectedMessage={selectedMessage} />
        ) : null}
      </div>
    </div>
  );
}

export default EmailCard;
