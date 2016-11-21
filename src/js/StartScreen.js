var React = require('react');
var SoccerBoardTag = require('./SoccerBoardTag.js');
var style = require('../less/StartScreen.less');

var StartScreen = React.createClass({
  getInitialState: function() {
    return {
      show:true,
      hover: false,
      instruction:[
        'Drag player',
        'Draw lines to show your tactic',
        'Edit your team'
      ]
    };
  },
  buildInstruction: function (){
    return {__html:this.state.instruction.map(function(str){return '<span>'+str+'</span>';}).join('')};
  },
  hover:function(isHover){
    this.setState({
      hover: isHover
    });
    this.refs.soccerBoardTag.hover(isHover);
  },
  hide:function(){
    this.setState({
      show: false
    });
  },
  render:function(){
    var className = "startScreen";
    if (!this.state.show) className+=" hidden";
    if (this.state.hover) className+=" hover";
    return(
      <div className={className} onClick={this.start}>
        <div className="sensor" onMouseEnter={this.props.onHover[0]} onMouseLeave={this.props.onHover[1]}></div>
        <SoccerBoardTag ref="soccerBoardTag" />
        <div className="instruction" dangerouslySetInnerHTML={this.buildInstruction()} />
      </div>
    );
  }
});

module.exports = StartScreen;
