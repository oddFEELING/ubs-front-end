import {
  MapIcon,
  CogIcon,
  HomeIcon,
  UsersIcon,
  AcademicCapIcon,
  MegaphoneIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';

export const navigation = [
  {
    name: 'Dashboard',
    href: 'dashboard',
    icon: HomeIcon,
  },
  {
    name: 'Staff',
    href: 'staff',
    icon: UsersIcon,
  },
  {
    name: 'Students',
    href: 'students',
    icon: UserGroupIcon,
  },
  {
    name: 'Classes',
    href: 'classes',
    icon: AcademicCapIcon,
  },
  {
    name: 'Notifications',
    href: 'notifications',
    icon: MegaphoneIcon,
  },
  {
    name: 'Reports',
    href: 'reports',
    icon: MapIcon,
  },
  {
    name: 'Settings',
    href: 'settings',
    icon: CogIcon,
  },
];
