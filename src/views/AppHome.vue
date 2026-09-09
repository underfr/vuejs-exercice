<script setup lang="ts">

</script>

<template>
  <div class="bg-base-200">

    <!-- Hero -->
    <div class="hero bg-base-100 py-24">
      <div class="hero-content max-w-6xl flex-col gap-12 lg:flex-row-reverse">
        <div class="mockup-window bg-base-300 border-base-300 w-full max-w-lg border shadow-sm">
          <div class="bg-base-200 grid h-64 place-items-center">
            <span class="text-base-content/40 text-sm">Product screenshot</span>
          </div>
        </div>

        <div class="max-w-xl">
          <div class="badge badge-primary badge-outline mb-4">Now in version 3.0</div>
          <h1 class="text-4xl font-bold sm:text-5xl">
            Everything your team needs, in one quiet workspace
          </h1>
          <p class="text-base-content/70 mt-5 text-lg">
            Stop switching between five tabs to answer one question. Plan, track and ship
            your work from a single place that loads fast and stays out of your way.
          </p>

          <div class="mt-8 flex flex-wrap gap-3">
            <RouterLink to="/signup" class="btn btn-primary">Start free trial</RouterLink>
            <RouterLink to="/contact" class="btn btn-ghost">Book a demo</RouterLink>
          </div>

          <p class="text-base-content/60 mt-4 text-sm">
            Free for 14 days. No credit card required.
          </p>
        </div>
      </div>
    </div>

    <!-- Social proof -->
    <div class="bg-base-100 border-base-300 border-y py-10">
      <div class="mx-auto max-w-5xl px-4 text-center">
        <p class="text-base-content/60 text-sm font-medium tracking-wide uppercase">
          Trusted by 12,000 teams around the world
        </p>
        <div class="text-base-content/40 mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-xl font-semibold">
          <span>Northwind</span>
          <span>Lumen</span>
          <span>Kettle &amp; Co</span>
          <span>Fieldwork</span>
          <span>Rivet</span>
        </div>
      </div>
    </div>

    <div class="mx-auto max-w-5xl px-4 py-16">

      <!-- Features -->
      <div class="text-center">
        <h2 class="text-3xl font-bold">Built for the work you actually do</h2>
        <p class="text-base-content/70 mt-3">
          No dashboards nobody reads. Just the handful of things a team needs every day.
        </p>
      </div>

      <div class="mt-10 grid gap-6 md:grid-cols-3">
        <div class="card bg-base-100 shadow-sm">
          <div class="card-body">
            <h3 class="card-title text-lg">Shared boards</h3>
            <p class="text-base-content/70 text-sm">
              Move work across stages with a drag. Everyone sees the same picture, updated
              the moment something changes.
            </p>
          </div>
        </div>

        <div class="card bg-base-100 shadow-sm">
          <div class="card-body">
            <h3 class="card-title text-lg">Threaded comments</h3>
            <p class="text-base-content/70 text-sm">
              Discussions stay attached to the task instead of scattering across chat and
              email.
            </p>
          </div>
        </div>

        <div class="card bg-base-100 shadow-sm">
          <div class="card-body">
            <h3 class="card-title text-lg">Automations</h3>
            <p class="text-base-content/70 text-sm">
              Assign, label and notify on your own rules, so routine steps take care of
              themselves.
            </p>
          </div>
        </div>

        <div class="card bg-base-100 shadow-sm">
          <div class="card-body">
            <h3 class="card-title text-lg">Instant search</h3>
            <p class="text-base-content/70 text-sm">
              Find any task, file or comment in a few keystrokes, however deep it's buried.
            </p>
          </div>
        </div>

        <div class="card bg-base-100 shadow-sm">
          <div class="card-body">
            <h3 class="card-title text-lg">Weekly digests</h3>
            <p class="text-base-content/70 text-sm">
              A short Monday summary of what shipped, what slipped and what needs a decision.
            </p>
          </div>
        </div>

        <div class="card bg-base-100 shadow-sm">
          <div class="card-body">
            <h3 class="card-title text-lg">Open API</h3>
            <p class="text-base-content/70 text-sm">
              A documented REST API and webhooks, so you can wire us into whatever you
              already run.
            </p>
          </div>
        </div>
      </div>

      <!-- How it works -->
      <div class="mt-20">
        <h2 class="text-center text-3xl font-bold">Up and running in an afternoon</h2>

        <ul class="steps steps-vertical lg:steps-horizontal mt-10 w-full">
          <li class="step step-primary">
            <div class="mt-3 max-w-xs">
              <p class="font-semibold">Create your workspace</p>
              <p class="text-base-content/70 text-sm">
                Pick a name, invite your team, done in under a minute.
              </p>
            </div>
          </li>
          <li class="step step-primary">
            <div class="mt-3 max-w-xs">
              <p class="font-semibold">Bring your work over</p>
              <p class="text-base-content/70 text-sm">
                Import from CSV or from the usual suspects with one click.
              </p>
            </div>
          </li>
          <li class="step step-primary">
            <div class="mt-3 max-w-xs">
              <p class="font-semibold">Set your rules</p>
              <p class="text-base-content/70 text-sm">
                Decide what gets assigned, labelled and announced automatically.
              </p>
            </div>
          </li>
        </ul>
      </div>

      <!-- Testimonials -->
      <div class="mt-20">
        <h2 class="text-center text-3xl font-bold">What our customers say</h2>

        <div class="mt-8 grid gap-6 md:grid-cols-3">
          <div class="card bg-base-100 shadow-sm">
            <div class="card-body">
              <div class="rating rating-sm">
                <div class="mask mask-star-2 bg-warning"></div>
                <div class="mask mask-star-2 bg-warning"></div>
                <div class="mask mask-star-2 bg-warning"></div>
                <div class="mask mask-star-2 bg-warning"></div>
                <div class="mask mask-star-2 bg-warning"></div>
              </div>
              <p class="text-base-content/80 mt-2 text-sm">
                We cancelled two other subscriptions the week we switched. Our standups are
                half as long now.
              </p>
              <div class="mt-4 flex items-center gap-3">
                <div class="avatar">
                  <div class="w-10 rounded-full">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                        alt="Elena Marsh"
                    />
                  </div>
                </div>
                <div>
                  <p class="text-sm font-semibold">Elena Marsh</p>
                  <p class="text-base-content/60 text-xs">Ops lead, Northwind</p>
                </div>
              </div>
            </div>
          </div>

          <div class="card bg-base-100 shadow-sm">
            <div class="card-body">
              <div class="rating rating-sm">
                <div class="mask mask-star-2 bg-warning"></div>
                <div class="mask mask-star-2 bg-warning"></div>
                <div class="mask mask-star-2 bg-warning"></div>
                <div class="mask mask-star-2 bg-warning"></div>
                <div class="mask mask-star-2 bg-warning"></div>
              </div>
              <p class="text-base-content/80 mt-2 text-sm">
                Support answered a tricky API question in twenty minutes, on a Sunday. That
                sold me more than the feature list.
              </p>
              <div class="mt-4 flex items-center gap-3">
                <div class="avatar">
                  <div class="w-10 rounded-full">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1494790108377-be9c29b29330.webp"
                        alt="Dara Okonkwo"
                    />
                  </div>
                </div>
                <div>
                  <p class="text-sm font-semibold">Dara Okonkwo</p>
                  <p class="text-base-content/60 text-xs">Engineer, Rivet</p>
                </div>
              </div>
            </div>
          </div>

          <div class="card bg-base-100 shadow-sm">
            <div class="card-body">
              <div class="rating rating-sm">
                <div class="mask mask-star-2 bg-warning"></div>
                <div class="mask mask-star-2 bg-warning"></div>
                <div class="mask mask-star-2 bg-warning"></div>
                <div class="mask mask-star-2 bg-warning"></div>
                <div class="mask mask-star-2 bg-warning"></div>
              </div>
              <p class="text-base-content/80 mt-2 text-sm">
                It's the first tool my whole team adopted without me having to chase anyone.
              </p>
              <div class="mt-4 flex items-center gap-3">
                <div class="avatar">
                  <div class="w-10 rounded-full">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1568602471122-7832951cc4c5.webp"
                        alt="Sofia Klein"
                    />
                  </div>
                </div>
                <div>
                  <p class="text-sm font-semibold">Sofia Klein</p>
                  <p class="text-base-content/60 text-xs">Founder, Kettle &amp; Co</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Pricing teaser -->
      <div class="mt-20">
        <h2 class="text-center text-3xl font-bold">Simple pricing</h2>
        <p class="text-base-content/70 mt-3 text-center">
          Per user, per month. Cancel whenever you like.
        </p>

        <div class="mt-8 grid gap-6 md:grid-cols-3">
          <div class="card bg-base-100 shadow-sm">
            <div class="card-body">
              <h3 class="card-title text-lg">Starter</h3>
              <p class="text-3xl font-bold">$0</p>
              <p class="text-base-content/60 text-sm">Up to 3 people</p>
              <ul class="mt-4 space-y-2 text-sm">
                <li>Unlimited tasks</li>
                <li>Two active boards</li>
                <li>Community support</li>
              </ul>
              <div class="card-actions mt-6">
                <RouterLink to="/signup" class="btn btn-ghost btn-block">
                  Get started
                </RouterLink>
              </div>
            </div>
          </div>

          <div class="card bg-base-100 border-primary border-2 shadow-md">
            <div class="card-body">
              <div class="flex items-center justify-between">
                <h3 class="card-title text-lg">Team</h3>
                <span class="badge badge-primary">Popular</span>
              </div>
              <p class="text-3xl font-bold">$12</p>
              <p class="text-base-content/60 text-sm">Per user, per month</p>
              <ul class="mt-4 space-y-2 text-sm">
                <li>Everything in Starter</li>
                <li>Unlimited boards</li>
                <li>Automations and API access</li>
                <li>Priority email support</li>
              </ul>
              <div class="card-actions mt-6">
                <RouterLink to="/signup" class="btn btn-primary btn-block">
                  Start free trial
                </RouterLink>
              </div>
            </div>
          </div>

          <div class="card bg-base-100 shadow-sm">
            <div class="card-body">
              <h3 class="card-title text-lg">Business</h3>
              <p class="text-3xl font-bold">$24</p>
              <p class="text-base-content/60 text-sm">Per user, per month</p>
              <ul class="mt-4 space-y-2 text-sm">
                <li>Everything in Team</li>
                <li>SSO and audit logs</li>
                <li>Custom data retention</li>
                <li>Dedicated account manager</li>
              </ul>
              <div class="card-actions mt-6">
                <RouterLink to="/contact" class="btn btn-ghost btn-block">
                  Talk to sales
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="card bg-base-100 mt-20 shadow-sm">
        <div class="card-body items-center gap-4 text-center">
          <h2 class="card-title text-2xl">Give it an afternoon</h2>
          <p class="text-base-content/70 max-w-lg">
            Fourteen days, all features unlocked, nothing to cancel if you decide it isn't
            for you.
          </p>
          <div class="card-actions mt-2">
            <RouterLink to="/signup" class="btn btn-primary">Start free trial</RouterLink>
            <RouterLink to="/about" class="btn btn-ghost">Learn about us</RouterLink>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>

</style>