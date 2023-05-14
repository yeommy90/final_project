import { faEllipsisV, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dropdown } from "react-bootstrap";

const CommentItem = ({comments, handleSpoilerReport, handleProfanityReport, toggleExpanded, isCommentLiked, handleLikesClick, expandedComments, member_id}) => {

  return (
    <>
      {comments && comments.length > 0 ? (comments
        .filter((comment) => comment.content && comment.content.trim() !== '')
        .slice(0, 3)
        .map((comment) => (
        <div key={comment.member_id} className="comment-box p-3 mb-3">
          <div className="d-flex align-items-center">
            <img src={`/profiles/${comment.profile_path}`} className="profile-pic rounded-circle mx-3"/>
            <div className="ml-1">
              <div className="mt-1" style={{color:'gray', fontSize:'1.1em'}}>{comment.nickname}</div>
              <div style={{color:'#e75757', fontSize:'0.9em'}}>★ {comment.rating !== 0 ? comment.rating : '평가없음'}</div>
            </div>
            {comment.member_id != member_id && (
              <div className="ml-auto mr-2">
              <Dropdown>
                <Dropdown.Toggle variant="link" size="sm" style={{outline: 'none', boxShadow: 'none'}}>
                  <FontAwesomeIcon icon={faEllipsisV} className="m-0" />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => {handleSpoilerReport(comment.member_id)}}>스포일러 신고</Dropdown.Item>
                  <Dropdown.Item onClick={() => {handleProfanityReport(comment.member_id)}}>욕설 신고</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            )}
          </div>
          {comment.state === 2 ? (
            <p className={`comments-content ${expandedComments.includes(comment.member_id) ? 'expanded' : ''} px-3 pt-4`} onClick={() => toggleExpanded(comment.member_id)}>
              {expandedComments.includes(comment.member_id) ? comment.content : (<div className="comments-spoiler">스포일러 주의!</div>)}  
            </p>
          ) : (
            <>
              <p className={`comments-content ${expandedComments.includes(comment.member_id) ? 'expanded' : ''} px-3 pt-4`}>{comment.content}</p>
                {comment.content.split('\n').length > 3 && 
                  <div className="more-button mx-3 mb-3" onClick={() => toggleExpanded(comment.member_id)}>
                    {expandedComments.includes(comment.member_id) ? 'less' : 'more'}
                  </div>
                }
            </>
          )}
          <div className="d-flex justify-content-between mt-3">
            <span>
              <FontAwesomeIcon icon={faThumbsUp} className="mr-1 ml-3" style={isCommentLiked(comment.member_id) ? { color: '#fc8080', cursor: 'pointer' } : { cursor: 'pointer' }} onClick={() => handleLikesClick(comment.member_id)} />
              <span className="pt-2 pl-1" style={isCommentLiked(comment.member_id) ? { color: '#fc8080' } : {}}>{comment.likes}</span>
            </span>
          </div>
        </div>
      ))) : (<p className="d-flex justify-content-center py-5">작성된 코멘트가 없습니다.</p>)}
    </>
  )
}

export default CommentItem;