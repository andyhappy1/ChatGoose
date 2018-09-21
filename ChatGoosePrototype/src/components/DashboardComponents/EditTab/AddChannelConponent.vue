<template>
    <div>
        <md-dialog :md-active.sync="showDialog">
            <md-dialog-title>Add Chanel</md-dialog-title>
            <div class="steps_add_chanel">
                <p>1. Go to Telegram</p>
                <p>2. Add your bot to channel</p>
                <p>3. Assign your bot as admin in this channel</p>
            </div>

            <!--<md-tabs md-dynamic-height>-->
                <!--<md-tab md-label="General">-->
                    <!--<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam mollitia dolorum dolores quae commodi impedit possimus qui, atque at voluptates cupiditate. Neque quae culpa suscipit praesentium inventore ducimus ipsa aut.</p>-->
                    <!--<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam mollitia dolorum dolores quae commodi impedit possimus qui, atque at voluptates cupiditate. Neque quae culpa suscipit praesentium inventore ducimus ipsa aut.</p>-->
                    <!--<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam mollitia dolorum dolores quae commodi impedit possimus qui, atque at voluptates cupiditate. Neque quae culpa suscipit praesentium inventore ducimus ipsa aut.</p>-->
                <!--</md-tab>-->

                <!--<md-tab md-label="Activity">-->
                    <!--<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam mollitia dolorum dolores quae commodi impedit possimus qui, atque at voluptates cupiditate. Neque quae culpa suscipit praesentium inventore ducimus ipsa aut.</p>-->
                    <!--<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam mollitia dolorum dolores quae commodi impedit possimus qui, atque at voluptates cupiditate. Neque quae culpa suscipit praesentium inventore ducimus ipsa aut.</p>-->
                    <!--<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam mollitia dolorum dolores quae commodi impedit possimus qui, atque at voluptates cupiditate. Neque quae culpa suscipit praesentium inventore ducimus ipsa aut.</p>-->
                    <!--<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam mollitia dolorum dolores quae commodi impedit possimus qui, atque at voluptates cupiditate. Neque quae culpa suscipit praesentium inventore ducimus ipsa aut.</p>-->
                    <!--<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam mollitia dolorum dolores quae commodi impedit possimus qui, atque at voluptates cupiditate. Neque quae culpa suscipit praesentium inventore ducimus ipsa aut.</p>-->
                <!--</md-tab>-->

                <!--<md-tab md-label="Account">-->
                    <!--<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam mollitia dolorum dolores quae commodi impedit possimus qui, atque at voluptates cupiditate. Neque quae culpa suscipit praesentium inventore ducimus ipsa aut.</p>-->
                    <!--<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam mollitia dolorum dolores quae commodi impedit possimus qui, atque at voluptates cupiditate. Neque quae culpa suscipit praesentium inventore ducimus ipsa aut.</p>-->
                <!--</md-tab>-->
            <!--</md-tabs>-->

            <md-dialog-actions>
                <md-button class="md-primary" @click="showDialog = false">Chanel</md-button>
                <md-button class="md-primary md-raised" @click="showDialog = false">Finish</md-button>
            </md-dialog-actions>
        </md-dialog>

        <md-button class="md-raised md-accent add_chanel" @click="showDialog = true"> <md-icon>add</md-icon>Add Channel</md-button>
    </div>
</template>

<script>
    export default {
        name: 'AddChanel',
        data: () => ({
            showDialog: false
        })
    }
</script>

<style lang="scss" scoped>
    .add_chanel {
        width: 240px;
    }
    .md-dialog {
        max-width: 568px;
    }
    .md-dialog-title {
        margin-bottom: 0px;
    }
    .steps_add_chanel {
        padding: 25px;
    }
</style>
