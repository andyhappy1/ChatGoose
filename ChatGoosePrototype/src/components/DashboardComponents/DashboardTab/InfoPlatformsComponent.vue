<template>
    <md-card class="tutorial">
        <md-card-header class="md-primary">
            <!--<md-card-header-text class="md-primary" >-->
                <!--<div class="md-title">Platforms</div>-->
                <!--<div class="md-subhead">Complete all stages to add Platform and Create Bot</div>-->
            <!--</md-card-header-text>-->

        </md-card-header>


        <md-app-content>

            <div class="full-control">

                <div class="md-layout">
                    <div class="md-layout-item">
                        <span>Bot Name</span>
                        <p>Welcome Bot</p>
                    </div>
                    <div class="md-layout-item">
                        <span>Bot ID (ends with bot)</span>
                        <p>@welcomebot</p>
                    </div>
                    <div class="md-layout-item md-size-100">
                        <span>Token Address</span>
                        <p>123456789:AABBCCDD_abcdefghijklmnopqrstuvwxyz</p>
                    </div>
                </div>
                <md-card-actions>
                    <md-button class="md-raised md-primary">Add Platform</md-button>
                </md-card-actions>
            </div>

        </md-app-content>
    </md-card>

</template>

<script>
    // @ is an alias to /src

    export default {
        name: 'SetupPlatform',
        components: {
        }
    }
</script>


<style lang="scss" scoped>
    .md-card-header-text {
        text-align: left;
    }
    .md-layout-item {
        text-align: left;
    }
    span {
        font-weight: bold;
    }
</style>
