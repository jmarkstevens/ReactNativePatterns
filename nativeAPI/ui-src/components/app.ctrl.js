import {StackNavigator} from 'react-navigation';

import ActivityIndicatorPage from './pages/ActivityIndicator.page';
import ButtonPage from './pages/button.page';
import ModalPage from './pages/modal.page';
import IndexPage from './pages/index.page';
import PickerPage from './pages/picker.page';
import ScrollViewPage from './pages/scrollview.page';
import SliderPage from './pages/slider.page';
import StatusBarPage from './pages/statusbar.page';

const AppCtrl = StackNavigator({
  Index: {screen: IndexPage},
  ActivityIndicator: {screen: ActivityIndicatorPage},
  Button: {screen: ButtonPage},
  Modal: {screen: ModalPage},
  Picker: {screen: PickerPage},
  ScrollView: {screen: ScrollViewPage},
  Slider: {screen: SliderPage},
  StatusBar: {screen: StatusBarPage},
});

export default AppCtrl;
