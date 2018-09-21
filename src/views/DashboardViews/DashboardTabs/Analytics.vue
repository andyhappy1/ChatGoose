<template>
    <div class="dashboard">
        <div class="page-container">
            <md-app md-mode="flexible">

                <md-app-drawer md-permanent="full">
                    <CompanyHierarchy/>
                </md-app-drawer>

                <md-app-content>
                    <div class="md-layout">

                        <div class="md-layout-item">
                            <NewUsersChart/>
                        </div>
                    </div>
                </md-app-content>
            </md-app>
        </div>
    </div>
</template>

<script>
    // @ is an alias to /src

    import CompanyHierarchy from '@/components/DashboardComponents/Analytics/CompanyAndChannelsHierarchyComponent.vue'
    import NewUsersChart from '@/components/DashboardComponents/Analytics/NewUsersChartComponent.vue'

    export default {
        name: 'analytics',
        components: {
            CompanyHierarchy,
            NewUsersChart
        }
    }
</script>


<style lang="scss" scoped>
    .md-app {
        height: 100%;
        width: 100%;
        position: fixed;
        border: 1px solid rgba(#000, .12);
    }
    .md-app-drawer {
        margin: 35px;
        width: 250px;
    }
    .new_users_card {
        width: auto;
    }

</style>
