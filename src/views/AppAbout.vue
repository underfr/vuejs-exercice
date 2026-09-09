<script setup lang="ts">

</script>

<template>
  <div class="bg-base-200 min-h-screen">

    <!-- Hero -->
    <div class="hero bg-base-100 py-20">
      <div class="hero-content text-center">
        <div class="max-w-2xl">
          <div class="badge badge-primary badge-outline mb-4">About us</div>
          <h1 class="text-4xl font-bold sm:text-5xl">We build tools people enjoy using</h1>
          <p class="text-base-content/70 mt-5 text-lg">
            Started in a shared apartment in 2018, we're now a small team spread across
            four countries, working on software that stays out of your way.
          </p>
        </div>
      </div>
    </div>

    <div class="mx-auto max-w-5xl px-4 py-12">

      <!-- Stats -->
      <div class="stats stats-vertical sm:stats-horizontal bg-base-100 w-full shadow-sm">
        <div class="stat place-items-center">
          <div class="stat-title">Founded</div>
          <div class="stat-value text-primary">2018</div>
          <div class="stat-desc">Portland, OR</div>
        </div>
        <div class="stat place-items-center">
          <div class="stat-title">Customers</div>
          <div class="stat-value">12K</div>
          <div class="stat-desc">Across 40 countries</div>
        </div>
        <div class="stat place-items-center">
          <div class="stat-title">Team members</div>
          <div class="stat-value">23</div>
          <div class="stat-desc">Fully remote</div>
        </div>
      </div>

      <!-- Story -->
      <div class="mt-12 grid gap-8 lg:grid-cols-2 lg:items-center">
        <div>
          <h2 class="text-3xl font-bold">Our story</h2>
          <p class="text-base-content/70 mt-4">
            We were freelancers juggling five different tools that barely talked to each
            other. Nothing on the market did the one thing we actually needed, so we built
            it for ourselves over a long winter.
          </p>
          <p class="text-base-content/70 mt-4">
            A few friends asked for access, then their colleagues did too. We took the hint,
            quit our contracts, and turned the side project into a company. Seven years later
            the goal hasn't changed: fewer clicks, less noise, more time for the work that
            matters.
          </p>
        </div>

        <div class="card bg-base-100 shadow-sm">
          <figure class="h-64">
            <img
                class="h-full w-full object-cover"
                src="https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp"
                alt="Our workspace"
            />
          </figure>
        </div>
      </div>

      <!-- Values -->
      <div class="mt-16">
        <h2 class="text-center text-3xl font-bold">What we believe</h2>
        <p class="text-base-content/70 mt-3 text-center">
          Three principles we come back to whenever a decision gets hard.
        </p>

        <div class="mt-8 grid gap-6 md:grid-cols-3">
          <div class="card bg-base-100 shadow-sm">
            <div class="card-body">
              <h3 class="card-title text-lg">Clarity over cleverness</h3>
              <p class="text-base-content/70 text-sm">
                If a feature needs a tutorial to make sense, it usually needs a redesign
                instead.
              </p>
            </div>
          </div>

          <div class="card bg-base-100 shadow-sm">
            <div class="card-body">
              <h3 class="card-title text-lg">Ship small, ship often</h3>
              <p class="text-base-content/70 text-sm">
                We'd rather release a modest improvement every week than a grand rewrite
                every year.
              </p>
            </div>
          </div>

          <div class="card bg-base-100 shadow-sm">
            <div class="card-body">
              <h3 class="card-title text-lg">Your data is yours</h3>
              <p class="text-base-content/70 text-sm">
                No ads, no reselling, and a one-click export whenever you decide to leave.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Timeline -->
      <div class="mt-16">
        <h2 class="text-center text-3xl font-bold">How we got here</h2>

        <ul class="timeline timeline-snap-icon timeline-compact timeline-vertical mt-8">
          <li>
            <div class="timeline-middle">
              <div class="badge badge-primary badge-sm"></div>
            </div>
            <div class="timeline-end mb-8">
              <time class="font-mono text-sm italic">2018</time>
              <div class="text-lg font-bold">First line of code</div>
              <p class="text-base-content/70 text-sm">
                Two people, one laptop, and a problem worth solving.
              </p>
            </div>
            <hr />
          </li>

          <li>
            <hr />
            <div class="timeline-middle">
              <div class="badge badge-primary badge-sm"></div>
            </div>
            <div class="timeline-end mb-8">
              <time class="font-mono text-sm italic">2020</time>
              <div class="text-lg font-bold">Public launch</div>
              <p class="text-base-content/70 text-sm">
                We opened the beta and hit a thousand signups in the first month.
              </p>
            </div>
            <hr />
          </li>

          <li>
            <hr />
            <div class="timeline-middle">
              <div class="badge badge-primary badge-sm"></div>
            </div>
            <div class="timeline-end mb-8">
              <time class="font-mono text-sm italic">2023</time>
              <div class="text-lg font-bold">Going remote for good</div>
              <p class="text-base-content/70 text-sm">
                We closed the office and rebuilt the company around asynchronous work.
              </p>
            </div>
            <hr />
          </li>

          <li>
            <hr />
            <div class="timeline-middle">
              <div class="badge badge-primary badge-sm"></div>
            </div>
            <div class="timeline-end mb-8">
              <time class="font-mono text-sm italic">Today</time>
              <div class="text-lg font-bold">23 people, 12,000 customers</div>
              <p class="text-base-content/70 text-sm">
                Still independent, still bootstrapped, still answering our own support email.
              </p>
            </div>
          </li>
        </ul>
      </div>

      <!-- Team -->
      <div class="mt-16">
        <h2 class="text-center text-3xl font-bold">The people behind it</h2>

        <div class="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div class="card bg-base-100 shadow-sm">
            <div class="card-body items-center text-center">
              <div class="avatar">
                <div class="w-20 rounded-full">
                  <img
                      src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                      alt="Maya Robinson"
                  />
                </div>
              </div>
              <h3 class="card-title mt-2 text-lg">Maya Robinson</h3>
              <p class="text-primary text-sm font-medium">Co-founder &amp; CEO</p>
              <p class="text-base-content/70 text-sm">
                Handles strategy, hiring, and roughly half of the support tickets.
              </p>
            </div>
          </div>

          <div class="card bg-base-100 shadow-sm">
            <div class="card-body items-center text-center">
              <div class="avatar">
                <div class="w-20 rounded-full">
                  <img
                      src="https://img.daisyui.com/images/stock/photo-1494790108377-be9c29b29330.webp"
                      alt="Tomás Ferreira"
                  />
                </div>
              </div>
              <h3 class="card-title mt-2 text-lg">Tomás Ferreira</h3>
              <p class="text-primary text-sm font-medium">Co-founder &amp; CTO</p>
              <p class="text-base-content/70 text-sm">
                Wrote the first prototype and still reviews most of the pull requests.
              </p>
            </div>
          </div>

          <div class="card bg-base-100 shadow-sm">
            <div class="card-body items-center text-center">
              <div class="avatar">
                <div class="w-20 rounded-full">
                  <img
                      src="https://img.daisyui.com/images/stock/photo-1568602471122-7832951cc4c5.webp"
                      alt="Priya Nandakumar"
                  />
                </div>
              </div>
              <h3 class="card-title mt-2 text-lg">Priya Nandakumar</h3>
              <p class="text-primary text-sm font-medium">Head of Design</p>
              <p class="text-base-content/70 text-sm">
                Responsible for the interface being calm instead of crowded.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="card bg-base-100 mt-16 shadow-sm">
        <div class="card-body items-center gap-4 text-center">
          <h2 class="card-title text-2xl">Want to work with us?</h2>
          <p class="text-base-content/70 max-w-lg">
            We're hiring across engineering and support, and we're always glad to hear from
            people who just want to talk shop.
          </p>
          <div class="card-actions mt-2">
            <RouterLink to="/careers" class="btn btn-primary">See open roles</RouterLink>
            <RouterLink to="/contact" class="btn btn-ghost">Contact us</RouterLink>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>

</style>