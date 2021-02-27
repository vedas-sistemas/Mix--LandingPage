const characterRemove = (value) => {
  const array = value.split(' ')

  value = array
    .map((letra) =>
      letra
        .normalize('NFD')
        .replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g, '')
        .toLocaleLowerCase()
    )
    .join(' ')

  return value
}
const errorMessage = (message) => {
  if (message) {
    if (message.response && message.response.data[0])
      return message.response.data[0].message
    else if (message.response && message.response.data.message)
      return message.response.data.message
    return message.response ? message.response.data : message
  }
  return 'Erro'
}
const validateEmail = (email) => {
  var tester = /^[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/

  if (!email) return false

  var emailParts = email.split('@')

  if (emailParts.length !== 2) return false

  var account = emailParts[0]
  var address = emailParts[1]

  if (account.length > 64) return false
  else if (address.length > 255) return false

  var domainParts = address.split('.')
  if (
    domainParts.some(function (part) {
      return part.length > 63
    })
  )
    return false

  if (!tester.test(email)) return false

  return true
}
const validateCNPJ = (value) => {
  if (!value) return false
  // Aceita receber o valor como string, número ou array com todos os dígitos
  const validTypes =
    typeof value === 'string' || Number.isInteger(value) || Array.isArray(value)

  // Elimina valor em formato inválido
  if (!validTypes) return false

  // Guarda um array com todos os dígitos do valor
  const match = value.toString().match(/\d/g)
  const numbers = Array.isArray(match) ? match.map(Number) : []

  // Valida a quantidade de dígitos
  if (numbers.length !== 14) return false

  // Elimina inválidos com todos os dígitos iguais
  const items = [...new Set(numbers)]
  if (items.length === 1) return false

  // Cálculo validador
  const calc = (x) => {
    const slice = numbers.slice(0, x)
    let factor = x - 7
    let sum = 0

    // eslint-disable-next-line no-plusplus
    for (let i = x; i >= 1; i--) {
      const n = slice[x - i]
      // eslint-disable-next-line no-plusplus
      sum += n * factor--
      if (factor < 2) factor = 9
    }

    const result = 11 - (sum % 11)

    return result > 9 ? 0 : result
  }

  // Separa os 2 últimos dígitos de verificadores
  const digits = numbers.slice(12)

  // Valida 1o. dígito verificador
  const digit0 = calc(12)
  if (digit0 !== digits[0]) return false

  // Valida 2o. dígito verificador
  const digit1 = calc(13)
  return digit1 === digits[1]
}
export { errorMessage, validateEmail, validateCNPJ, characterRemove }
