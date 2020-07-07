import * as React from 'react';
import { addCount, subCount } from '../action';
import { connect } from 'react-redux';

interface IProps {
  count: number;
  onAdd: any;
  onSub: any;
}
class App extends React.Component<IProps> {
  render() {
    return (
      <div>
        <button onClick={this.onClickAddCount}>증가</button>
        <button onClick={this.onClickSubCount}>감소</button>
        <br />
        {this.props.count}
      </div>
    );
  }
  private onClickAddCount = () => {
    this.props.onAdd('id');
  };
  private onClickSubCount = () => {
    this.props.onSub('id');
  };
}

const mapStateToProps = (state) => {
  return {
    count: state.counter.count,
  };
};

const mapDispatchToProps = (Dispatch) => {
  return {
    onAdd: (id) => {
      return Dispatch(addCount({ id: '' }));
    },
    onSub: (id) => {
      return Dispatch(subCount({ id: '' }));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
