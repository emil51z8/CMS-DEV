# Umbraco installation og opsætning

<h1>Introduktion</h1>
Denne guide viser hvordan man opsætter en simpel hjemmeside i Umbraco med:
- Forside
- Menu
- Undersider
- Team-side med billeder
- Kontaktformular

## Installation

1. Installer .NET SDK
2. Opret projekt:
   dotnet new umbraco -n MySite
3. Kør projekt:
   dotnet run
4. Åbn browser:
   https://localhost:xxxx

5. Opsæt docker SQL server:
                                docker run -e "ACCEPT_EULA=Y" -e "SA_PASSWORD=ditPassword123!" -p 1433:1433 -d mcr.microsoft.com/mssql/server:2019-latest

6. Installer VS code extension MSSQL fra microsoft

7. Tilslut SQL server med oplysninger:
    - Server name: localhost
    - User Name: sa
    - Password: det password du skrev i docker opsætningen

    - opret ny query: CTRL+Shift+p og skriv CREATE DATABASE umbraco;
    - edit connection og skift databasenavnet fra master til umbraco

 