
import React, { useState, useEffect } from 'react';
import './data.css'

function Data({ val }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [filter, setFilter] = useState('');

  useEffect(() => {
    if (val.length !== 6) {
      setError('Pincode must be 6 digits');
      return;
    }
   
    setLoading(true);
    fetch(`https://api.postalpincode.in/pincode/${val}`)
      .then(response => response.json())
      .then(result => {
        setLoading(false);
        if (result[0].Status === 'Error') {
          setError(result[0].Message);
        } else {
          setData(result[0].PostOffice);
          setError('');
        }
      })
      .catch(() => {
        setLoading(false);
        setError('Failed to fetch data');
      });
  }, [val]);

  const filteredData = data?.filter(postOffice =>
    postOffice.Name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      {loading && <div className="loader">Loading...</div>}
      {error && <div className="error">{error}</div>}
      {!loading && !error && (
        <>
          <input className='fil'
            type="text"
            placeholder="Filter by post office name"
            value={filter}
            onChange={e => setFilter(e.target.value)}
          />
          {filteredData?.length ? (
            <div className='di'>
              {filteredData.map(postOffice => (
                <div key={postOffice.Name} className='in_di'>
                  <div>Post Office Name: {postOffice.Name}</div>
                  <div>Pincode: {postOffice.Pincode}</div>
                  <div>District: {postOffice.District}</div>
                  <div>State: {postOffice.State}</div>
                </div>
              ))}
            </div>
          ) : (
            <div>Couldn’t find …</div>
          )}
        </>
      )}
    </div>
  );
}

export default Data;
