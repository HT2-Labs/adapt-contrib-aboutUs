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
        Adapt.trigger('aboutUs:descriptionOpen', this.model.cid);
    }

    toggleAboutUsItemDescription() {
        if (this.model.get('_isDescriptionOpen')) {
            this.hideAboutUsItemDescription();
        } else {
            this.showAboutUsItemDescription();
        }
    }

    showAboutUsItemDescription() {
        var $aboutUsItemTopic = this.$('.js-aboutus-item-topic-click');
        var description = $aboutUsItemTopic.addClass('is-selected')
            .siblings('.aboutus__item-body')
            .slideDown(200, function() {
                Adapt.a11y.focusFirst(this.$el, {defer: true});
            }.this);
        $aboutUsItemTopic.attr('aria-expanded', true);
        this.model.set('_isDescriptionOpen', true);
    }

    hideAboutUsItemDescription() {
        this.$('.aboutus__item-body').stop(true, true)
            .slideUp(200);
        this.model.set('_isDescriptionOpen', false);

        this.$('.js-aboutus-item-topic-click').removeClass('is-selected')
            .attr('aria-expanded', false);
    }

    descriptionOpen(viewId) {
        if (viewId === this.model.cid) {
            this.toggleAboutUsItemDescription();
        } else if (this.model.get('_isDescriptionOpen')) {
            this.hideAboutUsItemDescription();
        }
    }

    onAboutUsItemVisibilityChange() {
        if (this.model.get('_isDescriptionOpen')) {
            this.hideAboutUsItemDescription();
        }
        if (this.model.get('_isVisible')) {
            this.$el.removeClass('u-display-none');
        } else {
            this.$el.addClass('u-display-none');
        }
    }
};

export default AboutUsItemView;