import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';
import { resetState } from '../state/utils';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = resetState();
    this.handleBtnClick = this.handleBtnClick.bind(this);
  }

  handleBtnClick(btnName) {
    this.setState((state) => calculate(state, btnName));
  }

  render() {
    const { total, next, operator } = this.state;

    return (
      <div className="container text-center" data-testid="app">
        <h1 className="mt-3 mb-4">Calculator</h1>
        <div className="row justify-content-center">
          <div className="col-sm-10 col-md-7 col-lg-5 col-xl-4">
            <div className="card calc-card border-0">
              <div className="card-body py-5">
                <Display total={total.toString()} next={next.toString()} operator={operator} />
                <ButtonPanel btnClickHandler={this.handleBtnClick} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
