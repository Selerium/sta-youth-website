<!--
component
  - just the footer info at the bottom of a page
-->

<script setup lang="ts"></script>

<template>
  <div class="w-full bg-white h-[1px] my-2 rounded-sm"></div>
  <div class="grid grid-cols-2 md:flex justify-evenly items-center md:h-36 h-fit py-2 gap-y-5 w-full">
    <img
      class="hidden xl:block col-span-2 w-auto h-20"
      src="../assets/logo-transparent.png"
      v-on:click=""
    />
    <img
      class="xl:hidden mx-auto block col-span-2 h-10 rounded-4xl"
      src="../assets/favicon-logo.svg"
      v-on:click=""
    />
    <div class="flex flex-col h-full gap-1 col-span-1 items-center md:items-start justify-center">
      <RouterLink to="/" class="font-secondary text-sm">Home</RouterLink>
      <RouterLink to="/" class="font-secondary text-sm">Blog</RouterLink>
      <RouterLink to="/" class="font-secondary text-sm">Gallery</RouterLink>
      <RouterLink to="/" class="font-secondary text-sm">Contact</RouterLink>
    </div>
    <div class="flex flex-col h-full gap-1 col-span-1 items-center md:items-start justify-center">
      <RouterLink to="/" class="font-secondary text-sm"
        >Church Website
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon"
          style="display: inline"
          viewBox="0 0 512 512"
        >
          <path
            d="M384 224v184a40 40 0 01-40 40H104a40 40 0 01-40-40V168a40 40 0 0140-40h167.48M336 64h112v112M224 288L440 72"
            fill="none"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="32"
            class="transition-all"
          />
        </svg>
      </RouterLink>
      <RouterLink to="/" class="font-secondary text-sm"
        >Church Newsletter
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon"
          style="display: inline"
          viewBox="0 0 512 512"
        >
          <path
            d="M384 224v184a40 40 0 01-40 40H104a40 40 0 01-40-40V168a40 40 0 0140-40h167.48M336 64h112v112M224 288L440 72"
            fill="none"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="32"
            class="transition-all"
          />
        </svg>
      </RouterLink>
      <RouterLink to="/" class="font-secondary text-sm"
        >Youth Newsletter
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon"
          style="display: inline"
          viewBox="0 0 512 512"
        >
          <path
            d="M384 224v184a40 40 0 01-40 40H104a40 40 0 01-40-40V168a40 40 0 0140-40h167.48M336 64h112v112M224 288L440 72"
            fill="none"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="32"
            class="transition-all"
          />
        </svg>
      </RouterLink>
    </div>
    <div class="flex gap-6 h-full col-span-2 items-center justify-center">
      <svg
        width="33"
        height="32"
        viewBox="0 0 33 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M26.2619 7.41625C26.0594 7.31159 25.8623 7.19687 25.6713 7.0725C25.1158 6.70528 24.6065 6.27259 24.1544 5.78375C23.0231 4.48938 22.6006 3.17625 22.445 2.25688H22.4513C22.3213 1.49375 22.375 1 22.3831 1H17.2306V20.9237C17.2306 21.1912 17.2306 21.4556 17.2194 21.7169C17.2194 21.7494 17.2163 21.7794 17.2144 21.8144C17.2144 21.8288 17.2144 21.8438 17.2113 21.8587V21.87C17.1569 22.5849 16.9278 23.2754 16.544 23.8809C16.1601 24.4864 15.6334 24.9884 15.01 25.3425C14.3603 25.7121 13.6256 25.906 12.8781 25.905C10.4775 25.905 8.53188 23.9475 8.53188 21.53C8.53188 19.1125 10.4775 17.155 12.8781 17.155C13.3326 17.1546 13.7842 17.2261 14.2163 17.3669L14.2225 12.1206C12.9109 11.9512 11.5783 12.0554 10.309 12.4268C9.03964 12.7981 7.86103 13.4285 6.84751 14.2781C5.95942 15.0498 5.21281 15.9704 4.64126 16.9988C4.42376 17.3738 3.60313 18.8806 3.50376 21.3263C3.44126 22.7144 3.85813 24.1525 4.05688 24.7469V24.7594C4.18188 25.1094 4.66626 26.3037 5.45563 27.3106C6.09215 28.1183 6.84419 28.8278 7.68751 29.4163V29.4037L7.70001 29.4163C10.1944 31.1112 12.96 31 12.96 31C13.4388 30.9806 15.0425 31 16.8638 30.1369C18.8838 29.18 20.0338 27.7544 20.0338 27.7544C20.7684 26.9025 21.3526 25.9318 21.7613 24.8838C22.2275 23.6581 22.3831 22.1881 22.3831 21.6006V11.0306C22.4456 11.0681 23.2781 11.6187 23.2781 11.6187C23.2781 11.6187 24.4775 12.3875 26.3488 12.8881C27.6913 13.2444 29.5 13.3194 29.5 13.3194V8.20438C28.8663 8.27313 27.5794 8.07313 26.2619 7.41625Z"
          fill="white"
        />
      </svg>
      <svg
        width="34"
        height="32"
        viewBox="0 0 34 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M23.0154 4.33313C24.6095 4.33774 26.1369 4.95385 27.2641 6.04689C28.3913 7.13993 29.0267 8.62109 29.0315 10.1669V21.8331C29.0267 23.3789 28.3913 24.8601 27.2641 25.9531C26.1369 27.0462 24.6095 27.6623 23.0154 27.6669H10.9846C9.3905 27.6623 7.86305 27.0462 6.73586 25.9531C5.60866 24.8601 4.9733 23.3789 4.96854 21.8331V10.1669C4.9733 8.62109 5.60866 7.13993 6.73586 6.04689C7.86305 4.95385 9.3905 4.33774 10.9846 4.33313H23.0154ZM23.0154 2H10.9846C6.35234 2 2.5625 5.675 2.5625 10.1669V21.8331C2.5625 26.325 6.35234 30 10.9846 30H23.0154C27.6477 30 31.4375 26.325 31.4375 21.8331V10.1669C31.4375 5.675 27.6477 2 23.0154 2Z"
          fill="white"
        />
        <path
          d="M24.8201 10.167C24.4632 10.167 24.1143 10.0644 23.8175 9.87207C23.5207 9.67977 23.2894 9.40646 23.1528 9.08669C23.0162 8.76692 22.9805 8.41505 23.0501 8.07558C23.1197 7.73612 23.2916 7.4243 23.544 7.17956C23.7964 6.93481 24.1179 6.76814 24.468 6.70062C24.8181 6.63309 25.181 6.66775 25.5107 6.8002C25.8405 6.93266 26.1223 7.15696 26.3206 7.44475C26.5189 7.73253 26.6248 8.07088 26.6248 8.41699C26.6253 8.64694 26.579 8.87473 26.4885 9.08727C26.3979 9.29982 26.265 9.49293 26.0973 9.65553C25.9297 9.81813 25.7305 9.94702 25.5113 10.0348C25.2921 10.1226 25.0572 10.1675 24.8201 10.167ZM17 11.3332C17.9519 11.3332 18.8824 11.607 19.6738 12.1198C20.4653 12.6326 21.0821 13.3614 21.4464 14.2142C21.8106 15.0669 21.9059 16.0053 21.7202 16.9106C21.5345 17.8159 21.0762 18.6474 20.4031 19.3001C19.73 19.9528 18.8725 20.3972 17.9389 20.5773C17.0053 20.7574 16.0377 20.665 15.1583 20.3117C14.2788 19.9585 13.5272 19.3604 12.9984 18.5929C12.4695 17.8254 12.1873 16.9231 12.1873 16.0001C12.1887 14.7628 12.6961 13.5765 13.5984 12.7016C14.5007 11.8267 15.724 11.3346 17 11.3332ZM17 9.00012C15.5723 9.00012 14.1766 9.41066 12.9895 10.1798C11.8024 10.949 10.8771 12.0423 10.3307 13.3213C9.78438 14.6004 9.64142 16.0079 9.91996 17.3658C10.1985 18.7236 10.886 19.9709 11.8956 20.9499C12.9051 21.9288 14.1914 22.5955 15.5917 22.8656C16.992 23.1357 18.4434 22.9971 19.7625 22.4673C21.0816 21.9375 22.209 21.0403 23.0022 19.8891C23.7954 18.738 24.2188 17.3846 24.2188 16.0001C24.2188 14.1436 23.4582 12.3631 22.1044 11.0504C20.7507 9.73762 18.9145 9.00012 17 9.00012Z"
          fill="white"
        />
      </svg>
      <svg
        width="34"
        height="32"
        viewBox="0 0 34 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_32_232)">
          <path
            d="M33.2835 9.29937C33.2835 6.48687 31.1501 4.22437 28.5139 4.22437C24.9432 4.0625 21.3016 4 17.5801 4H16.4199C12.7074 4 9.0594 4.0625 5.4887 4.225C2.85901 4.225 0.725612 6.5 0.725612 9.3125C0.564479 11.5369 0.496159 13.7619 0.500026 15.9869C0.49358 18.2119 0.566627 20.439 0.719166 22.6681C0.719166 25.4806 2.85257 27.7619 5.48225 27.7619C9.23342 27.9306 13.0813 28.0056 16.9936 27.9994C20.9123 28.0119 24.7494 27.9327 28.5049 27.7619C31.141 27.7619 33.2744 25.4806 33.2744 22.6681C33.4291 20.4369 33.5 18.2119 33.4936 15.9806C33.5082 13.7556 33.4382 11.5285 33.2835 9.29937ZM13.8418 22.1181V9.83687L23.1875 15.9744L13.8418 22.1181Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_32_232">
            <rect
              width="33"
              height="32"
              fill="white"
              transform="translate(0.5)"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
