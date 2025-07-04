
import { useState } from "react";
import { motion } from "framer-motion";

export default function FitMindBody50() {
  const [email, setEmail] = useState("");
  const [leadDownloaded, setLeadDownloaded] = useState(false);
  const [post, setPost] = useState("");
  const [posts, setPosts] = useState([]);

  const handleDownload = () => {
    if (email.includes("@")) {
      setLeadDownloaded(true);
    }
  };

  const handlePostSubmit = () => {
    if (post.trim() !== "") {
      setPosts([{ content: post, date: new Date().toLocaleString() }, ...posts]);
      setPost("");
    }
  };

  return (
    <div className="p-6 grid gap-6 max-w-4xl mx-auto">
      <motion.h1 
        className="text-3xl font-bold text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        FitMindBody50 Portal
      </motion.h1>

      <div className="bg-white shadow rounded p-4 space-y-4">
        <h2 className="text-xl font-semibold">Download Your Spartan RESET Checklist</h2>
        <input
          type="email"
          placeholder="Enter your email"
          className="border p-2 rounded w-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
          onClick={handleDownload}
          disabled={leadDownloaded}
        >
          {leadDownloaded ? "Checklist Downloaded" : "Download Now"}
        </button>
      </div>

      <div className="bg-white shadow rounded p-4 space-y-4">
        <h2 className="text-xl font-semibold">Daily Spartan Post Scheduler</h2>
        <textarea
          className="border p-2 rounded w-full"
          placeholder="Write your daily FitMindBody50 post..."
          value={post}
          onChange={(e) => setPost(e.target.value)}
        />
        <button
          className="bg-green-600 text-white px-4 py-2 rounded"
          onClick={handlePostSubmit}
        >
          Post
        </button>
      </div>

      {posts.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Scheduled Posts</h3>
          {posts.map((p, idx) => (
            <div key={idx} className="bg-gray-100 p-3 rounded">
              <p className="text-sm text-gray-600">{p.date}</p>
              <p className="mt-1">{p.content}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
