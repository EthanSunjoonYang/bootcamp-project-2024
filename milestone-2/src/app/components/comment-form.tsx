"use client";

import React, { useState } from "react";

export default function CommentForm({ slug }: { slug: string }) {
    const [user, setUser] = useState<string>("");
    const [comment, setComment] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setLoading(true);
        setError(null);
        setSuccess(null);

        // Validate input
        if (!user.trim() || !comment.trim()) {
            setError("You need to enter both a name and a comment.");
            setLoading(false);
            return;
        }

        try {
            const res = await fetch(`/api/blogs/${slug}/comment`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ user, comment }),
            });

            const contentType = res.headers.get("content-type");

            // Check if the response is JSON
            if (contentType && contentType.includes("application/json")) {
                const data = await res.json();

                if (res.ok) {
                    setSuccess("Comment has been submitted successfully.");
                    setUser("");
                    setComment("");
                } else {
                    setError(data.error || "Something went wrong. Please try again.");
                }
            } else {
                const errorText = await res.text();
                console.error("Non-JSON response:", errorText);
                setError("Server returned an invalid response. Please contact support.");
            }
        } catch (err) {
            console.error("Error submitting comment:", err);
            setError("An unexpected error occurred. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {error && <p style={{ color: "red" }}>{error}</p>}
            {success && <p style={{ color: "green" }}>{success}</p>}
            <div>
                <label htmlFor="user">Name:</label>
                <input
                    type="text"
                    id="user"
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                    disabled={loading}
                    required
                />
            </div>
            <div>
                <label htmlFor="comment">Comment:</label>
                <textarea
                    id="comment"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    disabled={loading}
                    required
                ></textarea>
            </div>
            <button type="submit" disabled={loading} className = "button">
                {loading ? "Submitting..." : "Submit Comment"}
            </button>
        </form>
    );
}