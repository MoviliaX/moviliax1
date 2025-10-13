# Política de Seguridad de MoviliaX

## 🔒 Compromiso con la Seguridad

La seguridad de MoviliaX y de nuestros usuarios es nuestra máxima prioridad. Agradecemos a la comunidad de seguridad por ayudarnos a mantener MoviliaX seguro para todos.

---

## 📋 Versiones Soportadas

Actualmente, proporcionamos actualizaciones de seguridad para las siguientes versiones:

| Versión | Soporte          | Estado         |
| ------- | ---------------- | -------------- |
| 0.3.x   | ✅ Soportada     | Activa         |
| 0.2.x   | ✅ Soportada     | Mantenimiento  |
| 0.1.x   | ⚠️ Soporte limitado | Legacy      |
| < 0.1   | ❌ No soportada  | Descontinuada  |

**Nota**: Recomendamos siempre usar la última versión disponible.

---

## 🐛 Reportar una Vulnerabilidad

### Proceso de Reporte

Si descubres una vulnerabilidad de seguridad, por favor **NO** la hagas pública. En su lugar:

#### 1️⃣ **Reporte Confidencial**

Envía un email a:
📧 **security@moviliax.com**

#### 2️⃣ **Información a Incluir**

Por favor incluye la siguiente información en tu reporte:

- **Tipo de vulnerabilidad** (XSS, SQL injection, CSRF, etc.)
- **Ubicación** (URL, archivo, línea de código)
- **Descripción detallada** del problema
- **Pasos para reproducir** el problema
- **Impacto potencial** de la vulnerabilidad
- **Posible solución** (si la tienes)
- **Tu información de contacto**

**Template de Reporte:**

```markdown
**Tipo de Vulnerabilidad**
[XSS / SQLi / CSRF / etc.]

**Severidad**
[Crítica / Alta / Media / Baja]

**Ubicación**
URL: https://moviliaxlat.github.io/RevistaMoviliaX/...
Archivo: docs/...
Línea: ...

**Descripción**
Descripción detallada de la vulnerabilidad.

**Pasos para Reproducir**
1. Navega a...
2. Ingresa...
3. Observa...

**Impacto**
Qué podría hacer un atacante con esta vulnerabilidad.

**Evidencia**
Screenshots, videos, o logs (si aplica).

**Recomendación**
Posible solución o mitigación.

**Información de Contacto**
Nombre:
Email:
```

#### 3️⃣ **¿Qué Esperar?**

- **Confirmación inicial**: 24-48 horas
- **Evaluación**: 3-5 días hábiles
- **Actualización de progreso**: Cada semana
- **Resolución**: Depende de la severidad

---

## 🚨 Severidad de Vulnerabilidades

Clasificamos las vulnerabilidades usando el sistema CVSS:

### 🔴 **Crítica (9.0-10.0)**
- Ejecución remota de código
- Compromiso completo del sistema
- Fuga masiva de datos
- **Tiempo de respuesta**: 24 horas
- **Tiempo de fix**: 48-72 horas

### 🟠 **Alta (7.0-8.9)**
- Ejecución de código limitada
- Acceso no autorizado a datos sensibles
- Bypass de autenticación
- **Tiempo de respuesta**: 48 horas
- **Tiempo de fix**: 7 días

### 🟡 **Media (4.0-6.9)**
- XSS
- CSRF
- Fuga de información limitada
- **Tiempo de respuesta**: 5 días
- **Tiempo de fix**: 30 días

### 🟢 **Baja (0.1-3.9)**
- Problemas de configuración
- Divulgación de información menor
- **Tiempo de respuesta**: 7 días
- **Tiempo de fix**: 90 días

---

## 🛡️ Medidas de Seguridad Implementadas

### Sitio Web

- ✅ HTTPS en todos los ambientes
- ✅ Content Security Policy (CSP)
- ✅ X-Frame-Options: DENY
- ✅ X-Content-Type-Options: nosniff
- ✅ X-XSS-Protection activado
- ✅ Validación de entrada en formularios
- ✅ Escape de salida de datos
- ✅ Protección contra CSRF
- ✅ Rate limiting en APIs

### Código

- ✅ Revisión de código obligatoria
- ✅ Análisis estático de seguridad
- ✅ Dependencias actualizadas regularmente
- ✅ Secrets no commiteados
- ✅ .gitignore comprehensivo

### Infraestructura

- ✅ Deploy automatizado desde GitHub
- ✅ Backups regulares
- ✅ Logging y monitoreo
- ✅ Acceso basado en roles

---

## ❌ Fuera de Alcance

Las siguientes vulnerabilidades **NO** califican para reportes:

- ❌ Ataques de ingeniería social
- ❌ DoS/DDoS
- ❌ Spam o phishing usando el dominio
- ❌ Problemas en navegadores obsoletos (IE 11 o anteriores)
- ❌ Vulnerabilidades teóricas sin PoC
- ❌ Problemas reportados públicamente sin confirmación
- ❌ Vulnerabilidades de terceros (reportar al proveedor)
- ❌ SSL/TLS issues del proveedor de hosting
- ❌ Missing security headers sin impacto demostrable
- ❌ Descriptive error messages sin información sensible

---

## 🏆 Programa de Reconocimiento

Aunque actualmente no ofrecemos recompensas monetarias (bug bounty), reconocemos a los investigadores de seguridad:

### Hall of Fame

Los investigadores que reporten vulnerabilidades válidas serán reconocidos en nuestro:

- 📜 **Security Hall of Fame** en este archivo
- 🌟 **Mención en changelog** y release notes
- 🎓 **Certificado de reconocimiento** (opcional)
- 📱 **Mención en redes sociales** (con permiso)
- 🎁 **Swag de MoviliaX** (cuando esté disponible)

### Investigadores Reconocidos

*Actualmente ningún investigador ha reportado vulnerabilidades*

---

## 📝 Divulgación Responsable

### Nuestro Compromiso

- ✅ Responderemos a tu reporte dentro de 48 horas
- ✅ Te mantendremos informado del progreso
- ✅ Te daremos crédito por el descubrimiento (si lo deseas)
- ✅ No tomaremos acciones legales contra investigadores de buena fe

### Tu Compromiso

- ✅ Reporta vulnerabilidades de forma confidencial
- ✅ Da tiempo razonable para corregir antes de divulgar públicamente
- ✅ No accedas a datos de otros usuarios
- ✅ No causes daño o degradación del servicio
- ✅ No modifiques o destruyas datos

### Timeline de Divulgación

1. **Día 0**: Reporte recibido
2. **Día 2**: Confirmación enviada
3. **Día 7**: Evaluación completada
4. **Día 30-90**: Fix implementado (depende de severidad)
5. **Día 90+**: Divulgación pública coordinada

---

## 🔐 Mejores Prácticas para Usuarios

### Para Visitantes del Sitio

- ✅ Mantén tu navegador actualizado
- ✅ Usa contraseñas fuertes y únicas
- ✅ Habilita autenticación de dos factores cuando esté disponible
- ✅ Verifica la URL antes de ingresar datos sensibles

### Para Colaboradores

- ✅ Nunca commitees secrets (API keys, passwords)
- ✅ Usa `.env` para variables sensibles
- ✅ Revisa dependencias regularmente
- ✅ Usa `npm audit` o `yarn audit`
- ✅ Mantén tu fork actualizado

---

## 📚 Recursos de Seguridad

### Guías y Referencias

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [OWASP Web Security Testing Guide](https://owasp.org/www-project-web-security-testing-guide/)
- [Mozilla Web Security Guidelines](https://infosec.mozilla.org/guidelines/web_security)
- [Google Web Security Guide](https://web.dev/security/)

### Herramientas Recomendadas

- [OWASP ZAP](https://www.zaproxy.org/) - Scanner de seguridad
- [npm audit](https://docs.npmjs.com/cli/v8/commands/npm-audit) - Auditoría de dependencias
- [Snyk](https://snyk.io/) - Análisis de vulnerabilidades

---

## 📞 Contacto de Seguridad

### Equipo de Seguridad

- **Email principal**: contactomoviliax@gmail.com
- **Email alternativo**: contactomoviliax@gmail.com
- **PGP Key**: [Disponible próximamente]

### Respuesta de Emergencia

Para vulnerabilidades críticas activamente explotadas:

📞 **Hotline de Emergencia**: [Disponible próximamente]

---

## 📜 Política de Cookies y Privacidad

Consulta nuestra [Política de Privacidad](PRIVACY.md) para más información sobre cómo manejamos datos personales.

---

## 🔄 Actualizaciones de Esta Política

Esta política de seguridad puede ser actualizada ocasionalmente. Los cambios significativos serán comunicados a través de:

- Changelog del proyecto
- Notificación en el sitio web
- Email a investigadores registrados

**Última actualización**: Octubre 2024  
**Versión**: 1.0

---

## 🙏 Agradecimientos

Agradecemos a todos los investigadores de seguridad que ayudan a mantener MoviliaX seguro. La seguridad es un esfuerzo comunitario.

---

**¿Preguntas sobre seguridad?**  
Contacta a security@moviliax.com

🔒 **Juntos mantenemos MoviliaX seguro para todos.** 🚀
