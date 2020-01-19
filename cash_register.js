function checkCashRegister(price, cash, cid) {
  let change = [];
  let status;
  let totalCid = 0;
  let due = cash - price;

  let values = [["PENNY", 0.01], ["NICKEL", 0.05], ["DIME", 0.1], ["QUARTER", 0.25], ["ONE", 1], ["FIVE", 5], ["TEN", 10],
        ["TWENTY", 20], ["ONE HUNDRED", 100]];

  for (let i=0; i < cid.length; i++){
    totalCid += cid[i][1];
  }
  totalCid = totalCid.toFixed(2);

  if (totalCid < due){
    status = 'INSUFFICIENT_FUNDS';
  } else if (totalCid == due){
    status = 'CLOSED';
    change = cid;
  } else {

    let c = [["PENNY", 0], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0],
        ["ONE HUNDRED", 0]]; //temporary variable

    for (let i = cid.length - 1; i >=0; i--){
       cid[i].push(cid[i][1]/values[i][1]);
        while (cid[i][2] > 0 && due > 0 
          && due - values[i][1] >= 0){
            due = (due - values[i][1]).toFixed(2);
            c[i][1] += values[i][1];  
            cid[i][2] -= 1;
          }        
      }
    if (due == 0){
      status = "OPEN";
      c.reverse();
      for (let i = 0; i < c.length; i++){
        if (c[i][1] > 0){
          change.push(c[i]);
        }
      }
    }else{ // unable to return exact change.
      change = [];
      status = "INSUFFICIENT_FUNDS";
    }
  }
  // Here is your change, ma'am.
  return {status: status, change: change};
}

// Example cash-in-drawer array:
// [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20],
// ["TWENTY", 60], ["ONE HUNDRED", 100]]

//checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
