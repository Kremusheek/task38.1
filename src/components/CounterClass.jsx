import React, { Component } from 'react';

class CounterClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  increment = () => {
    this.setState(prev => ({ count: prev.count + 1 }));
  };

  decrement = () => {
    this.setState(prev => ({ count: prev.count - 1 }));
  };

  componentDidMount() {
    console.log('CounterClass змонтовано');
  }

  componentDidUpdate() {
    console.log('CounterClass оновлено');
  }

  componentWillUnmount() {
    console.log('CounterClass буде видалено');
  }

  render() {
    return (
      <div>
        <h2>Класовий компонент</h2>
        <p>Лічильник: {this.state.count}</p>
        <button onClick={this.increment}>Збільшити</button>
        <button onClick={this.decrement}>Зменшити</button>
      </div>
    );
  }
}

export default CounterClass;
