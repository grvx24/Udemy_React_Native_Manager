import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import firebase from 'firebase';
import Router from './Router';

class App extends Component {
  componentDidMount() {
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    var firebaseConfig = {
      apiKey: 'AIzaSyC8xiB6u_W8i0Pyi2BRlMRr-jiFh46au3w',
      authDomain: 'udemymanager-a2405.firebaseapp.com',
      databaseURL: 'https://udemymanager-a2405.firebaseio.com',
      projectId: 'udemymanager-a2405',
      storageBucket: 'udemymanager-a2405.appspot.com',
      messagingSenderId: '590805448637',
      appId: '1:590805448637:web:1e9a3c14482acfb12404d4',
      measurementId: 'G-9CCR06WDFB',
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
