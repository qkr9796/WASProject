package com.qkr9796.security;

import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class CustomUserDetailsService implements UserDetailsService {
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        if(username.equals("abc")){
            return User.builder()
                    .username("abc")
                    .password(new BCryptPasswordEncoder().encode("11111"))
                    .roles("user")
                    .build();
        }
        throw new UsernameNotFoundException(username);
    }
}
