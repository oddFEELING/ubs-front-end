import {
  HomeIcon,
  CalendarIcon,
  UserGroupIcon,
  SearchCircleIcon,
  SpeakerphoneIcon,
  MapIcon,
  CogIcon,
} from '@heroicons/react/outline';

export const navigation = [
  { name: 'Dashboard', href: '#', icon: HomeIcon, current: true },
  { name: 'Calendar', href: '#', icon: CalendarIcon, current: false },
  { name: 'Students', href: '#', icon: UserGroupIcon, current: false },
  { name: 'Departments', href: '#', icon: SearchCircleIcon, current: false },
  { name: 'Announcements', href: '#', icon: SpeakerphoneIcon, current: false },
  { name: 'Staff', href: '#', icon: MapIcon, current: false },
  { name: 'Settings', href: '#', icon: CogIcon, current: false },
];
