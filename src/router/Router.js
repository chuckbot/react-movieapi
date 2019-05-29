import React, {Component} from "react";
import {Route, Switch} from "react-router-dom";
import Container from "../Components/ContainerComponent";

export class AppRouter extends Component {

    render() {
        return (
            <div>
                <div>
                    <Switch>
                        <Route path='/main/' component={Container}/>
                        <Route component={Container}/>
                    </Switch>

                </div>
            </div>
        )
    }

}
