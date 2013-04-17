# Internet EBS "Back End"

The Internet EBS is designed to use a very simple, fault-tolerant back-end interface. They are simple JSON documents that could be served via an API, as files in a directory on a web server or on Amazon S3, or in a CDN. The only requirement is that they follow the following URL structure and schema.

## URL Structure

The URL structure is simply the combination of a URL root and a city code. For example, if the URL root was `https://internet-ebs.org/disasters/`, and the city code was `bos`, the document would be at `https://internet-ebs.org/disasters/bos.json`.

## Document Schema

As of this version, the documents match the following schema:

- `city_code`: The city code for the current city
- `status`: The current status of the emergency. One of the following strings
    - `Emergency`: There is currently an ongoing emergency
    - `Warning`: There is a potential emergency or something less urgent ongoing
    - `OK`: The emergency or warning has been cleared, but this message should still be displayed
    - `Amber`: A specific code for an [Amber Alert](http://www.amberalert.gov/) in this area
- `message`: The message to be displayed
- `url`: The URL that the message should link to
- `last_updated`: When this message was posted

### Example Document

    {
        "message" : "Marauding evil robots!",
        "status" : "Emergency",
        "city_code" : "SIMCITY",
        "last_updated" : "2013-04-16T21:04:46",
        "url" : "http://simcity.gov/disaster-preparedness/"
    }

## Sample API

[Socrata](http://www.socrata.com) has set up a sample API at <https://internet-ebs.demo.socrata.com/developers/docs/emergency-reports>.

To retrieve the status for a given city:

    GET https://internet-ebs.demo.socrata.com/resource/emergency-reports/simcity.json

To update the status for a given city, using the dataset endpoint (see <http://dev.socrata.com/authentication> for details on how to authenticate):

    POST { "message" : "The marauding robots have broken down! Huzzah!", "status" : "OK", "last_updated" : "2013-04-17T08:30:23" } https://internet-ebs.demo.socrata.com/resource/scrf-jrca/simcity.json

For more information, contact <mailto:chris.metcalf@socrata.com> or [@chrismetcalf](http://twitter.com/chrismetcalf).
