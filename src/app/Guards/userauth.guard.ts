import { CanActivateFn, Router } from '@angular/router';

export const userauthGuard: CanActivateFn = (route, state) =>
{
  if (localStorage.getItem('user'))
  {
    return true;
  }

  else
  {
    alert('You should login first..')
     window.location.href = '/userlogin';
    return false;
  }
};
