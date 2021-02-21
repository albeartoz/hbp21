import React from 'react';

class APIDisp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }
  // use hooks instead
  componentDidMount() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Boston&appid=' + process.env.REACT_APP_API_KEY)
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          items: result
        });
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )
  }
  render() {
    const {error, isLoaded, items} = this.state;
    console.log(items)
    if (error) {
      return <div>Error: {error.message}</div>;
    }
    else if (!isLoaded) {
      return <div>Loading...</div>
    }
    else {
      const lis = Object.keys(items).map((key, index) => <li>{key}: {items[key].toString()}</li>);
      console.log(process.env.REACT_APP_API_KEY);
      return <ul>{lis}</ul>;
    }
  }
}

export default APIDisp;