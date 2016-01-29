/**
 * New node file
 */
exports.wordCloud=function(req,res)
{
	var connectionPool = require('../database/connectionPooling');
	var pool = connectionPool.Pool();
	pool.connect();
	console.log("success");
	
	
	var city_1_data = [];
	var city_1_name = [];
	var ob = new Object();
	     pool.query("select city, Sep2014_1bedroom from Rentdata group by city order by Sep2014_1bedroom desc LIMIT 150", function(err, rows) {
	        
	        if (err) throw err;
	            
	        for(var m=0;m<rows.length;m++)
	        {
	            
	            ob = new Object();
	    
	            city_1_name.push(rows[m].city); 

	            ob.text = rows[m].city;
	            ob.size = rows[m].Sep2014_1bedroom;

	            city_1_data.push(ob);


	        }
	        res.render("RealWordCloud.ejs", {
	             city_1_Data: city_1_data,
	             city_1_Name: city_1_name
	        });
	        
	    });
	


};


exports.getData=function(req,res)
{
	
	
	var connectionPool = require('../database/connectionPooling');
	var pool = connectionPool.Pool();
	pool.connect();
	var a = JSON.stringify(req.body);
	console.log("Word cloud for "+JSON.stringify(req.body));
	var json = JSON.parse(a);
	var b = json["roomtype"];
	var roomtype=parseInt(b);
	if(roomtype==2){
		var city_1_data = [];
		var city_1_name = [];
		var ob = new Object();
		     pool.query("select city, Sep2014_2bedroom from Rentdata group by city order by Sep2014_2bedroom desc LIMIT 150", function(err, rows) {
		        
		        if (err) throw err;
		            
		        for(var m=0;m<rows.length;m++)
		        {
		            
		            ob = new Object();
		    
		            city_1_name.push(rows[m].city); 

		            ob.text = rows[m].city;
		            ob.size = rows[m].Sep2014_2bedroom;

		            city_1_data.push(ob);


		        }
		        console.log("i am in 2 ---->>");
		        
		        console.log("data "+JSON.stringify(city_1_data));
		        console.log("name"+JSON.stringify(city_1_name));
		        
		        res.send("RealWordCloud.ejs", 
		              city_1_data
		            
		        );
		        
		    });
	}
	else if(roomtype==3){
		console.log("I am in 3 !!");
		var city_1_data = [];
		var city_1_name = [];
		var ob = new Object();
		     pool.query("select city, Sep2014_3bedroom from Rentdata group by city order by Sep2014_3bedroom desc LIMIT 150", function(err, rows) {
		        
		        if (err) throw err;
		            
		        for(var m=0;m<rows.length;m++)
		        {
		            
		            ob = new Object();
		    
		            city_1_name.push(rows[m].city); 

		            ob.text = rows[m].city;
		            ob.size = rows[m].Sep2014_3bedroom;

		            city_1_data.push(ob);


		        }
		        console.log("data "+JSON.stringify(city_1_data));
		        console.log("name"+JSON.stringify(city_1_name));
		        res.send("RealWordCloud.ejs", 
			              city_1_data
			            
			        );
		        
		    });
	}
	else if(roomtype==4){
		var city_1_data = [];
		var city_1_name = [];
		var ob = new Object();
		     pool.query("select city, Sep2014_4bedroom from Rentdata group by city order by Sep2014_4bedroom desc LIMIT 150", function(err, rows) {
		        
		        if (err) throw err;
		            
		        for(var m=0;m<rows.length;m++)
		        {
		            
		            ob = new Object();
		    
		            city_1_name.push(rows[m].city); 

		            ob.text = rows[m].city;
		            ob.size = rows[m].Sep2014_4bedroom;

		            city_1_data.push(ob);


		        }
		        res.send("RealWordCloud.ejs", 
			              city_1_data
			            
			        );
		        
		    });
		

	}
	else if(roomtype==5){
		var city_1_data = [];
		var city_1_name = [];
		var ob = new Object();
		     pool.query("select city, Sep2014_5bedroom from Rentdata group by city order by Sep2014_5bedroom desc LIMIT 150", function(err, rows) {
		        
		        if (err) throw err;
		            
		        for(var m=0;m<rows.length;m++)
		        {
		            
		            ob = new Object();
		    
		            city_1_name.push(rows[m].city); 

		            ob.text = rows[m].city;
		            ob.size = rows[m].Sep2014_5bedroom;

		            city_1_data.push(ob);


		        }
		        res.send("RealWordCloud.ejs", 
			              city_1_data
			            
			        );
		        
		    });
	}
	
	
	
	

};