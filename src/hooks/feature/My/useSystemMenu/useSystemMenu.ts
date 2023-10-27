import {SystemMenuCallback, SystemMenus} from './lib/useSystemMenu';

const useSystemMenu = (): SystemMenuCallback => {
  const systemMenus: SystemMenus[] = [
    {
      key: 'noti',
      title: '공지사항',
      directionType: 'url',
      url: '',
    },
    {
      key: 'faq',
      title: '자주하는 질문',
      directionType: 'url',
      url: '',
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
