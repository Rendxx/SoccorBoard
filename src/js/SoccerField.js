var React = require('react');
var style = require('../less/SoccerField.less');

var SoccerField = React.createClass({
  getInitialState: function() {
    return {
      min: true,
      hover: false
    };
  },
  componentDidMount: function (){
  },
  hover:function(isHover){
    this.setState({
      hover: isHover
    });
  },
  render:function(){
    var class_soccerField='soccerField ' + this.props.fieldStyle.field;
    if (this.state.min)class_soccerField+= " minimize"
    if (this.state.hover) class_soccerField+=" hover";
    var class_top='top ' + (this.props.fieldStyle.top?this.props.fieldStyle.top:'');
    var class_stands='stands ' + (this.props.fieldStyle.stands?this.props.fieldStyle.stands:'');
    var class_grass='grass ' + (this.props.fieldStyle.grass?this.props.fieldStyle.grass:'');

    return(
      <div className={class_soccerField}>
        <div className={class_top}></div>
        <div className={class_stands}></div>
        <div className="board"></div>
        <div className={class_grass}></div>
      </div>
    );
  }
});

module.exports = SoccerField;
