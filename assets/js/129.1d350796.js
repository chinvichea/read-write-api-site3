(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{114:function(e,t,i){e.exports=i.p+"assets/img/EventSubscriptions.d3e0696b.png"},592:function(e,t,i){"use strict";i.r(t);var n=i(0),r=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",[e._v("Event Notification Subscription API Profile - v3.1.2")]),e._v(" "),n("p"),n("div",{staticClass:"table-of-contents"},[n("ul",[n("li",[n("a",{attrs:{href:"#overview"}},[e._v("Overview")])]),n("li",[n("a",{attrs:{href:"#basics"}},[e._v("Basics")]),n("ul",[n("li",[n("a",{attrs:{href:"#overview"}},[e._v("Overview")]),n("ul",[n("li",[n("a",{attrs:{href:"#steps"}},[e._v("Steps")])]),n("li",[n("a",{attrs:{href:"#sequence-diagram"}},[e._v("Sequence Diagram")])])])]),n("li",[n("a",{attrs:{href:"#subscriptions-for-real-time-event-notifications-and-aggregated-polling"}},[e._v("Subscriptions for Real Time Event Notifications and Aggregated Polling")]),n("ul",[n("li",[n("a",{attrs:{href:"#real-time-event-notifications"}},[e._v("Real Time Event Notifications")])]),n("li",[n("a",{attrs:{href:"#aggregated-polling"}},[e._v("Aggregated Polling")])])])]),n("li",[n("a",{attrs:{href:"#release-management"}},[e._v("Release Management")]),n("ul",[n("li",[n("a",{attrs:{href:"#event-subscription-resource"}},[e._v("Event-Subscription Resource")]),n("ul",[n("li",[n("a",{attrs:{href:"#post"}},[e._v("POST")])]),n("li",[n("a",{attrs:{href:"#get"}},[e._v("GET")])]),n("li",[n("a",{attrs:{href:"#put"}},[e._v("PUT")])]),n("li",[n("a",{attrs:{href:"#delete"}},[e._v("DELETE")])])])])])]),n("li",[n("a",{attrs:{href:"#event-subscription-per-tpp"}},[e._v("Event-Subscription per TPP")])])])])])]),n("p"),e._v(" "),n("h2",{attrs:{id:"overview"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),n("p",[e._v("The Event Notification Subscription API Profile describes the flows and common functionality for the Event Notification Subscription API, which allows a TPPs to:")]),e._v(" "),n("ul",[n("li",[e._v("Register an event subscription with an ASPSP to subscribe to event notifications.\n"),n("ul",[n("li",[e._v("A subscription can enable real time event notifications via a HTTP callback from the ASPSP, and aggregated polling by the TPP.")])])]),e._v(" "),n("li",[e._v("Specify a list of event types to be notified on.")]),e._v(" "),n("li",[e._v("Optionally read, update or delete a registered event subscription.")])]),e._v(" "),n("p",[e._v("This profile should be read in conjunction with a compatible Read/Write Data API Profile, a compatible Event Notification API Profile and compatible individual resources.")]),e._v(" "),n("h2",{attrs:{id:"basics"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#basics"}},[e._v("#")]),e._v(" Basics")]),e._v(" "),n("h3",{attrs:{id:"overview-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#overview-2"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),n("p",[e._v("The steps and sequence diagram below provide a general outline of a notification flow for all resources in the R/W APIs.")]),e._v(" "),n("h4",{attrs:{id:"steps"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#steps"}},[e._v("#")]),e._v(" Steps")]),e._v(" "),n("p",[e._v("Step 1: Setup Event Notification Subscription")]),e._v(" "),n("ul",[n("li",[e._v("This flow begins with a TPP creating an "),n("strong",[e._v("event-subscription")]),e._v(" resource with an ASPSP.")])]),e._v(" "),n("p",[e._v("Step 2: Retrieve/Update/Delete Event Notification Subscription")]),e._v(" "),n("ul",[n("li",[e._v("The TPP may optionally read/update/delete the "),n("strong",[e._v("event-subscription")]),e._v(" resource.")])]),e._v(" "),n("h4",{attrs:{id:"sequence-diagram"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#sequence-diagram"}},[e._v("#")]),e._v(" Sequence Diagram")]),e._v(" "),n("p",[n("img",{attrs:{src:i(114),alt:"Event Subscriptions"}})]),e._v(" "),n("details",[n("summary",[e._v("Diagram source")]),e._v(" "),n("div",{staticClass:"language-plantuml extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("participant TPP\nparticipant ASPSP Authorisation Server\nparticipant ASPSP Resource Server\nparticipant ASPSP Notification Service\n\nnote over TPP, ASPSP Notification Service\nStep 1: Setup Event Subscription\nend note\n\nTPP <-> ASPSP Authorisation Server: Establish TLS 1.2 MA\nTPP -> ASPSP Authorisation Server: Initiate Client Credentials Grant\nASPSP Authorisation Server -> TPP: access-token\nTPP <-> ASPSP Resource Server: Establish TLS 1.2 MA\nTPP -> ASPSP Resource Server: POST /event-subscriptions\nASPSP Resource Server -> TPP: HTTP 201 (Created),  EventSubscriptionId\n\nnote over TPP, ASPSP Notification Service\nStep 2: Retrieve/Update/Delete Event Subscription\nend note\n\nTPP <-> ASPSP Authorisation Server: Establish TLS 1.2 MA\nTPP -> ASPSP Authorisation Server: Initiate Client Credentials Grant\nASPSP Authorisation Server -> TPP: access-token\nTPP <-> ASPSP Resource Server: Establish TLS 1.2 MA\nalt Retrive\nTPP -> ASPSP Resource Server: GET /event-subscriptions\nASPSP Resource Server -> TPP: HTTP 200 (OK)\nelse Update\nTPP -> ASPSP Resource Server: PUT /event-subscriptions/{EventSubscriptionId}\nASPSP Resource Server -> TPP: HTTP 200 (OK)\nelse Delete\nTPP -> ASPSP Resource Server: DELETE /event-subscriptions/{EventSubscriptionId}\nASPSP Resource Server -> TPP: HTTP 204 (OK)\nend alt\noption footer=bar\n")])])])]),e._v(" "),n("h3",{attrs:{id:"subscriptions-for-real-time-event-notifications-and-aggregated-polling"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#subscriptions-for-real-time-event-notifications-and-aggregated-polling"}},[e._v("#")]),e._v(" Subscriptions for Real Time Event Notifications and Aggregated Polling")]),e._v(" "),n("p",[e._v("ASPSPs may choose to offer Real Time Notifications, Aggregated Polling or a combination of both. TPPs will subscribe to the different notification mechanisms using the "),n("strong",[e._v("event-subscription")]),e._v(" resource.")]),e._v(" "),n("h4",{attrs:{id:"real-time-event-notifications"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#real-time-event-notifications"}},[e._v("#")]),e._v(" Real Time Event Notifications")]),e._v(" "),n("p",[e._v("TPPs must register an event subscription with a CallbackUrl for TPP hosted services to receive real time event notifications from an ASPSP (providing an ASPSP supports this functionality).")]),e._v(" "),n("p",[e._v("The CallbackUrl "),n("strong",[e._v("must")]),e._v(" end with the Event Notification API specification version number, followed by ‘/event-notifications'.")]),e._v(" "),n("p",[e._v("For example:")]),e._v(" "),n("ul",[n("li",[e._v("URL: "),n("a",{attrs:{href:"https://tpp.com/open-banking/v3.1/event-notifications",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://tpp.com/open-banking/v3.1/event-notifications"),n("OutboundLink")],1)])]),e._v(" "),n("h4",{attrs:{id:"aggregated-polling"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#aggregated-polling"}},[e._v("#")]),e._v(" Aggregated Polling")]),e._v(" "),n("p",[e._v("TPPs must register an event subscription to enable aggregated polling on an ASPSP (providing an ASPSP supports this functionality).")]),e._v(" "),n("h3",{attrs:{id:"release-management"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#release-management"}},[e._v("#")]),e._v(" Release Management")]),e._v(" "),n("p",[e._v("This section overviews the release management and versioning strategy for the Event Notification API.")]),e._v(" "),n("h4",{attrs:{id:"event-subscription-resource"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#event-subscription-resource"}},[e._v("#")]),e._v(" Event-Subscription Resource")]),e._v(" "),n("p",[e._v("TPPs "),n("strong",[e._v("must")]),e._v(" register for event-subscriptions with the version of Event Notification API they have implemented. The version field of the "),n("strong",[e._v("event-subscription")]),e._v(" resource is used for this purpose.")]),e._v(" "),n("h5",{attrs:{id:"post"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#post"}},[e._v("#")]),e._v(" POST")]),e._v(" "),n("ul",[n("li",[e._v("A TPP "),n("strong",[e._v("must only")]),e._v(" create an "),n("strong",[e._v("event-subscription")]),e._v(" on one version")])]),e._v(" "),n("h5",{attrs:{id:"get"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#get"}},[e._v("#")]),e._v(" GET")]),e._v(" "),n("ul",[n("li",[e._v("A TPP "),n("strong",[e._v("must not")]),e._v(" access a event-subscription on an older version, via the EventSubscriptionId for an event-subscription created in a newer version.\n"),n("ul",[n("li",[e._v("E.g., a event-subscription created in v4, accessed via v3.")])])]),e._v(" "),n("li",[e._v("An ASPSP "),n("strong",[e._v("must")]),e._v(" allow an event-subscription resource to be accessed in a newer version.")]),e._v(" "),n("li",[e._v("An ASPSP "),n("strong",[e._v("must")]),e._v(" ensure event-subscription fields are unchanged when accessed in a different version.")])]),e._v(" "),n("h5",{attrs:{id:"put"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#put"}},[e._v("#")]),e._v(" PUT")]),e._v(" "),n("ul",[n("li",[e._v("A TPP "),n("strong",[e._v("must not")]),e._v(" update an event-subscription on an older version via a EventSubscriptionId created in a newer version.\n"),n("ul",[n("li",[e._v("E.g., A event-subscription is created in v4, and a PUT request on v3.")])])]),e._v(" "),n("li",[e._v("An ASPSP "),n("strong",[e._v("must")]),e._v(" support updating an event-subscription from a previous version via a EventSubscriptionId created in a newer version.\n"),n("ul",[n("li",[e._v("E.g., A event-subscription is created in v3, and a PUT request on v4.")])])])]),e._v(" "),n("h5",{attrs:{id:"delete"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#delete"}},[e._v("#")]),e._v(" DELETE")]),e._v(" "),n("ul",[n("li",[e._v("A TPP "),n("strong",[e._v("must not")]),e._v(" delete an event-subscription on an older version via a EventSubscriptionId created in a newer version.\n"),n("ul",[n("li",[e._v("E.g. An event-subscription is created in v4, and request DELETE on v3.")])])]),e._v(" "),n("li",[e._v("An ASPSP "),n("strong",[e._v("must")]),e._v(" support deleting an event-subscription from a previous version via a EventSubscriptionId created in a newer version.\n"),n("ul",[n("li",[e._v("E.g., An event-subscription is created in v3, and request DELETE on v4.")])])])]),e._v(" "),n("h3",{attrs:{id:"event-subscription-per-tpp"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#event-subscription-per-tpp"}},[e._v("#")]),e._v(" Event-Subscription per TPP")]),e._v(" "),n("p",[e._v("An ASPSP will maintain at most, a single "),n("strong",[e._v("event-subscription")]),e._v(" resource per TPP.")])])}),[],!1,null,null,null);t.default=r.exports}}]);