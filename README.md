A feladat:

Írj egy tisztán front-end (react/angular/vue) JavaScript alkalmazást, amely filmek keresését segíti!

Követelmények:

●  Tagolt, olvasható, tiszta kód (nem 1 fájl), a generált HTML kód strukturált

●  Angol nyelv (UI és kód egyaránt)

●  Külső library-ket használhatsz (angular, react, ramda, moment, jquery, stb), de konkrétan az IMDB-s és Wikipedia-s kéréseket és azok feldolgozását elrejtő library-ket nem

●  A design másodlagos, csak minimális legyen (elrendezés, margók, címek kiemelése, stb)

Működés:

A UI-on legyen egy filmcím keresőmező, enterre/gombnyomásra az IMDB-ről egy REST kéréssel letölti a keresési találatokat

A találatokat és néhány adatukat listában megjeleníti, címek kattinthatóak 

Egy címre kattintva az app megpróbálja megtalálni a kapcsolódó angol wikipedia oldalt (REST kéréssel), majd egy detail panelen megjeleníteni annak összefoglalóját (pl. első bekezdés), az IMDB-s és wikipedia-s új ablakban nyíló kattintható linkkel együtt

Bónusz: Kétállapotú kereső; a film két linkje mellett egy “kapcsolódó” gomb: ennek hatására a filmlista átvált keresési találatokból a kiválasztott filmhez kapcsolódó filmek (related) listájára

Szintek:

1, Működő webapp    
2, A CSS stylus-szal legyen definiálva (less, sass, stb)      
3, Spinner, aka REST hívások közben (egyszerű) progress indikátor      
4, Bónusz #1: futtatás és tesztelés taskokra automatizálás      
5, Bónusz #2: Material-UI-os library használata, Material-UI-os kinézet      