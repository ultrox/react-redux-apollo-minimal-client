import getMuiTheme from "material-ui/styles/getMuiTheme";
import lightBaseTheme from "material-ui/styles/baseThemes/lightBaseTheme";
import darkBaseTheme from "material-ui/styles/baseThemes/darkBaseTheme";
import * as Colors from "material-ui/styles/colors";
import { fade } from "material-ui/utils/colorManipulator";

const getLightTheme_BlueOrange = () => {
  let overwrites = {
    palette: {
      primary1Color: Colors.blue400,
      accent1Color: Colors.orangeA700,
      pickerHeaderColor: Colors.blue400,
    },
  };
  return getMuiTheme(lightBaseTheme, overwrites);
};

const getDarkTheme_BlueOrange = () => {
  let overwrites = {
    palette: {
      primary1Color: Colors.blue400,
      accent1Color: Colors.orangeA700,
      pickerHeaderColor: Colors.blue400,
    },
  };
  return getMuiTheme(darkBaseTheme, overwrites);
};

/*
export {
    getDarkTheme_BlueOrange,
    getLightTheme_BlueOrange
}*/
