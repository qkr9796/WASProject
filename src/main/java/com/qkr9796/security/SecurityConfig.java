package com.qkr9796.security;



import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
@EnableMethodSecurity
public class SecurityConfig {


    @Bean
    public PasswordEncoder getPasswordEncoder() {
        return new BCryptPasswordEncoder();
    }


    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                //.authorizeHttpRequests(authorize ->authorize
                  //      .requestMatchers("/passed").hasRole("user")
                    //    .anyRequest().permitAll())
                .csrf().disable()


                .formLogin(formLogin -> formLogin
                        .loginProcessingUrl("/loginreq")
                        .loginPage("/login")
                        .failureUrl("/login?fail=true")
                        .defaultSuccessUrl("/passed", true))

                .logout(logout-> logout
                        .logoutUrl("/logout")
                        .logoutSuccessUrl("/after_logout"));



        return http.build();

    }


}
