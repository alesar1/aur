# Maintainer: By_JumperX4 <byjumperx4-aur@protonmail.com>. You can also contact me on Discord: By_JumperX4#1007
pkgname=firefox-nightly-latest-fr
pkgver=80.0a1.2020.07.21
pkgrel=1
pkgdesc="Official latest french tarball of Firefox Nightly. Reinstall package if firefox is outdated and the PKGBUILD's version is not updated yet"
arch=("x86_64")
url="https://www.mozilla.org/firefox/"
license=(MPL GPL LGPL)
depends=(gtk3 libxt mime-types dbus-glib ffmpeg nspr ttf-font libpulse)
makedepends=(curl tar)         
optdepends=('networkmanager: Location detection via available WiFi networks'
			'libnotify: Notification integration'
			'pulseaudio: Audio support'
            'speech-dispatcher: Text-to-Speech'
            'hunspell-en_US: Spell checking, American English'
            'hunspell-fr: Spell checking, French')
provides=('firefox')
prepare() {
    curl -L -o firefox-nightly-latest-fr.tar.bz2 "https://download.mozilla.org/?product=firefox-nightly-latest-l10n-ssl&os=linux64&lang=fr"
    curl -L -o firefox-nightly.png "https://www.mozilla.org/media/protocol/img/logos/firefox/browser/nightly/logo-lg.c3968c040d6d.png"
    echo "[Desktop Entry]
    Version=1.0
    Name=Firefox Nightly
    GenericName=Web Browser
    GenericName[ar]=متصفح ويب
    GenericName[ast]=Restolador Web
    GenericName[bn]=ওয়েব ব্রাউজার
    GenericName[ca]=Navegador web
    GenericName[cs]=Webový prohlížeč
    GenericName[da]=Webbrowser
    GenericName[de]=Webbrowser
    GenericName[el]=Περιηγητής διαδικτύου
    GenericName[es]=Navegador web
    GenericName[et]=Veebibrauser
    GenericName[fa]=مرورگر اینترنتی
    GenericName[fi]=WWW-selain
    GenericName[fr]=Navigateur Web
    GenericName[gl]=Navegador Web
    GenericName[he]=דפדפן אינטרנט
    GenericName[hr]=Web preglednik
    GenericName[hu]=Webböngésző
    GenericName[it]=Browser Web
    GenericName[ja]=ウェブ・ブラウザ
    GenericName[ko]=웹 브라우저
    GenericName[ku]=Geroka torê
    GenericName[lt]=Interneto naršyklė
    GenericName[nb]=Nettleser
    GenericName[nl]=Webbrowser
    GenericName[nn]=Nettlesar
    GenericName[no]=Nettleser
    GenericName[pl]=Przeglądarka WWW
    GenericName[pt]=Navegador Web
    GenericName[pt_BR]=Navegador Web
    GenericName[ro]=Navigator Internet
    GenericName[ru]=Веб-браузер
    GenericName[sk]=Internetový prehliadač
    GenericName[sl]=Spletni brskalnik
    GenericName[sv]=Webbläsare
    GenericName[tr]=Web Tarayıcı
    GenericName[ug]=توركۆرگۈ
    GenericName[uk]=Веб-браузер
    GenericName[vi]=Trình duyệt Web
    GenericName[zh_CN]=网络浏览器
    GenericName[zh_TW]=網路瀏覽器
    Comment=Browse the Web
    Comment[ar]=تصفح الشبكة العنكبوتية العالمية
    Comment[ast]=Restola pela Rede
    Comment[bn]=ইন্টারনেট ব্রাউজ করুন
    Comment[ca]=Navegueu per el web
    Comment[cs]=Prohlížení stránek World Wide Webu
    Comment[da]=Surf på internettet
    Comment[de]=Im Internet surfen
    Comment[el]=Μπορείτε να περιηγηθείτε στο διαδίκτυο (Web)
    Comment[es]=Navegue por la web
    Comment[et]=Lehitse veebi
    Comment[fa]=صفحات شبکه جهانی اینترنت را مرور نمایید
    Comment[fi]=Selaa Internetin WWW-sivuja
    Comment[fr]=Naviguer sur le Web
    Comment[gl]=Navegar pola rede
    Comment[he]=גלישה ברחבי האינטרנט
    Comment[hr]=Pretražite web
    Comment[hu]=A világháló böngészése
    Comment[it]=Esplora il web
    Comment[ja]=ウェブを閲覧します
    Comment[ko]=웹을 돌아 다닙니다
    Comment[ku]=Li torê bigere
    Comment[lt]=Naršykite internete
    Comment[nb]=Surf på nettet
    Comment[nl]=Verken het internet
    Comment[nn]=Surf på nettet
    Comment[no]=Surf på nettet
    Comment[pl]=Przeglądanie stron WWW
    Comment[pt]=Navegue na Internet
    Comment[pt_BR]=Navegue na Internet
    Comment[ro]=Navigați pe Internet
    Comment[ru]=Доступ в Интернет
    Comment[sk]=Prehliadanie internetu
    Comment[sl]=Brskajte po spletu
    Comment[sv]=Surfa på webben
    Comment[tr]=İnternet'te Gezinin
    Comment[ug]=دۇنيادىكى توربەتلەرنى كۆرگىلى بولىدۇ
    Comment[uk]=Перегляд сторінок Інтернету
    Comment[vi]=Để duyệt các trang web
    Comment[zh_CN]=浏览互联网
    Comment[zh_TW]=瀏覽網際網路
    Exec=/opt/firefox-nightly-latest-fr/firefox/firefox %u
    Icon=firefox-nightly
    Terminal=false
    Type=Application
    MimeType=text/html;text/xml;application/xhtml+xml;application/vnd.mozilla.xul+xml;text/mml;x-scheme-handler/http;x-scheme-handler/https;
    StartupNotify=true
    StartupWMClass=firefox-nightly
    Categories=Network;WebBrowser;
    Keywords=web;browser;internet;
    Actions=new-window;new-private-window;
    
    [Desktop Action new-window]
    Name=New Window
    Name[ach]=Dirica manyen
    Name[af]=Nuwe venster
    Name[an]=Nueva finestra
    Name[ar]=نافذة جديدة
    Name[as]=নতুন উইন্ডো
    Name[ast]=Ventana nueva
    Name[az]=Yeni Pəncərə
    Name[be]=Новае акно
    Name[bg]=Нов прозорец
    Name[bn_BD]=নতুন উইন্ডো (N)
    Name[bn_IN]=নতুন উইন্ডো
    Name[br]=Prenestr nevez
    Name[brx]=गोदान उइन्ड'(N)
    Name[bs]=Novi prozor
    Name[ca]=Finestra nova
    Name[cak]=K'ak'a' tzuwäch
    Name[cs]=Nové okno
    Name[cy]=Ffenestr Newydd
    Name[da]=Nyt vindue
    Name[de]=Neues Fenster
    Name[dsb]=Nowe wokno
    Name[el]=Νέο παράθυρο
    Name[en_GB]=New Window
    Name[en_US]=New Window
    Name[en_ZA]=New Window
    Name[eo]=Nova fenestro
    Name[es_AR]=Nueva ventana
    Name[es_CL]=Nueva ventana
    Name[es_ES]=Nueva ventana
    Name[es_MX]=Nueva ventana
    Name[et]=Uus aken
    Name[eu]=Leiho berria
    Name[fa]=پنجره جدید
    Name[ff]=Henorde Hesere
    Name[fi]=Uusi ikkuna
    Name[fr]=Nouvelle fenêtre
    Name[fy_NL]=Nij finster
    Name[ga_IE]=Fuinneog Nua
    Name[gd]=Uinneag ùr
    Name[gl]=Nova xanela
    Name[gn]=Ovetã pyahu
    Name[gu_IN]=નવી વિન્ડો
    Name[he]=חלון חדש
    Name[hi_IN]=नया विंडो
    Name[hr]=Novi prozor
    Name[hsb]=Nowe wokno
    Name[hu]=Új ablak
    Name[hy_AM]=Նոր Պատուհան
    Name[id]=Jendela Baru
    Name[is]=Nýr gluggi
    Name[it]=Nuova finestra
    Name[ja]=新しいウィンドウ
    Name[ja_JP-mac]=新規ウインドウ
    Name[ka]=ახალი ფანჯარა
    Name[kk]=Жаңа терезе
    Name[km]=បង្អួចថ្មី
    Name[kn]=ಹೊಸ ಕಿಟಕಿ
    Name[ko]=새 창
    Name[kok]=नवें जनेल
    Name[ks]=نئئ وِنڈو
    Name[lij]=Neuvo barcon
    Name[lo]=ຫນ້າຕ່າງໃຫມ່
    Name[lt]=Naujas langas
    Name[ltg]=Jauns lūgs
    Name[lv]=Jauns logs
    Name[mai]=नव विंडो
    Name[mk]=Нов прозорец
    Name[ml]=പുതിയ ജാലകം
    Name[mr]=नवीन पटल
    Name[ms]=Tetingkap Baru
    Name[my]=ဝင်းဒိုးအသစ်
    Name[nb_NO]=Nytt vindu
    Name[ne_NP]=नयाँ सञ्झ्याल
    Name[nl]=Nieuw venster
    Name[nn_NO]=Nytt vindauge
    Name[or]=ନୂତନ ୱିଣ୍ଡୋ
    Name[pa_IN]=ਨਵੀਂ ਵਿੰਡੋ
    Name[pl]=Nowe okno
    Name[pt_BR]=Nova janela
    Name[pt_PT]=Nova janela
    Name[rm]=Nova fanestra
    Name[ro]=Fereastră nouă
    Name[ru]=Новое окно
    Name[sat]=नावा विंडो (N)
    Name[si]=නව කවුළුවක්
    Name[sk]=Nové okno
    Name[sl]=Novo okno
    Name[son]=Zanfun taaga
    Name[sq]=Dritare e Re
    Name[sr]=Нови прозор
    Name[sv_SE]=Nytt fönster
    Name[ta]=புதிய சாளரம்
    Name[te]=కొత్త విండో
    Name[th]=หน้าต่างใหม่
    Name[tr]=Yeni pencere
    Name[tsz]=Eraatarakua jimpani
    Name[uk]=Нове вікно
    Name[ur]=نیا دریچہ
    Name[uz]=Yangi oyna
    Name[vi]=Cửa sổ mới
    Name[wo]=Palanteer bu bees
    Name[xh]=Ifestile entsha
    Name[zh_CN]=新建窗口
    Name[zh_TW]=開新視窗
    Exec=/opt/firefox-nightly-latest-fr/firefox/firefox --new-window %u
    
    [Desktop Action new-private-window]
    Name=New Private Window
    Name[ach]=Dirica manyen me mung
    Name[af]=Nuwe privaatvenster
    Name[an]=Nueva finestra privada
    Name[ar]=نافذة خاصة جديدة
    Name[as]=নতুন ব্যক্তিগত উইন্ডো
    Name[ast]=Ventana privada nueva
    Name[az]=Yeni Məxfi Pəncərə
    Name[be]=Новае акно адасаблення
    Name[bg]=Нов прозорец за поверително сърфиране
    Name[bn_BD]=নতুন ব্যক্তিগত উইন্ডো
    Name[bn_IN]=নতুন ব্যক্তিগত উইন্ডো
    Name[br]=Prenestr merdeiñ prevez nevez
    Name[brx]=गोदान प्राइभेट उइन्ड'
    Name[bs]=Novi privatni prozor
    Name[ca]=Finestra privada nova
    Name[cak]=K'ak'a' ichinan tzuwäch
    Name[cs]=Nové anonymní okno
    Name[cy]=Ffenestr Breifat Newydd
    Name[da]=Nyt privat vindue
    Name[de]=Neues privates Fenster
    Name[dsb]=Nowe priwatne wokno
    Name[el]=Νέο παράθυρο ιδιωτικής περιήγησης
    Name[en_GB]=New Private Window
    Name[en_US]=New Private Window
    Name[en_ZA]=New Private Window
    Name[eo]=Nova privata fenestro
    Name[es_AR]=Nueva ventana privada
    Name[es_CL]=Nueva ventana privada
    Name[es_ES]=Nueva ventana privada
    Name[es_MX]=Nueva ventana privada
    Name[et]=Uus privaatne aken
    Name[eu]=Leiho pribatu berria
    Name[fa]=پنجره ناشناس جدید
    Name[ff]=Henorde Suturo Hesere
    Name[fi]=Uusi yksityinen ikkuna
    Name[fr]=Nouvelle fenêtre de navigation privée
    Name[fy_NL]=Nij priveefinster
    Name[ga_IE]=Fuinneog Nua Phríobháideach
    Name[gd]=Uinneag phrìobhaideach ùr
    Name[gl]=Nova xanela privada
    Name[gn]=Ovetã ñemi pyahu
    Name[gu_IN]=નવી ખાનગી વિન્ડો
    Name[he]=חלון פרטי חדש
    Name[hi_IN]=नयी निजी विंडो
    Name[hr]=Novi privatni prozor
    Name[hsb]=Nowe priwatne wokno
    Name[hu]=Új privát ablak
    Name[hy_AM]=Սկսել Գաղտնի դիտարկում
    Name[id]=Jendela Mode Pribadi Baru
    Name[is]=Nýr huliðsgluggi
    Name[it]=Nuova finestra anonima
    Name[ja]=新しいプライベートウィンドウ
    Name[ja_JP-mac]=新規プライベートウインドウ
    Name[ka]=ახალი პირადი ფანჯარა
    Name[kk]=Жаңа жекелік терезе
    Name[km]=បង្អួចឯកជនថ្មី
    Name[kn]=ಹೊಸ ಖಾಸಗಿ ಕಿಟಕಿ
    Name[ko]=새 사생활 보호 모드
    Name[kok]=नवो खाजगी विंडो
    Name[ks]=نْو پرایوٹ وینڈو
    Name[lij]=Nêuvo barcón privòu
    Name[lo]=ເປີດຫນ້າຕ່າງສວນຕົວຂື້ນມາໃຫມ່
    Name[lt]=Naujas privataus naršymo langas
    Name[ltg]=Jauns privatais lūgs
    Name[lv]=Jauns privātais logs
    Name[mai]=नया निज विंडो (W)
    Name[mk]=Нов приватен прозорец
    Name[ml]=പുതിയ സ്വകാര്യ ജാലകം
    Name[mr]=नवीन वैयक्तिक पटल
    Name[ms]=Tetingkap Persendirian Baharu
    Name[my]=New Private Window
    Name[nb_NO]=Nytt privat vindu
    Name[ne_NP]=नयाँ निजी सञ्झ्याल
    Name[nl]=Nieuw privévenster
    Name[nn_NO]=Nytt privat vindauge
    Name[or]=ନୂତନ ବ୍ୟକ୍ତିଗତ ୱିଣ୍ଡୋ
    Name[pa_IN]=ਨਵੀਂ ਪ੍ਰਾਈਵੇਟ ਵਿੰਡੋ
    Name[pl]=Nowe okno prywatne
    Name[pt_BR]=Nova janela privativa
    Name[pt_PT]=Nova janela privada
    Name[rm]=Nova fanestra privata
    Name[ro]=Fereastră privată nouă
    Name[ru]=Новое приватное окно
    Name[sat]=नावा निजेराक् विंडो (W )
    Name[si]=නව පුද්ගලික කවුළුව (W)
    Name[sk]=Nové okno v režime Súkromné prehliadanie
    Name[sl]=Novo zasebno okno
    Name[son]=Sutura zanfun taaga
    Name[sq]=Dritare e Re Private
    Name[sr]=Нови приватан прозор
    Name[sv_SE]=Nytt privat fönster
    Name[ta]=புதிய தனிப்பட்ட சாளரம்
    Name[te]=కొత్త ఆంతరంగిక విండో
    Name[th]=หน้าต่างส่วนตัวใหม่
    Name[tr]=Yeni gizli pencere
    Name[tsz]=Juchiiti eraatarakua jimpani
    Name[uk]=Приватне вікно
    Name[ur]=نیا نجی دریچہ
    Name[uz]=Yangi maxfiy oyna
    Name[vi]=Cửa sổ riêng tư mới
    Name[wo]=Panlanteeru biir bu bees
    Name[xh]=Ifestile yangasese entsha
    Name[zh_CN]=新建隐私浏览窗口
    Name[zh_TW]=新增隱私視窗
    Exec=/opt/firefox-nightly-latest-fr/firefox/firefox --private-window %u" > firefox-nightly-latest-fr.desktop

    echo "{
    "policies": 
       {
         "DisableAppUpdate": true
        }
    }" > policies.json
}

package() {
	echo creating package...
	echo decompressing tarball...
	mkdir -p $pkgdir/opt/firefox-nightly-latest-fr/
	tar xvjf $srcdir/firefox-nightly-latest-fr.tar.bz2 -C $pkgdir/opt/firefox-nightly-latest-fr
	echo DONE
	echo copying logo...
	mkdir -p $pkgdir/usr/share/pixmaps/
	cp $srcdir/firefox-nightly.png $pkgdir/usr/share/pixmaps/
	echo DONE
	echo copying desktop entry...
	mkdir -p $pkgdir/usr/share/applications
	cp $srcdir/firefox-nightly-latest-fr.desktop $pkgdir/usr/share/applications
	echo DONE
	echo creating symblink to /usr/bin...
	mkdir -p $pkgdir/usr/bin
	ln -s /opt/firefox-nightly-latest-fr/firefox/firefox $pkgdir/usr/bin/firefox-nightly-latest-fr
	echo DONE
	echo copying policies.json to disable updates...
	cp $srcdir/policies.json $pkgdir/opt/firefox-nightly-latest-fr/firefox/
	echo DONE
	echo package created! It may take some time to compress it later...
}
