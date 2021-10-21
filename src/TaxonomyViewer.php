<?php

namespace Blueo\TaxonomyViewer;

use SilverStripe\Admin\LeftAndMain;

class TaxonomyViewer extends LeftAndMain
{
    /**
     * The current url segment attached to the LeftAndMain instance
     *
     * @config
     * @var string
     */
    private static $url_segment = 'taxonomy-viewer';

    /**
     * @config
     * @var string Used by {@link AdminRootController} to augment Director route rules for sub-classes of LeftAndMain
     */
    private static $url_rule = '/$Action/$ID/$OtherID';

    /**
     * @config
     * @var string
     */
    private static $menu_title = 'Taxonomy Viewer';

    /**
     * @var array
     */
    private static $extra_requirements_javascript = [
        "blueo/taxonomy-viewer:client/dist/js/bundle.js"
    ];

    /**
     * @var array See {@link extra_requirements_javascript}
     */
    private static $extra_requirements_css = [
        "blueo/taxonomy-viewer:client/dist/styles/bundle.css"
    ];
}
