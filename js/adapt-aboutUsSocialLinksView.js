/*
 * adapt-aboutUs
 * License - https://github.com/adaptlearning/adapt_framework/blob/master/LICENSE
 * Maintainers - Chuck Lorenz <chuck.lorenz@clearlearning.tech>
 * Code was based on adapt-contrib-glossary and adapt-contrib-resources
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { templates } from 'core/js/reactHelpers';

class AboutUsSocialLinksView extends Backbone.View{
  initialize() {
      this.render();
  }

  render() {
    ReactDOM.render(<templates.aboutUsSocialLinks/>, this.el);

    _.defer(_.bind(function() {
        this.postRender();
    }, this));
    return this;
  }

  postRender() {
    this.listenTo(Adapt, 'drawer:openedItemView', this.remove);
    this.listenTo(Adapt, 'drawer:triggerCustomView', this.remove);
  }
}

export default AboutUsSocialLinksView;
