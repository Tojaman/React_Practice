import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "토자맨",
        comment: "안녕 난 토자맨이야",
    },
    {
        name: "토토맨",
        comment: "반갑다 난 토토맨이야",
    },
    {
        name: "토토",
        comment: "그래그래 반갑다",
    },
];

function CommentList(props) {
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment} />
                )
            })}
            {/* <Comment name={"토자맨"} comment={"안녕 난 토자맨이야."}/>
            <Comment name={"토토맨"} comment={"안녕 난 토토맨이야."}/> */}
        </div>
    );
}

export default CommentList;