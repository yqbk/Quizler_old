import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Bar } from 'react-native-progress';
import SwipeCards from 'react-native-swipe-cards';
import FlipCard from 'react-native-flip-card';
import { skipLogin } from './../../state/auth/actions';
import styles from './style';
import ActionLink from '../../components/action-link/ActionLink';

const URL = 'https://spreadsheets.google.com/feeds/list/1I6rcAeCSN6q0mES39f4RXsI1FDxVEq76H48jaWvaqJY/od6/public/basic?alt=json';
const Data = [];

async function getDataFromApi() {
    console.log('hereee');
    try {
        const response = await fetch(URL);
        const responseJson = await response.json();

        responseJson.feed.entry.forEach((item, index) => {
            Data.push({ id: index, question: item.title.$t, answear: item.content.$t.substring(8) });
        });
    } catch (error) {
        console.error(error);
    }

    return Data;
}

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

const Card = React.createClass({
    render() {

    },
});

class Main extends React.Component {

    constructor(props) {
        super(props);

        this.getData = this.getData.bind(this);
        this.renderNoMoreCards = this.renderNoMoreCards.bind(this);
        this.renderCard = this.renderCard.bind(this);
        this.handleNope = this.handleNope.bind(this);
        this.handleYup = this.handleYup.bind(this);
        this.handleMaybe = this.handleMaybe.bind(this);

        this.getData();

        this.state = {
            isLoading: true,
            outOfCards: false,
            completed: 0,
            nrOfQuestions: 0,
        };
    }

    getData() {
        this.Cards = getDataFromApi().then((x) => {
            this.setState({
                isLoading: false,
                cards: x,
                outOfCards: false,
                nrOfQuestions: x.length,
            });
        });
    }

    handleYup(card) {
        console.log(`Yup for ${card.text}`);

        this.setState({
            completed: this.state.completed + 1,
        });
    }
    handleNope(card) {
        const shuffled = shuffle([...this.state.cards]);

        console.log(shuffled[0]);

        this.setState({
            cards: shuffled,
        });

        console.log(`Nope for ${card.text}`);
    }
    handleMaybe(card) {
        this.setState({
            cards: [...this.state.cards, card],
        });

        console.log(`Maybe for ${card.text}`);
    }

    renderNoMoreCards() {
        return (
            <View style={styles.noMoreCards}>
                <Text>No more questions!</Text>
                <ActionLink text={'Start over?'} onPress={() => this.getData()} />
            </View>
        );
    }

    renderCard(card) {
        return (
            <View style={styles.card}>
                <FlipCard
                  style={styles.flipCard}
                  friction={6}
                  perspective={1000}
                  flipHorizontal
                  flipVertical={false}
                  flip={false}
                  clickable
                  onFlipped={(isFlipped) => {}}
                >

                    <View style={styles.face}>
                        <Text style={styles.text}>{card.question}</Text>
                    </View>
                    <View style={styles.back}>
                        <Text style={styles.text}>{card.answear}</Text>
                        {!this.state.completed && <View>
                            <Text style={styles.smallText}>If you know the answear swipe the card to the
                <Text style={{ color: 'blue' }}>
                  right.
                </Text>
                            </Text>
                            <Text style={styles.smallText}> If you would like to repeat this question some more swipe to the
                <Text style={{ color: 'red' }}>
                  left.
                </Text>
                            </Text>
                        </View>}
                    </View>
                </FlipCard>
            </View>
        );
    }

    render() {
        const progress = this.state.completed / this.state.nrOfQuestions;

        return (
            <View style={styles.container}>
                <Text style={styles.header}>Quizler</Text>
                {!this.state.isLoading &&
                <SwipeCards
                  cards={this.state.cards}

                  renderCard={cardData => this.renderCard(cardData)}
                  renderNoMoreCards={() => this.renderNoMoreCards()}

                  handleYup={this.handleYup}
                  handleNope={this.handleNope}
                  handleMaybe={this.handleMaybe}
                  hasMaybeAction
                />
              }
                <Bar progress={progress || 0} />
                <Text style={styles.progressBarText}>{this.state.completed}/{this.state.nrOfQuestions}</Text>
            </View>
        );
    }
}

const mapDispatchToProps = {
    skipLogin,
};

export default connect(null, mapDispatchToProps)(Main);
