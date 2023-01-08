<template>
  <a-layout-header class="shadow-md">
    <a-row>
      <a-col :span="8" class="bg-blue-3">
        Searchbar
      </a-col>
      <a-col :span="8" class="bg-red-3 flex justify-center">
        <div class="flex justify-center">
          Logo
        </div>
      </a-col>
      <a-col :span="8" class="bg-green-3 ">
        <div class="flex gap-3 justify-end items-center h-full">
          <a-button type="text" shape="circle" size="large">
            <template #icon>
              <heart-outlined />
            </template>
          </a-button>
          <a-button type="text" shape="circle" size="large">
            <template #icon>
              <user-outlined />
            </template>
          </a-button>
          <a-button type="text" shape="circle" size="large">
            <template #icon>
              <shopping-outlined />
            </template>
          </a-button>
        </div>
      </a-col>
    </a-row>
  </a-layout-header>
</template>
