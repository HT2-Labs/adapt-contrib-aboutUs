/*
 * adapt-aboutUs
 * License - https://github.com/adaptlearning/adapt_framework/blob/master/LICENSE
 * Maintainers - Chuck Lorenz <chuck.lorenz@clearlearning.tech>
 * Code was based on adapt-contrib-glossary and adapt-contrib-resources
 */

import Adapt from 'core/js/adapt'
import AboutUsView from './adapt-aboutUsView'

function setupAboutUs(aboutUsModel, aboutUsItems, socialLinks) {

    const aboutUsModel = new Backbone.Model(aboutUsModel);
    const itemsCollection = new Backbone.Collection(aboutUsItems);
    const socialLinksCollection = new Backbone.Collection(socialLinks);

    const options = {
        model: aboutUsModel,
        collection: itemsCollection,
        sociallinks: socialLinksCollection
    };

    Adapt.on('aboutUs:showAboutUs', function() {
        Adapt.drawer.triggerCustomView(new AboutUsView(options).$el);
    });
}

function initAboutUs() {
    const courseAboutUs = Adapt.course.get('_aboutUs');

    if (!courseAboutUs || !courseAboutUs._isEnabled) {
        return;
    }

    const drawerObject = {
        title: courseAboutUs.title,
        description: courseAboutUs.description,
        className: 'is-aboutus',
        drawerOrder: courseAboutUs._drawerOrder || 0
    };

    Adapt.drawer.addItem(drawerObject, 'aboutUs:showAboutUs');

    setupAboutUs(courseAboutUs, courseAboutUs._aboutUsItems, courseAboutUs._socialLinks);
}

Adapt.on('app:dataReady', initAboutUs);