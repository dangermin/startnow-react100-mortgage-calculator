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
      period: 12,
    };
    //update input
    this.handleBalance = this.handleBalance.bind(this);
    this.handleRate = this.handleRate.bind(this);
    this.handleTerm = this.handleTerm.bind(this);
    this.handlePeriod = this.handlePeriod.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);

    this.mortgageCalc = this.mortgageCalc.bind(this);
    console.log(this.state);
  }

  handleBalance(e) {
    this.setState({balance: e.target.value});
  }
  handleRate(e) {
    this.setState({rate: e.target.value});
  }
  handleTerm(e) {
    this.setState({term: e.target.value});
  }
  handlePeriod(e) {
    this.setState({period: e.target.value});
  }
  //prevents form from reverting to default values after submit
  handleSubmit(event) {
    event.preventDefault();
  }

  mortgageCalc() {
    console.log(this.state);

    const numberOfPayments = this.state.term * this.state.period;

    const monthlyInterestRate = (this.state.rate / 100) / (this.state.period);

    const compoundedIntestRate = Math.pow((1 + monthlyInterestRate), numberOfPayments);

    const interestQuotient = (monthlyInterestRate * compoundedIntestRate) / (compoundedIntestRate - 1);

    // final calculation monthlyPayment = Balance * interestQuotient;
    this.state.output = this.state.balance * interestQuotient;

    this.setState({output: this.state.output.toFixed(2)});
  }

  render() {
    return (
      <div className='container'>
        <h2>Mortgage Calculator</h2>
        <form className="form-horizontal" onSubmit={this.handleSubmit} >
          <div className="form-group">
            <div className="col-sm-10" >
              <label className="col-sm-2 control-label">Loan Balance</label>
              <input name="balance" type="number" className="form-control" placeholder="0" value={this.state.value} onChange={this.handleBalance} />
              <label className="col-sm-2 control-label">Interest Rate (%)</label>
              <input name="rate" type="number" step="0.01" className="form-control" placeholder="0" value={this.state.value} onChange={this.handleRate} />
              <label className="col-sm-2 control-label">Term (years)</label>
              <select name="term" className="form-control" value={this.state.value} onChange={this.handleTerm} >
                <option selected value="15" >15</option>
                <option value="30" >30</option>
              </select>
              <label className="col-sm-2 control-label">Payment Period</label>
              <select name="period" className="form-control" value={this.state.value} onChange={this.handlePeriod} >
                <option selected value="12" >Monthly</option>
                <option value="26" >BiWeekly</option>
              </select>
              <br />
              <button name="submit" type="submit" onClick={this.mortgageCalc} >Submit</button>
              <div name="output">
                <h2>You estimated monthly payment is ${this.state.output}</h2>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
