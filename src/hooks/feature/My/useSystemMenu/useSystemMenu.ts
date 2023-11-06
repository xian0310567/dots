import {SystemMenuCallback, SystemMenus} from './lib/useSystemMenu';

const useSystemMenu = (): SystemMenuCallback => {
  const systemMenus: SystemMenus[] = [
    // {
    //   key: 'appinfo',
    //   title: '앱 정보',
    //   onPress: () => {},
    // },
    {
      key: 'noti',
      title: '공지사항',
      onPress: () => {},
    },
    {
      key: 'faq',
      title: '자주하는 질문',
      onPress: () => {},
    },

    // {
    //   title: '서비스 이용약관',
    //   directionType: 'url',
    //   url: '',
    // },
    // {
    //   title: '개인정보취급방침',
    //   directionType: 'url',
    //   url: '',
    // },
  ];

  return {systemMenus};
};

export default useSystemMenu;
