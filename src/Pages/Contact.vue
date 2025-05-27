<template>
  <div class="py-16 px-4 sm:px-6 lg:px">
    <div class="max-w-2xl mx-auto text-center">
      <h2 class="text-3xl font-bold mb-8 text-center text-indigo-600">Contact Me</h2>
      <p class="mt-4 text-lg text-gray-600 dark:text-gray-300">
        Have a project in mind or just want to say hi? I'd love to hear from you.
      </p>
    </div>

    <div class="mt-10 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-lg p-8 max-w-xl mx-auto" style="z-index: 999 !important;">
      <form class="space-y-6" @submit.prevent="sendEmail" ref="contactForm">
        <input type="text" v-model="honeypot" style="display: none;" autocomplete="off" />
        <div>
          <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Your Name
          </label>
          <Input
            v-model="name"
            type="text"
            id="name"
            :disabled="loading"
            placeholder="Enter your name"
            class="mt-1 block w-full px-4 py-3 rounded-md bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div>
          <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Your Email
          </label>
          <Input
            v-model="email"
            type="email"
            id="email"
            :disabled="loading"
            placeholder="Enter your email"
            class="mt-1 block w-full px-4 py-3 rounded-md bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div>
          <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Your Message
          </label>
          <Textarea
            v-model="message"
            id="message"
            :disabled="loading"
            placeholder="Type your message here..."
            class="mt-1 block w-full px-4 py-3 rounded-md bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white shadow-sm focus:ring-indigo-500 focus:border-indigo-500 h-32 resize-none"
          ></Textarea>
        </div>

        <div class="text-center">
          <Button
            type="submit"
            :disabled="loading"
            class="inline-flex items-center justify-center px-6 py-3 text-white bg-indigo-600 hover:bg-indigo-700 rounded-md shadow-md transition-all duration-300"
          >
            {{ loading ? 'Sending...' : 'Send Message' }}
          </Button>
        </div>
      </form>
    </div>

    <!-- AlertDialog for success/failure -->
    <AlertDialog :open="dialogOpen" @update:open="dialogOpen = $event">
    <AlertDialogContent
      class="rounded-2xl shadow-xl border-0 px-6 py-5 dark:bg-gray-900 bg-white max-w-md w-full"
    >
      <div class="flex items-start gap-4">
        <div class="shrink-0 mt-1">
          <component
            :is="isSuccess ? CheckCircle : XCircle"
            class="w-8 h-8"
            :class="isSuccess ? 'text-green-500' : 'text-red-500'"
          />
        </div>
        <div class="flex-1 space-y-2">
          <AlertDialogHeader class="space-y-1">
            <AlertDialogTitle
              class="text-lg font-semibold leading-snug text-gray-900 dark:text-white"
            >
              {{ dialogTitle }}
            </AlertDialogTitle>
            <AlertDialogDescription
              class="text-sm text-gray-600 dark:text-gray-300"
            >
              {{ dialogMessage }}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter class="pt-4">
            <AlertDialogAction
              @click="dialogOpen = false"
              class="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-4 py-2 rounded-md transition"
            >
              OK
            </AlertDialogAction>
          </AlertDialogFooter>
        </div>
      </div>
    </AlertDialogContent>
  </AlertDialog>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import emailjs from 'emailjs-com';
import Input from '../components/ui/input/Input.vue';
import { Textarea } from '../components/ui/Textarea';
import Button from '../components/ui/button/Button.vue';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogAction,
} from '@/components/ui/alert-dialog';
import { CheckCircle, XCircle } from 'lucide-vue-next';

const name = ref('');
const email = ref('');
const message = ref('');
const loading = ref(false);

const dialogOpen = ref(false);
const dialogTitle = ref('');
const dialogMessage = ref('');

const isSuccess = ref(true);

let lastSubmitTime = 0;
const honeypot = ref('');

const sendEmail = async () => {
  loading.value = true;
  const now = new Date().toLocaleString();

  if (honeypot.value) {
    return
  }
  const dateNow = Date.now();
  if (dateNow - lastSubmitTime < 30000) {
    isSuccess.value = false;
    dialogTitle.value = 'Failed to Send';
    dialogMessage.value = 'Please wait a few seconds before sending again.';
    dialogOpen.value = true;
    return;
  }
  lastSubmitTime = dateNow;

  try {
  await emailjs.send(
    'service_5ia5khm',
    'template_kw5fg75',
    {
      name: name.value + '(' + email.value + ')',
      time: now,
      message: message.value,
      email: email.value,
    },
    'iM3vgCa5yMxCInqfn'
  );

  isSuccess.value = true;
  dialogTitle.value = 'Message Sent!';
  dialogMessage.value = 'Your message has been successfully sent. I will get back to you soon.';
  dialogOpen.value = true;

  name.value = '';
  email.value = '';
  message.value = '';
  } catch (error) {
    isSuccess.value = false;
    dialogTitle.value = 'Failed to Send';
    dialogMessage.value = 'Something went wrong. Please try again later.';
    dialogOpen.value = true;
    console.error(error);
  }
  setTimeout(() => loading.value = false, 30000);
};
</script>
