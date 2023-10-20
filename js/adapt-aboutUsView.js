/*
 * adapt-aboutUs
 * License - https://github.com/adaptlearning/adapt_framework/blob/master/LICENSE
 * Maintainers - Chuck Lorenz <chuck.lorenz@clearlearning.tech>
 * Code was based on adapt-contrib-glossary and adapt-contrib-resources
 */

import Adapt from 'core/js/adapt';
import React from 'react';
import ReactDOM from 'react-dom';
import { templates } from 'core/js/reactHelpers';

class AboutUsView extends Backbone.View{
  className() {
    return 'aboutus'
  }

  initialize() {
    this.listenTo(Adapt, 'remove drawer:closed', this.remove);
    this.render()
  }

  render() {
    ReactDOM.render(<templates.aboutUs {...this.model.toJSON()} />, this.el);

    _.defer(() => {
      Adapt.trigger('view:render', this);
    });

    return this;
    }
  }

export default AboutUsView;