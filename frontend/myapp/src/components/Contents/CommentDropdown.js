import { useEffect } from 'react';

const CommentDropdown = ({ isDropdownVisible, setIsDropdownVisible }) => {

  const showEditDeleteDropdown = () => {
    setIsDropdownVisible(true);
  };

  const hideEditDeleteDropdown = () => {
    setIsDropdownVisible(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isDropdownVisible && !event.target.closest('.comment-dropdown')) {
        hideEditDeleteDropdown();
      }
    };

    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isDropdownVisible, hideEditDeleteDropdown]);

  return (
    <div className="comment-dropdown">
      {/* 이전에 작성한 로직을 사용하여 드롭다운 메뉴를 표시합니다. */}
      {isDropdownVisible && (
        <div className="dropdown-menu">
          <button >수정</button>
          <button >삭제</button>
        </div>
      )}
    </div>
  );
};

export default CommentDropdown;
