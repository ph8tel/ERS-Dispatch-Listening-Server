/*
 * src/CallList.jsx
 */

import React from 'react';

import CallListEntry from './CallListEntry.jsx';

const CallList = ( {callData} ) => (

  <div className="call">
    <h3>Call List</h3>

    <div className="call-table">
      <div className="call-row">
        <div className="call-data">Timeout</div>
        <div className="call-data">Description</div>
        <div className="call-data">District</div>
        <div className="call-data">Location</div>
        <div className="call-data">Premise</div>
        <div className="call-data">Cross Streets</div>
        <div className="call-data">Assignment</div>
        <div className="call-data">Radio Freq</div>
        <div className="call-data">Map</div>
        <div className="call-data">Remarks</div>
      </div>

      {callData.map((call, idx) => (
        <CallListEntry
          callTimeout={ call.rec_dt }
          callDescription={ call.call_description }
          callDistrict={ call.city }
          callLocation={ call.location }
          callPremiseName={ call.premise_name }
          callCrossStreets={ call.x_street_name }
          callAssignment={ call.UnitList }
          callRadioFreq={ (call.UnitList) }
          callMap={ call.x_street_name }
          callRemarks={ call.cfs_remark }
          key={ idx }
        />
      ))}
    </div>
  </div>
);

export default CallList;
