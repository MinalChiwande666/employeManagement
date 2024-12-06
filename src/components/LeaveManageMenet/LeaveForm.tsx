import React, { SetStateAction, useState } from 'react';
// import { Employee } from '../../types/Employee';
import { useDispatch } from 'react-redux';
import { addLeave } from '../../redux/slices/LeaveSlice';
interface LeaveFormProp{
  open: Boolean,
  setOpen : React.Dispatch<SetStateAction<any>>,
  Leaves : [] | any
}

const LeaveForm: React.FC<LeaveFormProp> = ({open,setOpen,Leaves}:LeaveFormProp) => {
  const [reasonCal, setReasonCal] = useState('');

  const dispatch = useDispatch()
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    if (value.length <= 300) {
      setReasonCal(value);
    }
  };


  const handleSubmitLeave = ()=>{
    let leaveform = {
      id:Math.floor(Math.random() * 10000).toString(),
      emp_id : Math.floor(Math.random() * 10000).toString() || "",
      leaves: Leaves, //this is array
      reason:reasonCal}
      
    dispatch(addLeave(leaveform))

  }
  return (
    <>
    {
      open && 
    <div className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50">
      <div className="p-4 bg-white shadow-lg rounded-md w-4/5 max-w-lg">
        <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-2">
          Reason for Leave
        </label>
        <textarea
          id="reason"
          value={reasonCal}
          onChange={handleInputChange}
          rows={5}
          className="border border-gray-300 w-full p-2 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your reason (max 300 characters)..."
        />
        <div className="flex justify-between items-center mt-2">
          <span
            className={`text-sm ${
              reasonCal.length === 300 ? 'text-red-500' : 'text-gray-500'
            }`}
          >
            {reasonCal.length}/300
          </span>
        </div>
        <button onClick={handleSubmitLeave} className="bg-gradient-to-tr text-white  from-blue-600 to-blue-400 px-3 py-2">Submit Leave</button>
      </div>
    </div>
    }
    </>
  );
};

export default LeaveForm;
