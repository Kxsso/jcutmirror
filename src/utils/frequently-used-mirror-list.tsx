import React from 'react';
import { Icon } from '@iconify/react';
import ubuntuIcon from '@iconify/icons-simple-icons/ubuntu';
import archlinuxIcon from '@iconify/icons-logos/archlinux';
import debianIcon from '@iconify/icons-logos/debian';
import rockyIcon from '@iconify/icons-simple-icons/rockylinux';
import centOsIcon from '@iconify/icons-logos/centos-icon';

export default [
  {
    id: 'ubuntu',
    icon: <Icon height="4rem" icon={ubuntuIcon} color="#E95420" />,
  },
  {
    id: 'debian',
    icon: <Icon height="4rem" icon={debianIcon} />,
  },
  {
    id: 'centos',
    icon: <Icon height="4rem" icon={centOsIcon} />,
  },
  {
    id: 'archlinux',
    icon: <Icon height="4rem" icon={archlinuxIcon} />,
  },
  {
    id: 'rocky',
    icon: <Icon height="4rem" icon={rockyIcon} color="#10B981" />,
  },
];
