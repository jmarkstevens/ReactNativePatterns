import {StackNavigator} from 'react-navigation';

import ButtonPage from './pages/button.page';
import DropDownPage from './pages/dropdown.page';
import IndexPage from './pages/index.page';
import GalleryPage from './pages/gallery.page';
import InputsPage from './pages/inputs.page';
import ProgressBarPage from './pages/progressbar.page';
import RangeSliderPage from './pages/rangeslider.page';
import TreeViewPage from './pages/treeview.page';

const AppCtrl = StackNavigator({
  Index: {screen: IndexPage},
  Button: {screen: ButtonPage},
  DropDown: {screen: DropDownPage},
  Gallery: {screen: GalleryPage},
  Inputs: {screen: InputsPage},
  ProgressBar: {screen: ProgressBarPage},
  RangeSlider: {screen: RangeSliderPage},
  TreeView: {screen: TreeViewPage},
});

export default AppCtrl;
