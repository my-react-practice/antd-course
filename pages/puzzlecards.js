import React, { Component } from 'react';
import { Card, Button } from 'antd';
import { connect } from 'dva';

const namespace = 'puzzlecards';

const mapStateToProps = state => {
  // console.log('state>>', state);
  const cardList = state[namespace].data;
  return {
    cardList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    didMount: () => {
      dispatch({
        type: `${namespace}/queryInitCards`
      });
    },
    onClickAdd: newCard => {
      const action = {
        type: `${namespace}/addNewCard`,
        payload: newCard
      };
      dispatch(action);
    }
  };
};

@connect(
  mapStateToProps,
  mapDispatchToProps
)
export default class PuzzleCardsPage extends Component {
  componentDidMount() {
    this.props.didMount();
  }

  addNewCard = () => {
    // this.props.onClickAdd({
    //   setup: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    //   punchline: 'here we use dva'
    // });
    this.props.didMount();
  };

  render() {
    const { cardList, dispatch } = this.props;
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
        <div>
          <Button onClick={this.addNewCard}> 添加卡片 </Button>
        </div>
      </div>
    );
  }
}
