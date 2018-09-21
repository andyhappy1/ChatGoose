<template>
    <div class="dashboard">
        <div class="page-container">
            <md-app  md-waterfall md-mode="flexible">

                <md-app-drawer md-permanent="full" v-if="isEmptyCompany">
                    <CompanyHierarchy/>
                </md-app-drawer>


                <md-app-content v-bind:class="{ unActive: !isEmptyCompany }">

                    <md-button class="md-raised md-accent" v-if="!isEmptyCompany" :to="{'name': 'setupCompany'}">Start new Company</md-button>
                    <md-card class="dashboard_card">
                        <md-tabs>
                            <md-tab id="tab-home" md-label="Telegram"></md-tab>
                            <md-tab id="tab-pages" md-label="Twitter"></md-tab>
                            <md-tab id="tab-posts" md-label="Slack"></md-tab>
                        </md-tabs>
                        <div class="md-layout">
                            <div class="md-layout-item"><BotList/></div>
                            <div class="md-layout-item">
                                <NewUsersChart/>
                                <InfoPlatforms/>
                            </div>
                        </div>
                    </md-card>
                </md-app-content>
            </md-app>
        </div>
    </div>
</template>

<script>
    // @ is an alias to /src

    import BotList from '@/components/DashboardComponents/DashboardTab/BotListComponent.vue'
    import CompanyHierarchy from '@/components/DashboardComponents/DashboardTab/CompanyHierarchyComponent.vue'
    import NewUsersChart from '@/components/DashboardComponents/DashboardTab/NewUsersChartComponent.vue'
    import SetupPlatforms from '@/components/DashboardComponents/DashboardTab/SetupPlatformsComponent.vue'
    import InfoPlatforms from '@/components/DashboardComponents/DashboardTab/InfoPlatformsComponent.vue'
    import axios from "axios"

    export default {
        name: 'dashboard',
        components: {
            BotList,
            CompanyHierarchy,
            NewUsersChart,
            SetupPlatforms,
            InfoPlatforms
        },
        computed: {
            isEmptyCompany() {
                console.log(this.Company.length === 0)
                return !(this.Company.length === 0)
            }
        },
        beforeMount() {
            var formData = new FormData(),
                user = JSON.parse(localStorage.getItem('user'))
            formData.append("email", user.email);
            formData.append("id", user._id);
            axios.post("http://localhost:3128/company/get", formData).then(res => {
                this.Company = res.data.company
                console.log(this.Company)
            })
        },
        data () {
            return {
                Company: []
            }
        },
    }
</script>


<style lang="scss" scoped>
    .md-app {
        height: 100%;
        position: fixed;
    }
    .md-app .md-content.md-theme-default {
        border: 0px;
    }
    .md-card {
        width: 710px;
        margin: 10px;
        display: inline-block;
        vertical-align: top;
    }
    .md-app-drawer {
        margin: 35px;
        width: 250px;
    }
    .unActive {
        width: 85%;
    }
    .md-app-content {
        margin: auto;
    }
    .md-card-header {
        text-align: left;
    }
    .dashboard_card {
        width: auto;
    }
    .md-accent {
        width: 100%;
    }
</style>
