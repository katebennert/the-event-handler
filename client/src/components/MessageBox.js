import React, { useContext, useState } from "react";
import { UserContext } from "../context/user";
import '../styles/EventShow.css';
import { FaPaperPlane } from 'react-icons/fa';

function MessageBox({ comments, event, onSetComments }) {

    const { user } = useContext(UserContext);

    const [newComment, setNewComment] = useState({
        body: "",
        event_id: event.id
    });

    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    function handleChange(e) {
        const name = e.target.name;
        let value = e.target.value;

        setNewComment({
            ...newComment,
            [name]: value
        });
    }

    function handleNewCommentSubmit(e) {
        e.preventDefault();
        setIsLoading(true);

        fetch("/comments", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newComment),
        }).then((r) => {
            if (r.ok) {
                r.json().then(newCommentData => {
                    setIsLoading(false);
                    onSetComments(newCommentData);
                    setNewComment({...newComment, body: ""});
            });
            } else {
                r.json().then((err) => setErrors(err.errors));
            }
        });
    }
    
    return (
        <div className="message-box">
            <div className="message-container">
                {comments.map(c => 
                    <p><strong className={c.user_email === user.email ? "my-comment" : "your-comment"}>{c.user_name ? c.user_name : c.user_email}</strong>: {c.body}</p>
                )}
            </div>
        
            <div className="message-form-container">
                <form className="message-form" onSubmit={handleNewCommentSubmit} >
                    <input
                        type="text"
                        name="body"
                        autoComplete="off"
                        value={newComment.body}
                        onChange={handleChange}
                        placeholder="Send a message"
                    />
                    <button type="submit" className="send-button"><FaPaperPlane /></button>
                </form>
            </div>
        </div>
    )
}

export default MessageBox;