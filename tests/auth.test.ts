import { expect, test } from 'vitest'

test('POST /auth/login with valid credentials', async () => {
  const response = await fetch('http://localhost:3001/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email: 'admin@example.com', password: 'password' }),
  })
  expect(response.status).toBe(200)
});

test('POST /auth/login with invalid credentials', async () => {
  const response = await fetch('http://localhost:3001/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email: 'invalid@example.com', password: 'invalid' }),
  })
  expect(response.status).toBe(401)
});
