import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { CheckCircle2, Loader2 } from 'lucide-react'
import {
  contactSchema,
  type ContactFormValues,
} from '../../lib/validations'
import { budgetOptions, serviceOptions } from '../../data/content'
import { cn } from '../../lib/utils'

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: '',
      email: '',
      company: '',
      service: '',
      budget: '',
      details: '',
    },
  })

  const onSubmit = async (_data: ContactFormValues) => {
    // Mock frontend submission only — no email is sent without a backend/form service.
    await new Promise((resolve) => setTimeout(resolve, 900))
    setSubmitted(true)
    reset()
  }

  if (submitted) {
    return (
      <div
        className="surface-card flex flex-col items-start gap-4 p-8"
        role="status"
        aria-live="polite"
      >
        <CheckCircle2 className="text-nexora-accent" size={32} aria-hidden="true" />
        <h3 className="font-display text-2xl font-semibold text-white">
          Message captured locally
        </h3>
        <p className="text-sm leading-relaxed text-nexora-muted">
          This is a frontend demo confirmation. No email was sent. Connect a form
          service or backend before using this form in production.
        </p>
        <button
          type="button"
          className="btn-secondary"
          onClick={() => setSubmitted(false)}
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="surface-card space-y-5 p-6 sm:p-8"
      noValidate
    >
      <p className="text-sm text-nexora-muted">
        Fields marked with <span className="text-nexora-accent">*</span> are
        required. Submission is simulated for this portfolio demo.
      </p>

      <div>
        <label htmlFor="fullName" className="label">
          Full Name <span className="text-nexora-accent">*</span>
        </label>
        <input
          id="fullName"
          type="text"
          autoComplete="name"
          className={cn('field', errors.fullName && 'field-error')}
          aria-invalid={!!errors.fullName}
          aria-describedby={errors.fullName ? 'fullName-error' : undefined}
          {...register('fullName')}
        />
        {errors.fullName ? (
          <p id="fullName-error" className="mt-1.5 text-sm text-red-400">
            {errors.fullName.message}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor="email" className="label">
          Email Address <span className="text-nexora-accent">*</span>
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          className={cn('field', errors.email && 'field-error')}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? 'email-error' : undefined}
          {...register('email')}
        />
        {errors.email ? (
          <p id="email-error" className="mt-1.5 text-sm text-red-400">
            {errors.email.message}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor="company" className="label">
          Company / Business
        </label>
        <input
          id="company"
          type="text"
          autoComplete="organization"
          className={cn('field', errors.company && 'field-error')}
          {...register('company')}
        />
        {errors.company ? (
          <p className="mt-1.5 text-sm text-red-400">{errors.company.message}</p>
        ) : null}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="service" className="label">
            Service Required <span className="text-nexora-accent">*</span>
          </label>
          <select
            id="service"
            className={cn('field', errors.service && 'field-error')}
            aria-invalid={!!errors.service}
            aria-describedby={errors.service ? 'service-error' : undefined}
            {...register('service')}
          >
            <option value="">Select a service</option>
            {serviceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.service ? (
            <p id="service-error" className="mt-1.5 text-sm text-red-400">
              {errors.service.message}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="budget" className="label">
            Estimated Budget <span className="text-nexora-accent">*</span>
          </label>
          <select
            id="budget"
            className={cn('field', errors.budget && 'field-error')}
            aria-invalid={!!errors.budget}
            aria-describedby={errors.budget ? 'budget-error' : undefined}
            {...register('budget')}
          >
            <option value="">Select a range</option>
            {budgetOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.budget ? (
            <p id="budget-error" className="mt-1.5 text-sm text-red-400">
              {errors.budget.message}
            </p>
          ) : null}
        </div>
      </div>

      <div>
        <label htmlFor="details" className="label">
          Project Details <span className="text-nexora-accent">*</span>
        </label>
        <textarea
          id="details"
          rows={5}
          className={cn('field resize-y', errors.details && 'field-error')}
          aria-invalid={!!errors.details}
          aria-describedby={errors.details ? 'details-error' : undefined}
          {...register('details')}
        />
        {errors.details ? (
          <p id="details-error" className="mt-1.5 text-sm text-red-400">
            {errors.details.message}
          </p>
        ) : null}
      </div>

      <button type="submit" className="btn-primary w-full sm:w-auto" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 size={16} className="animate-spin" aria-hidden="true" />
            Sending…
          </>
        ) : (
          'Submit inquiry'
        )}
      </button>
    </form>
  )
}
