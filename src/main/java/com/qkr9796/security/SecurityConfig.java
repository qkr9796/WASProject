package com.qkr9796.security;



import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public PasswordEncoder getPasswordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public UserDetailsService customUserDetailsService(){
        return new CustomUserDetailsService();
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                .authorizeHttpRequests(authorize ->authorize
                        .requestMatchers("/passed").hasRole("user")
                        .anyRequest().permitAll())
                .csrf().disable()

                .formLogin()
                .loginPage("/login")
                .loginProcessingUrl("/loginreq")
                .defaultSuccessUrl("/");


        return http.build();

    }

/*
    @Bean
    public InMemoryUserDetailsManager memoryUserDetails(){
        UserDetails admin = User.builder()
                .username("abc")
                .password(getPasswordEncoder().encode("11111"))
                .roles("user")
                .build();
        return new InMemoryUserDetailsManager(admin);
    }*/


}
