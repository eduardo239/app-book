const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50 max-h-screen">
      <div className="bg-white rounded-lg overflow-y-scroll max-h-full">
        <div className="px-6 py-4 ">{children}</div>
        <div className="px-6 py-4 bg-gray-100 flex justify-end">
          <button
            className="text-gray-500 hover:text-gray-800 font-semibold"
            onClick={onClose}
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};
export default Modal;
