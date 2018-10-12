import React, { Component } from "react";

class Fab extends Component {
    constructor() {
        super();

        this.state = {
            active: false,
            show: true
        };

        this.click = this.handleClick.bind(this);
        this.hideBar = this.hideBar.bind(this);

        this.y = 0;
        this.timer = null;
    }

    handleClick() {
		this.setState({active: !this.state.active});
    }

    hideBar() {
    	self = this;

		this.setState({show: false});

		if(this.timer !== null) {
			clearTimeout(this.timer);     
		}
		
		this.timer = setTimeout(function() {
			self.setState({show: true})  
		}, 500);
    }

    componentDidMount(){
        //window.addEventListener('scroll', this.hideBar);
    }

    componentWillUnmount(){
         //window.removeEventListener('scroll', this.hideBar);
    }

	render() {
        const isActive = this.state.active ? 'active' : '';
        const classHide = this.state.show ? '' : 'hide';

		return(
			<div className={isActive + " fab " +classHide} onClick={() => this.handleClick()} >
				<span className={isActive + " fab-action-button"}>
					<i className="fab-action-button__icon"></i>
				</span>
				<ul className="fab-buttons">
					<li className="fab-buttons__item">
						<a href="#" className="fab-buttons__link" data-tooltip="Facebook">
							<i className="icon-material icon-material_fb"></i>
						</a>
					</li>
					<li className="fab-buttons__item">
						<a href="#" className="fab-buttons__link" data-tooltip="Twitter">
							<i className="icon-material icon-material_tw"></i>
						</a>
					</li>
				</ul>
			</div>
		)
	}
}

export default Fab ;