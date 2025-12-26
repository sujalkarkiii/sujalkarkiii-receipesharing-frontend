import React, { useEffect, useState } from 'react';
import {  handleaccept, handledeleterequest, handleloadrequest } from '../Database/connection';
import Friends from '../components/Friends';

const Mine_page = () => {
  const [fetcing, setrequest] = useState([]);

  const fetchrequest = async () => {
    const handlerequest = await handleloadrequest();
    setrequest(handlerequest.requests);
  };
  useEffect(() => {
    fetchrequest();
  }, []);

  const handleclick = async (userId, type) => {

    try {
      if (type === "accept") {
        await handleaccept(userId);
        fetchrequest()
      } else if (type === "cancel") {
        await handledeleterequest(userId);
        fetchrequest()
      }

    } catch (err) {
      console.log(err);
    }
  };

  return (<>
  <Friends/>
    <div className="div">
      {fetcing.map((req) => (
        <div key={req._id} className="div">

          <p>{req.sentby.username}</p>
          <button onClick={() => handleclick(req.sentby._id, "accept")}
          >+</button>
          <button onClick={() => handleclick(req.sentby._id, "cancel")}
          >-</button>
        </div>
      ))}
    </div>
      </>
  );
};

export default Mine_page;
