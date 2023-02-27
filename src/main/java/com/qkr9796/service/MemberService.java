package com.qkr9796.service;


import com.qkr9796.data.member.Member;
import com.qkr9796.data.member.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class MemberService {

    private final PasswordEncoder passwordEncoder;

    private final MemberRepository memberRepository;


    public void createKey(String key) {
        memberRepository.save(new Member(key));
    }

    public Member registerMember(String key, String userid, String password, String role) {
        Member member = memberRepository.findByCreateKey(key);
        if(member == null)
            return null;
        else if(member.getUserid() != null)
            return null;
        else{
            memberRepository.save(member.allocate(userid, passwordEncoder.encode(password), role));
            return member;
        }
    }

    public UserDetails getUserDetails(String userid) {
        Member member = memberRepository.findByUserid(userid);
        if(member == null)
            throw new UsernameNotFoundException(userid);
        else
            return User.builder()
                    .username(member.getUserid())
                    .password(member.getPassword())
                    .roles(member.getRoles())
                    .build();
    }


}
