exports = async function(arg_fileLocation, arg_database, arg_collection){
  // Example 
  // exports("https://raw.githubusercontent.com/brittonlaroche/realm-tensorflow/main/data/fuel_sales_price.csv","InventoryDemo","FuelSales")
  var sUrl = arg_fileLocation;
  var stage = context.services.get("mongodb-atlas").db(arg_database).collection(arg_collection);
  var count = 0;
  var recordsProcessed = 0;
  console.log(sUrl);
  
  await context.http.get({
      url: sUrl,
      encodeBodyAsJSON: true
    })
    .then(response => {
      // The response body is encoded as raw BSON.Binary. Parse it to JSON.
      const ejson_body = response.body.text();
      count = parseCSV(ejson_body, stage);
      console.log("number of docs processed: "+ count);
    })
   //remove the count for the header record
   recordsProcessed = parseFloat(count -1);
   return count;
};
async function parseCSV(csv, stage){
  //remove quotes and phrases
  csv = csv.replace(/"/g,"");
  var nDate = new Date();
  var lines=csv.split("\n");
  
  //delete previous data
  stage.deleteMany({});
  var result = [];
  var headers=lines[0].split(",");
  var locDoc = {}
  //console.log( "headers: " + JSON.stringify(headers));
 
  //Stage all data
  var parsed = ""
  for(var i=1;i<lines.length;i++){
	  var stageObj = {};
	  var currentline=lines[i].split(",");
	  for(var j=0;j<headers.length;j++){
	    parsed = parseFloat(currentline[j]);
	    if (isNaN(parsed) || headers[j] === "date"){
		    stageObj[headers[j]] = currentline[j];
	    } else  {
	      stageObj[headers[j]] = parseFloat(currentline[j]);
	    }
	  }
	  result.push(stageObj);
  }
  stage.insertMany(result);
  return lines.length; 
}
