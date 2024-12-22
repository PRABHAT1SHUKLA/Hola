import { useGetCalls } from "@/hooks/useGetCalls";
import { CallRecording } from "@stream-io/video-react-sdk";
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react";


const CallList = ({type}:{type:'ended'|'upcoming'|'recordings'}) =>{
  
  const  router = useRouter();
  const { endedCalls, upcomingCalls, callRecordings, isLoading } =
  useGetCalls();

  const [recordings, setRecordings] = useState<CallRecording[]>([]);

  const getCalls =()=>{
    switch(type){
      case 'ended':
        return endedCalls;
      case 'recordings':
        return recordings;
      case 'upcoming':
        return upcomingCalls;
      default:
        return [];
    }
  }

  const getNoCallsMessage = () => {
    switch (type) {
      case 'ended':
        return 'No Previous Calls';
      case 'upcoming':
        return 'No Upcoming Calls';
      case 'recordings':
        return 'No Recordings';
      default:
        return '';
    }
  };

  useEffect(()=>{
    const fetchRecordings = async() =>{
      const callData = await Promise.all(
        callRecordings?.map((meeting)=> meeting.queryRecordings()) ?? []
      );

      const recordings = callData
      .filter((call) => call.recordings.length > 0)
      .flatMap((call) => call.recordings);
    }

    setRecordings(recordings)
  })



}