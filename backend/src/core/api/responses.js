export function error (response, message, code = 500, data = null) {
  response.status(code).json({
    status: 'error',
    message,
    results: data
  })
}

export function success (response, message, data = null, code = 200) {
  response.status(code).json({
    status: 'success',
    message,
    results: data
  })
}
export function successNew (response, message, data = null, code = 200) {
  response.status(code).send({
    status: 'success',
    message,
    results: data
  })
}
