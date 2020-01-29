import React from "react";

export default class Timer extends React.Component {
  componentDidMount() {
    this.timerInterval = setInterval(() => this.forceUpdate(), 100);
  }

  componentWillUnmount() {
    clearInterval(this.timerInterval);
  }

  renderElapsedString = (elapsed, runningSince) => {
    let totalElapsed = elapsed;
    if (runningSince) {
      totalElapsed += Date.now() - runningSince;
    }
    return this.millisecondsToHuman(totalElapsed);
  };

  millisecondsToHuman = ms => {
    const seconds = Math.floor((ms / 1000) % 60);
    const minutes = Math.floor((ms / 1000 / 60) % 60);
    const hours = Math.floor(ms / 1000 / 60 / 60);

    const humanized = [
      this.pad(hours.toString(), 2),
      this.pad(minutes.toString(), 2),
      this.pad(seconds.toString(), 2)
    ].join(":");

    return humanized;
  };

  pad = (numberString, size) => {
    let padded = numberString;
    while (padded.length < size) padded = `0${padded}`;
    return padded;
  };

  render() {
    return (
      <div className="Timer">
        <div className="Timer-panel">
          <div className="Timer-name-panel">
            <h2>{this.props.title}</h2>
            <p>{this.props.project}</p>
          </div>
          <div className="Timer-control-panel">
            <i className="fa fa-edit" onClick={this.props.switchTo} />
            <i className="fa fa-trash" onClick={this.props.deleteTimer} />
          </div>
        </div>
        <span className="Timer-clock">
          {this.renderElapsedString(
            this.props.elapsed,
            this.props.runningSince
          )}
        </span>

        <div>
          {this.props.runningSince ? (
            <button className="btn btn-stop" onClick={this.props.stopTimer}>
              Stop
            </button>
          ) : (
            <button className="btn btn-start" onClick={this.props.startTimer}>
              Start
            </button>
          )}
        </div>
      </div>
    );
  }
}
