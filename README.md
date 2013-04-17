Internet EBS
============
#### An Emergency Broadcast System for the Internet

----

## IDEAS

- Witness Media App
- Good Smaritan Stories
- Need/Get/Offer Help
- Resource Directory
- Find your Missing Person
- Fuzzy People Matching
- Key News Feeds / Twitter
- Widget

----

## Widget 

A small snippet of javascript for websites that will alert their users of emergencies in their area, giving them useful information at a time they need it most.



#### JSON:

````
{
	title: [string],
	text: [string],
	url: [url],
	status: [alert, warning, ?],
	time: [UTC]
}
````

##### eg.

````
{
	title: "Sea Monster Attack",
	text: “There is a sea monster currently...”,
	URL: “http://...”,
	status: “Emergency",
	time: “2013-04-17 09:24:20 -0400”
}
````
