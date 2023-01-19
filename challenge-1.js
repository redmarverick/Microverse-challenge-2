function breakingRecords(scores) {
    let high = scores[0], cHigh=0, low = scores[0], cLow=0;
    for(let i=1;i<scores.length;i++)
      {
        if(high<scores[i])
        {
          high=scores[i];
          cHigh++;
        }
        if(low>scores[i])
        {
          low=scores[i];
          cLow++;
        }
      }
  return cHigh, cLow;

}
console.log(breakingRecords([10,5,20,20,4,5,2,25,1]));