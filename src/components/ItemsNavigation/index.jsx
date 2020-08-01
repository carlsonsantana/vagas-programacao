import React from 'react';

import InfiniteScroll from 'react-infinite-scroller';

class ItemsNavigation extends React.Component {
  constructor() {
    super();

    this.state = {
      loadedItems: [],
      hasMoreItems: true
    };
    this.index = 0;
  }

  componentDidUpdate(prevProps) {
    if (prevProps.items.length !== this.props.items.length) {
      this.setState({hasMoreItems: true});
    }
  }

  loadItems() {
    const items = this.props.items;
    const loadedItems = items.slice(0, this.index * 10);
    this.index++;
    this.setState({
      loadedItems,
      hasMoreItems: ((this.index * 10) < items.length)
    });
  }

  render() {
    const {loadedItems, hasMoreItems} = this.state;
    return (
      <InfiniteScroll
        element="ul"
        className="list-group"
        loadMore={this.loadItems.bind(this)}
        hasMore={hasMoreItems}
      >
        {loadedItems.map(this.props.render)}
      </InfiniteScroll>
    );
  }
}

export default ItemsNavigation;
