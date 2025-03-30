<!-- 
component
  - a simple contact form
  - should save user input with user contact info and details of their message
-->
<script setup lang="ts">
</script>

<template>
    <div class="h-fit not-md:mb-8 md:h-[80dvh] max-w-2xl min-w-72 flex flex-col justify-center gap-4">
        <h1 class="text-2xl lg:text-5xl text-center">get in touch</h1>
        <p class="px-1 text-sm lg:text-md font-secondary font-extralight text-center">Want to learn more? Need some more details? Got a prayer request? Or just want to leave a compliment? Fill in the form below and we’ll look into it.</p>
        <div class="flex flex-col md:grid md:grid-cols-2 w-full gap-4">
            <div class="flex flex-col gap-2">
                <label class="text-sm lg:text-md font-secondary font-bold">First Name</label>
                <input type="text" class="text-sm lg:text-md bg-white rounded-md text-black font-secondary py-1 px-2" placeholder="First Name" />
            </div>
            <div class="flex flex-col gap-2">
                <label class="text-sm lg:text-md font-secondary font-bold">Last Name</label>
                <input type="text" class="text-sm lg:text-md bg-white rounded-md text-black font-secondary py-1 px-2" placeholder="Last Name" />
            </div>
            <div class="flex flex-col gap-2">
                <label class="text-sm lg:text-md font-secondary font-bold">Email Address</label>
                <input type="text" class="text-sm lg:text-md bg-white rounded-md text-black font-secondary py-1 px-2" placeholder="example@example.com" />
            </div>
            <div class="flex flex-col gap-2">
                <label class="text-sm lg:text-md font-secondary font-bold">WhatsApp Number</label>
                <input type="text" class="text-sm lg:text-md bg-white rounded-md text-black font-secondary py-1 px-2" placeholder="+0000000000" />
            </div>
            
            <div class="flex flex-col gap-2 col-span-2">
                <label class="text-sm lg:text-md font-secondary font-bold">Details</label>
                <textarea type="text" class="text-sm lg:text-md bg-white rounded-md text-black font-secondary py-1 px-2 resize-none" rows="5" maxlength="500" placeholder="Share your thoughts..."></textarea>
            </div>
            
            <button class="text-sm lg:text-md font-primary cursor-pointer text-black rounded-md py-2 px-5 col-span-2 mx-auto w-fit text-center bg-white">submit</button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
</style>