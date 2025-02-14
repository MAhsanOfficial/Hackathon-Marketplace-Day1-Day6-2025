export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-18'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)
export const token = assertValue(
 "skvb3NqXuayhdfyEXPbYa3ePGnZtzWENPVAsrzdx4vhKhZYKF90ld9BqImJU109rqHY9rAdUjgzFojdkG8EglM1qCqvrqoog7bfyEOvcjCySZOTFSCcUR1X5s6ICISQSGBEyq5zvjzMAG15eYgiYjkbA55rS4fBMyRALdr7WNEKk7SYDDE6R",
  'Missing environment variable: SANITY_API_TOKEN'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
