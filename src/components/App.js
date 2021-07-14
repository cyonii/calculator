import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

const App = () => (
  <div className="container text-center">
    <h1 className="mt-3 mb-4">Calculator</h1>
    <div className="row justify-content-center">
      <div className="col-sm-8 col-md-4">
        <div className="card calc-card border-0">
          <div className="card-body py-5">
            <Display />
            <ButtonPanel />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default App;
