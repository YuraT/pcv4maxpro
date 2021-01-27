<template>
  <div class="invite__container">
    <div v-if="pass !== invitePages[getInvitee].password" class="invite__wrapper-password">
      <div class="invite__password-title">
        <v-btn
          :color="
            invitePages[getInvitee].user == 'school'
              ? 'blue'
              : invitePages[getInvitee].user == 'employer'
              ? 'purple'
              : invitePages[getInvitee].user == 'parent'
              ? 'yellow'
              : invitePages[getInvitee].user == 'teacher'
              ? 'pink'
              : invitePages[getInvitee].user == 'student'
              ? 'green'
              : invitePages[getInvitee].user == 'sponsor'
              ? 'red'
              : ''
          "
          class="invite__password-title-button"
          x-small
          outlined
          depressed
          >Invite for {{ getInvitee }}</v-btn
        >
      </div>

      <validation-observer v-slot="{ invalid, handleSubmit }" class="invite__password">
        <validation-provider
          v-slot="{ errors }"
          slim
          :rules="`password:${invitePages[getInvitee].password}`"
        >
          <v-text-field
            v-model="inputPassword"
            :error-messages="errors"
            :type="show1 ? 'text' : 'password'"
            depressed
            label="Password"
            outlined
            required
            @keyup.enter="
              handleSubmit(() => {
                pass = inputPassword;
              })
            "
          />
        </validation-provider>
        <v-btn
          class="invite__password-button text-uppercase"
          outlined
          hide-details
          depressed
          @click="
            handleSubmit(() => {
              pass = inputPassword;
            })
          "
          >View Invite</v-btn
        >
      </validation-observer>
    </div>

    <!-- START OF PRIMARY PAGE   -->

    <div
      v-else
      :class="[
        invitePages[getInvitee].user == 'school' ? schoolContainer : '',
        invitePages[getInvitee].user == 'employer' ? employerContainer : '',
        invitePages[getInvitee].user == 'teacher' ? teacherContainer : '',
        invitePages[getInvitee].user == 'parent' ? parentContainer : '',
        invitePages[getInvitee].user == 'student' ? studentContainer : '',
        invitePages[getInvitee].user == 'sponsor' ? sponsorContainer : ''
      ]"
    >
      <div class="invite__wrapper-column-left">
        <div v-if="invitePages[getInvitee].user == 'school'">
          <v-btn
            rounded
            color="blue"
            class="invite__password-title-button"
            x-small
            outlined
            depressed
            >School Invite</v-btn
          >
        </div>

        <div v-if="invitePages[getInvitee].user == 'employer'">
          <v-btn
            rounded
            color="purple"
            class="invite__password-title-button"
            x-small
            outlined
            depressed
            >Employer Invite</v-btn
          >
        </div>

        <div v-if="invitePages[getInvitee].user == 'parent'">
          <v-btn
            rounded
            color="yellow"
            class="invite__password-title-button"
            x-small
            outlined
            depressed
            >Parent Invite</v-btn
          >
        </div>

        <div v-if="invitePages[getInvitee].user == 'teacher'">
          <v-btn
            rounded
            color="pink"
            class="invite__password-title-button"
            x-small
            outlined
            depressed
            >Teacher Invite</v-btn
          >
        </div>

        <div v-if="invitePages[getInvitee].user == 'student'">
          <v-btn
            rounded
            color="green"
            class="invite__password-title-button"
            x-small
            outlined
            depressed
            >Student Invite</v-btn
          >
        </div>

        <div v-if="invitePages[getInvitee].user == 'sponsor'">
          <v-btn
            rounded
            color="red"
            class="invite__password-title-button"
            x-small
            outlined
            depressed
            >Sponsor Invite</v-btn
          >
        </div>

        <div>
          <span class="invite__title text-center">
            <v-icon
              v-if="invitePages[getInvitee].user == 'school'"
              :color="
                invitePages[getInvitee].user == 'school'
                  ? 'blue'
                  : invitePages[getInvitee].user == 'employer'
                  ? 'purple'
                  : invitePages[getInvitee].user == 'parent'
                  ? 'yellow'
                  : invitePages[getInvitee].user == 'teacher'
                  ? 'pink'
                  : invitePages[getInvitee].user == 'student'
                  ? 'green'
                  : invitePages[getInvitee].user == 'sponsor'
                  ? 'red'
                  : ''
              "
              class="invite__title-icon"
              x-large
              >mdi-telegram</v-icon
            >

            Invite for
            <span
              :class="[
                invitePages[getInvitee].user == 'school' ? schoolTitleEntity : '',
                invitePages[getInvitee].user == 'employer' ? employerTitleEntity : '',
                invitePages[getInvitee].user == 'teacher' ? teacherTitleEntity : '',
                invitePages[getInvitee].user == 'parent' ? parentTitleEntity : '',
                invitePages[getInvitee].user == 'student' ? studentTitleEntity : '',
                invitePages[getInvitee].user == 'sponsor' ? sponsorTitleEntity : ''
              ]"
              >{{ getInvitee }}</span
            ></span
          >
        </div>

        <div>
          <iframe
            class="invite__video"
            :src="`https://www.youtube.com/embed/${invitePages[getInvitee].video}`"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div class="invite__wrapper-column-right">
        <div class="invite__resources-title">NEXT STEP</div>
        <div>
          <a
            href="https://app.hubspot.com/meetings/dericklee/programinvite"
            target="_blank"
            style="text-decoration: none"
            ><v-btn class="invite__cta2" x-large outlined depressed
              >Schedule 30-Minute Meeting</v-btn
            >
          </a>
        </div>

        <div class="invite__accept-decline">
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <a
                href="https://www.pilotcity.com/signup"
                target="_blank"
                style="text-decoration: none"
                class="invite__cta-accept-decline-link"
              >
                <v-btn
                  v-bind="attrs"
                  class="invite__cta-accept-decline"
                  color="green"
                  large
                  dark
                  depressed
                  v-on="on"
                  >Sign-up</v-btn
                ></a
              >
            </template>
            <span>Sign-up for account</span>
          </v-tooltip>

          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <a
                href="https://share.hsforms.com/1FhBLzFLZSPSHPUk3TEvv0w1h6bj"
                target="_blank"
                style="text-decoration: none"
                class="invite__cta-accept-decline-link"
                ><v-btn
                  v-bind="attrs"
                  class="invite__cta-accept-decline"
                  color="red"
                  large
                  dark
                  depressed
                  v-on="on"
                  >Decline</v-btn
                ></a
              >
            </template>
            <span>Decline to participate</span>
          </v-tooltip>
        </div>

        <div class="invite__resources">
          <div class="invite__resources-title2">EXPLORE RESOURCES</div>

          <div>
            <a href="https://www.pilotcity.com" target="_blank" style="text-decoration: none">
              <v-btn class="invite__cta" color="grey darken-3" small rounded dark depressed
                >Learn more on Homepage</v-btn
              ></a
            >
          </div>

          <!-- ACTIVITIES AND TIMELINE -->
          <template>
            <div class="text-center">
              <v-dialog v-model="activitiesDialog" width="100%">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    v-bind="attrs"
                    class="invite__cta"
                    color="grey darken-3"
                    small
                    rounded
                    dark
                    depressed
                    v-on="on"
                    >Timeline & Activities</v-btn
                  >
                </template>

                <v-card>
                  <v-parallax
                    src="https://f.hubspotusercontent00.net/hubfs/2480959/Final_19500_Background.svg"
                    dark
                    height="50%"
                    class="invite__hero-default"
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
                      <v-btn icon dark @click="activitiesDialog = false">
                        <v-icon>mdi-close</v-icon>
                      </v-btn>
                    </div>
                  </v-parallax>
                </v-card>
              </v-dialog>
            </div>
          </template>

          <template>
            <div class="text-center">
              <v-dialog v-model="testimonialsDialog" width="90%">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    v-bind="attrs"
                    class="invite__cta"
                    color="grey darken-3"
                    small
                    rounded
                    dark
                    depressed
                    v-on="on"
                    >Student & Parent Testimonials</v-btn
                  >
                </template>

                <v-card>
                  <v-parallax
                    src="https://f.hubspotusercontent00.net/hubfs/2480959/19500_green_darkgreenstripes.svg"
                    dark
                    height="100%"
                    class="invite__hero-default"
                  >
                    <div class="landing__2-column">
                      <div class="landing__left">
                        <div class="invite__text-testimonial-white">
                          <v-icon left dark>mdi-comment-quote</v-icon>
                          PilotCity was a fresh breath of air. It was a new program that was
                          offering a mind-blowing and unique experience.
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
                            <div class="landing__text-testimonial-name-black">Amratha R.</div>
                            <div class="landing__text-testimonial-position">
                              Healthtech Entrepreneur, PilotCity
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </v-parallax>

                  <v-parallax
                    src="https://f.hubspotusercontent00.net/hubfs/2480959/19500_pink-1.svg"
                    dark
                    height="100%"
                    class="invite__hero-default"
                  >
                    <div class="landing__2-column">
                      <div class="landing__left">
                        <div class="invite__text-testimonial-white">
                          <v-icon left dark>mdi-comment-quote</v-icon>
                          My child has grown right before my eyes. She has matured into a young
                          woman who can achieve what she sets her mind to thanks to this program.
                        </div>
                        <div class="landing__text-testimonial-body">
                          <div>
                            <v-avatar size="75">
                              <v-img
                                src="https://f.hubspotusercontent00.net/hubfs/2480959/Screen%20Shot%202020-08-31%20at%2012.33.11%20AM.png"
                              ></v-img>
                            </v-avatar>
                          </div>
                          <div class="landing__text-testimonial-title">
                            <div class="landing__text-testimonial-name-black">Vanesa C.</div>
                            <div class="landing__text-testimonial-position">
                              PilotCity Parent & Guardian
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </v-parallax>

                  <v-parallax
                    src="https://f.hubspotusercontent00.net/hubfs/2480959/19500_blue-3.svg"
                    dark
                    height="100%"
                    class="invite__hero-default"
                  >
                    <div class="landing__2-column">
                      <div class="landing__left">
                        <div class="invite__text-testimonial-white">
                          <v-icon left dark>mdi-comment-quote</v-icon>
                          Most employers wouldn’t want high schoolers to work for them since there’s
                          a stigma that we aren’t prepared and under-qualified. PilotCity pushes
                          that stigma away and recognizes the capability of high schoolers to do
                          something that isn’t normally seen among us.
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
                            <div class="landing__text-testimonial-name-black">Rosa S.</div>
                            <div class="landing__text-testimonial-position">
                              Intern, San Leandro Library
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </v-parallax>

                  <v-parallax
                    src="https://f.hubspotusercontent00.net/hubfs/2480959/19500_purple-2.svg"
                    dark
                    height="100%"
                    class="invite__hero-default"
                  >
                    <div class="landing__2-column">
                      <div class="landing__left">
                        <div class="invite__text-testimonial-white">
                          <v-icon left dark>mdi-comment-quote</v-icon>
                          PilotCity is an excellent program for high school kids as it gives them
                          invaluable experience in entrepreneurship, confidence, and team building
                          as it pushes kids to the limits. It teaches them real-life experiences. A
                          program must for all high school kids.
                        </div>
                        <div class="landing__text-testimonial-body">
                          <div>
                            <v-avatar size="75">
                              <v-img
                                src="https://f.hubspotusercontent00.net/hubfs/2480959/3_SeeProjectExamples-1-1.png"
                              ></v-img>
                            </v-avatar>
                          </div>
                          <div class="landing__text-testimonial-title">
                            <div class="landing__text-testimonial-name-black">Shuchita G.</div>
                            <div class="landing__text-testimonial-position">
                              PilotCity Parent & Guardian
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </v-parallax>

                  <v-parallax
                    src="https://f.hubspotusercontent00.net/hubfs/2480959/19500_red-2.svg"
                    dark
                    height="100%"
                    class="invite__hero-default"
                  >
                    <div class="landing__2-column">
                      <div class="landing__left">
                        <div class="invite__text-testimonial-white">
                          <v-icon left dark>mdi-comment-quote</v-icon>
                          Being with PilotCity has allowed me to transform and grow in so many ways.
                          Thanks to this experience, I'm going to be working with my employer to
                          implement my service past this internship. The PilotCity team is full of
                          supportive, hard-working people, and I'm lucky to have been able to join
                          this experience this summer. Thank you PilotCity!
                        </div>
                        <div class="landing__text-testimonial-body">
                          <div>
                            <v-avatar size="75">
                              <v-img
                                src="https://f.hubspotusercontent00.net/hubfs/2480959/Screen%20Shot%202020-08-31%20at%2012.09.15%20AM-1.png"
                              ></v-img>
                            </v-avatar>
                          </div>
                          <div class="landing__text-testimonial-title">
                            <div class="landing__text-testimonial-name-black">Allyson L.</div>
                            <div class="landing__text-testimonial-position">
                              Intern, City of East Palo Alto
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </v-parallax>

                  <v-parallax
                    src="https://f.hubspotusercontent00.net/hubfs/2480959/19500_yellow_darkyellowstripes.svg"
                    dark
                    height="100%"
                    class="invite__hero-default"
                  >
                    <div class="landing__2-column">
                      <div class="landing__left">
                        <div class="invite__text-testimonial-white">
                          <v-icon left dark>mdi-comment-quote</v-icon>
                          Through PilotCity, my incoming 10th-grade daughter got internships with
                          two different companies during the Summer of 2020. PilotCity encouraged
                          her to accept both the offers, which helped her realize her own capacity
                          and learn how to manage her time well. That exposure helped her improve
                          her technical, presentation, and collaboration skills, as well as boosted
                          her confidence.
                        </div>
                        <div class="landing__text-testimonial-body">
                          <div>
                            <v-avatar size="75">
                              <v-img
                                src="https://f.hubspotusercontent00.net/hubfs/2480959/Screen%20Shot%202020-08-31%20at%2012.32.52%20AM.png"
                              ></v-img>
                            </v-avatar>
                          </div>
                          <div class="landing__text-testimonial-title">
                            <div class="landing__text-testimonial-name-black">Rashmi K.</div>
                            <div class="landing__text-testimonial-position">
                              PilotCity Parent & Guardian
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </v-parallax>

                  <v-parallax
                    src="https://f.hubspotusercontent00.net/hubfs/2480959/19500_orange_darkorangestripes.svg"
                    dark
                    height="100%"
                    class="invite__hero-default"
                  >
                    <div class="landing__2-column">
                      <div class="landing__left">
                        <div class="invite__text-testimonial-white">
                          <v-icon left dark>mdi-comment-quote</v-icon>
                          The second time around with PilotCity was amazing. Even though I didn't
                          have a main project this year, I got to work under someone and learn about
                          the workforce. I got to improve my skill level. And I really enjoyed
                          learning something different every week.
                        </div>
                        <div class="landing__text-testimonial-body">
                          <div>
                            <v-avatar size="75">
                              <v-img
                                src="https://f.hubspotusercontent00.net/hubfs/2480959/Screen%20Shot%202020-08-31%20at%2012.31.51%20AM.png"
                              ></v-img>
                            </v-avatar>
                          </div>
                          <div class="landing__text-testimonial-title">
                            <div class="landing__text-testimonial-name-black">Kyara G.</div>
                            <div class="landing__text-testimonial-position">
                              Intern, Shannon Leigh
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </v-parallax>

                  <v-parallax
                    src="https://f.hubspotusercontent00.net/hubfs/2480959/19500_green_darkgreenstripes.svg"
                    dark
                    height="100%"
                    class="invite__hero-default"
                  >
                    <div class="landing__2-column">
                      <div class="landing__left">
                        <div class="invite__text-testimonial-white">
                          <v-icon left dark>mdi-comment-quote</v-icon>
                          What a great experience. My daughter, a rising Sophomore, signed up for a
                          weekend hackathon program. A weekend turned out to be the entire summer.
                          She loved the experience so much that she made a proposal to her employer
                          to continue through the school year. Besides the obvious benefits of this
                          work experience for her college resume, she built up her self confidence
                          and leadership skills.
                        </div>
                        <div class="landing__text-testimonial-body">
                          <div>
                            <v-avatar size="75">
                              <v-img
                                src="https://f.hubspotusercontent00.net/hubfs/2480959/Screen%20Shot%202020-08-31%20at%2012.33.56%20AM.png"
                              ></v-img>
                            </v-avatar>
                          </div>
                          <div class="landing__text-testimonial-title">
                            <div class="landing__text-testimonial-name-black">Jeff L.</div>
                            <div class="landing__text-testimonial-position">
                              PilotCity Parent & Guardian
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </v-parallax>

                  <v-parallax
                    src="https://f.hubspotusercontent00.net/hubfs/2480959/19500_pink-1.svg"
                    dark
                    height="100%"
                    class="invite__hero-default"
                  >
                    <div class="landing__2-column">
                      <div class="landing__left">
                        <div class="invite__text-testimonial-white">
                          <v-icon left dark>mdi-comment-quote</v-icon>
                          "PilotCity is more than just a program... it's a family"
                        </div>
                        <div class="landing__text-testimonial-body">
                          <div>
                            <v-avatar size="75">
                              <v-img
                                src="https://f.hubspotusercontent00.net/hubfs/2480959/Screen%20Shot%202020-08-31%20at%2012.34.07%20AM.png"
                              ></v-img>
                            </v-avatar>
                          </div>
                          <div class="landing__text-testimonial-title">
                            <div class="landing__text-testimonial-name-black">Pranav P.</div>
                            <div class="landing__text-testimonial-position">
                              MESH Fellow, Takeoff Point
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </v-parallax>
                </v-card>
              </v-dialog>
            </div>
          </template>
        </div>

        <div class="invite__questions-tip">
          <v-icon small color="grey darken-3">mdi-comment-question-outline</v-icon> GOT QUESTIONS?
          WE GOT ANSWERS<v-icon small color="grey darken-3">mdi-arrow-bottom-right-thick</v-icon>
        </div>

        <!-- <div class="invite__resources">hi</div> -->
      </div>

      <!-- <div><v-btn>Students</v-btn> <v-btn>Teachers</v-btn></div> -->
    </div>
  </div>
</template>

<script lang="ts">
import { computed, onMounted, ref, watch } from '@vue/composition-api';

export default {
  name: 'Invite',
  props: {
    schoolName: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      activitiesDialog: false,
      testimonialssDialog: false,
      schoolContainer: 'invite__wrapper-school',
      employerContainer: 'invite__wrapper-employer',
      teacherContainer: 'invite__wrapper-teacher',
      parentContainer: 'invite__wrapper-parent',
      studentContainer: 'invite__wrapper-student',
      sponsorContainer: 'invite__wrapper-sponsor',
      schoolTitleEntity: 'invite__title-entity-school',
      employerTitleEntity: 'invite__title-entity-employer',
      teacherTitleEntity: 'invite__title-entity-teacher',
      parentTitleEntity: 'invite__title-entity-parent',
      studentTitleEntity: 'invite__title-entity-student',
      sponsorTitleEntity: 'invite__title-entity-sponsor'
    };
  },

  setup(props, { root: { $router } }) {
    // video ask setup

    const invitePages = {
      Affirm: {
        user: 'employer',
        password: 'affirm',
        video: 'cLQOfJJWeis'
      },

      'Alameda Chamber Of Commerce': {
        user: 'employer',
        password: 'alamedachamber',
        video: 'h4h2l84ZNLw'
      },

      'Alameda County': {
        user: 'employer',
        password: 'alamedacounty',
        video: '_eqGuDQpOE4'
      },

      'Alan AI': {
        user: 'employer',
        password: 'alan',
        video: 'edDmkzlc3nA'
      },

      'AP Racing': {
        user: 'employer',
        password: 'apracing',
        video: '5puXzjBn62Y'
      },

      BART: {
        user: 'employer',
        password: 'bart',
        video: 'W5JFjfKRLEg'
      },

      'City Of Antioch': {
        user: 'employer',
        password: 'antioch',
        video: 'FjnqWo17FW8'
      },

      'City Of San Leandro Engineering': {
        user: 'employer',
        password: 'sanleandro',
        video: 'c-mMXLwTpTg'
      },

      'Councilmember Holland White': {
        user: 'employer',
        password: 'holland',
        video: 'uGuq-lMUOL8'
      },

      'Councilmember Sara Lamnin': {
        user: 'employer',
        password: 'hayward',
        video: 'AzLA_CPXgVE'
      },

      Glydways: {
        user: 'employer',
        password: 'glydways',
        video: '4PxAlYaaOKI'
      },

      'James Gardner': {
        user: 'employer',
        password: 'gardner',
        video: 'df70W1HrjBI'
      },

      'Kengo Yoshii': {
        user: 'employer',
        password: 'kengo',
        video: 'c3VbyF3wRqo'
      },

      'Lawrence Berkeley National Lab': {
        user: 'employer',
        password: 'berkeleylab',
        video: ''
      },

      'Office Of Congresswoman Barbara Lee': {
        user: 'employer',
        password: 'barbaralee',
        video: 'LnI7bMDc2_I'
      },

      'One Workplace': {
        user: 'employer',
        password: 'oneworkplace',
        video: 'd4dXzlcXhNw'
      },

      'Phase Space': {
        user: 'employer',
        password: 'phasespace',
        video: 'Ppze1eQQJD0'
      },

      'Raconteur Animation': {
        user: 'employer',
        password: 'raconteur',
        video: 'zMon-0lIIbE'
      },

      'San Francisco Fire Department': {
        user: 'employer',
        password: 'sffd',
        video: 'a-eF7wXn5GU'
      },

      'San Mateo County Labs': {
        user: 'employer',
        password: 'smclabs',
        video: 'm3Bn1TxOv8s'
      },

      Seeed: {
        user: 'employer',
        password: 'seeed',
        video: 'ueObATSbs0k'
      },

      'Takeoff Point': {
        user: 'employer',
        password: 'takeoff',
        video: 'roxTlCTYkow'
      },

      // ROUND 1 SCHOOLS

      'Antioch High School': {
        user: 'school',
        password: 'antiochhigh',
        video: 'd5a4CINz_Ns'
      },

      'Basis Independent Fremont': {
        user: 'school',
        password: 'basis',
        video: 'DlvJuX0D26w'
      },

      'Berkeley Technology Academy': {
        user: 'school',
        password: 'bta',
        video: '9VoP6uPmODQ'
      },

      'Berkeley Unified School District': {
        user: 'school',
        password: 'busd',
        video: 'Sd4ykJny6eo'
      },

      'Carla Ng': {
        user: 'school',
        password: 'carla',
        video: 'pUzJ-OWTXHw'
      },

      'Cece Adams': {
        user: 'school',
        password: 'cece',
        video: 'qulvPCNo6jY'
      },

      'Daniel Spinka': {
        user: 'school',
        password: 'spinka',
        video: '85iRhdtjkAE'
      },

      'Design Tech High School': {
        user: 'school',
        password: 'dtech',
        video: 'HWffCteneCU'
      },

      'Eastside College Prep School': {
        user: 'school',
        password: 'eastside',
        video: 'Zmf2UVgzzwI'
      },

      'Emiliano Sanchez': {
        user: 'school',
        password: 'emiliano',
        video: 'mQ_K1TG-MaI'
      },

      'Fremont Unified School District': {
        user: 'school',
        password: 'fusd',
        video: 'dkXG7FouHRg'
      },

      'Google Code Next': {
        user: 'school',
        password: 'codenext',
        video: 'mAbYaERVy8I'
      },

      'Janevette Cole': {
        user: 'school',
        password: 'janevette',
        video: 'in8C1LwGMi4'
      },

      'Jefferson Union High School District': {
        user: 'school',
        password: 'juhsd',
        video: '__CXM3bbreQ'
      },

      KIPP: {
        user: 'school',
        password: 'kipp',
        video: '88-cI45-d30'
      },

      'Leadership Public Schools': {
        user: 'school',
        password: 'lps',
        video: 'M3s9Y-8-Ftw'
      },

      'Lehigh University': {
        user: 'school',
        password: 'lehigh',
        video: '6m1R5if22bo'
      },

      'Madison Park Academy': {
        user: 'school',
        password: 'mpa',
        video: 'fRh9Q0e3ECY'
      },

      'Marin County Office Of Education': {
        user: 'school',
        password: 'mcoe',
        video: 'LnfGrxU2hjQ'
      },

      'Menlo School': {
        user: 'school',
        password: 'menlo',
        video: 'xhXrnH7WR54'
      },

      'Mills High School': {
        user: 'school',
        password: 'mills',
        video: 'H82iAm_ezFI'
      },

      'Oakland Tech High School': {
        user: 'school',
        password: 'tech',
        video: 'xDQPjKDtL9M'
      },

      'Principal James Gray': {
        user: 'school',
        password: 'gray',
        video: 'XGd5fZHg2W0'
      },

      'San Leandro Unified School District': {
        user: 'school',
        password: 'slusd',
        video: 'Ucs8ARqlp4U'
      },

      'San Mateo County Office Of Ed': {
        user: 'school',
        password: 'smcoe',
        video: 'bxvH7hFCFU8'
      },

      'Sequoia Union High School District': {
        user: 'school',
        password: 'seq',
        video: 'Y3sGGkwEKD4'
      },

      'South San Francisco Unified School District': {
        user: 'school',
        password: 'ssfusd',
        video: 'W8W9WEKUIHU'
      },

      // ROUND 1 SPONSORS

      AFCEA: {
        user: 'sponsor',
        password: 'afcea',
        video: 'FUcM-lDFaj8'
      },

      'East Bay Leadership Council': {
        user: 'sponsor',
        password: 'eblc',
        video: 'lddMI6cf4qs'
      },

      'Oakland Workforce Development Board': {
        user: 'sponsor',
        password: 'owdb',
        video: 'B9QaGRIp7MY'
      },

      // ROUND 1 TEACHERS

      'Arroyo High School': {
        user: 'school',
        password: 'arroyo',
        video: '56dbFDK0VmA'
      },

      'Brian Hsieh': {
        user: 'teacher',
        password: 'hsieh',
        video: '8EsUy5B_PX0'
      },

      'Christina Charlton': {
        user: 'teacher',
        password: 'charlton',
        video: 'dEatXU-uJSo'
      },

      'Colegio Nueva Granada': {
        user: 'school',
        password: 'colegio',
        video: 'CrF0oRyvnx8'
      },

      'Darryl Starr': {
        user: 'teacher',
        password: 'starr',
        video: 'ZrH7RepuDxk'
      },

      'Eden Youth Family Center': {
        user: 'teacher',
        password: 'eyfc',
        video: 'JJBZeIeusZ8'
      },

      'Irvington High School': {
        user: 'school',
        password: 'irvington',
        video: 'Oa9ZaBUXer4'
      },

      'Jadie Sun': {
        user: 'teacher',
        password: 'sun',
        video: 'URBq2YIGzHc'
      },

      'Kam O Horo': {
        user: 'teacher',
        password: 'ohoro',
        video: '3oFAtyZF-2A'
      },

      'Kent Mc Cutcheon': {
        user: 'teacher',
        password: 'kent',
        video: '8Giu1Em6jxs'
      },

      'Kyra Wheaton': {
        user: 'teacher',
        password: 'wheaton',
        video: 'NtY-6_GyGoc'
      },

      'Lance Brookner': {
        user: 'teacher',
        password: 'brookner',
        video: 'gIreAGITWMo'
      },

      'Larry Lavendel': {
        user: 'teacher',
        password: 'lavendel',
        video: 'yDkqAbDqFkc'
      },

      'Marc Gordon': {
        user: 'teacher',
        password: 'gordon',
        video: 'ySKRTuuWTXY'
      },

      'Melissa Hale': {
        user: 'teacher',
        password: 'hale',
        video: 'o2d4ckYBwLI'
      },

      'Rebecca Lee': {
        user: 'teacher',
        password: 'lee',
        video: 'lVPGD3Whbvw'
      },

      'Rick Charles': {
        user: 'teacher',
        password: 'charles',
        video: 'StBqHggBQXg'
      },

      'Thalia Mc Neil Smith': {
        user: 'teacher',
        password: 'smith',
        video: 'Ckx_eDYOpfM'
      },

      'Yvie Raij': {
        user: 'teacher',
        password: 'raij',
        video: '45lRCdi88wA'
      },

      'West Contra Costa Unified': {
        user: 'school',
        password: 'wccusd',
        video: 'L6-wGa-Kkmk'
      },

      // ROUND 2222222222222222222 EMPLOYERS

      Bexi: {
        user: 'employer',
        password: 'roomies',
        video: 's9-0MRuL19M'
      },

      'Office Of Supervisor Nate Miley': {
        user: 'employer',
        password: 'miley',
        video: 'J-Vy7HTJzQE'
      },

      'Menlo Park Fire District': {
        user: 'employer',
        password: 'mpfd',
        video: 'on1EZIY5WTM'
      },

      'Orange Silicon Valley': {
        user: 'employer',
        password: 'orange',
        video: 'Eb8TDpSPjp8'
      },

      'Rising Sun Center For Opportunity': {
        user: 'employer',
        password: 'rising',
        video: 'OijHWsHUJcA'
      },

      NVDIA: {
        user: 'employer',
        password: 'autonomous',
        video: 'DvjySKDjQ7g'
      },

      'Google Wing': {
        user: 'employer',
        password: 'delivery',
        video: '3dac6tS3zIk'
      },

      // ROUND 2222222222222222222 SCHOOLS

      'Hillsdale High School': {
        user: 'school',
        password: 'hillsdale',
        video: 'GV6dvhT0Ql0'
      },

      'Dane Lancaster': {
        user: 'school',
        password: 'dane',
        video: 'lGalBo5EoPo'
      },

      'Camp Sweeney': {
        user: 'school',
        password: 'sweeney',
        video: '4Dh9aads3hg'
      },

      'TIDE Academy': {
        user: 'school',
        password: 'tide',
        video: 'KcUBCmjCPpo'
      },

      'California Crosspoint Academy': {
        user: 'school',
        password: 'crosspoint',
        video: 'h-hlrP0V6Gg'
      },

      'Emery High School': {
        user: 'school',
        password: 'emeryhigh',
        video: 'kJMbhGFFFRo'
      },

      // ROUND 2222222222222222222 TEACHERS

      'Erin Susoev': {
        user: 'teacher',
        password: 'erin',
        video: 'c4pLPjfLKf0'
      },

      'John Lavine': {
        user: 'teacher',
        password: 'lavine',
        video: 'G2fhr3sSQj4'
      },

      'Royal Sunset High School': {
        user: 'teacher',
        password: 'sunset',
        video: 'kkoLT7R7dzI'
      },

      'Danny Tan': {
        user: 'teacher',
        password: 'danny',
        video: 'Z9kfZIa5XOg'
      },

      'Nina Arnberg': {
        user: 'teacher',
        password: 'nina',
        video: 'hEX5B71-wPg'
      },

      'Ramal Llamar': {
        user: 'teacher',
        password: 'llamar',
        video: 'mtG_5BpKII4'
      },

      'Rebekah Kotlar': {
        user: 'teacher',
        password: 'kotlar',
        video: 'ZFyUrrKsrFI'
      },

      // ROUND 2222222222222222222.5

      'Diablo Valley College': {
        user: 'school',
        password: 'dvc',
        video: 'mUpNfTyPnHg'
      },

      'Oakland Tech PTSA': {
        user: 'school',
        password: 'internships',
        video: 'o2lIs6pDKw8'
      },

      'Oakland Tech Students': {
        user: 'student',
        password: 'getinternships',
        video: 'vAYHQc_9k9Y'
      },

      // ROUND 3 - ONLY EMPLOYERS AND SPONSORS

      'Marin Clean Energy': {
        user: 'sponsor',
        password: 'action',
        video: 'SGkrd18YyQY'
      },

      AnaSpec: {
        user: 'employer',
        password: 'biotech',
        video: 'dm0pWI7De-M'
      },

      'Shannon Leigh': {
        user: 'employer',
        password: 'designers',
        video: '8WoxxdP6y-c'
      },

      'Common Networks': {
        user: 'employer',
        password: 'digitalequity',
        video: ''
      },

      'Tech Exchange': {
        user: 'employer',
        password: 'digitalequity',
        video: 'xbskOnz4uuo'
      },

      'Fab City Oakland': {
        user: 'employer',
        password: 'distribute',
        video: 'bRw3FJucb64'
      },

      'City Of San Leandro Sustainability': {
        user: 'employer',
        password: 'ecosystem',
        video: 'TbGmKbVbYiI'
      },

      'City Of East Palo Alto': {
        user: 'employer',
        password: 'epa',
        video: '/_6Nmh0eoawY'
      },

      NIST: {
        user: 'employer',
        password: 'forensics',
        video: 'IV9FDJO_UU4'
      },

      'Alameda Health System': {
        user: 'employer',
        password: 'futureofhealth',
        video: 'o2ge_5-a7mQ'
      },

      'AC Transit': {
        user: 'employer',
        password: 'futuretransit',
        video: 'wgZyg_uQOwU'
      },

      'San Leandro Library': {
        user: 'employer',
        password: 'goingdigital',
        video: '9HD1FmFHZVA'
      },

      Climatec: {
        user: 'sponsor',
        password: 'impact',
        video: 'HFmu0MjY2kk'
      },

      EBMUD: {
        user: 'employer',
        password: 'innovatewater',
        video: 'I6L74gjAoxU'
      },

      Typeform: {
        user: 'employer',
        password: 'interact',
        video: 'rlQNqOyvOPk'
      },

      'Tom Eppenberger': {
        user: 'employer',
        password: 'kp',
        video: 'TMhKYdmK_ZU'
      },

      Ivaldi: {
        user: 'employer',
        password: 'mfg',
        video: 'tvFzPQMIzoM'
      },

      'Contra Costa County Sheriffs': {
        user: 'employer',
        password: 'nextgen',
        video: 'WMQsIs7XyK0'
      },

      'City Of Pittsburg': {
        user: 'employer',
        password: 'pittsburg',
        video: 'pittsburg'
      },

      'City Of San Leandro Public Works': {
        user: 'employer',
        password: 'publicworks',
        video: 'eD_We1UaT2k'
      },

      'Currie Lee MD': {
        user: 'employer',
        password: 'raiders',
        video: 'wZFS-RbnNaY'
      },

      'Carlton Senior Living': {
        user: 'employer',
        password: 'seniors',
        video: 'MvKrRykRMWA'
      },

      FLIR: {
        user: 'employer',
        password: 'sensors',
        video: 'Ozi2vMOkq_s'
      },

      'City Of Hayward': {
        user: 'employer',
        password: 'smartcity',
        video: 'FXxzMd-W5DU'
      },

      'Dew Mobility': {
        user: 'employer',
        password: 'smartcity',
        video: 'lenIt3Mv6Lc'
      },

      'Port Of Oakland': {
        user: 'employer',
        password: 'theport',
        video: 'C0bH-XI57h0'
      },

      'Vantage Robotics': {
        user: 'employer',
        password: 'uav',
        video: 'sOVzFTLHySc'
      },

      // ROUND 4
      'Amethod Public Schools': {
        user: 'school',
        password: 'oakland',
        video: 'PnadTDEXZkE'
      },

      'Averroes High School': {
        user: 'school',
        password: 'averroes',
        video: 'NhvLfeNUpwc'
      },

      'Berkeley High School': {
        user: 'school',
        password: 'internships',
        video: 'Roj6fPRwXxQ'
      },

      'Cabrillo Unified School District': {
        user: 'school',
        password: 'internships',
        video: 'OCKgn6mZA5U'
      },

      'Clayton Valley Charter High School': {
        user: 'school',
        password: 'internships',
        video: 'CznYbrlX1xE'
      },

      'Code For Fun': {
        user: 'school',
        password: 'coders',
        video: '8QzMXsRdk3M'
      },

      'Emery Unified School District': {
        user: 'school',
        password: 'wins',
        video: 'YetY9RP4sq0'
      },

      'Envision Schools': {
        user: 'school',
        password: 'internships',
        video: 'GWui3UBcFfk'
      },

      'Brenkwitz High School': {
        user: 'school',
        password: 'transform',
        video: 'p1vVeASpNyA'
      },

      'Hayward Unified School District': {
        user: 'school',
        password: 'grow',
        video: 'OYU8xNJFYKo'
      },

      'Thornton High School': {
        user: 'school',
        password: 'internships',
        video: '7s0ZO1SGJzg'
      },

      'Latitude High School': {
        user: 'school',
        password: 'internships',
        video: '47x5gHoLv6Q'
      },

      'Lighthouse Charter High School': {
        user: 'school',
        password: 'internships',
        video: '9t2hMmBdZR8'
      },

      'Mission Valley ROP': {
        user: 'school',
        password: 'internships',
        video: 'wZByC-9JFhA'
      },

      'Moreau Catholic High School': {
        user: 'school',
        password: 'internships',
        video: '_eVRl-g1-9A'
      },

      'Mount Eden High School': {
        user: 'school',
        password: 'internships',
        video: 'zigZR0bcBYU'
      },

      'MW Academy': {
        user: 'school',
        password: 'internships',
        video: '3t_jSSkRuBE'
      },

      'Novato High School': {
        user: 'school',
        password: 'internships',
        video: 'sogSf6j8Ngk'
      },

      Civicorps: {
        user: 'school',
        password: 'internships',
        video: 'lUZbUIov1U4'
      },

      'Oakland Unified School District': {
        user: 'school',
        password: 'scalingwbl',
        video: 'D6OyxPExEwM'
      },

      'Pittsburg Unified School District': {
        user: 'school',
        password: 'round2',
        video: 'tmMIT789ZSc'
      },

      'Quarry Lane School': {
        user: 'school',
        password: 'internships',
        video: 'klA4D8L6Dr0'
      },

      'San Francisco Unified School District': {
        user: 'school',
        password: 'scalingwbl',
        video: '44bvakCmjA4'
      },

      'Olga Pineda': {
        user: 'school',
        password: 'thanks',
        video: 'bB8LotCdbvU'
      },

      'Nancy Kane': {
        user: 'school',
        password: 'internships',
        video: 'MoupGpegTBs'
      },

      'San Mateo High School': {
        user: 'school',
        password: 'internships',
        video: 'A_CV5PRua9E'
      },

      'Aragon High School': {
        user: 'school',
        password: 'wbl',
        video: 'wJ3atRlgWsE'
      },

      'San Mateo Union High School District': {
        user: 'school',
        password: 'smuhsd',
        video: 'CpX4IBbhxVU'
      },

      'Alton Lee': {
        user: 'teacher',
        password: 'alton',
        video: 't57JJ3Db8I8'
      },

      'Carlmont High School': {
        user: 'school',
        password: 'internships',
        video: 'Gn6rdAYK4qA'
      },

      'Summit Public Schools': {
        user: 'school',
        password: 'internships',
        video: 'X95d3eaL6l0'
      },

      'Dawn Fregosa': {
        user: 'teacher',
        password: 'og',
        video: 'p38ZUEwc2GQ'
      },

      // ROUND 5 (45 qty)

      'Chris Rose': {
        user: 'teacher',
        password: 'rose',
        video: 'O-mLGTgrmco'
      },

      'Jeff Adkins': {
        user: 'teacher',
        password: 'adkins',
        video: 'jqpiRT8w16c'
      },

      'Terry Palmer': {
        user: 'teacher',
        password: 'palmer',
        video: 'KSCl_QETjtM'
      },

      'Jessica Govoni': {
        user: 'teacher',
        password: 'govoni',
        video: 'ATwgctjevrw'
      },

      'Courtney Peterson': {
        user: 'teacher',
        password: 'peterson',
        video: 't3fB_5BUYAM'
      },

      'Joseph Centoni': {
        user: 'teacher',
        password: 'centoni',
        video: 'ljmMCg2IniY'
      },

      'Hannah Carney': {
        user: 'teacher',
        password: 'carney',
        video: '1mxu5Z231ls'
      },

      'The Andersons': {
        user: 'teacher',
        password: 'internships',
        video: '32ttTSBIxmQ'
      },

      'Michelle Kerr': {
        user: 'teacher',
        password: 'kerr',
        video: '7Q6obkSmzis'
      },

      'Kennedy High School': {
        user: 'teacher',
        password: 'internships',
        video: '0OkVzooXoaE'
      },

      'Hunter Lower': {
        user: 'teacher',
        password: 'lower',
        video: '6BsQp9MyB-E'
      },

      'Deborah Jackson': {
        user: 'teacher',
        password: 'jackson',
        video: 'keV1PJ8Livs'
      },

      'David Gurley': {
        user: 'teacher',
        password: 'gurley',
        video: 'MhTIV5Kc3Sc'
      },

      'Joshua Moran': {
        user: 'teacher',
        password: 'moran',
        video: 'AXamg6RvEqw'
      },

      'TK Pryor Knell': {
        user: 'teacher',
        password: 'tk',
        video: 'My5iC5Q0k7w'
      },

      'Richard Baugh': {
        user: 'teacher',
        password: 'baugh',
        video: 'Zz1k4puaoV4'
      },

      'Michael Rodriguez': {
        user: 'teacher',
        password: 'rodriguez',
        video: 'r4_cBinCWKg'
      },

      'Edward Lopez': {
        user: 'teacher',
        password: 'lopez',
        video: '5PlPqNdB4pI'
      },

      'Kirk Sands': {
        user: 'teacher',
        password: 'sands',
        video: 'HjPO2n4M6sc'
      },

      'Steve Walker': {
        user: 'teacher',
        password: 'walker',
        video: '1GWZ2JU75AM'
      },

      'Rachel Chou': {
        user: 'teacher',
        password: 'chou',
        video: 'oFns1QZkYK8'
      },

      'Matt Redmond': {
        user: 'teacher',
        password: 'redmond',
        video: 'QTdDa0RZSSg'
      },

      'Christina Ong': {
        user: 'teacher',
        password: 'ong',
        video: '0e5SRPdfg7s'
      },

      'Jasmene Miranda': {
        user: 'teacher',
        password: 'miranda',
        video: 'FNthbpKIxfo'
      },

      'Chloe Erskine': {
        user: 'teacher',
        password: 'erskine',
        video: 'IW9fSUSf2F8'
      },

      'James Shapiro': {
        user: 'teacher',
        password: 'shapiro',
        video: 'UQOlZx7oIz8'
      },

      'Meghan Johnston': {
        user: 'teacher',
        password: 'johnston',
        video: 'SM9rWti4Isk'
      },

      'Anthony Pena': {
        user: 'teacher',
        password: 'pena',
        video: 'DjJq-d03EQ0'
      },

      'Hank Machtay': {
        user: 'teacher',
        password: 'machtay',
        video: 'IXt_vYkynK0'
      },

      'Holger Michaelis': {
        user: 'teacher',
        password: 'michaelis',
        video: 'nDndBhNFyNE'
      },

      'George Lee': {
        user: 'teacher',
        password: 'lee',
        video: 'ZaETGWdRZhM'
      },

      'Eddie Nava': {
        user: 'teacher',
        password: 'nava',
        video: 'YLIGmPJMuoU'
      },

      'Tony Farley': {
        user: 'teacher',
        password: 'farley',
        video: 'L_WK--FM3Kw'
      },

      'Laura Jagroop': {
        user: 'teacher',
        password: 'jagroop',
        video: '6naxan3o9Bk'
      },

      'Juanita Abundiz Henderson': {
        user: 'teacher',
        password: 'abundiz',
        video: 'GzGCkJSs__4'
      },

      'Deborah Reinerio': {
        user: 'teacher',
        password: 'reinerio',
        video: 'p4UiNeds2wU'
      },

      'Tom Grace': {
        user: 'teacher',
        password: 'grace',
        video: 'puemZUC4eOk'
      },

      'Chris Rubin': {
        user: 'teacher',
        password: 'rubin',
        video: 'e2-LV0SEDWY'
      },

      'John Rowe': {
        user: 'teacher',
        password: 'rowe',
        video: 'WQxTVrilulg'
      },

      'Shannon Couch': {
        user: 'teacher',
        password: 'couch',
        video: '2BJ0dYeWieY'
      },

      'Aaron Boyd': {
        user: 'teacher',
        password: 'boyd',
        video: '7872-MXbjVQ'
      },

      // ROUND 6

      'Boys And Girls Club San Leandro': {
        user: 'school',
        password: 'internships',
        video: 'lmbNLmKs8fM'
      },

      'Brian Ortiz Classroom': {
        user: 'student',
        password: 'internships',
        video: '9AmlBLybWsg'
      },
      'Shop Talk': {
        user: 'teacher',
        password: 'internships',
        video: 'hZ2QUtc0S_c'
      },
      'East Bay Regional Parks District': {
        user: 'employer',
        password: 'ebrpd',
        video: 'r9mRysvPHwg'
      },
      'Arroyo Parents': {
        user: 'parent',
        password: 'internships',
        video: 'fOYapMYCfQo'
      },
      'Fremont Moms': {
        user: 'parent',
        password: 'internships',
        video: 'kTavoCXHYFM'
      },
      AAMAA: {
        user: 'employer',
        password: 'localimpact',
        video: '1K_FGIW0kYk'
      },
      Bill: {
        user: 'employer',
        password: 'fintech',
        video: 'YwsUz-COPsI'
      },
      // ROUND 7
      IBM: {
        user: 'employer',
        password: 'impact',
        video: 'XzRR2FC0ltw'
      },
      Boostalgo: {
        user: 'employer',
        password: 'impact',
        video: 'Givf4L_T5sw'
      },
      UCT: {
        user: 'employer',
        password: 'impact',
        video: 'YIPJuiXeqE0'
      },
      'Lam Research': {
        user: 'employer',
        password: 'impact',
        video: 'R2eG-cB_pm8'
      },
      'Palo Alto Networks': {
        user: 'employer',
        password: 'impact',
        video: 'oNXyBlLByE8'
      },
      Visa: {
        user: 'employer',
        password: 'impact',
        video: 'vDCYbf08GwY'
      },
      Droisys: {
        user: 'employer',
        password: 'impact',
        video: 'o-yp8MRVEwU'
      },
      'Sutter Health': {
        user: 'employer',
        password: 'impact',
        video: 'FWbhou-EQKM'
      },
      'Cisco Global Infrastructure Services': {
        user: 'employer',
        password: 'impact',
        video: 'qAcz1kFtFiE'
      },
      Workday: {
        user: 'employer',
        password: 'impact',
        video: 'ZS6VmOhoMFE'
      },
      Uber: {
        user: 'employer',
        password: 'impact',
        video: 'gd_OvNyj6bI'
      },
      Cognizant: {
        user: 'employer',
        password: 'impact',
        video: 'jBpKtmO57gg'
      },
      'Amazon Prime Video': {
        user: 'employer',
        password: 'impact',
        video: 'osGkNzhgPQ4'
      },
      Salesforce: {
        user: 'employer',
        password: 'impact',
        video: '3FuKcCfHI4I'
      },
      'Cisco Corporate Development Technology': {
        user: 'employer',
        password: 'impact',
        video: 'lb8J5wVkW-I'
      },
      KLA: {
        user: 'employer',
        password: 'impact',
        video: '_e3tKfeNfVs'
      },

      // ROUND 8
      Dyndrite: {
        user: 'employer',
        password: 'digitalmfg',
        video: 'FTfKosemOmc'
      },
      'Urban Bloc': {
        user: 'employer',
        password: 'outdoor',
        video: '2_eqsQI-IPw'
      },

      'Velodyne Lidar': {
        user: 'employer',
        password: 'av',
        video: 'N6VgXWYvJXg'
      },

      'Strategy Of Things': {
        user: 'employer',
        password: 'iot',
        video: 'HjZrIm3Wjnw'
      },

      Picterra: {
        user: 'employer',
        password: 'ai',
        video: 'ml8-OBbFNy0'
      },

      Litterati: {
        user: 'employer',
        password: 'smarttrash',
        video: 'QstlJilqDd0'
      },

      Agritecture: {
        user: 'employer',
        password: 'iot',
        video: 'EHGubw2N68Q'
      },

      'Scandic Springs': {
        user: 'employer',
        password: 'mfg',
        video: 'xD2aHpi-nlA'
      },

      'Applied Fusion': {
        user: 'employer',
        password: 'mfg',
        video: 'qh_xRleVziM'
      },

      Fathom: {
        user: 'employer',
        password: 'nextlevel',
        video: 'lJ1ELFDK3Lc'
      },

      Matson: {
        user: 'employer',
        password: 'logistics',
        video: 'w-kIJ1WrA6c'
      },

      'Surplus Service': {
        user: 'employer',
        password: 'upcycle',
        video: '4ptWSYYHJ64'
      },

      'George Mark Childrens House': {
        user: 'employer',
        password: 'empathy',
        video: 'AuODwtpUjnc'
      },

      'East Bay Community Energy': {
        user: 'employer',
        password: 'mobilization',
        video: 'KkHegb3gmI0'
      },

      'Contra Costa Transportation Authority': {
        user: 'employer',
        password: 'transport',
        video: '-_MKVhDStrI'
      },

      'Prime Roots': {
        user: 'employer',
        password: 'shrooms',
        video: 'sHzbvsYnC6E'
      },

      'Symbio Robotics': {
        user: 'employer',
        password: 'mfg',
        video: 'V9u5pyPiJa0'
      },

      '6x7': {
        user: 'employer',
        password: 'sales',
        video: 'Ou9UaBdR-k0'
      },

      // ROUND 9
      'Councilmember Victor Aguilar': {
        user: 'employer',
        password: 'sideprojects',
        video: 'EACJazwBJVA'
      },

      'Congressman Eric Swalwell': {
        user: 'employer',
        password: 'sideprojects',
        video: 'cOfSqsCmLmQ'
      },

      'Assembly Member Rob Bonta': {
        user: 'employer',
        password: 'sideprojects',
        video: 'jwkhp7fAsCc'
      },

      Bayer: {
        user: 'employer',
        password: 'biotech',
        video: 'He1owAKz0L8'
      },

      'Chris Chin': {
        user: 'employer',
        password: 'immersive',
        video: 'CfzciwdpJes'
      },

      Manex: {
        user: 'employer',
        password: 'mfg',
        video: '2WVjgMN5ipw'
      },

      'San Leandro Police Department': {
        user: 'employer',
        password: 'resilience',
        video: '8oCDIoPW_3Q'
      },

      'Mayor Pauline Cutter': {
        user: 'employer',
        password: 'sideprojects',
        video: '9chm5NS7tf0'
      },

      'Councilmember Deborah Cox': {
        user: 'employer',
        password: 'sideprojects',
        video: '-dxo1mLhEGw'
      },

      'Councilmember Pete Ballew': {
        user: 'employer',
        password: 'sideprojects',
        video: 'aiCdO3ADsnE'
      },

      'Councilmember Corina Lopez': {
        user: 'employer',
        password: 'sideprojects',
        video: 'NTHst6NUnag'
      },

      // ROUND 10

      'ACOE SWP Partners': {
        user: 'school',
        password: 'internships',
        video: 'PQlA1kPSYBU'
      },

      'Adaptable Security': {
        user: 'employer',
        password: 'cybersecurity',
        video: '-mNNcjtyGC0'
      },

      'City Of San Leandro IT': {
        user: 'employer',
        password: 'tech',
        video: 'JZdbgoITGso'
      },

      'Zocalo Coffee': {
        user: 'employer',
        password: 'roast',
        video: 'LJy3n7uuz7U'
      },

      'UCSF CSEO': {
        user: 'school',
        password: 'internships',
        video: 'mbw50ewGOQw'
      },

      'Amazon Managed Blockchain': {
        user: 'employer',
        password: 'blockchain',
        video: '2Fq3yFFOdVQ'
      },

      'Alameda Unified School District': {
        user: 'school',
        password: 'internships',
        video: 'q4FqoQMGFgk'
      },

      'FUJIFILM Irvine Scientific': {
        user: 'employer',
        password: 'biotech',
        video: 'Hb7WCGmYnkg'
      },

      'Main Street Property Services': {
        user: 'employer',
        password: 'retailers',
        video: '4WrpuWprWbI'
      },

      'Herrick Fang': {
        user: 'teacher',
        password: '23',
        video: 'tXHmGohjb-E'
      },

      // ROUND 11 HODGEPODGE

      'Wild Earth': {
        user: 'employer',
        password: 'biotech',
        video: 'H29U7ColrwA'
      },

      'Pinx Catering': {
        user: 'employer',
        password: 'rebuild',
        video: '88FaCyLuDFI'
      },

      'True West Ventures': {
        user: 'employer',
        password: 'foodie',
        video: 'UuRAATKYvuo'
      },

      'Fremont Fire Department': {
        user: 'employer',
        password: 'mutualaid',
        video: 'FcqbTsLnC5c'
      },

      'College Of Alameda': {
        user: 'school',
        password: 'internships',
        video: 'QXix72SKtbA'
      },

      'Mark Martin': {
        user: 'school',
        password: 'updateformark',
        video: 'SDVk7Svie5o'
      },

      'BATS Members': {
        user: 'school',
        password: 'internships',
        video: '_Td6mG6wFsQ'
      },

      'Berkeley High School Teachers': {
        user: 'teacher',
        password: 'internships',
        video: 'csc7w54Gu5k'
      },

      // ANDREW DOOLITTLE

      'Andrew Doolittle': {
        user: 'teacher',
        password: 'doolittle',
        video: 'ioeLlpe07wA'
      },

      // ROUND 12

      Cognixion: {
        user: 'employer',
        password: 'ar',
        video: 'MxMWCet9dfA'
      },

      'Turner Construction': {
        user: 'employer',
        password: 'shop',
        video: '39npDknYw6s'
      },

      'Enel X': {
        user: 'employer',
        password: 'community',
        video: '_LEx5cgXjVo'
      },

      'Evolve Manufacturing': {
        user: 'employer',
        password: 'mfg',
        video: 'PcSvvAwx3jE'
      },

      Notion: {
        user: 'employer',
        password: 'nextgenusers',
        video: 'rklfTZxgo8I'
      },

      'House Kombucha': {
        user: 'employer',
        password: 'hearts',
        video: '-NgD62nDu2A'
      }
    };
    const pass = ref('');
    const inputPassword = ref('');
    const getInvitee = computed(() =>
      (props.schoolName as string)
        .split('-')
        .map(word => word[0].toUpperCase() + word.substring(1))
        .join(' ')
    );
    watch(pass, newpass => {
      if (newpass === invitePages[getInvitee.value].password) {
        console.log('mounting');
        (window as any).videoask.loadEmbed({
          kind: 'widget',
          url: 'https://www.videoask.com/fntxxoz2y',
          options: {
            widgetType: 'VideoThumbnailLarge',
            text: 'Talk to me',
            backgroundColor: '#dedede',
            position: 'bottom-right'
          }
        });
      }
    });
    onMounted(() => {
      const valid =
        typeof invitePages[
          (props.schoolName as string)
            .split('-')
            .map(word => word[0].toUpperCase() + word.substring(1))
            .join(' ')
        ] !== 'undefined';
      if (!valid) $router.push({ name: '404' });
    });
    return {
      pass,
      inputPassword,
      invitePages,
      getInvitee,
      show1: ref(false)
    };
  }
};
</script>

<style lang="scss">
.invite {
  &__container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    // margin-top: 50px;
    align-items: center;
    height: 100%;
    // background-color: #404142;
  }
  &__password {
    display: flex;
    margin-left: 10px;
    margin-right: 10px;
  }

  &__password-button {
    margin-left: 10px;
    margin-right: 10px;
  }

  &__wrapper-password {
    width: 100%;
    max-width: 80%;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  // COLOR V-BIND

  &__wrapper-school {
    // width: 100%;
    // max-width: 80%;
    display: flex;
    align-items: center;
    flex-direction: row;
    border: 15px solid #3c9dcd;
    border-radius: 50px;
    padding: 45px;
    // background-color: #dddddd;
  }

  &__wrapper-employer {
    // width: 100%;
    // max-width: 80%;
    display: flex;
    align-items: center;
    flex-direction: row;
    border: 15px solid #ae90b0;
    border-radius: 50px;
    padding: 45px;
    // background-color: #dddddd;
  }

  &__wrapper-teacher {
    // width: 100%;
    // max-width: 80%;
    display: flex;
    align-items: center;
    flex-direction: row;
    border: 15px solid #eda1bf;
    border-radius: 50px;
    padding: 45px;
    // background-color: #dddddd;
  }

  &__wrapper-parent {
    // width: 100%;
    // max-width: 80%;
    display: flex;
    align-items: center;
    flex-direction: row;
    border: 15px solid #fec34b;
    border-radius: 50px;
    padding: 45px;
    // background-color: #dddddd;
  }

  &__wrapper-student {
    // width: 100%;
    // max-width: 80%;
    display: flex;
    align-items: center;
    flex-direction: row;
    border: 15px solid #6eba80;
    border-radius: 50px;
    padding: 45px;
    // background-color: #dddddd;
  }

  &__wrapper-sponsor {
    // width: 100%;
    // max-width: 80%;
    display: flex;
    align-items: center;
    flex-direction: row;
    border: 15px solid #ea6764;
    border-radius: 50px;
    padding: 45px;
    // background-color: #dddddd;
  }

  // COLOR V-BIND

  &__title-entity-school {
    color: #3c9dcd;
  }

  &__title-entity-employer {
    color: #ae90b0;
  }

  &__title-entity-teacher {
    color: #eda1bf;
  }

  &__title-entity-parent {
    color: #fec34b;
  }

  &__title-entity-student {
    color: #6eba80;
  }

  &__title-entity-sponsor {
    color: #ea6764;
  }

  // COLOR V-BIND

  &__title-icon {
    margin-right: 12px;
  }

  &__wrapper-column-left {
    flex-direction: column;
    display: flex;
    margin-bottom: auto;
    // justify-content: flex-start;
    // align-items: flex-start;
  }

  &__wrapper-column-right {
    flex-direction: column;
    display: flex;
    margin-bottom: auto;
    width: 100%;
    // margin: 25px;
    margin-left: 45px;
    height: 100%;
    justify-content: flex-start;

    // justify-content: flex-start;
    // align-items: flex-start;
  }
  &__video {
    // width: 720px;
    // height: 405px;
    width: 619.5px;
    height: 350px;
    // width: 100%;
    // min-width: 360px;
    // max-height: 240px;
    margin-top: 20px;
    // margin-bottom: 20px;
    // border: 15px solid #dedede;
    border-radius: 25px;
    //.56 ratio (1.125:2)
  }

  &__title {
    font-family: Raleway;
    font-size: 30px;
    font-weight: 800;
    // padding-top: 20px;
    // padding-bottom: 20px;
    // margin-bottom: 20px;
    color: #404142;
  }

  &__recommendations-title {
    font-family: Raleway;
    font-size: 12px;
    font-weight: 900;
    letter-spacing: 1px;
    color: #404142;
    text-align: center;
  }

  &__resources-title {
    font-family: Raleway;
    font-size: 12px;
    font-weight: 900;
    letter-spacing: 1px;
    color: #404142;
    text-align: center;
    // margin-top: 10%;
  }

  &__resources-title2 {
    font-family: Raleway;
    font-size: 12px;
    font-weight: 900;
    letter-spacing: 1px;
    color: #404142;
    text-align: center;
    margin-bottom: 5%;
  }

  &__questions-tip {
    font-family: Raleway;
    font-size: 12px;
    font-weight: 900;
    letter-spacing: 1px;
    color: #404142;
    text-align: center;
    // margin-bottom: 5%;
  }

  &__resources-title3 {
    font-family: Raleway;
    font-size: 12px;
    font-weight: 900;
    letter-spacing: 1px;
    color: #404142;
    text-align: center;
    margin-bottom: 5%;
    margin-top: 12%;
  }

  &__password-title {
    width: 100%;
    margin: 20px;
    text-align: center;
  }

  &__password-title-button {
    // margin-top: 20px;
    margin-bottom: 20px;
    font-weight: 800;
  }

  &__resources {
    // width: 200px;
    // height: 200px;
    // background-color: #dedede;
    border: 1px solid #d5d5d5;
    border-radius: 7px;
    width: 100%;
    // height: 100%;
    padding: 25px;
    // margin-top: auto;
    margin-top: 8%;
    // margin-bottom: 25px;
    // margin-bottom: auto;
    margin-bottom: 8%;
  }

  &__cta {
    width: 100%;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  &__cta2 {
    width: 100%;
    margin-top: 10px;
    // margin-bottom: 10px;
  }

  &__cta-accept-decline {
    width: 98%;
    margin-top: 5px;
    margin-bottom: 5px;
    margin-left: auto;
    margin-right: auto;
  }

  &__cta-accept-decline-link {
    width: 100%;
  }

  &__cta-ask-question {
    width: 100%;
    // margin-top: 10px;
    // margin-bottom: 10px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: auto;
  }

  &__accept-decline {
    flex-direction: row;
    display: flex;
    width: 100%;
  }
  // TESTIMONIALS CSS

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

  &__text-testimonial-white {
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

  &__close-dialog {
    text-align: right;
    background-color: transparent;
    position: fixed;
    // position: absolute;
  }

  &__hero-default {
    background-color: #404142;
    // object-fit: cover;
    // height: 100%;
    // height: 100%;
  }
}
@media screen and (max-width: 1280px) {
  .invite {
    &__wrapper-school {
      display: block;
      padding: 20px;
    }
    &__wrapper-column-right {
      margin-left: 0px;
      // padding-right: 50px;
    }

    &__container {
      // max-width: 100%;
    }
  }
}

@media screen and (min-width: 768px) and (max-width: 1023px) {
  .invite {
    &__wrapper-school {
      display: block;
      padding: 20px;
    }
    &__wrapper-column-right {
      margin-left: 0px;
    }
    &__video {
      // width: 540px;
    }
  }
}

@media screen and (min-width: 425px) and (max-width: 767px) {
  .invite {
    &__wrapper-school {
      display: block;
      padding: 20px;
    }
    &__wrapper-column-right {
      margin-left: 0px;
    }
    &__video {
      // width: 275px;
    }
  }
}

@media screen and (max-width: 375px) {
  .invite {
    &__container {
      display: flex;
      flex-direction: row;
      justify-content: center;
      // margin-top: 50px;
      align-items: center;
      // background-color: #404142;
    }
    &__wrapper-school {
      max-width: none;
      align-items: center;
      border: none;
      border-radius: none;
    }
    &__wrapper-column-right {
      margin-left: 0px;
    }
    &__video {
      // width: 275px;
    }
  }
}
</style>
