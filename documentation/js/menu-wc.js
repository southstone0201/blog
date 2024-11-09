'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">project documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-5dab007a685eb00bb1f83551fef041d67b7d297c043d455491dc2e8f19b424fb589b752f9f5d52e65bca6fad22ee30630b7ea50a6a80020585378b5eae8e1108"' : 'data-bs-target="#xs-controllers-links-module-AppModule-5dab007a685eb00bb1f83551fef041d67b7d297c043d455491dc2e8f19b424fb589b752f9f5d52e65bca6fad22ee30630b7ea50a6a80020585378b5eae8e1108"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-5dab007a685eb00bb1f83551fef041d67b7d297c043d455491dc2e8f19b424fb589b752f9f5d52e65bca6fad22ee30630b7ea50a6a80020585378b5eae8e1108"' :
                                            'id="xs-controllers-links-module-AppModule-5dab007a685eb00bb1f83551fef041d67b7d297c043d455491dc2e8f19b424fb589b752f9f5d52e65bca6fad22ee30630b7ea50a6a80020585378b5eae8e1108"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-5dab007a685eb00bb1f83551fef041d67b7d297c043d455491dc2e8f19b424fb589b752f9f5d52e65bca6fad22ee30630b7ea50a6a80020585378b5eae8e1108"' : 'data-bs-target="#xs-injectables-links-module-AppModule-5dab007a685eb00bb1f83551fef041d67b7d297c043d455491dc2e8f19b424fb589b752f9f5d52e65bca6fad22ee30630b7ea50a6a80020585378b5eae8e1108"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-5dab007a685eb00bb1f83551fef041d67b7d297c043d455491dc2e8f19b424fb589b752f9f5d52e65bca6fad22ee30630b7ea50a6a80020585378b5eae8e1108"' :
                                        'id="xs-injectables-links-module-AppModule-5dab007a685eb00bb1f83551fef041d67b7d297c043d455491dc2e8f19b424fb589b752f9f5d52e65bca6fad22ee30630b7ea50a6a80020585378b5eae8e1108"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-5950393102bbb8ad7b91ea01a8acfef93da7ec9002f8914f428b1e0719ffbe85bbb8454e3648b56572325f2615084028ad2dc0be3ee8e817bb700f9a0343c2bf"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-5950393102bbb8ad7b91ea01a8acfef93da7ec9002f8914f428b1e0719ffbe85bbb8454e3648b56572325f2615084028ad2dc0be3ee8e817bb700f9a0343c2bf"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-5950393102bbb8ad7b91ea01a8acfef93da7ec9002f8914f428b1e0719ffbe85bbb8454e3648b56572325f2615084028ad2dc0be3ee8e817bb700f9a0343c2bf"' :
                                            'id="xs-controllers-links-module-AuthModule-5950393102bbb8ad7b91ea01a8acfef93da7ec9002f8914f428b1e0719ffbe85bbb8454e3648b56572325f2615084028ad2dc0be3ee8e817bb700f9a0343c2bf"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-5950393102bbb8ad7b91ea01a8acfef93da7ec9002f8914f428b1e0719ffbe85bbb8454e3648b56572325f2615084028ad2dc0be3ee8e817bb700f9a0343c2bf"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-5950393102bbb8ad7b91ea01a8acfef93da7ec9002f8914f428b1e0719ffbe85bbb8454e3648b56572325f2615084028ad2dc0be3ee8e817bb700f9a0343c2bf"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-5950393102bbb8ad7b91ea01a8acfef93da7ec9002f8914f428b1e0719ffbe85bbb8454e3648b56572325f2615084028ad2dc0be3ee8e817bb700f9a0343c2bf"' :
                                        'id="xs-injectables-links-module-AuthModule-5950393102bbb8ad7b91ea01a8acfef93da7ec9002f8914f428b1e0719ffbe85bbb8454e3648b56572325f2615084028ad2dc0be3ee8e817bb700f9a0343c2bf"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PostsModule.html" data-type="entity-link" >PostsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-PostsModule-37764a6dc56e9dc95adb56ed3daf0f3e4f33dcec01390efa4954604b9af9853165a8b462c800afbb1708642dd1b84ae665b75077a17cef15932032e75b83c7ff"' : 'data-bs-target="#xs-controllers-links-module-PostsModule-37764a6dc56e9dc95adb56ed3daf0f3e4f33dcec01390efa4954604b9af9853165a8b462c800afbb1708642dd1b84ae665b75077a17cef15932032e75b83c7ff"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PostsModule-37764a6dc56e9dc95adb56ed3daf0f3e4f33dcec01390efa4954604b9af9853165a8b462c800afbb1708642dd1b84ae665b75077a17cef15932032e75b83c7ff"' :
                                            'id="xs-controllers-links-module-PostsModule-37764a6dc56e9dc95adb56ed3daf0f3e4f33dcec01390efa4954604b9af9853165a8b462c800afbb1708642dd1b84ae665b75077a17cef15932032e75b83c7ff"' }>
                                            <li class="link">
                                                <a href="controllers/PostsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PostsModule-37764a6dc56e9dc95adb56ed3daf0f3e4f33dcec01390efa4954604b9af9853165a8b462c800afbb1708642dd1b84ae665b75077a17cef15932032e75b83c7ff"' : 'data-bs-target="#xs-injectables-links-module-PostsModule-37764a6dc56e9dc95adb56ed3daf0f3e4f33dcec01390efa4954604b9af9853165a8b462c800afbb1708642dd1b84ae665b75077a17cef15932032e75b83c7ff"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PostsModule-37764a6dc56e9dc95adb56ed3daf0f3e4f33dcec01390efa4954604b9af9853165a8b462c800afbb1708642dd1b84ae665b75077a17cef15932032e75b83c7ff"' :
                                        'id="xs-injectables-links-module-PostsModule-37764a6dc56e9dc95adb56ed3daf0f3e4f33dcec01390efa4954604b9af9853165a8b462c800afbb1708642dd1b84ae665b75077a17cef15932032e75b83c7ff"' }>
                                        <li class="link">
                                            <a href="injectables/PostsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UsersModule-871c94922f1d9fc113dd95189a37bf795fd1391c9543e3854142ee6620def3279a2951f93f6465876b577d6cc639d244792039b90358d2717368bdb34dcf8e4d"' : 'data-bs-target="#xs-controllers-links-module-UsersModule-871c94922f1d9fc113dd95189a37bf795fd1391c9543e3854142ee6620def3279a2951f93f6465876b577d6cc639d244792039b90358d2717368bdb34dcf8e4d"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-871c94922f1d9fc113dd95189a37bf795fd1391c9543e3854142ee6620def3279a2951f93f6465876b577d6cc639d244792039b90358d2717368bdb34dcf8e4d"' :
                                            'id="xs-controllers-links-module-UsersModule-871c94922f1d9fc113dd95189a37bf795fd1391c9543e3854142ee6620def3279a2951f93f6465876b577d6cc639d244792039b90358d2717368bdb34dcf8e4d"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UsersModule-871c94922f1d9fc113dd95189a37bf795fd1391c9543e3854142ee6620def3279a2951f93f6465876b577d6cc639d244792039b90358d2717368bdb34dcf8e4d"' : 'data-bs-target="#xs-injectables-links-module-UsersModule-871c94922f1d9fc113dd95189a37bf795fd1391c9543e3854142ee6620def3279a2951f93f6465876b577d6cc639d244792039b90358d2717368bdb34dcf8e4d"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-871c94922f1d9fc113dd95189a37bf795fd1391c9543e3854142ee6620def3279a2951f93f6465876b577d6cc639d244792039b90358d2717368bdb34dcf8e4d"' :
                                        'id="xs-injectables-links-module-UsersModule-871c94922f1d9fc113dd95189a37bf795fd1391c9543e3854142ee6620def3279a2951f93f6465876b577d6cc639d244792039b90358d2717368bdb34dcf8e4d"' }>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreatePostDto.html" data-type="entity-link" >CreatePostDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePostMetaOptionsDto.html" data-type="entity-link" >CreatePostMetaOptionsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetUsersParamDto.html" data-type="entity-link" >GetUsersParamDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatchPostDto.html" data-type="entity-link" >PatchPostDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatchUserDto.html" data-type="entity-link" >PatchUserDto</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});