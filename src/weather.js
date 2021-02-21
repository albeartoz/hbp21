// import React, { useEffect } from 'react';

// function Weather() {
//   const [error, setError] = useState(null);
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [items, setItems] = useState([]);

//   // Note: the empty deps array [] means
//   // this useEffect will run once
//   // similar to componentDidMount()
//   useEffect(() => {
//     fetch('https://api.openweathermap.org/data/2.5/weather?q=Boston&appid=' + process.env.REACT_APP_API_KEY)
//       .then(res => res.json())
//       .then(
//         (result) => {
//           setIsLoaded(true);
//           setItems(result);
//         },
//         // Note: it's important to handle errors here
//         // instead of a catch() block so that we don't swallow
//         // exceptions from actual bugs in components.
//         (error) => {
//           setIsLoaded(true);
//           setError(error);
//         }
//       )
//   }, [])

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   } else if (!isLoaded) {
//     return <div>Loading...</div>;
//   } else {
//     return (
//       <h1>{items.toString()}</h1>
//     )
//   }
// }

// class APIDisp extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       error: null,
//       isLoaded: false,
//       items: []
//     };
//   }
//   // use hooks instead
//   componentDidMount() {
//     fetch('https://api.openweathermap.org/data/2.5/weather?q=Boston&appid=' + process.env.REACT_APP_API_KEY)
//     .then(res => res.json())
//     .then(
//       (result) => {
//         this.setState({
//           isLoaded: true,
//           items: result
//         });
//       },
//       (error) => {
//         this.setState({
//           isLoaded: true,
//           error
//         });
//       }
//     )
//   }
//   render() {
//     const {error, isLoaded, items} = this.state;
//     console.log(items)
//     if (error) {
//       return <div>Error: {error.message}</div>;
//     }
//     else if (!isLoaded) {
//       return <div>Loading...</div>
//     }
//     else {
//       return items;
//     }
//   }
// }

// export default Weather;