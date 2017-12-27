import React from 'react'
import {Link} from 'react-router-dom'
import { Menu } from 'element-react'
//import {Icon, Select, Dropdown, Flag, compose} from "semantic-ui-react"
//import http from "../../../providers/http"
//import { gql, graphql } from 'react-apollo'

// const countryOptions = [
//   { key: 'fr', value: 'fr', flag: 'fr' },
//   { key: 'gb', value: 'gb', flag: 'gb' },
//   { key: 'de', value: 'de', flag: 'de' },
//   { key: 'es', value: 'es', flag: 'es' },
// ]

class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      languageOn : "fr"
    }
  }

  // componentWillMount() {
  //   this.props.subscribeToPrice({id : "1"});
  // }
  //
  // componentDidMount() {
  // }
  //
  // incToken = () => {
  //   this.props.mutate({
  //     variables : {
  //       id : "1"
  //     }
  //   })
  // }
  //
  // renderLabel = item => <Flag name={item.value}/>

  render () {
    // let {pathname} = this.props.location
    // let {price, restrictAccess : {user} = {}} = this.props.data
    // let classNameAdditional = ""
    //
    // let style = {}
    // if (["/", "/modeles"].indexOf(pathname) == -1) style.background = "rgba(25, 25, 25, 0.72)"
    // if (/\/profile\/[a-z]+\/[a-z1-9]+/i.test(pathname)) {
    //   if (["/", "/modeles"].indexOf(pathname) == -1) style.background = "transparent"
    //   style.position = "fixed"
    //   style.zIndex = "10"
    //   classNameAdditional += " on-white"
    // }
    const styles = {
      right: {
        float: 'right'
      },
      brand: {
        fontSize: '36px'
      }
    }

    return (
      <div>
        <Menu defaultActive="2" mode="horizontal">
       <Menu.Item index="1" style={styles.brand}>Monarq</Menu.Item>
       <Menu.Item index="2" style={styles.right}>Home</Menu.Item>
       <Menu.Item index="3" style={styles.right}>Support</Menu.Item>
     </Menu>
      </div>
    )
  }
}
//
// const QueryMutation = gql`mutation incPrice($id: ID) {
//   incPrice(id: $id) {
//     token
//   }
// }`
//
// const MyQuery = gql`query headerInfo($id: ID){
//   price(id: $id) {
//     token
//   }
//   restrictAccess {
//     user {
//       email
//       _id
//     }
//     error
//   }
// }`
//
// const QuerySubscription = gql`
//   subscription subToPrice($id: ID){
//     priceChanged(id: $id) {
//       token
//     }
//   }
// `
//
// Header = graphql(QueryMutation)(Header)
//
// Header = graphql(MyQuery, {
//   options : {
//     variables : {id : "1"}
//   },
//   props : props => ({
//     data : props.data,
//     subscribeToPrice : params => props.data.subscribeToMore({
//       document : QuerySubscription,
//       variables : {id : params.id},
//       updateQuery : (prev, {subscriptionData}) => {
//         if (!subscriptionData.data) return prev
//         let price = {token : subscriptionData.data.priceChanged.token}
//         return Object.assign({}, prev, {price})
//       }
//     })
//   })
// })(Header)

export default Navbar;
