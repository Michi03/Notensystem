# Notensystem
Ein kleines Webprojekt, was mit der Verwaltung von Schulnoten helfen soll

## Server lokal starten
Um das Projekt lokal laufen zu lassen, muss zunächst der Code heruntegeladen werden. Das geht entweder als ZIP oder über git. Ausführliche Anleitungen zu git gibt es z.B. [hier](https://www.git-scm.com/book/de/v2/Erste-Schritte-Was-ist-Versionsverwaltung%3F).

Bei dem Projekt handelt es sich um ein NodeJS Server (mehr Infos dazu [hier](https://nodejs.org/de)), der das Express Framework benutzt (siehe [hier](https://expressjs.com/de/)). Die Installation geht aber ganz einfach, auch ohne zu wissen, was das überhaupt ist über NPM, den Node Package Manager. Eine Anleitung, wie man das unter Windows installiert, findet man z.B. [hier](https://www.helmbergers.com/node-js-und-npm-installieren/#:~:text=PowerShell%20and%20select%20Run%20as%20Administrator.%20Set-ExecutionPolicy%20Unrestricted,this%20upgrader%20tool%2C%20run%3A%20npm%20install%20-g%20npm-windows-upgrade).

Sobald NPM installiert ist, sollte man mit einem Konsolenfenster zu der lokalen Kopie dieses Ordners auf seinem Rechner navigieren und das Projekt über den Befehl `npm install` installieren können. Ist die Installation erfolgreich, lässt sich der Server mittels `npm start` starten und im Browser über die Adresse http://localhost:3000/ aufrufen.
