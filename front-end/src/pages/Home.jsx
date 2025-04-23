import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import EmailGenCard from "../components/EmailGenCard";
import { Image } from "../common/image";
import ButtonSection from "../components/ButtonSection";
import axios from "axios";
import EmailCard from "../components/EmailCard";
import Loader from "../components/Loader";

function Home() {
  const [email, setEmail] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  const generateEmail = async () => {
    try {
      const res = await axios.get("http://localhost:5000/generate-email");
      setEmail(res.data.address);
      console.log(res.data.address);
      localStorage.setItem("locEmail", JSON.stringify(res.data.address));
    } catch (error) {
      console.error("Error generating email:", error);
    }
  };

  const fetchMessages = async () => {
    try {
      const res = await axios.get("http://localhost:5000/messages");
      setMessages(res.data);
      console.log(res.data);
      localStorage.setItem("allMails", JSON.stringify(res.data));
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  useEffect(() => {
    const locemail = JSON.parse(localStorage.getItem("locEmail"));
    const allMails = JSON.parse(localStorage.getItem("allMails"));
    if (!locemail) {
      return;
    } else {
      setEmail(JSON.parse(localStorage.getItem("locEmail")));
      if (!allMails) {
        setMessages([]);
      } else {
        setMessages(JSON.parse(localStorage.getItem("allMails")));
      }
    }
  }, []);

  useEffect(() => {
    if (email) {
      fetchMessages();
      const interval = setInterval(fetchMessages, 5000);
      return () => clearInterval(interval);
    }
  }, [email]);

  const handleDelete = () => {
    console.log("Delete");
    setEmail("");
    setMessages([]);
    localStorage.removeItem("locEmail");
    localStorage.removeItem("allMails");
  };

  const handleRefresh = () => {
    console.log("Refresh");
  };

  const handleChange = () => {
    console.log("Change");
    localStorage.removeItem("locEmail");
    localStorage.removeItem("allMails");
    generateEmail();
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      alert("Text copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="w-full flex flex-col gap-5 min-h-screen mb-12">
      {/* Header Section */}
      <div
        style={{ backgroundImage: `url(${Image.Header})` }}
        className="w-full min-h-fit bg-contain flex flex-col gap-6 items-center text-white"
      >
        <Navbar />
        <EmailGenCard
          email={email}
          setEmail={setEmail}
          generateEmail={generateEmail}
        />
      </div>

      <ButtonSection
        onChange={handleChange}
        onCopy={handleCopy}
        onDelete={handleDelete}
        onRefresh={handleRefresh}
      />
      <EmailCard
        messages={messages}
        loading={loading}
        setLoading={setLoading}
      />
    </div>
  );
}

export default Home;

{
  /* Button Section
      <ButtonSection
        onCopy={handleCopy}
        onChange={handleChange}
        onRefresh={handleRefresh}
        onDelete={handleDelete}
      /> */
}
