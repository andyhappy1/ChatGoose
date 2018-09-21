<template>
    <div class="dashboard">
        <div class="page-container">
            <md-app md-mode="flexible">

                <md-app-content>
                    <h1 class="title">Buy Product</h1>
                    <md-card>
                            <md-card-header>
                                <div class="md-title">Free Period</div>
                                <div class="md-subhead">Unlimite Bots and Channels</div>
                            </md-card-header>

                            <md-card-content>
                                47 days remaining
                            </md-card-content>

                    </md-card>
                    <md-card>
                            <md-card-header>
                                <div class="md-title">ChatGoose</div>
                                <div class="md-subhead">Unlimite Bots and Channels</div>
                            </md-card-header>

                            <md-card-content>
                                $10/month<br/>
                                $95/year
                            </md-card-content>

                            <md-card-actions>
                                <md-button class="md-raised md-accent">Buy</md-button>
                            </md-card-actions>
                    </md-card>
                </md-app-content>
            </md-app>
        </div>
    </div>
</template>

<script>
    // @ is an alias to /src

    export default {
        name: 'buy',
        components: {
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
    .md-card {
        width: 420px;
        height: 205px;
        margin: 4px;
        display: inline-block;
        vertical-align: top;
    }
    .md-app-drawer {
        margin: 35px;
        width: 250px;
    }
    .title {
        text-align: left;
        margin: 100px;
        margin-left: 250px;
        font-size: 50px;
    }

</style>
