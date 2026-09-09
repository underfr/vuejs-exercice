<script setup lang="ts">

</script>

<template>
  <div class="bg-base-200 min-h-screen py-12">
    <div class="mx-auto max-w-5xl px-4">

      <!-- Header -->
      <div class="mb-10 text-center">
        <h1 class="text-4xl font-bold">Get in touch</h1>
        <p class="text-base-content/70 mt-3 max-w-xl mx-auto">
          Have a question, a project in mind, or just want to say hello?
          Fill out the form below and we'll get back to you within two business days.
        </p>
      </div>

      <div class="grid gap-6 lg:grid-cols-5">

        <!-- Form -->
        <div class="card bg-base-100 shadow-sm lg:col-span-3">
          <div class="card-body">
            <h2 class="card-title">Send us a message</h2>

            <div class="grid gap-4 sm:grid-cols-2">
              <fieldset class="fieldset">
                <legend class="fieldset-legend">First name</legend>
                <input type="text" class="input w-full" placeholder="Jane" />
              </fieldset>

              <fieldset class="fieldset">
                <legend class="fieldset-legend">Last name</legend>
                <input type="text" class="input w-full" placeholder="Doe" />
              </fieldset>
            </div>

            <fieldset class="fieldset">
              <legend class="fieldset-legend">Email</legend>
              <input type="email" class="input w-full" placeholder="jane@example.com" />
              <p class="label">We'll never share your address.</p>
            </fieldset>

            <fieldset class="fieldset">
              <legend class="fieldset-legend">Subject</legend>
              <select class="select w-full">
                <option disabled selected>Pick a topic</option>
                <option>General inquiry</option>
                <option>Sales</option>
                <option>Technical support</option>
                <option>Partnership</option>
              </select>
            </fieldset>

            <fieldset class="fieldset">
              <legend class="fieldset-legend">Message</legend>
              <textarea
                  class="textarea h-32 w-full"
                  placeholder="Tell us a bit about what you need..."
              ></textarea>
            </fieldset>

            <label class="label cursor-pointer justify-start gap-3">
              <input type="checkbox" class="checkbox checkbox-sm" />
              <span class="label-text">Subscribe to our monthly newsletter</span>
            </label>

            <div class="card-actions mt-4 justify-end">
              <button class="btn btn-ghost">Clear</button>
              <button class="btn btn-primary">Send message</button>
            </div>
          </div>
        </div>

        <!-- Info -->
        <div class="flex flex-col gap-6 lg:col-span-2">

          <div class="card bg-base-100 shadow-sm">
            <div class="card-body">
              <h2 class="card-title text-lg">Contact details</h2>

              <ul class="mt-2 space-y-4 text-sm">
                <li>
                  <p class="font-semibold">Email</p>
                  <a href="mailto:hello@example.com" class="link link-hover text-base-content/70">
                    hello@example.com
                  </a>
                </li>
                <li>
                  <p class="font-semibold">Phone</p>
                  <a href="tel:+15550123456" class="link link-hover text-base-content/70">
                    +1 (555) 012-3456
                  </a>
                </li>
                <li>
                  <p class="font-semibold">Office</p>
                  <p class="text-base-content/70">
                    24 Maple Street<br />
                    Suite 300<br />
                    Portland, OR 97205
                  </p>
                </li>
                <li>
                  <p class="font-semibold">Hours</p>
                  <p class="text-base-content/70">Monday to Friday, 9am – 6pm</p>
                </li>
              </ul>
            </div>
          </div>

          <div class="card bg-base-100 shadow-sm">
            <div class="card-body">
              <h2 class="card-title text-lg">Common questions</h2>

              <div class="collapse collapse-arrow bg-base-200">
                <input type="radio" name="faq" checked />
                <div class="collapse-title font-medium">How fast do you reply?</div>
                <div class="collapse-content text-sm">
                  <p>Most messages get an answer within two business days.</p>
                </div>
              </div>

              <div class="collapse collapse-arrow bg-base-200">
                <input type="radio" name="faq" />
                <div class="collapse-title font-medium">Do you offer support by phone?</div>
                <div class="collapse-content text-sm">
                  <p>Yes, during office hours. Email is usually faster for technical issues.</p>
                </div>
              </div>

              <div class="collapse collapse-arrow bg-base-200">
                <input type="radio" name="faq" />
                <div class="collapse-title font-medium">Can I visit the office?</div>
                <div class="collapse-content text-sm">
                  <p>Drop us a line first so we can make sure someone is around to meet you.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>