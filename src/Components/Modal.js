import ReactDOM from 'react-dom';
import './modal.scss';
import Close from '../close-icon.svg';

const Modal = ({ show, close, title, children }) => {
  return ReactDOM.createPortal(
    <>
      {show ? (
        <div
          className={`modalContainer ${show ? 'show' : ''}`}
          onClick={() => close()}
        >
          <div className='modal' onClick={(e) => e.stopPropagation()}>
            <header className='modal_header'>
              <h2 className='modal_header-title'>{title}</h2>
              <button className='close' onClick={() => close()}>
                <img src={Close} alt='close' />
              </button>
            </header>
            <main className='modal_content'>{children}</main>
            <footer className='modal_footer'>
              <button className='modal-close' onClick={() => close()}>
                Cancel
              </button>
              <button className='submit'>submit</button>
            </footer>
          </div>
        </div>
      ) : null}
    </>,
    document.getElementById('modal')
  );
};

export default Modal;
