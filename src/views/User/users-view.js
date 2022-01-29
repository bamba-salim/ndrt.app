import React, {Component} from 'react';
import ViewsTpl from "../../components/_template/views-tpl";
import {ViewTitre} from "../../components/atoms/view-titre";
import UserService from "../../services/SiteAdmin/user.service";
import UserList from "./template/user-list";
import ListTpl from "../../components/_template/list.tpl";


export default class UsersView extends Component {


    state = {
        users: []
    }



    componentDidMount() {
        UserService.fetchAllUsers().then(res => {
            this.setState({users: res.userList});
        })
    }

    render() {
        return (

            <ViewsTpl classname="container" {...this.props}>
                <ViewTitre titre={"Les utilisateurs"}/>

                <ListTpl component={UserList} list={this.state.users}/>

            </ViewsTpl>
        )

    }
};



