<template>
  <nav
    class="bg-white border-b border-gray-200 px-4 py-2.5 dark:bg-gray-800 dark:border-gray-700 fixed left-0 right-0 top-0 z-50"
  >
    <div class="flex flex-wrap justify-between items-center">
      <div class="flex justify-start items-center">
        <button
          data-drawer-target="drawer-navigation"
          data-drawer-toggle="drawer-navigation"
          aria-controls="drawer-navigation"
          class="p-2 mr-2 text-gray-600 rounded-lg cursor-pointer md:hidden hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          <svg
            aria-hidden="true"
            class="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0
              01-1-1zM3 10a1 1 0 011-1h6a1 1 0
              110 2H4a1 1 0 01-1-1zM3 15a1 1 0
              011-1h12a1 1 0 110 2H4a1 1 0
              01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <svg
            aria-hidden="true"
            class="hidden w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0
              011.414 0L10 8.586l4.293-4.293a1
              1 0 111.414 1.414L11.414 10l4.293
              4.293a1 1 0 01-1.414 1.414L10
              11.414l-4.293 4.293a1 1 0
              01-1.414-1.414L8.586 10 4.293
              5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span class="sr-only">Toggle sidebar</span>
        </button>
        <router-link to="/" class="flex items-center justify-between mr-4">
          <img src="/favicon.svg" class="mr-3 h-6 sm:h-8" alt="Didact Logo" />
          <span
            class="self-center text-2xl font-semibold whitespace-nowrap text-orange-500 dark:text-white"
            >Didact</span
          >
        </router-link>
        <form action="#" method="GET" class="hidden md:block md:pl-2">
          <label for="topbar-search" class="sr-only">Search</label>
          <div class="relative md:w-96">
            <div
              class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
            >
              <svg
                class="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8 4a4 4 0
                  100 8 4 4 0
                  000-8zM2 8a6 6 0
                  1110.89 3.476l4.817
                  4.817a1 1 0
                  01-1.414 1.414l-4.816-4.816A6
                  6 0 012 8z"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              name="email"
              id="topbar-search"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm
              rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10
              p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
              dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Search"
            />
          </div>
        </form>
      </div>
      <div class="flex items-center lg:order-2">
        <button
          type="button"
          data-drawer-toggle="drawer-navigation"
          aria-controls="drawer-navigation"
          class="p-2 mr-1 text-gray-500 rounded-lg md:hidden hover:text-gray-900 hover:bg-gray-100
          dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300
          dark:focus:ring-gray-600"
        >
          <span class="sr-only">Toggle search</span>
          <svg
            aria-hidden="true"
            class="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              clip-rule="evenodd"
              fill-rule="evenodd"
              d="M8 4a4 4 0
              100 8 4 4 0
              000-8zM2 8a6 6 0
              1110.89 3.476l4.817 4.817a1 1
              0 01-1.414 1.414l-4.816-4.816A6
              6 0 012 8z"
            ></path>
          </svg>
        </button>

        <!-- Dark mode toggle -->
        <button
          @click="$emit('toggleDarkMode')"
          id="theme-toggle"
          type="button"
          class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700
          focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700
          rounded-lg text-sm p-2 mr-1"
        >
          <svg
            id="theme-toggle-dark-icon"
            v-show="!isDarkMode"
            class="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M17.293 13.293A8
            8 0 016.707 2.707a8.001
            8.001 0 1010.586 10.586z"></path>
          </svg>
          <svg
            id="theme-toggle-light-icon"
            v-show="isDarkMode"
            class="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              d="M10 2a1 1 0
              011 1v1a1 1 0
              11-2 0V3a1 1 0
              011-1zm4 8a4 4 0
              11-8 0 4 4 0
              018 0zm-.464
              4.95l.707.707a1
              1 0 001.414-1.414l-.707-.707a1
              1 0 00-1.414 1.414zm2.12-10.607a1
              1 0 010 1.414l-.706.707a1
              1 0 11-1.414-1.414l.707-.707a1
              1 0 011.414 0zM17
              11a1 1 0 100-2h-1a1
              1 0 100 2h1zm-7
              4a1 1 0 011 1v1a1
              1 0 11-2 0v-1a1
              1 0 011-1zM5.05
              6.464A1 1 0
              106.465 5.05l-.708-.707a1
              1 0 00-1.414
              1.414l.707.707zm1.414
              8.486l-.707.707a1
              1 0 01-1.414-1.414l.707-.707a1
              1 0 011.414
              1.414zM4 11a1 1 0
              100-2H3a1 1 0
              000 2h1z"
              fill-rule="evenodd"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>

        <!-- Notifications button and dropdown -->
        <!-- (You can refactor notifications dropdown into its own component if desired) -->
        <button
          type="button"
          data-dropdown-toggle="notification-dropdown"
          class="p-2 mr-1 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100
          dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300
          dark:focus:ring-gray-600"
        >
          <span class="sr-only">View notifications</span>
          <svg
            aria-hidden="true"
            class="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              d="M10 2a6 6 0
              00-6 6v3.586l-.707.707A1
              1 0 004 14h12a1 1 0
              00.707-1.707L16
              11.586V8a6 6 0
              00-6-6zM10 18a3 3 0
              01-3-3h6a3 3 0
              01-3 3z"
            ></path>
          </svg>
        </button>

        <!-- Notification dropdown -->
        <!-- The large block of notification dropdown HTML can remain here -->

        <!-- Apps -->
        <button
          type="button"
          data-dropdown-toggle="apps-dropdown"
          class="p-2 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100
          dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300
          dark:focus:ring-gray-600"
        >
          <span class="sr-only">View apps</span>
          <svg
            class="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              d="M5 3a2 2 0
              00-2 2v2a2 2 0
              002 2h2a2 2 0
              002-2V5a2 2 0
              00-2-2H5zM5
              11a2 2 0 00-2
              2v2a2 2 0
              002 2h2a2 2 0
              002-2v-2a2 2 0
              00-2-2H5zM11 5a2 2 0
              012-2h2a2 2 0
              012 2v2a2 2 0
              01-2 2h-2a2 2 0
              01-2-2V5zM11
              13a2 2 0 012-2h2a2
              2 0 012 2v2a2 2 0
              01-2 2h-2a2 2 0
              01-2-2v-2z"
            ></path>
          </svg>
        </button>

        <!-- Apps dropdown and other dropdowns remain here if needed -->

        <button
          type="button"
          class="flex mx-3 text-sm bg-gray-800 rounded-full md:mr-0
          focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
          id="user-menu-button"
        >
          <span class="sr-only">Open user menu</span>
          <img
            class="w-8 h-8 rounded-full"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gough.png"
            alt="user photo"
          />
        </button>

        <!-- User menu dropdown -->
        <!-- Keep it here or refactor further as needed -->

      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">

defineProps({
  isDarkMode: {
    type: Boolean,
    required: true
  }
})

defineEmits(['toggleDarkMode'])
</script>
