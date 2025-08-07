import { FaPlane, FaHotel, FaMapMarkedAlt } from 'react-icons/fa';

export const tabs = [
  {
    id: 'flights',
    label: 'Flights',
    icon: <FaPlane />,
  },
  {
    id: 'hotels',
    label: 'Hotels',
    icon: <FaHotel />,
  },
  {
    id: 'activities',
    label: 'Activities',
    icon: <FaMapMarkedAlt />,
    new: true,
  },
];
