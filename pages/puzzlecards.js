import React, { Component } from 'react';
import { Card, Button } from 'antd';
import { connect } from 'dva';

const namespace = 'puzzlecards';

const mapStateToProps = state => {
  console.log('state>>', state);
  const cardList = state[namespace];
  return {
    cardList
  };
};

@connect(mapStateToProps)
export default class PuzzleCardsPage extends Component {
  // addNewCard = () => {
  //   this.setState(prevState => {
  //     const prevCardList = prevState.cardList;
  //     this.counter += 1;
  //     const card = {
  //       id: this.counter,
  //       setup: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
  //       punchline: 'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  //     };
  //     return {
  //       cardList: prevCardList.concat(card)
  //     };
  //   });
  // };

  render() {
    const { cardList } = this.props;
    console.log('cardList>>', cardList);
    return (
      <div>
        {cardList &&
          cardList.map(card => (
            <Card key={card.id}>
              <div>Q: {card.setup}</div>
              <div>
                <strong>A: {card.punchline}</strong>
              </div>
            </Card>
          ))}
        {/* <div>
          <Button onClick={this.addNewCard}> 添加卡片 </Button>
        </div> */}
      </div>
    );
  }
}
