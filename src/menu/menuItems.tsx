import { MenuItem } from "../interfaces/appInterfaces";

export const menuItems: MenuItem[] = [
    {
        name: 'Animation 101',
        iconName: 'cube-outline',
        component: 'Animation101Screen'
    },
    {
        name: 'Animation 102',
        iconName: 'albums-outline',
        component: 'Animation102Screen'
    },
    {
        name: 'Switches',
        iconName: 'toggle-outline',
        component: 'SwitchScreen'
    },
    {
        name: 'Alerts',
        iconName: 'alert-circle-outline',
        component: 'AlertScreen'
    },
    {
        name: 'TextInputs',
        iconName: 'document-text-outline',
        component: 'TextInputScreen'
    },
    {
        name: 'PullToRefresh',
        iconName: 'refresh-circle-outline',
        component: 'PullToRefreshScreen'
    },
    {
        name: 'Section List',
        iconName: 'list-outline',
        component: 'CustomSectionListScreen'
    },
    {
        name: 'Modal',
        iconName: 'copy-outline',
        component: 'ModalScreen'
    },
    {
        name: 'InfiniteScroll',
        iconName: 'download-outline',
        component: 'InfiniteScrollScreen'
    },
    {
        name: 'Slides',
        iconName: 'flower-outline',
        component: 'SlidesScreen'
    },
    {
        name: 'Themes',
        iconName: 'flask-outline',
        component: 'ChangeThemeScreen'
    },
]
