/*
 * adapt-aboutUs
 * License - https://github.com/adaptlearning/adapt_framework/blob/master/LICENSE
 * Maintainers - Chuck Lorenz <chuck.lorenz@clearlearning.tech>
 * Code was based on adapt-contrib-glossary and adapt-contrib-resources
 */

import Adapt from 'core/js/adapt'
import AboutUsView from './adapt-aboutUsView'

class AboutUs extends Backbone.Controller {
  initialize() {
    this.listenTo(Adapt, 'app:dataReady', this.initAboutUs);
  }
  
  setupAboutUs(model) {
    const aboutUsModel = new Backbone.Model(model);
    const itemsCollection = new Backbone.Collection(model.aboutUsItems);
    const socialLinksCollection = new Backbone.Collection(model.socialLinks);
test
    const options = {
      model: aboutUsModel,
      collection: itemsCollection,
      sociallinks: socialLinksCollection
    };

    Adapt.on('aboutUs:showAboutUs', function() {
      Adapt.drawer.triggerCustomView(new AboutUsView(options).$el);
    });
  }

  initAboutUs() {
    const courseAboutUs = Adapt.course.get('_aboutUs');

    if (!courseAboutUs?._isEnabled) return;

    const { title, description, _drawerOrder = 0 } = courseAboutUs

    const drawerObject = {
      title,
      description,
      className: 'is-aboutus',
      drawerOrder: _drawerOrder
    };

    Adapt.drawer.addItem(drawerObject, 'aboutUs:showAboutUs');

    this.setupAboutUs(courseAboutUs);
  }
};

const aboutUs = new AboutUs();

export default aboutUs