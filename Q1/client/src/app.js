import { Route, Switch } from "react-router";
import Home from "./pages/home"

function app() {


  return (
    <>
      <Switch>
        <Route path="/result">
          {/* <Home/> */}
        </Route>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
    </>
  )
}

export default app