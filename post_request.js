import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
  vus: 2,
  duration: '30s',
};
const url = 'https://quickpizza.grafana.com/api/post';

const payload = JSON.stringify({
  name: 'Tom',
});

const params = {
  headers: {
    'Content-Type': 'application/json',
  },
};

export default function() {
  let res = http.post(url,payload,params);
  check(res, { "status is 200": (res) => res.status === 200,
  'response body is not empty': (r) => r.body.length > 0,
  });
  sleep(1);
}
