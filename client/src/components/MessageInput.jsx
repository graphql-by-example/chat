function MessageInput({ onSend }) {
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      onSend(event.target.value);
      event.target.value = '';
    }
  };

  return (
    <div className="box">
      <div className="control">
        <input className="input" type="text" placeholder="Say something..."
          onKeyDown={handleKeyDown}
        />
      </div>
    </div>
  );
}

export default MessageInput;
