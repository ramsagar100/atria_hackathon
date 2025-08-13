import React, { useEffect } from "react";

export default function ChatlingBot() {
  useEffect(() => {
    // Create config first
    window.chtlConfig = {
      chatbotId: "8235325459",
    };

    // Create script dynamically
    const script = document.createElement("script");
    script.async = true;
    script.setAttribute("data-id", "8235325459");
    script.id = "chtl-script";
    script.src = "https://chatling.ai/js/embed.js";

    document.body.appendChild(script);

    // Cleanup on unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null; // No visible UI needed — Chatling injects its own widget
}
