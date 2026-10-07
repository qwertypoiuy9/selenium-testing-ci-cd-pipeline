FROM eclipse-temurin:21-jre

WORKDIR /app

COPY target/minicollege-1.0.0.jar app.jar

EXPOSE 8081

ENTRYPOINT ["java", "-jar", "app.jar", "--server.port=8081", "--server.address=0.0.0.0"]
