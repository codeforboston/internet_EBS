Internet EBS
============

#### An Emergency Broadcast System for the Internet

###### Demo

The snippet is embedded [here](http://aaronsikes.com/ebs_demo.html)  
You can access the admin interface for Sim City [here](http://evening-caverns-6468.herokuapp.com/admin/simcity) to trigger an alert on that page

----

###### History

The Internet Emergency Broadcast System project was generated at the Brigade Weekly Hack Night on 16 April 2013 in response to the bomb attacks on the Boston Marathon that killed three people and injured ~180 others. It is an attempt to solve the information distribution problem that often occurs during sudden emergencies or crises, especially when authoritative news sources are rendered unavailable - for example, during the Boston Marathon attack, both the City of Boston and Boston Globe websites were down due to massive surges in traffic from citizens trying to get information, connect with loved ones, seek medical attention, etc.

###### Usage

The IEBS is comprised of an embeddable Javascript widget that can be placed on any webpage. In normal usage, the widget is invisible and does not interfere with the operation of the host site. During emergencies, it can be turned on by an authorized user - most likely an emergency services director or police / fire chief at the City level - and will then display key information to the user, such as phone numbers, URLs, locations, and other critical information to keep citizens up to date as they navigate the emergency. The widget may use geolocation data from the browser to determine which city to reveal information about, or sites may select with cities they want to support.

###### Node back-end

First install node.js if you haven't (http://nodejs.org/). Then:
```
internet_EBS$ cd backend
backend$ npm install
backend$ node app.js
```
Next navigate to http://localhost:3000  
Refresh a few times, and see the emergency banner appear and disappear!
