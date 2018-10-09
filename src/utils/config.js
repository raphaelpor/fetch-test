export default function createConfig(method, {
  body,
  cache = 'default',
  credentials,
  headers = { 'Content-Type': 'application/json' },
  integrity,
  mode = 'cors',
  redirect,
  referrer,
  referrerPolicy,
  signal,
} = {}) {
  let data;

  if (body) {
    data = JSON.stringify(body);
  }

  const result = {
    body: data,
    cache,
    credentials,
    headers,
    method,
    mode,
    redirect,
    referrer,
    signal,
  };

  if (integrity) {
    result.integrity = integrity;
  }

  if (referrerPolicy) {
    result.referrerPolicy = referrerPolicy;
  }

  return result;
}
