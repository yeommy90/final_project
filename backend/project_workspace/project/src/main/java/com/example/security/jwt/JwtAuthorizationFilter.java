package com.example.security.jwt;


import java.io.IOException;


import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;


import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.example.member.dao.MemberDAO;
import com.example.member.dto.MemberDTO;
import com.example.security.service.PrincipalDetails;

public class JwtAuthorizationFilter extends BasicAuthenticationFilter{
	private  MemberDAO userRepository;	


	public JwtAuthorizationFilter(AuthenticationManager authManager,MemberDAO userRepository ) {
		super(authManager);
		this.userRepository = userRepository;
	}

	//스프링 시큐리티 config 파일에서  configure(HttpSecurity http) 메서드에서 httpBasic()을 enable설정하여 BasicAuthenticationFilter을 사용할 수 있다 . 
	//권한이나 인가가 필요한 주소 요청이 있을 때 해당 필터를 반드시 실행하고 권한이나 인가가 필요하지 않으면 실행하지 않는다.
	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain)
			throws IOException, ServletException {		
		System.out.println("인가가 필요한 주소 요청이 실행되는 메소드 : doFilterInternal()");

		//1. 권한이나 인증이 필요한 요청이 전달된다.
		String jwtHeader = request.getHeader("Authorization"); //Header에 들어 있는 Authorization을 꺼낸다.
		System.out.println("jwtHeader :" + jwtHeader); 

		//2. Header 확인
		//Header가 비어 있거나, 비어있지 않지만 Bearer 방식이 아니면 반환한다.
		//JWT 토큰 검증을 해서 정상적인 사용자인지 확인=> 정상적인 요청이 아닌경우
		if(jwtHeader==null || !jwtHeader.startsWith("Bearer")) {
			chain.doFilter(request, response);
			return;
		}

		//3. JWT토큰을 검증해서 정상적인 사용자인지, 권한이 맞는지 확인
		//JWT 토큰 검증을 해서 정상적인 사용자인지 확인=> 정상적인 요청인 경우
		String jwtToken = request.getHeader("Authorization").replace("Bearer ","");
		String name = JWT.require(Algorithm.HMAC512("mySecurityCos")).build().verify(jwtToken).getClaim("email").asString();
		System.out.println("name:" + name);

		//서명이 정상적으로 처리되었으면
		if(name!=null) {
			//spring security가 수행해주는 권한 처리를 위해 아래와 같이 토큰을 만들어 Authentication객체를 강제로 만들고 세션에 넣어준다.
			MemberDTO user = userRepository.selectByEmail(name);
			PrincipalDetails principalDetails = new PrincipalDetails(user);

			Authentication authentication = new UsernamePasswordAuthenticationToken(principalDetails, null, principalDetails.getAuthorities());

			//강제로 시큐리티의 세션에 접근하여 값 저장
			SecurityContextHolder.getContext().setAuthentication(authentication);			
		}

		chain.doFilter(request, response);
	}
}//end class
