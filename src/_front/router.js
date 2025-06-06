import { createRouter, createWebHistory } from 'vue-router';

import wwPage from './views/wwPage.vue';

import { initializeData, initializePlugins, onPageUnload } from '@/_common/helpers/data';

let router;
const routes = [];

function scrollBehavior(to) {
    if (to.hash) {
        return {
            el: to.hash,
            behavior: 'smooth',
        };
    } else {
        return { top: 0 };
    }
}

 
/* wwFront:start */
import pluginsSettings from '../../plugins-settings.json';

// eslint-disable-next-line no-undef
window.wwg_designInfo = {"id":"139d8dc3-15ff-4663-94d1-928e16136392","homePageId":"87e79a17-3fc6-4dc6-b2aa-3fcc57d3967d","authPluginId":null,"baseTag":null,"defaultTheme":"light","langs":[{"lang":"en","default":true}],"background":{},"workflows":[],"pages":[{"id":"4908afcc-3fac-4e6c-9a1f-700504253d8d","linkId":"4908afcc-3fac-4e6c-9a1f-700504253d8d","name":"Log in","folder":null,"paths":{"en":"log_in","default":"log_in"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"1d3c228d-81b4-4674-a288-074c8fb57026","sectionTitle":"Sign in","linkId":"6e6c6034-7a03-4d90-b22a-07965a537932"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"bdf2f515-9344-4f4f-99ac-7df82d880e26","linkId":"bdf2f515-9344-4f4f-99ac-7df82d880e26","name":"Locations","folder":null,"paths":{"en":"deals","default":"deals"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"f71a1006-9adc-4063-878f-e8647020fcb5","sectionTitle":"Header","linkId":"f3b431a9-d5be-4522-a14f-ed81e619a727"},{"uid":"f563b716-ff56-47fc-a17c-497644db4ecc","sectionTitle":"Sidemenu","linkId":"60e1581e-2cd1-4253-b90a-10887834383c"},{"uid":"5042bb5b-e1d7-4618-84c7-e31d90759660","sectionTitle":"Content","linkId":"d9a2a5c6-0091-404c-8860-cc25b6f6cd78"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"fd714c05-dd78-4f92-8f59-235fd566c958","linkId":"fd714c05-dd78-4f92-8f59-235fd566c958","name":"Settings","folder":null,"paths":{"en":"settings","default":"settings"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"f563b716-ff56-47fc-a17c-497644db4ecc","sectionTitle":"Sidemenu","linkId":"60e1581e-2cd1-4253-b90a-10887834383c"},{"uid":"f71a1006-9adc-4063-878f-e8647020fcb5","sectionTitle":"Header","linkId":"f3b431a9-d5be-4522-a14f-ed81e619a727"},{"uid":"09318f7d-972e-43c4-9f7f-1b6316ad0af6","sectionTitle":"Content","linkId":"da50435c-594c-4c49-9959-baa9f60af409"}],"pageUserGroups":[],"title":{"en":"Blank | Start from scratch","fr":"Vide | Commencer à partir de zéro"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"3d345b87-c815-444f-b5bb-8631b7c14eef","linkId":"3d345b87-c815-444f-b5bb-8631b7c14eef","name":"Users","folder":null,"paths":{"en":"users","default":"users"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"f71a1006-9adc-4063-878f-e8647020fcb5","sectionTitle":"Header","linkId":"f3b431a9-d5be-4522-a14f-ed81e619a727"},{"uid":"f563b716-ff56-47fc-a17c-497644db4ecc","sectionTitle":"Sidemenu","linkId":"60e1581e-2cd1-4253-b90a-10887834383c"},{"uid":"1c7f9b8b-7cf6-40e8-b480-19ebe133fcd0","sectionTitle":"Content","linkId":"6271a9ca-81dc-4105-8a94-44087979973f"},{"uid":"f84d6f61-2528-472e-9e13-a5485c40752d","sectionTitle":"Modal","linkId":"b473a8bc-ea8b-47bf-9895-8fb6f79c5164"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"87e79a17-3fc6-4dc6-b2aa-3fcc57d3967d","linkId":"87e79a17-3fc6-4dc6-b2aa-3fcc57d3967d","name":"Home","folder":null,"paths":{"en":"home","default":"home"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"f563b716-ff56-47fc-a17c-497644db4ecc","sectionTitle":"Sidemenu","linkId":"60e1581e-2cd1-4253-b90a-10887834383c"},{"uid":"f71a1006-9adc-4063-878f-e8647020fcb5","sectionTitle":"Header","linkId":"f3b431a9-d5be-4522-a14f-ed81e619a727"},{"uid":"1527de2e-8b93-457a-8eb2-70a55db2ce88","sectionTitle":"Content","linkId":"f68cb9f6-bdea-4e51-a290-ebd9adb35696"}],"pageUserGroups":[],"title":{"en":"Blank | Start from scratch","fr":"Vide | Commencer à partir de zéro"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""}],"plugins":[{"id":"9c40819b-4a8f-468f-9ba5-4b9699f3361f","name":"Charts","namespace":"chartjs"},{"id":"832d6f7a-42c3-43f1-a3ce-9a678272f811","name":"Date","namespace":"dayjs"}]};
// eslint-disable-next-line no-undef
window.wwg_cacheVersion = 1;
// eslint-disable-next-line no-undef
window.wwg_pluginsSettings = pluginsSettings;
// eslint-disable-next-line no-undef
window.wwg_disableManifest = false;

const defaultLang = window.wwg_designInfo.langs.find(({ default: isDefault }) => isDefault) || {};

const registerRoute = (page, lang, forcedPath) => {
    const langSlug = !lang.default || lang.isDefaultPath ? `/${lang.lang}` : '';
    let path =
        forcedPath ||
        (page.id === window.wwg_designInfo.homePageId ? '/' : `/${page.paths[lang.lang] || page.paths.default}`);

    //Replace params
    path = path.replace(/{{([\w]+)\|([^/]+)?}}/g, ':$1');

    routes.push({
        path: langSlug + path,
        component: wwPage,
        name: `page-${page.id}-${lang.lang}`,
        meta: {
            pageId: page.id,
            lang,
            isPrivate: !!page.pageUserGroups?.length,
        },
        async beforeEnter(to, from) {
            if (to.name === from.name) return;
            //Set page lang
            wwLib.wwLang.defaultLang = defaultLang.lang;
            wwLib.$store.dispatch('front/setLang', lang.lang);

            //Init plugins
            await initializePlugins();

            //Check if private page
            if (page.pageUserGroups?.length) {
                // cancel navigation if no plugin
                if (!wwLib.wwAuth.plugin) {
                    return false;
                }

                await wwLib.wwAuth.init();

                // Redirect to not sign in page if not logged
                if (!wwLib.wwAuth.getIsAuthenticated()) {
                    window.location.href = `${wwLib.wwPageHelper.getPagePath(
                        wwLib.wwAuth.getUnauthenticatedPageId()
                    )}?_source=${to.path}`;

                    return null;
                }

                //Check roles are required
                if (
                    page.pageUserGroups.length > 1 &&
                    !wwLib.wwAuth.matchUserGroups(page.pageUserGroups.map(({ userGroup }) => userGroup))
                ) {
                    window.location.href = `${wwLib.wwPageHelper.getPagePath(
                        wwLib.wwAuth.getUnauthorizedPageId()
                    )}?_source=${to.path}`;

                    return null;
                }
            }

            try {
                await import(`@/pages/${page.id.split('_')[0]}.js`);
                await wwLib.wwWebsiteData.fetchPage(page.id);

                //Scroll to section or on top after page change
                if (to.hash) {
                    const targetElement = document.getElementById(to.hash.replace('#', ''));
                    if (targetElement) targetElement.scrollIntoView();
                } else {
                    document.body.scrollTop = document.documentElement.scrollTop = 0;
                }

                return;
            } catch (err) {
                wwLib.$store.dispatch('front/showPageLoadProgress', false);

                if (err.redirectUrl) {
                    return { path: err.redirectUrl || '404' };
                } else {
                    //Any other error: go to target page using window.location
                    window.location = to.fullPath;
                }
            }
        },
    });
};

for (const page of window.wwg_designInfo.pages) {
    for (const lang of window.wwg_designInfo.langs) {
        if (!page.langs.includes(lang.lang)) continue;
        registerRoute(page, lang);
    }
}

const page404 = window.wwg_designInfo.pages.find(page => page.paths.default === '404');
if (page404) {
    for (const lang of window.wwg_designInfo.langs) {
        // Create routes /:lang/:pathMatch(.*)* etc for all langs of the 404 page
        if (!page404.langs.includes(lang.lang)) continue;
        registerRoute(
            page404,
            {
                default: false,
                lang: lang.lang,
            },
            '/:pathMatch(.*)*'
        );
    }
    // Create route /:pathMatch(.*)* using default project lang
    registerRoute(page404, { default: true, isDefaultPath: false, lang: defaultLang.lang }, '/:pathMatch(.*)*');
} else {
    routes.push({
        path: '/:pathMatch(.*)*',
        async beforeEnter() {
            window.location.href = '/404';
        },
    });
}

let routerOptions = {};

const isProd =
    !window.location.host.includes( //TODO: add staging2 ?
        '-staging.' + (process.env.WW_ENV === 'staging' ? process.env.VUE_APP_PREVIEW_URL : '')
    ) && !window.location.host.includes(process.env.VUE_APP_PREVIEW_URL);

if (isProd && window.wwg_designInfo.baseTag?.href) {
    let baseTag = window.wwg_designInfo.baseTag.href;
    if (!baseTag.startsWith('/')) {
        baseTag = '/' + baseTag;
    }
    if (!baseTag.endsWith('/')) {
        baseTag += '/';
    }

    routerOptions = {
        base: baseTag,
        history: createWebHistory(baseTag),
        routes,
    };
} else {
    routerOptions = {
        history: createWebHistory(),
        routes,
    };
}

router = createRouter({
    ...routerOptions,
    scrollBehavior,
});

//Trigger on page unload
let isFirstNavigation = true;
router.beforeEach(async (to, from) => {
    if (to.name === from.name) return;
    if (!isFirstNavigation) await onPageUnload();
    isFirstNavigation = false;
    wwLib.globalVariables._navigationId++;
    return;
});

//Init page
router.afterEach((to, from, failure) => {
    wwLib.$store.dispatch('front/showPageLoadProgress', false);
    let fromPath = from.path;
    let toPath = to.path;
    if (!fromPath.endsWith('/')) fromPath = fromPath + '/';
    if (!toPath.endsWith('/')) toPath = toPath + '/';
    if (failure || (from.name && toPath === fromPath)) return;
    initializeData(to);
});
/* wwFront:end */

export default router;
