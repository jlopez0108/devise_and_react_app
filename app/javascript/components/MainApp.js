import React from "react"

class MainApp extends React.Component {
  render () {
    const {
        signed_in,
        user,
        sign_in_route,
        sign_out_route
    } = this.props
    console.log(user);
    return (
      <React.Fragment>
        {signed_in
            ? <h1>Hello, {user.email}!</h1>
            : <h1>Please sign in, dork</h1>}
        {signed_in
            ? <a href={sign_out_route}>Sign Out</a>
            : <a href={sign_in_route}>Sign In</a>}
      </React.Fragment>
    );
  }
}

export default MainApp
