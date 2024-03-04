import React, { useEffect } from 'react';
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil';
import { notifications, totalNotificationSelector } from './atom';
import axios from 'axios';

function App() {
  return (
    <div>
      <RecoilRoot>
        <MainApp></MainApp>
      </RecoilRoot>
    </div>
  );
}

function MainApp() {
  const [notificationCount, setNotificationCount] = useRecoilState(notifications);
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);

  useEffect(() => {
    axios.get("https://sum-server.100xdevs.com/notifications")
      .then(function (res) {
        setNotificationCount(res.data);
      });
  }, []);

  const buttonStyle = {
    padding: '8px 16px',
    margin: '0 4px',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: '#fff',
    color: '#333',
    fontWeight: 'bold',
    cursor: 'pointer'
  };

  return (
    <>
      <button style={buttonStyle}>Home</button>
      <button style={buttonStyle}>My Network ({notificationCount.network})</button>
      <button style={buttonStyle}>Jobs ({notificationCount.jobs})</button>
      <button style={buttonStyle}>Messaging ({notificationCount.messaging})</button>
      <button style={buttonStyle}>Notification ({notificationCount.notifications})</button>
      <button style={{ ...buttonStyle, backgroundColor: '#0077B5', color: '#fff' }}>Me ({totalNotificationCount})</button>
    </>
  );
}

export default App;
