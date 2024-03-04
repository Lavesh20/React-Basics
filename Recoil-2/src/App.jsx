import { RecoilRoot, useRecoilValue } from "recoil"
import { jobsAtom, messageAtom, newworkAtom, notificationAtom, totalNotificationSelector } from "./atoms"


function App() {
  return (
    <div>
      <RecoilRoot>
        <MainApp></MainApp>
      </RecoilRoot>
    </div>
  )
 
}

function MainApp(){
 const networkNotificationCount = useRecoilValue(newworkAtom);
 const jobNotificationCount = useRecoilValue(jobsAtom);
 const messageNotificationCount = useRecoilValue(messageAtom);
 const notificationCount = useRecoilValue(notificationAtom);
// const finalValue = networkNotificationCount +  jobNotificationCount + messageNotificationCount + notificationCount
const totalNotificationValue = useRecoilValue(totalNotificationSelector);

  return (
    <>
      <button>Home</button>

      <button>My network ({networkNotificationCount >=100 ? "99+":networkNotificationCount})</button>
      <button>Jobs ({jobNotificationCount >=100 ? "99+":jobNotificationCount})</button>
      <button>Messaging ({messageNotificationCount >=100 ? "99+" : messageNotificationCount})</button>
      <button>Notifications ({notificationCount >=100 ? "99+" : notificationCount})</button>
      
      <button>Me ({totalNotificationValue})</button>

    </>
  )
    
  
}

export default App
