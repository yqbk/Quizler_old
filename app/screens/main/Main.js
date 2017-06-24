import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import SwipeCards from 'react-native-swipe-cards';
import FlipCard from 'react-native-flip-card';
import { skipLogin } from './../../state/auth/actions';
import styles from './style';

const URL = 'https://spreadsheets.google.com/feeds/list/1I6rcAeCSN6q0mES39f4RXsI1FDxVEq76H48jaWvaqJY/od6/public/basic?alt=json';
const Data = [];

async function getDataFromApi() {
    try {
        const response = await fetch(URL);
        const responseJson = await response.json();

        responseJson.feed.entry.forEach((item, index) => {
            Data.push({ id: index, question: item.title.$t, answear: item.content.$t.substring(8,) });
        });

    } catch (error) {
        console.error(error);
    }

    return Data;
}

const Card = React.createClass({
    render() {
        return (
            <View style={styles.card}>
                <FlipCard style={styles.flipCard}
                          friction={6}
                          perspective={1000}
                          flipHorizontal={true}
                          flipVertical={false}
                          flip={false}
                          clickable={true}
                          onFlipped={(isFlipped)=>{console.log('isFlipped', isFlipped)}}
                >

                    <View style={styles.face}>
                        <Text style={styles.text}>{this.props.question}</Text>
                    </View>
                    <View style={styles.back}>
                        <Text style={styles.text}>{this.props.answear}</Text>
                    </View>
                </FlipCard>
            </View>
        );
    },
});

const NoMoreCards = React.createClass({
    render() {
        return (
            <View style={styles.noMoreCards}>
                <Text>No more cards</Text>
            </View>
        );
    },
});

const Cards = [
  { name: '2', image: 'https://media.giphy.com/media/irTuv1L1T34TC/giphy.gif' },
  { name: '3', image: 'https://media.giphy.com/media/LkLL0HJerdXMI/giphy.gif' },
  { name: '4', image: 'https://media.giphy.com/media/fFBmUMzFL5zRS/giphy.gif' },
  { name: '5', image: 'https://media.giphy.com/media/oDLDbBgf0dkis/giphy.gif' },
  { name: '6', image: 'https://media.giphy.com/media/7r4g8V2UkBUcw/giphy.gif' },
  { name: '7', image: 'https://media.giphy.com/media/K6Q7ZCdLy8pCE/giphy.gif' },
  { name: '8', image: 'https://media.giphy.com/media/hEwST9KM0UGti/giphy.gif' },
  { name: '9', image: 'https://media.giphy.com/media/3oEduJbDtIuA2VrtS0/giphy.gif' },
];

class Main extends React.Component {

    constructor(props) {
        super(props);

        this.Cards = getDataFromApi().then((x) => {
            this.setState({isLoading: false, cards: x, outOfCards: false})
        });

        this.state = {
          isLoading: true,
          outOfCards: false,
        };
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
              {!this.state.isLoading &&
              <SwipeCards
                cards={this.state.cards}

                renderCard={cardData => <Card {...cardData} />}
                renderNoMoreCards={() => <NoMoreCards />}

                handleYup={this.handleYup}
                handleNope={this.handleNope}
                handleMaybe={this.handleMaybe}
                hasMaybeAction
              />
              }
            </View>
        );
    }
}

const mapDispatchToProps = {
    skipLogin,
};

export default connect(null, mapDispatchToProps)(Main);
