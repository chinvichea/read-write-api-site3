(window.webpackJsonp=window.webpackJsonp||[]).push([[178],{468:function(e,a,t){e.exports=t.p+"assets/img/EventNotificationOverview.464964ba.png"},823:function(e,a,t){"use strict";t.r(a);var r=t(0),i=Object(r.a)({},(function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",[e._v("Callback URL API Profile - v3.1.5 ")]),e._v(" "),r("p"),r("div",{staticClass:"table-of-contents"},[r("ul",[r("li",[r("a",{attrs:{href:"#overview"}},[e._v("Overview")])]),r("li",[r("a",{attrs:{href:"#basics"}},[e._v("Basics")]),r("ul",[r("li",[r("a",{attrs:{href:"#overview"}},[e._v("Overview")]),r("ul",[r("li",[r("a",{attrs:{href:"#steps"}},[e._v("Steps")])]),r("li",[r("a",{attrs:{href:"#sequence-diagram"}},[e._v("Sequence Diagram")])])])]),r("li",[r("a",{attrs:{href:"#callback-url"}},[e._v("Callback URL")])]),r("li",[r("a",{attrs:{href:"#release-management"}},[e._v("Release Management")]),r("ul",[r("li",[r("a",{attrs:{href:"#callback-url-resource"}},[e._v("Callback-URL Resource")]),r("ul",[r("li",[r("a",{attrs:{href:"#post"}},[e._v("POST")])]),r("li",[r("a",{attrs:{href:"#get"}},[e._v("GET")])]),r("li",[r("a",{attrs:{href:"#put"}},[e._v("PUT")])]),r("li",[r("a",{attrs:{href:"#delete"}},[e._v("DELETE")])])])])])]),r("li",[r("a",{attrs:{href:"#callback-url-per-tpp"}},[e._v("Callback-URL per TPP")])])])])])]),r("p"),e._v(" "),r("h2",{attrs:{id:"overview"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),r("p",[e._v("The Callback URL API Profile describes the flows and common functionality for the Callback URL API, which allows a TPPs to:")]),e._v(" "),r("ul",[r("li",[e._v("Register a callback URL with an ASPSP to register to receive a "),r("code",[e._v("urn:uk:org:openbanking:events:resource-update")]),e._v(" event notification via the Real Time Event Notification API.")]),e._v(" "),r("li",[e._v("Optionally read, update or delete a registered callback URL.")])]),e._v(" "),r("p",[e._v("This profile should be read in conjunction with a compatible Read/Write Data API Profile, a compatible Event Notification API Profile and compatible individual resources.")]),e._v(" "),r("h2",{attrs:{id:"basics"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#basics"}},[e._v("#")]),e._v(" Basics")]),e._v(" "),r("h3",{attrs:{id:"overview-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#overview-2"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),r("p",[e._v("The steps and sequence diagram below provide a general outline of a notification flow for all resources in the R/W APIs.")]),e._v(" "),r("h4",{attrs:{id:"steps"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#steps"}},[e._v("#")]),e._v(" Steps")]),e._v(" "),r("p",[e._v("Step 1: Setup Event Notification Configuration")]),e._v(" "),r("ul",[r("li",[e._v("This flow begins with a TPP creating a "),r("strong",[e._v("callback-url")]),e._v(" resource with an ASPSP.")]),e._v(" "),r("li",[e._v("The callback URL must be specified at this stage.")])]),e._v(" "),r("p",[e._v("Step 2: Event Notification Required")]),e._v(" "),r("ul",[r("li",[e._v("When an event occurs on a resource that requires a notification, the ASPSP identifies the "),r("strong",[e._v("callback-url")]),e._v(" associated with the TPP owning the affected resource.")]),e._v(" "),r("li",[e._v("The ASPSP sends the event notification to the callback URL, detailing the nature of the event and identifying the affected resource.")]),e._v(" "),r("li",[e._v("The TPP initiates a client credential grant and retrieves the resource using the details contained in the event notification.")])]),e._v(" "),r("p",[e._v("Step 3: Retrieve/Update/Delete Event Notification Configuration")]),e._v(" "),r("ul",[r("li",[e._v("The TPP may optionally read/update/delete the "),r("strong",[e._v("callback-url")]),e._v(" resource.")])]),e._v(" "),r("h4",{attrs:{id:"sequence-diagram"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#sequence-diagram"}},[e._v("#")]),e._v(" Sequence Diagram")]),e._v(" "),r("p",[r("img",{attrs:{src:t(468),alt:"Event Notification Overview"}})]),e._v(" "),r("details",[r("summary",[e._v("Diagram source")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("participant TPP\nparticipant ASPSP Authorisation Server\nparticipant ASPSP Resource Server\nparticipant ASPSP Notification Service\n\nnote over TPP, ASPSP Notification Service\nStep 1: Setup Event Notification Configuration\nend note\n\nTPP <-> ASPSP Authorisation Server: Establish TLS 1.2 MA\nTPP -> ASPSP Authorisation Server: Initiate Client Credentials Grant\nASPSP Authorisation Server -> TPP: access-token\nTPP <-> ASPSP Resource Server: Establish TLS 1.2 MA\nTPP -> ASPSP Resource Server: POST /callback-urls\nASPSP Resource Server -> TPP: HTTP 201 (Created),  CallbackUrlId\n\nnote over TPP, ASPSP Notification Service\nStep 2: Event Notification Required\nend note\n\n\n\nnote left of ASPSP Notification Service\n- Create EventNotification\n- Sign EventNotification\nend note\n\nloop Retry Until Successful (as per retry policy)\nASPSP Notification Service -> TPP: POST /event-notifications, EventNotification, signature\nalt success\nTPP -> ASPSP Notification Service: HTTP 202 Accepted\nelse failure\nTPP -> ASPSP Notification Service: HTTP 500/400\nend alt\nend loop\n\nnote right of TPP\nTPP verifies signature\n\nURL for resource contained in the\nEventNotification rlk (resource links) claim\nend note\n\nTPP <-> ASPSP Authorisation Server: Establish TLS 1.2 MA\nTPP -> ASPSP Authorisation Server: Initiate Client Credentials Grant\nASPSP Authorisation Server -> TPP: access-token\n\nTPP <-> ASPSP Resource Server: Establish TLS 1.2 MA\nTPP -> ASPSP Resource Server: GET Resource\nASPSP Resource Server -> TPP: HTTP 200 (OK),  Resource\n\nnote over TPP, ASPSP Notification Service\nStep 3: Retrieve/Update/Delete Event Notification Configuration\nend note\n\nTPP <-> ASPSP Authorisation Server: Establish TLS 1.2 MA\nTPP -> ASPSP Authorisation Server: Initiate Client Credentials Grant\nASPSP Authorisation Server -> TPP: access-token\nTPP <-> ASPSP Resource Server: Establish TLS 1.2 MA\nalt Retrive\nTPP -> ASPSP Resource Server: GET /callback-urls\nASPSP Resource Server -> TPP: HTTP 200 (OK)\nelse Update\nTPP -> ASPSP Resource Server: PUT /callback-urls/{CallbackUrlId}\nASPSP Resource Server -> TPP: HTTP 200 (OK)\nelse Delete\nTPP -> ASPSP Resource Server: DELETE /callback-urls/{CallbackUrlId}\nASPSP Resource Server -> TPP: HTTP 204 (OK)\nend alt\noption footer=bar\n")])])])]),e._v(" "),r("h3",{attrs:{id:"callback-url"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#callback-url"}},[e._v("#")]),e._v(" Callback URL")]),e._v(" "),r("p",[e._v("TPPs must register a URL for TPP hosted services to receive event notifications from an ASPSP. The URL "),r("strong",[e._v("must")]),e._v(" end with the Event Notification API specification version number, followed by ‘/event-notifications'.")]),e._v(" "),r("p",[e._v("For example:")]),e._v(" "),r("ul",[r("li",[e._v("URL: https://tpp.com/open-banking/v3.1/event-notifications")])]),e._v(" "),r("h3",{attrs:{id:"release-management"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#release-management"}},[e._v("#")]),e._v(" Release Management")]),e._v(" "),r("p",[e._v("This section overviews the release management and versioning strategy for the Callback URL API.")]),e._v(" "),r("h4",{attrs:{id:"callback-url-resource"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#callback-url-resource"}},[e._v("#")]),e._v(" Callback-URL Resource")]),e._v(" "),r("p",[e._v("TPPs "),r("strong",[e._v("must")]),e._v(" register for event-notification callbacks with the version of Event Notification API they have implemented. The version element of the Callback-URL resource is used for this purpose.")]),e._v(" "),r("h5",{attrs:{id:"post"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#post"}},[e._v("#")]),e._v(" POST")]),e._v(" "),r("ul",[r("li",[e._v("A TPP "),r("strong",[e._v("must only")]),e._v(" create a callback-url on one version")])]),e._v(" "),r("h5",{attrs:{id:"get"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#get"}},[e._v("#")]),e._v(" GET")]),e._v(" "),r("ul",[r("li",[e._v("A TPP "),r("strong",[e._v("must not")]),e._v(" access a callback-url on an older version, via the CallbackUrlId for a callback-url created in a newer version.\n"),r("ul",[r("li",[e._v("E.g., a callback-url created in v4, accessed via v3.")])])]),e._v(" "),r("li",[e._v("An ASPSP "),r("strong",[e._v("must")]),e._v(" allow a callback-url resource to be accessed in a newer version.")]),e._v(" "),r("li",[e._v("An ASPSP "),r("strong",[e._v("must")]),e._v(" ensure callback-url fields are unchanged when accessed in a different version.")])]),e._v(" "),r("h5",{attrs:{id:"put"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#put"}},[e._v("#")]),e._v(" PUT")]),e._v(" "),r("ul",[r("li",[e._v("A TPP "),r("strong",[e._v("must not")]),e._v(" update a callback-url on an older version via a CallbackUrlId created in a newer version.\n"),r("ul",[r("li",[e._v("E.g., A callback-url is created in v4, and a PUT request on v3.")])])]),e._v(" "),r("li",[e._v("An ASPSP "),r("strong",[e._v("must")]),e._v(" support updating a callback-url from a previous version via a CallbackUrlId created in a newer version.\n"),r("ul",[r("li",[e._v("E.g., A callback-url is created in v3, and a PUT request on v4.")])])])]),e._v(" "),r("h5",{attrs:{id:"delete"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#delete"}},[e._v("#")]),e._v(" DELETE")]),e._v(" "),r("ul",[r("li",[e._v("A TPP "),r("strong",[e._v("must not")]),e._v(" delete a callback-url on an older version via a CallbackUrlId created in a newer version.\n"),r("ul",[r("li",[e._v("E.g. A callback-url is created in v4, and request DELETE on v3.")])])]),e._v(" "),r("li",[e._v("An ASPSP "),r("strong",[e._v("must")]),e._v(" support deleting a callback-url from a previous version via a CallbackUrlId created in a newer version.\n"),r("ul",[r("li",[e._v("E.g., A callback-url is created in v3, and request DELETE on v4.")])])])]),e._v(" "),r("h3",{attrs:{id:"callback-url-per-tpp"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#callback-url-per-tpp"}},[e._v("#")]),e._v(" Callback-URL per TPP")]),e._v(" "),r("p",[e._v("An ASPSP will maintain at most, a single Callback-URL resource per TPP.")])])}),[],!1,null,null,null);a.default=i.exports}}]);