<script setup>
import { defineProps, defineEmits, defineExpose, ref, reactive, onMounted } from 'vue';
import {
    POST_LOGIN
} from '@/service/user_api';

import InputText from '@/components/Input/Text.vue';
import InputLabel from '@/components/Input/Label.vue';
import InputError from '@/components/Input/Error.vue';
import ButtonPrimary from '@/components/Button/Primary.vue';

import {
    LockClosedIcon,
    UserIcon
} from "@heroicons/vue/24/outline"

const password_open = ref(false)
const password_view_status = (status) => {
    password_open.value = status
}

const form = reactive({
    email: '',
    password: ''
});

const unauthorizedError = ref('');
const isLoading = ref(false);

const submit = async () => {
    isLoading.value = true;
    unauthorizedError.value = '';
    try {
        const response = await POST_LOGIN(form);
        // console.log(response);
        if (response) {
            localStorage.setItem("user-info", JSON.stringify(response.data));
            window.location.href = '/home';
            return;
        }
    } catch (error) {
        unauthorizedError.value = error;
    } finally {
        isLoading.value = false;
    }
}
</script>
<template>
    <div class="h-screen w-full flex flex-wrap flex items-center justify-center">
        <div class="relative md:w-1/2 w-full sm:pr-4 pr-3 pb-3 flex justify-center">
            <div class="p-5 sm:max-w-[500px] w-full">
                <div class="pl-8">
                    <div>
                        <div class="flex flex-col justify-center items-center">
                            <!-- <ApplicationLogo :width="'120px'" :height="'100%'" /> -->
                        </div>
                    </div>
                    <form @submit.prevent="submit" class="mt-4 rounded-lg p-5 border-[2px] border-gray-200 ">
                        <h2 class="mt-2 text-center text-[22px] font-bold tracking-tight text-gray-900">Login</h2>
                        <div class="mt-10">
                            <InputLabel for="email" value="User ID" class="text-[14px] mb-2" />
                            <div class="relative mt-1">
                                <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                                    <UserIcon class="h-4 w-4 text-gray-400" aria-hidden="true" />
                                </div>
                                <InputText id="email" type="text"
                                    class="pl-[10px] h-[40px] sm:text-sm text-[14px] pl-[40px]"
                                    v-model="form.email" required autofocus autocomplete="email"
                                    placeholder="i.e. 2324I245986789" />
                            </div>
                            <InputError class="mt-2" :message="unauthorizedError" />
                        </div>

                        <div class="mt-2">
                            <InputLabel for="password" value="Password" class="text-[14px] mb-2" />
                            <div class="relative mt-1">
                                <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                                    <LockClosedIcon class="h-4 w-4 text-gray-400 " aria-hidden="true" />
                                </div>
                                <InputText id="password" :type="password_open ? 'text' : 'password'"
                                    class="pl-[10px] h-[40px] sm:text-sm text-[14px] pl-[40px]" v-model="form.password"
                                    required autocomplete="current-password" placeholder="i.e. password#123" />
                                <i :class="['absolute top-[14px] right-4 text-[14px] text-gray-600 fa cursor-pointer hidden', password_open ? 'fa-eye' : 'fa-eye-slash']"
                                    @click="password_view_status(!password_open)"></i>
                            </div>
                        </div>

                        <div class="flex items-center justify-center mt-16">
                            <ButtonPrimary class="w-[100%] h-[45px] text-[14px]" :class="{ 'opacity-65': isLoading }"
                                :disabled="isLoading">
                                <span v-if="!isLoading">Login</span>
                                <svg v-else class="text-gray-300 animate-spin" viewBox="0 0 64 64" fill="none"
                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                                    <path
                                        d="M32 3C35.8083 3 39.5794 3.75011 43.0978 5.20749C46.6163 6.66488 49.8132 8.80101 52.5061 11.4939C55.199 14.1868 57.3351 17.3837 58.7925 20.9022C60.2499 24.4206 61 28.1917 61 32C61 35.8083 60.2499 39.5794 58.7925 43.0978C57.3351 46.6163 55.199 49.8132 52.5061 52.5061C49.8132 55.199 46.6163 57.3351 43.0978 58.7925C39.5794 60.2499 35.8083 61 32 61C28.1917 61 24.4206 60.2499 20.9022 58.7925C17.3837 57.3351 14.1868 55.199 11.4939 52.5061C8.801 49.8132 6.66487 46.6163 5.20749 43.0978C3.7501 39.5794 3 35.8083 3 32C3 28.1917 3.75011 24.4206 5.2075 20.9022C6.66489 17.3837 8.80101 14.1868 11.4939 11.4939C14.1868 8.80099 17.3838 6.66487 20.9022 5.20749C24.4206 3.7501 28.1917 3 32 3L32 3Z"
                                        stroke="currentColor" stroke-width="5" stroke-linecap="round"
                                        stroke-linejoin="round"></path>
                                    <path
                                        d="M32 3C36.5778 3 41.0906 4.08374 45.1692 6.16256C49.2477 8.24138 52.7762 11.2562 55.466 14.9605C58.1558 18.6647 59.9304 22.9531 60.6448 27.4748C61.3591 31.9965 60.9928 36.6232 59.5759 40.9762"
                                        stroke="currentColor" stroke-width="5" stroke-linecap="round"
                                        stroke-linejoin="round" class="text-green-500"></path>
                                </svg>
                            </ButtonPrimary>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
