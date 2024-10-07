export interface Profile {
  name: string;
  role: string;
  avatar: string;
  about: string
}

export interface NavigationItem {
  name: string;
  icon: string;
  route: string;
  active: boolean;
}

export interface ShortcutItem {
  name: string;
  icon: string;
  route: string;
}

export interface SidebarData {
  profile: Profile;
  navigation: NavigationItem[];
  shortcuts: ShortcutItem[];
}

export const sidebarData: SidebarData = {
  profile: {
    name: 'Olivia Jacobs',
    role: 'Lifestyle Influencer',
    avatar:
      'https://ik.imagekit.io/jumzeey/microflux/Profile_dXWYAagBi.svg?updatedAt=1728291722916',
    about:
      'Complete your profile with details showcasing your skills and personality. Stand out and attract more opportunities.',
  },
  navigation: [
    {
      name: 'Dashboard',
      icon: 'https://ik.imagekit.io/jumzeey/microflux/home_zVsDKi57d.svg?updatedAt=1728292179751',
      route: '/',
      active: true,
    },
    {
      name: 'Campaigns',
      icon: 'https://ik.imagekit.io/jumzeey/microflux/megaphone_dRUXsIEin.svg?updatedAt=1728292180483',
      route: '#',
      active: false,
    },
    {
      name: 'Messages',
      icon: 'https://ik.imagekit.io/jumzeey/microflux/chatMail_xId4F-hkz.svg?updatedAt=1728292179757',
      route: '#',
      active: false,
    },
    {
      name: 'Earning History',
      icon: 'https://ik.imagekit.io/jumzeey/microflux/layers_7nIQMjKS5c.svg?updatedAt=1728292179758',
      route: '#',
      active: false,
    },
    {
      name: 'Settings',
      icon: 'https://ik.imagekit.io/jumzeey/microflux/settings_aR8-0rYrL.svg?updatedAt=1728292188743',
      route: '#',
      active: false,
    },
  ],
  shortcuts: [
    {
      name: 'TechGuru Tech Reviews',
      icon: 'https://ik.imagekit.io/jumzeey/microflux/techguru_OCtdUzW_2p.svg?updatedAt=1728292189564',
      route: '#',
    },
    {
      name: 'BeautyBlend Makeup',
      icon: 'https://ik.imagekit.io/jumzeey/microflux/beautyblend_Mx3LBgzp-.svg?updatedAt=1728292180826',
      route: '#',
    },
    {
      name: 'Wanderlust Adventures',
      icon: 'https://ik.imagekit.io/jumzeey/microflux/wandalust_EPF4m9vxV.svg?updatedAt=1728292193705',
      route: '#',
    },
    {
      name: 'Fitness Fusion Workouts',
      icon: 'https://ik.imagekit.io/jumzeey/microflux/fitnessfusion_4wA8r9Ezr.svg?updatedAt=1728292189473',
      route: '#',
    },
    {
      name: 'Home Harmony DIY',
      icon: 'https://ik.imagekit.io/jumzeey/microflux/homeharmoney_uHpiMkdIH.svg?updatedAt=1728292182032',
      route: '#',
    },
  ],
};
