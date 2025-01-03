import { useLocation, useNavigate } from 'react-router-dom';
import EventForm from '../components/EventForm';
import { SetStateAction, useState } from 'react';

type Event = {
  id: number;
  title: string;
  description: string;
  startTime: string;
  location: string;
  image: string;
  status: string;
  interestedCount: number;
};
type Props = {
  eventList: Event[];
  setEventList: React.Dispatch<SetStateAction<Event[]>>;
};

const EditEvent = ({ eventList, setEventList }: Props) => {
  const location = useLocation();
  const event = location.state;
  const navigate = useNavigate();

  const [eventInput, setEventInput] = useState(event || null);
  const [errMsg, setErrMsg] = useState('');

  const handleEventInputChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setEventInput({ ...eventInput, [name]: value });
  };

  const handleUpdateEvent = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const updatedEventList = eventList.map((item) =>
      item.id === eventInput.id ? eventInput : item,
    );
    setEventList(updatedEventList);
    navigate('/events');
  };

  if (!event) {
    setErrMsg('Event not found...');
    return <p>{errMsg}</p>;
  }
  return (
    <section>
      <h2 className="text-secodary font-semibold text-s">Edit Event</h2>
      <EventForm
        eventInput={eventInput}
        name={'Update'}
        handleEventInputChange={handleEventInputChange}
        handleSubmitForm={handleUpdateEvent}
      />
    </section>
  );
};

export default EditEvent;
