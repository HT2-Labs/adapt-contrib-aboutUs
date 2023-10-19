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

class AboutUsItemView extends Backbone.View{
  initialize() {
    this.listenTo(Adapt, {
        'remove drawer:closed': this.remove,
        'aboutUs:descriptionOpen': this.descriptionOpen
    });
    this.setupModel();
    this.listenTo(this.model, 'change:_isVisible', this.onAboutUsItemVisibilityChange);
    this.render();
  }

  setupModel() {
    this.model.set({
        '_isVisible': true,
        '_isDescriptionOpen': false
    });
  }
  
  render() {
    ReactDOM.render(<templates.aboutUsItem {...data} />, this.el);

    _.defer(_.bind(function() {
      this.postRender();
    }, this));

    return this;
  }

  postRender() {
    this.listenTo(Adapt, {
      'drawer:openedItemView': this.remove,
      'drawer:triggerCustomView': this.remove
    });
  }
};

export default AboutUsItemView;