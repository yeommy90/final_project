import { NavLink } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";

const CommentPage = ({ comments, handleAuthShow, memberLikes, fetchComments }) => {
	if (!comments) {
    return <NavLink to="/" />;
  }

	return (
		<div className="section">
			<Container>
			<Row className="my-4">
          <Col md="2">
					<div className="d-flex justify-content align-items-center">
					{comments.map((comment) => (
						<div key={comment.member_id}>
							{comment.content}
						</div>
					))}
					</div>
          </Col>
        </Row>
			</Container>
		</div>
	)
}

export default CommentPage;