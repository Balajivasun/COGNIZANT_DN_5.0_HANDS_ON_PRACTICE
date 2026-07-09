package org.example.util;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.stereotype.Component;
import javax.crypto.spec.SecretKeySpec;
import java.nio.charset.StandardCharsets;
import java.security.Key;
import java.util.Date;
@Component
public class JwtUtil {
    private static final String SECRET =
            "cognizant_java_fse_training_secret_key_2026";
    private final Key key =
            new SecretKeySpec(
                    SECRET.getBytes(StandardCharsets.UTF_8),
                    SignatureAlgorithm.HS256.getJcaName());
    public String generateToken(String username) {
        return Jwts.builder()
                .subject(username)
                .issuedAt(new Date())
                .expiration(new Date(System.currentTimeMillis() + 3600000))
                .signWith(key)
                .compact();
    }
}