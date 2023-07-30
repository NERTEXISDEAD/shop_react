import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: 'Клавитура №1',
          img: 'keyboard.jpg',
          desc: 'Клавитура первая, крутая',
          category: 'keyboards',
          price: '49.99'
        },
        {
          id: 2,
          title: 'Мышка №1',
          img: 'mouse.jpg',
          desc: 'Мышка первая, крутая',
          category: 'mouses',
          price: '19.99'
        },
        {
          id: 3,
          title: 'Наушники №1',
          img: 'headsets.jpg',
          desc: 'Наушники первые, крутые',
          category: 'headsets',
          price: '79.99'
        },
        {
          id: 4,
          title: 'Наушники №2',
          img: 'headsets.jpg',
          desc: 'Наушники вторые, крутые',
          category: 'headsets',
          price: '89.99'
        },
        {
          id: 2,
          title: 'Мышка №2',
          img: 'mouse.jpg',
          desc: 'Мышка вторая, крутая',
          category: 'mouses',
          price: '29.99'
        },
      ],
      showFullItem: false,
      fullItem: {}
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categories chooseCategory={this.chooseCategory} />
        <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder} />

        {this.state.showFullItem && <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem} />}
        <Footer />
      </div>
    );
  }

  onShowItem(item) {
    this.setState({ fullItem: item })
    this.setState({ showFullItem: !this.state.showFullItem })
  }

  chooseCategory(category) {
    if (category === 'all') {
      this.setState({ currentItems: this.state.items })
      return
    }

    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }

  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter(el => el.id !== id) })
  }

  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach(el => {
      if (el.id === item.id)
        isInArray = true
    })
    if (!isInArray)
      this.setState({ orders: [...this.state.orders, item] })
  }
}


export default App;
