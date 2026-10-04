import { useState } from 'react'
import { Link } from 'react-router-dom'
import { site } from '../data/site'
import { services } from '../data/services'
import { certificates } from '../data/certificates'
import { projects } from '../data/projects'
import ProjectRow from './ProjectRow'
import Reveal from './Reveal'
import { Art, CertArt, certImage, serviceImage } from './ProjectArt'
import { Arrow } from './Icons'


/* =========================================================
   FEATURED PROJECTS
   ========================================================= */

export const FeaturedProjects = ({ all }) => (
  <section className="section" aria-labelledby="work-h">
    <Reveal as="h2" className="h2">
      <span id="work-h">Selected work</span>
    </Reveal>

    {projects
      .slice(0, all ? 99 : 4)
      .map((p, i) => (
        <ProjectRow
          key={p.id}
          p={p}
          index={i}
        />
      ))}
  </section>
)


/* =========================================================
   SERVICES
   ========================================================= */

export function Services() {
  const [open, setOpen] = useState(0)
  const s = services[open] || services[0]

  return (
    <section className="section" aria-labelledby="svc-h">
      <h2 id="svc-h" className="h2">
        What I build
      </h2>

      <div className="svc-wrap">
        <ul className="svc">
          {services.map(([t, d], i) => (
            <li
              key={t}
              onMouseEnter={() => setOpen(i)}
            >
              <button
                type="button"
                aria-expanded={open === i}
                onFocus={() => setOpen(i)}
                onClick={() => setOpen(i)}
              >
                <small>
                  {String(i + 1).padStart(2, '0')}
                </small>

                {t}
              </button>

              <p hidden={open !== i}>
                {d}
              </p>
            </li>
          ))}
        </ul>

        <div className="svc-art" aria-hidden="true">
  {serviceImage(open) ? (
    <img key={open} src={serviceImage(open)} alt="" />
  ) : (
    <Art key={open} kind={s[2]} tone={s[3]} label="" />
  )}
</div>
      </div>
    </section>
  )
}


/* =========================================================
   JOURNEY DATA
   ========================================================= */

const journey = [
  [
    '2021 – 2022',
    'Class 10, Mahil Gaila',
    'Government Senior Secondary School, Mahil Gaila (S.B.S. Nagar).'
  ],

  [
    '2023 – 2024',
    'Class 12, Humanities',
    'Moved into an English-medium environment and kept my results strong. That is where I learned persistence beats perfection.'
  ],

  [
    '2025 – 2028',
    'BCA at LPU',
    'Chose computer science for the skills, not the trend. Now in second year.'
  ],

  [
    'Now',
    'Frontend, then React',
    'Started with HTML, CSS and JavaScript, then moved to React. Also working through Java, C, C++ and Python.'
  ],

  [
    'Now',
    'Real projects',
    'A tutor’s online platform, a cultural event site for my home village’s Dussehra, and a luxury e-commerce concept.'
  ]
]


/* =========================================================
   ABOUT
   ========================================================= */

export const About = () => (
  <section
    className="about-new"
    aria-labelledby="about-title"
  >
    <div className="about-noise" />

    <div className="about-head">
      <div>
        <span className="about-index">
          01 / ABOUT
        </span>

        <h2 id="about-title">
          More than a
          <span>developer.</span>
        </h2>
      </div>

      <p className="about-intro">
        I learn by building real things, breaking them,
        understanding why they broke, and building them
        better the next time.
      </p>
    </div>


    <div className="about-layout">

      <div className="about-story">

        <div className="about-story-top">
          <span className="about-label">
            A LITTLE CONTEXT
          </span>

          <span className="about-year">
            2026
          </span>
        </div>


        <div className="about-copy">

          <p className="about-lead">
            I’m a second-year BCA student at
            <strong> Lovely Professional University</strong>,
            from Banga, Punjab.
          </p>

          <p>
            I picked technology because I wanted a career built
            around skills, curiosity and steady learning—not
            simply around a degree.
          </p>

          <p>
            Web development is where I’m strongest. I started
            with plain HTML, CSS and JavaScript and gradually
            moved towards React, while exploring databases,
            cloud and AI along the way.
          </p>

          <p>
            I care about the fundamentals. I’d rather understand
            why something works than collect a list of technologies
            that I barely use.
          </p>

          <p>
            Most importantly, I like making things that actually
            exist outside a code editor—websites, experiences and
            useful digital products that people can interact with.
          </p>

        </div>


        <div className="about-origin">
          <span className="origin-mark">
            “
          </span>

          <div>
            <strong>
              Build something real.
            </strong>

            <p>
              That’s usually where the best learning starts.
            </p>
          </div>
        </div>

      </div>


      <aside className="about-side">

        <div className="about-card about-stack-card">

          <div className="card-heading">
            <span>01</span>

            <strong>
              My toolkit
            </strong>
          </div>


          <div className="tech-groups">

            {Object.entries(site.stack).map(
              ([key, values]) => (
                <div
                  className="tech-group"
                  key={key}
                >
                  <span>
                    {key}
                  </span>

                  <div className="tech-list">
                    {values.map((value) => (
                      <b key={value}>
                        {value}
                      </b>
                    ))}
                  </div>
                </div>
              )
            )}

          </div>

        </div>


        <div className="about-card about-education-card">

          <div className="card-heading">
            <span>02</span>

            <strong>
              Currently
            </strong>
          </div>


          {site.education.map(
            ([a, b, c]) => (
              <div
                className="education-item"
                key={b + c}
              >
                <small>
                  {c}
                </small>

                <h3>
                  {a}
                </h3>

                <p>
                  {b}
                </p>
              </div>
            )
          )}

        </div>

      </aside>

    </div>


    <div className="about-journey">

      <div className="journey-heading">

        <span className="about-label">
          THE JOURNEY
        </span>

        <p>
          Not a straight line. Just a collection of things
          I decided to learn by doing.
        </p>

      </div>


      <div className="journey-track">

        {journey.map(
          ([date, title, description], index) => (
            <article
              className="journey-card"
              key={title}
            >
              <div className="journey-number">
                {String(index + 1).padStart(2, '0')}
              </div>

              <small>
                {date}
              </small>

              <h3>
                {title}
              </h3>

              <p>
                {description}
              </p>

              <span className="journey-arrow">
                ↗
              </span>
            </article>
          )
        )}

      </div>

    </div>

  </section>
)


/* =========================================================
   CERTIFICATES
   ========================================================= */

export const Certificates = ({ all }) => {
  const cats = ['All', ...new Set(certificates.map((c) => c.category))]

  const [cat, setCat] = useState('All')

  const list = (all ? certificates : certificates.filter((c) => c.featured)).filter(
    (c) => cat === 'All' || c.category === cat
  )

  return (
    <section className="section" aria-labelledby="ce-h">
      <h2 id="ce-h" className="h2">
        Credentials
      </h2>

      {all && (
        <div className="chips">
          {cats.map((c) => (
            <button type="button" key={c} aria-pressed={cat === c} onClick={() => setCat(c)}>
              {c}
            </button>
          ))}
        </div>
      )}

      <ul className="certgrid">
        {list.map((c, i) => {
          const img = certImage(c.id)
          return (
            <li key={c.id} style={{ '--r': `${(i % 3) - 1}deg` }}>
              <div className="certart">
                {img ? (
                  <a
                    href={img}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${c.title} certificate`}
                  >
                    <img src={img} alt={`${c.title} certificate`} loading="lazy" />
                  </a>
                ) : (
                  <CertArt tone={c.tone} title={c.title} />
                )}
              </div>

              <h3>{c.title}</h3>

              <p>{[c.issuer, c.date].filter(Boolean).join(', ') || c.category}</p>

              {c.credentialUrl && (
                <a className="link" href={c.credentialUrl} target="_blank" rel="noreferrer">
                  Verify
                </a>
              )}
            </li>
          )
        })}
      </ul>

      {!all && (
        <Link className="link" to="/certificates">
          View all credentials
          <Arrow s={16} />
        </Link>
      )}
    </section>
  )
}


/* =========================================================
   PRESENCE
   ========================================================= */

export const Presence = () => (
  <section
    className="section presence"
    aria-labelledby="pr-h"
  >
    <h2
      id="pr-h"
      className="h2"
    >
      Find me beyond this website.
    </h2>

    <ul>
      {[
        ['LinkedIn', site.linkedin],
        ['GitHub', site.github],
        ['Download CV', site.cv]
      ].map(([l, h]) => (
        <li key={l}>
          <a
            href={h}
            {...(
              l === 'Download CV'
                ? { download: true }
                : {
                    target: '_blank',
                    rel: 'noreferrer'
                  }
            )}
          >
            {l}
          </a>
        </li>
      ))}
    </ul>
  </section>
)


/* =========================================================
   CONTACT
   ========================================================= */

const contactTypes = [
  'Business website',
  'Landing page',
  'Website redesign',
  'Internship or job',
  'Something else'
]

const contactBudgets = [
  'Not sure yet',
  'Under ₹10,000',
  '₹10,000 – ₹25,000',
  '₹25,000 – ₹50,000',
  '₹50,000+'
]


/*
  IMPORTANT:
  Replace YOUR_FORM_ID with your actual Formspree form ID.

  Example:
  https://formspree.io/f/abcdwxyz
*/

const FORMSPREE_ENDPOINT =
  'https://formspree.io/f/YOUR_FORM_ID'


export function Contact() {

  const [status, setStatus] = useState('idle')

  const [selectedType, setSelectedType] = useState(
    contactTypes[0]
  )

  const [selectedBudget, setSelectedBudget] = useState(
    contactBudgets[0]
  )

  const [messageLength, setMessageLength] = useState(0)


  const validate = (form) => {

    const name =
      form.elements.name.value.trim()

    const email =
      form.elements.email.value.trim()

    const message =
      form.elements.message.value.trim()

    const errors = {}

    if (name.length < 2) {
      errors.name =
        'Please enter your name.'
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      errors.email =
        'Please enter a valid email address.'
    }

    if (message.length < 10) {
      errors.message =
        'Tell me a little more about your idea.'
    }

    return errors
  }


  const submit = async (e) => {

    e.preventDefault()

    const form = e.currentTarget

    const errors = validate(form)


    /* Clear previous errors */

    form
      .querySelectorAll('.contact-error')
      .forEach((element) => {
        element.textContent = ''
      })


    /* Show new errors */

    Object.entries(errors).forEach(
      ([field, message]) => {

        const error =
          form.querySelector(
            `[data-error="${field}"]`
          )

        if (error) {
          error.textContent = message
        }
      }
    )


    /* Stop if invalid */

    if (Object.keys(errors).length > 0) {

      const firstField =
        Object.keys(errors)[0]

      const input =
        form.elements[firstField]

      input?.focus()

      return
    }


    setStatus('loading')


    try {

      const formData =
        new FormData(form)


      const response =
        await fetch(
          FORMSPREE_ENDPOINT,
          {
            method: 'POST',
            body: formData,
            headers: {
              Accept: 'application/json'
            }
          }
        )


      if (!response.ok) {
        throw new Error(
          'Form submission failed'
        )
      }


      setStatus('success')

    } catch (error) {

      console.error(error)

      setStatus('error')
    }
  }


  /* =======================================================
     SUCCESS SCREEN
     ======================================================= */

  if (status === 'success') {

    return (
      <section
        className="contact-new contact-success"
        aria-labelledby="contact-success-title"
      >

        <div className="contact-success-orbit">
          <span />
          <span />
          <span />
        </div>


        <div className="contact-success-inner">

          <span className="contact-kicker">
            MESSAGE RECEIVED
          </span>


          <div className="contact-success-icon">
            ✓
          </div>


          <h2 id="contact-success-title">
            That’s on its way.
          </h2>


          <p>
            Thanks for reaching out. I’ll go through
            your idea and get back to you as soon as I can.
          </p>


          <button
            type="button"
            className="contact-reset"
            onClick={() => {
              setStatus('idle')
              setMessageLength(0)
            }}
          >
            Send another message

            <span>
              ↗
            </span>
          </button>

        </div>

      </section>
    )
  }


  /* =======================================================
     MAIN CONTACT
     ======================================================= */

  return (
    <section
      className="contact-new"
      aria-labelledby="contact-title"
    >

      <div className="contact-bg-grid" />

      <div className="contact-glow contact-glow-one" />
      <div className="contact-glow contact-glow-two" />


      <div className="contact-shell">


        {/* =================================================
            INTRO
            ================================================= */}

        <div className="contact-intro">

          <div className="contact-topline">

            <span className="contact-kicker">
              <i />
              OPEN FOR GOOD PROJECTS
            </span>

            <span className="contact-index">
              06 / CONTACT
            </span>

          </div>


          <div className="contact-heading-wrap">

            <span className="contact-small-word">
              HAVE AN
            </span>


            <h2 id="contact-title">
              IDEA<span>?</span>
            </h2>


            <div className="contact-heading-line">

              <span />

              <p>
                Let’s turn it into something
                <strong>
                  {' '}useful, clear &amp; real.
                </strong>
              </p>

            </div>

          </div>


          <div className="contact-note">

            <div className="contact-note-mark">
              +
            </div>

            <p>
              You don’t need a perfectly formed brief.
              Tell me what you’re trying to make and
              we can figure out the rest.
            </p>

          </div>


          <div className="contact-direct">

            <span>
              OR REACH ME DIRECTLY
            </span>

            <a
              href={`mailto:${site.email}`}
            >
              {site.email}

              <small>
                ↗
              </small>
            </a>

          </div>


          <div className="contact-socials">

            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
              <span>↗</span>
            </a>


            <a
              href={site.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
              <span>↗</span>
            </a>

          </div>

        </div>


        {/* =================================================
            FORM
            ================================================= */}

        <div className="contact-form-wrap">

          <div className="contact-form-top">

            <div>

              <span>
                START A CONVERSATION
              </span>

              <strong>
                Tell me what you’re building.
              </strong>

            </div>

          </div>


          <form
            className="contact-form-new"
            action={FORMSPREE_ENDPOINT}
            method="POST"
            onSubmit={submit}
            noValidate
          >

            <input
              type="hidden"
              name="_subject"
              value="New portfolio enquiry"
              readOnly
            />


            {/* NAME + EMAIL */}

            <div className="contact-field-row">

              <div className="contact-field">

                <label htmlFor="contact-name">
                  <span>01</span>
                  Your name
                </label>

                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  placeholder="What should I call you?"
                  autoComplete="name"
                />

                <p
                  className="contact-error"
                  data-error="name"
                  role="alert"
                />

              </div>


              <div className="contact-field">

                <label htmlFor="contact-email">
                  <span>02</span>
                  Email address
                </label>

                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                />

                <p
                  className="contact-error"
                  data-error="email"
                  role="alert"
                />

              </div>

            </div>


            {/* PROJECT TYPE */}

            <fieldset className="contact-choice">

              <legend>
                <span>03</span>
                What are we making?
              </legend>


              <div className="contact-pills">

                {contactTypes.map(
                  (type) => (
                    <button
                      type="button"
                      className={
                        selectedType === type
                          ? 'contact-pill active'
                          : 'contact-pill'
                      }
                      key={type}
                      onClick={() =>
                        setSelectedType(type)
                      }
                    >
                      {type}
                    </button>
                  )
                )}

              </div>


              <input
                type="hidden"
                name="project_type"
                value={selectedType}
                readOnly
              />

            </fieldset>


            {/* BUDGET */}

            <fieldset className="contact-choice">

              <legend>
                <span>04</span>
                Rough budget
              </legend>


              <div className="contact-pills">

                {contactBudgets.map(
                  (budget) => (
                    <button
                      type="button"
                      className={
                        selectedBudget === budget
                          ? 'contact-pill active'
                          : 'contact-pill'
                      }
                      key={budget}
                      onClick={() =>
                        setSelectedBudget(budget)
                      }
                    >
                      {budget}
                    </button>
                  )
                )}

              </div>


              <input
                type="hidden"
                name="budget"
                value={selectedBudget}
                readOnly
              />

            </fieldset>


            {/* MESSAGE */}

            <div className="contact-field contact-message-field">

              <label htmlFor="contact-message">
                <span>05</span>
                Tell me about it
              </label>


              <textarea
                id="contact-message"
                name="message"
                rows="5"
                maxLength="1200"
                placeholder="What are you trying to build, improve or put online?"
                onInput={(e) =>
                  setMessageLength(
                    e.currentTarget.value.length
                  )
                }
              />


              <div className="message-meta">

                <p
                  className="contact-error"
                  data-error="message"
                  role="alert"
                />

                <span>
                  {messageLength} / 1200
                </span>

              </div>

            </div>


            {/* ERROR */}

            {status === 'error' && (
              <div
                className="contact-submit-error"
                role="alert"
              >

                <span>
                  !
                </span>

                <p>
                  Something went wrong while sending
                  your message. Please try again or email
                  me directly at{' '}

                  <a
                    href={`mailto:${site.email}`}
                  >
                    {site.email}
                  </a>.
                </p>

              </div>
            )}


            {/* SUBMIT */}

            <div className="contact-submit-row">

              <p>
                No pressure. No complicated brief.
                <br />
                Just start with what you have.
              </p>


              <button
                className="contact-submit"
                type="submit"
                disabled={status === 'loading'}
              >

                <span>
                  {status === 'loading'
                    ? 'Sending...'
                    : 'Send enquiry'}
                </span>

                <i>
                  ↗
                </i>

              </button>

            </div>

          </form>

        </div>

      </div>


      {/* =================================================
          BOTTOM LINE
          ================================================= */}

      <div className="contact-bottom-line">

        <span>
          AVAILABLE FOR SELECT PROJECTS
        </span>


        <div>
          <i />
          India · Remote friendly
        </div>


        <span>
          {new Date().getFullYear()}
        </span>

      </div>

    </section>
  )
}