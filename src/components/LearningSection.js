import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function LearningSection() {
  return (
    <div className='cards' style={{ padding: "1px 1px" }} id='learn'>
      <div className="w3-row-padding w3-center" style={{ marginTop: 64 }}>
        <div class="w3-padding-16">
          <span class="w3-xlarge w3-border-teal w3-bottombar">Learning</span>
        </div>
      </div>
      
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={require('../images/python.jpg')}
              text='Learn the basics of Programming with this Python 101 course'
              label='Programming'
              path='/'
            />
            <CardItem
              src={require('../images/java.jpg')}
              text='Learn Object Oriented Programming with Java'
              label='Programming'
              path='/'
            />
            <CardItem
              src={require('../images/github.jpg')}
              text='Learn the ins and outs of version control in GitHub'
              label='Version Control'
              path='/'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={require('../images/webdev.jpg')}
              text='Learn HTML CSS and JavaScript'
              label='Web Development'
              path='/services'
            />
            <CardItem
              src={require('../images/ml.jpg')}
              text='Learn how to leverage TensorFlow'
              label='Machine Learning'
              path='/products'
            />
            <CardItem
              src={require('../images/c++.jpg')}
              text='Learn embedded systems with C++'
              label='Embedded Systems'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default LearningSection;
