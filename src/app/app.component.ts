import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  //Created array of tenure Options that should be present in Tenure Dropdown
  tenures = [
    '6 Months',
    '1 Year',
    '2 Year'
  ];
  
  //cardDetails array is created for using details for each card & used them in a loop
  cardDetails=[
    {description:'Get terms Loan that your business needs within 72 hrs',highlight:'Quick cash disbursement',imgUrl:'assets/Get Paid Instantly.png'},
    {description:'Achieve your financial goal with an amazing interest starting at 13% per annum',highlight:'Low Interest Rate',imgUrl:'assets/Covid.png'},
    {description:'Get started instantly by submitting only your basic details & bank statements',highlight:'Zero Paperwork',imgUrl:'assets/Low interest rate.png'},
    {description:'Manage Banking Accounting & everything in between at one platform',highlight:'Ace your business finances',imgUrl:'assets/freelancer_feature_icon_6@1.5x.png'},
    {description:'Zero EMI for first 3 months on back to Business loans of upto 1 Lakh',highlight:'Loans to fight Covid 19',imgUrl:'assets/Covid.png'},
    
  ];


  //gridSize is declared for starting range of Income Slider  
  gridSize: number = 100000;
  //gridExpense is declared for starting range of expense Slider
  gridExpense:number=10000;
  updateSetting(event) {
    /* UpdateSetting is used for updating value of gridSize.*/
    this.gridSize = event.value;
  }
  updateExpense(event)
  {
    /* UpdateSetting is used for updating value of gridExpense.*/
    this.gridExpense=event.value;
  }

/*onLogin will trigger on clicking on Login Button*/ 
  onLogin()
  {
    console.log("Login Successful");
  }
  /*onGetStarted will trigger on clicking on Get Started Button*/ 
  onGetStarted()
  {
    console.log("Getting Started");
  }

  /*onCardDetails will trigger on clicking on cards*/
  onCardDetails(cardDetail)
  {
    console.log(cardDetail);
  }

  /*onpenAccount will trigger on clicking on Get Open Account button*/
  onOpenAccount()
  {
    console.log('Opening Your Account....');
  }

    /*onGetMoney will trigger on clicking on Get Moneybutton*/
  onGetMoney()
  {
    console.log('Congratulation!!Your Loan is approved ');
  }
  
}
