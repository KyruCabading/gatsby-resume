---
id: 1
title: Software Engineer
---

### Silicon Valley Insight | May 2018 - Current

### Chat Application

I solely worked on the Web counterpart of a customer service oriented chat application.

Specifically:

- I worked on translating business requirements into UI
- Implemented an internal port of [react-native-gifted-chat](https://github.com/FaridSafi/react-native-gifted-chat) with Material UI in order to reuse chat logic the across the Mobile & Web application
- Ensured it was fast, mobile responsive, and supported browser notifications

_React, NextJS, GraphQL, MaterialUI, Cypress, Twilio_

### Cryptocurrency Data platform

Worked on a dataplatform that gathers ticker data from 5 cryptocurrency exchanges into an AWS data lake. This data is then exposed on a GraphQL endpoint through Elasticsearch.

Specifically:

#### Frontend

- Implemented dashboard screens with data visualizations on high-frequency cryptocurrency ticker data, similar to stock charts.

_React, NextJS, GraphQL, recharts_

#### Backend

- Implemented ETL functions that injest the data from API endpoints of these cryptocurrency exchanges. Most of them were through websockets and we had to parse these different shapes of data into a unified standard to be able to calculate a "blended" price.

- Created the Elasticsearch service through AWS Kibana to allow lightning fast queries into our AWS S3 data lake.

- Implemented the Node GraphQL server schema & resolver functions that connect to our elasticsearch service in order to provide unified data to the front-end client.

_AWS, Kibana Elasticsearch, GraphQL_
