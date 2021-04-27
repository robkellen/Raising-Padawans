import React, { useState } from "react";
import clsx from "clsx";
import { useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import PinterestIcon from "@material-ui/icons/Pinterest";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import MailIcon from "@material-ui/icons/Mail";
import RPTitle from "../../utils/images/RaisingPadawansTitle.svg";
import appNavStyles from "./AppNavStyles";

function AppNav() {
  //define styles
  const classes = appNavStyles();
  const theme = useTheme();

  //set initial state of side drawer to be closed
  const [open, setOpen] = useState(false);

  //functions to handle toggling of side drawer
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar
        position="fixed"
        elevation={0}
        style={{ backgroundColor: "#DD9BAB" }}
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          {/* <img src={RPTitle} alt="Raising Padawans" /> */}
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="50.8mm"
            height="25.4mm"
            viewBox="0 0 50.8 25.4"
            // className={classes.rpTitleSvg}
          >
            <defs>
              <pattern
                id="goldFoil"
                patternUnits="userSpaceOnUse"
                width="100"
                height="100"
              >
                <image
                  href="https://res.cloudinary.com/robbiek/image/upload/v1619464574/rose_gold_foil_vzelsi.jpg"
                  x="0"
                  y="0"
                  width="100"
                  height="100"
                />
              </pattern>
            </defs>
            <g>
              <path
                d="M 28.0451 9.480839 C 28.14887 9.37513 28.21493 9.25619 28.27155 9.130671 C 28.29987 9.051378 28.33758 8.972084 28.37534 8.89282 C 28.40364 8.859776 28.4414 8.820127 28.47911 8.800314 C 28.6301 8.727628 28.81881 8.787083 28.83766 8.912628 C 28.8471 8.991922 28.83766 9.071188 28.82825 9.143878 C 28.79049 9.342087 28.73386 9.540318 28.69616 9.74513 C 28.65839 9.99622 28.62066 10.25389 28.60177 10.50498 C 28.57348 10.74943 28.57348 10.99389 28.55463 11.23178 C 28.55463 11.25819 28.55463 11.27802 28.55463 11.31104 C 28.58289 11.30444 28.60177 11.29783 28.61118 11.28462 C 29.24339 10.84194 29.84723 10.38603 30.37564 9.877279 C 30.50772 9.75834 30.68699 9.55353 30.85688 9.355318 C 30.87574 9.328881 30.91347 9.315672 30.96065 9.315672 C 30.98897 9.315672 31.00782 9.322277 31.02668 9.342087 C 31.03611 9.355318 31.03611 9.375129 31.02668 9.388337 C 30.94175 9.500671 30.84743 9.612984 30.74364 9.72532 C 30.5172 9.963177 30.26244 10.19443 29.97935 10.41247 C 29.53592 10.76264 29.07353 11.11283 28.62066 11.46302 C 28.57348 11.49604 28.54515 11.53569 28.54515 11.58194 C 28.5263 11.83303 28.49801 12.09069 28.44139 12.33518 C 28.34702 12.70518 28.19604 13.05535 27.92242 13.3791 C 27.73372 13.61035 27.47896 13.79535 27.13928 13.9209 C 26.94114 13.98698 26.73356 13.99358 26.52599 13.96054 C 26.40333 13.94073 26.34671 13.89448 26.33728 13.80198 C 26.31838 13.68304 26.34672 13.56411 26.39389 13.45179 C 26.49766 13.20733 26.67695 12.98929 26.85623 12.77124 C 27.04497 12.55319 27.26197 12.34839 27.49781 12.15678 C 27.55443 12.11714 27.57335 12.07088 27.58276 12.01803 C 27.6299 11.69428 27.66767 11.37053 27.73373 11.04677 C 27.79034 10.71639 27.87525 10.38603 27.95072 10.05568 C 27.9696 9.949974 28.00733 9.850839 28.03566 9.751736 C 28.03566 9.738527 28.03566 9.718718 28.02621 9.698879 C 27.99789 9.725319 27.97904 9.751737 27.95072 9.771574 C 27.77145 9.963177 27.56387 10.12834 27.31858 10.28033 C 27.18646 10.36622 27.04494 10.43889 26.87508 10.48514 C 26.62976 10.55123 26.38443 10.53799 26.158 10.44549 C 26.01646 10.391 25.93862 10.30675 25.90059 10.2095 L 25.88478 10.15988 L 25.65736 10.39264 C 25.46865 10.58424 25.2705 10.77587 25.06294 10.95425 C 24.83646 11.15248 24.58174 11.32428 24.29865 11.47623 C 24.08164 11.58854 23.84575 11.66783 23.56269 11.65463 C 23.48722 11.65463 23.41174 11.64802 23.33626 11.6414 C 23.18527 11.61499 23.0815 11.5489 23.02488 11.44979 C 22.9494 11.33088 22.92108 11.21194 22.92108 11.08639 C 22.91165 10.78908 22.95883 10.49837 23.00602 10.20764 C 23.03431 10.06889 23.07207 9.930136 23.10036 9.791384 C 23.13811 9.60638 23.16641 9.414778 23.10979 9.223167 C 23.10036 9.17692 23.0626 9.137272 23.04374 9.09763 C 23.02488 9.071187 22.98713 9.071187 22.9494 9.08442 C 22.72293 9.17692 22.53421 9.295834 22.3644 9.427986 C 22.04359 9.679073 21.81712 9.969784 21.60012 10.26712 C 21.56239 10.32658 21.52464 10.38603 21.47745 10.43889 C 21.43027 10.49837 21.43974 10.57104 21.42084 10.63712 C 21.38312 10.76925 21.34536 10.89479 21.30764 11.02694 C 21.28874 11.09302 21.26045 11.15908 21.23212 11.22514 C 21.20383 11.31764 21.10949 11.37053 20.9774 11.37713 C 20.88302 11.38373 20.78868 11.37713 20.70374 11.37052 C 20.62826 11.36389 20.58111 11.33088 20.58111 11.27802 C 20.58111 11.21194 20.57164 11.14588 20.58111 11.08639 C 20.58111 10.96088 20.58111 10.83533 20.59054 10.70979 C 20.59997 10.57764 20.61883 10.44549 20.63769 10.31337 C 20.64714 10.22747 20.65893 10.14322 20.67191 10.05981 L 20.69772 9.904428 L 20.61371 9.982988 C 20.51582 10.07054 20.41203 10.15478 20.29881 10.23407 C 19.95914 10.48514 19.58172 10.70979 19.16653 10.89479 C 18.81743 11.04014 18.44943 11.06659 18.07204 10.96748 C 17.88333 10.92123 17.7701 10.82873 17.70405 10.69658 C 17.6333 10.56773 17.6103 10.43146 17.60323 10.29333 L 17.60318 10.29109 L 17.55196 10.34206 C 17.1922 10.68076 16.6953 11.01084 16.04306 11.15248 C 16.00531 11.16568 15.99588 11.17889 16.00531 11.20533 C 16.01478 11.37053 15.97701 11.53569 15.92039 11.70088 C 15.86378 11.87267 15.71282 11.99819 15.51468 12.10393 C 15.3354 12.20303 15.12782 12.2823 14.88249 12.29553 C 14.75983 12.30213 14.62773 12.29553 14.5051 12.2823 C 14.33525 12.26249 14.25977 12.15678 14.29748 12.04445 C 14.36353 11.83303 14.55225 11.68105 14.76929 11.5423 C 14.86363 11.48944 14.95797 11.43659 15.05234 11.38373 C 15.0712 11.37713 15.08063 11.35729 15.08063 11.34408 C 15.09006 11.19213 15.04291 11.05338 14.99573 10.908 C 14.91081 10.63712 14.75982 10.38603 14.60887 10.13497 C 14.56642 10.05898 14.5216 9.984646 14.47677 9.910316 L 14.4073 9.792162 L 14.35032 9.849398 C 14.211 9.985054 14.06239 10.11514 13.89256 10.23407 C 13.55289 10.48514 13.17547 10.70979 12.76028 10.89479 C 12.41118 11.04014 12.04318 11.06659 11.66579 10.96748 C 11.47708 10.92123 11.36385 10.82873 11.2978 10.69658 C 11.25063 10.61068 11.22469 10.52148 11.21054 10.43063 L 11.20298 10.35409 L 11.19207 10.36693 C 11.03179 10.54822 10.85842 10.72382 10.67443 10.89479 C 10.51401 11.04677 10.32529 11.17889 10.11772 11.29123 C 9.853525 11.43659 9.561041 11.46963 9.240232 11.41014 C 9.013762 11.37052 8.843947 11.23177 8.815619 11.06658 C 8.796762 10.98729 8.76847 10.90139 8.806192 10.82212 C 8.759005 10.68337 8.796762 10.53799 8.815619 10.39924 C 8.825051 10.33318 8.843948 10.26049 8.853378 10.19443 L 8.843948 10.18783 C 8.81562 10.20764 8.79676 10.22748 8.768469 10.24728 C 8.655234 10.33979 8.542 10.43229 8.419333 10.52478 C 8.107992 10.74943 7.617332 10.71639 7.324846 10.60408 C 7.20453 10.55949 7.12669 10.48886 7.075385 10.40617 L 7.046092 10.34753 L 6.97894 10.43548 C 6.756909 10.71762 6.505714 10.98399 6.201422 11.23178 C 6.03157 11.37053 5.842856 11.50928 5.61642 11.61499 C 5.267284 11.77355 4.889894 11.81979 4.493572 11.76694 C 4.22938 11.7339 4.040704 11.62819 3.88028 11.46963 C 3.719894 11.29783 3.61609 11.10623 3.512287 10.91462 C 3.483994 10.85514 3.446238 10.79568 3.417948 10.72962 C 3.399086 10.66354 3.361327 10.59748 3.333037 10.53139 C 3.304709 10.46532 3.27642 10.39924 3.248092 10.33318 C 3.219801 10.26049 3.191513 10.19443 3.163186 10.12834 C 3.144325 10.06228 3.116001 9.99622 3.087708 9.923532 C 3.03109 9.791384 2.974472 9.659237 2.823517 9.560135 C 2.748039 9.500672 2.663129 9.474234 2.549894 9.507274 C 2.493277 9.527088 2.417798 9.540319 2.34232 9.553528 C 2.323424 9.698879 2.295135 9.844236 2.276273 9.99622 C 2.257378 10.08209 2.247945 10.17459 2.229083 10.26712 C 2.219655 10.28693 2.163037 10.56443 2.153605 10.58424 C 2.13471 10.65693 1.927136 11.72069 1.832797 11.87267 C 1.785606 11.95194 1.681841 11.98499 1.502557 11.99159 C 1.313844 11.99819 1.12513 11.99819 0.9364161 11.95855 C 0.9458461 11.89249 0.9552779 11.8264 0.9741731 11.75373 C 1.002466 11.60838 1.219504 10.76264 1.238365 10.67014 C 1.266654 10.45872 1.304415 10.25389 1.332706 10.04247 C 1.379894 9.80459 1.41765 9.566732 1.455369 9.328876 C 1.483697 9.190128 1.51199 9.057981 1.53085 8.925831 C 1.559174 8.714418 1.596894 8.509582 1.615792 8.298164 C 1.644082 8.053676 1.662943 7.809221 1.672375 7.564762 C 1.672376 7.41278 1.653514 7.260818 1.587465 7.122067 C 1.559175 7.069216 1.511989 7.016361 1.47423 6.970112 C 1.427078 6.917255 1.408184 6.917256 1.323276 6.943668 C 1.134562 7.016361 0.9741764 7.115466 0.8515096 7.241006 C 0.7099843 7.379762 0.6061788 7.538322 0.5684566 7.703513 C 0.549561 7.756365 0.549561 7.809221 0.549561 7.862072 C 0.5401325 7.941364 0.5212712 7.954573 0.4080362 7.954573 C 0.3986039 7.954573 0.3891754 7.954573 0.3703146 7.954573 C 0.2853694 7.947971 0.2476473 7.934763 0.2382183 7.868676 C 0.2287526 7.815822 0.2287526 7.749762 0.2382183 7.696882 C 0.3136978 7.379762 0.5118394 7.108863 0.8986979 6.917255 C 1.10627 6.811525 1.351604 6.752065 1.615796 6.78511 C 1.955464 6.818129 2.163037 6.976713 2.285704 7.201363 C 2.389472 7.392969 2.408368 7.591175 2.427229 7.796013 C 2.436659 7.908324 2.446091 8.014034 2.464986 8.126369 C 2.483847 8.099929 2.502708 8.080119 2.521569 8.053675 C 2.738606 7.749763 2.983903 7.452428 3.295281 7.194757 C 3.493426 7.03617 3.691569 6.88421 3.936901 6.765271 C 4.116185 6.68598 4.304898 6.619918 4.51247 6.600111 C 4.795521 6.573671 5.040852 6.619917 5.257856 6.745465 C 5.47486 6.864377 5.635284 7.009756 5.691901 7.201363 C 5.748519 7.353325 5.729622 7.50528 5.673006 7.657261 C 5.569234 7.921533 5.371089 8.152784 5.116331 8.357622 C 4.748332 8.648331 4.323759 8.892813 3.833097 9.08442 C 3.587801 9.18352 3.333037 9.276023 3.078278 9.375126 C 3.087707 9.381733 3.106568 9.394968 3.116 9.394968 C 3.370759 9.474236 3.540613 9.60638 3.644418 9.778175 C 3.700999 9.870675 3.757614 9.969778 3.795374 10.06888 C 3.918038 10.34639 4.021809 10.61728 4.144474 10.89479 C 4.219952 11.05998 4.314324 11.22515 4.40866 11.38373 C 4.44642 11.44319 4.503038 11.50265 4.559621 11.55553 C 4.672854 11.6414 4.80495 11.66784 4.965374 11.63479 C 5.08804 11.60177 5.201235 11.55552 5.305042 11.49604 C 5.550373 11.35729 5.748517 11.19213 5.94666 11.02033 C 6.324054 10.68337 6.607139 10.31337 6.890193 9.936735 C 7.088337 9.659236 7.248758 9.37513 7.409143 9.091022 C 7.437433 9.018338 7.541238 8.985313 7.63558 9.011731 C 7.682767 9.02494 7.711093 9.05138 7.701626 9.091022 L 7.660908 9.222254 L 7.692873 9.207747 C 7.760045 9.180531 7.834351 9.160398 7.919278 9.150482 C 8.164574 9.124069 8.409904 9.137272 8.655233 9.203338 C 8.711851 9.216566 8.768469 9.236376 8.777899 9.289232 C 8.721284 9.335484 8.655235 9.328878 8.579756 9.309069 C 8.485382 9.289235 8.381613 9.262821 8.287235 9.242983 C 8.174038 9.223171 8.117423 9.242981 8.070236 9.309069 C 8.013622 9.381735 7.966426 9.454422 7.919278 9.527086 C 7.739996 9.804585 7.63619 10.08872 7.683378 10.39924 C 7.692808 10.43889 7.70224 10.47853 7.721134 10.51158 C 7.749427 10.57764 7.824903 10.60408 7.92871 10.59087 C 8.041945 10.57764 8.126854 10.53799 8.21176 10.48514 C 8.315564 10.41908 8.419335 10.34639 8.51371 10.27372 C 8.655238 10.14818 8.796762 10.02263 8.93829 9.890487 C 8.966614 9.857471 8.994906 9.817823 9.013765 9.778175 C 9.089245 9.659236 9.164759 9.533715 9.240236 9.414776 C 9.268526 9.375128 9.306281 9.335481 9.344002 9.302438 C 9.391191 9.262817 9.44781 9.236377 9.513857 9.229776 C 9.636524 9.209937 9.730859 9.262821 9.740292 9.34869 C 9.759188 9.513882 9.712001 9.665834 9.664814 9.824424 C 9.598767 10.05567 9.52329 10.28693 9.466673 10.52478 C 9.410052 10.72962 9.381763 10.94104 9.428947 11.15248 C 9.438377 11.19212 9.45724 11.23177 9.476099 11.27139 C 9.513855 11.32428 9.551616 11.33748 9.627092 11.31104 C 9.712002 11.28463 9.787479 11.25819 9.862955 11.21854 C 10.07053 11.11944 10.24038 10.98729 10.40081 10.84854 C 10.62017 10.66519 10.83423 10.4744 11.02707 10.27618 L 11.19167 10.09779 L 11.19033 10.06558 C 11.18989 9.976377 11.19875 9.887194 11.21289 9.797987 C 11.25061 9.507277 11.32613 9.223169 11.48651 8.952272 C 11.51481 8.912628 11.54313 8.866375 11.58085 8.833337 C 11.6658 8.767271 11.80732 8.740831 11.91109 8.773874 C 12.02433 8.813522 12.05265 8.853167 12.05265 8.965483 C 12.04319 9.07782 12.02433 9.190128 12.00547 9.302438 C 11.99604 9.302438 11.98661 9.302438 11.98661 9.302438 C 11.96771 9.414777 11.95828 9.533716 11.93941 9.646028 C 11.92056 9.771572 11.89223 9.890489 11.87337 10.01603 C 11.85451 10.22747 11.85451 10.44549 11.91109 10.65693 C 11.92999 10.71638 11.95828 10.77587 11.99603 10.83533 C 12.02433 10.88158 12.08095 10.90139 12.15642 10.90139 C 12.30742 10.88818 12.43951 10.85514 12.57161 10.80889 C 12.82633 10.70978 13.07166 10.59748 13.28867 10.45872 C 13.46795 10.34639 13.63781 10.22747 13.80762 10.10193 C 13.9704 9.978035 14.11192 9.839287 14.24814 9.696819 L 14.31367 9.627285 L 14.27627 9.556829 C 14.25504 9.513882 14.23617 9.470935 14.22201 9.427986 C 14.19372 9.315672 14.18429 9.19673 14.17486 9.08442 C 14.16539 9.057981 14.18429 9.024939 14.19372 8.998522 C 14.20315 8.985313 14.21258 8.978684 14.22201 8.978684 C 14.22201 8.965481 14.22201 8.945665 14.23144 8.932434 C 14.33525 8.800313 14.47677 8.69458 14.68435 8.641728 C 14.89192 8.588871 15.09006 8.654936 15.18444 8.800314 C 15.25992 8.91923 15.23163 9.038172 15.16558 9.150482 C 15.14668 9.20334 15.10896 9.242981 15.08064 9.289232 C 15.07121 9.309067 15.07121 9.328878 15.08064 9.34869 C 15.22219 9.579967 15.38258 9.817825 15.52411 10.05568 C 15.66563 10.28693 15.80716 10.52478 15.89211 10.77587 C 15.9204 10.82873 15.9204 10.88818 15.92983 10.94765 C 15.93926 10.96748 15.96758 10.99389 15.98644 11.02694 C 16.15629 10.94764 16.32611 10.87498 16.49597 10.80229 C 16.97894 10.56525 17.32286 10.28016 17.56564 10.02558 L 17.59871 9.989454 L 17.59908 9.976385 C 17.60262 9.91692 17.60971 9.857456 17.61914 9.797987 C 17.65686 9.507277 17.73238 9.223169 17.89276 8.952272 C 17.92106 8.912628 17.94938 8.866375 17.9871 8.833337 C 18.07204 8.767271 18.21357 8.740831 18.31734 8.773874 C 18.43058 8.813522 18.4589 8.853167 18.4589 8.965483 C 18.44943 9.07782 18.43057 9.190128 18.41171 9.302438 C 18.40228 9.302438 18.39285 9.302438 18.39285 9.302438 C 18.37396 9.414777 18.36453 9.533716 18.34566 9.646028 C 18.3268 9.771572 18.29848 9.890489 18.27961 10.01603 C 18.26076 10.22747 18.26076 10.44549 18.31734 10.65693 C 18.33623 10.71638 18.36453 10.77587 18.40228 10.83533 C 18.43058 10.88158 18.4872 10.90139 18.56268 10.90139 C 18.71366 10.88818 18.84576 10.85514 18.97786 10.80889 C 19.23258 10.70978 19.47791 10.59748 19.69491 10.45872 C 19.8742 10.34639 20.04404 10.22747 20.21386 10.10193 C 20.37665 9.978035 20.51817 9.839287 20.65439 9.696819 L 20.75718 9.587759 L 20.77025 9.546399 C 20.78101 9.517593 20.79339 9.489101 20.80754 9.461023 C 20.8453 9.394965 20.89244 9.342086 20.9774 9.302438 C 20.99626 9.292527 21.01587 9.28448 21.03587 9.278225 L 21.09574 9.264971 L 21.10128 9.260527 C 21.14989 9.22864 21.22113 9.226473 21.27067 9.249586 C 21.29188 9.259513 21.29719 9.269419 21.29056 9.282112 L 21.28363 9.291209 L 21.32104 9.310814 C 21.35127 9.330946 21.37603 9.356956 21.39254 9.388337 C 21.44916 9.500671 21.4586 9.612986 21.46802 9.731924 C 21.47745 9.797987 21.46803 9.864075 21.47745 9.930136 C 21.47745 9.989594 21.47745 10.05568 21.47745 10.13497 C 21.50577 10.09532 21.52464 10.06228 21.5435 10.02924 C 21.75107 9.758339 21.98698 9.500671 22.29836 9.276026 C 22.43045 9.17692 22.5814 9.091022 22.75126 9.02494 C 22.85502 8.978689 22.97769 8.945669 23.10979 8.952272 C 23.2985 8.958879 23.42117 9.031567 23.5155 9.137273 C 23.60045 9.229775 23.62874 9.328878 23.6476 9.434587 C 23.68536 9.639425 23.68536 9.844236 23.65703 10.05568 C 23.65703 10.13498 23.6476 10.21424 23.63817 10.29354 C 23.62874 10.55123 23.60988 10.80889 23.60046 11.06658 C 23.60046 11.21194 23.59098 11.3639 23.63817 11.51588 C 23.6476 11.52248 23.67593 11.5423 23.68536 11.53569 C 23.75141 11.52909 23.80803 11.51588 23.86465 11.50265 C 24.10994 11.41677 24.32698 11.29123 24.51569 11.15909 C 24.80817 10.94764 25.05351 10.70979 25.28938 10.46532 C 25.42147 10.32658 25.55356 10.18782 25.68566 10.04247 C 25.74227 9.982987 25.78945 9.916927 25.85551 9.85084 L 25.87835 9.825806 L 25.88555 9.787258 C 25.91032 9.682365 25.95514 9.579959 26.01647 9.480839 C 26.0259 9.461027 26.0259 9.427986 26.03533 9.408172 C 26.13914 9.209939 26.2618 9.031567 26.45995 8.872979 C 26.63919 8.734228 26.85623 8.628521 27.12984 8.588873 C 27.39405 8.549231 27.63937 8.588876 27.87526 8.67477 C 27.89411 8.681376 27.90358 8.687979 27.92243 8.69458 C 27.92243 8.701182 27.93187 8.707815 27.94128 8.721018 C 27.87526 8.760666 27.79976 8.747435 27.73372 8.740831 C 27.6771 8.727627 27.61105 8.721022 27.55443 8.707815 C 27.47896 8.69458 27.42234 8.714418 27.3752 8.760665 C 27.32799 8.800313 27.29022 8.853166 27.24308 8.899419 C 27.09211 9.084421 27.0072 9.289235 26.92229 9.487468 C 26.80905 9.758339 26.73356 10.02924 26.70524 10.30014 C 26.69581 10.33318 26.70524 10.35962 26.70524 10.40587 C 26.77129 10.38603 26.82791 10.37283 26.86567 10.35299 C 26.99776 10.28693 27.12985 10.22087 27.25252 10.14157 C 27.55443 9.943338 27.79975 9.71209 28.0451 9.480839 Z M 26.78428 13.65413 C 26.78073 13.70286 26.78545 13.75242 26.80905 13.80198 C 27.11099 13.6434 27.43175 12.87035 27.46011 12.51355 C 27.43176 12.53999 27.40349 12.5598 27.38461 12.57964 C 27.31855 12.65893 27.24308 12.74483 27.17705 12.8307 C 27.01661 13.04214 26.87508 13.26679 26.80905 13.51125 C 26.79962 13.5575 26.78782 13.6054 26.78428 13.65413 Z M 2.380041 9.276026 C 2.4178 9.269421 2.427228 9.262821 2.44609 9.262821 C 2.908425 9.091022 3.361329 8.899416 3.757617 8.654929 C 4.059565 8.46993 4.342618 8.278328 4.540761 8.027266 C 4.786091 7.723327 4.880432 7.392971 4.823848 7.042778 C 4.814383 6.943668 4.767231 6.851173 4.66343 6.771879 C 4.597379 6.725626 4.531331 6.712417 4.446423 6.738856 C 4.25771 6.78511 4.087858 6.864377 3.936901 6.956879 C 3.502855 7.214569 3.191513 7.538322 2.927321 7.888515 C 2.766897 8.099929 2.625372 8.324583 2.483848 8.542625 C 2.464985 8.588877 2.44609 8.635124 2.44609 8.681376 C 2.427228 8.773875 2.427228 8.866374 2.417796 8.958874 C 2.408367 9.057981 2.398936 9.163688 2.380041 9.276026 Z M 14.84858 8.830448 C 14.84593 8.912213 14.87779 8.990255 14.92025 9.064581 C 14.96744 8.958875 14.96744 8.846565 14.86363 8.747436 C 14.85419 8.775517 14.84947 8.803188 14.84858 8.830448 Z M 15.06178 11.58194 C 15.03349 11.60178 15.00516 11.61498 14.97686 11.63479 C 14.87306 11.72069 14.75983 11.80659 14.71267 11.91892 C 14.68435 11.99819 14.68435 12.07749 14.7504 12.15678 C 14.99573 12.0048 15.06178 11.79999 15.06178 11.58194 Z"
                fill="url(#goldFoil)"
                fill-opacity="1"
                stroke="white"
                stroke-opacity="1"
                stroke-width="0.1"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M 18.85519 7.73653 C 18.84577 7.802615 18.8363 7.875281 18.81744 7.941369 C 18.79858 7.994221 18.75139 8.014032 18.67591 8.020659 C 18.62872 8.020659 18.5721 8.020659 18.50606 8.020659 C 18.4589 8.007429 18.38339 8.000824 18.31734 7.981012 C 18.21357 7.954577 18.17582 7.848864 18.22301 7.769573 C 18.24187 7.73653 18.2513 7.703512 18.29848 7.67047 C 18.44944 7.571364 18.60986 7.584571 18.77025 7.637425 C 18.81744 7.657261 18.85519 7.690281 18.85519 7.73653 Z"
                fill="url(#goldFoil)"
                fill-opacity="1"
                stroke="white"
                stroke-opacity="1"
                stroke-width="0.1"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M 12.44895 7.73653 C 12.43952 7.802615 12.43005 7.875281 12.41119 7.941369 C 12.39233 7.994221 12.34514 8.014032 12.26966 8.020659 C 12.22248 8.020659 12.16586 8.020659 12.09981 8.020659 C 12.05266 8.007429 11.97715 8.000824 11.9111 7.981012 C 11.80733 7.954577 11.76957 7.848864 11.81676 7.769573 C 11.83562 7.73653 11.84505 7.703512 11.89224 7.67047 C 12.0432 7.571364 12.20362 7.584571 12.364 7.637425 C 12.41119 7.657261 12.44895 7.690281 12.44895 7.73653 Z"
                fill="url(#goldFoil)"
                fill-opacity="1"
                stroke="white"
                stroke-opacity="1"
                stroke-width="0.1"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <g>
              <path
                d="M 0.7077427 14.22162 L 4.352119 14.22162 C 4.672904 14.22162 4.959508 14.24249 5.211933 14.28423 C 5.464361 14.32598 5.677336 14.40426 5.850868 14.51906 C 6.024398 14.63387 6.157184 14.79356 6.24922 14.99812 C 6.341252 15.20268 6.387268 15.46987 6.387268 15.79968 C 6.387268 16.32153 6.221524 16.72648 5.890035 17.01453 C 5.558548 17.30259 5.027113 17.44661 4.295726 17.44661 L 2.876325 17.44661 L 2.876325 18.69229 L 0.7077417 18.69229 L 0.7077427 14.22162 Z M 2.876325 16.40117 L 3.507422 16.40117 C 3.770368 16.40117 3.963639 16.36253 4.087231 16.28526 C 4.210821 16.20798 4.272613 16.07535 4.272613 15.88737 C 4.272613 15.71194 4.22002 15.58559 4.114839 15.50831 C 4.009655 15.43104 3.849254 15.3924 3.633632 15.3924 L 2.876325 15.3924 L 2.876325 16.40117 Z"
                fill="url(#goldFoil)"
                fill-opacity="1"
                stroke="white"
                stroke-opacity="1"
                stroke-width="0.1"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M 9.766731 18.00307 L 8.141678 18.00307 L 7.960252 18.6924 L 5.790886 18.6924 L 7.368605 14.2224 L 10.6108 14.2224 L 10.6108 14.22866 L 12.25161 14.22866 L 12.25161 15.54338 L 11.06832 15.54338 L 12.14906 18.6924 L 9.948158 18.6924 L 9.766731 18.00307 Z M 8.962091 15.6433 L 8.946321 15.6433 L 8.433546 16.87661 L 9.474834 16.87661 L 8.962091 15.6433 Z"
                fill="url(#goldFoil)"
                fill-opacity="1"
                stroke="white"
                stroke-opacity="1"
                stroke-width="0.1"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M 14.65303 17.50832 L 15.2367 17.50832 C 15.44178 17.50832 15.60872 17.4864 15.73756 17.44255 C 15.8664 17.39871 15.96631 17.33607 16.0373 17.25464 C 16.10829 17.17322 16.15693 17.07195 16.18322 16.95084 C 16.20951 16.82974 16.22265 16.69402 16.22265 16.54369 C 16.22265 16.38918 16.20951 16.25868 16.18322 16.15219 C 16.15693 16.0457 16.10566 15.96114 16.02942 15.89851 C 15.95317 15.83587 15.84668 15.79098 15.70996 15.76384 C 15.57325 15.73669 15.39446 15.72312 15.1736 15.72312 L 14.65303 15.72312 L 14.65303 17.50832 Z M 12.59423 14.28945 L 15.33165 14.28945 C 15.78396 14.28945 16.1955 14.31554 16.56627 14.36772 C 16.93703 14.4199 17.2539 14.52217 17.51687 14.67453 C 17.77983 14.82689 17.98232 15.04187 18.12432 15.31945 C 18.26631 15.59705 18.33731 15.96334 18.33731 16.41834 C 18.33731 16.78568 18.28734 17.1144 18.18742 17.40451 C 18.0875 17.69463 17.93497 17.93987 17.72986 18.14024 C 17.52476 18.34061 17.26311 18.49401 16.94493 18.60045 C 16.62676 18.70689 16.25204 18.76011 15.82077 18.76011 L 12.59423 18.76011 L 12.59423 14.28945 Z"
                fill="url(#goldFoil)"
                fill-opacity="1"
                stroke="white"
                stroke-opacity="1"
                stroke-width="0.1"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M 21.97318 18.07076 L 20.34813 18.07076 L 20.1667 18.76008 L 17.99734 18.76008 L 19.57505 14.2901 L 22.81724 14.2901 L 22.81724 14.29636 L 24.45807 14.29636 L 24.45807 15.61108 L 23.27477 15.61108 L 24.3555 18.76008 L 22.15461 18.76008 L 21.97318 18.07076 Z M 21.16854 15.711 L 21.15277 15.711 L 20.64 16.9443 L 21.68129 16.9443 L 21.16854 15.711 Z"
                fill="url(#goldFoil)"
                fill-opacity="1"
                stroke="white"
                stroke-opacity="1"
                stroke-width="0.1"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M 24.62986 14.3573 L 26.72033 14.3573 L 27.20153 16.83055 L 27.2173 16.83055 L 27.7695 14.3573 L 29.44976 14.3573 L 29.99408 16.83055 L 30.00985 16.83055 L 30.49894 14.36494 L 30.49894 14.3573 L 32.58941 14.3573 L 32.58941 14.36494 L 33.78847 14.36494 L 33.78847 15.67943 L 32.23442 15.67943 L 31.40614 18.82793 L 29.15789 18.82793 L 28.60569 16.35468 L 28.58991 16.35468 L 28.00616 18.82793 L 25.74214 18.82793 L 24.62986 14.3573 Z"
                fill="url(#goldFoil)"
                fill-opacity="1"
                stroke="white"
                stroke-opacity="1"
                stroke-width="0.1"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M 36.82296 18.13853 L 35.19791 18.13853 L 35.01648 18.82785 L 32.84712 18.82785 L 34.42483 14.35787 L 37.66703 14.35787 L 37.66703 14.36413 L 39.30785 14.36413 L 39.30785 15.67885 L 38.12453 15.67885 L 39.2053 18.82785 L 37.00439 18.82785 L 36.82296 18.13853 Z M 36.01832 15.77877 L 36.00254 15.77877 L 35.48976 17.01207 L 36.53107 17.01207 L 36.01832 15.77877 Z"
                fill="url(#goldFoil)"
                fill-opacity="1"
                stroke="white"
                stroke-opacity="1"
                stroke-width="0.1"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M 39.47966 14.35727 L 41.94088 14.35727 L 43.20305 16.83054 L 43.21883 16.83054 L 43.07687 14.35727 L 46.2007 14.35727 L 46.18493 15.68469 L 45.09634 15.69095 L 45.09634 18.82794 L 42.84807 18.82794 L 41.37294 16.09168 L 41.35714 16.09168 L 41.49913 18.82794 L 39.47966 18.82794 L 39.47966 14.35727 Z"
                fill="url(#goldFoil)"
                fill-opacity="1"
                stroke="white"
                stroke-opacity="1"
                stroke-width="0.1"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M 50.55969 15.56961 L 49.59729 15.56961 C 48.90834 15.56961 48.80843 15.72426 49.29752 16.03356 C 50.16526 16.62251 50.59125 17.19663 50.5755 17.75592 C 50.5597 18.31521 50.13371 18.64995 49.29752 18.76012 L 46.46553 18.76012 L 46.46553 17.40636 L 47.42797 17.40636 C 48.18524 17.41485 48.28514 17.25172 47.7277 16.91699 C 46.79159 16.25178 46.39323 15.63741 46.53258 15.07387 C 46.67197 14.51034 47.11239 14.22857 47.85392 14.22857 L 50.55969 14.22857 L 50.55969 15.56961 Z"
                fill="url(#goldFoil)"
                fill-opacity="1"
                stroke="white"
                stroke-opacity="1"
                stroke-width="0.1"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </svg>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List className={classes.iconList}>
          <a
            href="https://www.pinterest.com/raisingpadawans/"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.aTag}
          >
            <ListItem button className={classes.liButton}>
              <ListItemIcon>
                <PinterestIcon className={classes.iconButton} />
              </ListItemIcon>
              <ListItemText>RP on Pinterest</ListItemText>
            </ListItem>
          </a>
          <a
            href="https://www.instagram.com/raisingpadawans/"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.aTag}
          >
            <ListItem button className={classes.liButton}>
              <ListItemIcon>
                <InstagramIcon className={classes.iconButton} />
              </ListItemIcon>
              <ListItemText>RP on Instagram</ListItemText>
            </ListItem>
          </a>
          <a
            href="https://www.facebook.com/raisingpadawans-105607621570004"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.aTag}
          >
            <ListItem button className={classes.liButton}>
              <ListItemIcon>
                <FacebookIcon className={classes.iconButton} />
              </ListItemIcon>
              <ListItemText>RP on Facebook</ListItemText>
            </ListItem>
          </a>
          <a
            href="mailto:rob.h.kellen@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.aTag}
          >
            <ListItem button variant="raised" className={classes.liButton}>
              <ListItemIcon>
                <MailIcon className={classes.iconButton} />
              </ListItemIcon>
              <ListItemText>Send Us A Message</ListItemText>
            </ListItem>
          </a>
        </List>
      </Drawer>
    </React.Fragment>
  );
}

export default AppNav;
