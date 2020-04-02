---
next: false
---

# Version control

| Version | Date | Authors | Comments |
| --- | --- | --- | --- |
| v4.0-draft7 | 18 Mar 2019 | API Delivery Team | - Updated the description for Status Code 403 Forbidden to suggest - "Re-authenticating the PSU may result in an appropriate token that may be used." to cater Re-Authentication scenarios.<BR/>- Removed reference to Open Banking Security Profile - Implementer's Draft 1.1.2<BR/>-Updated the version of FAPI read & Write API Security Profile to ID2<BR/>- Changes for alignment with FAPI Implementer's Draft 2<BR/>* Replace references of `x-fapi-customer-last-logged-time` to `x-fapi-auth-date`<BR/>* Remove references of x-fapi-financial-id<BR/>- Added description of how an id_token_hint can be used to re-identify a PSU |
| v3.1.2-RC1 |22 Mar 2019 |API Delivery Team | - Changed header application/jwe to application/jose+jwe and added guidance<BR/>- Change reference to CIBA specification and it is no longer part of MODRNA<BR/>- Removed the CIBA Infobox - "The CIBA profile is under active development by members of the FAPI working group, and the first implementers' draft is due to be published shortly. However, at the time of writing the Read/Write API specification, the CIBA profile lacks full implementation detail and is optional for implementation by ASPSPs. The CIBA flows have been included since the v3.0 Read/Write API specification as forward guidance on how decoupled flows may be implemented in the future once the full CIBA profile is published."<BR/>- Updated "Identifying the PSU" with examples and a better description.<BR/>- Clarified that a consent must be created before starting a CIBA flow and the intent id must be passed to the bc-authorize end-point.<BR/>- Clarified that an id_token_hint will result in the generation of a new id_token bound to a different intent_id<BR/>- Release version renamed to 3.1.2|
| v3.1.2 | 01 May 2019 | API Delivery Team | - 3.1.2 final release. No change from RC1|
