import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}
}

/**
 * 구현해야 할 기능
 *
 * 1) registerWithEmail
 *    - email, nickname, password를 입력받고 사용사를 생성.
 *    - 생성이 완료되면 accessToken과 refreshToken을 반환한다.
 *    - 회원가입 후 다시 로그인이 아니라 바로 로그인 되어 있게 구현
 *    - 회원가입 후 다시 로그인은 쓸데없는 과정임.
 *
 * 2) loginWithEmail
 *    - email, password를 입력하면 사용자 검증을 진행.
 *    - 검증이 완료되면 accessToken과 refreshToken을 반환.
 *
 * 3) loginUser
 *    - (1)과 (2)에서 필요한 accessToken과 refreshToken을 반환하는 로직.
 *    - 중복된 코드를 방지하려고 함.
 *
 * 4) signToken
 *    - (3)에서 필요한 accessToken과 refreshToken을 sign하는 로직
 *
 * 5) authenticateWithEmailAndPassword
 *    - (2)에서 로그인을 진행할때 필요한 기본적인 검증 진행
 *      1. 사용자가 존재하는지 확인 (email)
 *      2. 비밀번호가 맞는지 확인
 *      3. 모두 통과되면 찾은 사용자 정보 반환
 *      4. loginWithEmail에서 반환된 데이터를 기반으로 토큰 생성
 */
