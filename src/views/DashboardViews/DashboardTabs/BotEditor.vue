<template>
    <div class="dashboard">
        <div class="page-container">
            <md-app md-mode="flexible">

                <md-app-drawer md-permanent="full">
                    <CompanyHierarchy/>
                </md-app-drawer>

                <md-app-content>

                    <div class="md-layout md-gutter full_height">
                        <div class="md-layout-item md-size-70 "><WelcomeMessageScript/></div>
                        <div class="md-layout-item md-size-30 "><LifeTest/></div>

                        <div class="md-toolbar-section-start">
                            <md-button class="md-raised">
                                Back to Dashboard
                            </md-button>
                        </div>

                        <div class="md-toolbar-section-end">
                            <md-button class="md-accent md-raised">
                                Save Changes
                            </md-button>
                        </div>


                    </div>

                    <!--<WelcomeMessageScript/>-->
                    <!--<EditBotName/>-->
                    <!--<LifeTest/>-->

                </md-app-content>
            </md-app>
        </div>
    </div>
</template>

<script>
    // @ is an alias to /src

    import WelcomeMessageScript from '@/components/DashboardComponents/EditTab/WelcomeMessageScriptComponent.vue'
    import CompanyHierarchy from '@/components/DashboardComponents/EditTab/CompanyAndChannelsHierarchyComponent.vue'
    import EditBotName from '@/components/DashboardComponents/EditTab/EditBotNameCmponent.vue'
    import LifeTest from '@/components/DashboardComponents/EditTab/LifeTestComponent.vue'

    export default {
        name: 'botEditor',
        components: {
            WelcomeMessageScript,
            CompanyHierarchy,
            EditBotName,
            LifeTest
        }
    }
</script>


<style lang="scss" scoped>
    .md-app {
        height: 100%;
        width: -webkit-fill-available;
        position: fixed;
        border: 1px solid rgba(#000, .12);
    }
    .md-app-drawer {
        margin: 35px;
        width: 250px;
    }
    .md-card-header {
        text-align: left;
    }
    .tutorial {
        margin: 0 80px 0 80px;
        width: 1340px;
    }
    .md-layout-item {
        width: 40px;

        &:after {
            width: 100%;
            display: block;
            background: md-get-palette-color(green, 200);
            content: " ";
        }
    }
    .md-toolbar-section-start {
        padding-left: 35px;
    }
    .md-toolbar-section-end {
        padding-right: 10px;
    }
    .full_height {
        height: 100%;
    }

</style>
