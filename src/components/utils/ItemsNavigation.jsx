import React from 'react';

import InfiniteScroll from 'react-infinite-scroller';

const ITEMS_PER_PAGE = 10;

class ItemsNavigation extends React.Component {
  constructor() {
    super();

    this.state = {
      loadedItems: [],
      hasMoreItems: true
    };

    this.loadItems = this.loadItems.bind(this);
  }

  componentDidUpdate({items: oldItems}) {
    const {items: newItems} = this.props;
    if (oldItems !== newItems) {
      this.setLoadedItems([]);
    }
  }

  setLoadedItems(loadedItems) {
    const {items} = this.props;
    const hasMoreItems = loadedItems.length < items.length;
    this.setState({loadedItems, hasMoreItems});
  }

  loadItems() {
    const {items} = this.props;
    const {loadedItems: oldLoadedItems} = this.state;
    const newLoadedItemsSize = Math.min(
      (oldLoadedItems.length + ITEMS_PER_PAGE),
      items.length
    );
    const newLoadedItems = items.slice(0, newLoadedItemsSize);

    this.setLoadedItems(newLoadedItems);
  }

  render() {
    const {loadedItems, hasMoreItems} = this.state;
    return (
      <InfiniteScroll
        element="ul"
        className="list-group"
        loadMore={this.loadItems}
        hasMore={hasMoreItems}
      >
        {loadedItems.map(this.props.render)}
      </InfiniteScroll>
    );
  }
}

export default ItemsNavigation;
