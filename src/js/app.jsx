import React from 'react';

export default class App extends React.Component {
  // your Javascript goes here
    constructor(props) {
      super(props)
      this.state = {
        balance: 0,
        rate: 0.01,
        term: 15,
        output: 0,
      };

      this.handleBalance = this.handleBalance.bind(this);
      this.handleRate = this.handleRate.bind(this);
      this.handleTerm = this.handleTerm.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      console.log(this.state);
    }


  handleBalance(e) {
    this.setState({balance: e.target.value});
    console.log(this.state);
  }
  handleRate(e) {
    this.setState({rate: e.target.value});
    console.log(this.state);
  }
  handleTerm(e) {
    this.setState({term: e.target.value});
    console.log(this.state);
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className='container'>
        {/* your JSX goes here */}
        <p>Mortgage Calculator</p>
        <form className="form-horizontal" onSubmit={this.handleSubmit} >
          <div className="form-group">
            <div className="col-sm-10" >
              <label className="col-sm-2 control-label">Loan Balance</label>
              <input name="balance" type="number" className="form-control" id="balance" placeholder="0" value={this.state.value} onChange={this.handleBalance} />
              <label className="col-sm-2 control-label">Interest Rate (%)</label>
              <input name="rate" type="number" step="0.01" className="form-control" id="rate" placeholder="0" value={this.state.value} onChange={this.handleRate} />
              <label className="col-sm-2 control-label">Term (years)</label>
              <select name="term" className="form-control" id="term" value={this.state.value} onChange={this.handleTerm} >
                <option selected value="15" >15</option>
                <option value="30" >30</option>
              </select>
            </div>
            <button type="submit">Submit</button>
              <div name="output">
              <h2>You estimated monthly payment is ${}</h2>
              </div>
          </div>
        </form>
      </div>
    );
  }
}
