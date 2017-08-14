import React from 'react';
import ReactDOM from 'react-dom';
import { Router, hashHistory } from 'react-router';
import routes from './config/routes';

import jquery from 'jquery';
import noUiSlider from 'nouislider';
import metismenu from 'metismenu';
import bootstrap from 'bootstrap';
import pace from 'pace';
import fullcalendar from 'fullcalendar';
import daterangepicker from 'daterangepicker';

import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './../node_modules/font-awesome/css/font-awesome.css'
import './../node_modules/animate.css/animate.min.css'
import './../public/styles/style.css'
import './../public/styles/plugins/iCheck/custom.css'
import './../public/styles/plugins/chosen/bootstrap-chosen.css'
import './../public/styles/plugins/bootstrap-tagsinput/bootstrap-tagsinput.css'
import './../public/styles/plugins/colorpicker/bootstrap-colorpicker.min.css'
import './../public/styles/plugins/cropper/cropper.min.css'
import './../public/styles/plugins/switchery/switchery.css'
import './../public/styles/plugins/jasny/jasny-bootstrap.min.css'
import './../public/styles/plugins/nouslider/jquery.nouislider.css'
import './../public/styles/plugins/datapicker/datepicker3.css'
import './../public/styles/plugins/ionRangeSlider/ion.rangeSlider.css'
import './../public/styles/plugins/ionRangeSlider/ion.rangeSlider.skinFlat.css'
import './../public/styles/plugins/awesome-bootstrap-checkbox/awesome-bootstrap-checkbox.css'
import './../public/styles/plugins/clockpicker/clockpicker.css'
import './../public/styles/plugins/daterangepicker/daterangepicker-bs3.css'
import './../public/styles/plugins/select2/select2.min.css'
import './../public/styles/plugins/touchspin/jquery.bootstrap-touchspin.min.css'
import './../public/styles/plugins/dualListbox/bootstrap-duallistbox.min.css'
import './../public/styles/animate.css'
/*import './../public/js/inspinia.js'
import './../public/js/plugins/slimscroll/jquery.slimscroll.min.js'
import './../public/js/plugins/chosen/chosen.jquery.js'
import './../public/js/plugins/jsKnob/jquery.knob.js'
import './../public/js/plugins/jasny/jasny-bootstrap.min.js'
import './../public/js/plugins/datapicker/bootstrap-datepicker.js'
import './../public/js/plugins/switchery/switchery.js'
import './../public/js/plugins/ionRangeSlider/ion.rangeSlider.min.js'
import './../public/js/plugins/iCheck/icheck.min.js'
import './../public/js/plugins/metisMenu/jquery.metisMenu.js'
import './../public/js/plugins/colorpicker/bootstrap-colorpicker.min.js'
import './../public/js/plugins/clockpicker/clockpicker.js'
import './../public/js/plugins/cropper/cropper.min.js'
import './../public/js/plugins/select2/select2.full.min.js'
import './../public/js/plugins/touchspin/jquery.bootstrap-touchspin.min.js'
import './../public/js/plugins/bootstrap-tagsinput/bootstrap-tagsinput.js'
import './../public/js/plugins/dualListbox/jquery.bootstrap-duallistbox.js'*/

ReactDOM.render(
<Router history={hashHistory}>{routes}</Router>,
    document.getElementById('root')
);