<template>
  <div class="landing__container">
    <v-parallax
      dark
      height="600"
      src="https://f.hubspotusercontent00.net/hubfs/2480959/pilotcitypaperplanes_grey.png"
      class="landing__hero"
    >
      <!-- APP BAR  -->
      <v-app-bar absolute class="landing__app-bar" color="transparent" flat>
        <!-- <v-toolbar depressed flat color="primary" height="75"> -->
        <!-- <img src="@/assets/Pilotcity_logo.png" class="nav__logo" /> -->

        <v-toolbar-title
          ><span class="text-h5 signup__header font-weight-black text-sm-h4"></span
        ></v-toolbar-title>

        <v-spacer></v-spacer>

        <div class="nav__actions">
          <v-btn
            v-if="!user"
            depressed
            color="white"
            outlined
            large
            rounded
            :to="{ name: 'login' }"
            :ripple="false"
          >
            <span class="font-weight-black">Login</span>
          </v-btn>
          <v-btn
            v-if="!user"
            class="signup__signupbutton"
            depressed
            large
            rounded
            color="green"
            :ripple="false"
            :to="{ name: 'signup' }"
          >
            <span class="font-weight-black">Signup</span>
          </v-btn>

          <v-btn v-if="user" text color="#404142" @click="$router.push({ name: 'portfolio' })">
            <Profile :size="45" />
          </v-btn>
        </div>
        <!-- </v-toolbar> -->
      </v-app-bar>

      <!-- APP BAR END -->
      <div class="landing__hero-body">
        <div class="landing__hero-logo">
          <v-img
            src="https://f.hubspotusercontent00.net/hubfs/2480959/PilotCity_Wireframe_White.svg"
          ></v-img>
        </div>

        <div class="landing__hero-title">Digital programs, for digital cities.</div>

        <validation-observer>
          <div class="landing__hero-cta">
            <validation-provider v-slot="{ errors }" slim rules="email">
              <v-text-field
                v-model="starterEmail"
                :error-messages="errors[0]"
                dark
                rounded
                outlined
                label="Signup with email"
              ></v-text-field>
            </validation-provider>

            <v-btn
              class="landing__hero-cta-button"
              x-large
              rounded
              depressed
              dark
              @click="$router.push({ name: 'signup', query: { email: starterEmail } })"
              >Get Started</v-btn
            >
          </div>
        </validation-observer>
        <div class="landing__hero-citizenchips text-center">
          <a href="#student">
            <v-btn
              center
              rounded
              depressed
              dark
              large
              color="green"
              class="landing__hero-citizenchips-group1"
              ><v-icon left>mdi-clover</v-icon>Students</v-btn
            ></a
          >

          <a href="#employer">
            <v-btn
              center
              rounded
              depressed
              dark
              large
              color="purple"
              class="landing__hero-citizenchips-group"
              ><v-icon left>mdi-graph-outline</v-icon>Employers</v-btn
            >
          </a>
          <a href="#teacher">
            <v-btn
              center
              rounded
              depressed
              dark
              large
              color="pink"
              class="landing__hero-citizenchips-group"
              ><v-icon left>mdi-head-heart</v-icon>Teachers</v-btn
            >
          </a>

          <a href="#school">
            <v-btn
              center
              rounded
              depressed
              dark
              large
              color="blue"
              class="landing__hero-citizenchips-group"
              ><v-icon left>mdi-airballoon</v-icon>Schools</v-btn
            >
          </a>

          <a href="#parent">
            <v-btn
              center
              rounded
              depressed
              dark
              large
              color="yellow"
              class="landing__hero-citizenchips-group"
              ><v-icon left>mdi-sign-direction</v-icon>Parents</v-btn
            >
          </a>

          <a href="#sponsor">
            <v-btn
              center
              rounded
              depressed
              dark
              large
              color="red"
              class="landing__hero-citizenchips-group"
              ><v-icon left>mdi-currency-usd-circle</v-icon>Sponsors</v-btn
            >
          </a>

          <!-- <v-btn
         The code for the v-scrolls for each chip @click="$vuetify.goTo(target, options)"
            center
            dark
            color="green"
            class="landing__hero-citizenchips-group"
            ><v-icon left>mdi-clover</v-icon>For Students</v-btn
          >
          <v-chip center dark color="purple" class="landing__hero-citizenchips-group"
            ><v-icon left>mdi-graph-outline</v-icon>For Employers</v-chip
          >
          <v-chip center dark color="pink" class="landing__hero-citizenchips-group"
            ><v-icon left>mdi-head-heart</v-icon>For Teachers</v-chip
          >
          <v-chip center dark color="blue" class="landing__hero-citizenchips-group"
            ><v-icon left>mdi-airballoon</v-icon>For Schools</v-chip
          >
          <v-chip center dark color="yellow" class="landing__hero-citizenchips-group"
            ><v-icon left>mdi-sign-direction</v-icon>For Parents</v-chip
          >
          <v-chip center dark color="red" class="landing__hero-citizenchips-group"
            ><v-icon left>mdi-currency-usd-circle</v-icon>For Sponsors</v-chip
          > -->
        </div>
      </div>
    </v-parallax>

    <v-parallax
      dark
      class="landing__hero-default"
      height="100%"
      src="https://f.hubspotusercontent00.net/hubfs/2480959/Final_19500_Background.svg"
    >
      <div class="landing__single-column">
        <div>
          <v-btn
            style="color: white !important"
            class="landing__row1-button"
            color="white"
            disabled
            dark
            depressed
            outlined
            small
            >PilotCity's Flagship Program</v-btn
          >
        </div>
        <div class="landing__row2">
          PilotCity enables students to build employer projects to win internships. 97% of our
          alumni and 90% of our parents would recommend our program.
        </div>
        <div class="landing__row3">
          <v-btn
            class="landing__row3-button"
            disabled
            style="color: white !important"
            dark
            depressed
            outlined
            small
            color="white"
            >A civic engine for resilience, equity and digital transformation</v-btn
          >
        </div>
      </div>
    </v-parallax>

    <!-- <v-parallax
      dark
      class="landing__hero-default"
      height="100%"
      src="https://f.hubspotusercontent00.net/hubfs/2480959/Final_19500_Background.svg"
    >
      <div class="landing__single-column">
        <div class="landing__row1">
          <v-btn dark depressed outlined small>Program Timeline</v-btn>
        </div>
        <div class="landing__row2"></div>
        <div class="landing__row1">
          <v-btn dark depressed outlined small color="green"
            >A civic engine for resilience, equity and digital transformation</v-btn
          >
        </div>
      </div>
    </v-parallax> -->

    <v-parallax
      src="https://f.hubspotusercontent00.net/hubfs/2480959/testimonial-background4.png"
      dark
      height="100%"
      class="landing__hero-default"
    >
      <div class="landing__2-column">
        <div class="landing__left">
          <div class="landing__text-testimonial-green">
            <v-icon left dark>mdi-comment-quote</v-icon>
            PilotCity kicks the idea of 'coffee fetching and document copying' internships to the
            curb
          </div>
          <div class="landing__text-testimonial-body">
            <div>
              <v-avatar size="75">
                <v-img
                  src="https://f.hubspotusercontent00.net/hubfs/2480959/_DSC4843_small.jpg"
                ></v-img>
              </v-avatar>
            </div>
            <div class="landing__text-testimonial-title">
              <div class="landing__text-testimonial-name-green">Kevin C.</div>
              <div class="landing__text-testimonial-position">Intern, Strategy of Things</div>
            </div>
          </div>
        </div>
        <div class="landing__right landing__testimonial-logo">
          <v-img
            max-width="200"
            src="https://f.hubspotusercontent00.net/hubfs/2480959/StrategyOfThings_white.png"
          ></v-img>
        </div>
      </div>
    </v-parallax>

    <v-parallax
      src="https://f.hubspotusercontent00.net/hubfs/2480959/Final_19500_Background.svg"
      dark
      height="100%"
      class="landing__hero-default"
    >
      <div class="landing__primary-title">Activities</div>

      <v-btn outlined small color="white" rounded class="landing__primary-subtitle"
        >Key events and program activities</v-btn
      >
      <div class="">
        <v-img
          src="https://f.hubspotusercontent00.net/hubfs/2480959/Final_ProgramTimeline_v2.svg"
          class="landing__primary-image"
          width="75%"
        ></v-img>
      </div>
      <div class="landing__banner-cta">
        <v-btn
          x-large
          depressed
          dark
          rounded
          color="blue"
          @click="$router.push({ name: 'signup', query: { email: starterEmail } })"
          >Signup and Invite</v-btn
        >
      </div>
    </v-parallax>

    <v-parallax
      src="https://f.hubspotusercontent00.net/hubfs/2480959/testimonial-backgroundB.png"
      dark
      height="100%"
      class="landing__hero-default"
    >
      <div class="landing__2-column">
        <div class="landing__left">
          <div class="landing__text-testimonial-green">
            <v-icon left dark>mdi-comment-quote</v-icon>
            PilotCity was a fresh breath of air. It was a new program that offered a mind-blowing
            and unique experience.
          </div>
          <div class="landing__text-testimonial-body">
            <div>
              <v-avatar size="75">
                <v-img
                  src="https://f.hubspotusercontent00.net/hubfs/2480959/Screen%20Shot%202020-08-31%20at%2012.33.36%20AM.png"
                ></v-img>
              </v-avatar>
            </div>
            <div class="landing__text-testimonial-title">
              <div class="landing__text-testimonial-name-green">Amratha R.</div>
              <div class="landing__text-testimonial-position">
                Healthtech Entrepreneur, PilotCity
              </div>
            </div>
          </div>
        </div>
        <div class="landing__right landing__testimonial-logo">
          <!-- <v-img
            max-width="75"
            src="https://f.hubspotusercontent00.net/hubfs/2480959/WI_P_Wireframe-1.png"
          ></v-img> -->
        </div>
      </div>
    </v-parallax>

    <v-parallax
      dark
      class="landing__hero-default"
      height="100%"
      src="https://f.hubspotusercontent00.net/hubfs/2480959/Final_19500_Background.svg"
    >
      <div class="landing__primary-title">People</div>

      <v-btn outlined small color="white" rounded class="landing__primary-subtitle">
        Students are the protagonist, the community is their village</v-btn
      >
      <v-img
        src="https://f.hubspotusercontent00.net/hubfs/2480959/Final_CrossSector_v3.svg"
        class="landing__primary-image"
        width="35%"
      ></v-img>

      <div class="landing__banner-cta">
        <v-btn
          x-large
          depressed
          dark
          rounded
          color="green"
          @click="$router.push({ name: 'signup', query: { email: starterEmail } })"
          >Sponsor Students</v-btn
        >
      </div>
    </v-parallax>

    <v-parallax
      src="https://f.hubspotusercontent00.net/hubfs/2480959/students.png"
      dark
      class="landing__hero-default-padded"
      height="700"
    >
      <div class="landing__2-column">
        <div class="landing__left">
          <v-btn dark depressed outlined small rounded>Program Timeline</v-btn>
          <div class="landing__timeline-card">
            <v-timeline dark dense>
              <v-timeline-item class="landing__timeline-card-step" fill-dot color="green" small
                >Explore programs</v-timeline-item
              >
              <v-timeline-item class="landing__timeline-card-step" fill-dot color="green" small
                >Build employer projects</v-timeline-item
              >
              <v-timeline-item class="landing__timeline-card-step" fill-dot color="green" small
                >Auto-apply for internships</v-timeline-item
              >
              <v-timeline-item class="landing__timeline-card-step" fill-dot color="green" small
                >Interviews</v-timeline-item
              >
              <v-timeline-item class="landing__timeline-card-step" fill-dot color="green" small
                >Position Offers</v-timeline-item
              >
              <v-timeline-item class="landing__timeline-card-step" fill-dot color="green" small
                >Internships</v-timeline-item
              >
              <!-- <v-timeline-item small>Practice Log</v-timeline-item> -->
              <!-- <v-timeline-item small>Business Model Canvas</v-timeline-item>
            <v-timeline-item small>Your One Sentence Pitch</v-timeline-item>

            <v-timeline-item small>Write Your 60-Second Elevator Pitch</v-timeline-item>
            <v-timeline-item small>Hack Day</v-timeline-item>
            <v-timeline-item small>Post-Hack Reflection</v-timeline-item>

            <v-timeline-item small>Design & Prototype Process Log</v-timeline-item>

            <v-timeline-item small>Enter Prototype Demonstration Video</v-timeline-item>
            <v-timeline-item small>Enter Link to Presentation Deck</v-timeline-item>
            <v-timeline-item small>Demo Day</v-timeline-item>
            <v-timeline-item small>Complete The Program</v-timeline-item>
            <v-timeline-item small>Auto-Application</v-timeline-item> -->
            </v-timeline>
          </div>
        </div>
        <div id="student" class="landing__right">
          <v-icon dark x-large color="green">mdi-clover</v-icon><br />
          <div class="landing__text-subtitle-green">Student choice of employer</div>
          <div class="landing__text-body">
            Freely explore employer programs and projects<br />
            Auto-join program, or pre-qualify<br />
            Get sponsored to participate<br />
            Build portfolio projects<br />
            Win internships
          </div>

          <a href="signup"
            ><v-btn style="color: white !important" disabled rounded outlined depressed dark large
              >Sign-up to get sponsored</v-btn
            ></a
          >
        </div>
      </div>
    </v-parallax>

    <v-parallax
      src="https://f.hubspotusercontent00.net/hubfs/2480959/testimonial-backgroundE.png"
      dark
      height="100%"
      class="landing__hero-default"
    >
      <div class="landing__2-column">
        <div class="landing__left">
          <div class="landing__text-testimonial-green">
            <v-icon left dark>mdi-comment-quote</v-icon>
            PilotCity is more than just a program... it's a family.
          </div>
          <div class="landing__text-testimonial-body">
            <div>
              <v-avatar size="75">
                <v-img
                  src="https://f.hubspotusercontent00.net/hubfs/2480959/Screen%20Shot%202020-08-31%20at%2012.31.38%20AM.png"
                ></v-img>
              </v-avatar>
            </div>
            <div class="landing__text-testimonial-title">
              <div class="landing__text-testimonial-name-green">Pranav P.</div>
              <div class="landing__text-testimonial-position">MESH Fellow, Takeoff Point</div>
            </div>
          </div>
        </div>
        <!-- <div class="landing__right landing__testimonial-logo"> -->
        <!-- <v-img
            max-width="75"
            src="https://f.hubspotusercontent00.net/hubfs/2480959/WI_P_Wireframe-1.png"
          ></v-img> -->
        <!-- </div> -->
      </div>
    </v-parallax>

    <v-parallax
      src="https://f.hubspotusercontent00.net/hubfs/2480959/teacher-2.png"
      dark
      height="650"
      class="landing__hero-default"
    >
      <div class="landing__2-column">
        <div class="landing__left">
          <v-card elevation="0" tile depressed>
            <!-- <v-img max-height="300px" max-width="300px" src="" depressed></v-img> -->
          </v-card>
        </div>
        <div id="teacher" class="landing__right">
          <v-icon dark x-large color="pink">mdi-head-heart</v-icon><br />
          <div class="landing__text-subtitle-pink">Teacher as coach, and monitor</div>
          <div class="landing__text-body">
            Share explore programs page with students<br />
            Collect, and distribute sponsorship tickets<br />
            Accept stakeholder invitation, and monitor programs
          </div>
          <a href="portfolio">
            <v-btn style="color: white !important" disabled rounded outlined depressed dark large
              >Invite Schools, Students and Peers</v-btn
            >
          </a>
        </div>
      </div>

      <div class="landing__content-grid">
        <v-chip-group>
          <v-chip dark color="pink" class="landing__content-grid-combo">Computer Science</v-chip>
          <v-chip dark color="pink" class="landing__content-grid-combo">Engineering</v-chip>
          <v-chip dark color="pink" class="landing__content-grid-combo">Digital Media</v-chip>
          <v-chip dark color="pink" class="landing__content-grid-combo">Public Service</v-chip>
          <v-chip dark color="pink" class="landing__content-grid-combo">Transportation</v-chip>
          <v-chip dark color="pink" class="landing__content-grid-combo">Business & Finance</v-chip>
          <v-chip dark color="pink" class="landing__content-grid-combo">Education & Family</v-chip>
          <v-chip dark color="pink" class="landing__content-grid-combo"
            >Energy & Sustainability</v-chip
          >
          <v-chip dark color="pink" class="landing__content-grid-combo">Healthcare</v-chip>
        </v-chip-group>
      </div>
    </v-parallax>

    <v-parallax
      src="https://f.hubspotusercontent00.net/hubfs/2480959/19500_pink-1.svg"
      dark
      height="100%"
      class="landing__hero-default"
    >
      <div class="landing__primary-title">Engage</div>

      <v-btn outlined small color="white" rounded class="landing__primary-subtitle"
        >Engage your students to develop real-world projects to win internships</v-btn
      >

      <div class="landing__benefits">
        <div>
          <v-card elevation="0" max-width="375px" min-width="250px" class="landing__benefits-card">
            <v-card-title class="landing__benefits-card-title">
              <v-icon color="pink" large class="landing__benefits-card-icon"
                >mdi-cursor-pointer</v-icon
              >Student choice of employer</v-card-title
            >

            <v-divider class="mx-4"></v-divider>
            <v-card-text class="landing__benefits-card-body">
              Students choose their employer project. This drives engagement and motivation,
              resulting in higher quality learning and project development. They will be guided
              through activities and completion of deliverables to auto-qualify for our internship
              program.
            </v-card-text>
          </v-card>
        </div>
        <div>
          <v-card
            max-width="375px"
            min-width="250px"
            class="landing__benefits-card"
            rounded
            elevation="0"
          >
            <v-card-title class="landing__benefits-card-title">
              <v-icon color="pink" large class="landing__benefits-card-icon"
                >mdi-account-supervisor-circle</v-icon
              >Teacher as coach and advisor</v-card-title
            >
            <v-divider class="mx-4"></v-divider>
            <v-card-text class="landing__benefits-card-body">
              Sit back, relax and do the fun part: coach and advise student projects. Students will
              learn directly from employer-driven content, driving higher absorption of information
              and relieving you of training and facilitation.
            </v-card-text>
          </v-card>
        </div>

        <div>
          <v-card
            max-width="375px"
            min-width="250px"
            class="landing__benefits-card"
            rounded
            elevation="0"
          >
            <v-card-title class="landing__benefits-card-title">
              <v-icon color="pink" large class="landing__benefits-card-icon"
                >mdi-monitor-dashboard</v-icon
              >Monitor and track progress</v-card-title
            >

            <v-divider class="mx-4"></v-divider>

            <v-card-text class="landing__benefits-card-body">
              Track progress, and support your students through a dashboard. Enjoy a hands-off,
              asynchronous approach to your student's learning by targeting your support so you can
              get back to planning, scaffolding and teaching what you know best.
            </v-card-text>
          </v-card>
        </div>
        <!-- <div class="landing__content-grid-combo">
          <v-icon dark x-large>mdi-telegram</v-icon>Project-based Learning
        </div>
        <div class="landing__content-grid-combo">
          <v-icon dark x-large>mdi-telegram</v-icon>Work-based Learning
        </div>
        <div class="landing__content-grid-combo">
          <v-icon dark x-large>mdi-telegram</v-icon>Service-based Learning
        </div> -->
      </div>
    </v-parallax>

    <!-- <v-parallax
      src="https://f.hubspotusercontent00.net/hubfs/2480959/19500_pink.svg"
      dark
      height="100%"
      class="landing__hero-default"
    >
      <div class="landing__primary-title">Subject Areas</div>

      <v-btn outlined color="white" rounded class="landing__primary-subtitle"
        >Classes that find our program amplifying</v-btn
      >
      <div class="landing__content-grid">
        <v-chip-group>
          <v-chip dark class="landing__content-grid-combo" large>Computer Science</v-chip>
          <v-chip dark class="landing__content-grid-combo" large>Engineering</v-chip>
          <v-chip dark class="landing__content-grid-combo" large>Digital Media</v-chip>
          <v-chip dark class="landing__content-grid-combo" large>Public Service</v-chip>
          <v-chip dark class="landing__content-grid-combo" large>Transportation</v-chip>
          <v-chip dark class="landing__content-grid-combo" large>Business & Finance</v-chip>
          <v-chip dark class="landing__content-grid-combo" large>Education & Family</v-chip>
          <v-chip dark class="landing__content-grid-combo" large>Energy & Sustainability</v-chip>
          <v-chip dark class="landing__content-grid-combo" large>Healthcare</v-chip>
        </v-chip-group>
      </div>

      <div class="landing__content-grid">
        <div class="landing__content-grid-combo">
          <v-icon dark x-large>mdi-telegram</v-icon>Computer Science
        </div>
        <div class="landing__content-grid-combo">
          <v-icon dark x-large>mdi-telegram</v-icon>Engineering
        </div>
        <div class="landing__content-grid-combo">
          <v-icon dark x-large>mdi-telegram</v-icon>Digital Media
        </div>
      </div>

      <div class="landing__content-grid">
        <div class="landing__content-grid-combo">
          <v-icon dark x-large>mdi-telegram</v-icon>Public Service
        </div>
        <div class="landing__content-grid-combo">
          <v-icon dark x-large>mdi-telegram</v-icon>Transportation
        </div>
        <div class="landing__content-grid-combo">
          <v-icon dark x-large>mdi-telegram</v-icon>Business & Finance
        </div>
      </div>

      <div class="landing__content-grid">
        <div class="landing__content-grid-combo">
          <v-icon dark x-large>mdi-telegram</v-icon>Education & Family
        </div>
        <div class="landing__content-grid-combo">
          <v-icon dark x-large>mdi-telegram</v-icon>Energy & Sustainability
        </div>
        <div class="landing__content-grid-combo">
          <v-icon dark x-large>mdi-telegram</v-icon>Healthcare
        </div>
      </div>
    </v-parallax> -->

    <!-- <v-parallax
      src="https://f.hubspotusercontent00.net/hubfs/2480959/19500_pink.svg"
      dark
      height="100%"
      class="landing__hero-default"
    >
      <div class="landing__2-column">
        <div class="landing__left">
          <div class="landing__text-testimonial">
            <v-icon left dark>mdi-comment-quote</v-icon>
            PilotCity kicks the idea of 'coffee fetching and document copying' internships to the
            curb
          </div>
          <div class="landing__text-testimonial-body">
            <div>
              <v-avatar size="75">
                <v-img
                  src="https://f.hubspotusercontent00.net/hubfs/2480959/_DSC4843_small.jpg"
                ></v-img>
              </v-avatar>
            </div>
            <div class="landing__text-testimonial-title">
              <div class="landing__text-testimonial-name">Kevin C.</div>
              <div class="landing__text-testimonial-position">Intern, Strategy of Things</div>
            </div>
          </div>
        </div>
        <div class="landing__right landing__testimonial-logo">
          <v-img
            max-width="200"
            src="https://f.hubspotusercontent00.net/hubfs/2480959/StrategyOfThings_white.png"
          ></v-img>
        </div>
      </div>
    </v-parallax> -->

    <v-parallax
      src="https://f.hubspotusercontent00.net/hubfs/2480959/school.png"
      dark
      class="landing__hero-default"
    >
      <div id="school" class="landing__2-column">
        <div class="landing__left">
          <v-card elevation="0" tile depressed>
            <!-- <v-img max-height="300px" max-width="300px" src="" depressed></v-img> -->
          </v-card>
        </div>
        <div class="landing__right">
          <v-icon dark x-large color="blue">mdi-airballoon</v-icon><br />
          <div class="landing__text-subtitle-blue">School as sponsor, and stakeholder</div>
          <div class="landing__text-body">
            Sponsor student participants<br />
            Transfer tickets to teacher stakeholders<br />
            Monitor sponsorships
          </div>

          <a href="portfolio">
            <v-btn rounded outlined depressed dark large
              >Sponsor and Invite Teachers and Students</v-btn
            >
          </a>
        </div>
      </div>
    </v-parallax>

    <v-parallax
      src="https://f.hubspotusercontent00.net/hubfs/2480959/19500_blue-3.svg"
      dark
      height="100%"
      class="landing__hero-default"
    >
      <div class="landing__primary-title">Outcomes</div>

      <v-btn outlined small color="white" rounded class="landing__primary-subtitle"
        >What our program delivers to our student participants</v-btn
      >

      <div class="landing__benefits">
        <div>
          <v-card elevation="0" max-width="375px" min-width="250px" class="landing__benefits-card">
            <v-card-title class="landing__benefits-card-title">
              <v-icon color="blue" large class="landing__benefits-card-icon"
                >mdi-book-account-outline</v-icon
              >Work-based Learning</v-card-title
            >

            <v-divider class="mx-4"></v-divider>
            <v-card-text class="landing__benefits-card-body"
              >Our program oozes with work-based learning experiences from developing real solutions
              for real employers to a full-blown internship program. Oh and all the stuff in-between
              from interviewing, resume workshops to client engagement.</v-card-text
            >
          </v-card>
        </div>
        <div>
          <v-card
            max-width="375px"
            min-width="250px"
            class="landing__benefits-card"
            rounded
            elevation="0"
          >
            <v-card-title class="landing__benefits-card-title">
              <v-icon color="blue" large class="landing__benefits-card-icon"
                >mdi-ruler-square-compass</v-icon
              >Project-based Learning</v-card-title
            >
            <v-divider class="mx-4"></v-divider>
            <v-card-text class="landing__benefits-card-body"
              >Project-based learning is our secret sauce. By developing real projects for real
              employers, our students tend to get wild. Their engagement increases, their motivation
              amps up, and most importantly, it builds their confidence when they've built a real
              project.</v-card-text
            >
          </v-card>
        </div>

        <div>
          <v-card
            max-width="375px"
            min-width="250px"
            class="landing__benefits-card"
            rounded
            elevation=""
          >
            <v-card-title class="landing__benefits-card-title">
              <v-icon color="blue" large class="landing__benefits-card-icon"
                >mdi-account-heart-outline</v-icon
              >Service-based Learning</v-card-title
            >

            <v-divider class="mx-4"></v-divider>

            <v-card-text class="landing__benefits-card-body"
              >We were born to believe our youngest citizens can build the future of their own
              communities. Students are the protagonists of this mission to improve their
              communities through building resilience, equity and digital transformation.
            </v-card-text>
          </v-card>
        </div>
        <!-- <div class="landing__content-grid-combo">
          <v-icon dark x-large>mdi-telegram</v-icon>Project-based Learning
        </div>
        <div class="landing__content-grid-combo">
          <v-icon dark x-large>mdi-telegram</v-icon>Work-based Learning
        </div>
        <div class="landing__content-grid-combo">
          <v-icon dark x-large>mdi-telegram</v-icon>Service-based Learning
        </div> -->
      </div>
    </v-parallax>

    <v-parallax
      src="https://f.hubspotusercontent00.net/hubfs/2480959/employer.png"
      dark
      class="landing__hero-default"
    >
      <div class="landing__2-column">
        <div class="landing__left">
          <v-card elevation="0" tile depressed>
            <!-- <v-img max-height="300px" max-width="300px" src="" depressed></v-img> -->
          </v-card>
        </div>
        <div id="employer" class="landing__right">
          <v-icon dark x-large color="purple">mdi-graph-outline</v-icon>
          <div class="landing__text-subtitle-purple">Employer simple, low-commitment setup</div>
          <div class="landing__text-body">
            Setup program from template<br />
            Get your program running in 4-hours<br />
            Asynchronous interactions, or zero-management option
          </div>
          <a href="signup"> <v-btn rounded outlined depressed dark large>Onboard Now</v-btn></a>
        </div>
      </div>
    </v-parallax>

    <v-parallax
      src="https://f.hubspotusercontent00.net/hubfs/2480959/19500_purple-2.svg"
      dark
      height="100%"
      class="landing__hero-default"
    >
      <div class="landing__primary-title">Benefits</div>

      <v-btn outlined small color="white" rounded class="landing__primary-subtitle"
        >Enable students to build projects to win internships with you</v-btn
      >

      <div class="landing__benefits">
        <div>
          <v-card elevation="0" max-width="375px" min-width="250px" class="landing__benefits-card">
            <v-card-title class="landing__benefits-card-title">
              <v-icon color="purple" large class="landing__benefits-card-icon"
                >mdi-rocket-launch</v-icon
              >Present problems, get solutions</v-card-title
            >

            <v-divider class="mx-4"></v-divider>
            <v-card-text class="landing__benefits-card-body"
              >Pose problems, allow students to solve it for you. Whether they're in class, part of
              extracurricular or outside of school, our students build an initial solution to
              present to you before you decide to hire them as an intern. Saving you onboarding
              time, and management bandwidth.
            </v-card-text>
          </v-card>
        </div>
        <div>
          <v-card
            max-width="375px"
            min-width="250px"
            class="landing__benefits-card"
            rounded
            elevation="0"
          >
            <v-card-title class="landing__benefits-card-title">
              <v-icon color="purple" large class="landing__benefits-card-icon"
                >mdi-ab-testing</v-icon
              >Test drive, then hire to execute</v-card-title
            >
            <v-divider class="mx-4"></v-divider>
            <v-card-text class="landing__benefits-card-body">
              Students deliver initial solutions in competition for your internship. Once hired,
              students carry-over proejcts to further develop their prototype, pilot or product.
              This model gets your side project off the ground, while eliminating the wonder if the
              intern will be a good-fit.
            </v-card-text>
          </v-card>
        </div>

        <div>
          <v-card
            max-width="375px"
            min-width="250px"
            class="landing__benefits-card"
            rounded
            elevation="0"
          >
            <v-card-title class="landing__benefits-card-title">
              <v-icon color="purple" large class="landing__benefits-card-icon"
                >mdi-content-copy</v-icon
              >Setup for scale, manage easier</v-card-title
            >

            <v-divider class="mx-4"></v-divider>

            <v-card-text class="landing__benefits-card-body">
              Our one-time program setup allows you to run your program over and over again,
              preparing you for greater replicability and scale. You can then focus your time
              monitoring, tracking and supporting your participants to deliver the outcomes you're
              looking for.
            </v-card-text>
          </v-card>
        </div>
        <!-- <div class="landing__content-grid-combo">
          <v-icon dark x-large>mdi-telegram</v-icon>Project-based Learning
        </div>
        <div class="landing__content-grid-combo">
          <v-icon dark x-large>mdi-telegram</v-icon>Work-based Learning
        </div>
        <div class="landing__content-grid-combo">
          <v-icon dark x-large>mdi-telegram</v-icon>Service-based Learning
        </div> -->
      </div>
    </v-parallax>

    <!-- <v-parallax
      src="https://f.hubspotusercontent00.net/hubfs/2480959/19500_purple-1.svg"
      dark
      height="100%"
      class="landing__hero-default"
    >
      <div class="landing__primary-title">Deliverables</div>

      <v-btn outlined color="white" rounded class="landing__primary-subtitle"
        >Prototypes, pilots and products for employer goals</v-btn
      >
    </v-parallax> -->

    <v-parallax
      src="https://f.hubspotusercontent00.net/hubfs/2480959/sponsor.png"
      dark
      class="landing__hero-default"
    >
      <div class="landing__2-column">
        <div class="landing__left">
          <v-card elevation="0" tile depressed>
            <!-- <v-img max-height="300px" max-width="300px" src="" depressed></v-img> -->
          </v-card>
        </div>
        <div id="sponsor" class="landing__right">
          <v-icon dark x-large color="red">mdi-currency-usd-circle</v-icon>
          <div class="landing__text-subtitle-red">
            Sponsor participants, and monitor your impact
          </div>
          <div class="landing__text-body">
            Sign-up for an account<br />
            Sponsor and purchase program tokens<br />
            Transfer to participants and stakeholders for use
          </div>
          <a href="portfolio">
            <v-btn rounded outlined depressed dark large>Sponsor and fund participants</v-btn>
          </a>
        </div>
      </div>
    </v-parallax>

    <v-parallax
      src="https://f.hubspotusercontent00.net/hubfs/2480959/19500_red-2.svg"
      dark
      height="100%"
      class="landing__hero-default"
    >
      <div class="landing__primary-title">Impact</div>

      <v-btn outlined small color="white" rounded class="landing__primary-subtitle"
        >Sponsor participants to advance outcome goals</v-btn
      >

      <div class="landing__benefits">
        <div>
          <v-card elevation="0" max-width="375px" min-width="250px" class="landing__benefits-card">
            <v-card-title class="landing__benefits-card-title">
              <v-icon color="red" large class="landing__benefits-card-icon">mdi-rotate-orbit</v-icon
              >Fund participants, transform lives</v-card-title
            >

            <v-divider class="mx-4"></v-divider>
            <v-card-text class="landing__benefits-card-body">
              Student participants in our program transform as individuals while in our program.
              They discover interests within themself and motivation to pursue a path for themself.
              Fund participants to see an impact in student lives as they pursue their growth as
              contributors to the community.
            </v-card-text>
          </v-card>
        </div>
        <div>
          <v-card
            max-width="375px"
            min-width="250px"
            class="landing__benefits-card"
            rounded
            elevation="0"
          >
            <v-card-title class="landing__benefits-card-title">
              <v-icon color="red" large class="landing__benefits-card-icon"
                >mdi-desktop-mac-dashboard</v-icon
              >Monitor your sponsorsees</v-card-title
            >
            <v-divider class="mx-4"></v-divider>
            <v-card-text class="landing__benefits-card-body">
              Once you've funded participants, the token they use to select and join programs will
              be tracked under the name and entity that sponsored the participant. Monitor and track
              the progress of your sponsorships, and see outcomes be delivered live.
            </v-card-text>
          </v-card>
        </div>

        <div>
          <v-card
            max-width="375px"
            min-width="250px"
            class="landing__benefits-card"
            rounded
            elevation="0"
          >
            <v-card-title class="landing__benefits-card-title">
              <v-icon color="red" large class="landing__benefits-card-icon">mdi-billboard</v-icon
              >Ads and acknowledgements</v-card-title
            >

            <v-divider class="mx-4"></v-divider>

            <v-card-text class="landing__benefits-card-body">
              Your participant's success is your success. Your entity or name will be forever
              associated with the impact you had on the program participant. You will be
              automatically advertised, recognized and acknowledged during key activities during the
              program.
            </v-card-text>
          </v-card>
        </div>
        <!-- <div class="landing__content-grid-combo">
          <v-icon dark x-large>mdi-telegram</v-icon>Project-based Learning
        </div>
        <div class="landing__content-grid-combo">
          <v-icon dark x-large>mdi-telegram</v-icon>Work-based Learning
        </div>
        <div class="landing__content-grid-combo">
          <v-icon dark x-large>mdi-telegram</v-icon>Service-based Learning
        </div> -->
      </div>
    </v-parallax>

    <v-parallax
      src="https://f.hubspotusercontent00.net/hubfs/2480959/parent_v2.png"
      dark
      class="landing__hero-default"
    >
      <div class="landing__2-column">
        <div class="landing__left">
          <v-card elevation="0" tile depressed>
            <!-- <v-img max-height="300px" max-width="300px" src="" depressed></v-img> -->
          </v-card>
        </div>
        <div id="parent" class="landing__right">
          <v-icon dark x-large color="yellow">mdi-sign-direction</v-icon><br />
          <div class="landing__text-subtitle-yellow">Parent as sponsor, and stakeholder</div>
          <div class="landing__text-body">
            Sponsor student participants<br />
            Transfer tickets to student participants<br />
            Monitor sponsorships
          </div>
          <a href="portfolio">
            <v-btn rounded outlined depressed dark large>Invite Your Student and School</v-btn></a
          >
        </div>
      </div>
    </v-parallax>

    <v-parallax
      src="https://f.hubspotusercontent00.net/hubfs/2480959/19500_yellow.svg"
      dark
      height="100%"
      class="landing__hero-default"
    >
      <div class="landing__2-column">
        <div class="landing__left">
          <div class="landing__text-testimonial-black">
            <v-icon left dark>mdi-comment-quote</v-icon>
            PilotCity is 'too good to be true' for people of all ages who would like to rediscover
            themselves.
          </div>
          <div class="landing__text-testimonial-body">
            <div>
              <v-avatar size="75">
                <v-img
                  src="https://f.hubspotusercontent00.net/hubfs/2480959/flipped2019_panel.png"
                ></v-img>
              </v-avatar>
            </div>
            <div class="landing__text-testimonial-title">
              <div class="landing__text-testimonial-name-black">Nina S.</div>
              <div class="landing__text-testimonial-position">PilotCity Parent & Guardian</div>
            </div>
          </div>
        </div>
        <div class="landing__right landing__testimonial-logo">
          <v-img
            max-width="75"
            src="https://f.hubspotusercontent00.net/hubfs/2480959/WI_P_Wireframe-1.png"
          ></v-img>
        </div>
      </div>
    </v-parallax>

    <v-footer dark height="100">
      <div class="landing__footer">
        <div class="landing__footer-text-secondary">
          <v-icon small>mdi-copyright</v-icon> 2015 - 2020, PilotCity Inc.
        </div>
        <a
          href="https://www.iubenda.com/terms-and-conditions/32542296"
          target="_blank"
          class="landing__footer-text"
        >
          Terms & Conditions
        </a>
        <a
          href="https://www.iubenda.com/privacy-policy/32542296"
          target="_blank"
          class="landing__footer-text"
        >
          Privacy Policy
        </a>
      </div>
    </v-footer>
  </div>
</template>

<script lang="ts">
import Profile from '@/components/Profile.vue';
import { useDbState } from '@/store';
import { ref } from '@vue/composition-api';

export default {
  name: 'Landing',
  components: {
    Profile
  },
  setup() {
    const starterEmail = ref('');
    const { user } = useDbState(['user']);
    return { user, starterEmail };
  },
  data() {
    return {
      e6: 1
    };
  }
};
</script>

<style lang="scss">
html {
  scroll-behavior: smooth;
}
.landing {
  &__container {
    a {
      text-decoration: none;
      scroll-behavior: smooth;
    }
  }
}
.student {
  text-decoration: none;
  scroll-behavior: smooth;
}
.landing {
  &__hero {
    justify-content: flex-start;
    align-items: flex-start;
    display: block;
    margin-bottom: auto;
  }

  &__app-bar {
    margin-bottom: 0px;
    padding-bottom: 0px;
  }

  &__footer {
    flex-direction: row;
    display: flex;
    margin-left: auto;
  }

  &__footer-text {
    font-family: Montserrat;
    font-weight: 700;
    color: #ffffff !important;
    font-size: 12px;
    margin: 10px;
    // font-style: none;
    text-decoration: none;
  }

  &__footer-text-secondary {
    font-family: Montserrat;
    font-weight: 700;
    color: #ffffff !important;
    font-size: 12px;
    margin: 10px;
    // font-style: none;
    text-decoration: none;
  }

  &__hero-default {
    background-color: #404142;
    // padding-top: 50px;
    // padding-bottom: 50px;
    // justify-content: center;
    // align-items: center;
    // flex-direction: column;
    // flex-grow: 1;
    // padding: none;
    // margin: none;
    // height: fit-content;
    // width: fit-content;
  }

  &__hero-default-padded {
    background-color: #404142;
    padding-top: 50px;
    padding-bottom: 50px;
    // justify-content: center;
    // align-items: center;
    // flex-direction: column;
    // flex-grow: 1;
    // padding: none;
    // margin: none;
    // height: fit-content;
    // width: fit-content;
  }

  &__hero-body {
    margin-bottom: auto;
  }
  &__hero-title {
    font-family: Montserrat;
    font-weight: 700;
    font-size: 52px;
    text-align: center;

    letter-spacing: -1px;
    line-height: 65px;
  }

  &__hero-logo {
    width: 65px;
    margin-left: auto;
    margin-right: auto;
    padding-top: 70px;
    margin-bottom: 50px;
  }

  &__hero-cta {
    width: 45%;
    margin-left: auto;
    margin-right: auto;
    padding-top: 75px;
    display: flex;
  }

  &__hero-cta-button {
    margin-left: 10px;
    margin-right: 10px;
    font-family: Montserrat;
    font-weight: 700;
  }

  &__hero-citizenchips {
    width: 75%;
    padding-top: 50px;
    font-family: Montserrat;
    font-weight: 700;
    margin-left: auto;
    margin-right: auto;
    // justify-content: center;
    // align-items: center;
    // display: block;
  }

  &__hero-citizenchips-group {
    // justify-content: center;
    // align-items: center;
    margin: 5px;
    font-weight: 800;
    text-decoration: none;
  }

  &__hero-citizenchips-group1 {
    // justify-content: center;
    // align-items: center;
    margin: 5px;
    font-weight: 800;
    text-decoration: none;
  }

  &__2-column {
    display: flex;
    flex-direction: row;
  }

  &__left {
    // justify-content: center;
    // align-items: center;
    // flex-grow: 1;
    padding-left: 100px;
    margin-top: auto;
    margin-bottom: auto;
  }

  &__timeline-card {
    border: 1px solid #6fbb81;
    border-radius: 25px;
    padding-right: 25px;
    margin-top: 15px;
  }

  &__timeline-card-step {
    font-family: Montserrat;
    font-weight: 800;
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  &__right {
    justify-content: flex-end;
    flex-grow: 0.25;
    font-family: Montserrat;
    font-weight: 800;
    font-size: 42px;
    padding-left: 50px;
  }

  &__testimonial-logo {
    margin-top: auto;
    margin-bottom: auto;
  }

  &__text-subtitle-pink {
    font-family: Montserrat;
    font-weight: 800;
    font-size: 42px;
    color: #eda1bf;
  }

  &__text-subtitle-purple {
    font-family: Montserrat;
    font-weight: 800;
    font-size: 42px;
    color: #ae92b1;
  }

  &__text-subtitle-red {
    font-family: Montserrat;
    font-weight: 800;
    font-size: 42px;
    color: #ea6764;
  }

  &__text-subtitle-blue {
    font-family: Montserrat;
    font-weight: 800;
    font-size: 42px;
    color: #3c9dcd;
  }

  &__text-subtitle-yellow {
    font-family: Montserrat;
    font-weight: 800;
    font-size: 42px;
    color: #fdd35a;
  }

  &__text-subtitle-green {
    font-family: Montserrat;
    font-weight: 800;
    font-size: 42px;
    color: #6fba7f;
  }

  &__text-testimonial {
    font-family: Montserrat;
    font-weight: 700;
    font-size: 22px;
    color: #ffffff;
    max-width: 75%;
    margin-top: 100px;
    margin-bottom: 35px;
    flex-direction: column;
    display: flex;
    align-items: flex-start;
  }

  &__text-testimonial-green {
    font-family: Montserrat;
    font-weight: 700;
    font-size: 22px;
    color: #6fba7f;
    max-width: 75%;
    margin-top: 100px;
    margin-bottom: 35px;
    flex-direction: column;
    display: flex;
    align-items: flex-start;
  }

  &__text-testimonial-yellow {
    font-family: Montserrat;
    font-weight: 700;
    font-size: 22px;
    color: #fec34b;
    max-width: 75%;
    margin-top: 100px;
    margin-bottom: 35px;
    flex-direction: column;
    display: flex;
    align-items: flex-start;
  }

  &__text-testimonial-black {
    font-family: Montserrat;
    font-weight: 700;
    font-size: 22px;
    color: #404142;
    max-width: 75%;
    margin-top: 100px;
    margin-bottom: 35px;
    flex-direction: column;
    display: flex;
    align-items: flex-start;
  }

  &__text-testimonial-body {
    flex-direction: row;
    display: flex;
    margin-bottom: 100px;
  }

  &__text-testimonial-title {
    flex-direction: column;
    display: flex;
    justify-content: center;
    padding-left: 25px;
  }

  &__text-testimonial-name {
    font-family: Montserrat;
    font-weight: 700;
    font-size: 15px;
    color: #ffffff;
  }

  &__text-testimonial-name-green {
    font-family: Montserrat;
    font-weight: 700;
    font-size: 15px;
    color: #6fba7f;
  }

  &__text-testimonial-name-yellow {
    font-family: Montserrat;
    font-weight: 700;
    font-size: 15px;
    color: #fec34b;
  }

  &__text-testimonial-name-black {
    font-family: Montserrat;
    font-weight: 700;
    font-size: 15px;
    color: #404142;
  }

  &__text-testimonial-position {
    font-family: Montserrat;
    font-weight: 700;
    font-size: 15px;
  }

  &__text-body {
    font-family: Montserrat;
    font-weight: 500;
    font-size: 20px;
    line-height: 50px;
  }

  &__single-column {
    display: flex;
    flex-direction: column;
    // flex-grow: 1;
    justify-content: flex-start;
    // align-items: center;
    padding: 50px;
  }

  &__row1 {
  }

  &__row1-button {
    font-family: Montserrat;
    font-weight: 800;
  }

  &__row2 {
    font-family: Montserrat;
    font-weight: 700;
    padding-top: 35px;
    font-size: 50px;
    line-height: 75px;
    color: #fec34b;
  }

  &__row3 {
    justify-content: flex-end;
    align-items: flex-end;
    padding-top: 35px;
    margin-left: auto;
  }

  &__row3-button {
    font-family: Montserrat;

    font-weight: 800;
  }

  &__banner-cta {
    text-align: center;
    margin-bottom: 4%;

    margin-top: auto;
  }

  &__primary-image {
    // justify-content: center;
    // align-items: center;
    // margin-left: auto;
    // margin-right: auto;
    margin: auto;
    margin-top: 4%;
    margin-bottom: 4%;
  }

  &__primary-title {
    font-family: Montserrat;
    font-weight: 700;
    font-size: 42px;
    color: #ffffff;
    text-align: center;
    margin-top: 4%;
  }

  &__primary-subtitle {
    font-family: Montserrat;
    font-weight: 700;
    font-size: 22px;
    color: #ffffff;
    text-align: center;
    margin-top: 2%;
    margin-bottom: 1%;
    min-width: 50%;
    max-width: 75%;
    margin: auto;
    // justify-content: center;
    // align-items: center;
    // font-style:italic;
  }

  &__content-grid {
    flex-direction: row;
    display: flex;
    justify-content: center;
    margin: 50px;
    max-width: 100%;
  }

  &__content-grid-combo {
    font-family: Montserrat;
    font-weight: 800;
    font-size: 22px;
  }

  &__benefits {
    flex-direction: row;
    display: flex;
    flex-grow: 1;
    margin: auto;
    margin-top: 50px;
    margin-bottom: 50px;
  }

  &__benefits-card {
    margin: 25px;
    // min-width: 250px;
    // max-width: 275px;
  }

  &__benefits-card-body {
    // margin: auto;
    // justify-content: center;
    // align-items: center;
    font-family: Montserrat;
    font-weight: 600;
    font-size: 13px;
  }

  &__benefits-card-icon {
    // margin: auto;
    margin: 5px;
  }

  &__benefits-card-title {
    font-family: Montserrat;
    font-weight: 800;
    font-size: 16px;
    // text-align: center;
  }
}
</style>
