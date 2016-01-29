/**
 * New node file
 */


exports.getZip= function(req,res)
{
	var connectionPool = require('../database/connectionPooling');
	var pool = connectionPool.Pool();
	pool.connect();
	var sqlSelect = 'select zipcode from Rentdata';
	pool.query(sqlSelect, function(err, results) {
		if (err) {
			console.log("ERROR: " + err.message);
		} 
		else
			{
			results.sort(function(x,y){
				return x.zipcode - y.zipcode; 
			});
			res.render('index.html', 
				{allZipcodes : results}
			);
			}
	});
	
};



exports.zipPointInfo = function(req,res)
{
	var connectionPool = require('../database/connectionPooling');
	var pool = connectionPool.Pool();
	pool.connect();
	var a = JSON.stringify(req.body);
	console.log("The value of body is :"+a);
	var json = JSON.parse(a);
	var b = json["zipcode"];
	var c = json["roomtype"];
	var roomtype=parseInt(c);
	var rent;
	console.log("I have receiverd zip :------->"+b);
	var sqlSelect = 'select latitude,logitude from zipToLatitude where zip='+ parseInt(b);
	pool.query(sqlSelect, function(err, results) {
		if (err) {
			console.log("ERROR: " + err.message);
		} 
		else
			{//success
				console.log(results);
				var sqlSelectAllInfo = 'select * from Rentdata where zipcode='+ parseInt(b);
						pool.query(sqlSelectAllInfo, function(err, results1) {
							if (err) {
								console.log("ERROR: " + err.message);
							} 
							else
								{
								var annual_payroll=results1[0].annual_payroll;
								var cost_of_living_index=results1[0].cost_of_living_index;
								var housing = results1[0].housing;
								var utilities=results1[0].utilities;
								var employees=results1[0].employees;
								var Oct2013_1bedroom=results1[0].Oct2013_1bedroom;
								var Nov2013_1bedroom=results1[0].Nov2013_1bedroom;
								var Jan2014_1bedroom=results1[0].Jan2014_1bedroom;
								var May2014_1bedroom=results1[0].May2014_1bedroom;
								var city =results1[0].city;
								var state=results1[0].state;
								var total_establishments=results1[0].total_establishments;
								var healthcare=results1[0].healthcare;
								var temperature=results1[0].temperature;
								var transportation =results1[0].transportation;
								var Sep2013_2bedroom=results1[0].Sep2013_2bedroom;
								var Oct2013_2bedroom=results1[0].Oct2013_2bedroom;
								var Jan2014_2bedroom=results1[0].Jan2014_2bedroom;
								var Mar2014_2bedroom=results1[0].Mar2014_2bedroom;
								var Jun2014_2bedroom=results1[0].Jun2014_2bedroom;
								var Sep2013_3bedroom=results1[0].Sep2013_3bedroom;
								var Oct2013_3bedroom=results1[0].Oct2013_3bedroom;
								var Jan2014_3bedroom =results1[0].Jan2014_3bedroom;
								var Feb2014_3bedroom =results1[0].Feb2014_3bedroom;
								var May2014_3bedroom =results1[0].May2014_3bedroom;
								var Jun2014_3bedroom =results1[0].Jun2014_3bedroom;
								var Sep2013_4bedroom =results1[0].Sep2013_4bedroom;
								var Oct2013_4bedroom =results1[0].Oct2013_4bedroom;
								var Jan2014_4bedroom =results1[0].Jan2014_4bedroom;
								var Feb2014_4bedroom =results1[0].Feb2014_4bedroom;
								var May2014_4bedroom =results1[0].May2014_4bedroom;
								var Jun2014_4bedroom =results1[0].Jun2014_4bedroom;
								var Oct2013_5bedroom  =results1[0].Oct2013_5bedroom;
								var Nov2013_5bedroom = results1[0].Nov2013_5bedroom;
								var Jan2014_5bedroom = results1[0].Jan2014_5bedroom;
								var Feb2014_5bedroom = results1[0].Feb2014_5bedroom;
								var May2014_5bedroom =results1[0].May2014_5bedroom;
								var Jun2014_5bedroom = results1[0].Jun2014_5bedroom;
								
								if(roomtype ==1)
									{
									console.log("i am in 1 bedrroom");
							    rent =  0.0006 * employees +
							      0      * annual_payroll +
							      0.81   * cost_of_living_index +
							     -0.2659 * housing +
							     -0.5481 * utilities +
							     -0.3353 * Oct2013_1bedroom +
							      0.3772 * Nov2013_1bedroom +
							     -0.4018 * Jan2014_1bedroom +
							      1.3756 * May2014_1bedroom +
							     -7.3789;
							    console.log("The rent for 1 bhk = "+rent);
									}
								
								if(roomtype ==2)
								{
								console.log("i am in 2 bedrroom");
						    rent = 0.0112 * total_establishments +
					           -0.0009 * employees +
								0	* annual_payroll +
							           -1.6613 * cost_of_living_index +
								0.5438 * housing +
								0.3730 * utilities +
								0.3278 * healthcare +
								0.1604 * temperature +
							           -0.1835 * Sep2013_2bedroom +
								0.0971 * Oct2013_2bedroom +
							           -0.2451 * Jan2014_2bedroom +
								0.0241 * Mar2014_2bedroom +
								1.3056 * Jun2014_2bedroom +
								35.7501;
						    console.log("The rent for 2 bhk = "+rent);
								}
								
								if(roomtype ==3)
								{
								console.log("i am in 3 bedrroom");
						    rent =             -0.0015 * total_establishments +
				            0.0002 * employees +
							0	* annual_payroll +
						            0.1261 * cost_of_living_index +
						           -0.0531 * housing +
							0.0546 * temperature +
						           -0.3103 * Sep2013_3bedroom +
							0.5962 * Oct2013_3bedroom +
						           -0.0179 * Jan2014_3bedroom +
							0.7277 * Feb2014_3bedroom +
						           -0.0007 * May2014_3bedroom +
							0.0059 * Jun2014_3bedroom +
						           -11.4787;
						    console.log("The rent for 3 bhk = "+rent);
								}
								
								if(roomtype ==4)
								{
								console.log("i am in 4 bedrroom");
						    rent =             -0.0001 * total_establishments +
				            0.0002 * employees +
							0	* annual_payroll +
						            0.1696 * cost_of_living_index +
						           -0.0720 * housing +
						           -0.2049 * utilities +
							0.1898 * transportation +
						           -0.1725 * healthcare +
						            0.0760 * Sep2013_4bedroom +
						           -0.0555 * Oct2013_4bedroom +
						           -0.1989 * Jan2014_4bedroom +
							0.3451 * Feb2014_4bedroom +
						            0.9991 * May2014_4bedroom +
						           -0.1611 * Jun2014_4bedroom +
						            1.4198;
						    console.log("The rent for 4 bhk = "+rent);
								}
								
								
								if(roomtype ==5)
								{
								console.log("i am in 5 bedrroom");
						    rent =  -0.0001 * total_establishments +
				            0.0006 * employees +
							0	* annual_payroll +
						            0.2991 * cost_of_living_index +
						           -0.1404 * housing +
						           -0.2354 * utilities +
							0.1310 * temperature +
						           -0.1725 * healthcare +
						            0.1709 * Oct2013_5bedroom +
						           -0.3250 * Nov2013_5bedroom +
						            0.2815 * Jan2014_5bedroom +
							0.3451 * Feb2014_5bedroom +
						           -0.3010 * May2014_5bedroom +
						            0.8643 * Jun2014_5bedroom +
						           -14.1896;
						    console.log("The rent for 5 bhk = "+rent);
								}
								
								
								
								
								
//								var rent = 0.072* annual_pay + 153.147*cost_living + 57.47*housing + 1693.88*healthcare - 728764.70;
//								console.log("annual payroll "+annual_pay);
//								console.log("cost_living"+cost_living);
//								console.log("housing "+housing);
//								console.log("healthcare "+healthcare);
//								console.log("The rent calculated is : == "+rent);
								for(var i = 0; i < results.length; i++)
								{
									results[i].rentMap = Math.round(rent * 100) / 100;
									results[i].city=city;
									results[i].state=state;
								}
								console.log("Final results is "+ JSON.stringify(results));
								res.send(results);
								}
							});
			}
	});
	
};