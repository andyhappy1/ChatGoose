<template>
    <div class="setupCompany">
        <SetupCompany/>
    </div>
</template>

<script>
    // @ is an alias to /src
    import SetupCompany from '@/components/DashboardComponents/DashboardTab/SetupCompanyComponent/SetupCompany.vue'

    export default {
        name: 'setupCompany',
        components: {
            SetupCompany
        }
    }
</script>
