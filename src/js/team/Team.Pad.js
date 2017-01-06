require('LESS/Team.Pad.less');
var React = require('react');
var PlayerItem = require('TEAM/Team.PlayerItem.js');

var TeamPad = React.createClass({
  /* Public Method *********************************************************************/
  loadPlayer:function(teamDat){
    this.setState({
      name:teamDat.name||"",
      info:teamDat.info||[],
      starting:teamDat.starting||[],
      bench:teamDat.bench||[],
      rest:teamDat.rest||[]
    });
  },

  /* Private Method *********************************************************************/

  /* React Method *********************************************************************/
  getInitialState: function() {
    return {
      name:"",
      info:[],
      starting:[],
      bench:[],
      rest:[]
    };
  },
  componentDidMount: function (){
  },
  render:function(){
    var className = "teamPad";
    if (this.props.posAlign==="left") className+=" left";
    else  className+=" right";
    var textAlign;
    if (this.props.textAlign==="left") textAlign="left";
    else if (this.props.textAlign==="right") textAlign="right";
    else textAlign=(this.props.posAlign==="left")?"right":"left";
    var nameClass="teamPad-name "+(textAlign==="left"?"textLeft":"textRight");

    return(
      <div className={className} ref="self">
        <div className={nameClass}><span>{this.state.name}</span> </div>
        <div className="player-starting">{
          this.state.starting.map((number) => (
              <PlayerItem number={number} name={this.state.info[number].name} status="starting" textAlign={textAlign} />
          ))
        }</div>
        <div className="player-bench">{
          this.state.bench.map((number) => (
              <PlayerItem number={number} name={this.state.info[number].name} status="bench" textAlign={textAlign} />
          ))
        }</div>
        <div className="player-rest">{
          this.state.rest.map((number) => (
              <PlayerItem number={number} name={this.state.info[number].name} status="rest" textAlign={textAlign} />
          ))
        }</div>
      </div>
    );
  }
});

module.exports = TeamPad;
