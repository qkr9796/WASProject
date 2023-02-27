package com.qkr9796.data.member;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MemberRepository extends JpaRepository<Member, Long> {

    Member findByCreateKey(String key);

    Member findByUserid(String userid);

}

