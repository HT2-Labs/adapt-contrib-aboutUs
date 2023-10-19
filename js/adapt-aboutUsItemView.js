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
  className() {
    return "aboutus__item"
  }

  attributes() {
    return {
      role: 'listitem'
    }
  }

  events() {
    return {
      'click .js-aboutus-item-topic-click': 'onAboutUsItemClicked'
    }
  }

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

  onAboutUsItemClicked(event) {
    event && event.preventDefault();
    // Adapt.trigger('aboutUs:descriptionOpen', this.model.cid);
    this.descriptionOpen()
  }

  descriptionOpen(viewId) {
    const descriptionCurrentlyOpen = this.model.get('_isDescriptionOpen')
    this.model.set('_isDescriptionOpen', !descriptionCurrentlyOpen)
  }

  onAboutUsItemVisibilityChange() {
      if (this.model.get('_isVisible')) {
          this.$el.removeClass('u-display-none');
      } else {
          this.$el.addClass('u-display-none');
      }
  }
};

export default AboutUsItemView;