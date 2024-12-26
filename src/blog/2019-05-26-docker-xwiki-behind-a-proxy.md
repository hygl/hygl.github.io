---
categories: [docker, wiki]
---
Since working at the [Zentrum VirtUOS](https://www.virtuos.uni-osnabrueck.de/zentrum_fuer_digitale_lehre_campus_management_und_hochschuldidaktik.html) I allways have a heart for wikis. I am at the moment looking for a knowledge base to manage projects in conjunktion with [jira](https://www.atlassian.com/software/jira) for the whole projekt lifecycle from demands and requirement engeneering till all tickets are solved. At the momemnt [xwiki](https://www.xwiki.org/xwiki/bin/view/Main/WebHome) looks like a promising soltuion. 

If yout want to run xwiki behind a http proxy, you have to add the following line:

```diff
version: '2'
networks:
  bridge:
    driver: bridge
services:
  web:
    image: "xwiki:lts-mysql-tomcat"
    container_name: xwiki-mysql-tomcat-web
    depends_on:
      - db
    ports:
      - "8080:8080"
    environment:
      - DB_USER=xwiki
      - DB_PASSWORD=xwiki
      - DB_HOST=xwiki-mysql-db
+      - JAVA_OPTS=-Dhttp.proxyHost=proxy.mycompany.com -Dhttp.proxyPort=7777 -Dhttps.proxyHost=proxy.mycompany.com -Dhttps.proxyPort=7777
    volumes:
      - xwiki-data:/usr/local/xwiki
    networks:
      - bridge
  db:
    image: "mysql:5.7"
    container_name: xwiki-mysql-db
    volumes:
      - ./xwiki.cnf:/etc/mysql/conf.d/xwiki.cnf
      - mysql-data:/var/lib/mysql
    environment:
      - MYSQL_ROOT_PASSWORD=xwiki
      - MYSQL_USER=xwiki
      - MYSQL_PASSWORD=xwiki
      - MYSQL_DATABASE=xwiki
    networks:
      - bridge
volumes:
  mysql-data: {}
  xwiki-data: {}

```