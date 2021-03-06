const CHECK = '✔'
const CROSS = '✘'
const WARNING = '⚠'
const SPACE = '\u00a0'

/**
 * Adds a `✔` prefix to the given `message`.
 *
 * @category String
 */
export function formatSuccessMessage(message: string): string {
  return `${CHECK} ${SPACE} ${message}`
}

/**
 * Adds a `✘` prefix to the given `message`.
 *
 * @category String
 */
export function formatErrorMessage(message: string): string {
  return `${CROSS} ${SPACE} ${message}`
}

/**
 * Adds a `⚠` prefix to the given `message`.
 *
 * @category String
 */
export function formatWarningMessage(message: string): string {
  return `${WARNING} ${SPACE} ${message}`
}

/**
 * Returns `singular` if `number` is exactly `1`, else returns `plural`.
 * `plural` defaults to `${singular}s` if not specified.
 *
 * @category String
 */
export function pluralize(
  number: number,
  singular: string,
  plural?: string
): string {
  if (number === 1) {
    return singular
  }
  return typeof plural === 'undefined' ? `${singular}s` : plural
}
