<template>
    <!-- <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
      <div class="container mx-auto px-6 py-8">
        <h3 class="text-gray-700 text-3xl font-medium">簡單表格</h3>
        <div class="mt-8">
          <div class="flex flex-col mt-6">
            <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  <table class="min-w-full divide-y divide-gray-200">
                    <thead class="bg-gray-50">
                      <tr>
                        <th v-for="header in headers" :key="header" scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          {{ header }}
                        </th>
                      </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">
                      <tr v-for="person in people" :key="person.name">
                        <td class="px-6 py-4 whitespace-nowrap">{{ person.name }}</td>
                        <td class="px-6 py-4 whitespace-nowrap">{{ person.country }}</td>
                        <td class="px-6 py-4 whitespace-nowrap">{{ person.city }}</td>
                        <td class="px-6 py-4 whitespace-nowrap">{{ person.salary }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main> -->
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  
  interface Person {
    name: string;
    country: string;
    city: string;
    salary: string;
  }
  
  const headers = ref(['姓名', '國家', '城市', '薪資'])
  
  const people = ref<Person[]>([
    { name: 'Dakota Rice', country: 'Niger', city: 'Oud-Turnhout', salary: '$36,738' },
    { name: 'Minerva Hooper', country: 'Curaçao', city: 'Sinaai-Waas', salary: '$23,789' },
    { name: 'Sage Rodriguez', country: 'Netherlands', city: 'Baileux', salary: '$56,142' },
    { name: 'Philip Chaney', country: 'Korea, South', city: 'Overland Park', salary: '$38,735' },
    { name: 'Doris Greene', country: 'Malawi', city: 'Feldkirchen in Kärnten', salary: '$63,542' },
    { name: 'Mason Porter', country: 'Chile', city: 'Gloucester', salary: '$78,615' },
    { name: 'Jon Porter', country: 'Portugal', city: 'Gloucester', salary: '$98,615' },
  ])
  </script>
  
  <style scoped>
  /* 如果需要的話，這裡可以添加組件特定的樣式 */
  </style>