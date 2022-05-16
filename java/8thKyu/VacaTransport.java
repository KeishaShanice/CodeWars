/*
After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.

You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.

Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

Write a code that gives out the total amount for different days(d).
*/

public class VacaTransport {
  public static int rentalCarCost(int d){
    int baseDailyCost = 40;
    int adjustment = 0;
    //conditional: 1-2, 3-6, 7 and more
    int total = d * baseDailyCost;
    if(d >= 7) {
      adjustment = total - 50;
    } else if (d >= 3)
    {
      adjustment = total - 20;
    }  
    else {
      adjustment = total - 0;
    }
    return adjustment;
  }
}

//PREP
//Problem: Determine cost for car for 7 days and 3 - 6 days maybe 1 - 2 days
//P: int
//R: return
//E: 
//P: