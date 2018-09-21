<template>
    <div class="full-control">
        <md-list>
            <md-button class="md-raised md-primary">
                <md-icon>refresh</md-icon>
                refresh
            </md-button>
            <!--<md-divider></md-divider>-->
            <md-list-item class="md-inset">
                Chanel 1
                <md-icon>fiber_manual_record</md-icon>
            </md-list-item>
            <md-list-item class="md-inset">Chanel 2</md-list-item>
            <md-list-item class="md-inset">Chanel 3</md-list-item>
            <AddChanel/>
        </md-list>


        <md-autocomplete
                v-model="selectedEmployee"
                :md-options="channels"
                md-layout="box"
                md-dense>
            <label>Chanel</label>
        </md-autocomplete>

        <md-autocomplete
                v-model="selectedEmployee"
                :md-options="compayes"
                md-layout="box"
                md-dense>
            <label>Company</label>
        </md-autocomplete>


        <!--<div class="list">-->
            <!--<md-list :md-expand-single="expandSingle">-->
                <!--<md-list-item md-expand :md-expanded.sync="expandNews">-->
                    <!--<md-icon>account_balance</md-icon>-->
                    <!--<span class="md-list-item-text">Company A</span>-->

                    <!--<md-list slot="md-expand">-->
                        <!--<md-list-item md-expand :md-expanded.sync="expandNews3">-->
                            <!--<md-icon>message</md-icon>-->
                            <!--<span class="md-list-item-text">Telegram</span>-->

                            <!--<md-list slot="md-expand">-->
                                <!--<md-button class="md-raised md-primary">-->
                                    <!--<md-icon>refresh</md-icon>-->
                                    <!--refresh-->
                                <!--</md-button>-->
                                <!--&lt;!&ndash;<md-divider></md-divider>&ndash;&gt;-->
                                <!--<md-list-item class="md-inset">-->
                                    <!--Chanel 1-->
                                    <!--<md-icon>fiber_manual_record</md-icon>-->
                                <!--</md-list-item>-->
                                <!--<md-list-item class="md-inset">Chanel 2</md-list-item>-->
                                <!--<md-list-item class="md-inset">Chanel 3</md-list-item>-->
                                <!--&lt;!&ndash;<md-divider></md-divider>&ndash;&gt;-->
                                <!--<AddChanel/>-->
                            <!--</md-list>-->
                        <!--</md-list-item>-->
                        <!--<md-list-item md-expand :md-expanded.sync="expandNews2">-->
                            <!--<md-icon>message</md-icon>-->
                            <!--<span class="md-list-item-text">Slack</span>-->

                            <!--<md-list slot="md-expand">-->
                                <!--<md-button class="md-raised md-primary">-->
                                    <!--<md-icon>refresh</md-icon>-->
                                    <!--refresh-->
                                <!--</md-button>-->
                                <!--&lt;!&ndash;<md-divider></md-divider>&ndash;&gt;-->
                                <!--<md-list-item class="md-inset">-->
                                    <!--Chanel 1-->
                                    <!--<md-icon>fiber_manual_record</md-icon>-->
                                <!--</md-list-item>-->
                                <!--<md-list-item class="md-inset">Chanel 2</md-list-item>-->
                                <!--<md-list-item class="md-inset">Chanel 3</md-list-item>-->
                                <!--&lt;!&ndash;<md-divider></md-divider>&ndash;&gt;-->
                                <!--<AddChanel/>-->
                            <!--</md-list>-->
                        <!--</md-list-item>-->
                    <!--</md-list>-->
                <!--</md-list-item>-->

                <!--<md-list-item md-expand :md-expanded.sync="expandNews6">-->
                    <!--<md-icon>account_balance</md-icon>-->
                    <!--<span class="md-list-item-text">Company B</span>-->

                    <!--<md-list slot="md-expand">-->
                        <!--<md-list-item md-expand :md-expanded.sync="expandNews4">-->
                            <!--<md-icon>message</md-icon>-->
                            <!--<span class="md-list-item-text">Telegram AbbyBot</span>-->

                            <!--<md-list slot="md-expand">-->
                                <!--<md-button class="md-raised md-primary">-->
                                    <!--<md-icon>refresh</md-icon>-->
                                    <!--refresh-->
                                <!--</md-button>-->
                                <!--&lt;!&ndash;<md-divider></md-divider>&ndash;&gt;-->
                                <!--<md-list-item class="md-inset">-->
                                    <!--Chanel 1-->
                                    <!--<md-icon>fiber_manual_record</md-icon>-->
                                <!--</md-list-item>-->
                                <!--<md-list-item class="md-inset">Chanel 2</md-list-item>-->
                                <!--<md-list-item class="md-inset">Chanel 3</md-list-item>-->
                                <!--&lt;!&ndash;<md-divider></md-divider>&ndash;&gt;-->
                                <!--<AddChanel/>-->
                            <!--</md-list>-->
                        <!--</md-list-item>-->
                        <!--<md-list-item md-expand :md-expanded.sync="expandNews5">-->
                            <!--<md-icon>message</md-icon>-->
                            <!--<span class="md-list-item-text">Slack</span>-->

                            <!--<md-list slot="md-expand">-->
                                <!--<md-button class="md-raised md-primary">-->
                                    <!--<md-icon>refresh</md-icon>-->
                                    <!--refresh-->
                                <!--</md-button>-->
                                <!--&lt;!&ndash;<md-divider></md-divider>&ndash;&gt;-->
                                <!--<md-list-item class="md-inset">-->
                                    <!--Chanel 1-->
                                    <!--<md-icon>fiber_manual_record</md-icon>-->
                                <!--</md-list-item>-->
                                <!--<md-list-item class="md-inset">Chanel 2</md-list-item>-->
                                <!--<md-list-item class="md-inset">Chanel 3</md-list-item>-->
                                <!--&lt;!&ndash;<md-divider></md-divider>&ndash;&gt;-->
                                <!--<AddChanel/>-->
                            <!--</md-list>-->
                        <!--</md-list-item>-->
                    <!--</md-list>-->
                <!--</md-list-item>-->
            <!--</md-list>-->
        <!--</div>-->
    </div>
</template>

<script>
    // @ is an alias to /src
    import AddChanel from '@/components/DashboardComponents/EditTab/AddChannelConponent.vue'

    export default {
        name: 'CompanyHierarchy',
        components: {
            AddChanel
        },
        data: () => ({
            selectedEmployee: null,
            compayes: [
                'Company A',
                'Company B'
            ],
            channels: [
                'Telegram',
                'Slack'
            ]
        })
    }
</script>


<style lang="scss" scoped>
    .md-app-drawer {
        margin: 35px;
        width: 250px;
    }
    $list-width: 320px;

    .full-control {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap-reverse;
    }

    .list {
        width: $list-width;
    }

    .md-autocomplete {
      margin: 5px;
    }

    .control {
        min-width: 250px;
        display: flex;
        flex-direction: column;
        padding: 16px;
    }
</style>
