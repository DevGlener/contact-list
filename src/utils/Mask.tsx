import IMask from 'imask'

export function formatPhone(value: number | string) {
  return IMask.pipe(String(value), { mask: '(00) 00000-0000' })
}
