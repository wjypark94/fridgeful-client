import React, {Component} from 'react';
import $ from 'jquery';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router-dom';
import '../componentStyles/Edit.css';



class Edit extends Component {
    constructor(props){
        super(props);
        this.state = {
            "open": false,
        };
    }

    handleToggle = () => this.setState({open: !this.state.open});

    render(){
        return (
            <div>
                <AppBar
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                    title="Fridgeful"
                    onLeftIconButtonClick={this.handleToggle}
                    className="app-bar"
                    style={{backgroundColor: 'black', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}
                />
                <Drawer
                    docked={false}
                    width={250}
                    open={this.state.open}
                    onRequestChange={(open) => this.setState({open})}>

                    <AppBar title="Fridgeful" style={{boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', backgroundColor: 'black' }}/>
                    <MenuItem containerElement={<Link to="/" />} id="home">Home</MenuItem>
                    <MenuItem containerElement={<Link to ="dashboard"/>} id="dashboard">Dashboard</MenuItem>
                    <MenuItem onClick={() => window.location="/recipes-page"} containerElement={<Link to ="/recipes-page"/>} id="recipes">Recipes</MenuItem>
                    <MenuItem containerElement={<Link to ="/"/>} id="logout">Log Out</MenuItem>

                </Drawer>
                
                <div class="row">
                <div class="col-3">
                    <form class="new-recipe-form">
                    <div name="new-recipe-input row">
                        <input class="col-12" placeholder="Recipe Place" aria-label="title-input" type="text" name="recipe-title" id="recipe-title" autocomplete="off"/>
                        <textarea id="todolist" rows="8" cols="60" aria-label="text-area" class="recipe-entry col-12" placeholder="Write any comments/reviews..."></textarea>
                    </div>

                        <div class="submit col-3">
                        <button type="submit" class="publish">Update</button>
                        </div>
                    </form>
                </div>
                </div>

            </div>
        );
    }
};
export default Edit;