// import { ReactFragment } from 'react';
import Button from './Button';

const renderBtn = (name, colClass, btnClass = '') => (
  <div className={`${colClass}`}>
    <Button className={btnClass} name={name} />
  </div>
);

const ButtonPanel = () => (
  <>
    <div className="row mb-3">
      {renderBtn('AC', 'col-3')}
      {renderBtn('+/-', 'col-3')}
      {renderBtn('%', 'col-3')}
      {renderBtn('÷', 'col-3', 'btn-primary border-primary')}
    </div>

    <div className="row mb-3">
      {renderBtn('7', 'col-3')}
      {renderBtn('8', 'col-3')}
      {renderBtn('9', 'col-3')}
      {renderBtn('*', 'col-3', 'btn-primary border-primary')}
    </div>

    <div className="row mb-3">
      {renderBtn('4', 'col-3')}
      {renderBtn('5', 'col-3')}
      {renderBtn('6', 'col-3')}
      {renderBtn('-', 'col-3', 'btn-primary border-primary')}
    </div>

    <div className="row mb-3">
      {renderBtn('1', 'col-3')}
      {renderBtn('2', 'col-3')}
      {renderBtn('3', 'col-3')}
      {renderBtn('+', 'col-3', 'btn-primary border-primary')}
    </div>

    <div className="row">
      {renderBtn('0', 'col-6')}
      {renderBtn('.', 'col-3')}
      {renderBtn('=', 'col-3', 'btn-primary border-primary')}
    </div>
  </>
);

export default ButtonPanel;
