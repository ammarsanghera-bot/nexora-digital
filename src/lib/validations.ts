import { z } from 'zod'

export const contactSchema = z.object({
  fullName: z
    .string()
    .min(2, 'Please enter your full name.')
    .max(80, 'Name is too long.'),
  email: z
    .string()
    .min(1, 'Email is required.')
    .email('Enter a valid email address.'),
  company: z.string().max(120, 'Company name is too long.').optional().or(z.literal('')),
  service: z.string().min(1, 'Please select a service.'),
  budget: z.string().min(1, 'Please select an estimated budget.'),
  details: z
    .string()
    .min(20, 'Please share at least a short project overview (20+ characters).')
    .max(2000, 'Project details are too long.'),
})

export type ContactFormValues = z.infer<typeof contactSchema>
