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
import AboutUsItemView from './adapt-aboutUsItemView';
import SocialLinksView from './adapt-aboutUsSocialLinksView';

class AboutUsView extends Backbone.View{
  className() {
    return 'aboutus'
  }

  initialize() {
    this.listenTo(Adapt, 'remove drawer:closed', this.remove);
    this.render()
  }

  render() {
    const data = {
      ...this,
      model: this.model.toJSON()
    };

    ReactDOM.render(<templates.aboutUs {...data} />, this.el);

    _.defer(() => {
      Adapt.trigger('view:render', this);
      this.listenTo(Adapt, 'drawer:closed', this.remove);
    });

    return this;
    }

    renderAboutUsItems() {
      var $aboutUsItemContainer = this.$('.aboutus__items-container').empty();
      _.each(this.collection.models, function(item, index) {
        var itemView = new AboutUsItemView({model: item});
        itemView.$el.appendTo($aboutUsItemContainer);
      }, this);
      new SocialLinksView({model: Adapt.course.get('_aboutUs')._socialLinks})
        .$el.appendTo($aboutUsItemContainer);
    }
  }

export default AboutUsView;